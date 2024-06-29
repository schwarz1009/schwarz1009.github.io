document.write('\
<div class="top_footer">');

if (location.hostname==="schwarz1009.github.io"){
  var windowWidth = window.innerWidth;
  var windowSm = 767;
  if (windowWidth <= windowSm) {
    //横幅767px以下の時
    document.write('\
    <div class=\"banner2\"><!-- admax --><script src=\"https://adm.shinobi.jp/s/01f1b4aa775f785f50f958031c3a7b59\"></script><!-- admax --></div>\
    ');
  } else {
    //横幅767px超の時
    document.write('\
    <div class=\"banner2\"><!-- admax --><script src=\"https://adm.shinobi.jp/s/cfb25ec40d4f4e8f2cf9041c68bf1488\"></script><!-- admax --></div>\
    ');
  }
}

document.write('\
<div class="page_after_profile">\
<div class="kao"></div>\
<p>by Assy (在導万創、@schwarz1009) - 32歳の作家・デザイナー見習いです。男性。</p>\
<p><a href="https://schwarz1009.github.io/">Assyのリベラル文学研究所</a><br>\
<a href="https://schwarz1009.hatenablog.jp/">未来のわたしの心より今のあなたへ</a><br>\
<a href="https://twitter.com/zaidoubansou">Twitter @zaidoubansou</a></p>\
</div>\
<div class="page_after">\
<p>“心の貧しい者は幸いです。天の御国はその人たちのものだから。<br>悲しむ者は幸いです。その人たちは慰められるから。<br>柔和な者は幸いです。その人たちは地を受け継ぐから。<br>義に飢え渇く者は幸いです。その人たちは満ち足りるから。<br>あわれみ深い者は幸いです。その人たちはあわれみを受けるから。<br>心のきよい者は幸いです。その人たちは神を見るから。<br>平和をつくる者は幸いです。その人たちは神の子どもと呼ばれるから。<br>義のために迫害されている者は幸いです。天の御国はその人たちのものだから。”―イエス・キリスト</p>\
<p>“三千年を解くすべをもたない者は、闇のなか、未熟なままにその日その日を生きる”―ゲーテ</p>\
<p>“それは悟性と学問という人間　最高の賜物をさげすみ―それは悪魔に身を委ねて没落せずにはおられない”―ゲーテ</p>\
<p>“この狂気こそは、すべての神がかりの状態の中で、みずから狂う者にとっても、この狂気にともにあずかる者にとっても、もっとも善きものであり、またもっとも善きものから由来するものである。”―プラトン</p>\
<p>“言いかえると、魂（ゼーレ）が己れの本性によってあらかじめ設けられている駅々としての己れの一連の形態を遍歴してゆき、己れ自身をあますところなく完全に経験し、己れが本来己れ自身においてなんであるかについての知に到達して、精神（ガイスト）にまで純化させられるさいの魂の道程であると、この叙述はみなされることができるのである”―ヘーゲル</p>\
</div>\
</div>\
');
