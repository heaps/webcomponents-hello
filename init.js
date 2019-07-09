// load styles first
var style = document.createElement('link');
style.type = 'text/css';
style.rel = 'stylesheet';
style.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
style.onload = () => loadjQuery();
document.head.appendChild(style);

// load jQuery second
function loadjQuery(){
  // css loaded, display document
  document.documentElement.style.display = 'block';

  // load jquery
  var jquery = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
  var s1 = document.createElement('script');
  s1.src = jquery;
  s1.onload = ()=> loadOtherScripts();
  document.head.appendChild(s1);  
}


function loadOtherScripts(){
  // bootstrap dependency
  var popper = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js';
  var s2 = document.createElement('script');
  s2.src = popper;
  document.head.appendChild(s2);

  // bootstrap script
  var boot = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js';
  var s3 = document.createElement('script');
  s3.src = boot;
  document.head.appendChild(s3);  
}