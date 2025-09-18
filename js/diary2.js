function openMenu() {
   document.getElementById('closed_menu').style.display = 'none';
   document.getElementById('open_menu').style.display = 'inline-block';
}

let div_page_diary = document.getElementsByClassName('page');
div_page_diary[0].insertAdjacentHTML('beforebegin', '\
<div id="closed_menu" class="closed_menu_icon"><a href="#" onclick="openMenu(); return false;">日記のメニューを開く</a></div>\
<div id="open_menu" class="menu_icons_diary">\
<p><a href="../../subpages/diary.html">日記</a></p>\
<p><a href="../blog_frey/index.html">わたしの名はフレイ</a> -\
 <a href="../news/index.html">ニュース</a> -\
 <a href="../elika/index.html">エリカの技術・芸術日記</a> -\
 <a href="../sylph/index.html">シルフの秘密の場所</a> -\
 <a href="../subaru/index.html">宇宙開拓団スバルの記録</a> -\
 <a href="../aozora/index.html">永遠の青空とともに</a> -\
 <a href="../guren/index.html">紅蓮と黄金の出会う場所</a></p>\
</div>\
');

