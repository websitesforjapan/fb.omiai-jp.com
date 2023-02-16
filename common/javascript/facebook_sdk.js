  /** Please do not delete this tag for FBSDK. */
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '179279322170193',
      channelUrl : 'https://fb.omiai-jp.com/channel.html',
      version    : 'v9.0',
      status     : true,
      xfbml      : false
    });
  };
  /** End of FBSDK. */

  /** Please do not delete this tag for FBSDK load. */
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/ja_JP/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  /** End of FBSDK load. */
