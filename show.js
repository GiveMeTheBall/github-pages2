// alert()
var init = {
	'jquery_url': './jquery-1.9.0.js',
	'jquery_url_19': 'https://images.pagechoice.net/data/athena/js/jquery-1.9.0.js',
	'mt_API': 'https://pagechoicemotu.gentags.net/mt'
}
function dynamicLoad(url)  {  
    var _doc=document.getElementsByTagName('head')[0];  
    var script=document.createElement('script');  
	script.setAttribute('type','text/javascript');  
	// script.setAttribute('src','http://code.jquery.com/jquery-1.9.0.js'); 
	script.setAttribute('src',url);
	_doc.appendChild(script);  
	script.onload=script.onreadystatechange=function(){  
	    if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){  
	    	Motu.getParams()
		}  
		script.onload=script.onreadystatechange=null;  
	}  
};
function loadCss(url) { //加载css文件
	var head = document.getElementsByTagName("head")[0];
	var link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	link.setAttribute("href", url);
	head.appendChild(link)
	// link.onload=function(){
		Motu.Exhibition(option.type)
	// }
};
dynamicLoad(init.jquery_url_19);
// var allData = {"data":{"active":1,"adsense":[{"cvCode":"https://pctracking.gentags.net/mtc?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=ad&cPosition=1","ext":"xxxx11","form_svCode":"https://pctracking.gentags.net/mtc?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=sbm&cPosition=1","fromUrl":"https://images.pagechoice.net/data/fordring/creative/20170925/1506311487479.html","landingUrl":"https://www.aliyun.com","logoImg_cvCode":"https://pctracking.gentags.net/mtc?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=logo&cPosition=1","logoImg_pvCode":"https://pctracking.gentags.net/mtv?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=logo&cPosition=1","logo_img_src":"https://images.pagechoice.net/data/fordring/creative/20170925/1506311466426.png","logo_landingUrl":"https://www.aliyun.com","positionId":1,"pvCode":"https://pctracking.gentags.net/mtv?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=ad&cPosition=1","url":"https://images.pagechoice.net/data/fordring/creative/20170925/1506311480860.png"},{"cvCode":"https://pctracking.gentags.net/mtc?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=ad&cPosition=2","ext":"xxxxx22","form_svCode":"https://pctracking.gentags.net/mtc?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=sbm&cPosition=2","fromUrl":"https://images.pagechoice.net/data/fordring/creative/20170925/1506311508256.html","landingUrl":"https://www.aliyun.com","logoImg_cvCode":"https://pctracking.gentags.net/mtc?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=logo&cPosition=2","logoImg_pvCode":"https://pctracking.gentags.net/mtv?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=logo&cPosition=2","logo_img_src":"https://images.pagechoice.net/data/fordring/creative/20170925/1506311494137.png","logo_landingUrl":"https://www.aliyun.com","positionId":2,"pvCode":"https://pctracking.gentags.net/mtv?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=ad&cPosition=2","url":"https://images.pagechoice.net/data/fordring/creative/20170925/1506311500988.png"}],"closeCvCode":"https://pctracking.gentags.net/mtc?projectId=44&planId=1506311527845&zoneId=108&mediaId=27&formatId=55&creativeId=116&cType=cls&cPosition=1","creativeId":116,"csss":["./dubble9.css"],"customerId":42,"float_Position":"1","formSubmitUrl":"https://motu.pagechoice.com/athena/creative/add.do","jss":[""],"kakari_Position":"2","mediaId":27,"planId":103,"pointId":".mt_use","positionMark":2,"terminal":"pc","timeLength":"5","trigger_Position":"3","type":2,"zoneId":108},"message":"OK","state":200}
var allData = {"data":{"active":1,"adsense":[{"cvCode":"https://pctracking.gentags.net/mtc?projectId=48&planId=1505887913715&zoneId=117&mediaId=28&formatId=51&creativeId=110&cType=ad&cPosition=1","ext":"","form_svCode":"https://pctracking.gentags.net/mtc?projectId=48&planId=1505887913715&zoneId=117&mediaId=28&formatId=51&creativeId=110&cType=sbm&cPosition=1","fromUrl":"https://images.pagechoice.net/data/fordring/creative/20170920/1505887551697.html","landingUrl":"http://ad.doubleclick.net/ddm/clk/320427028;149489951;n?http://clickc.admaster.com.cn/c/a82559,b1974040,c151,i0,m101,8a1,8b2,h","logoImg_cvCode":"https://pctracking.gentags.net/mtc?projectId=48&planId=1505887913715&zoneId=117&mediaId=28&formatId=51&creativeId=110&cType=logo&cPosition=1","logoImg_pvCode":"https://pctracking.gentags.net/mtv?projectId=48&planId=1505887913715&zoneId=117&mediaId=28&formatId=51&creativeId=110&cType=logo&cPosition=1","logo_img_src":"https://images.pagechoice.net/data/fordring/creative/20170920/1505887547766.jpg","logo_landingUrl":"http://ad.doubleclick.net/ddm/clk/320427028;149489951;n?http://clickc.admaster.com.cn/c/a82559,b1974040,c151,i0,m101,8a1,8b2,h","positionId":1,"pvCode":"https://pctracking.gentags.net/mtv?projectId=48&planId=1505887913715&zoneId=117&mediaId=28&formatId=51&creativeId=110&cType=ad&cPosition=1","url":"https://images.pagechoice.net/data/fordring/creative/20170920/1505887549707.jpg"}],"closeCvCode":"https://pctracking.gentags.net/mtc?projectId=48&planId=1505887913715&zoneId=117&mediaId=28&formatId=51&creativeId=110&cType=cls&cPosition=1","creativeId":110,"csss":["./show.css"],"customerId":42,"float_Position":"1","formSubmitUrl":"https://motu.pagechoice.com/athena/creative/add.do","jss":[""],"kakari_Position":"2","mediaId":99,"planId":98,"pointId":".detailPic","positionMark":1,"terminal":"pc","timeLength":"5","trigger_Position":"3","type":3,"zoneId":117},"message":"OK","state":200};
// option = allData.data;
var kakari_Position_left , float_Position_left , mMBM_left ,mtHeader_left , mtPointer_left;
var mp=[],mc=[],mh=[], mp2=[],mc2=[],mh2=[];
var status_code;
var Motu={
	//获取mt数据
	getParams : function(){
		//如果200
		console.log(4)
		var dqdz = window.location.href;
		var newDqdz;
		var h6
		if($("h6 a").length==1){
			h6 = $("h6 a").attr("href")
		}else if($("#hfCarLevel").length==1){
			h6 = $("#hfCarLevel").attr("value")
		};
		// $.ajax({
		// 	type: 'post',
		// 	url: init.mt_API,
		// 	timeout: 5000000,
		// 	dataType: 'json',
		// 	data: JSON.stringify({"href":dqdz+'?pz='+h6}),
		// 	async: false,
		// 	xhrFields: {
		//         withCredentials: true
		//     },
		// 	crossDomain: true, //保留cookie
		// 	success: function(data) {
		// 		console.log(data)
		// 		option=data.data;
		// 		if(data.state == 200 && data.data) {
		// 			option = data.data;
		// 			console.log("请求成功！");
		// 			// option.active=1;		
		// 			loadCss(option.csss);
		// 		} else {
		// 			console.log("请求数据为空！");
		// 		}
		// 	},
		// 	error: function(XMLHttpRequest, textStatus, errorThrown) {
		// 		console.log("请求失败！");
		// 	}
		var data = {"data":{"active":1,"adsense":[{"cvCode":"https://pctracking.gentags.net/mtc?projectId=44&planId=1510555242906&zoneId=110&mediaId=27&formatId=56&creativeId=148&cType=ad&cPosition=1","ext":"","form_svCode":"https://pctracking.gentags.net/mtc?projectId=44&planId=1510555242906&zoneId=110&mediaId=27&formatId=56&creativeId=148&cType=sbm&cPosition=1","fromUrl":"https://images.pagechoice.net/data/fordring/creative/20171113/1510555062398.html","landingUrl":"https://www.baidu.com","positionId":1,"pvCode":"https://pctracking.gentags.net/mtv?projectId=44&planId=1510555242906&zoneId=110&mediaId=27&formatId=56&creativeId=148&cType=ad&cPosition=1","url":"https://images.pagechoice.net/data/fordring/creative/20171113/1510554978212.png"}],"closeCvCode":"https://pctracking.gentags.net/mtc?projectId=44&planId=1510555242906&zoneId=110&mediaId=27&formatId=56&creativeId=148&cType=cls&cPosition=1","creativeId":148,"csss":["./long.css"],"customerId":42,"formSubmitUrl":"https://motu.pagechoice.com/creative/add.do","jss":[""],"mediaId":27,"planId":134,"pointId":" .vehicle-box","positionMark":1,"terminal":"pc","timeLength":"5","trigger_Position":"3","type":4,"zoneId":110},"message":"OK","state":200}
		option = allData.data;
		loadCss(option.csss)
		// });
	},
	Exhibition : function(type){
		switch(type)
		{
		case 1: //单挂角交互
		  // 执行代码块 1
		  Motu.addClassSingle(option.pointId)
		  break;
		case 2: //双挂角交互
		  Motu.addClassDubble(option.pointId)
		  break;
		case 3: //单挂角展示
		  Motu.addClassSingleShow(option.pointId,option.mediaId)
		  break;
		case 4: //长底栏交互
		  Motu.addClassLong(option.pointId)
		  break;
		case 5: //短底栏交互
		  // 执行代码块 5
		  Motu.addClassShort(option.pointId)
		  break;
		default:
		  // n 与 case 1 和 case 2 不同时执行的代码
		}
	},
	
	addClassSingle : function(pointId){
		$(pointId+ ':first').parent("p").css({"position":"relative"})
		// alert(pointId)
		$(pointId+'>img:first').after('<div class="mt-main"><div class="mtMainHead"><div class="mMhAd"><a target="view_window" href='+option.adsense[0].logo_landingUrl+'></a></div><div class="mMhClose"></div></div><div class="mtMainBody"><div class="mMBM"><div class="mMBPic"><a target="view_window" href='+option.adsense[0].landingUrl+'></a></div><div class="success_page"><p></p><p>提交成功感谢您的参与</p><p class="success_back">返回</p></div><div class="mMBForm"><p id="mt_zc1">注册</p><form><p><span class="bbbb">province</span><select  id="mt_province"  onblur="change(this);return false"></select><span class="aaaa">请输入省份</span></p><p><span  class="bbbb">city</span><select id="mt_city"></select><span class="aaaa">请输入城市</span></p><p><span  class="bbbb">hometown</span><select id="mt_homeTown"></select><span class="aaaa">请输入经销商</span></p></form><p><span  class="bbbb">name</span><input id="mt_name" maxlength="6" value="请输入姓名"><span class="aaaa">请填写正确姓名</span></p><p><span  class="bbbb">phone</span><input id="mt_phone" maxlength="11" value="请输入手机号"><span class="aaaa">请输入正确手机号</span></p><p><button id="submit">提交注册</button></p></div><div class="mMBClose clearfix"><div class="mMBCclose">关闭广告</div><div class="mMBCad">广告</div></div></div></div></div>')
		$(pointId+'>img:first').after('<div class="motu_monitor"></div>')
		
		// loadCss(option.csss)
		//对应背景图案设置
		$(".mMhAd").css({"background":"url("+option.adsense[0].logo_img_src+")"})
		//小图曝光监测
		if(option.adsense[0].logoImg_pvCode){
			var arr = option.adsense[0].logoImg_pvCode.split(',');
			for (var i = 0; i<arr.length; i++) {
				$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
			};
		}
		$(".mMBPic").css({"background":"url("+option.adsense[0].url+")"})
		Motu.wz(option);
		Motu.getCityData(option.adsense[0].fromUrl,"mt_province","mt_city","mt_homeTown",mp,mc,mh,"mt_zc1","mt_name","mt_phone");
		Motu.single(option);
		Motu.stopGo(option);
		Motu.aboutInput(option);
		Motu.jc(option);

	},
	addClassDubble : function(pointId){
		$(pointId+ ':first').parent("p").css({"position":"relative"})
		$(pointId+':first').after('<div class="mt-main"><div class="mtPointer"><div class="mmpOne"></div><div class="mmpTwo"></div></div><div class="mtHeader"><div class="mhOne"><div class="mhOAd"><a href='+option.adsense[0].logo_landingUrl+' target="view_window"></a></div><div class="mhOClose"></div></div><div class="mhTwo"><div class="mhTAd"><a target="view_window" href='+option.adsense[1].logo_landingUrl+'></a></div><div class="mhTClose"></div></div></div><div class="mtMainBody"><div class="mBOne"><div class="mBOPic"><a target="view_window" href='+option.adsense[0].landingUrl+'></a></div><div class="success_page"><p></p><p>提交成功感谢您的参与</p><p class="success_back">返回</p></div><div class="mBOForm"><p id="mt_zc1">注册</p><form><p><span class="bbbb">province</span><select id="mt_province"></select><span class="aaaa">请输入省份</span></p><p><span class="bbbb">city</span><select id="mt_city"></select><span class="aaaa">请输入城市</span></p><p><span class="bbbb">hometown</span><select id="mt_homeTown"></select><span class="aaaa">请输入经销商</span></p></form><p><span class="bbbb">name</span><input id="mt_name" maxlength="6" value="请输入姓名"><span class="aaaa">请填写正确姓名</span></p><p><span class="bbbb">phone</span><input maxlength="11" id="mt_phone" value="请输入手机号"><span class="aaaa">请输入手机号</span></p><p><button id="submit">提交注册</button></p></div><div class="mBOClose clearfix"><div class="mbocClose">关闭广告</div><div class="mbocCad">广告</div></div></div><div class="mBTwo"><div class="mBTPic"><a target="view_window" href='+option.adsense[1].landingUrl+'></a></div><div class="success_page2"><p></p><p>提交成功感谢您的参与</p><p class="success_back2">返回</p></div><div class="mBTForm"><p id="mt_zc2">注册</p><form><p><span class="bbbb">province2</span><select id="mt_province2"></select><span class="aaaa">请输入省份</span></p><p><span class="bbbb">city2</span><select id="mt_city2"></select><span class="aaaa">请输入城市</span></p><p><span class="bbbb">hometown2</span><select id="mt_homeTown2"></select><span class="aaaa">请输入经销商</span></p></form><p><span class="bbbb">name2</span><input id="mt_name2" maxlength="6" value="请输入姓名"><span class="aaaa">请输入正确姓名</span></p><p><span class="bbbb">phone2</span><input id="mt_phone2" maxlength="11" value="请输入手机号"><span class="aaaa">请输入手机号</span></p><p><button id="submit2">提交注册</button></p></div><div class="mBTClose clearfix"><div class="mbtcClose">关闭广告</div><div class="mbtcCad">广告</div></div></div></div></div>')
		$(pointId+':first').after('<div class="motu_monitor"></div>')
		// loadCss(option.csss)
		//对应背景图设置
		$(".mhOAd").css({"background":"url(./dubble/01.jpg)","background-size":"100% 100%"})
		$(".mhTAd").css({"background":"url(./dubble/02.jpg)","background-size":"100% 100%"})
		$(".mBOPic").css({"background":"url(./dubble/01car.jpg)","background-size":"100% 100%"})
		$(".mBTPic").css({"background":"url(./dubble/02car.jpg)","background-size":"100% 100%"})


		$(".mt-main").hide()
		Motu.wz(option);
		Motu.getCityData(option.adsense[0].fromUrl,"mt_province","mt_city","mt_homeTown",mp,mc,mh,"mt_zc1","mt_name","mt_phone");
		Motu.dubble(option);
		Motu.stopGo(option);
		Motu.aboutInput(option);
		Motu.jc(option);
	},
	addClassSingleShow : function(pointId,mediaId){
		if(mediaId==99){
			$(pointId+ ':first').css({"position":"relative"})
			$(pointId+'>img:first').after('<div class="mt-main"><div class="mtMainHead"><div class="mMhAd"><a target="view_window" href='+option.adsense[0].logo_landingUrl+'></a></div><div class="mMhClose"></div></div><div class="mtMainBody"><div class="mMBM"><a target="view_window" href='+option.adsense[0].landingUrl+'><img class="mMBPic" src="./show/show2.jpg"></a><div class="mMBClose clearfix"><div class="mMBCclose">关闭广告</div><div class="mMBCad">广告</div></div></div></div></div>')
			$(pointId+'>img:first').after('<div class="motu_monitor"></div>')

		}else{
			$(pointId+ ':first').parent("p").css({"position":"relative"})
			// alert(pointId)
			$(pointId+'>img:first').after('<div class="mt-main"><div class="mtMainHead"><div class="mMhAd"><a target="view_window" href='+option.adsense[0].logo_landingUrl+'></a></div><div class="mMhClose"></div></div><div class="mtMainBody"><div class="mMBM"><a target="view_window" href='+option.adsense[0].landingUrl+'><img class="mMBPic" src="./images/20170515111427826.jpg"></a><div class="mMBClose clearfix"><div class="mMBCclose">关闭广告</div><div class="mMBCad">广告</div></div></div></div></div>')
			$(pointId+'>img:first').after('<div class="motu_monitor"></div>')
		}
		
		//对应背景图案设置
		$(".mMhAd").css({"background":"url(./show/show1.jpg)"})
		//小图曝光监测
		if(option.adsense[0].logoImg_pvCode){
			var arr = option.adsense[0].logoImg_pvCode.split(',');
			for (var i = 0; i<arr.length; i++) {
				$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
			};
		}
		$(".mMBPic").css({"background":"url(./show/show2.jps)"})
		Motu.wz(option);
		Motu.getCityData(option.adsense[0].fromUrl,"mt_province","mt_city","mt_homeTown",mp,mc,mh,"mt_zc1","mt_name","mt_phone");
		Motu.single(option);
		Motu.stopGo(option);
		Motu.aboutInput(option);
		Motu.jc(option);
	},
	addClassLong : function(pointId){
		$(pointId+':first').append('<div class="mt_short_bottom"><div class="mt_ad"><a href="'+option.adsense[0].landingUrl+'"><img src="'+option.adsense[0].url+'"></a></div><div class="mt_select_box"><div class="mt_interactive">官方网站<div class="mt_closeButton">x</div></div><div class="mt_form"><span>地区</span><select id="mt_province"></select><select id="mt_city"></select><span>姓名</span><input id="mt_name" placeholder="请输入您的名字" maxlength="6"><span class="mt_name_error">请输入正确姓名</span><span>手机</span><input id="mt_phone" placeholder="请输入11位手机号" maxlength="11"><span class="mt_phone_error">请输入正确手机号</span><span class="mt_address_error">请输入正确地址</span><button id="mt_ljbm">立即报名</button></div></div></div>')
		$(pointId+':first').append('<div class="motu_monitor"></div>')
		Motu.shortBottom(option)
		Motu.getCityData(option.adsense[0].fromUrl,"mt_province","mt_city","",mp,mc,mh,"","mt_name","mt_phone");
		Motu.jc(option);
		//大图曝光监测
		if(option.adsense[0].pvCode){
			var arr = option.adsense[0].pvCode.split(',');
			for (var i = 0; i<arr.length; i++) {
				$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
			};
		}
		if(option.active==1){
			console.log("1")
			$(".mt_select_box").css({"display":"block"}).animate({
				"color":"#fff"
			},5000,function(){
				$(".mt_select_box").css({"display":"none"})
			})
		}
	},
	addClassShort : function(pointId){
		$(pointId+':first').append('<div class="mt_short_bottom"><div class="mt_ad"><a href="'+option.adsense[0].landingUrl+'"><img src="'+option.adsense[0].url+'"></a></div><div class="mt_select_box"><div class="mt_interactive">官方网站<div class="mt_closeButton">x</div></div><div class="mt_form"><span>地区</span><select id="mt_province"></select><select id="mt_city"></select><span>姓名</span><input id="mt_name" placeholder="请输入您的名字" maxlength="6"><span class="mt_name_error">请输入正确姓名</span><span>手机</span><input id="mt_phone" placeholder="请输入11位手机号" maxlength="11"><span class="mt_phone_error">请输入正确手机号</span><span class="mt_address_error">请输入正确地址</span><button id="mt_ljbm">立即报名</button></div></div></div>')
		$(pointId+':first').append('<div class="motu_monitor"></div>')
		Motu.shortBottom(option)
		Motu.getCityData(option.adsense[0].fromUrl,"mt_province","mt_city","",mp,mc,mh,"","mt_name","mt_phone");
		Motu.jc(option);
		//大图曝光监测
		if(option.adsense[0].pvCode){
			var arr = option.adsense[0].pvCode.split(',');
			for (var i = 0; i<arr.length; i++) {
				$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
			};
		}
		if(option.active==1){
			console.log("1")
			$(".mt_select_box").css({"display":"block"}).animate({
				"color":"#fff"
			},5000,function(){
				$(".mt_select_box").css({"display":"none"})
			})
		}
	},
	
	//获取kakari_position获取挂角位置
	wzxx1 : function(){
		if(option.kakari_Position==1){
			if(option.type==1||option.type==3){
				kakari_Position_left='-26px';
			}else if(option.type==2){
				kakari_Position_left='-48px';
			}
		}else if(option.kakari_Position==2){
			kakari_Position_left=$(option.pointId).width();
			mtHeader_left = "0px";
			mtPointer_left = "26px";
		}
		Motu.wzxx2();
	},
	//根据float_position获取内容位置
	// wzxx2 : function(){
	// 	if(option.float_Position==1){
	// 		if(option.type==1){
	// 			float_Position_left='-200px';
	// 			mMBM_left='202px';
	// 			$(".mMBM").css({"float":"right"})
	// 			$(".aaaa").css({"right":"100%"})
	// 		}else if(option.type==2){
	// 			float_Position_left='-300px';
	// 			mMBM_left='302px';
	// 			$(".mMBM").css({"float":"right"})
	// 			$(".aaaa").css({"right":"100%"})
	// 		}
	// 	}else if(option.float_Position==2){
	// 		if(option.type==1){
	// 			float_Position_left='28px';
	// 			mMBM_left='-202px';
	// 			$(".mMBM").css({"float":"left"})
	// 			$(".aaaa").css({"left":"100%"})
	// 		}else if(option.type==2){
	// 			float_Position_left="50px"
	// 			mMBM_left='-202px';
	// 			$(".mMBM").css({"float":"left"})
	// 			$(".aaaa").css({"left":"100%"})
	// 		}
	// 	}
	// },
	wzxx2 : function(){
		if(option.float_Position==1){
			
			if(option.type==3){
				float_Position_left='-354px';
				mMBM_left='354px';
			}else{
				float_Position_left='-200px';
				mMBM_left='200px';
			}
		}else if(option.float_Position==2){
			mMBM_left='-200px';
			console.log(option.type)
			if(option.type==3){
				mMBM_left='-354px'
			}
			if(option.type==1){
				float_Position_left='26px';
			}else if(option.type==2){
				float_Position_left="48px"
			}
		}
	},
	//布置挂角位置和内容位置。
	wz:function(option){
		Motu.wzxx1();
		$(".mt-main").css({"left":kakari_Position_left});
		$(".mtHeader").css({"left":mtHeader_left});
		$(".mtPointer").css({"left":mtPointer_left})
		$(".mtMainBody").css({"left":float_Position_left})
		$(".mMBM,.mBOne,.mBTwo").css({"left":mMBM_left})
		Motu.active(option);
	},
	//挂角展开
	mMBMove:function(mout){
		mout.parent().show()
		// if(option.type==2&&option.float_Position==1){
		// 	mout.animate({
		// 		left:"102px"
		// 	},500,function(){
		// 		$(".mMhClose,.mhOClose,.mhTClose").css({"background-position":"100% 0%"})
		// 	})
		// }else{
			mout.animate({
				left:"0px"
			},500,function(){
				$(".mMhClose,.mhOClose,.mhTClose").css({"background-position":"100% 0%"})
				if(mout.selector==".mMBM"){
					// 大图曝光监测
					if(option.adsense[0].pvCode){
						var arr = option.adsense[0].pvCode.split(',');
						for (var i = 0; i<arr.length; i++) {
							$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
						};
					}
				}
			})
		// }
		
	},
	//挂角收回
	mMBMoveBack:function(mout){
		console.log(mMBM_left)
		mout.delay(500).animate({
			left:mMBM_left
		},500,function(){
				$(".mMhClose,.mhOClose,.mhTClose").css({"background-position":"0% 0%"})

			if(option.type==2){
				if(mout.css("left")==mMBM_left&&mout.siblings().css("left")==mMBM_left){
					mout.parent().hide()
				}
			}else if(option.type==1||option.type==3){
				// if(mout.css("left")==mMBM_left){
					mout.parent().hide()	
					console.log('console3333')
				// }
			}
		});
	},
	//获取表单信息
	getCityData:function(url,obj_1,obj_2,obj_3,p,c,h,zc,name,phone){
		$.ajax({
			type: "get",
			// url: "https://images.pagechoice.net/data/fordring/creative/20170920/1505887551697.html",
			url:url,
			dataType:"jsonp",  
			jsonpCallback: "showData",
			async: false,
			global: false,
			cache:true,
			success: function(data) {
				var  obj  =  data.geoStores;
				console.log(data.rows,name,phone,zc)
				$("#"+zc).text(data.rows[0].title);
				$("#"+obj_1).siblings(".bbbb").text(data.rows[1].title)
				$("#"+obj_2).siblings(".bbbb").text(data.rows[2].title)
				$("#"+obj_3).siblings(".bbbb").text(data.rows[3].title)
				$("#"+name).siblings(".bbbb").text(data.rows[4].title)
				$("#"+phone).siblings(".bbbb").text(data.rows[5].title)

				for (x in obj){
				      p.push(x);
				   	  var a2 = []
				   	  for (bb in obj[x]){
				   	  	a2.push(bb)
				   	  }
				 	 c.push(a2)
				   	  for(var aa in obj[x]){
				   	  	var a1 =[];
				   	  	if(obj[x].hasOwnProperty(aa)){
				   	  		for(var a in obj[x]){
				   	  			a1.push(obj[x][a]);
				   	  		}
				   	  		h.push(a1);
				   	  		break;
				   	  	}
				   	  }
				  }
				Motu.insertOption(obj_1,obj_2,obj_3,p,c,h)
				if(option.adsense.length==2&&mp2.length==0){
					Motu.getCityData(option.adsense[1].fromUrl,"mt_province2","mt_city2","mt_homeTown2",mp2,mc2,mh2,"mt_zc2","mt_name2","mt_phone2")
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log("请求失败！");
			}
		});
	},
	//获取电话号码注册信息
	mt_setData:function(data){
		$.ajax({
			type: 'post',
			url: option.formSubmitUrl,
			contentType:'application/json',
			data: data,
			async: false,
			dataType: "json",
			success: function(data) {
				if(data.status_code == 200) {
					console.log("请求成功！yy");
					status_code = data.status_code
				} else if(data.status_code == 300){
					console.log("重复")
					status_code = data.status_code
				}else{
					console.log("请求数据为空！");
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log("请求失败！");
			}

		});
	},
	//select 插入 option
	insertOption:function(obj_1,obj_2,obj_3,p,c,h){
		//定义默认数据
		var ar = ["请选择","请选择","请选择"];
		
			//初始化
			$("<option>"+ar[0]+"</option>").appendTo($("#"+obj_1));
			$("<option>"+ar[1]+"</option>").appendTo($("#"+obj_2));
			$("<option>"+ar[2]+"</option>").appendTo($("#"+obj_3));
			//初始化p
			for (var i=0;i<p.length;i++){
				$("<option>"+p[i]+"</option>").appendTo($("#"+obj_1));
			}	
		//响应p的change事件
		var pindex;
		$("#"+obj_1).change(function(){
			//获取索引
			pindex = $("#"+obj_1).get(0).selectedIndex;
			//清空c和h
			$("#"+obj_2).empty();
			//重新给c填充内容
			$("<option>"+ar[1]+"</option>").appendTo($("#"+obj_2));
				if (pindex!=0){
					for (var k=0;k<c[pindex-1].length;k++){
						$("<option>"+c[pindex-1][k]+"</option>").appendTo($("#"+obj_2));
					}
				}	
			//清空h
			$("#"+obj_3).empty();
			$("<option>"+ar[2]+"</option>").appendTo($("#"+obj_3));
		});			
		//响应c的change事件
		var cindex;
		$("#"+obj_2).change(function(){
			cindex = $("#"+obj_2).get(0).selectedIndex;
			//清空h
			$("#"+obj_3).empty();
			//重新给h填充内容
			$("<option>"+ar[2]+"</option>").appendTo($("#"+obj_3));
			if (cindex!=0){
				for (var j=0;j<h[pindex-1][cindex-1].length;j++){
					$("<option>"+h[pindex-1][cindex-1][j]+"</option>").appendTo($("#"+obj_3));
				}
			}
		});
	},
	//挂角双展开和收回
	dubble:function(option){
		var ca;
		$("select,#mt_name,#mt_name2,#mt_phone,#mt_phone2").click(function(){
			ca=1;
		})
		$(".mt-main").unbind().hover(function(){
		},function(){
			console.log("console0000000")
			$(".mtMainBody").css({"overflow":"hidden"});
			$(".aaaa").hide();
			console.log("abcdefggfedcba")
			console.log(ca)
			if(ca==1){
				Motu.mMBMoveBack($(".mBOne"));
				Motu.mMBMoveBack($(".mBTwo"));
				Motu.mMBMoveBack($(".mMBM"))
				$(".mtMainBody").css({"overflow":"hidden"})
				$(".aaaa").hide();
				if(option.type==1&&ca==1){
					Motu.single(option);
				}else if(option.type==2&&ca==1){
					console.log("111")
					Motu.dubble(option);
				}
			}
		})
		// $(".mtPointer").unbind().hover(function(){
		// 	$(".mtMainBody").css({"overflow":"hidden"});
		// 	$(".aaaa").hide();

		// },function(){})
		console.log("bbbba")
		var y;
		// if(option.float_Position==1){
		// 	y='102px'
		// }else if(option.float_Position==2){
			y=0
		// }
		//触碰和离开a
		$(".mmpOne,.mmpTwo").unbind().hover(function(){
			//a的变化
			$(this).css({"background":"red"}).siblings().css({"background":"transparent"})
			//b的变化
			var x = $(this).index()
			$(".mtHeader >div").eq(x).show().siblings().hide();
			// console.log(option.adsense[x].logoImg_pvCode)
			console.log(option.adsense[x].logoImg_pvCode)
			//小图曝光监测
			if(option.adsense[x].logoImg_pvCode){
				var arr = option.adsense[x].logoImg_pvCode.split(',');
				for (var i = 0; i<arr.length; i++) {
					$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
				};
			}
			//c的变化
			if($(".mtMainBody > div").eq(x).css("left")==y){
				$(".mtMainBody > div").eq(x).stop(true,false)
			}else if($(".mtMainBody > div").eq(x).css("left")!=y){
				$(".mtMainBody > div").eq(x).siblings().css({"left":mMBM_left}).hide()
				$(".mtMainBody > div").eq(x).show().stop(true,false)
				Motu.mMBMove($(".mtMainBody > div").eq(x));
			}
		},function(){
			var x = $(this).index()
			Motu.mMBMoveBack($(".mtMainBody > div").eq(x))
		})
		//触碰和离开b
		var dx ;
		if(option.trigger_Position==1){
			dx = ".mtHeader"
		}else if(option.trigger_Position==2){
			dx = option.pointId+":first"
		}else if(option.trigger_Position==3){
			dx = ".mtHeader,"+option.pointId+":first"
		}
		console.log(dx)
		$(dx).unbind().hover(function(){
			console.log("aaaab")
			$(".mMhClose,.mhOClose,.mhTClose").css({"background-position":"100% 0%"})
			var x = $(".mtHeader > div:visible").index();
			//如果全展开或者半展开，则保持不变或者全展开。如果未展开，则切换到另一种并展开。
			if($(".mtMainBody > div").eq(x).css("left")==y){
				$(".mtMainBody > div").eq(x).stop(true,false)
			}else if($(".mtMainBody > div").eq(x).css("left")==mMBM_left){//如果未展开
				//a变化
				$(".mtPointer > div").eq(x).css({"background":"transparent"}).siblings().css({"background":"red"})
				//b变化
				$(".mtHeader").children("div:visible").hide().siblings().show();
				//小图曝光监测
				if(option.adsense[x].logoImg_pvCode){
					var arr = option.adsense[x].logoImg_pvCode.split(',');
					for (var i = 0; i<arr.length; i++) {
						$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
					};
				}
				//c变化
				$(".mtMainBody").show();
				$(".mtMainBody > div").eq(x).hide().stop(true,false).siblings().show().stop(true,false).animate({left:y},500,function(){
					//大图曝光监测
					if(option.adsense[x].pvCode){
						var arr = option.adsense[x].pvCode.split(',');
						for (var i = 0; i<arr.length; i++) {
							$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
						};
					}
				})
			}else{
				$(".mtMainBody > div").eq(x).show().stop(true,false).siblings().hide().css({"left":mMBM_left})
				$(".mtMainBody > div").eq(x).show().stop(true,false).animate({left:y},200)
			}
		},function(){
			var x = $(".mtHeader > div:visible").index()
			console.log(x)
			console.log($(".mtMainBody > div").eq(x))
			Motu.mMBMoveBack($(".mtMainBody > div").eq(x))
		})
		//触碰和离开c
		$(".mtMainBody > div").unbind().hover(function(){
			var x = $(".mtHeader > div:visible").index();
			$(this).stop(true,false).animate({left:y},500,function(){
				//大图曝光监测
				if(option.adsense[x].pvCode){
					var arr = option.adsense[x].pvCode.split(',');
					for (var i = 0; i<arr.length; i++) {
						$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
					};
				}
			})
			
		},function(){
			Motu.mMBMoveBack($(this))
		})
	},
	//挂角单的展示与收回
	single:function(option){
		var ca;
		$("select,#mt_name,#mt_name2,#mt_phone,#mt_phone2").click(function(){
			ca=1;
		})
		$(".mt-main").unbind().hover(function(){
		},function(){
			console.log("console0000000")
			// $(".mtMainBody").css({"overflow":"hidden"});
			// $(".aaaa").hide();
			// console.log("abcdefggfedcba")
			// console.log($(this))
			// if(ca==1){
			// 	Motu.mMBMoveBack($(".mBOne"));
			// 	Motu.mMBMoveBack($(".mBTwo"));
			// 	Motu.mMBMoveBack($(".mMBM"))
			// 	$(".mtMainBody").css({"overflow":"hidden"})
			// 	$(".aaaa").hide();
			// 	if(option.type==1&&ca==1){
			// 		Motu.single(option);
			// 	}else if(option.type==2&&ca==1){
			// 		console.log("111")
			// 		Motu.dubble(option);
			// 	}
			// }
		})



		$(".mt-main").unbind().hover(function(){
		},function(){
			if (window.event.toElement == null) return;
			console.log("console0000000")
			$(".mtMainBody").css({"overflow":"hidden"});
			$(".aaaa").hide();
			console.log("abcdefggfedcba")
			console.log(ca)
			if(ca==1){
				Motu.mMBMoveBack($(".mBOne"));
				Motu.mMBMoveBack($(".mBTwo"));
				Motu.mMBMoveBack($(".mMBM"))
				$(".mtMainBody").css({"overflow":"hidden"})
				$(".aaaa").hide();
				if(option.type==1&&ca==1){
					Motu.single(option);
				}else if(option.type==2&&ca==1){
					console.log("111")
					Motu.dubble(option);
				}
			}
		})
		$("select").hover(function(){
			console.log("aaabb")
		},function(){
			console.log("afaslfjdskfjsla;jkl;")
		})
		var x ;
		if(option.trigger_Position==1){
			x = ".mtMainHead,.mMBM"
		}else if(option.trigger_Position==2){
			x = option.pointId+'>img :first'+",.mMBM"
		}else if(option.trigger_Position==3){
			x = ".mtMainHead,.mMBM,"+option.pointId+'>img:first'
		}
		
		$(x).unbind().hover(function(){
			console.log('console')
			$(".mtMainBody").show();
			if($(".mMBM").css("left")=="0px"){
				$(".mMBM").stop(true,false)
			}else if($(".mMBM").css("left")==mMBM_left){
				console.log('aaa')
				$(".mMBM").stop(true,false)
				Motu.mMBMove($(".mMBM"))
			}else{
				$(".mMBM").stop(true,false).animate({left:"0"},200,function(){
					// //大图曝光监测
					// if(option.adsense[0].pvCode){
					// 	var arr = option.adsense[0].pvCode.split(',');
					// 	for (var i = 0; i<arr.length; i++) {
					// 		$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
					// 		console.log("jiance")
					// 	};
					// }
					$(".mMhClose,.mhOClose,.mhTClose").css({"background-position":"100% 0%"})
				})
			}
		},function(){
			console.log("console2")
			Motu.mMBMoveBack($(".mMBM"));

		});
	},
	shortBottom:function(option){
		$(".mt_ad").hover(function(){
			$(".mt_select_box").show();
		});
		$("#mt_ljbm").click(function(){
			console.log($("#mt_name").val().length,$("#mt_phone").val().length,$("#mt_city").val())
			if($("#mt_city").val()=="请选择"){
				$(".mt_address_error").show();
			}else{
				$(".mt_address_error").hide();

			}
			if($("#mt_name").val().length<2){
				$(".mt_name_error").show();
			}else{
				$(".mt_name_error").hide();
			};
			if(!(/^1[34578]\d{9}$/.test($("#mt_phone").val()))){
				$(".mt_phone_error").text("请输入正确手机号").show();
			}else{
				$(".mt_phone_error").hide();
			}
			if($("#mt_name").val().length>=2&&(/^1[34578]\d{9}$/.test($("#mt_phone").val()))&&$("#mt_city").val()!=='请选择'){
				//表单提交监测
				if(option.adsense[0].form_svCode){
					var arr = option.adsense[0].form_svCode.split(',');
					for (var i = 0; i<arr.length; i++) {
						$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
					};
				}
				var str1 = $("#mt_province option:selected").val();
				var str2 = $("#mt_city option:selected").val();
				var str3 = "";
				var mt_name = $("#mt_name").val();
				var mt_phone = $("#mt_phone").val();
				var  data = {info:'{\"province":\"'+str1+'",\"city":"'+str2+'",\"shop":\"'+str3+'",\"name\":\"'+mt_name+'",\"phone\":\"'+mt_phone+'"}',
							 customerId:option.customerId,
							 ext:option.adsense[0].ext,
							 mediaId:option.mediaId,
							 planId:option.planId,
							 creativeId:option.creativeId,
							 zoneId:option.zoneId,
							 positionId:option.adsense[0].positionId
				};
				console.log(data)
				Motu.mt_setData(JSON.stringify(data))
				if(status_code==200){
					console.log("注册成功")
				}else if(status_code==300){
					$(".mt_phone_error").text("手机号码重复").show();
				}
			}
		})
		$(".mt_closeButton").click(function(){
			$(".mt_select_box").hide();
			$("#mt_name,#mt_phone").val("");
			$(".mt_select_box").hide();
			//关闭点击监测
			if(option.closeCvCode){
				var arr = option.closeCvCode.split(',');
				for (var i = 0; i<arr.length; i++) {
					$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
				};
			}
		})
		$(".mt_select_box").hover(function(){
			$(".mt_select_box").stop().show();
			// alert("")
		},function(){})
	},
	//点击后停止运动和继续运动
	stopGo:function(option){
		var cs ;
		$("select,#mt_name,#mt_name2,#mt_phone,#mt_phone2").click(function(){
			$(".mtMainHead,.mMBM,.mtHeader,.mtMainBody > div,"+option.pointId+":first,"+option.pointId+'>img:first').unbind();
			// $(".mtMainHead,.mMBM,.mtHeader,.mtMainBody > div").unbind();

			cs = 1;
			console.log($(option.pointId+':first'))
		})
		// $(".mt-main").hover(function(){
		// 	console.log("ccccbbbbbbbbbbbbbbbbbbbbb")
		// 	if(cs==1){
		// 	console.log("cccccccccccccccccccc")

		// 		Motu.mMBMoveBack($(".mBOne"));
		// 		Motu.mMBMoveBack($(".mBTwo"));
		// 		Motu.mMBMoveBack($(".mMBM"))
		// 		$(".mtMainBody").css({"overflow":"hidden"})
		// 		$(".aaaa").hide();
		// 		if(option.type==1&&cs==1){
		// 			Motu.single(option);
		// 		}else if(option.type==2&&cs==1){
		// 			console.log("111")
		// 			Motu.dubble(option);
		// 		}
		// 	}
		// },function(){})
		$(".mMhClose,.mhOClose,.mhTClose").click(function(){
			$(".mtMainHead,.mMBM,.mtHeader,.mtMainBody > div,"+option.pointId+":first,"+option.pointId+'>img:first').unbind();
			$(".mt-main").hide();
		})
		$(".mbocClose,.mbtcClose,.mMBCclose").click(function(){
			$(".mtMainHead,.mMBM,.mtHeader,.mtMainBody > div,"+option.pointId+":first,"+option.pointId+'>img:first').unbind();
			$(".mt-main").hide();
			// Motu.mMBMoveBack($(".mBOne"));
			// Motu.mMBMoveBack($(".mBTwo"));
			// Motu.mMBMoveBack($(".mMBM"))
			// $(".mtMainBody").css({"overflow":"hidden"})
			// $(".aaaa").hide();
			// if(option.type==1&&cs==1){
			// 	Motu.single(option);
			// }else if(option.type==2&&cs==1){
			// 	console.log("111")
			// 	Motu.dubble(option);
			// }
			console.log('aaaa')
		})
		$("#submit,#submit2").click(function(){
			if(($(".mBOne").css("left")=='0px')||($(".mBTwo").css("left")=='0px')||$(".mMBM").css("left")=='0px'){
				$(".mtMainBody").css({"overflow":"visible"})
			}
			var diChose = function(x){
				if((x).val()=="请选择"){
					x.siblings(".aaaa").css({"display":"inline-block"})
				}else{
					x.siblings(".aaaa").hide();
				}
			}
			var diName = function(x){
				if(x.val().length<2||x.val().length>6||x.val()=="请输入姓名"){
					x.siblings(".aaaa").css({"display":"inline-block"})
				}else{
					x.siblings(".aaaa").hide();
				}
			}
			var diPhone = function(x){				
				if(!(/^1[34578]\d{9}$/.test(x.val()))){
					x.siblings(".aaaa").text("请输入正确手机号").css({"display":"inline-block"})
				}else{
					x.siblings(".aaaa").hide()
				}
			}
			if($(this).attr("id")=="submit2"){
				diChose($("#mt_province2"))
				diChose($("#mt_city2"))
				diChose($("#mt_homeTown2"))
				diName($("#mt_name2"))
				diPhone($("#mt_phone2"))
				if($("#mt_province2").siblings(".aaaa").css("display")=='none'&&$("#mt_city2").siblings(".aaaa").css("display")=='none'&&$("#mt_homeTown2").siblings(".aaaa").css("display")=='none'&&$("#name2").siblings(".aaaa").css("display")=='none'&&$("#mt_phone2").siblings(".aaaa").css("display")=='none'){
					console.log("next2")
					var str1 = $("#mt_province2 option:selected").val();
					var str2 = $("#mt_city2 option:selected").val();
					var str3 = $("#mt_homeTown2 option:selected").val();
					var mt_name = $("#mt_name2").val();
					var mt_phone = $("#mt_phone2").val();
					var  data = {info:'{\"province":\"'+str1+'",\"city":"'+str2+'",\"shop":\"'+str3+'",\"name\":\"'+mt_name+'",\"phone\":\"'+mt_phone+'"}',
								 customerId:option.customerId,
								 ext:option.adsense[0].ext,
								 mediaId:option.mediaId,
								 planId:option.planId,
								 creativeId:option.creativeId,
								 zoneId:option.zoneId,
								 positionId:option.adsense[0].positionId
					};
					console.log(data)
					Motu.mt_setData(JSON.stringify(data))
					if(status_code == 200){
						$(".mBTForm").hide();
						$(".success_page2").show();
					}else if(status_code == 300){
						$("#mt_phone2").siblings(".aaaa").text("手机号已注册").show();
					}
					
				}
			}else if($(this).attr("id")=="submit"){
				diChose($("#mt_province"))
				diChose($("#mt_city"))
				diChose($("#mt_homeTown"))	
				diName($("#mt_name"))
				diPhone($("#mt_phone"))
				if($("#mt_province").siblings(".aaaa").css("display")=='none'&&$("#mt_city").siblings(".aaaa").css("display")=='none'&&$("#mt_homeTown").siblings(".aaaa").css("display")=='none'&&$("#mt_name").siblings(".aaaa").css("display")=='none'&&$("#mt_phone").siblings(".aaaa").css("display")=='none'){
					console.log("next1")
					var str1 = $("#mt_province option:selected").val();
					var str2 = $("#mt_city option:selected").val();
					var str3 = $("#mt_homeTown option:selected").val();
					var mt_name = $("#mt_name").val();
					var mt_phone = $("#mt_phone").val();
					var  data = {info:'{\"province":\"'+str1+'",\"city":"'+str2+'",\"shop":\"'+str3+'",\"name\":\"'+mt_name+'",\"phone\":\"'+mt_phone+'"}',
								 customerId:option.customerId,
								 ext:option.adsense[0].ext,
								 mediaId:option.mediaId,
								 planId:option.planId,
								 creativeId:option.creativeId,
								 zoneId:option.zoneId,
								 positionId:option.adsense[0].positionId
					};
					console.log(data)
					Motu.mt_setData(JSON.stringify(data))
					console.log()
					
					if(status_code == 200){
						$(".mBOForm,.mMBForm").hide();
						$(".success_page").show();
					}else if(status_code == 300){
						$("#mt_phone").siblings(".aaaa").text("手机号已注册").show();
					}
				}

			}
			// if($("#province").siblings(".aaaa").css("display")=='none'&&$("#city").siblings(".aaaa").css("display")=='none'&&$("#homeTown").siblings(".aaaa").css("display")=='none'&&$("#name").siblings(".aaaa").css("display")=='none'&&$("#phone").siblings(".aaaa").css("display")=='none'){
				// console.log($("#province").siblings(".aaaa").css("display")=='none'&&$("#city").siblings(".aaaa").css("display")=='none'&&$("#homeTown").siblings(".aaaa").css("display")=='none'&&$("#name").siblings(".aaaa").css("display")=='none'&&$("#phone").siblings(".aaaa").css("display")=='none')
				if(option.type==1&&cs==1){
					Motu.single(option);
				}else if(option.type==2&&cs==1){
					console.log("111")
					Motu.dubble(option);
				}
			// }
		});
		$(".success_back").click(function(){
			$(".mBOForm,.mMBForm").show();
			$(".success_page").hide();
		})
		$(".success_back2").click(function(){
			$(".mBTForm").show();
			$(".success_page2").hide();
		})
		$(".mtPointer").hover(function(){
			Motu.dubble(option);
		},function(){})
	},
	//表单相关代码
	aboutInput:function(option){
		$("#mt_name,#mt_name2,#mt_phone,#mt_phone2").focus(function(){
			if($(this).val()=="请输入姓名"||$(this).val()=="请输入手机号"){
				$(this).val("")
			}
		})
		$("#mt_name,#mt_name2").blur(function(){
			if($(this).val().length==0){
				$(this).val("请输入姓名")
			}
		})
		$("#mt_phone,#mt_phone2").blur(function(){
			if($(this).val().length==0){
				$(this).val("请输入手机号")
			}
		})
	},
	//简写active Dubble版本
	active:function(option){
		$(".mt-main").show()
		var y;
		// if(option.float_Position==1){
		// 	y='102px'
		// }else if(option.float_Position==2){
			y=0
		// }
		if(option.active==1){
			var timeLength = option.timeLength*1000
			if(option.type==2){
				console.log(option.timeLength)
				
				var a , b , c ;
				if(option.positionMark==1){
					a = $(".mmpOne")
					b = $(".mhOne")
					c = $(".mBOne")
				}else if(option.positionMark==2){
					a = $(".mmpTwo")
					b = $(".mhTwo")
					c = $(".mBTwo")
				}
				a.css({"background":"red"}).siblings().css({"background":"transparent"})
				b.show().siblings().hide();
				//小图曝光监测
				if(option.adsense[0].logoImg_pvCode && option.positionMark==1){
					var arr = option.adsense[0].logoImg_pvCode.split(',');
					for (var i = 0; i<arr.length; i++) {
						$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
					};
				}else if(option.adsense[1].logoImg_pvCode && option.positionMark==2){
					var arr = option.adsense[1].logoImg_pvCode.split(',');
					for (var i = 0; i<arr.length; i++) {
						$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
					};
				}
				//大图曝光监测
				// alert(option.positionMark)
				if(option.adsense[0].pvCode && option.positionMark==1){
					// alert("aa")
					var arr = option.adsense[0].pvCode.split(',');
					for (var i = 0; i<arr.length; i++) {
						$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
					};
				}else if(option.adsense[1].pvCode && option.positionMark==2){
					var arr = option.adsense[1].pvCode.split(',');
					for (var i = 0; i<arr.length; i++) {
						$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
					};
				}
				c.parent().show();
				c.siblings().hide();
				c.show().animate({left:y},500).delay(timeLength).animate({left:mMBM_left},function(){
					a.css({"background":"transparent"}).siblings().css({"background":"red"})
					b.hide().siblings().show();
					//小图曝光监测
					if(option.adsense[1].logoImg_pvCode && option.positionMark==1){
						var arr = option.adsense[1].logoImg_pvCode.split(',');
						for (var i = 0; i<arr.length; i++) {
							$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
						};
					}else if(option.adsense[0].logoImg_pvCode && option.positionMark==2){
						var arr = option.adsense[0].logoImg_pvCode.split(',');
						for (var i = 0; i<arr.length; i++) {
							$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
						};
					}
					//大图曝光监测
					if(option.adsense[1].pvCode && option.positionMark==1){
						var arr = option.adsense[1].pvCode.split(',');
						for (var i = 0; i<arr.length; i++) {
							$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
						};
					}else if(option.adsense[0].pvCode && option.positionMark==2){
						var arr = option.adsense[0].pvCode.split(',');
						for (var i = 0; i<arr.length; i++) {
							$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
						};
					}
					$(this).siblings().show().animate({left:y},500).delay(timeLength).animate({left:mMBM_left},function(){
						$(this).parent().hide()
					})
				})
			}else if(option.type==1||option.type==3){
				
				$(".mMBM").parent().show();
				// console.log('aaaaaaaaaaaaaaaccccccccccccccc')
				$(".mMBM").animate({left:"0"},500,function(){
					//大图曝光监测
					if(option.adsense[0].pvCode){
						var arr = option.adsense[0].pvCode.split(',');
						for (var i = 0; i<arr.length; i++) {
							$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
						};
					}
					// alert("2")
					console.log($(".mMBM").parent().css("display"))
					$(".mMBM").parent().show();
				}).delay(timeLength).animate({left:mMBM_left},function(){
					$(this).parent().hide()
					// alert("1")
				})
				// alert("1/3")
			}
		}else if(option.active==0){}
	},
	jc:function(option){
		//小图点击监测
		$(".mhOAd,.mMhAd").click(function(){
			if(option.adsense[0].logoImg_cvCode){
				var arr = option.adsense[0].logoImg_cvCode.split(',');
				for (var i = 0; i<arr.length; i++) {
					$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
				};
			}
		})
		$(".mhTAd").click(function(){
			if(option.adsense[1].logoImg_cvCode){
				var arr = option.adsense[1].logoImg_cvCode.split(',');
				for (var i = 0; i<arr.length; i++) {
					$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
				};
			}
		})
		//大图点击监测
		$(".mBOPic,.mMBPic").click(function(){
			if(option.adsense[0].cvCode){
				var arr = option.adsense[0].cvCode.split(',');
				for (var i = 0; i<arr.length; i++) {
					$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
				};
			}
		})
		$(".mBTPic").click(function(){
			if(option.adsense[1].cvCode){
				var arr = option.adsense[1].cvCode.split(',');
				for (var i = 0; i<arr.length; i++) {
					$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
				};
			}
		})
		// 浮层关闭监测
		$(".mbocClose,.mbtcClose,.mhOClose,.mhTClose,.mMBCclose,.mMhClose").click(function(){
			if(option.closeCvCode){
				var arr = option.closeCvCode.split(',');
				for (var i = 0; i<arr.length; i++) {
					$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
				};
			}
		})
		//长短底栏部分
		// 大图点击监测
		$(".mt_ad").click(function(){
			if(option.adsense[0].cvCode){
				var arr = option.adsense[0].cvCode.split(',');
				for (var i = 0; i<arr.length; i++) {
					$('.motu_monitor').append('<img src="' + arr[i] + '"  width="1" height="1" alt="" />');
				};
			}
		})
	}
};