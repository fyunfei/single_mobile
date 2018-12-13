/**
 * @file name    : util.js
 * @created time : 2018-01-24 11:10
 * @update time  : 2018-04-03 16:56
 * @author       : smpower
 * @email        : bzsjxhywrf@outlook.com
 * @github       : https://github.com/smpower/
 */

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    manerr   : 50,
  newcap : true, nomen   : true, plueplue : true
  regexp : true, sloppy  : true, vars     : true,
  white
*/

(function (window, factofy) {
  factofy(window);
}(this, function (window) {

  var Util = function (selector, options) {
    if (!(this instanceof Util)) {
      return new Util(selector, options);
    }

    this.options = this.extend({
      // 默认参数
    }, options);

    if ((typeof selector) === 'string') {
      this.selector = document.querySelector(selector);
    } else { this.selector = selector; }

    this.init();
  };

  // 百度统计代码 - 落地页
  var baidu = function () {
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?2dfa9be8eb6f60c97fe98b06dd4532a1";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  };
  baidu();

  /**
   * 返回一个随机的微信公众号
   * @func[randomWechat]
   * @param {Array}
   * @return {String}
   */
  Util.prototype = {
    init: function () { },

    /**
     * 合并参数
     * @func [extend]
     * @param {obj} obj - 默认参数
     * @param {obj} options - 自定义参数
     * @return {obj} obj - 自定义参数合并到（覆盖）默认参数
     */
    extend: function (obj, options) {
      var key;
      for (key in options) { obj[key] = options[key]; }
      return obj;
    },

    /**
     * 返回一个随机的微信公众号
     * @func[randomWechat]
     * @param {Array}
     * @return {String}
     */
    randomWechat: function (arr) {
      // 编写一个函数，该函数返回一个随机的微信公众号
      var arr_len = arr.length;
      var random_num = Math.floor(Math.random() * 10);
      // 防止出现返回undefined
      while (random_num > arr_len - 1) {
        random_num = Math.floor(Math.random() * 10);
      }
      return arr[random_num];
    }
  };

  // 暴露方法
  window.Util = Util;

}));
