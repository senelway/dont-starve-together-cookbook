import routes from '@/constants/routes';
import localization from '@/constants/localization';
import tooltipLocalize from '@/constants/tooltipLocalize';

declare module 'vue/types/vue' {
  interface VueConstructor {
    $enumRoutes: keyof typeof routes;
    $enumLocalization: keyof typeof localization;
    $enumTooltipLocalization: keyof typeof tooltipLocalize;
  }
}
