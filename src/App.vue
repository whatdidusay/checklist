<template>
  <div id="app">
    <nav>
      <router-link to="/">신차검수</router-link>
      <router-link to="/checkCar">차량점검</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Yeon Sung", cursive;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  line-height: 1;
  font-family: "Yeon Sung", cursive;
}
.noscroll {
  overflow: hidden;
}
nav {
  text-align: center;
  background: #ddd;
  a {
    display: inline-block;
    width: 50%;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    &.router-link-active {
      color: #000;
    }
  }
}
</style>
