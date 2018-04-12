// でんでんマークダウン式ルビ記法からHTMLテキストに変換する
// 参考
// 例
//   でんでん https://conv.denshochan.com/markdown#ruby
//     {漢字|かんじ}→<ruby>漢字<rt>かんじ</rt></ruby>
//     {漢字|かん|じ}→<ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby>
//     ※傍点(圏点)書式はない。{漢字}とすると傍点としたい。html5,css3でいうtext-emphasis。
//     {漢字}→<strong style="text-emphasis: filled circle;">漢字</strong>
//   小説家になろう https://syosetu.com/man/ruby/
//     |山田太郎《やまだたろう》
//     山田太郎(やまだたろう)		前:漢字, 後:ひらがな/カタカナ の場合のみ
//     山田太郎｜(やまだたろう)		ルビ回避
//     |山田《やまだ》|太郎《たろう》
//   青空文庫 http://www.aozora.gr.jp/KOSAKU/MANUAL_2.html
//     |山田太郎《やまだたろう》
//     山田太郎《やまだたろう》		前:漢字, 後:ひらがな/カタカナ の場合のみ
//   カクヨム https://kakuyomu.jp/help/entry/notation
//     (青空文庫と同様)　《《圏点》》　が使える。
//   ピクシブ https://www.pixiv.net/info.php?id=3065
//     [[rb:pixiv > ピクシブ]]
// 例外
//   * {の前に\か`があった場合。それぞれエスケープ文字、コード<code>として解釈される。
//   * <pre>, <code>内に{があった場合。
// 呼出例
//   * $('#target').toRuby()
// 補足
//   * 指定要素のテキストノードを変換対象とする
//     * 引数はhtmlCodeとする。markdownCodeではない。<pre>, <code>内の変換を避けるため。
(function(window) {
	window.novel = window.novel || {};
	window.novel.formatter = window.novel.formatter || {};
	window.novel.formatter.ruby = window.novel.formatter.ruby || {};
	window.novel.formatter.ruby.md2html = window.novel.formatter.ruby.md2html || {};

	window.novel.formatter.ruby.md2html.denden = function(src) {
		//var src = editor.getSession().getValue();
		console.log(src);
		var m = src.match(/{[^}]*}/gm);
		if (null === m) { return src; }

		console.log(m);
		for (var i=0; i<m.length; i++) {
			html = transform(m[i]);
			//console.log(m[i], html);
			src = src.replace(m[i], html);
			//console.log(src);
		}
		return src;
    };

	// 変換する。markdownをHTMLに。
	// {漢字} 傍点(圏点)。ここでは無視。
	// {漢字|かんじ} 1箇所のみ<rt>
	// {漢字|かん|じ} 1漢字ずつ<rt>
	// {漢字|か|ん|じ} エラー。漢字の数より多い分割数ならエラー。
	function transform(markdown) {
	//function md2html(markdown) {
	//var toRuby = function(markdown) {
		target = markdown.slice(1, -1);
		items = target.split("|");
		//console.log(items, items[0], items[0].length, items.length);
		
		if (1 == items.length) { return markdown; } // 傍点
		else if (2 == items.length) { // 全体ルビ
			html = "<ruby>";
			html += items[0];
			html += "<rt>";
			html += items[1];
			html += "</rt>";
			html += "</ruby>";
			return html;
		}
		else { // 1字ずつルビ
			if (items[0].length != items.length - 1) { // エラー
				console.log("全体または1字ずつルビを振ってください。元字の字数とルビの件数が合いません。: " + markdown);
				return null;
			}
			html = "<ruby>";
			for (var i=0; i<items.length - 1; i++) {
				html += items[0][i];
				html += "<rt>";
				html += items[i+1];
				html += "</rt>";
			}
			html += "</ruby>";
			return html;
		}
	};
})(window);
