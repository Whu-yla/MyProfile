var timer = null;
var backTop;
// 吸顶灯
var nav = document.getElementById('nav');
var navTop = nav.offsetTop;
// 显示btn临界值
// 是否显示
window.onscroll = function () {
    backTop = document.documentElement.scrollTop || document.body.scrollTop;
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
    if (name === "") {
        swal("失败！", "请输入姓名",
            "error");
        return;
    }
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comments').value;
    if (comment == "I miss you") {
        swal("恭喜你发现彩蛋！", "I miss you,too~",
            "success");
    }
    var time = curentTime();
    var inputJson = "{" + "\"" + "name" + "\"" + ":" + "\"" + name + "\"" + "," + "\"" + "email" + "\"" + ":" + "\"" + email + "\"" + "," + "\"" + "comment" + "\"" + ":" + "\"" + comment + "\"" + "," + "\"" + "Time" + "\"" + ":" + "\"" + time + "\"" + "}";
    $.ajax({
        type: "post",
        async: false,            //同步或异步请求
        url: "http://101.37.15.83:8085/api/message",    //请求发送
        data: inputJson,
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",        //返回数据形式为json
        success: function () {
            swal("感谢您的留言！", "您的支持是我最大的动力",
                "success");
        },
        error: function () {
            swal("失败！", "send failed",
                "error");
        },
    })
}

// 加载留言
window.onload = function () {
    var message1Time = document.getElementById('message1Time');
    var message1Name = document.getElementById('message1Name');
    var message2Time = document.getElementById('message2Time');
    var message2Name = document.getElementById('message2Name');
    var message3Time = document.getElementById('message3Time');
    var message3Name = document.getElementById('message3Name');
    $.ajax({
        type: "get",
        async: true,            //同步或异步请求
        url: "http://101.37.15.83:8085/api/findRecentThreeData",    //请求发送
        data: {},
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",        //返回数据形式为json
        success: function (data) {
            message1Time.innerHTML = data[0].Time;
            message1Name.innerHTML = data[0].name + ":" + data[0].comment;
            message2Time.innerHTML = data[1].Time;
            message2Name.innerHTML = data[1].name + ":" + data[1].comment;
            message3Time.innerHTML = data[2].Time;
            message3Name.innerHTML = data[2].name + ":" + data[2].comment;
        },
        error: function () {
        },
    })
};

//缩放图片到合适大小
function ResizeImages() {
    var myimg, oldwidth, oldheight;
    var maxwidth = 700;
    var maxheight = 800;
    var imgs = document.getElementById('fullStackDeveloper').getElementsByTagName('img');   //如果你定义的id不是article，请修改此处

    for (i = 0; i < imgs.length; i++) {
        myimg = imgs[i];

        if (myimg.width > myimg.height) {
            if (myimg.width > maxwidth) {
                oldwidth = myimg.width;
                myimg.height = myimg.height * (maxwidth / oldwidth);
                myimg.width = maxwidth;
            }
        } else {
            if (myimg.height > maxheight) {
                oldheight = myimg.height;
                myimg.width = myimg.width * (maxheight / oldheight);
                myimg.height = maxheight;
            }
        }
    }
}

//缩放图片到合适大小
ResizeImages();