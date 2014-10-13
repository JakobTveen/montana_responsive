include('request_url.js');
//----jquery-plagins----
include('jquery-1.8.3.min.js');
include('jquery.ba-resize.min.js');
include('jquery.fancybox.pack.js');
//----bootstrap----
//----All-Scripts----
include('scroll_to_top.js');
include('ajax.js.switch.js');
//----------------------------

include('MathUtils.js');

//----------------------------
include('jquery.easing.1.3.js');
include('jquery.animate-colors-min.js');
include('jcarousellite_1.0.1.min.js');

include('spin.js');
include('script.js');
include('TMForm.js');
//----Include-Function----
function include(url){ 
  document.write('<script type="text/javascript" src="js/'+ url + '"></script>'); 
  return false ;
}