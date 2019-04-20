<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

a {
  text-decoration: none;
}

ul, li {
  list-style: none;
}

#app {
  height: 100%;
  overflow: hidden;
}

</style>
