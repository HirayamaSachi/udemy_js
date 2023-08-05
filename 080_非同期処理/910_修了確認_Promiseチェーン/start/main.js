/**
 * 問題：
 * myFetch関数を使って以下の「データ取得の流れ」の通り、
 * 順次JSONを取得し、取得したデータを加工して、
 * 以下のメッセージをコンソールに表示してください。
 * 
 * --Bob's timeline--
 * Tim says: waiting at station.
 * Sun says: go shopping?
 * John says: how's it going?
 * Sun says: drink?
 *
 ******************************   
 * データ取得の流れ
 * １．"user1.json"を取得（Bobのユーザー情報取得）
 * 
 * ２．"user1.json"のidの項目を元に
 *     `friendsOf${id}.json`でフレンド一覧を取得
 * 
 * ３．取得したフレンドのID（ユーザーID）を元に、
 * 　　`user${id}.json`で各ユーザーの情報を取得
 * 
 * ４．各ユーザー情報のlatestMsgIdが最後に投稿した
 * 　　メッセージのIDになりますので、そのidを用いて
 * 　　`message${friend.latestMsgId}.json`
 * 　　を取得。
 * 
 * １～４で取得したデータをもとにコンソールログに
 * タイムラインの文字列を作成してください。
 * 
 * ※await/asyncで記述してみてください。
 */
async function myFetch(fileName) {
	const response = await fetch(`../json/${fileName}`);
	const json = await response.json();
	return json;
}

async function log_msg(userId) {
	await myFetch(`user${userId}.json`)
		.then(__json => {
			console.log(`--${__json.name}'s timeline--`);
			return __json.id;
		});
	const friendsIds = await myFetch(`friendsOf${userId}.json`)
		.then(__json => {
			return __json.friendIds;
		});
	friendsIds.map((__userId) => {
		myFetch(`user${__userId}.json`)
			.then(__json => {
				const msgId=__json.latestMsgId;
				const userName=__json.name;
				return msgId;
			}).then(([userName,msgId])=>{
				myFetch(`message${msgId}.json`)
				.then((__json)=>{
					console.log(`${userName} says: ${__json.message}`);
				})
			})
	})
}

log_msg(1);
