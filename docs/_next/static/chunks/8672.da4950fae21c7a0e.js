(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8672],{58672:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return c}});var n=t(85893),i=t(23273),s=t.n(i),r=t(67294),a=t(45697),l=t.n(a);function c(){return console.log("facebook",s().FACEBOOK_PAGE_ID,s().FACEBOOK_APP_ID),(0,n.jsx)(g,{pageId:s().FACEBOOK_PAGE_ID,appId:s().FACEBOOK_APP_ID,language:s().LANG.replace("-","_"),shouldShowDialog:!0})}class g extends r.Component{componentDidMount(){this.setFbAsyncInit(),this.reloadSDKAsynchronously()}componentDidUpdate(e){(e.pageId!==this.props.pageId||e.appId!==this.props.appId||e.shouldShowDialog!==this.props.shouldShowDialog||e.htmlRef!==this.props.htmlRef||e.minimized!==this.props.minimized||e.themeColor!==this.props.themeColor||e.loggedInGreeting!==this.props.loggedInGreeting||e.loggedOutGreeting!==this.props.loggedOutGreeting||e.greetingDialogDisplay!==this.props.greetingDialogDisplay||e.greetingDialogDelay!==this.props.greetingDialogDelay||e.autoLogAppEvents!==this.props.autoLogAppEvents||e.xfbml!==this.props.xfbml||e.version!==this.props.version||e.language!==this.props.language)&&(this.setFbAsyncInit(),this.reloadSDKAsynchronously())}componentWillUnmount(){void 0!==window.FB&&window.FB.CustomerChat.hide()}setFbAsyncInit(){let{appId:e,autoLogAppEvents:o,xfbml:t,version:n}=this.props;window.fbAsyncInit=()=>{window.FB.init({appId:e,autoLogAppEvents:o,xfbml:t,version:"v".concat(n)}),this.setState({fbLoaded:!0})}}loadSDKAsynchronously(){var e,o,t,n,i;let{language:s}=this.props;e=document,o="script",t="facebook-jssdk",i=e.getElementsByTagName(o)[0],e.getElementById(t)||((n=e.createElement(o)).id=t,n.src="https://connect.facebook.net/".concat(s,"/sdk/xfbml.customerchat.js"),i.parentNode.insertBefore(n,i))}removeFacebookSDK(){d(["facebook-jssdk","fb-root"]),delete window.FB}reloadSDKAsynchronously(){this.removeFacebookSDK(),this.loadSDKAsynchronously()}controlPlugin(){let{shouldShowDialog:e}=this.props;e?window.FB.CustomerChat.showDialog():window.FB.CustomerChat.hideDialog()}subscribeEvents(){let{onCustomerChatDialogShow:e,onCustomerChatDialogHide:o}=this.props;e&&window.FB.Event.subscribe("customerchat.dialogShow",e),o&&window.FB.Event.subscribe("customerchat.dialogHide",o)}createMarkup(){let{pageId:e,htmlRef:o,minimized:t,themeColor:n,loggedInGreeting:i,loggedOutGreeting:s,greetingDialogDisplay:r,greetingDialogDelay:a}=this.props;return{__html:'<div\n        class="fb-customerchat"\n        page_id="'.concat(e,'"\n        ').concat(void 0!==o?'ref="'.concat(o,'"'):"","\n        ").concat(void 0!==t?'minimized="'.concat(t,'"'):"","\n        ").concat(void 0!==n?'theme_color="'.concat(n,'"'):"","\n        ").concat(void 0!==i?'logged_in_greeting="'.concat(i,'"'):"","\n        ").concat(void 0!==s?'logged_out_greeting="'.concat(s,'"'):"","\n        ").concat(void 0!==r?'greeting_dialog_display="'.concat(r,'"'):"","\n        ").concat(void 0!==a?'greeting_dialog_delay="'.concat(a,'"'):"","\n      ></div>")}}render(){let{fbLoaded:e,shouldShowDialog:o}=this.state;return e&&o!==this.props.shouldShowDialog&&(document.addEventListener("DOMNodeInserted",e=>{let o=e.target;o.className&&"string"==typeof o.className&&o.className.includes("fb_dialog")&&this.controlPlugin()},!1),this.subscribeEvents()),(0,n.jsx)("div",{dangerouslySetInnerHTML:this.createMarkup()},Date())}constructor(e){super(e),this.state={fbLoaded:!1,shouldShowDialog:void 0}}}let d=e=>{e.forEach(e=>{let o=document.getElementById(e);o&&o.parentNode&&o.parentNode.removeChild(o)})};g.propTypes={pageId:l().string.isRequired,appId:l().string,shouldShowDialog:l().bool,htmlRef:l().string,minimized:l().bool,themeColor:l().string,loggedInGreeting:l().string,loggedOutGreeting:l().string,greetingDialogDisplay:l().oneOf(["show","hide","fade"]),greetingDialogDelay:l().number,autoLogAppEvents:l().bool,xfbml:l().bool,version:l().string,language:l().string,onCustomerChatDialogShow:l().func,onCustomerChatDialogHide:l().func},g.defaultProps={appId:null,shouldShowDialog:!1,htmlRef:void 0,minimized:void 0,themeColor:void 0,loggedInGreeting:void 0,loggedOutGreeting:void 0,greetingDialogDisplay:void 0,greetingDialogDelay:void 0,autoLogAppEvents:!0,xfbml:!0,version:"11.0",language:"en_US",onCustomerChatDialogShow:void 0,onCustomerChatDialogHide:void 0}},92703:function(e,o,t){"use strict";var n=t(50414);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,o,t,i,s,r){if(r!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function o(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:s,resetWarningCache:i};return t.PropTypes=t,t}},45697:function(e,o,t){e.exports=t(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);