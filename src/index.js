$(function() {
	var markdownit = window.markdownit({
		html   : true,
		breaks : true,
    });
	hljs.initHighlightingOnLoad();

	var editor = ace.edit("markdown_editor");
	editor.setOptions({
		maxLines: Infinity,
		fontSize: "12pt",
	});
	editor.setTheme("ace/theme/twilight"); // 唯一背景黒＆箇条書き色分けされる
	editor.getSession().setMode("ace/mode/markdown");
	editor.getSession().setUseWrapMode(true);
	editor.$blockScrolling = Infinity;

	/*
    $.ajax({
		type: 'GET',
		url: 'default.md',
		success : function(data) {
			alert('読み込み成功！');
			editor.getSession().getValue(data);
		},
		error:function(data) {
			alert('読み込み失敗orz');
		}
    });
	*/

	// https://ace.c9.io/#nav=api&api=editor
	editor.on("change", function(e) {
		var src = editor.getSession().getValue();
		var rubyHtml = window.novel.formatter.ruby.md2html.denden(editor.getSession().getValue());
		console.log(rubyHtml);
	    var html = markdownit.render(rubyHtml);
	    $("#preview").html(html);
	    $("#count").text(editor.getSession().getValue().length + '字');
	})();
	//editor.change();

	$('#downloadButton').click(function(e) {
		text = editor.getSession().getValue();
		var blob = new window.Blob([text], { type:'text/plain' });
		var downloadButton = document.getElementById('downloadButton');
		downloadButton.href = URL.createObjectURL(blob);
		downloadButton.download = "fileName.txt";
		downloadButton.download = formatDate(new Date(), 'YYYYMMDDhhmmssSSS.md');;
	});

	/**
	 * 日付をフォーマットする
	 * @param  {Date}   date     日付
	 * @param  {String} [format] フォーマット
	 * @return {String}          フォーマット済み日付
	 * https://qiita.com/osakanafish/items/c64fe8a34e7221e811d0
	 */
	var formatDate = function (date, format) {
		if (!format) format = 'YYYY-MM-DD hh:mm:ss.SSS';
		format = format.replace(/YYYY/g, date.getFullYear());
		format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
		format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
		format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
		format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
		format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
		if (format.match(/S/g)) {
			var milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
			var length = format.match(/S/g).length;
			for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
		}
		return format;
	};
});
