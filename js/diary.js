function openMenu() {
   document.getElementById('closed_menu').style.display = 'none';
   document.getElementById('open_menu').style.display = 'inline-block';
}

let div_page_diary = document.getElementsByClassName('page');
div_page_diary[0].insertAdjacentHTML('beforebegin', '\
<div id="closed_menu" class="closed_menu_icon"><a href="#" onclick="openMenu(); return false;">日記のメニューを開く</a></div>\
<div id="open_menu" class="menu_icons_diary">\
<p><a href="../subpages/diary.html">日記</a>: <a href="index.html">日記一覧</a> - <a href="list/index.html">月別一覧</a>\
<p><a href="index_new_diary2.html">新・日記２（2017-06 ～ 2020-04）</a></p>\
<p>2017: <a href="list/2017.06.html">2017-06</a> -\
 <a href="list/2017.07.html">2017-07</a> -\
 <a href="list/2017.08.html">2017-08</a> -\
 <a href="list/2017.09.html">2017-09</a> -\
 <a href="list/2017.10.html">2017-10</a> -\
 <a href="list/2017.11.html">2017-11</a> -\
 <a href="list/2017.12.html">2017-12</a></p>\
<p>2018: <a href="list/2018.01.html">2018-01</a> -\
 <a href="list/2018.02.html">2018-02</a> -\
 <a href="list/2018.03.html">2018-03</a> -\
 <a href="list/2018.04.html">2018-04</a> -\
 <a href="list/2018.05.html">2018-05</a> -\
 <a href="list/2018.06.html">2018-06</a> -\
 <a href="list/2018.07.html">2018-07</a> -\
 <a href="list/2018.08.html">2018-08</a> -\
 <a href="list/2018.09.html">2018-09</a> -\
 <a href="list/2018.10.html">2018-10</a> -\
 <a href="list/2018.11.html">2018-11</a> -\
 <a href="list/2018.12.html">2018-12</a></p>\
<p>2019: <a href="list/2019.01.html">2019-01</a> -\
 <a href="list/2019.02.html">2019-02</a> -\
 <a href="list/2019.03.html">2019-03</a> -\
 <a href="list/2019.04.html">2019-04</a> -\
 <a href="list/2019.05.html">2019-05</a> -\
 <a href="list/2019.06.html">2019-06</a> -\
 <a href="list/2019.07.html">2019-07</a> -\
 <a href="list/2019.08.html">2019-08</a> -\
 <a href="list/2019.09.html">2019-09</a> -\
 <a href="list/2019.10.html">2019-10</a> -\
 <a href="list/2019.11.html">2019-11</a> -\
 <a href="list/2019.12.html">2019-12</a></p>\
<p>2020: <a href="list/2020.01.html">2020-01</a> -\
 <a href="list/2020.02.html">2020-02</a> -\
 <a href="list/2020.03.html">2020-03</a> -\
 <a href="list/2020.04.html">2020-04</a></p>\
<p><a href="blog_frey/index.html">わたしの名はフレイ</a> -\
 <a href="news/index.html">ニュース</a> -\
 <a href="elika/index.html">エリカの技術・芸術日記</a> -\
 <a href="sylph/index.html">シルフの秘密の場所</a> -\
 <a href="subaru/index.html">宇宙開拓団スバルの記録</a> -\
 <a href="aozora/index.html">永遠の青空とともに</a> -\
 <a href="guren/index.html">紅蓮と黄金の出会う場所</a></p>\
</div>\
');

