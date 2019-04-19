/*
	拖拽原理：
		* 鼠标按下的一瞬间，计算相对距离disX
		* 鼠标滑动的时候，不断的计算新的left和top
		* 鼠标抬起的时候，不再改变left和top
*/
drap(n) {

	var box = document.getElementById(n);
	var disX = 0;
	var disY = 0;
	//1.按下去的一瞬间，计算相对距离
	box.onmousedown = function(ev) {
		var ev = ev || window.event;
		disX = ev.clientX - box.offsetLeft;
		disY = ev.clientY - box.offsetTop;
		console.log(disX + ',' + disY); //offsetX offsetY
		document.onmousemove = function(ev) {
			var ev = ev || window.event; //因为鼠标坐标不断再变，我需要获取最新的鼠标坐标
			//鼠标滑动的时候，不断的计算新的left和top
			var l = ev.clientX - disX; //根据最新鼠标坐标和相对距离重新计算left和top
			var t = ev.clientY - disY;

			//临界值判断
			if(l <= 0) {
				l = 0;
			}
			if(t <= 0) {
				t = 0;
			}

			if(l >= window.innerWidth - box.offsetWidth) {
				l = window.innerWidth - box.offsetWidth;
			}
			if(t >= window.innerHeight - box.offsetHeight) {
				t = window.innerHeight - box.offsetHeight;
			}
			box.style.left = l + 'px';
			box.style.top = t + 'px';
		}
		document.onmouseup = function() {
			document.onmousemove = null; //不再改变left和top，释放
		}
	}
}