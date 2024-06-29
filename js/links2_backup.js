let div_page_diary = document.getElementsByClassName('page');
div_page_diary[0].insertAdjacentHTML('beforebegin', '\
<ul class="menu_icons">\
<li><a href="../linux/index.html"><div class="emoji_icon">🐧</div><div class="menu_text">Linux</div></a></li>\
<li><a href="../windows_pc/index.html"><div class="emoji_icon">💻</div><div class="menu_text">Windows/PC</div></a></li>\
<li><a href="../unix/index.html"><div class="emoji_icon">😈</div><div class="menu_text">UNIX</div></a></li>\
<li><a href="../os/index.html"><div class="emoji_icon">⚙️</div><div class="menu_text">OS</div></a></li>\
<li><a href="../virt/index.html"><div class="emoji_icon">☁️</div><div class="menu_text">仮想化・互換レイヤー</div></a></li>\
<li><a href="../mobile/index.html"><div class="emoji_icon">📱</div><div class="menu_text">モバイル</div></a></li>\
<li><a href="../hardware/index.html"><div class="emoji_icon">🖨️</div><div class="menu_text">ハードウェア</div></a></li>\
<li><a href="../videogame/index.html"><div class="emoji_icon">🎲</div><div class="menu_text">ゲーム</div></a></li>\
<li><a href="../prog_lang/index.html"><div class="emoji_icon">📝</div><div class="menu_text">プログラミング言語</div></a></li>\
<li><a href="../programs/index.html"><div class="emoji_icon">📑</div><div class="menu_text">自作プログラム</div></a></li>\
<li><a href="../network/index.html"><div class="emoji_icon">📥</div><div class="menu_text">ネットワーク</div></a></li>\
<li><a href="../db/index.html"><div class="emoji_icon">🗄️</div><div class="menu_text">データベース</div></a></li>\
<li><a href="../services/index.html"><div class="emoji_icon">🔗</div><div class="menu_text">Webサービス</div></a></li>\
<li><a href="../math/index.html"><div class="emoji_icon">🔢</div><div class="menu_text">数学</div></a></li>\
<li><a href="../natural/index.html"><div class="emoji_icon">🌈</div><div class="menu_text">自然科学</div></a></li>\
<li><a href="../tech/index.html"><div class="emoji_icon">🛠️</div><div class="menu_text">工学・機械技術</div></a></li>\
<li><a href="../farm/index.html"><div class="emoji_icon">🐴</div><div class="menu_text">農業・牧畜</div></a></li>\
<li><a href="../philosophy/index.html"><div class="emoji_icon">🧠</div><div class="menu_text">哲学</div></a></li>\
<li><a href="../social/index.html"><div class="emoji_icon">👮‍♂️</div><div class="menu_text">社会科学</div></a></li>\
<li><a href="../human/index.html"><div class="emoji_icon">📚</div><div class="menu_text">人文科学・宗教</div></a></li>\
<li><a href="../human/index_history.html"><div class="emoji_icon">🏛️</div><div class="menu_text">歴史</div></a></li>\
<li><a href="../human/index_psychology.html"><div class="emoji_icon">❤️</div><div class="menu_text">心理学</div></a></li>\
<li><a href="../human/index_religion.html"><div class="emoji_icon">⛪</div><div class="menu_text">宗教</div></a></li>\
<li><a href="../human/index_literature.html"><div class="emoji_icon">📙</div><div class="menu_text">文学</div></a></li>\
<li><a href="../country/index.html"><div class="emoji_icon">🗺️</div><div class="menu_text">外国・言語</div></a></li>\
<li><a href="../art/index.html"><div class="emoji_icon">🎨</div><div class="menu_text">美術・デザイン</div></a></li>\
<li><a href="../music/index.html"><div class="emoji_icon">🎼</div><div class="menu_text">音楽</div></a></li>\
<li><a href="../sports/index.html"><div class="emoji_icon">⚾</div><div class="menu_text">スポーツ</div></a></li>\
<li><a href="../topics/otaku.html"><div class="emoji_icon">🛸</div><div class="menu_text">オタク文化</div></a></li>\
<li><a href="../topics/shisou.html"><div class="emoji_icon">🧕</div><div class="menu_text">思想</div></a></li>\
</ul>\
');

/*
var link1 = document.createElement('link');
link1.href = '../../smartmenus/css/sm-core-css.css';
link1.type = 'text/css';
link1.rel = 'stylesheet';

var link2 = document.createElement('link');
link2.href = '../../smartmenus/css/sm-mint/sm-mint.css';
link2.type = 'text/css';
link2.rel = 'stylesheet';

var script = document.createElement('script');
script.src = '../../smartmenus/jquery.smartmenus.min.js';

var head_tag = document.getElementsByTagName('head');

head_tag.item(0).appendChild(link1);
head_tag.item(0).appendChild(link2);
head_tag.item(0).appendChild(script);

let div_page_diary = document.getElementsByClassName('page');
div_page_diary[0].insertAdjacentHTML('beforebegin', '\
<ul id="main-menu" class="sm sm-mint">\
<li><a href="#">システム</a>\
<ul>\
            <li><a href="../linux/index.html">Linux</a></li>\
            <li><a href="../windows_pc/index.html">Windows/PC</a></li>\
            <li><a href="../unix/index.html">UNIX</a></li>\
            <li><a href="../os/index.html">OS</a></li>\
            <li><a href="../virt/index.html">仮想化・互換レイヤー</a></li>\
</ul>\
</li>\
<li><a href="#">ハードウェア</a>\
<ul>\
            <li><a href="../mobile/index.html">モバイル</a></li>\
            <li><a href="../hardware/index.html">ハードウェア</a></li>\
            <li><a href="../videogame/index.html">ゲーム</a></li>\
</ul>\
</li>\
<li><a href="#">プログラミング</a>\
<ul>\
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
            <li><a href="#">人文科学・宗教</a>\
            <ul>\
                        <li><a href="../human/index.html">人文科学・宗教</a></li>\
                        <li><a href="../human/index_history.html">歴史</a></li>\
                        <li><a href="../human/index_psychology.html">心理学</a></li>\
                        <li><a href="../human/index_religion.html">宗教</a></li>\
                        <li><a href="../human/index_literature.html">文学</a></li>\
            </ul>\
            </li>\
            <li><a href="../country/index.html">外国・言語</a></li>\
</ul>\
</li>\
<li><a href="#">芸術・音楽</a>\
<ul>\
            <li><a href="../art/index.html">美術・デザイン</a></li>\
            <li><a href="../music/index.html">音楽</a></li>\
</ul>\
</li>\
<li><a href="#">トピック別</a>\
<ul>\
            <li><a href="../topics/otaku.html">オタク文化</a></li>\
            <li><a href="../topics/shisou.html">思想</a></li>\
</ul>\
</li>\
</ul>\
');


$(function() {
  $('#main-menu').smartmenus();
});
*/