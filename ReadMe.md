# このソフトウェアについて

Markdownを編集しリアルタイムプレビューする。

* パーサ: [Markdown-it]
* エディタ: [Ace]

# 使い方

ブラウザでindex.htmlを開く。

# 独自実装

* リアルタイム文字数カウンタ
* Markdownファイルダウンロード
* でんでんマークダウン式Rubyタグ

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](http://ytyaru.hatenablog.com/entry/2016/12/01/100000) GNU/Linux 8.0 (jessie)
        * Chrome 51.0.2704.91

# ライセンス

このソフトウェアは[cc0-1.0](LICENSE.txt)ライセンスである。

使用ライブラリは以下。

Library|License|Copyright
-------|-------|---------
[Markdown-it]||[Copyright (c) 2014 Vitaly Puzrin, Alex Kocharin.](https://github.com/markdown-it/markdown-it/blob/master/LICENSE)
[Ace]|BSD-3-Cluese|[Copyright (c) 2010, Ajax.org B.V.](https://github.com/ajaxorg/ace/blob/master/LICENSE)

[Markdown-it]: https://github.com/markdown-it/markdown-it
[Ace]: https://github.com/ajaxorg/ace
