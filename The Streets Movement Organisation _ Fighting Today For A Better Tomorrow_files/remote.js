(function(g){var window=this;var Tva=function(a,b){var c=[];g.Cl(b,function(a){try{var b=g.nD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.mD(b)&&c.push(a):c.push(a)},a);
return c},Uva=function(a,b){var c=Tva(a,b);
(0,g.H)(c,function(a){g.nD.prototype.remove.call(this,a)},a)},Y8=function(a,b){g.X0.call(this,g.T("YTP_MDX_TITLE"),0,a,b);
this.U=a;this.F={};this.R(a,"onMdxReceiversChange",this.J);this.R(a,"presentingplayerstatechange",this.J);this.J()},Vva=function(){var a=g.KG;
Uva(a,a.g.Sd(!0))},Z8=function(a){g.mH.call(this,"ScreenServiceProxy");
this.Zc=a;this.o=[];this.o.push(this.Zc.$_s("screenChange",(0,g.A)(this.vS,this)));this.o.push(this.Zc.$_s("onlineScreenChange",(0,g.A)(this.JO,this)))},$8=function(a){g.$G("cloudview",a)},Wva=function(a){$8("setApiReady_ "+a);
g.v("yt.mdx.remote.cloudview.apiReady_",a,void 0)},a9=function(){return g.x("yt.mdx.remote.cloudview.instance_")},Xva=function(a){g.bG[a]&&(a=g.bG[a],(0,g.H)(a,function(a){g.$F[a]&&delete g.$F[a]}),a.length=0)},b9=function(){return g.x("yt.mdx.remote.connection_")},c9=function(a){g.v("yt.mdx.remote.connectData_",a,void 0)},Yva=function(a){g.v("yt.mdx.remote.currentScreenId_",a,void 0)},d9=function(){return g.x("yt.mdx.remote.currentScreenId_")},f9=function(){if(!e9){var a=g.x("yt.mdx.remote.screenService_");
e9=a?new Z8(a):null}return e9},g9=function(a){g.v("yt.mdx.remote.cloudview.initializing_",a,void 0)},h9=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},i9=function(a){$8("setCastInstalled_ "+a);
g.MG("yt-remote-cast-installed",a)},j9=function(a){g.$G("cloudview",a)},Zva=function(a,b){a9().init(a,b)},k9=function(){return!!g.NG("yt-remote-cast-installed")},$va=function(){$8("dispose");
var a=a9();a&&a.dispose();g.v("yt.mdx.remote.cloudview.instance_",null,void 0);Wva(!1);g.dG(l9);l9.length=0},awa=function(){var a=window.document.createElement("a");
g.Fd(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ta(a)},bwa=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},cwa=function(a){var b=g.ZF();
if(b)if(b.clear(a),a)Xva(a);else for(var c in g.bG)Xva(c)},m9=function(){return g.x("yt.mdx.remote.channelParams_")||{}},o9=function(a){var b=b9();
c9(null);a||Yva("");g.v("yt.mdx.remote.connection_",a,void 0);n9&&((0,g.H)(n9,function(b){b(a)}),n9.length=0);
b&&!a?g.gG("yt-remote-connection-change",!1):!b&&a&&g.gG("yt-remote-connection-change",!0)},dwa=function(){return g.x("yt.mdx.remote.connectData_")},p9=function(){var a=d9();
if(!a)return null;var b=f9().Zd();return g.lH(b,a)},ewa=function(a,b){i9(!0);
g9(!1);Zva(a,function(a){a?(Wva(!0),g.eG("yt-remote-cast2-api-ready")):(j9("Failed to initialize cast API."),i9(!1),g.OG("yt-remote-cast-available"),g.OG("yt-remote-cast-receiver"),$va());b(a)})},fwa=function(){return k9()?a9()?a9().getCastSession():(j9("getCastSelector: Cast is not initialized."),null):(j9("getCastSelector: Cast API is not installed!"),null)},gwa=function(){var a=awa(),b=window.document.getElementById(a),c=b&&g.pF(b,"loaded");
c||b&&!c||(b=bwa(a,function(){g.pF(b,"loaded")||(g.qF(b,"loaded","true"),g.eG(a),g.wE(g.ya(cwa,a),0))}))},hwa=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},iwa=function(){if(g.Voa){var a=2,b=g.Bh(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.Gh("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.Dh,c)}},r9=function(a,b){d9();
p9()&&p9();Yva(a.id);var c=new g.qI(q9,a,m9());c.connect(b,dwa());c.subscribe("beforeDisconnect",function(a){g.gG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){b9()&&(b9(),o9(null))});
o9(c)},s9=function(){var a=g.rH();
if(!a)return null;var b=f9().Zd();return g.lH(b,a)},t9=function(a){g.$G("remote",a)},u9=function(){var a=b9();
return!!a&&3!=a.getProxyState()},v9=function(){h9()?a9().stopSession():j9("stopSession called before API ready.");
var a=b9();a&&(a.disconnect(1),o9(null))},jwa=function(){var a=f9().Zc.$_gos();
var b=p9();b&&b9()&&(g.kH(a,b)||a.push(b));return hwa(a)},x9=function(a,b){g.QF.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.BB;this.A=this.o=null;this.J=(0,g.A)(this.QM,this);this.F=(0,g.A)(this.Uk,this);this.G=(0,g.A)(this.PM,this);this.K=(0,g.A)(this.dN,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.xt,this),kwa(this))):c=3;0!=c&&(b?this.xt(c):g.wE((0,g.A)(function(){this.xt(c)},this),0));
var d=fwa();d&&w9(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)},y9=function(a){return new g.fI(a.B.getPlayerContextData())},lwa=function(a,b,c,d,e){var f=y9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.jI(f,b,d);g.t(c)&&(g.hI(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);z9(a,"setPlaylist",l);e||A9(a,f)},kwa=function(a){(0,g.H)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.ya(this.bP,a),this))},a)},mwa=function(a){(0,g.H)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},B9=function(a,b){50>a.C.Mc()&&g.DB(a.C,b)},C9=function(a,b,c){var d=y9(a);
g.hI(d,c);-1E3!=d.g&&(d.g=b);A9(a,d)},z9=function(a,b,c){a.B.sendMessage(b,c)},A9=function(a,b){mwa(a);
a.B.setPlayerContextData(g.kI(b));kwa(a)},w9=function(a,b){a.A&&(a.A.removeUpdateListener(a.J),a.A.removeMediaListener(a.F),a.Uk(null));
a.A=b;a.A&&(D9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.J),a.A.addMediaListener(a.F),a.A.media.length&&a.Uk(a.A.media[0]))},nwa=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=y9(a);b.contentId!=d.videoId&&D9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.hI(d,a.o.getEstimatedTime());A9(a,d)}else D9("No cast media video. Ignoring state update.")},D9=function(a){g.$G("CP",a)},E9=function(a,b,c){return(0,g.A)(function(a){this.oc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.oc("Retrying "+b+" using MDx browser channel."),z9(this,b,c))},a)},owa=function(a,b){var c=!1;
a9()||(c=new g.$H(a,b),c.subscribe("yt-remote-cast2-availability-change",function(a){g.MG("yt-remote-cast-available",a);g.gG("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){$8("onReceiverSelected: "+a.friendlyName);
g.MG("yt-remote-cast-receiver",a);g.gG("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){$8("onReceiverResumed: "+a.friendlyName);
g.MG("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){$8("onSessionChange: "+g.hH(a));
a||g.OG("yt-remote-cast-receiver");g.gG("yt-remote-cast2-session-change",a)}),g.v("yt.mdx.remote.cloudview.instance_",c,void 0),c=!0);
$8("cloudview.createSingleton_: "+c);return c},pwa=function(){var a=0<=g.Gb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.TE||a},F9=function(a,b){h9()?a9().setConnectedScreenStatus(a,b):j9("setConnectedScreenStatus called before ready.")},qwa=function(){$8("clearCurrentReceiver");
g.OG("yt-remote-cast-receiver")},rwa=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){iwa();a({command:"cast.sender.init"});return}}if(window.chrome)if(iwa(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.zh();55<=b?a="55":50<=b&&(a="50");g.Gh("//www.gstatic.com/eureka/clank"+a+g.Eh,g.Dh)}else g.Hh(0);else g.Dh()},swa=function(a){a?(g.MG("yt-remote-session-app",a.app),g.MG("yt-remote-session-name",a.name)):(g.OG("yt-remote-session-app"),g.OG("yt-remote-session-name"));
g.v("yt.mdx.remote.channelParams_",a,void 0)},twa=function(){var a=m9();
if(g.Tb(a)){var a=g.qH(),b=g.NG("yt-remote-session-name")||"",c=g.NG("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.v("yt.mdx.remote.channelParams_",a,void 0)}},uwa=function(){var a=s9();
a?(t9("Resume connection to: "+g.hH(a)),r9(a,0)):(g.zH(),qwa(),t9("Skipping connecting because no session screen found."))},vwa=function(a){t9("remote.onCastSessionChange_: "+g.hH(a));
if(a){var b=p9();b&&b.id==a.id?F9(b.id,"YouTube TV"):(b&&v9(),r9(a,1))}else b9()&&v9()},wwa=function(){var a=jwa(),b=p9();
b||(b=s9());return g.$a(a,function(a){return b&&g.eH(b,a.key)?!0:!1})},xwa=function(){var a=g.NG("yt-remote-cast-receiver");
return a?a.friendlyName:null},ywa=function(a,b,c,d,e){pwa()?owa(b,e)&&(g9(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?ewa(a,c):(window.__onGCastApiAvailable=function(b,d){b?ewa(a,c):(j9("Failed to load cast API: "+d),i9(!1),g9(!1),g.OG("yt-remote-cast-available"),g.OG("yt-remote-cast-receiver"),$va(),c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):gwa():rwa())):$8("Cannot initialize because not running Chrome")},
zwa=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.ug(a)||"";b&&(this.port=":"+b);this.domain=g.tg(a)||"";a=g.Gb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ra(a,"10.0")&&(this.o=!1))},Awa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);
return c},G9=function(){var a=wwa();
!a&&k9()&&xwa()&&(a={key:"cast-selector-receiver",name:xwa()});return a},Bwa=function(){var a=jwa();
k9()&&g.NG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Cwa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};g.KG&&Vva();g.tH();q9||(q9=new zwa,g.BH()&&(q9.g="/api/loungedev"));n9||(n9=g.x("yt.mdx.remote.deferredProxies_")||[],g.v("yt.mdx.remote.deferredProxies_",n9,void 0));twa();var c=f9();if(!c){var d=new g.MH(q9);g.v("yt.mdx.remote.screenService_",d,void 0);c=f9();ywa(a,d,function(a){a?d9()&&F9(d9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.gG("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript),b?b.appId:void 0)}b&&!g.x("yt.mdx.remote.initialized_")&&
(g.v("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+g.lg(b)),H9.push(g.cG("yt-remote-cast2-availability-change",function(){g.gG("yt-remote-receiver-availability-change")})),H9.push(g.cG("yt-remote-cast2-receiver-selected",function(){c9(null);
g.gG("yt-remote-auto-connect","cast-selector-receiver")})),H9.push(g.cG("yt-remote-cast2-receiver-resumed",function(){g.gG("yt-remote-receiver-resumed","cast-selector-receiver")})),H9.push(g.cG("yt-remote-cast2-session-change",vwa)),H9.push(g.cG("yt-remote-connection-change",function(a){a?F9(d9(),"YouTube TV"):s9()||(F9(null,null),qwa())})),a=m9(),b.isAuto&&(a.id+="#dial"),g.$E("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,t9(" -- with channel params: "+g.lg(a)),
swa(a),c.start(),d9()||uwa())},I9=function(){k9()?a9()?h9()?($8("Requesting cast selector."),a9().requestSession()):($8("Wait for cast API to be ready to request the session."),l9.push(g.cG("yt-remote-cast2-api-ready",I9))):j9("requestCastSelector: Cast is not initialized."):j9("requestCastSelector: Cast API is not installed!")},J9=function(a,b,c){g.M.call(this);
this.F=a;this.U=b;this.o=new g.CJ(this);g.N(this,this.o);this.o.R(b,"onCaptionsTrackListChanged",this.cO);this.o.R(b,"captionschanged",this.OM);this.o.R(b,"captionssettingschanged",this.mB);this.o.R(b,"videoplayerreset",this.In);this.o.R(b,"mdxautoplaycancel",this.KF);this.O=this.o.R(b,"onVolumeChange",this.Kz);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.Vz,this);c.subscribe("remotePlayerChange",this.Xk,this);c.subscribe("remoteQueueChange",this.In,this);c.subscribe("autoplayUpNext",this.xz,
this);c.subscribe("previousNextChange",this.Sz,this);c.subscribe("nowAutoplaying",this.Lz,this);c.subscribe("autoplayDismissed",this.wz,this);this.suggestion=null;this.G=new g.WJ(64);this.A=new g.pt(this.hB,500,this);g.N(this,this.A);this.B=new g.pt(this.iB,1E3,this);g.N(this,this.B);this.C={};this.K=new g.pt(this.xB,1E3,this);g.N(this,this.K);this.J=new g.bk(this.KK,1E3,this);g.N(this,this.J);this.M=g.y;this.mB();this.In();this.Xk()},K9=function(a,b){var c=a.F,d=a.U.ia().lengthSeconds;
c.J=b||0;c.g.Y("progresssync",b,d)},Dwa=function(a){K9(a,0);
a.A.stop();L9(a,new g.WJ(64))},N9=function(a,b){if(M9(a)&&!a.D){var c=null;
b&&(c={style:a.U.gi()},g.Zb(c,b));a.g.bB(a.U.ia().videoId,c);a.C=y9(a.g).o}},O9=function(a,b){var c=a.U.Nf();
c?lwa(a.g,a.U.ia().videoId,b,c.Xd(),c.listId.toString()):lwa(a.g,a.U.ia().videoId,b);L9(a,new g.WJ(1))},Ewa=function(a,b){if(b){var c=a.U.Ac("captions","tracklist",{ox:1});
c&&c.length?(a.U.yd("captions","track",b),a.D=!1):(a.U.Ik("captions"),a.D=!0)}else a.U.yd("captions","track",{})},M9=function(a){return y9(a.g).videoId==a.U.ia().videoId},L9=function(a,b){a.B.stop();
var c=a.G;if(!g.bK(c,b)){var d=g.V(b,2);if(d!=g.V(a.G,2)){var e=a.U;g.i2(e.app,d,e.playerType)}a.G=b;Fwa(a.F,c,b)}},P9=function(a){g.W.call(this,{H:"div",
N:"ytp-remote",L:[{H:"div",N:"ytp-remote-display-status",L:[{H:"div",N:"ytp-remote-display-status-icon",L:[g.SD()]},{H:"div",N:"ytp-remote-display-status-text",L:["{{statustext}}"]}]}]});this.o=new g.NV(this,250);g.N(this,this.o);this.A=a;this.R(a,"presentingplayerstatechange",this.B);Gwa(this,g.XU(a))},Gwa=function(a,b){if(3==a.A.Wa()){var c={RECEIVER_NAME:a.A.Ac("remote","currentReceiver").name},c=g.V(b,128)?g.T("YTP_MDX_STATUS_ERROR_2",c):b.xb()||g.V(b,4)?g.T("YTP_MDX_STATUS_PLAYING_2",c):g.T("YTP_MDX_STATUS_CONNECTED_2",
c);
a.Da("statustext",c);a.o.show()}else a.o.hide()},Q9=function(a){g.CV.call(this,a);
this.A={key:g.jH(),name:g.T("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.K=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.WJ(64);this.J=0;var b=g.QU(a).D;b&&(b=b.A&&b.A.g)&&(b=new Y8(a,b),g.N(this,b));b=new P9(a);g.N(this,b);g.rV(a,b.element,5)},Fwa=function(a,b,c){a.F=c;
a.g.Y("presentingplayerstatechange",new g.gK(c,b))},R9=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)v9();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ia().videoId;if(c||d){var e=a.g.Nf();if(e){var f=[];for(var k=0;k<e.getLength();k++)f[k]=e.hc(k).videoId}else f=[a.g.ia().videoId];c={videoIds:f,listId:c,videoId:d,index:Math.max(a.g.Yx(),0),currentTime:a.g.getCurrentTime()}}else c=null;t9("Connecting to: "+g.lg(b));"cast-selector-receiver"==b.key?(c9(c||null),c=c||null,h9()?a9().setLaunchParams(c):j9("setLaunchParams called before ready.")):!c&&u9()&&d9()==b.key?g.gG("yt-remote-connection-change",!0):
(v9(),c9(c||null),c=f9().Zd(),(c=g.lH(c,b.key))&&r9(c,1))}};
g.p(Y8,g.X0);Y8.prototype.J=function(){var a=this.U.Ac("remote","receivers");a&&1<a.length&&!this.U.Ac("remote","quickCast")?(this.F=g.Cb(a,this.B,this),g.Z0(this,(0,g.I)(a,this.B)),a=this.U.Ac("remote","currentReceiver"),g.Y0(this,this.B(a)),this.enable(!0)):this.enable(!1)};
Y8.prototype.B=function(a){return a.key};
Y8.prototype.ff=function(a){return"cast-selector-receiver"==a?g.T("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
Y8.prototype.md=function(a){g.X0.prototype.md.call(this,a);this.U.yd("remote","currentReceiver",this.F[a]);this.A.Qb()};
g.C(Z8,g.mH);g.h=Z8.prototype;g.h.Zd=function(a){return this.Zc.$_gs(a)};
g.h.contains=function(a){return!!this.Zc.$_c(a)};
g.h.get=function(a){return this.Zc.$_g(a)};
g.h.start=function(){this.Zc.$_st()};
g.h.Bo=function(a,b,c){this.Zc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Zc.$_r(a,b,c)};
g.h.oo=function(a,b,c,d){this.Zc.$_un(a,b,c,d)};
g.h.W=function(){for(var a=0,b=this.o.length;a<b;++a)this.Zc.$_ubk(this.o[a]);this.o.length=0;this.Zc=null;Z8.aa.W.call(this)};
g.h.vS=function(){this.Y("screenChange")};
g.h.JO=function(){this.Y("onlineScreenChange")};
var e9=null,l9=[],n9=null,q9=null;g.C(x9,g.QF);g.h=x9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,E9(this,"play")):z9(this,"play"),C9(this,1,g.iI(y9(this))),this.Y("remotePlayerChange")):B9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,E9(this,"pause")):z9(this,"pause"),C9(this,2,g.iI(y9(this))),this.Y("remotePlayerChange")):B9(this,this.pause)};
g.h.HB=function(a){if(1==this.g){if(this.o){var b=y9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.xb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,E9(this,"seekTo",{newTime:a}))}else z9(this,"seekTo",{newTime:a});C9(this,3,a);this.Y("remotePlayerChange")}else B9(this,g.ya(this.HB,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,E9(this,"stopVideo")):z9(this,"stopVideo");var a=y9(this);a.index=-1;a.videoId="";g.gI(a);A9(this,a);this.Y("remotePlayerChange")}else B9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=y9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.A)(function(){D9("set receiver volume: "+d)},this),(0,g.A)(function(){this.oc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.A)(function(){D9("set receiver muted: "+b)},this),(0,g.A)(function(){this.oc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);z9(this,"setVolume",e)}c.muted=b;c.volume=a;A9(this,c)}else B9(this,g.ya(this.setVolume,a,b))};
g.h.bB=function(a,b){if(1==this.g){var c=y9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.lg(b.style),g.Zb(d,c.o));z9(this,"setSubtitlesTrack",d);A9(this,c)}else B9(this,g.ya(this.bB,a,b))};
g.h.wt=function(a,b){if(1==this.g){z9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Rc.id});var c=y9(this);c.audioTrackId=b.Rc.id;A9(this,c)}else B9(this,g.ya(this.wt,a,b))};
g.h.GB=function(a,b){if(1==this.g){if(a&&b){var c=y9(this);g.jI(c,a,b);A9(this,c)}z9(this,"previous")}else B9(this,g.ya(this.GB,a,b))};
g.h.FB=function(a,b){if(1==this.g){if(a&&b){var c=y9(this);g.jI(c,a,b);A9(this,c)}z9(this,"next")}else B9(this,g.ya(this.FB,a,b))};
g.h.Pv=function(){1==this.g?z9(this,"dismissAutoplay"):B9(this,this.Pv)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.Y("proxyStateChange",a,this.g)}x9.aa.dispose.call(this)};
g.h.W=function(){mwa(this);this.B=null;this.C.clear();w9(this,null);x9.aa.W.call(this)};
g.h.xt=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.Y("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.EB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.bP=function(a,b){this.Y(a,b)};
g.h.QM=function(a){if(!a)this.Uk(null),w9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=y9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)D9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,A9(this,b)}};
g.h.Uk=function(a){D9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),nwa(this),this.Y("remotePlayerChange")};
g.h.PM=function(a){a?(nwa(this),this.Y("remotePlayerChange")):this.Uk(null)};
g.h.dN=function(){var a=fwa();a&&w9(this,a)};
g.h.oc=function(a){g.$G("CP",a)};
var H9=[];g.h=zwa.prototype;g.h.Uh=function(a,b,c){var d=this.g;if(g.t(c)?c:this.o)d="https://"+this.domain+this.port+this.g;return g.Bg(d+a,b||{})};
g.h.vt=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Mb:g.ya(this.qS,c,!0),onError:g.ya(this.pS,d),bd:g.ya(this.rS,d)};b&&(c.Rb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.JE(a,c)};
g.h.qS=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.pS=function(a,b){a(Error("Request error: "+b.status))};
g.h.rS=function(a){a(Error("request timed out"))};
g.p(J9,g.M);g.h=J9.prototype;g.h.W=function(){g.M.prototype.W.call(this);this.A.stop();this.B.stop();this.M();this.g.unsubscribe("proxyStateChange",this.Vz,this);this.g.unsubscribe("remotePlayerChange",this.Xk,this);this.g.unsubscribe("remoteQueueChange",this.In,this);this.g.unsubscribe("autoplayUpNext",this.xz,this);this.g.unsubscribe("previousNextChange",this.Sz,this);this.g.unsubscribe("nowAutoplaying",this.Lz,this);this.g.unsubscribe("autoplayDismissed",this.wz,this);this.g=this.F=null};
g.h.yy=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(M9(this)){if(1081!=y9(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":y9(this.g).xb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.J.Zi(c[0],c[1]);break;case "control_subtitles_set_track":N9(this,c[0]);break;case "control_set_audio_track":c=c[0],M9(this)&&this.g.wt(this.U.ia().videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":O9(this,this.U.getCurrentTime());break;case "control_seek":O9(this,c[0]);break;case "control_subtitles_set_track":N9(this,c[0]);break;case "control_set_audio_track":c=c[0],M9(this)&&this.g.wt(this.U.ia().videoId,c)}};
g.h.OM=function(a){this.yy("control_subtitles_set_track",g.Tb(a)?null:a)};
g.h.mB=function(){var a=this.U.Ac("captions","track");g.Tb(a)||N9(this,a)};
g.h.Kz=function(a){if(M9(this)){this.g.unsubscribe("remotePlayerChange",this.Xk,this);var b=Math.round(a.volume);a=!!a.muted;var c=y9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.K.start();this.g.subscribe("remotePlayerChange",this.Xk,this)}};
g.h.cO=function(){g.Tb(this.C)||Ewa(this,this.C);this.D=!1};
g.h.Vz=function(a,b){this.B.stop();2==b&&this.iB()};
g.h.Xk=function(){if(M9(this)){this.A.stop();var a=y9(this.g);switch(a.g){case 1081:L9(this,new g.WJ(8));break;case 1:this.hB();L9(this,new g.WJ(8));break;case 1083:case 3:L9(this,new g.WJ(9));break;case 0:L9(this,new g.WJ(2));this.J.stop();K9(this,this.U.ia().lengthSeconds);break;case 1082:L9(this,new g.WJ(4));break;case 2:L9(this,new g.WJ(4));K9(this,g.iI(a));break;case -1:L9(this,new g.WJ(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.T("YTP_MDX_PLAYER_ERROR")},L9(this,new g.WJ(128,
a))}var a=y9(this.g).o,b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,Ewa(this,a));a=y9(this.g);-1==a.volume||Math.round(this.U.getVolume())==a.volume&&this.U.Ie()==a.muted||this.K.isActive()||this.xB()}else Dwa(this)};
g.h.Sz=function(){this.U.Y("mdxpreviousnextchange")};
g.h.In=function(){M9(this)||Dwa(this)};
g.h.KF=function(){this.g.Pv()};
g.h.xz=function(a){a&&(a=g.JE("/watch_queue_ajax",{method:"GET",Wc:{action_get_watch_queue_item:1,video_id:a},Mb:(0,g.A)(this.bQ,this)}))&&(this.M=(0,g.A)(a.abort,a))};
g.h.bQ=function(a,b){var c=new g.rQ({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.U.Y("mdxautoplayupnext",c)};
g.h.Lz=function(a){(0,window.isNaN)(a)||this.U.Y("mdxnowautoplaying",a)};
g.h.wz=function(){this.U.Y("mdxautoplaycanceled")};
g.h.KK=function(a,b){-1==y9(this.g).g?O9(this,a):b&&this.g.HB(a)};
g.h.xB=function(){if(M9(this)){var a=y9(this.g);this.o.za(this.O);a.muted?this.U.mute():this.U.ug();this.U.setVolume(a.volume);this.O=this.o.R(this.U,"onVolumeChange",this.Kz)}};
g.h.hB=function(){this.A.stop();if(!this.g.na()){var a=y9(this.g);a.xb()&&L9(this,new g.WJ(8));K9(this,g.iI(a));this.A.start()}};
g.h.iB=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(P9,g.W);P9.prototype.B=function(a){Gwa(this,a.state)};g.p(Q9,g.CV);g.h=Q9.prototype;g.h.create=function(){Cwa("embedded"==g.X(this.g).g);this.D.push(g.cG("yt-remote-before-disconnect",this.LM,this));this.D.push(g.cG("yt-remote-connection-change",this.lP,this));this.D.push(g.cG("yt-remote-receiver-availability-change",this.Tz,this));this.D.push(g.cG("yt-remote-auto-connect",this.jP,this));this.D.push(g.cG("yt-remote-receiver-resumed",this.iP,this));this.Tz()};
g.h.load=function(){this.g.wp();g.CV.prototype.load.call(this);this.C=new J9(this,this.g,this.o);var a=dwa(),a=a?a.currentTime:0,b=u9()?new x9(b9(),void 0):null;0==a&&b&&(a=g.iI(y9(b)));0!=a&&(this.J=a||0,this.g.Y("progresssync",a,void 0));Fwa(this,this.F,this.F);g.o2(this.g.app,6)};
g.h.unload=function(){this.g.Y("mdxautoplaycanceled");this.B=this.A;g.Le(this.C,this.o);this.o=this.C=null;g.CV.prototype.unload.call(this);g.o2(this.g.app,5)};
g.h.W=function(){g.dG(this.D);g.CV.prototype.W.call(this)};
g.h.Nk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.yy.apply(this.C,[].concat([a],c instanceof Array?c:Awa(g.ka(c))))};
g.h.wG=function(){return this.loaded?this.C.suggestion:null};
g.h.Gf=function(){return this.o?y9(this.o).Gf:!1};
g.h.hasNext=function(){return this.o?y9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.J};
g.h.wK=function(){var a=y9(this.o),b=this.g.ia();return{allowSeeking:this.g.Kd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+((0,g.G)()-a.A)/1E3:a.C,isPeggedToLive:1>=(a.F?a.B+((0,g.G)()-a.A)/1E3:a.B)-this.getCurrentTime(),loaded:a.K,seekableEnd:a.F?a.B+((0,g.G)()-a.A)/1E3:a.B,seekableStart:0<a.D?a.D+((0,g.G)()-a.A)/1E3:a.D}};
g.h.xK=function(){this.o&&this.o.FB()};
g.h.yK=function(){this.o&&this.o.GB()};
g.h.LM=function(a){1==a&&(this.K=this.o?y9(this.o):null)};
g.h.lP=function(){var a=u9()?new x9(b9(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.K=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Ke(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.K)&&a.videoId==this.g.ia().videoId&&this.g.Wx(a.videoId,g.iI(a)));this.g.Y("videodatachange","newdata",this.g.ia(),3)};
g.h.Tz=function(){this.G=[this.A].concat(Bwa());var a=G9()||this.A;R9(this,a);this.g.ya("onMdxReceiversChange")};
g.h.jP=function(){var a=G9();R9(this,a)};
g.h.iP=function(){this.B=G9()};
g.h.vK=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?I9():R9(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&I9(),!0):!1}};
g.h.zK=function(){z9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Ad=function(){return!1};window._exportCheck==g.Ba&&g.v("ytmod.player.remote",Q9,void 0);})(_yt_player);
