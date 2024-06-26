var script_gogle = document.createElement('script');
script_gogle.async = true;
script_gogle.src = '/js/google_analytics.js';

var head_tag_google = document.getElementsByTagName('head');

head_tag_google.item(0).appendChild(script_gogle);

function ChangeTab(tabname) {
   document.getElementById('tab_2023_11').style.display = 'none';
   document.getElementById('tab_2023_12').style.display = 'none';
   document.getElementById('tab_2024_01').style.display = 'none';
   document.getElementById('tab_2024_02').style.display = 'none';
   document.getElementById('tab_2024_03').style.display = 'none';
   document.getElementById('tab_2024_04').style.display = 'none';
   document.getElementById('tab_2024_05').style.display = 'none';
   document.getElementById('tab_2024_06').style.display = 'none';
   document.getElementById('tab_2024_07').style.display = 'none';

   document.getElementById(tabname).style.display = 'block';
   
   document.getElementById(tabname + '_li').style.background = 'white';

   if (tabname != 'tab_2023_11') {
       document.getElementById('tab_2023_11_li').style.background = '#f2dae8';
   }
   if (tabname != 'tab_2023_12') {
       document.getElementById('tab_2023_12_li').style.background = '#f2dae8';
   }
   if (tabname != 'tab_2024_01') {
       document.getElementById('tab_2024_01_li').style.background = '#f2dae8';
   }
   if (tabname != 'tab_2024_02') {
       document.getElementById('tab_2024_02_li').style.background = '#f2dae8';
   }
   if (tabname != 'tab_2024_03') {
       document.getElementById('tab_2024_03_li').style.background = '#f2dae8';
   }
   if (tabname != 'tab_2024_04') {
       document.getElementById('tab_2024_04_li').style.background = '#f2dae8';
   }
   if (tabname != 'tab_2024_05') {
       document.getElementById('tab_2024_05_li').style.background = '#f2dae8';
   }
   if (tabname != 'tab_2024_06') {
       document.getElementById('tab_2024_06_li').style.background = '#f2dae8';
   }
   if (tabname != 'tab_2024_07') {
       document.getElementById('tab_2024_07_li').style.background = '#f2dae8';
   }
}

let div_guren_script = document.getElementById('guren_tab');
div_guren_script.insertAdjacentHTML('beforebegin', '\
<div class="tab_menu">\
<ul class="tab_list">\
<li id="tab_2023_11_li"><a href="#tab_2023_11" class="tab_2023_11" onclick="ChangeTab(\'tab_2023_11\'); return false;">2023-11</a></li>\
<li id="tab_2023_12_li"><a href="#tab_2023_12" class="tab_2023_12" onclick="ChangeTab(\'tab_2023_12\'); return false;">2023-12</a></li>\
<li id="tab_2024_01_li"><a href="#tab_2024_01" class="tab_2024_01" onclick="ChangeTab(\'tab_2024_01\'); return false;">2024-01</a></li>\
<li id="tab_2024_02_li"><a href="#tab_2024_02" class="tab_2024_02" onclick="ChangeTab(\'tab_2024_02\'); return false;">2024-02</a></li>\
<li id="tab_2024_03_li"><a href="#tab_2024_03" class="tab_2024_03" onclick="ChangeTab(\'tab_2024_03\'); return false;">2024-03</a></li>\
<li id="tab_2024_04_li"><a href="#tab_2024_04" class="tab_2024_04" onclick="ChangeTab(\'tab_2024_04\'); return false;">2024-04</a></li>\
<li id="tab_2024_05_li"><a href="#tab_2024_05" class="tab_2024_05" onclick="ChangeTab(\'tab_2024_05\'); return false;">2024-05</a></li>\
<li id="tab_2024_06_li"><a href="#tab_2024_06" class="tab_2024_06" onclick="ChangeTab(\'tab_2024_06\'); return false;">2024-06</a></li>\
<li id="tab_2024_07_li"><a href="#tab_2024_07" class="tab_2024_07" onclick="ChangeTab(\'tab_2024_07\'); return false;">2024-07</a></li>\
</ul>\
</div>\
<div class="box">\
<div id="tab_2023_11" style="display: none;">\
<ul>\
<li><a href="2023.11.01.html">2023-11-01</a></li>\
<li><a href="2023.11.02.html">2023-11-02</a></li>\
<li><a href="2023.11.03.html">2023-11-03</a></li>\
<li><a href="2023.11.04.html">2023-11-04</a></li>\
<li><a href="2023.11.05.html">2023-11-05</a></li>\
<li><a href="2023.11.06.html">2023-11-06</a></li>\
<li><a href="2023.11.07.html">2023-11-07</a></li>\
<li><a href="2023.11.08.html">2023-11-08</a></li>\
<li><a href="2023.11.09.html">2023-11-09</a></li>\
<li><a href="2023.11.10.html">2023-11-10</a></li>\
<li><a href="2023.11.11.html">2023-11-11</a></li>\
<li><a href="2023.11.16.html">2023-11-16</a></li>\
<li><a href="2023.11.17.html">2023-11-17</a></li>\
<li><a href="2023.11.18.html">2023-11-18</a></li>\
<li><a href="2023.11.19.html">2023-11-19</a></li>\
<li><a href="2023.11.20.html">2023-11-20</a></li>\
<li><a href="2023.11.21.html">2023-11-21</a></li>\
<li><a href="2023.11.22.html">2023-11-22</a></li>\
<li><a href="2023.11.23.html">2023-11-23</a></li>\
<li><a href="2023.11.24.html">2023-11-24</a></li>\
<li><a href="2023.11.25.html">2023-11-25</a></li>\
<li><a href="2023.11.26.html">2023-11-26</a></li>\
<li><a href="2023.11.27.html">2023-11-27</a></li>\
<li><a href="2023.11.28.html">2023-11-28</a></li>\
<li><a href="2023.11.29.html">2023-11-29</a></li>\
<li><a href="2023.11.30.html">2023-11-30</a></li>\
</ul>\
</div>\
<div id="tab_2023_12" style="display: none;">\
<ul>\
<li><a href="2023.12.01.html">2023-12-01</a></li>\
<li><a href="2023.12.02.html">2023-12-02</a></li>\
<li><a href="2023.12.03.html">2023-12-03</a></li>\
<li><a href="2023.12.04.html">2023-12-04</a></li>\
<li><a href="2023.12.05.html">2023-12-05</a></li>\
<li><a href="2023.12.06.html">2023-12-06</a></li>\
<li><a href="2023.12.07.html">2023-12-07</a></li>\
<li><a href="2023.12.08.html">2023-12-08</a></li>\
<li><a href="2023.12.09.html">2023-12-09</a></li>\
<li><a href="2023.12.10.html">2023-12-10</a></li>\
<li><a href="2023.12.11.html">2023-12-11</a></li>\
<li><a href="2023.12.12.html">2023-12-12</a></li>\
<li><a href="2023.12.13.html">2023-12-13</a></li>\
<li><a href="2023.12.14.html">2023-12-14</a></li>\
<li><a href="2023.12.15.html">2023-12-15</a></li>\
<li><a href="2023.12.16.html">2023-12-16</a></li>\
<li><a href="2023.12.17.html">2023-12-17</a></li>\
<li><a href="2023.12.18.html">2023-12-18</a></li>\
<li><a href="2023.12.20.html">2023-12-20</a></li>\
<li><a href="2023.12.21.html">2023-12-21</a></li>\
<li><a href="2023.12.22.html">2023-12-22</a></li>\
<li><a href="2023.12.23.html">2023-12-23</a></li>\
<li><a href="2023.12.24.html">2023-12-24</a></li>\
<li><a href="2023.12.25.html">2023-12-25</a></li>\
<li><a href="2023.12.26.html">2023-12-26</a></li>\
<li><a href="2023.12.27.html">2023-12-27</a></li>\
<li><a href="2023.12.28.html">2023-12-28</a></li>\
<li><a href="2023.12.29.html">2023-12-29</a></li>\
<li><a href="2023.12.30.html">2023-12-30</a></li>\
<li><a href="2023.12.31.html">2023-12-31</a></li>\
</ul>\
</div>\
<div id="tab_2024_01" style="display: none;">\
<ul>\
<li><a href="2024.01.01.html">2024-01-01</a></li>\
<li><a href="2024.01.02.html">2024-01-02</a></li>\
<li><a href="2024.01.03.html">2024-01-03</a></li>\
<li><a href="2024.01.04.html">2024-01-04</a></li>\
<li><a href="2024.01.05.html">2024-01-05</a></li>\
<li><a href="2024.01.06.html">2024-01-06</a></li>\
<li><a href="2024.01.07.html">2024-01-07</a></li>\
<li><a href="2024.01.08.html">2024-01-08</a></li>\
<li><a href="2024.01.09.html">2024-01-09</a></li>\
<li><a href="2024.01.10.html">2024-01-10</a></li>\
<li><a href="2024.01.12.html">2024-01-12</a></li>\
<li><a href="2024.01.13.html">2024-01-13</a></li>\
<li><a href="2024.01.14.html">2024-01-14</a></li>\
<li><a href="2024.01.15.html">2024-01-15</a></li>\
<li><a href="2024.01.17.html">2024-01-17</a></li>\
<li><a href="2024.01.18.html">2024-01-18</a></li>\
<li><a href="2024.01.19.html">2024-01-19</a></li>\
<li><a href="2024.01.20.html">2024-01-20</a></li>\
<li><a href="2024.01.21.html">2024-01-21</a></li>\
<li><a href="2024.01.22.html">2024-01-22</a></li>\
<li><a href="2024.01.23.html">2024-01-23</a></li>\
<li><a href="2024.01.24.html">2024-01-24</a></li>\
<li><a href="2024.01.25.html">2024-01-25</a></li>\
<li><a href="2024.01.26.html">2024-01-26</a></li>\
<li><a href="2024.01.27.html">2024-01-27</a></li>\
<li><a href="2024.01.28.html">2024-01-28</a></li>\
<li><a href="2024.01.29.html">2024-01-29</a></li>\
<li><a href="2024.01.30.html">2024-01-30</a></li>\
<li><a href="2024.01.31.html">2024-01-31</a></li>\
</ul>\
</div>\
<div id="tab_2024_02" style="display: none;">\
<ul>\
<li><a href="2024.02.02.html">2024-02-02</a></li>\
<li><a href="2024.02.03.html">2024-02-03</a></li>\
<li><a href="2024.02.04.html">2024-02-04</a></li>\
<li><a href="2024.02.05.html">2024-02-05</a></li>\
<li><a href="2024.02.06.html">2024-02-06</a></li>\
<li><a href="2024.02.07.html">2024-02-07</a></li>\
<li><a href="2024.02.08.html">2024-02-08</a></li>\
<li><a href="2024.02.09.html">2024-02-09</a></li>\
<li><a href="2024.02.10.html">2024-02-10</a></li>\
<li><a href="2024.02.11.html">2024-02-11</a></li>\
<li><a href="2024.02.12.html">2024-02-12</a></li>\
<li><a href="2024.02.13.html">2024-02-13</a></li>\
<li><a href="2024.02.14.html">2024-02-14</a></li>\
<li><a href="2024.02.15.html">2024-02-15</a></li>\
<li><a href="2024.02.16.html">2024-02-16</a></li>\
<li><a href="2024.02.17.html">2024-02-17</a></li>\
<li><a href="2024.02.18.html">2024-02-18</a></li>\
<li><a href="2024.02.19.html">2024-02-19</a></li>\
<li><a href="2024.02.20.html">2024-02-20</a></li>\
<li><a href="2024.02.21.html">2024-02-21</a></li>\
<li><a href="2024.02.22.html">2024-02-22</a></li>\
<li><a href="2024.02.24.html">2024-02-24</a></li>\
<li><a href="2024.02.25.html">2024-02-25</a></li>\
<li><a href="2024.02.26.html">2024-02-26</a></li>\
<li><a href="2024.02.27.html">2024-02-27</a></li>\
<li><a href="2024.02.28.html">2024-02-28</a></li>\
<li><a href="2024.02.29.html">2024-02-29</a></li>\
</ul>\
</div>\
<div id="tab_2024_03" style="display: none;">\
<ul>\
<li><a href="2024.03.01.html">2024-03-01</a></li>\
<li><a href="2024.03.02.html">2024-03-02</a></li>\
<li><a href="2024.03.03.html">2024-03-03</a></li>\
<li><a href="2024.03.04.html">2024-03-04</a></li>\
<li><a href="2024.03.05.html">2024-03-05</a></li>\
<li><a href="2024.03.08.html">2024-03-08</a></li>\
<li><a href="2024.03.09.html">2024-03-09</a></li>\
<li><a href="2024.03.10.html">2024-03-10</a></li>\
<li><a href="2024.03.11.html">2024-03-11</a></li>\
<li><a href="2024.03.12.html">2024-03-12</a></li>\
<li><a href="2024.03.13.html">2024-03-13</a></li>\
<li><a href="2024.03.14.html">2024-03-14</a></li>\
<li><a href="2024.03.15.html">2024-03-15</a></li>\
<li><a href="2024.03.16.html">2024-03-16</a></li>\
<li><a href="2024.03.17.html">2024-03-17</a></li>\
<li><a href="2024.03.18.html">2024-03-18</a></li>\
<li><a href="2024.03.19.html">2024-03-19</a></li>\
<li><a href="2024.03.20.html">2024-03-20</a></li>\
<li><a href="2024.03.21.html">2024-03-21</a></li>\
<li><a href="2024.03.22.html">2024-03-22</a></li>\
<li><a href="2024.03.23.html">2024-03-23</a></li>\
<li><a href="2024.03.24.html">2024-03-24</a></li>\
<li><a href="2024.03.25.html">2024-03-25</a></li>\
<li><a href="2024.03.26.html">2024-03-26</a></li>\
<li><a href="2024.03.27.html">2024-03-27</a></li>\
<li><a href="2024.03.28.html">2024-03-28</a></li>\
<li><a href="2024.03.29.html">2024-03-29</a></li>\
<li><a href="2024.03.30.html">2024-03-30</a></li>\
<li><a href="2024.03.31.html">2024-03-31</a></li>\
</ul>\
</div>\
<div id="tab_2024_04" style="display: none;">\
<ul>\
<li><a href="2024.04.01.html">2024-04-01</a></li>\
<li><a href="2024.04.02.html">2024-04-02</a></li>\
<li><a href="2024.04.03.html">2024-04-03</a></li>\
<li><a href="2024.04.04.html">2024-04-04</a></li>\
<li><a href="2024.04.06.html">2024-04-06</a></li>\
<li><a href="2024.04.07.html">2024-04-07</a></li>\
<li><a href="2024.04.08.html">2024-04-08</a></li>\
<li><a href="2024.04.09.html">2024-04-09</a></li>\
<li><a href="2024.04.10.html">2024-04-10</a></li>\
<li><a href="2024.04.11.html">2024-04-11</a></li>\
<li><a href="2024.04.12.html">2024-04-12</a></li>\
<li><a href="2024.04.13.html">2024-04-13</a></li>\
<li><a href="2024.04.14.html">2024-04-14</a></li>\
<li><a href="2024.04.15.html">2024-04-15</a></li>\
<li><a href="2024.04.17.html">2024-04-17</a></li>\
<li><a href="2024.04.18.html">2024-04-18</a></li>\
<li><a href="2024.04.19.html">2024-04-19</a></li>\
<li><a href="2024.04.20.html">2024-04-20</a></li>\
<li><a href="2024.04.21.html">2024-04-21</a></li>\
<li><a href="2024.04.22.html">2024-04-22</a></li>\
<li><a href="2024.04.23.html">2024-04-23</a></li>\
<li><a href="2024.04.24.html">2024-04-24</a></li>\
<li><a href="2024.04.25.html">2024-04-25</a></li>\
<li><a href="2024.04.26.html">2024-04-26</a></li>\
<li><a href="2024.04.27.html">2024-04-27</a></li>\
<li><a href="2024.04.28.html">2024-04-28</a></li>\
<li><a href="2024.04.29.html">2024-04-29</a></li>\
</ul>\
</div>\
<div id="tab_2024_05" style="display: none;">\
<ul>\
<li><a href="2024.05.01.html">2024-05-01</a></li>\
<li><a href="2024.05.02.html">2024-05-02</a></li>\
<li><a href="2024.05.03.html">2024-05-03</a></li>\
<li><a href="2024.05.04.html">2024-05-04</a></li>\
<li><a href="2024.05.05.html">2024-05-05</a></li>\
<li><a href="2024.05.06.html">2024-05-06</a></li>\
<li><a href="2024.05.07.html">2024-05-07</a></li>\
<li><a href="2024.05.08.html">2024-05-08</a></li>\
<li><a href="2024.05.09.html">2024-05-09</a></li>\
<li><a href="2024.05.14.html">2024-05-14</a></li>\
<li><a href="2024.05.15.html">2024-05-15</a></li>\
<li><a href="2024.05.17.html">2024-05-17</a></li>\
<li><a href="2024.05.18.html">2024-05-18</a></li>\
<li><a href="2024.05.19.html">2024-05-19</a></li>\
<li><a href="2024.05.20.html">2024-05-20</a></li>\
<li><a href="2024.05.21.html">2024-05-21</a></li>\
<li><a href="2024.05.22.html">2024-05-22</a></li>\
<li><a href="2024.05.23.html">2024-05-23</a></li>\
<li><a href="2024.05.26.html">2024-05-26</a></li>\
<li><a href="2024.05.27.html">2024-05-27</a></li>\
<li><a href="2024.05.29.html">2024-05-29</a></li>\
<li><a href="2024.05.30.html">2024-05-30</a></li>\
<li><a href="2024.05.31.html">2024-05-31</a></li>\
</ul>\
</div>\
<div id="tab_2024_06" style="display: none;">\
<ul>\
<li><a href="2024.06.01.html">2024-06-01</a></li>\
<li><a href="2024.06.02.html">2024-06-02</a></li>\
<li><a href="2024.06.03.html">2024-06-03</a></li>\
<li><a href="2024.06.04.html">2024-06-04</a></li>\
<li><a href="2024.06.05.html">2024-06-05</a></li>\
<li><a href="2024.06.06.html">2024-06-06</a></li>\
<li><a href="2024.06.07.html">2024-06-07</a></li>\
<li><a href="2024.06.08.html">2024-06-08</a></li>\
<li><a href="2024.06.09.html">2024-06-09</a></li>\
<li><a href="2024.06.10.html">2024-06-10</a></li>\
<li><a href="2024.06.11.html">2024-06-11</a></li>\
<li><a href="2024.06.12.html">2024-06-12</a></li>\
<li><a href="2024.06.13.html">2024-06-13</a></li>\
<li><a href="2024.06.19.html">2024-06-19</a></li>\
<li><a href="2024.06.20.html">2024-06-20</a></li>\
<li><a href="2024.06.21.html">2024-06-21</a></li>\
<li><a href="2024.06.22.html">2024-06-22</a></li>\
<li><a href="2024.06.23.html">2024-06-23</a></li>\
<li><a href="2024.06.24.html">2024-06-24</a></li>\
<li><a href="2024.06.26.html">2024-06-26</a></li>\
<li><a href="2024.06.27.html">2024-06-27</a></li>\
<li><a href="2024.06.28.html">2024-06-28</a></li>\
<li><a href="2024.06.30.html">2024-06-30</a></li>\
</ul>\
</div>\
<div id="tab_2024_07" style="display: none;">\
<ul>\
<li><a href="2024.07.01.html">2024-07-01</a></li>\
<li><a href="2024.07.02.html">2024-07-02</a></li>\
</ul>\
</div>\
</div>\
');

