function openMenu() {
   document.getElementById('closed_menu').style.display = 'none';
   document.getElementById('open_menu').style.display = 'inline-block';
}

let div_page_diary = document.getElementsByClassName('page');
div_page_diary[0].insertAdjacentHTML('beforebegin', '\
<div id="closed_menu" class="closed_menu_icon"><a href="#" onclick="openMenu(); return false;">日記のメニューを開く</a></div>\
<div id="open_menu" class="menu_icons_diary">\
<p><a href="../subpages/diary.html">日記</a>: <a href="index.html">日記一覧（2012 ～ 2020-04）</a> - <a href="list/index.html">月別一覧</a></p>\
<p>2012: <a href="list/2012.firsthalf.html">2012年前半期</a> -\
 <a href="list/2012.07.html">2012-07</a> -\
 <a href="list/2012.08.html">2012-08</a> -\
 <a href="list/2012.09.html">2012-09</a> -\
 <a href="list/2012.10.html">2012-10</a> -\
 <a href="list/2012.11.html">2012-11</a> -\
 <a href="list/2012.12.html">2012-12</a></p>\
<p>2013: <a href="list/2013.01.html">2013-01</a> -\
 <a href="list/2013.02.html">2013-02</a> -\
 <a href="list/2013.03.html">2013-03</a> -\
 <a href="list/2013.04.html">2013-04</a> -\
 <a href="list/2013.05.html">2013-05</a> -\
 <a href="list/2013.06.html">2013-06</a> -\
 <a href="list/2013.07.html">2013-07</a> -\
 <a href="list/2013.08.html">2013-08</a> -\
 <a href="list/2013.09.html">2013-09</a> -\
 <a href="list/2013.10.html">2013-10</a> -\
 <a href="list/2013.11.html">2013-11</a> -\
 <a href="list/2013.12.html">2013-12</a></p>\
<p>2014: <a href="list/2014.05.html">2014-05</a> -\
 <a href="list/2014.06.html">2014-06</a> -\
 <a href="list/2014.07.html">2014-07</a> -\
 <a href="list/2014.08.html">2014-08</a> -\
 <a href="list/2014.09.html">2014-09</a> -\
 <a href="list/2014.10.html">2014-10</a> -\
 <a href="list/2014.11.html">2014-11</a> -\
 <a href="list/2014.12.html">2014-12</a></p>\
<p>2015: <a href="list/2015.01.html">2015-01</a> -\
 <a href="list/2015.02.html">2015-02</a> -\
 <a href="list/2015.03.html">2015-03</a> -\
 <a href="list/2015.04.html">2015-04</a> -\
 <a href="list/2015.05.html">2015-05</a> -\
 <a href="list/2015.06.html">2015-06</a> -\
 <a href="list/2015.07.html">2015-07</a> -\
 <a href="list/2015.08.html">2015-08</a> -\
 <a href="list/2015.09.html">2015-09</a> -\
 <a href="list/2015.10.html">2015-10</a> -\
 <a href="list/2015.11.html">2015-11</a> -\
 <a href="list/2015.12.html">2015-12</a></p>\
<p>2016: <a href="list/2016.01.html">2016-01</a> -\
 <a href="list/2016.02.html">2016-02</a> -\
 <a href="list/2016.03.html">2016-03</a> -\
 <a href="list/2016.04.html">2016-04</a> -\
 <a href="list/2016.05.html">2016-05</a> -\
 <a href="list/2016.06.html">2016-06</a> -\
 <a href="list/2016.07.html">2016-07</a> -\
 <a href="list/2016.08.html">2016-08</a> -\
 <a href="list/2016.09.html">2016-09</a> -\
 <a href="list/2016.10.html">2016-10</a> -\
 <a href="list/2016.11.html">2016-11</a> -\
 <a href="list/2016.12.html">2016-12</a></p>\
<p>2017: <a href="list/2017.01.html">2017-01</a> -\
 <a href="list/2017.02.html">2017-02</a> -\
 <a href="list/2017.03.html">2017-03</a> -\
 <a href="list/2017.04.html">2017-04</a> -\
 <a href="list/2017.05.html">2017-05</a> -\
 <a href="list/2017.06.html">2017-06</a> -\
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
<p>2020-2021: <a href="blog_frey/index.html">わたしの名はフレイ</a> -\
 <a href="news/index.html">ニュース</a> -\
 <a href="elika/index.html">エリカの技術・芸術日記</a></p>\
<p><a href="index_hatenablog.html">はてなブログ（16-06 ～ 09）</a> -\
 <a href="index_ninjablog.html">忍者ブログ（16-09 ～ 10）</a> -\
 <a href="index_new_diary.html">新・日記（16-10）</a> -\
 <a href="index_ninjablog2.html">忍者ブログ２（16-10 ～ 11）</a> -\
 <a href="index_twitter.html">ツイッター（16-11 ～ 17-01）</a> -<br>\
 <a href="index_ninjablog3.html">忍者ブログ３（17-01）</a> -\
 <a href="index_hatenablog2.html">はてなブログ２（17-01 ～ 05）</a> -\
 <a href="index_twitter2.html">ツイッター２（17-06）</a> -\
 <a href="index_new_diary2.html">新・日記２（17-06 ～ 20-04）</a></p>\
<p><a href="notebooks/index.html">ノートに書いた日記</a> -\
 <a href="2009/index.html">2009年の日記</a></p>\
</div>\
');

/*
var link1 = document.createElement('link');
link1.href = '../smartmenus/css/sm-core-css.css';
link1.type = 'text/css';
link1.rel = 'stylesheet';

var link2 = document.createElement('link');
link2.href = '../smartmenus/css/sm-mint/sm-mint.css';
link2.type = 'text/css';
link2.rel = 'stylesheet';

var script = document.createElement('script');
script.src = '../smartmenus/jquery.smartmenus.min.js';

var head_tag = document.getElementsByTagName('head');

head_tag.item(0).appendChild(link1);
head_tag.item(0).appendChild(link2);
head_tag.item(0).appendChild(script);

let div_page_diary = document.getElementsByClassName('page');
div_page_diary[0].insertAdjacentHTML('beforebegin', '\
<ul id="main-menu" class="sm sm-mint">\
<li><a href="#">日記</a>\
<ul>\
        <li><a href="../subpages/diary.html">日記</a></li>\
        <li><a href="index.html">日記一覧（2012 ～ 2020-04）</a></li>\
        <li><a href="list/index.html">月別一覧</a></li>\
</ul>\
<li><a href="#">2012</a>\
              <ul>\
<li><a href="list/2012.firsthalf.html">2012年前半期</a></li>\
<li><a href="list/2012.07.html">2012-07</a></li>\
<li><a href="list/2012.08.html">2012-08</a></li>\
<li><a href="list/2012.09.html">2012-09</a></li>\
<li><a href="list/2012.10.html">2012-10</a></li>\
<li><a href="list/2012.11.html">2012-11</a></li>\
<li><a href="list/2012.12.html">2012-12</a></li>\
              </ul>\
            </li>\
            <li><a href="#">2013</a>\
              <ul>\
<li><a href="list/2013.01.html">2013-01</a></li>\
<li><a href="list/2013.02.html">2013-02</a></li>\
<li><a href="list/2013.03.html">2013-03</a></li>\
<li><a href="list/2013.04.html">2013-04</a></li>\
<li><a href="list/2013.05.html">2013-05</a></li>\
<li><a href="list/2013.06.html">2013-06</a></li>\
<li><a href="list/2013.07.html">2013-07</a></li>\
<li><a href="list/2013.08.html">2013-08</a></li>\
<li><a href="list/2013.09.html">2013-09</a></li>\
<li><a href="list/2013.10.html">2013-10</a></li>\
<li><a href="list/2013.11.html">2013-11</a></li>\
<li><a href="list/2013.12.html">2013-12</a></li>\
              </ul>\
            </li>\
            <li><a href="#">2014</a>\
              <ul>\
<li><a href="list/2014.05.html">2014-05</a></li>\
<li><a href="list/2014.06.html">2014-06</a></li>\
<li><a href="list/2014.07.html">2014-07</a></li>\
<li><a href="list/2014.08.html">2014-08</a></li>\
<li><a href="list/2014.09.html">2014-09</a></li>\
<li><a href="list/2014.10.html">2014-10</a></li>\
<li><a href="list/2014.11.html">2014-11</a></li>\
<li><a href="list/2014.12.html">2014-12</a></li>\
              </ul>\
            </li>\
            <li><a href="#">2015</a>\
              <ul>\
<li><a href="list/2015.01.html">2015-01</a></li>\
<li><a href="list/2015.02.html">2015-02</a></li>\
<li><a href="list/2015.03.html">2015-03</a></li>\
<li><a href="list/2015.04.html">2015-04</a></li>\
<li><a href="list/2015.05.html">2015-05</a></li>\
<li><a href="list/2015.06.html">2015-06</a></li>\
<li><a href="list/2015.07.html">2015-07</a></li>\
<li><a href="list/2015.08.html">2015-08</a></li>\
<li><a href="list/2015.09.html">2015-09</a></li>\
<li><a href="list/2015.10.html">2015-10</a></li>\
<li><a href="list/2015.11.html">2015-11</a></li>\
<li><a href="list/2015.12.html">2015-12</a></li>\
              </ul>\
            </li>\
            <li><a href="#">2016</a>\
              <ul>\
<li><a href="list/2016.01.html">2016-01</a></li>\
<li><a href="list/2016.02.html">2016-02</a></li>\
<li><a href="list/2016.03.html">2016-03</a></li>\
<li><a href="list/2016.04.html">2016-04</a></li>\
<li><a href="list/2016.05.html">2016-05</a></li>\
<li><a href="list/2016.06.html">2016-06</a></li>\
<li><a href="list/2016.07.html">2016-07</a></li>\
<li><a href="list/2016.08.html">2016-08</a></li>\
<li><a href="list/2016.09.html">2016-09</a></li>\
<li><a href="list/2016.10.html">2016-10</a></li>\
<li><a href="list/2016.11.html">2016-11</a></li>\
<li><a href="list/2016.12.html">2016-12</a></li>\
              </ul>\
            </li>\
            <li><a href="#">2017</a>\
              <ul>\
<li><a href="list/2017.01.html">2017-01</a></li>\
<li><a href="list/2017.02.html">2017-02</a></li>\
<li><a href="list/2017.03.html">2017-03</a></li>\
<li><a href="list/2017.04.html">2017-04</a></li>\
<li><a href="list/2017.05.html">2017-05</a></li>\
<li><a href="list/2017.06.html">2017-06</a></li>\
<li><a href="list/2017.07.html">2017-07</a></li>\
<li><a href="list/2017.08.html">2017-08</a></li>\
<li><a href="list/2017.09.html">2017-09</a></li>\
<li><a href="list/2017.10.html">2017-10</a></li>\
<li><a href="list/2017.11.html">2017-11</a></li>\
<li><a href="list/2017.12.html">2017-12</a></li>\
              </ul>\
            </li>\
            <li><a href="#">2018</a>\
              <ul>\
<li><a href="list/2018.01.html">2018-01</a></li>\
<li><a href="list/2018.02.html">2018-02</a></li>\
<li><a href="list/2018.03.html">2018-03</a></li>\
<li><a href="list/2018.04.html">2018-04</a></li>\
<li><a href="list/2018.05.html">2018-05</a></li>\
<li><a href="list/2018.06.html">2018-06</a></li>\
<li><a href="list/2018.07.html">2018-07</a></li>\
<li><a href="list/2018.08.html">2018-08</a></li>\
<li><a href="list/2018.09.html">2018-09</a></li>\
<li><a href="list/2018.10.html">2018-10</a></li>\
<li><a href="list/2018.11.html">2018-11</a></li>\
<li><a href="list/2018.12.html">2018-12</a></li>\
              </ul>\
            </li>\
            <li><a href="#">2019</a>\
              <ul>\
<li><a href="list/2019.01.html">2019-01</a></li>\
<li><a href="list/2019.02.html">2019-02</a></li>\
<li><a href="list/2019.03.html">2019-03</a></li>\
<li><a href="list/2019.04.html">2019-04</a></li>\
<li><a href="list/2019.05.html">2019-05</a></li>\
<li><a href="list/2019.06.html">2019-06</a></li>\
<li><a href="list/2019.07.html">2019-07</a></li>\
<li><a href="list/2019.08.html">2019-08</a></li>\
<li><a href="list/2019.09.html">2019-09</a></li>\
<li><a href="list/2019.10.html">2019-10</a></li>\
<li><a href="list/2019.11.html">2019-11</a></li>\
<li><a href="list/2019.12.html">2019-12</a></li>\
              </ul>\
            </li>\
            <li><a href="#">2020以後</a>\
              <ul>\
<li><a href="list/2020.01.html">2020-01</a></li>\
<li><a href="list/2020.02.html">2020-02</a></li>\
<li><a href="list/2020.03.html">2020-03</a></li>\
<li><a href="list/2020.04.html">2020-04</a></li>\
<li><a href="blog_frey/index.html">わたしの名はフレイ</a></li>\
<li><a href="news/index.html">ニュース</a></li>\
<li><a href="elika/index.html">エリカの技術・芸術日記</a></li>\
              </ul>\
            </li>\
        <li><a href="#">最近の日記</a>\
          <ul>\
            <li><a href="index_hatenablog.html">はてなブログ（16-06 ～ 09）</a></li>\
            <li><a href="index_ninjablog.html">忍者ブログ（16-09 ～ 10）</a></li>\
            <li><a href="index_new_diary.html">新・日記（16-10）</a></li>\
            <li><a href="index_ninjablog2.html">忍者ブログ２（16-10 ～ 11）</a></li>\
            <li><a href="index_twitter.html">ツイッター（16-11 ～ 17-01）</a></li>\
            <li><a href="index_ninjablog3.html">忍者ブログ３（17-01）</a></li>\
            <li><a href="index_hatenablog2.html">はてなブログ２（17-01 ～ 05）</a></li>\
            <li><a href="index_twitter2.html">ツイッター２（17-06）</a></li>\
            <li><a href="index_new_diary2.html">新・日記２（17-06 ～ 20-04）</a></li>\
          </ul>\
        </li>\
        <li><a href="#">その他の日記</a>\
          <ul>\
            <li><a href="./notebooks/index.html">ノートに書いた日記</a></li>\
            <li><a href="./2009/index.html">2009年の日記</a></li>\
          </ul>\
        </li>\
      </ul>\
    </li>\
</ul>\
');


$(function() {
  $('#main-menu').smartmenus();
});
*/