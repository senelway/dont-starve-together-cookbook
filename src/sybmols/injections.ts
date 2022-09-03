import { inject } from 'vue';
import { ComputedRef, InjectionKey } from 'vue';
import { ProductDto, ReklDto } from '@/models/objects';

export const InjectionProductList: InjectionKey<ComputedRef<ProductDto[]>> = Symbol('productList');
export const InjectionReklList: InjectionKey<ComputedRef<ReklDto[]>> = Symbol('reklList');

export const injectStrict = <T>(key: InjectionKey<T>, fallback?: T) => {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`);
  }
  return resolved;
};
