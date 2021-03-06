# 要件概要

* ルビ振り
* 傍点（圏点）
* 縦書き

* 字数カウント

* CSS動的設定
* CSSジェネレータ
* HTMLのWISYWIGエディタ

* 保存
	* ボタン
	* DnD
* アップロード
* 確認（保存する前に終了したとき）
	* 確認せずlocalStorageに保存するよう切替するオプションも欲しい
* ロード
	* DnD

* プロジェクト
	* ディレクトリ（複数ファイル）
	* リポジトリ
	* テンプレート
		* 日記
		* 戯曲
			* 掲示板風
			* チャット風
			* LINE風
			* 一言ひとりごと
		* 小説
			* １ファイル完結
			* リスト構造
				* 多ファイル連載
		* 実用書
			* ツリー構造
				* 手順書
				* 作業履歴
	* 関連付け
		* 誰の関連付けか
			* 作者
			* 各読者
			* 共有
		* 関連
			* 著者
			* 公開日時
			* 最終更新日時
			* カテゴライズ
			* タギング
			* 属性
				* 関連作品
					* 続編、外伝、スピンオフ
* ファイルジェネレータ
	* 固定HTML（MarkdownからHTMLファイルを出力）
	* 動的ロード（外部Markdownをロードし動的にHTML化）



# 優先順位

項目|理由
----|----
ルビ|字が読めないストレス大
保存|ファイルでローカル保存しないとエディタの意味ない
字数カウント|物書きの練習。指標
傍点|簡単
縦書き|CSSだけでなくHTMLも変わるため実装苦労
CSS動的設定|縦書きも含めるため縦書きより低優先
CSSジェネレータ|読者より作者側ツールのため低優先
アップロード|GitHub, GitHubPage、GitBookにアップロード（バックアップ、ファイル公開、HTML公開）

# 要件詳細

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

