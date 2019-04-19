<template>
    <div class="authentication">
        <div class="realhead">
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
        <div class="pupilage"></div>
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
.realhead {
    margin: .9375rem auto;
    width: 95%;
    height: 12.8125rem;
    background: #fff;
}
.realhead h3 {
    font-size: 1rem;
    color: #000;
    text-align: center;
}
.realhead h6 {
    font-size: .75rem;
    color: #767676;
    text-align: center;
}
.realhead ul {
    overflow: hidden;
}
.realhead ul li {
    float: left;
    width: 33.3%;
    text-align: center;
}
.realhead ul li .pho {
    width: 3.875rem;
    height: 3.875rem;
    border-radius: 50%;
    background: #f8f4f1;
    margin: .625rem auto 0 auto;
}
.realhead ul li span {
    font-size: .8125rem;
    color: #b9b9b9;
}
</style>

