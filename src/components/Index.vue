<template>
	<div class="index">
		<!--内容-->
		<main id="box" style="position:absolute;" ref="keyf">
			<div class="img">
				<div class="img-num">
					<svg class="icon fz14" aria-hidden="true">
						<use xlink:href="#icon-tupian"></use>
					</svg>
					<span class="fz12">
						4
					</span>
				</div>
			</div>
			<div class="content">
				<h1>哇哇哇</h1>
				<div class="content_age">
					<p>
						<svg class="icon fz14" aria-hidden="true">
							<use xlink:href="#icon-81"></use>
						</svg>
						<span class="">
							21
						</span>
					</p>
					<p>水瓶座</p>
				</div>
				<p class="gap">700m</p>
			</div>
		</main>

		<!--底部
      	
      -->
		<footer>
			<div class="footbtn_one">
				<div class="footbtn_one_a">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-shuaxin"></use>
					</svg>
				</div>
			</div>
			<div class="footbtn_two">
				<div class="footbtn_one_b" @click="del">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-error"></use>
					</svg>
				</div>
			</div>
			<div class="footbtn_one">
				<div class="footbtn_one_a" @click="shoucang">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-shandian"></use>
					</svg>
				</div>
			</div>
			<div class="footbtn_two">
				<div class="footbtn_one_b" @click="like">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-aixin"></use>
					</svg>
				</div>
			</div>
			<div class="footbtn_one">
				<div class="footbtn_one_a" @click="collect">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-shoucang"></use>
					</svg>
				</div>
			</div>
		</footer>
		<!-- 超级曝光 -->
		<div class="super-body" ref="super">
			<div class="super">
				<div class="err" @click.stop="shoucangNone">
					<svg class="icon icon-error" aria-hidden="true">
						<use xlink:href="#icon-error"></use>
					</svg>
				</div>
				<div class="box">
					<svg class="icon supericon" aria-hidden="true">
						<use xlink:href="#icon-shandian"></use>
					</svg>
				</div>
				<div class="title">
					<h1>超级曝光</h1>
					<p>配对利器！30分钟内10倍的人优先看到你！</p>
				</div>
				<div class="welcome">
					<ul>
						<li>
							<h1>25</h1>
							<span>次</span>
							<p>￥3.92/次</p>
						</li>
						<li class="w-active">
							<h1>25</h1>
							<span>次</span>
							<p>￥3.92/次</p>
						</li>
						<li>
							<h1>25</h1>
							<span>次</span>
							<p>￥3.92/次</p>
						</li>
					</ul>
				</div>
				<div class="footer-pay">
					<div class="qicq">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-iconfontrectangle390"></use>
						</svg>
						<span>
							支付宝获取
						</span>
					</div>
					<div class="weixin">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-weixinzhifu"></use>
						</svg>
						<span>
							微信获取
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from "jquery";
	export default {
		data() {
			return {
			}
		},
		methods: {
			drap(n) {
				var cont = $(n);
				var contW = cont.width();
				var contH = cont.height();
				var startX, startY, sX, sY, moveX, moveY, leftX, topY, rightX, bottomY;
				var winW = window.innerWidth;
				var winH = window.innerheight;
				cont.on({
					//绑定事件   touchstart : 触摸开始（手指放在触摸屏上）
					touchstart: function (e) {
						startX = e.originalEvent.targetTouches[0].clientX; //获取点击点的X坐标
						startY = e.originalEvent.targetTouches[0].clientY; //获取点击点的Y坐标
						sX = $(this).offset().left; //相对于当前窗口X轴的偏移量
						sY = $(this).offset().top; //相对于当前窗口Y轴的偏移量
						leftX = startX - sX; //鼠标所能移动的最左端是当前鼠标距div左边距的位置
						rightX = winW - contW + leftX; //鼠标所能移动的最右端是当前窗口距离减去鼠标距div最右端位置
						topY = startY - sY; //鼠标所能移动最上端是当前鼠标距div上边距的位置
						bottomY = winH - contH + topY; //鼠标所能移动最下端是当前窗口距离减去鼠标距div最下端位置
					},
					//touchmove : 拖动（手指在触摸屏上移动）
					touchmove: function (e) {
						e.preventDefault();
						moveX = e.originalEvent.targetTouches[0].pageX; //移动过程中X轴的坐标
						moveY = e.originalEvent.targetTouches[0].pageY; //移动过程中Y轴的坐标
						$(this).css({
							left: moveX + sX - startX,
							top: moveY + sY - startY
						});
					},
					//判断临界值touchend : 触摸结束（手指从触摸屏上移开）
					touchend: function (e) {
						e.preventDefault();
						if (moveX < leftX) {
							moveX = leftX;
						}
						if (moveX > rightX) {
							moveX = rightX;
						}
						if (moveY < topY) {
							moveY = topY;
						}
						if (moveY > bottomY) {
							moveY = bottomY;
						}
					}
				});
			},
			like() {
				this.$refs.keyf.className = 'box-right'
			},
			collect() {
				this.$refs.keyf.className = 'box-top'
			},
			del() {
				this.$refs.keyf.className = 'box-left'
			},
			shoucang() {
				this.$refs.super.style.display ='block'
			},
			shoucangNone(){
				this.$refs.super.style.display ='none'
			}
		},
		mounted() {
			this.drap('#box'),
				this.super()
		}
	}
</script>

<style lang="css" scoped>
	.index {
		position: relative;
		height: 100%;
	}
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		font-size: 24px;
	}
	/*底部样式*/
	footer {
		position: absolute;
		bottom: 50px;
		left: 5%;
		z-index: 9;
		width: 90%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	footer>div {
		display: inline-block;
		margin-left: 7px;
	}
	.footbtn_one {
		height: 48px;
		width: 48px;
		border-radius: 50%;
		background: rgba(171, 171, 171, 0.3);
		text-align: center;
		line-height: 48px;
	}
	.footbtn_two {
		height: 65px;
		width: 65px;
		border-radius: 50%;
		background: rgba(171, 171, 171, 0.3);
		text-align: center;
		line-height: 65px;
	}
	.footbtn_one_a {
		display: inline-block;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background: white;
		margin-top: 4px;
		line-height: 40px;
	}
	.footbtn_one_b {
		display: inline-block;
		height: 58px;
		width: 58px;
		border-radius: 50%;
		background: white;
		margin-top: 3px;
		line-height: 58px;
	}
	/*内容*/
	#box {
		height: 360px;
		width: 90%;
		margin-left: 5%;
		margin-top: 5%;
		border-radius: 3%;
		border: 1px solid #e3e3e3;
		box-sizing: border-box;
		position: absolute;
		z-index: 10;
		top: 10%;
		transform-origin: center 1800px;
		/* display: none; */
	}
	.box-right {
		animation: myfirst-right 1s !important;
	}
	.box-left {
		animation: myfirst-left 1s !important;
	}
	.box-top {
		animation: myfirst-top 0.5s !important;
	}
	.img {
		height: 280px;
		width: 100%;
		background: url(../assets/huge.jpg) center;
		border-radius: 2% 2% 0 0;
		position: relative;
	}
	.content {
		margin-left: 14px;
	}
	.content h1 {
		font-size: 16px;
		font-weight: normal;
		color: #242424;
	}
	.content_age p {
		display: inline-block;
		height: 20px;
		width: 50px;
		background: violet;
		font-size: 14px;
		margin-right: 2px;
		border-radius: 10%;
		text-align: center;
		color: white;
	}
	.content_age p:nth-child(2) {
		background: #622962;
	}
	.fz14 {
		font-size: 14px;
	}
	.fz12 {
		font-size: 12px;
	}
	.fz10 {
		font-size: 10px;
	}
	.gap {
		font-size: 14px;
		color: #d1d0d1;
		margin-top: -3px;
	}
	.img-num {
		position: absolute;
		top: 10px;
		left: 10px;
		height: 22px;
		width: 32px;
		line-height: 18px;
		background: rgba(0, 0, 0, 0.3);
		text-align: center;
		border-radius: 10%;
		color: white;
	}
	/*动画*/
	/*往右*/
	@keyframes myfirst-right {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(10deg);
		}
		20% {
			transform: rotate(20deg);
		}
		30% {
			transform: rotate(30deg);
		}
		40% {
			transform: rotate(40deg);
		}
		50% {
			transform: rotate(50deg);
		}
		60% {
			transform: rotate(60deg);
		}
		70% {
			transform: rotate(70deg);
		}
		80% {
			transform: rotate(80deg);
		}
		90% {
			transform: rotate(90deg);
		}
		100% {
			transform: rotate(100deg);
		}
	}
	/*往左*/
	@keyframes myfirst-left {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(-10deg);
		}
		20% {
			transform: rotate(-20deg);
		}
		30% {
			transform: rotate(-30deg);
		}
		40% {
			transform: rotate(-40deg);
		}
		50% {
			transform: rotate(-50deg);
		}
		60% {
			transform: rotate(-60deg);
		}
		70% {
			transform: rotate(-70deg);
		}
		80% {
			transform: rotate(-80deg);
		}
		90% {
			transform: rotate(-90deg);
		}
		100% {
			transform: rotate(-100deg);
		}
	}
	/*往上*/
	@keyframes myfirst-top {
		0% {
			top: 10%;
		}
		10% {
			top: 3%;
		}
		20% {
			top: -4%;
		}
		30% {
			top: -11%;
		}
		40% {
			top: -18%;
		}
		50% {
			top: -25%;
		}
		60% {
			top: -32%;
		}
		70% {
			top: -39%;
		}
		80% {
			top: -46%;
		}
		90% {
			top: -53%;
		}
		100% {
			top: -60%;
		}
	}
	/* 超级曝光 */
	.super-body {
		background: rgba(1, 1, 1, 0.1);
		height: 100%;
		z-index: 999999;
		position: relative;
		display: none;
	}
	.super {
		width: 80%;
		height: 560px;
		background: white;
		border-radius: 2%;
		position: relative;
		border: 1px solid #e7e5e5;
		top: 12%;
		left: 10%;
	}
	.box {
		height: 100px;
		width: 100px;
		border-radius: 50%;
		background: #ea78b6;
		position: absolute;
		top: 10%;
		left: 34%;
	}
	.footer-pay {
		position: absolute;
		height: 84px;
		width: 94%;
		bottom: 13%;
		left: 3%;
		border-radius: 2%;
		color: white;
		    text-align: center;
    line-height: 60px;
    font-size: 18px;
	}
	.qicq {
		width: 100%;
		height: 60px;
		background: linear-gradient(to right, #7082ff, #998afd);
		border-radius: 2%;
	}
	.weixin {
		width: 100%;
		height: 60px;
		background: linear-gradient(to right, #20f17d, #66fb9b);
		border-radius: 2%;
		margin-top: 10px;
	}
	.title {
		position: absolute;
		top: 35%;
		left: 13%;
		text-align: center;
	}
	.title h1 {
		font-size: 22px;
		font-weight: normal;
	}
	.title p {
		font-size: 12px;
	}
	/* 最受欢迎 */
	.welcome {
		width: 94%;
		background: #ebebeb;
		position: absolute;
		top: 50%;
		left: 3%;
		border-radius: 2%;
	}
	.welcome ul {
		margin: 0;
		padding: 0;
	}
	.welcome li {
		width: 33%;
		float: left;
		text-align: center;
		list-style: none;
	}
	.welcome li h1 {
		display: inline-block;
		font-size: 22px;
		margin-top: 10px;
	}
	.welcome li span {
		font-size: 12px;
	}
	.welcome li p {
		font-size: 18px;
		/* margin-top: -23px; */
	}
	.w-active {
		height: 92px;
		width: 100%;
		border: 2px solid #aa3219;
		box-sizing: border-box;
		border-radius: 3%;
		background: white;
	}
	.supericon {
		position: absolute;
		top: 10%;
		left: 12%;
		font-size: 78px;
	}
	.err{
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background: #b8b8b8;
		position: absolute;
		top: 1%;
		left: 1%;
	}
	.icon-error{
		font-size: 20px;
		margin-bottom: 10px;
	}
</style>