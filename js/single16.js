/**
 * @file name    : single10.js
 * @created time : 2018-08-11
 * @author       : rf.wangchn
 * @email        : rf.wangchn@gmal.com
 * @github       : https://github.com/smpower/
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true
  regexp : true, sloppy  : true, vars     : true,
	white  : true
*/

var userAgent = window.navigator.userAgent;
var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;  /** IE < 11 */
var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;  /** IE11 */
var isEdge = userAgent.indexOf('Edge') > -1 && !isIE;  /** Edge */

if (isIE || isIE11) {
	alert(
		'您使用的 IE 版本过低, 请使用最新的 Edge 浏览器或 Google Chrome 浏览器' +
		'访问我们的网站, 推荐您使用更加快速、友好的 Google Chrome 浏览器。给您' +
		'带来的不便深表歉意！'
	);
}

// 在页面中随机显示一个微信号
// 调用 util.randomWechat() 方法，传入包含若干微信号的数组，将随机返回
// 一个微信号
(function () {
  var wechatEles = document.querySelectorAll('.wechat'),
      xhr = new XMLHttpRequest(),
      res, type, random_wechat
  ;

  const toggleWechat = function(wechat) {  // 根据 pathname 切换微信号
    if (res[wechat].length > 0) {
      const util = new Util();
      const wechatItem = util.randomWechat(res[wechat]);
      wechatEles.forEach((item) => {
	// 随机显示一个微信号
	item.textContent = wechatItem;
      });
      return;
    }
    if (res[wechat]) {
      wechatEles.forEach((item) => {
	// 随机显示一个微信号
	item.textContent = res[wechat];
      });
    }
    else {
      console.error('配置文件 conf.json 有误，未找到 wechats 属性！');
    }
  };

  xhr.open('GET', '../conf.json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      type = xhr.getResponseHeader('Content-type');

      if (type === 'application/json' || type === 'application/json; charset=UTF-8') {
	res = JSON.parse(xhr.responseText);

	let pathname = window.location.pathname;
	const pathnameArr = pathname.split('/');
	pathname = pathnameArr[pathnameArr.length - 1];
	pathname = pathname.split('.')[0];

	switch(pathname) {
	  case 'single16_01':
	    toggleWechat('wechat16_01');
	    break;
	  case 'single16_02':
	    toggleWechat('wechat16_02');
	    break;
	  default:
	    toggleWechat('wechat');
	    break;
	}
      }
    }
  };

  xhr.send(null);
})();

// 图片传送门
(function () {
  const deliveries = document.querySelectorAll('.image-delivery-item');

  deliveries.forEach((deliveryItem) => {
    if (deliveryItem.classList.contains('image-delivery-02')) {
      deliveryItem.querySelector('img').onclick = () => {
	window.location.href = './single07_01_copy.html';
      };
    }

    if (deliveryItem.classList.contains('image-delivery-01')) {
      deliveryItem.querySelector('img').onclick = () => {
	window.location.href = './single01_01_copy.html';
      };
    }

    if (deliveryItem.classList.contains('image-delivery-03')) {
      deliveryItem.querySelector('img').onclick = () => {
	window.location.href = 'http://qing.welltui1.com/single/response/html/single01_01_copy.html';
      };
    }
  });
})();
