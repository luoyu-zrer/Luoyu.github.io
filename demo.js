function like()//点赞按钮点击事件
{
    alert("感谢您的点赞！");
    document.getElementById("changeable").innerHTML = "点赞+1";
};

var showmore = {
    Func_content : "展示更多内容",
    ShowFunc : function() {
        document.getElementById("showInfo").innerHTML = "我的功能是" + showmore.Func_content;
    }
};