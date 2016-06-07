define(function(){
	var Jfa = (function(){
		var _obj = {};
		return {
			func : function(w){
				w.log = function(d){
					if(typeof(console)=='undefined') alert(d);
					else console.log(d);
				}
				w.str=function(k){return JSON && JSON.stringify(k)}
				w.json=function(k){return eval('('+k+')')}
			},
			load : function(){
				var _e = {};
				_e.url = arguments[0];
				if(arguments.length==2){
					_e.arg = {};
					_e.suc = arguments[1];
				}else if(arguments.length==3){
					_e.arg = arguments[1];
					_e.suc = arguments[2];
				}
				$.ajax({
					url : _e.url,
					data : _e._arg,
					success : function(back){
						_e.suc && _e.suc(back)
					}
				})
			},
			tools : {
				getSize : function(p){
					$('html').css('font-size',document.body.clientWidth*p+'px');
				},
				getRequest : function() {
					   var url = window.location.search,
							theRequest = new Object();
					   if (url.indexOf("?") != -1) {   
						  var str = url.substr(1);   
						  strs = str.split("&");   
						  for(var i = 0; i < strs.length; i ++) {
							 theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
						  }   
					   }   
					   return theRequest;   
				}
			},
			init : function(conf){ //初始化
				_obj = this;
				_obj.conf = conf || {};
				_obj.func(window);
				_obj.tools.getSize(_obj.conf.size);
				if(typeof(PIE)!='undefined'){
					$('.pie').each(function() {  
						PIE.attach(this);  
					})
				}
			}
		}
	})();
	return Jfa;
})