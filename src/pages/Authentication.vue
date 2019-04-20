<template>
    <div class="authentication">
        <div class="realhead toghter">
            <h3>真实头像认证</h3>
            <h6>大幅提高匹配成功率，享受专享特权</h6>
            <ul>
                <li>
                    <div class="pho"></div>
                    <span>认证标识</span>
                </li>
                <li>
                    <div class="pho"></div>
                    <span>更多喜欢次数</span>
                </li>
                <li>
                    <div class="pho"></div>
                    <span>优先推荐</span>
                </li>
            </ul>
            <p><a href="javascript:;">立即认证</a></p>
        </div>
        <div class="pupilage toghter">
            <h3>学生身份认证</h3>
            <h6>提交在读学校信息，享受多项学生特权</h6>
            <ul>
                <li>
                    <div class="pho"></div>
                    <span>认证标识</span>
                </li>
                <li>
                    <div class="pho"></div>
                    <span>更多喜欢次数</span>
                </li>
                <li>
                    <div class="pho"></div>
                    <span>优先推荐</span>
                </li>
            </ul>
            <p><a href="javascript:;">立即认证</a></p>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {

        }
    }
}
</script>
<style>
.authentication {
    height: 100%;
    padding-top: 50px;
    background: #f7f7f7;
}
.toghter {
    margin: .9375rem auto;
    width: 95%;
    height: 12.8125rem;
    background: #fff;
    border-radius: .625rem;
    position: relative;
    padding-top: .625rem;
}
.toghter h3 {
    font-size: 1rem;
    color: #000;
    text-align: center;
}
.toghter h6 {
    font-size: .75rem;
    color: #767676;
    text-align: center;
}
.toghter ul {
    overflow: hidden;
}
.toghter ul li {
    float: left;
    width: 33.3%;
    text-align: center;
}
.toghter ul li .pho {
    width: 3.875rem;
    height: 3.875rem;
    border-radius: 50%;
    background: #f8f4f1 url('../assets/img/authen1.png') no-repeat center;
    background-size: 1.75rem 1.5625rem;
    margin: .625rem auto 0 auto;
}
.toghter ul li span {
    font-size: .8125rem;
    color: #b9b9b9;
}
.toghter p {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.625rem;
    background: linear-gradient(to right, #ff4548, #f8874d);
    border-radius: 0 0 .625rem .625rem;
}
.toghter p a {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 2.625rem;
    font-size: .875rem;
    color: #fff;
}
</style>

