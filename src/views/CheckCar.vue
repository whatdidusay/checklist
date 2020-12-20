<template>
  <div class="checkCar-wrap">
    <h1>새차삿당! 신차검수하자 :D</h1>
    <ul class="list-wrap">
      <li v-for="(item, idx) in list" :key="idx" @change="open()">
        <label>
          <input type="checkbox" :value="idx" v-model="checkNumb" />
          <span class="check-btn"></span>
          <div class="item-wrap">
            <p class="title">{{ idx + 1 }}.&nbsp;{{ item.title }}</p>
            <img :src="item.img + '.png'" alt="위치별 이미지" />
            <p class="part">{{ item.part }}</p>
            <p class="des">{{ item.description }}</p>
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
export default {
  name: "checkCar",
  data() {
    return {};
  },
};
</script>
