/**
 * 扩展一个exhello模块
 */
layui.define(function(exports) {
	var obj = {
		hello: function(str) {
			alert('Hello!' + (str || 'exhello'));
		}
	};
	//输出
	exports('exhello', obj);
})