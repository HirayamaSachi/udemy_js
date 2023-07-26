/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 * 
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 * 
 * を内部で行います。
 * 
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 * 
 **************************************** 
 * １．一般ユーザーがログインした時。
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 * 
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */
function loginController(user) {
  if (user.login()
    && user.checkRoll()
    && user.redirects()) {
    console.log('login success');
  } else {
    console.log('login failed');
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.roll = 'normal';
    this.redirect = '';
  }
  login() {
    console.log(`User: ${this.name}`);
    return true;
  }
  checkRoll() {
    console.log(`you have ${this.roll} roll`);
    return true;
  }
  redirects() {
    console.log(`/${this.redirect}`);
    return true;
  }
}

class AdminUser extends User {
  constructor(name) {
    super(name);
    this.roll = 'admin';
    this.redirect = 'admin';
  }
}


loginController(new User('Bob'));

loginController(new AdminUser('Bob'));
