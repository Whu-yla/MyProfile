var timer = null;
var backTop;
// 1、找到页面中的按钮
var btn = document.getElementById('btn');
window.onload = function () {
    // 2、绑定点击事件
    btn.onclick = function () {

        timer = setInterval(function () {
            // 3、滚动条距离浏览器顶端的距离
            backTop = document.documentElement.scrollTop || document.body.scroll;
            var speedTop = backTop / 1.05;
            document.documentElement.scrollTop -= backTop - speedTop;
            if (backTop < 20) {
                clearInterval(timer);
            }
        }, 30);
    }
};

// 吸顶灯
var nav = document.getElementById('nav');
var navTop = nav.offsetTop;
// 显示btn临界值
// 是否显示
window.onscroll = function () {
    backTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (backTop < 700 || backTop > 2100) {
        btn.style.display = "none";
    } else {
        btn.style.display = "block";
    }

    // 吸顶灯效果
    if (backTop >= 70) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.zIndex = "999";
    } else {
        nav.style.position = "";
    }
};

// 获取当前时间
function curentTime() {
    var now = new Date();

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();           //秒

    var clock = year + "-";

    if (month < 10)
        clock += "0";

    clock += month + "-";

    if (day < 10)
        clock += "0";

    clock += day + " ";

    if (hh < 10)
        clock += "0";

    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm + ":";

    if (ss < 10) clock += '0';
    clock += ss;
    return (clock);
}

function save() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
    var time = curentTime();
    var inputJson = "{" + "\"" + "name" + "\"" + ":" + name + "," + "\"" + "email" + "\"" + ":" + email + "," + "\"" + "comment" + "\"" + ":" + comment + "," + "\"" + time + "\"" + ":" + time;
    $.ajax({
        type: "post",
        async: false,            //同步或异步请求
        url: "http://localhost:8085/api/message",    //请求发送
        data: inputJson,
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",        //返回数据形式为json
        success: function () {
            alert("success");
        },
        error: function () {
            alert("false");
        },
    })
}