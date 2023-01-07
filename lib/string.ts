/**
 * 翻转字符串
 * @param str 
 * @returns 
 */
export const reverseString = (str: string): string => [...str].reverse().join('');

/**
 * 字符串按字符排序
 * @param str 
 * @returns 
 */
export const sortCharactersInString = (str: string): string => [...str].sort((a, b) => a.localeCompare(b)).join('');

/**
 * 数字和中文混合排序
 * @param arr 
 * @returns 
 */

export const sortCharactersAndNumber = (arr: any[], compareField: string = 'name'): any[] => arr.sort((a, b) => a[compareField].localeCompare(b[compareField], 'zh-CN', { numeric: true }));

/**
 * 字符串驼峰化
 * @param str 
 * @returns 
 * toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'
 */
export const toCamelCase = (str: string): string => {
  const s =
    str &&
    (str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) as string[])
      .map((x: string) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

/**
 * 字符串短横线连接
 * @param str 
 * @returns 
 * toKebabCase('camelCase'); // 'camel-case'
 */
export const toKebabCase = (str: string): string =>
  str &&
  (str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) as string[])
    .map((x) => x.toLowerCase())
    .join('-');

/**
 * 字符串过长省略号代替
 * @param str 
 * @param num 
 * @returns 
 * 
 * truncateString('boomerang', 7); // 'boom...'
 */
export const truncateString = (str: string, num: number): string =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

/**
 * 字符串替换转义符
 * @param str 
 * @returns 
 * unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;');  '<a href="#">Me & you</a>'
 */
export const unescapeHTML = (str: string): string =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag =>
    ({
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&#39;': "'",
      '&quot;': '"'
    }[tag] || tag)
  );
/**
 * 将多行字符串拆分为行数组
 * @param str 
 * @returns 
 * splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
 */

export const splitLines = (str: string): string[] => str.split(/\r?\n/);

/**
 * 删除字符串中的HTML标签
 * @param str 
 * @returns 
 * stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
 */

export const stripHTMLTags = (str: string): string => str.replace(/<[^>]*>/g, '');

/**
 * 字符串分割成单词数组
 * @param str 
 * @param pattern 
 * @returns 
 * words('I love javaScript!!'); // ['I', 'love', 'javaScript']
 * words('python, javaScript & coffee'); // ['python', 'javaScript', 'coffee']
 */
export const words = (str: string, pattern: RegExp = /[^a-zA-Z-]+/): string[] => str.split(pattern).filter(Boolean);

/**
 * 字符串每个单词首字母大写
 * @param str 
 * @returns 
 */
export const titleize = (str: string): string => {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (c) {
    return c.toUpperCase();
  });
}

/**
 * 字符串某个单词首字母大写
 * @param param0 
 * @returns 
 */
export const capitalize = ([first, ...rest]: string): string => first.toUpperCase() + rest.join('');



