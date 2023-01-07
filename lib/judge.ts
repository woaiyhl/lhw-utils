/**
 * 判断是否深层次相同
 * @param a 
 * @param b 
 * @param ignoreKeys 
 * @param debug 
 * @returns 
 */
export const isDeepEqual = (a: any, b: any, ignoreKeys: any, debug: any): boolean => {
  if (a === b) return true;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (a.constructor !== b.constructor) return false;

    let length;
    let i;
    let keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!isDeepEqual(a[i], b[i], ignoreKeys, debug)) return false;
      return true;
    }

    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      for (i of a.entries()) if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!isDeepEqual(i[1], b.get(i[0]), ignoreKeys, debug)) return false;
      return true;
    }

    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      for (i of a.entries()) if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      // @ts-ignore
      length = a.length;
      // @ts-ignore
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf && a.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && a.toString)
      return a.toString() === b.toString();

    // eslint-disable-next-line prefer-const
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      const key = keys[i];

      if (ignoreKeys?.includes(key)) continue;

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!isDeepEqual(a[key], b[key], ignoreKeys, debug)) {
        if (debug) {
          console.log(key);
        }
        return false;
      }
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
}

/**
 * 判断数据类型
 * @param tgt 
 * @param type 
 * @returns 
 */
export const dataType = (tgt: any, type: string): string | boolean => {
  const dataType = Object.prototype.toString.call(tgt)
    .replace(/\[object (\w+)\]/, "$1")
    .toLowerCase();

  return type ? dataType === type : dataType;
}

/**
 * 判断是否是基本数据类型
 * @param val 
 * @returns 
 */
export const isPrimitive = (val:any):boolean => val !== Object(val);

/**
 * 判断浏览器环境
 */
export const inBrowser = typeof window !== 'undefined'
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isAndroid = UA && UA.indexOf('android') > 0
export const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
