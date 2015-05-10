var sourceJson=[
              // {ico:"./image/homeicon.png",name:"主页",url:"http://fml927.github.io"},
			   {ico:"./image/wechaticon.jpg",name:"Wechat",url:"wechat.htm"},
			   //{ico:"ic3.png",name:"腾讯QQ",url:"http://www.pengyaou.com"},
			   //{ico:"ic4.png",name:"返回顶部",url:"http://www.pengyaou.com"}
			   ];
$(function(){
	var beside=$("<div id=\"beside\"></div>");
	
	for(var i=0;i<sourceJson.length;i++){
		var children=$("<li><span class=\"besideIco\"></span><a>"+sourceJson[i].name+"</a></li>");
		children.attr("url",sourceJson[i].url);
		children.find("span").css("background-image","url("+sourceJson[i].ico+")").css("width","60px");
		children.click(function(){
			window.open($(this).attr("url"));
		});
		beside.append(children);
	}
	beside.find("li").hover(function(){
		$(this).stop().animate({marginLeft:"0px"},0);
	},function(){$(this).stop().animate({marginLeft:"100px"},0);});
	$(document.body).append(beside);
	beside.animate({top:$(window).height()/2-beside.height()/2+"px"},0);
});

