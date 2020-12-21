<template>
  <div class="checkCar-wrap">
    <h1>'점검'이라는것을 해봅시다</h1>
    <ul class="list-wrap">
      <li v-for="(item, idx) in list" :key="idx" @change="open()">
        <label>
          <input type="checkbox" :value="idx" v-model="checkNumb" />
          <span class="check-btn"></span>
          <div class="item-wrap">
            <p class="title">{{ item.title }}</p>
            <img :src="item.img + '.png'" alt="위치별 이미지" />
            <strong class="how">점검방법:</strong>
            <p>{{ item.how }}</p>
            <strong class="fine">정상:</strong>
            <p>{{ item.fine }}</p>
            <strong class="bad">비정상:</strong>
            <p>{{ item.bad }}</p>
          </div>
        </label>
      </li>
    </ul>
    <div class="status">
      <b>{{ checkNumb.length }}&nbsp;</b>
      <span>/&nbsp;{{ list.length }}</span>
    </div>
    <!-- complete -->
    <div class="dim" @click="close()" v-show="modal">
      <img src="../../public/party.png" alt="폭죽 배경" class="modal-bg" />
      <div class="modal">
        <p>조심조심 살살타여!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkCar",
  data() {
    return {
      stuff: null,
      scrollPos: [],
      checkNumb: [],
      modal: false,
      list: [
        {
          title: "외관 품질",
          img: "exterior",
          fine: "조립상태, 단차, 스크래치, 도색불량",
          bad:
            "도장면, 창문 유리면에 스크래치가 있는지 탁송중 돌맹이에 맞지 않았는지 확인!!",
          how:
            "도장면, 창문 유리면에 스크래치가 있는지 탁송중 돌맹이에 맞지 않았는지 확인!!",
        },
      ],
    };
  },
  methods: {
    open() {
      if (this.checkNumb.length == this.list.length) {
        this.modal = true;
        document.querySelector("body").classList.add("noscroll");
      }
    },
    close() {
      this.modal = false;
      this.checkNumb = [];
      window.scrollTo({
        behavior: "smooth",
        top: 0,
        left: 0,
      });
      document.querySelector("body").classList.remove("noscroll");
    },
  },
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
ul {
  padding-bottom: 80px;
}
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
      img {
        width: 100%;
      }
      strong {
        display: block;
        line-height: 2;
        font-size: 22px;
        color: #000;
      }
      .fine {
        color: green;
      }
      .bad {
        color: darkred;
      }
      p {
        font-size: 20px;
        line-height: 1.2;
        word-break: keep-all;
        word-wrap: break-word;
        &.title {
          padding-bottom: 10px;
        }
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

// modal
.dim {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  .modal-bg {
    display: block;
    width: 340px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    animation: phung 0.5s;
  }
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    z-index: 2;
  }
}
@keyframes phung {
  0% {
    transform: scale(0) translateY(-50%);
  }
  100% {
    transform: scale(1) translateY(-50%);
  }
}
</style>
