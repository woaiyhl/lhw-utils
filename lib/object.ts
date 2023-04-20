import { isEmpty } from './judge'
import _,{ cloneDeep } from 'lodash'
/**
 * http:www.woaini.com?name=lhw&age=12
 * 
 * getQueryObject(url)	 // { name: 'lhw',age: '12' }
 */
export function getQueryObject(url?: string | undefined):Record<string,string> {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * 
 * objectToQueryString({ page: '1', size: '2kg', key: undefined });
 * 
 * ?page=1&size=2kg'
 *
 */
export const objectToQueryString = (queryParameters?: Record<string,any> | undefined):string => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
        const symbol = queryString.length === 0 ? '?' : '&';
        queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';
        return queryString;
      }, '')
    : '';
};


/**
 * 
 * 传入一个对象，删除对象里面值为null、undefined,''的这些无效的字段
 * 在业务中，数字0和布尔false属于有效值
 */
export const deletePrimitiveInvalid = (obj:Record<string,any>):Record<string,any> => {
  let deepCloneObj = cloneDeep(obj)
	Object.keys(deepCloneObj).forEach(k => {
	    if (!deepCloneObj[k] && deepCloneObj[k] !== 0 && deepCloneObj[k] !== false) {
	        delete deepCloneObj[k]
	    }
    })
	return deepCloneObj;
}

/**
 * 
 * 传入一个对象，删除对象里面值为null、undefined,'',[],{} 的这些无效的字段
 * 在业务中，数字0和布尔false属于有效值
 */
export const deleteInvalid = (obj:Record<string,any>):Record<string,any> => {
  let deepCloneObj = cloneDeep(obj)
	Object.keys(deepCloneObj).forEach(k => {
	    if (isEmpty(deepCloneObj[k])) {
	        delete deepCloneObj[k]
	    }
    })
	return deepCloneObj;
}

/**
 * 
 * 传入一个对象，递归删除对象里面值为null、undefined,'',[],{} 的这些无效的字段
 * 在业务中，数字0和布尔false属于有效值
 */

export const deleteInvalidDeep = (obj:Record<string,any>):Record<string,any> => {
  return function prune(current) {
    _.forOwn(current, function (value:any, key:string) {
      if (_.isUndefined(value) || _.isNull(value) || _.isNaN(value) ||
        (_.isString(value) && _.isEmpty(value)) ||
        (_.isObject(value) && _.isEmpty(prune(value)))) {

        delete current[key];
      }
    });
    // remove any leftover undefined values from the delete 
    // operation on an array
    if (_.isArray(current)) _.pull(current, undefined);

    return current;

  }(_.cloneDeep(obj));  // Do not modify the original object, create a clone instead
}
