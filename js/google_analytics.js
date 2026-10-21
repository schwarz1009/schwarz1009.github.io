function google_analytics_byhost(tag) {

  var script_google_analytics = document.createElement('script');
  script_google_analytics.async = true;
  script_google_analytics.src = "https://www.googletagmanager.com/gtag/js?id=" + tag;
  document.getElementsByTagName('head')[0].appendChild(script_google_analytics);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', tag);
}

if (location.hostname==="schwarz1009.github.io"){

  google_analytics_byhost('G-J5SYB6TP8S');
  
}