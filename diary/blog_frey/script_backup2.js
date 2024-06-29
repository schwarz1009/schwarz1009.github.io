var script_gogle = document.createElement('script');
script_gogle.async = true;
script_gogle.src = '/js/google_analytics.js';

var head_tag_google = document.getElementsByTagName('head');

head_tag_google.item(0).appendChild(script_gogle);

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