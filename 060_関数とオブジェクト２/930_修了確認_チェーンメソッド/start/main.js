/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

class Calculator {
	set(value) {
		if (this.value == null) {
			this.value = value;
			return this;
		}
		this.formulaFun(value);
		this.logValue();
		return this;
	}
	minus() {
		this.formulaFun = (_minus) => this.value -= _minus;
		return this;
	}
	mutiply() {
		this.formulaFun = (_mutiply) => this.value *= _mutiply;
		return this;
	}
	divide() {
		this.formulaFun = (_divide) => this.value /= _divide;
		return this;
	}
	plus() {
		this.formulaFun = (_plus) => this.value += _plus;
		return this;
	}
	logValue() {
		console.log(this.value);
	}
}
const calc = new Calculator();

calc.set(10)
	.minus()
	.set(3)
	.mutiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2)
