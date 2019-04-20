<template>
    <div class="pricilegefooter">
        <a href="javascript"><slot></slot></a>
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
<style lang="css" scoped>
a {
    display: block;
    height: 3.5rem;
    width: 100%;
    background: linear-gradient(to bottom right, #ff4449, #ff863f);
    text-align: center;
    line-height: 3.5rem;
    color: #fff;
    font-size: .9375rem;
}
</style>
