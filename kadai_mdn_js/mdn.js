const today = new Date(); // 変数名を統一
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので1を加える
const day = today.getDate();

console.log(year + '年' + month + '月' + day + '日'); // 変数を正しく使用
