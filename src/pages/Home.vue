<template>
	<div class="home">
		<!--头部-->
    <LeftMenu v-on:changeLeftMenu="toggleMenuIsShow"></LeftMenu>
    <!-- <RightMenu /> -->
		<header>
			<div class="lefticon" @click="toLeftMenu">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-hanbaocaidan"></use>
				</svg>
			</div>
			<span class="h_title" ref="titleName" v-text="currentTitle"></span>
			<div class="righticon">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-sousuoyinyongshuix"></use>
				</svg>
			</div>
		</header>
    <router-view></router-view>
	</div>
</template>

<script>
import LeftMenu from "../components/LeftMenu.vue";
import RightMenu from "../components/RightMenu.vue";
export default {
  data() {
    return {
      leftMenuIsShow: false,
      currentTitle: '探探'
    };
  },
  components: {
    LeftMenu,
    RightMenu
  },
  methods: {
    toLeftMenu() {
      this.leftMenuIsShow = !this.leftMenuIsShow
      if(this.leftMenuIsShow) {
        this.$('.home').animate({left: '80%'})
      } else {
        this.$('.home').animate({left: 0})
      }
    },
    toggleMenuIsShow(titleName) {
      this.toLeftMenu()
      this.$refs.titleName.innerText = titleName
    }
  }
};
</script>

<style lang="css" scoped>
/*头部样式*/

.home {
  font-size: 22px;
  position: relative;
  height: 100%;
}

header {
  width: 100%;
  height: 50px;
  background: darkred;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  display: flex;
  z-index: 99;
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

.h_title {
  flex: 3;
}

.lefticon {
  flex: 1;
}

.righticon {
  flex: 1;
}


</style>