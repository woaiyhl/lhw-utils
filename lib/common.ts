export { cloneDeep,debounce,throttle } from 'lodash'
import { isEqual,uniqWith } from 'lodash'
/**
 * 简单的深拷贝
 * @param value 
 * @returns 
 */
export const deepCopy = <T>(value: T[] | Record<string, any>): T[] | Record<string, any> => JSON.parse(JSON.stringify(value))

/**
 * 简单浅拷贝
 * @param src 
 * @returns 
 */
export const shallowClone = <T>(src: T[] | Record<string, any>): T[] | Record<string, any> => {
  return Array.isArray(src) ? [...src] : { ...src };
}

export const uniqueDeep = <T>(arr:T[]):T[] => uniqWith(arr,isEqual)

