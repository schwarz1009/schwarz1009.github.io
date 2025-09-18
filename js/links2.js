function openMenuLinks() {
   document.getElementById('closed_menu_links').style.display = 'none';
   document.getElementById('open_menu_links').style.display = 'inline-block';
}

let div_page_diary = document.getElementsByClassName('page');
div_page_diary[0].insertAdjacentHTML('beforebegin', '\
<div id="closed_menu_links" class="closed_menu_icon"><a href="#" onclick="openMenuLinks(); return false;">世界観のメニューを開く</a></div>\
<div id="open_menu_links">\
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
</div>\
');
