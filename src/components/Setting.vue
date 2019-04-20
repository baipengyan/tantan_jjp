<template>
  <div class="setting">
    <div class="main1">
      <div class="weui-cells__title">向我显示</div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>位置</p>
        </div>
        <div class="weui-cell__ft">我的当前定位</div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>范围</p>
        </div>
        <div class="weui-cell__ft">100m+</div>
      </div>
      <div class="weui-slider-box">
        <div class="weui-slider">
          <div id="sliderInner" class="weui-slider__inner">
            <div id="sliderTrack" style="width: 64%;" class="weui-slider__track"></div>
            <div id="sliderHandler" style="left: 64%;" class="weui-slider__handler"></div>
          </div>
        </div>
        <div id="sliderValue" class="weui-slider-box__value">64</div>
      </div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell weui-cell_switch">
          <div class="weui-cell__bd">
            自动扩大范围
            <p class="title_two">如果用户较少，自动适量扩大范围</p>
          </div>
          <div class="weui-cell__ft">
            <input class="weui-switch" type="checkbox">
          </div>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>显示性别</p>
        </div>
        <div class="weui-cell__ft">女生</div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>年龄</p>
        </div>
        <div class="weui-cell__ft">18-50+</div>
      </div>
      <div class="weui-slider-box">
        <div class="weui-slider">
          <div id="sliderInner" class="weui-slider__inner">
            <div id="sliderTrack" style="width: 64%;" class="weui-slider__track"></div>
            <div id="sliderHandler" style="left: 64%;" class="weui-slider__handler"></div>
          </div>
        </div>
        <div id="sliderValue" class="weui-slider-box__value">64</div>
      </div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell weui-cell_switch">
          <div class="weui-cell__bd">优先推荐学生</div>
          <div class="weui-cell__ft">
            <input class="weui-switch" type="checkbox">
          </div>
        </div>
      </div>
    </div>
    <div class="main2">
			<div class="weui-cells__title">应用设置</div>
		</div>
		<div class="lastbtn">
			<a href="javascript:;" class="toggleMsg" @click="backToLogin">切换账号</a>
			<a href="javascript:;" @click="backToLogin">退出登录</a>
		</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    backToLogin() {
      this.$router.push('/login')
    }
  }

};
</script>
<style>
.weui-cells__title {
  color: #d73d49;
}
.weui-cell .weui-cell__ft {
  color: #d24533;
}
.weui-cell__bd .title_two {
  color: #bbb;
  font-size: 0.5625rem;
}
.lastbtn {
	width: 80%;
	margin: auto;
}
.lastbtn a {
	display: block;
	height: 35px;
	text-align: center;
	line-height: 35px;
	color: #959595;
	background: #fbfbfb;
	box-shadow: 1px 1px 0 0 #cecece;
	border-radius: 5px;
}
.lastbtn .toggleMsg {
	margin-bottom: 10px;
}
</style>


