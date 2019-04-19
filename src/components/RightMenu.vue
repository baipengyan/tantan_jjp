<template>
    <div class="rightmenu">
    <div class="left"></div>
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
              <div class="mate">所有配对</div>
              <div class="chat">聊天</div>
            </div>
            <div class="matecon">
              <li>
                <img src="" alt="">
                <!-- <p>1</p>
                <p>1</p> -->
              </li>
            </div>
            <div class="chatcon"></div>
        </div>
    </div>
</div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: aliceblue;
}
.rightmenu {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 16px;
  color: aliceblue;
}
.left {
  flex: 1;
  background: rgb(78, 107, 160);
}
.right {
  flex: 9;
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
}
.mate {
  width: 50%;
  height: 100%;
  float: left;
  line-height: 30px;
  border-radius: 10px 0px 0px 8px;
  background: #757879;
}
.chat {
  width: 50%;
  height: 100%;
  float: right;
  line-height: 30px;
  border-radius: 0px 10px 8px 0px;
}
.matecon li {
  width: 100%;
  height: 4rem;
}
.matecon li img {
  width: 50px;
  height: 50px;
  background: beige;
  border-radius: 50%;
}
</style>