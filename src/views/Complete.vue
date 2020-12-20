<template>
  <div class="dim" @click="close()" v-show="modal">
    <img src="../../public/party.png" alt="폭죽 배경" class="modal-bg" />
    <div class="modal">
      <p>조심조심 살살타여!</p>
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
