// 変数numに1〜100までランダムな整数を代入する
let num = Math.floor(Math.random() * 100) + 1;

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が3と5の倍数なら、3と5の倍数です
if(num % 15 === 0) {
    console.log('3と5の倍数です');
}

// 変数numの値が3の倍数なら、3の倍数です
else if (num % 3 === 0) {
    console.log('3の倍数です');
}

// 変数numの値が5の倍数なら、5の倍数です
else if (num % 5 === 0) {
    console.log('5の倍数です');
}

// それ以外の場合
else {
    console.log(num);
}
