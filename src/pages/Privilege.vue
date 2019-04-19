<template>
    <div class="privilege">
        <div class="main1">
            <div class="shade">
                <div class="main1_photo"></div>
                <div class="main1_con">
                    <p>赵小小</p>
                    <p>暂未激活会员</p>
                </div>
            </div>
        </div>
        <div class="main2">
            <ul class="listtitle">
                <li v-for="(item, index) in list" :key="index">
                    <a 
                        href="javascript:;" 
                        :class="activeId == index ? 'active' : 'none'" 
                        v-text="item.title"
                        @click="changeActiveId(index)"
                    ></a>
                </li>
            </ul>
            <div class="listcontent" ref="listCon">
                <div class="listitem active">
                    <dl>
                        <dt>会员身份标识</dt>
                        <dd>昵称升级红色，专属身份标识！</dd>
                    </dl>
                    <dl>
                        <dt>每天5个“超级喜欢”</dt>
                        <dd>喜欢更有分量，配对飙升5倍！</dd>
                    </dl>
                    <dl>
                        <dt>划错无限反悔</dt>
                        <dd>强力反悔，瞬间找回错过缘分！</dd>
                    </dl>
                    <dl>
                        <dt>任意更改定位</dt>
                        <dd>任意位置，与全球朋友say嗨！</dd>
                    </dl>
                    <dl>
                        <dt>无限喜欢次数</dt>
                        <dd>突破限制，放肆喜欢不再顾虑</dd>
                    </dl>
                    <p class="footer">
                        <Pricilegefooter>获取VIP会员</Pricilegefooter>
                    </p>    
                </div>
                <div class="listitem">喜欢我
                    <p class="footer">
                        <Pricilegefooter>获取查看谁喜欢我</Pricilegefooter>
                    </p> 
                </div>
                <div class="listitem">超级曝光
                    <p class="footer">
                        <Pricilegefooter>获取超级曝光</Pricilegefooter>
                    </p> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pricilegefooter from '../components/Pricilegefooter.vue'
export default {
    data: function() {
        return {
            list: [
                {
                    title: 'Vip特权' 
                }, {
                    title: '查看谁喜欢我'
                }, {
                    title: '超级曝光'
                }
            ],
            activeId: 0
        }
    },
    methods: {
        changeActiveId(index) {
            this.activeId = index
            for(var i = 0; i < this.$refs.listCon.children.length; i++) {
                this.$refs.listCon.children[i].classList.remove('active')
            }
            this.$refs.listCon.children[index].classList.add('active')
        }
    },
    components: {
        Pricilegefooter
    }
}
</script>

<style lang="css" scoped>
.privilege {
    height: 100%;
    padding-top: 50px;
    position: relative;
}
.privilege .main1 {
    height: 8.125rem; 
    background: #eee; 
    overflow: hidden;
    background: url('../assets/img/zhz.jpg') no-repeat center;
    background-size: 30rem
}
.privilege .main1 .shade {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7)
}
.privilege .main1 .main1_photo {
    width: 4.125rem;
    height: 4.125rem; 
    border-radius: 50%; 
    background: url('../assets/img/zhz.jpg') no-repeat center; 
    background-size: 4.125rem; 
    margin-top: 2rem; 
    margin-left: 1.625rem;
    margin-right: 1rem;
    float: left;
}
.privilege .main1 .main1_con {
    float: left;
    margin-top: 2rem;
    padding-top: .5rem;
}
.privilege .main1 .main1_con p:nth-child(1) {
    font-size: 1rem;
    color: #fff;
}
.privilege .main1 .main1_con p:nth-child(2) {
    font-size: .8rem;
    color: #ddd9d6;
}
.privilege .main2 .listtitle {
    list-style: none;
    height: 3rem;
}
.privilege .main2 .listtitle li {
    float: left;
    width: 33.3%;
    height: 100%;
}
.privilege .main2 .listtitle li a {
    display: block;
    width: 100%;
    height: 100%;
    color: #999;
    font-size: .8125rem;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: 3rem;
}
.privilege .main2 .listtitle li a.active {
    color: #f26c4e;
    border-bottom-color: #f26c4e;
}
.privilege .main2 .listcontent .listitem {
    display: none;
    padding-bottom: .375rem;
}
.privilege .main2 .listcontent .active {
    display: block;
}
.privilege .main2 .listcontent dl {
    width: 100%;
    height: 4.5rem;
    position: relative;
    padding-left: 5.3125rem;
    padding-top: .9375rem;
}
.privilege .main2 .listcontent dl::before {
    content: "";
    display: block;
    width: 3.125rem;
    height: 3.125rem;
    background: url('../assets/img/privilege1.png') no-repeat center;
    background-size: 3.125rem;
    position: absolute;
    left: 1.125rem; 
}
.privilege .main2 .listcontent dl dt {
    font-size: .875rem;
    color: #000;
    line-height: 1.7rem;
}
.privilege .main2 .listcontent dl dd {
    font-size: .8125rem;
    color: #747474;
}
.privilege .main2 .listcontent .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3.5rem;
    width: 100%;
}
</style>

