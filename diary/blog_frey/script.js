var script_gogle = document.createElement('script');
script_gogle.async = true;
script_gogle.src = '/js/google_analytics.js';

var head_tag_google = document.getElementsByTagName('head');

head_tag_google.item(0).appendChild(script_gogle);
