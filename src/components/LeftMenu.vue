<template>
<div class="leftmenu">
    <div class="right">
        <div>
            <i><img src="../assets/hanbao.png" alt=""></i>
        </div>
    </div>
    <div class="left">
        <div class="header">
           <div class="con">
                <img src="../assets/yhw.jpg" alt="">
                <h3>name</h3>
                <a href="javascript:;" @click="editUser">点击编辑</a>
           </div>
        </div>
        <div class="menu">
            <ul>
                <li v-for="(menu, index) in menus" :key="index" @click="toWhere(index)">
                    <i><img :src="menu.src" alt=""></i>
                    <span v-text="menu.con"></span>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          con: '探探',
          src: require('../assets/xinxi.png'),
          path: '/home/index'
        }, {
          con: '激活特权',
          src: require('../assets/huangguan.png'),
          path: '/home/privilege'
        }, {
          con: '认证中心',
          src: require('../assets/renzhengsel.png'),
          path: '/home/authentication'
        }, {
          con: '匿名暗恋表白',
          src: require('../assets/xinhan.png')
        }, {
          con: '设置',
          path: '/home/setting',
          src: require('../assets/shezhi.png')
        }, {
          con: '新手引导',
          src: require('../assets/bangzhu.png')
        }, {
          con: '推荐给好友',
          src: require('../assets/fenxiang.png')
        }
      ]
    }
  },
  methods: {
    toWhere(index) {
      let path = this.menus[index]['path']
      this.$router.push({path})
      this.$emit('changeLeftMenu', this.menus[index]['con'])
    },
    editUser() {
      this.$router.push({path: '/home/edituser'})
      this.$emit('changeLeftMenu', '编辑用户')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: aliceblue;
}
.leftmenu {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 16px;
  color: aliceblue;
  position: absolute;
  left: -100%;
  top: 0;
}
.left {
  width: 91.5%;
  height: 100%;
  /* background: #000;
  opacity: 0.8; */
  background: rgba(0, 0, 0, 0.9);
  padding-left: 10%;
}
.header {
  height: 10rem;
}
.con {
  height: 6.666667rem;
  text-align: center;
  padding-top: 1.333333rem;
}
.con img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: whitesmoke;
}
h3 {
  text-align: center;
}
.menu {
  height: 22rem;
}
.menu ul {
  width: 300px;
  margin-left: 1.333333rem;
}
.menu ul li {
  height: 30px;
  width: 100%;
  margin-top: 18px;
}
.menu i {
  display: inline-block;
  width: 18px;
  height: 18px;
  padding: 5px;
}
.menu span {
  display: inline-block;
  margin-left: 30px;
}
</style>

