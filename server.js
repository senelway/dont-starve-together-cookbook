/* eslint-disable @typescript-eslint/ban-ts-comment */
const fs = require('fs');
const path = require('path');
const express = require('express');

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
const isProduction = process.env.NODE_ENV === 'production';
async function createServer(root = process.cwd(), isProd = isProduction) {
  const resolve = p => path.resolve(__dirname, p);
  const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : '';

  // @ts-ignore
  const manifest = isProd ? require('./dist/client/ssr-manifest.json') : {};

  const app = express();

  let vite;
  if (!isProd) {
    vite = await require('vite').createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: 'ssr',
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100
        }
      }
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use(require('compression')());
    app.use(
      require('serve-static')(resolve('dist/client'), {
        index: false
      })
    );
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template, render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.js')).render;
      } else {
        template = indexProd;
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        render = require('./dist/server/entry-server.js').render;
      }

      const ssrParams = {};
      const [appHtml, state, links, metaInfo] = await render(url, manifest, ssrParams);

      const html = template
        .replace(`<!--meta-header-info-->`, metaInfo ? metaInfo.headTags : '')
        .replace(`htmlAttrs`, metaInfo ? metaInfo.htmlAttrs : '')
        .replace(`bodyAttrs`, metaInfo ? metaInfo.bodyAttrs : '')
        .replace(`<!--preload-links-->`, links)
        .replace(`'<vuex-state>'`, state)
        .replace(`<!--app-html-->`, appHtml);

      res
        .status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(html);

    } catch (e) {
      vite && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(3000, () => {
      console.log('http://localhost:3000');
    })
  );
}

exports.createServer = createServer;
