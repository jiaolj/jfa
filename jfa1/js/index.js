require.config({
	paths: {
		jquery: '../js/jquery.min',
		cookie: '../js/jquery.cookie',
		base: '../js/base',
		jfa: '../js/jfa',
		echarts: '../js/echarts.min'
	}
})

require(['jquery','base','jfa','echarts','cookie'], function($,Base,Jfa,ec) {
	var Start = (function(){
		var _obj = {};
		return {
			init : function(){
				_obj = this;
				_obj.req = Jfa.tools.getRequest();
				Jfa.init({
					size:(100/1920),
				});
				Base.init();
				Jfa.load();
			}
		}
	})();
	$(function() {
		Start.init()
	})
})