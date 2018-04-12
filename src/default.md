# MD→HTML for JS

1. [概要](#概要)
1. [HTMLテスト](#HTMLテスト)

## 概要

テキストエリアに入力したMarkdownをHTMLに変換し、プレビューする。

[markdown-it](https://github.com/markdown-it/markdown-it)というライブラリを使う。JavaScript製。CDNサイトから入手している。ローカルで使いたいならJSライブラリをローカルにダウンロードし、リンクすべし。

テキストエディタには[ace](https://ace.c9.io/build/kitchen-sink.html)を使う。これもJS製でCDNサイトから。[highlight.js](https://highlightjs.org/)によって描画される。

DOMセレクタとして[jQuery](https://code.jquery.com/)を使っている。

## HTMLテスト

* 項目1
* 項目2

順序付き。

1. 項目1
1. 項目2

アルファベット

A. 項目A
A. 項目B

{漢字|かん|じ}

<ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby>

&lt;ruby&gt;漢&lt;rt&gt;かん&lt;/rt&gt;字&lt;rt&gt;じ&lt;/rt&gt;&lt;/ruby&gt;

<ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp>字<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>

&lt;ruby&gt;漢&lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;かん&lt;/rt&gt;&lt;rp&gt;)&lt;/rp&gt;字&lt;rp&gt;(&lt;/rp&gt;&lt;rt&gt;じ&lt;/rt&gt;&lt;rp&gt;)&lt;/rp&gt;&lt;/ruby&gt;

<ruby>漢<rp><rt>かん</rt></rp>字<rp><rt>じ</rt></rp></ruby>

&lt;ruby&gt;漢&lt;rp&gt;&lt;rt&gt;かん&lt;/rt&gt;&lt;/rp&gt;字&lt;rp&gt;&lt;rt&gt;じ&lt;/rt&gt;&lt;/rp&gt;&lt;/ruby&gt;

[Google](http://www.google.col.jp)
