import { isEqual,uniqWith } from 'lodash'

/**
 * 数组分割
 * 
 * const arr = [1, 2, 3, 4, 5];
 *  chunk(arr, 2); // [[1, 2], [3, 4], [5]]
 */
export const chunk = (arr = [], size: number = 1) => {
  return arr.length
    ? arr.reduce((t, v) => (t[t.length - 1].length === size ? t.push([v]) : t[t.length - 1].push(v), t), [[]])
    : [];
}

/**
 * 检查数组各项相等
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
export const allEqual = (arr: any[]): boolean => arr.every(val => val === arr[0]);

/**
 * 两个数组差集
 * 
 */
export const difference = (arr: any[] = [], oarr: any[] = []): any[] => {
  return arr.reduce((t, v) => (!oarr.includes(v) && t.push(v), t), []);
}

/**
 * 数组成员个数统计
 * @param arr 
 * @returns 
 * const arr = [0, 1, 1, 2, 2, 2];
 *  countMembersNumber(arr); // { 0: 1, 1: 2, 2: 3 }
 */
export const countMembersNumber = (arr: any[] = []): Object => {
  return arr.reduce((t, v) => (t[v] = (t[v] || 0) + 1, t), {});
}
/**
 * 
 * @param arr 
 * @param val 
 * @returns 
 * countValueNumber([1, 1, 2, 1, 2, 3], 1); // 3
 */
export const countValueNumber = <T>(arr: T[], val: T): number => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

/**
 * 数组成员位置记录
 * @param val 
 * @returns 
 * @param arr 
 * const arr = [2, 1, 5, 4, 2, 1, 6, 6, 7];
 * position(arr, 2); // [0, 4]
 */
export const position = <T>(arr: T[] = [], val: T): number[] => {
  return arr.reduce((t: number[], v, i: number) => (v === val && t.push(i), t), []);
}

/**
 * 生成树形结构
 * @param items 
 * @param id 
 * @param link 
 * @returns 
 */
export const nest = (items: any[], id = null, link = 'parent_id'): any[] =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));

/**
 * 基本数据类型严格去重
 * @param arr 
 * @returns 
 */
export const unique = <T>(arr: T[]):T[] => [...new Set(arr)]

/**
 * 复杂去重
 * @param arr 
 * @returns 
 */
 export const uniqueDeep = <T>(arr:T[]):T[] => uniqWith(arr,isEqual)