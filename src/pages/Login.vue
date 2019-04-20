<template>
  <div class="login">
    <h1>笔芯小姐姐</h1>
    <div class="swipercon">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(img, index) in imgs" :key="index">
          <div class="swiperitem">
            <img :src="img" alt>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="pure-from">
      <fieldset class="pure-group">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </fieldset>
      <fieldset class="pure-group">
        <div class="yzm-group">
          <input type="text" placeholder="请输入验证码" v-model="yzm">
          <span @click="sendYzm" v-text="'发送验证码'" ref="yzmBtn"></span>
        </div>
      </fieldset>
    </div>
    <a href="javascript:;" class="weui-btn weui-btn_plain-primary" @click="login">登录</a>
    <div id="toast" style="opacity: 0; display: none;" :style="{display: isshow? 'block': 'none'}">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-icon-success-no-circle weui-icon_toast"></i>
            <p class="weui-toast__content">已完成</p>
        </div>
    </div>
  </div>
</template>
<script>
import "../../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import qs from "qs";
export default {
  data() {
    return {
      phone: "",
      yzm: "",
      isshow: "",
      imgs: [
        require('../assets/img/img1.jpg'),
        require('../assets/img/img2.jpg'),
        require('../assets/img/img3.jpg')
      ],
      swiperOption: {
        direction: "horizontal",
        loop: true,
        autoplay: true,
        initialSlide: 0,
        speed: 500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    sendYzm() {
      if (this.phone.trim()) {
        this.$axios.post('http://localhost:8000/login/submit_phone', qs.stringify({
            key: 'phone',
            value: this.phone
        })).then(res => {
            console.log(res)
            let {data: {data}} = res;
            // console.log(data.验证码);
            this.$refs.yzmBtn.innerText = data.验证码;
        })
        // this.$axios({
        //   method: "post",
        //   url: "http://107.148.246.41:80/usr/api/submit_phone",
        //   data: {
        //     key: "phone",
        //     value: this.phone*1
        //   }
        // }).then(res => {
        //   console.log(res)
        //   let {
        //     data: { data }
        //   } = res;
        //   // console.log(data.验证码);
        //   this.$refs.yzmBtn.innerText = data.验证码;
        // });
      } else {
        alert("请输入手机号");
      }
    },
    async login() {
      if (this.yzm.trim()) {
        console.log(this.phone, this.yzm)
        if (this.yzm == this.$refs.yzmBtn.innerText) {
          this.$axios.post('http://localhost:8000/login/submit_vcode', qs.stringify({
            phone: this.phone,
            vcode: this.yzm
          })).then(res => {
            console.log(res)
          })
          // this.$axios({
          //   method: 'post',
          //   url: 'http://107.148.246.41:80/usr/api/submit_vcode',
          //   data: {
          //     phone: this.phone*1,
          //     vcode: this.yzm*1
          //   }
          // }).then((res) => {
          //   console.log(res)
          // })
        } else {
          alert("验证码错误");
        }
      } else {
        alert("请输入验证码");
      }
    }
  }
};
</script>
<style lang="css" scoped>
.login {
  height: 100%;
  background: #f5f2ed;
}

h1 {
  text-align: center;
  padding: 20px 0;
}

.icon {
  text-align: center;
  margin-bottom: 20px;
}

.pure-from {
  width: 70%;
  margin: 0 auto;
}

.pure-from .pure-group {
  margin-bottom: 20px;
  height: 30px;
}

.pure-from .pure-group .yzm-group {
  display: flex;
}

.pure-from .pure-group .yzm-group {
  height: 100%;
}

.pure-from .pure-group .yzm-group span {
  display: block;
  background: #58bc58;
  height: 26px;
  width: 100px;
  text-align: center;
  line-height: 26px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
}

.pure-from .pure-group .yzm-group::after {
  content: "";
  display: block;
  overflow: hidden;
  clear: both;
  visibility: hidden;
  height: 0;
}

.pure-from .pure-group input {
  border: 0 none;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  outline: none;
}

.login > a {
  width: 70%;
  height: 35px;
  font-size: 16px;
  line-height: 35px;
}

.swipercon {
  width: 100%;
  height: 300px;
  position: relative;
  margin-bottom: 20px;
}
.swiperitem {
  height: 100%;
  text-align: center;
}
.swiperitem img {
  width: 70%;
  height: 300px;
  border-radius: 10px;
}
</style>


