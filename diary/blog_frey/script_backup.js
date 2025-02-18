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
</div>\
');
