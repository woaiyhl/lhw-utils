/**
 * 
 * @param url 
 * @returns 
 * http:www.woaini.com?name=lhw&age=12
 * getQueryObject(url)	 // { name: 'lhw',age: '12' }
 */
export function getQueryObject(url: string | undefined):Record<string,string> {
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