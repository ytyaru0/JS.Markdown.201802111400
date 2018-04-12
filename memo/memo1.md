# JavaScript名前空間

## 案

* Aceプラグイン
* jQueryプラグイン
* 独自名前空間

独自名前空間でAPI実装する。理由は以下。

1. 本当はAceプラグインとして作成したかったが、方法がわからない
1. jQueryプラグインとして作成してみたが、引数、戻り値、どちらもHtmlElementしか受け付けない

## 名前空間案

* novel
	* counter
		* count
		* aggregate
	* formatter
		* ruby
			* MD→HTML
				* でんでん
				* なろう
				* 青空文庫
				* カクヨム
				* pixiv
			* HTML→MD
			* HTML→TEXT
			* MD→TEXT
				* ルビ無視
				* ルビ()内
		* emphasis（傍点（圏点））
		* vertical-lr
	* style
		* set
		* generate
	* host
		* local
		* gitbook
		* github
	* util
		* date
			* toString
			* toDate


## インタフェース

### counter

```javascript
var c = novel.counter({
	halfwidthSpace: 0,	// 半角スペース 
	tab: 0, 
	newline: 0,
	fullwidthSpace: 0, // 全角スペース　Em Space
	period: 0, // 句点 (. 。)
	comma: 0, // 読点 (, 、)
	colon: 0, // :：
	semicolon: 0, // ;；
	question: 0, // ?？
	exclamation: 0, // !！
});
c.count(); // 文字数を返す
c.aggregate(); // 集計数を返す
```

略記|内容
----|----
space|半角、全角の2つ
whitespace|space, tab, newlilneの3つ
punctuation|句点、読点の2つ。
symbolicCharacter|句読点、！？などを含む記号すべて。数字、英字、漢字、ひらがな、カタカナ、外国語以外の記号すべて。 

面倒だから直接指定したい。

```javascript
novel.counter({off: "!?", on: ".,　 	\n"})
```

制御コードをどうするか。

### aggregate()

* 内訳
	* 字種
		* 数字
			* アラビア数字
			* ギリシャ数字
			* 漢数字（漢字のカウントと被るため対象外にすべき？）
		* 英字
			* 半角
				* 小文字
				* 大文字
			* 全角
				* 小文字
				* 大文字
		* 記号
			* 句点
			* 読点
			* 他、多い順。
		* 日本語
			* 漢字
			* ひらがな
			* カタカナ
	* 形態素（多い順）
		* 単語
		* 文節
	* 構成
		* 段落（パラグラフ）
		* 見出し
			* 総数
			* 最大深度
	* 文種
		* 会話文
		* 地の文

### formatter

```javascript
```


## ルビ振り

```
漢(かん)字(じ)
```
```html
<ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby>
```

これを簡単に記述できて読みやすい書式にしたい。既存のローカル書式が多数あるが、でんでんマークダウンを採用したい。

* 統一されており覚えやすい
* 字数が少なく見やすい

```
{漢字|かん|じ}
```

### でんでん https://conv.denshochan.com/markdown#ruby

```
{漢字|かんじ}→<ruby>漢字<rt>かんじ</rt></ruby>
{漢字|かん|じ}→<ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby>
※傍点(圏点)書式はない。{漢字}とすると傍点としたい。html5,css3でいうtext-emphasis。
{漢字}→<strong style="text-emphasis: filled circle;">漢字</strong>
```

### 小説家になろう https://syosetu.com/man/ruby/

```
|山田太郎《やまだたろう》
山田太郎(やまだたろう)		前:漢字, 後:ひらがな/カタカナ の場合のみ
山田太郎｜(やまだたろう)		ルビ回避
|山田《やまだ》|太郎《たろう》
漢字(かんじ)
漢(かん)字(じ)
```

### 青空文庫 http://www.aozora.gr.jp/KOSAKU/MANUAL_2.html

```
|山田太郎《やまだたろう》
山田太郎《やまだたろう》		前:漢字, 後:ひらがな/カタカナ の場合のみ
```

### カクヨム https://kakuyomu.jp/help/entry/notation

```
(青空文庫と同様)　《《圏点》》　が使える。
```

### ピクシブ https://www.pixiv.net/info.php?id=3065

```
[[rb:pixiv > ピクシブ]]
```


## 傍点（圏点）


```
・・
強調したい。
```
```html
<strong style="text-emphasis: filled circle;">強調</strong>したい。
```

でんでんマークダウンには無かったが、以下の書式にしたい。

```
{強調}したい。
```

## 縦書き

縦書きは考慮すべきことが多数ある。横書きとは別のHTMLになる。

* 縦中横
* 英字回転

### 縦中横

```html
<span class="tcy">1945</span>年
```

数字を横書きにする。

### 英字回転

```html
<span class="alphabet-vartical">1945</span>年
```

左に90度回転して縦書きにする。

全体を縦書きにする`writing-mode: vertical-rl;`では英字を回転できないため、個別に対応する。

