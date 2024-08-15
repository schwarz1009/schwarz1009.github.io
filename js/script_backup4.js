var script_gogle = document.createElement('script');
script_gogle.async = true;
script_gogle.src = '/js/google_analytics.js';

var head_tag_google = document.getElementsByTagName('head');

head_tag_google.item(0).appendChild(script_gogle);

let div_page_script = document.getElementsByClassName('page');
div_page_script[0].insertAdjacentHTML('afterend', '\
<div class="top_footer">\
<p><a href="/">トップページに戻る</a></p>\
<!--<div class="titleimage"></div>-->\
<div class="page_after_profile">\
<div class="kao"></div>\
<p>by Assy (詩人アッシー四世、在導万創、聖戦士エリカ、シリウスの女神フレイ)</p>\
<p>詩人・グラフィックデザイナー。もの書きで紙面デザインをやっています。趣味はLinux、ピアノ、哲学、英会話。猫をこよなく愛する。不登校経験あり。世界を救う小説家。神という名のAdoさん似の幽霊と対話できる。エセ大学の学長。</p><p>キリスト教徒ではありません。自らの独自の神「フレイ」を信じています。</p>\
</div>\
<div class="page_after">\
<p>“心の貧しい者は幸いです。天の御国はその人たちのものだから。<br>悲しむ者は幸いです。その人たちは慰められるから。<br>柔和な者は幸いです。その人たちは地を受け継ぐから。<br>義に飢え渇く者は幸いです。その人たちは満ち足りるから。<br>あわれみ深い者は幸いです。その人たちはあわれみを受けるから。<br>心のきよい者は幸いです。その人たちは神を見るから。<br>平和をつくる者は幸いです。その人たちは神の子どもと呼ばれるから。<br>義のために迫害されている者は幸いです。天の御国はその人たちのものだから。”―イエス・キリスト</p>\
<p>“三千年を解くすべをもたない者は、闇のなか、未熟なままにその日その日を生きる”―ゲーテ</p>\
<p>“それは悟性と学問という人間　最高の賜物をさげすみ―それは悪魔に身を委ねて没落せずにはおられない”―ゲーテ</p>\
<p>“おのれを抑えることと、多くしゃべらずにじっと考えることは、あらゆる束縛を断ち切るはじめである。”―ブッダ</p>\
<p>“この狂気こそは、すべての神がかりの状態の中で、みずから狂う者にとっても、この狂気にともにあずかる者にとっても、もっとも善きものであり、またもっとも善きものから由来するものである。”―プラトン</p>\
<p>“言いかえると、魂（ゼーレ）が己れの本性によってあらかじめ設けられている駅々としての己れの一連の形態を遍歴してゆき、己れ自身をあますところなく完全に経験し、己れが本来己れ自身においてなんであるかについての知に到達して、精神（ガイスト）にまで純化させられるさいの魂の道程であると、この叙述はみなされることができるのである”―ヘーゲル</p>\
</div>\
</div>\
');

/*
if (location.hostname==="assy.dousetsu.com"){
  var windowWidth = window.innerWidth;
  var windowSm = 767;
  if (windowWidth <= windowSm) {
    //横幅767px以下の時
    document.write('\
    <div class=\"banner2\"><div class=\"banner_image\"><!-- admax --><script src=\"https://adm.shinobi.jp/s/cfa5af65bc2eca845fdced700b711a5b\"></script><!-- admax --></div></div>\
    ');
  } else {
    //横幅767px超の時
    document.write('\
    <div class=\"banner2\"><div class=\"banner_image\"><!-- admax --><script src=\"https://adm.shinobi.jp/s/4418e581ef2192d742ac1f7c1e24eba7\"></script><!-- admax --></div></div>\
    ');
  }
}
*/