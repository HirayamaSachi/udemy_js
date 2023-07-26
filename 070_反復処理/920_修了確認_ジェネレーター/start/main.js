/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * 
 * の値が順番にコンソールに表示されます。
 */
// const genStep = function (args) {
//     let array = [args.min];
//     let result = args.min;
//     while (result <args.max) {
//         if (result == null) {
//             array.push(result);
//         }
//         result += args.step;
//         array.push(result);
//     }

//     return array;
// }

function *genStep(args) {
    for (let i = args.min; i <= args.max; i += args.step) {
        yield i;
    }
}

const it = genStep({ min: 4, max: 10, step: 2 });

for (let value of it) {
    console.log(value);
}

