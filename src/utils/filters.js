//事件过滤器
// let formatDate = function (date, fmt){
//     if(typeof(date)!= 'Date'){
//       date = new Date(date);
//     }
//     if (/(y+)/.test(fmt)) {
//       fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
//     }
//     let o = {
//       'M+': date.getMonth() + 1,
//       'd+': date.getDate(),
//       'h+': date.getHours(),
//       'm+': date.getMinutes(),
//       's+': date.getSeconds()
//     };
//     for (let k in o) {
//       if (new RegExp(`(${k})`).test(fmt)) {
//         let str = o[k] + '';
//         fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
//       }
//     }
//     return fmt;
//   };
   
//   function padLeftZero(str) {
//     return ('00' + str).substr(str.length);
//   }
   
  //用于处理浮点数小数位数
  let toFixed = function(val){
    return Number(val).toFixed(2);
  };
   
  //加密电弧号码  185****2563
  let privateMobile = function(mobile){
    if (mobile) {
      return mobile.replace(/(\d{3})\d{3,4}(\d{3,4})/, '$1****$2');
    }
  };
   
  export default {
    // formatDate,
    toFixed,
    privateMobile,
  }