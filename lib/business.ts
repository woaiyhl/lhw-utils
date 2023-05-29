/**
 * 获取图片宽高
 * 
 * @param file 
 * @returns 
 */
export const getImageSize = (file:any) => new Promise(resolve => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = res => {
      let image: HTMLImageElement = new Image();
      if (res.target && res.target.result) {
          image.src = res.target.result as string;
          image.onload = () => {
              resolve({ width: image.width, height: image.height });
          };
      }
  };
});

/*
 * 根据url下载文件，文件名可修改
 * @param {下载链接} url
 * @param {文件名称} name
 */
export const downLoadFile = function(url:string, name:string) {
  let type = url.substring(url.lastIndexOf('.'), url.length);
  new Promise(resolve => {
      const xhr = new XMLHttpRequest();
      // 避免 200 from disk cache
      url = url + `?r=${Math.random()}`;
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
          if (xhr.status === 200) {
              resolve(xhr.response);
          }
      };
      xhr.send();
  }).then((blob:any) => {
      if ((window.navigator as any).msSaveOrOpenBlob) {
          (navigator as any).msSaveBlob(blob, name);
      } else {
          const anchor = document.createElement('a');
          const body:any = document.querySelector('body');
          anchor.href = window.URL.createObjectURL(blob);
          anchor.download = name.indexOf(type) > -1 ? name : name + type;
          anchor.style.display = 'none';
          body.appendChild(anchor);
          anchor.click();
          body.removeChild(anchor);
          window.URL.revokeObjectURL(anchor.href);
      }
  });
};
