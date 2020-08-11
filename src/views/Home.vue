<template>
  <div class="home">
    <h1>새차삿당! 신차검수하자 :D</h1>
    <ul class="list-wrap">
      <li v-for="(item, idx) in list" :key="idx">
        <label>
          <input type="checkbox" :value="idx" v-model="checkNumb" />
          <span class="check-btn"></span>
          <div class="item-wrap">
            <p>{{ idx + 1 }}.&nbsp;{{ item.description }}</p>
          </div>
        </label>
      </li>
    </ul>
    <div class="status">
      <b>{{ checkNumb.length }}&nbsp;</b>
      <span>/&nbsp;{{ list.length }}</span>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  // components: {
  // }
  data() {
    return {
      checkNumb: [],
      list: [
        { description: "어쩌라고" },
        { description: "어쩌라고" },
        { description: "어쩌라고" },
        { description: "어쩌라고" },
        { description: "어쩌라고" },
        { description: "어쩌라고" },
        { description: "어쩌라고" },
        { description: "어쩌라고" },
        { description: "어쩌라고" }
      ]
    };
  }
};
</script>
<style lang="scss">
// title bar
h1 {
  height: 100px;
  line-height: 100px;
  font-size: 35px;
  text-align: center;
}

// contents
li {
  border-bottom: 2px solid #ddd;
  &:hover {
    background: #eee;
  }
  label {
    display: block;
    position: relative;
    padding: 10px 20px;
    overflow: hidden;
    input {
      position: absolute;
      left: -9999px;
      visibility: hidden;
      & + .check-btn {
        float: left;
        width: 30px;
        height: 30px;
        border: 1px solid;
        background: #fff;
      }
      &:checked + .check-btn {
        background: #000;
        text-align: center;
        &:after {
          content: "V";
          line-height: 30px;
          font-size: 25px;
          color: #fff;
        }
      }
    }
    .item-wrap {
      float: left;
      width: calc(100% - 30px);
      padding-left: 10px;
      p {
        font-size: 25px;
        line-height: 1.2;
      }
    }
  }
}

// status bar
.status {
  position: fixed;
  bottom: 20px;
  right: 20px;
  overflow: hidden;
  b {
    float: left;
    font-size: 40px;
    color: orange;
  }
  span {
    float: left;
    font-size: 40px;
  }
}
</style>
