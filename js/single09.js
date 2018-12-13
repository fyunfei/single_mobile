// 跳转链接

(function () {
    const toJump = document.querySelectorAll('.list li');
    toJump.forEach((item, index) => {
        item.onclick = function () {
            window.location.href = "http://p.qiao.baidu.com/cps/chat?siteId=12322402&userId=24833752";
        }
    });
})();


// 获取微信号

(function () {
    var wechatEles = document.querySelectorAll('.wechat'),
        xhr = new XMLHttpRequest(),
        res, type, random_wechat;
    xhr.open('GET', '../conf.json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            type = xhr.getResponseHeader('Content-type');
            if (type === 'application/json' || type === 'application/json; charset=UTF-8') {
                res = JSON.parse(xhr.responseText);
                if (res.wechat09) {
                    wechatEles.forEach((item) => {
                        item.textContent = res.wechat09;
                    });
                }
                else {
                    console.log('配置文件 conf.json 有误，未找到 wechats 属性！');
                }
            }
        }
    };
    xhr.send(null);
})();



