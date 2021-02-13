document.write("<link href='../../smartmenus/css/sm-core-css.css' rel='stylesheet' type='text/css' />");
document.write("<link href='../../smartmenus/css/sm-mint/sm-mint.css' rel='stylesheet' type='text/css' />");
document.write("<script type='text/javascript' src='../../smartmenus/jquery.smartmenus.min.js'></script>");

document.write('\
<ul id="main-menu" class="sm sm-mint">\
<li><a href="#">システム</a>\
<ul>\
            <li><a href="../linux/index.html">Linux</a></li>\
            <li><a href="../windows_pc/index.html">Windows/PC</a></li>\
            <li><a href="../unix/index.html">UNIX</a></li>\
            <li><a href="../os/index.html">OS</a></li>\
</ul>\
</li>\
<li><a href="#">ハードウェア・開発</a>\
<ul>\
            <li><a href="../hardware/index.html">ハードウェア</a></li>\
            <li><a href="../prog_lang/index.html">プログラミング言語</a></li>\
            <li><a href="../programs/index.html">自作プログラム</a></li>\
</ul>\
</li>\
<li><a href="#">ネットワーク・DB</a>\
<ul>\
            <li><a href="../network/index.html">ネットワーク</a></li>\
            <li><a href="../db/index.html">データベース</a></li>\
            <li><a href="../services/index.html">Webサービス</a></li>\
</ul>\
</li>\
<li><a href="#">数学・自然</a>\
<ul>\
            <li><a href="../math/index.html">数学</a></li>\
            <li><a href="../natural/index.html">自然科学</a></li>\
            <li><a href="../tech/index.html">工学・機械技術</a></li>\
            <li><a href="../farm/index.html">農業・牧畜</a></li>\
</ul>\
</li>\
<li><a href="#">人文・社会</a>\
<ul>\
            <li><a href="../philosophy/index.html">哲学</a></li>\
            <li><a href="../social/index.html">社会科学</a></li>\
            <li><a href="../human/index.html">人文科学・宗教</a></li>\
            <li><a href="../country/index.html">外国・言語</a></li>\
</ul>\
</li>\
<li><a href="#">芸術・音楽</a>\
<ul>\
            <li><a href="../art/index.html">美術・デザイン</a></li>\
            <li><a href="../music/index.html">音楽</a></li>\
</ul>\
</li>\
</ul>\
');


$(function() {
  $('#main-menu').smartmenus();
});