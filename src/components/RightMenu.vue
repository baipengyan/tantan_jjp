<template>
<div>
     <div class="rightmenu">

    <div class="right">
        <div class="numpeople">3个配对</div>
        <div class="friendQ">
            <div class="news">
                <div class="fl">
                    <i><img src="../assets/friends.png" alt=""></i>
                    <span class="pyq"> 朋友圈</span>
                </div>
                <div class="fr">
                    <span><img src="../assets/yhw.jpg" alt=""></span>
                    <i><img src="../assets/qianjinxiayige.png" alt=""></i>
               </div>
            </div>
        </div>
        <div class="menu">
            <div class="MNoption">
                <div v-for="(M,index) in mnoption" :key="index" class="mate" 
                @click="getCase(index)"
                :class="{back:active==index}"
                v-text="M.mate"
                ></div>
                <!-- <div class="chat">聊天</div> -->
            </div>
            <!-- 匹对 -->
            <div ref="content">
               <div class="matecon content actcontent">
                <li>
                    <div class="photos">
                      <img src="../assets/yhw.jpg" alt="">
                        <em><img src="../assets/hearts.png" alt=""></em>
                    </div>
                    <div class="title">
                      <p>查看谁喜欢你</p>
                      <p>TA喜欢你</p>
                    </div>
                    <div class="inform">
                        <img  style="display:inline-block"  src="../assets/tubiaozhizuo-.png" alt="">
                      </div>
                </li>
                <li v-for="(contents,index) in list" :key="index">
                    <div class="photos">
                      <img :src="contents.img" alt="">
                      <em><img :src="contents.icon" alt=""></em>
                    </div>
                    <div class="title">
                      <p v-text="contents.name"></p>
                      <p v-text="contents.con"></p>
                    </div>
                    <div class="inform">
                        <img :src="contents.news" alt="">
                      </div>
                </li>
                <li class="aide">
                    <div class="photos">
                      <img src="../assets/img/icon.png" alt="">
                    </div>
                    <div class="title">
                      <p>探探小助手</p>
                      <p>谢谢！你更新的个人信息已经通过</p>
                    </div>
                    <div class="inform">
                        <img src="../assets/tubiaozhizuo-.png" alt="">
                      </div>
                </li>
                </div>
                <!-- 聊天 -->
                <div class="chatcon content">
                    <li  v-for="(contents,index) in list" :key="index">
                      <div class="photos">
                        <img :src="contents.img" alt="">
                      </div>
                      <div class="title">
                        <p v-text="contents.name"></p>
                        <p v-text="contents.con"></p>
                      </div>
                      <div class="inform">
                          <img   style="display:none"  :src="contents.icon" alt="">
                        </div>
                    </li>
                    <li class="aide">
                        <div class="photos">
                          <img src="../assets/img/icon.png" alt="">
                        </div>
                        <div class="title">
                          <p>探探小助手</p>
                          <p>谢谢！你更新的个人信息已经通过</p>
                        </div>
                        <div class="inform">
                            <img src="../assets/tubiaozhizuo-.png" alt="">
                          </div>
                    </li>
                </div>
          </div>
           
        </div>
    </div>
</div>
</div>
 
</template>
<script>
export default {
  data() {
    return {
      // bool: true,
      list: [
        {
          name: "杨班",
          con: "TA喜欢了我？右滑配对！",
          img: require("../assets/yhw.jpg"),
          icon: require("../assets/renzheng.png"),
          news: require("../assets/tubiaozhizuo-.png")
        },
        {
          name: "杨海文",
          con: "沙雕少女",
          img: require("../assets/yhw.jpg"),
          icon: require("../assets/renzheng.png"),
          news: require("../assets/tubiaozhizuo-.png")
        }
      ],
      mnoption: [
        {
          mate: "所有配对"
        },
        {
          mate: "聊天"
        }
      ],
      active: 0
    };
  },
  methods: {
    getCase(index) {
      this.active = index;
      // 对应的窗口
      for (var i = 0; i < this.$refs.content.children.length; i++) {
        this.$refs.content.children[i].classList.remove("actcontent");
      }
      this.$refs.content.children[index].classList.add("actcontent");
    }
  }
};
</script>

<style scoped>
.back {
  background: #757879;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: aliceblue;
}
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
em {
  width: 32px;
  height: 32px;
  position: absolute;
  right: -2px;
  bottom: -15px;
}
.rightmenu {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 16px;
  color: aliceblue;
  position: absolute;
  bottom: 0px;
  right: -100%;
}
.right {
  width: 80%;
  height: 100%;
  /* background: #000;
  opacity: 0.8; */
  background: rgba(0, 0, 0, 0.9);
}
.numpeople {
  width: 100%;
  height: 2.666667rem;
  text-align: center;
  line-height: 3.333333rem;
}
.friendQ {
  width: 100%;
  height: 3.333333rem;
  background: #2d3032;
  padding-top: 0.4rem;
}
.news {
  width: 95%;
  height: 36px;
  border-radius: 0.4rem;
  background: #7b7d7e;
  margin: auto;
}
.fl {
  float: left;
  padding-top: 0.2rem;
  width: 50%;
  height: 36px;
  line-height: 36px;
  position: relative;
}
i {
  width: 40px;
  height: 100%;
  display: inline-block;
}
.pyq {
  display: inline-block;
  position: absolute;
  height: 30px;
}
.fr {
  float: right;
  width: 20%;
  height: 36px;
  position: relative;
}
.fr span {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  line-height: 30px;
  position: absolute;
  top: 3px;
  right: 20px;
}
.fr i {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 3px;
  top: 10px;
}
.fr span > img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.menu {
  width: 100%;
  height: 100%;
}
.MNoption {
  width: 90%;
  height: 2rem;
  border: 1px solid #757879;
  border-radius: 10px;
  margin: 10px auto;
  text-align: center;
  overflow: hidden;
}
.mate {
  width: 50%;
  height: 100%;
  float: left;
  line-height: 30px;
}
.content {
  display: none;
}
.actcontent {
  display: block;
}
.content li {
  padding: 10px 0 0 10px;
  width: 100%;
  height: 4rem;
}
.content li > div {
  float: left;
}
.photos {
  /* flex: 2; */
  width: 20%;
  height: 2.666667rem;
  text-align: center;
  position: relative;
}
.photos > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background: yellow;
}
.title {
  width: 60%;
  text-align: left;
  font-size: 14px;
}
.inform {
  width: 20%;
  text-align: center;
}
</style>