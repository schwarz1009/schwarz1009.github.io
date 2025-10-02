var script_gogle = document.createElement('script');
script_gogle.async = true;
script_gogle.src = '/js/google_analytics.js';

var head_tag_google = document.getElementsByTagName('head');

head_tag_google.item(0).appendChild(script_gogle);

let div_page_script = document.getElementsByClassName('page');
div_page_script[0].insertAdjacentHTML('afterend', '\
<div class="footer_text">\
<p>by 平野明日道 with アッシー、在導万創 - まともで人柄のいい人間を目指している作家・詩人のデザイナー。アッシーはもう一人の自分。</p>\
<p>“汝自身を知れ。”―古代ギリシャの格言</p>\
<p>“しかし、いま聞いているあなたがたに、わたしはこう言います。あなたの敵を愛しなさい。あなたを憎む者に善を行いなさい。<br>あなたをのろう者を祝福しなさい。あなたを侮辱する者のために祈りなさい。<br>あなたの片方の頬を打つ者には、ほかの頬をも向けなさい。上着を奪い取る者には、下着も拒んではいけません。<br>すべて求める者には与えなさい。奪い取る者からは取り戻してはいけません。<br>自分のしてもらいたいと望むとおり、人にもそのようにしなさい。<br>自分を愛する者を愛したからといって、あなたがたに何の良いところがあるでしょう。罪人たちでさえ、自分を愛する者を愛しています。<br>自分に良いことをしてくれる者に良いことをしたからといって、あなたがたに何の良いところがあるでしょう。罪人たちでさえ、同じことをしています。<br>返してもらうつもりで人に貸してやったからといって、あなたがたに何の良いところがあるでしょう。貸した分を取り返すつもりなら、罪人たちでさえ、罪人たちに貸しています。<br>ただ、自分の敵を愛しなさい。彼らによくしてやり、返してもらうことを考えずに貸しなさい。そうすれば、あなたの受ける報いはすばらしく、あなたがたは、いと高き方の子どもになれます。なぜなら、いと高き方は、恩知らずの悪人にも、あわれみ深いからです。”―イエス・キリスト</p>\
<p>“わたしは、あなたがたに言います。求めなさい。そうすれば与えられます。捜しなさい。そうすれば見つかります。たたきなさい。そうすれば開かれます。<br>だれであっても、求めるものは受け、捜すものは見つけ出し、たたく者には開かれます。”―イエス・キリスト</p>\
</div>\
');

/*
if (location.hostname==="assy.dousetsu.com"){
  document.write('\
  <div class="top_footer">');
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
  document.write('\
  </div>\
  ');
}
*/