import { Ref } from 'vue';

export const tsNameOf = <T>(name: keyof T) => name;

export type IsRef<T> = T | Ref<T>;

export type MaybeElementRef = IsRef<HTMLElement | SVGElement | undefined | null>
