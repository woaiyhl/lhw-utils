
export const getRandomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomIntArrayInRange = (min: number, max: number, n: number = 1): number[] =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

export const randomUniqueIntArrInRange = (min: number, max: number, n = 1): number[] => {
  if (n > max - min + 1) {
    throw new Error(`范围内的整数个数不够取到${n}`)
  }
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1) + min)
    for (let j = 0; j < i; j++) {
      if (arr[j] == arr[i]) {
        i--
      }
    }
  }
  return arr
}

/**
 * 保留n位小数，四舍五入不补0
 */
export const round = (num: number, n: number = 2): number => {
  return Math.round(parseFloat(String(num)) * Math.pow(10, n)) / (Math.pow(10, n))
}

/**
 * 保留n位小数，四舍五入并补0
 */
export const roundWithZero = (num: number, n: number = 2): number | string => {
  let value = Math.round(parseFloat(String(num)) * Math.pow(10, n)) / Math.pow(10, n) + '';
  return value.includes('.') ? value + '0'.repeat(n - value.split('.')[1].length) : value + '.' + '0'.repeat(n);
}

/**
 * 数字转化为中文数字
 * @param value 
 * @returns 
 */
export const intToChinese = (value: number): string => {
  const str = String(value);
  const len = str.length - 1;
  const idxs = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'];
  const num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {
    let pos = 0;
    if ($1[0] !== '0') {
      pos = len - idx;
      if (idx == 0 && $1[0] == 1 && idxs[len - idx] == '十') {
        return idxs[len - idx];
      }
      return num[$1[0]] + idxs[len - idx];
    } else {
      let left = len - idx;
      let right = len - idx + $1.length;
      if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
        pos = left - left % 4;
      }
      if (pos) {
        return idxs[pos] + num[$1[0]];
      } else if (idx + $1.length >= len) {
        return '';
      } else {
        return num[$1[0]]
      }
    }
  });
}

/**
 * 数字转化为大写金额
 */
export const digitUppercase = (n: number): string => {
  const fraction = ['角', '分'];
  const digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  n = Math.abs(n);
  let s = '';
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
};

/**
 * 匹配正整数
 * @param val 
 * @returns 
 */
export const isPositiveNum = (val: number | string): boolean => {
  return /^[1-9]\d*$/.test(String(val));
};

/**
 * 匹配负整数
 * @param val 
 * @returns 
 */
export const isNegativeNum = (val: number | string): boolean => {
  return /^-[1-9]\d*$/.test(String(val));
};

/**
 * 匹配整数
 * @param val 
 * @returns 
 */
export const isInteger = (val: number | string): boolean => {
  return /^(-|\+)?\d+$/.test(String(val));
};

/**
 * 匹配非负浮点数
 * @param val 
 * @returns 
 */
export const isNotNegativeFloatNum = (val: number | string): boolean => {
  return /^\d+(\.\d+)?$/.test(String(val));
};

/**
 * 千分位逗号隔开 (金钱格式化)
 * @param num 
 * @returns 
 * 11122233.4356 -> 11,222,333.4356 (不会影响小数)
 */
export const toThousandFilter = (num: number | string): string => {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * 有小数的，保留n位，不够补0,千分位逗号隔开 (金钱格式化)
 * @param num 
 * @returns 
 * 11122233.4356 -> 11,222,333.44
 */
export const roundToThousandFilter = (num: number): string => roundWithZero(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')


