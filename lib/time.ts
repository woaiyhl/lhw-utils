/**
 * 时间格式化
 * @param time 
 * @param format 
 * @returns 
 */
export const parseTime = (time:any = Date.now(), format = '{y}-{m}-{d} {h}:{i}:{s}'): string => {
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * 时间格式化简单处理
 */

export const simpleTimeFormat = () => {
  return new Date().toISOString().split('T')[0]
}
/**
 * 获取明天
 */
export const getTomorrow = () => {
  let d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
};

/**
 *  时间字符串分隔
 * @param timeStr 
 * @param operator 
 * @returns 
 */
export const timeFormat = (timeStr = '20201202', operator = '-') => {
  let i = 0;
  return `xxxx${operator}xx${operator}xx`.replace(/x/g, () => timeStr[i++]);
}

/**
 * 返回当前24小时制时间的字符串
 * getColonTimeFromDate(new Date()); // "08:38:00"
 */
export const getColonTimeFromDate = (date: Date): string => date.toTimeString().slice(0, 8);

/**
 * 当前当前时间在一年的第几天
 * 
 */
export const dayOfYear = (date: any = new Date()): number => Math.floor((date - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);



