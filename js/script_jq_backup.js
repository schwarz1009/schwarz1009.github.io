//document.write('<script src="/js.cookie.js"></script>');
document.write('\
<!--<div class="flower"><p><a href="/"><img src="/flower6.png" alt="花"></a></p></div>-->\
<hr>\
<div class="titleimage"><a href="/"><img src="/title19.png" alt="タイトルイメージ"></a></div>\
<div class="page_after_profile">\
<p><a href="/subpages/images.html"><img src="/kao7.png" width="200px" alt="似顔絵"></a></p>\
<p>by Assy (<a href="/real_power_of_space/real_power_of_space.html">在導万創</a>、<a href="/subpages/profile.html">金本淳志</a>、<a href="http://twilog.org/schwarz1009">@schwarz1009</a>) - 30歳の作家・デザイナー見習いです。男性。詳しい自己紹介が<a href="/myhistory.html">経歴</a>にあります。</p>\
<p><a href="/">トップページに戻る</a> - <a href="http://fushigida.hatenablog.com/">ブログ</a> - <!--<a href="http://b.hatena.ne.jp/schwarz1009/bookmark">ブックマーク</a> - --><a href="https://twitter.com/schwarz1009">ツイッター</a> - <a href="https://www.instagram.com/schwarz1009/">Instagram</a> - <a href="https://www.facebook.com/michael.schwarz.353250">Facebook</a> - <!--<a href="https://plus.google.com/u/0/118350870060284707551">Google+</a> - --><a href="https://pixiv.me/schwarz1009">pixiv</a> - <a href="http://qiita.com/schwarz1009">Qiita</a> - <!--<a href="https://schwarz1009.tumblr.com/">Tumblr</a> - --><a href="https://www.youtube.com/channel/UChOd-9kfU9YHCdAZFD7c4GA">YouTube</a> - <a href="https://github.com/schwarz1009/homepage">GitHub</a> - <a href="https://note.mu/schwarz1009">note</a></p>\
<!--<p>文字サイズ: <button class="xbig"">極大</button> - <button class="big">大</button> - <button class="normal">中</button> - <button class="small">小(標準)</button> - <button class="xsmall">極小</button></p><p>字体: <button class="bt_mincho">明朝体</button> - <button class="bt_gothic">ゴシック</button> - <button class="bt_clean">Cookieを削除</button></p>-->\
</div>\
<div class="page_after">\
<p>“心の貧しい者は幸いです。天の御国はその人たちのものだから。<br>悲しむ者は幸いです。その人たちは慰められるから。<br>柔和な者は幸いです。その人たちは地を受け継ぐから。<br>義に飢え渇く者は幸いです。その人たちは満ち足りるから。<br>あわれみ深い者は幸いです。その人たちはあわれみを受けるから。<br>心のきよい者は幸いです。その人たちは神を見るから。<br>平和をつくる者は幸いです。その人たちは神の子どもと呼ばれるから。<br>義のために迫害されている者は幸いです。天の御国はその人たちのものだから。”―<a href="/links2/human/christianity.html">イエス・キリスト</a></p>\
<p>“三千年を解くすべをもたない者は、闇のなか、未熟なままにその日その日を生きる”―<a href="/links2/human/literature.html">ゲーテ</a></p>\
<p>“それは悟性と学問という人間　最高の賜物をさげすみ―それは悪魔に身を委ねて没落せずにはおられない”―ゲーテ『ファウスト』</p>\
<p>“おのれを抑えることと、多くしゃべらずにじっと考えることは、あらゆる束縛を断ち切るはじめである。”―<a href="/links2/human/buddhism.html">ブッダ</a></p>\
</div>\
');
//$(document).ready(function(){
  /*
  $(".sidebar").before('<div class="navi"><button class="sidebar_button">サイドバーを開閉</button></div>');
  $(".sidebar_profile").before('<div class="navi"><button class="sidebar_profile_button">プロフィールを開閉</button></div>');
  $("button.sidebar_button").click(function () {
    $(".sidebar").slideToggle('fast');
  });
  $("button.sidebar_profile_button").click(function () {
    $(".sidebar_profile").slideToggle('fast');
  });
  */

  /*
  var sizevar = Cookies.get('cookieFontSize');
  if (sizevar== 'xbig') {
    $("body").css("fontSize","200%"); 
  }
  else if (sizevar== 'big') {
    $("body").css("fontSize","150%"); 
  }
  else if (sizevar== 'normal') {
    $("body").css("fontSize","100%"); 
  }
  else if (sizevar== 'small') {
    $("body").css("fontSize","14px"); 
  }
  else if (sizevar== 'xsmall') {
    $("body").css("fontSize","13px"); 
  }

  $("button.xbig").click(function(){
    $("body").css("fontSize","200%"); 
    Cookies.set('cookieFontSize', 'xbig', { expires: 7 });
  });
  $("button.big").click(function(){
    $("body").css("fontSize","150%"); 
    Cookies.set('cookieFontSize', 'big', { expires: 7 });
  });
  $("button.normal").click(function(){
    $("body").css("fontSize","100%"); 
    Cookies.set('cookieFontSize', 'normal', { expires: 7 });
  });
  $("button.small").click(function(){
    $("body").css("fontSize","14px"); 
    Cookies.set('cookieFontSize', 'small', { expires: 7 });
  });
  $("button.xsmall").click(function(){
    $("body").css("fontSize","13px"); 
    Cookies.set('cookieFontSize', 'xsmall', { expires: 7 });
  });

  var familyvar = Cookies.get('cookieFontFamily');
  if (familyvar == 'mincho') {
    $("body").addClass('font_mincho');
    $("body").removeClass('font_gothic');
  }
  else if (familyvar== 'gothic') {
    $("body").addClass('font_gothic');
    $("body").removeClass('font_mincho');
  }

  $("button.bt_mincho").click(function(){
    $("body").addClass('font_mincho');
    $("body").removeClass('font_gothic');
    Cookies.set('cookieFontFamily', 'mincho', { expires: 7 });
  });
  $("button.bt_gothic").click(function(){
    $("body").addClass('font_gothic');
    $("body").removeClass('font_mincho');
    Cookies.set('cookieFontFamily', 'gothic', { expires: 7 });
  });
  $("button.bt_clean").click(function(){
    $("body").css("fontSize","14px"); 
    $("body").removeClass('font_mincho');
    $("body").removeClass('font_gothic');
    Cookies.remove('cookieFontSize');
    Cookies.remove('cookieFontFamily');
  });

});
*/
