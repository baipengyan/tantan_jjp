<template>
    <div class="index">
      <!--内容-->
      <main id="box" @touchmove="drap('box')" style="position:absolute;">
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
      

      <!--底部-->
      <footer>
        <div class="footbtn_one">
          <div class="footbtn_one_a">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shuaxin"></use>
            </svg>
          </div>
        </div>
        <div class="footbtn_two">
          <div class="footbtn_one_b">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-error"></use>
            </svg>
          </div>
        </div>
        <div class="footbtn_one">
          <div class="footbtn_one_a">
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
          <div class="footbtn_one_a">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shoucang"></use>
            </svg>
          </div>
        </div>
      </footer>
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
            var cont = $("box");
            var contW = $("box").width();
            var contH = $("box").height();
            var startX, startY, sX, sY, moveX, moveY;
            var winW = $(window).width();
            var winH = $(window).height();
            console.log(n);

            cont.on({
                //绑定事件
                touchstart: function(e) {
                startX = e.originalEvent.targetTouches[0].clientX; //获取点击点的X坐标
                startY = e.originalEvent.targetTouches[0].clientY; //获取点击点的Y坐标
                sX = $(this).offset().left; //相对于当前窗口X轴的偏移量
                sY = $(this).offset().top; //相对于当前窗口Y轴的偏移量
                leftX = startX - sX; //鼠标所能移动的最左端是当前鼠标距div左边距的位置
                rightX = winW - contW + leftX; //鼠标所能移动的最右端是当前窗口距离减去鼠标距div最右端位置
                topY = startY - sY; //鼠标所能移动最上端是当前鼠标距div上边距的位置
                bottomY = winH - contH + topY; //鼠标所能移动最下端是当前窗口距离减去鼠标距div最下端位置
                },
                
                touchmove: function(e) {
                    e.preventDefault();
                    moveX = e.originalEvent.targetTouches[0].pageX; //移动过程中X轴的坐标
                    moveY = e.originalEvent.targetTouches[0].pageY; //移动过程中Y轴的坐标
                    $(this).css({
                        left: moveX + sX - startX,
                        top: moveY + sY - startY
                    });
                }
            });
        },
        like() {
            console.log(1);
        }
    }
}
</script>

<style lang="css" scoped>
.index {
  position: relative;
  height: 100%;
  padding-top: 50px;
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
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

footer > div {
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
  margin-top: 5px;
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
</style>
