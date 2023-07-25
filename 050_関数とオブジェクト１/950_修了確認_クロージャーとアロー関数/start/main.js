/**
 * 以下のコードはクロージャーのレクチャーで作成したコードです。
 * これをアロー関数を用いてなるべく短くなるように記載してみてください。
 * 
 * 問題１：
 * addNumberFactoryを短く書き直してみましょう。
 */
addNumberFactory = num => value => num + value;

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);

/**
 * 問題２：
 * incrementFactoryを短く書き直してみましょう。
 */
incrementFactory = _ => {
    let num = 0;
    const a = _ => {
        num = num + 1;
        console.log(num);
    }
    return a;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();
