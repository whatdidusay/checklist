<template>
  <div class="checkCar-wrap">
    <h1>'점검'이라는것을 해봅시다</h1>
    <div class="guide-view">
      <img
        src="../../public/check-menu.jpg"
        alt="보닛 내부 사진"
        class="check-menu"
      />
      <div class="cool"></div>
      <div class="cool-sub"></div>
      <div class="washer"></div>
      <div class="break"></div>
      <div class="bettery"></div>
      <div class="engine"></div>
    </div>
    <ul class="list-wrap">
      <li v-for="(item, idx) in list" :key="idx" @change="open()">
        <label>
          <input type="checkbox" :value="idx" v-model="checkNumb" />
          <span class="check-btn"></span>
          <div class="item-wrap">
            <p class="title">{{ item.title }}</p>
            <img :src="item.img + '.jpg'" alt="위치별 이미지" />
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
          title: "엔진오일",
          img: "check-engine",
          fine: "맑거나 갈색",
          bad: "진한 갈색, 검정색",
          how:
            "시동전 또는 엔진을 끄고 열이 식고 난 뒤 레벨게이지(저 쇠꼬챙이 이름)를 꺼내닦고 다시 넣은다음 뭍어나오는 오일을 확인한다. F는 Full(가득), L은 Low(부족) 색깔/점도/냄새를 체크한다 점도는 매끈매끈해야 정상",
        },
        {
          title: "배터리",
          img: "check-bettery",
          fine: "초록",
          bad: "무색, 검정",
          how:
            "보통 인디케이터의 색상을 보고 구분하지만 순정 배터리에는 인디케이터가 없다. (블루링크 차량상태에서 배터리체크) 점프선 연결하는 곳에 흰 가루(산화 납)이 보인다면 마른칫솔로 제거하여 접촉불량과 방전을 방지",
        },
        {
          title: "브레이크 오일",
          img: "check-break",
          fine: "맑은색",
          bad: "진한 갈색, 검정색",
          how: "4만~5만정도 차량을 운행했다면 무조건 교체해야한다.",
        },
        {
          title: "냉각수",
          img: "check-cool",
          fine: "라디에이터 캡에 냉각수가 가득 차 있다",
          bad: "계기판에서 냉각수 표시가 나온다",
          how:
            "시동을 끄고 열이 식으면 라디에이터 캡을 열어서 냉각수가 가득 차있는지 확인한다. 부족하다면 물과 부동액을 5:5로 섞어서 채워준다",
        },
        {
          title: "타이어 마모",
          img: "check-tire",
          fine: "타이어 사이 홈의 깊이가 깊다",
          bad: "마모 한계선까지 닳았다",
          how:
            "타이어의 '마모 한계선'을 체크한다 사진에서 보이는 틈 사이에 뽈록 튀어나온것이 마모 한계선이다 타이어 사이의 홈이 마모한계선과 높이가 비슷하다면 타이어를 거의 다 썼다는 의미",
        },
        {
          title: "타이어 공기압",
          img: "check-tire-info",
          fine: "전륜: 34psi, 후륜: 31psi",
          bad:
            "미미한 차이는 괜찮지만 공기압의 차이가 크다면 가까운 정비소로 가자",
          how:
            "차량을 주행하면 계기판 모니터로 타이어 공기압이 표시된다 타이어의 정상 기준은 운전석 문 안쪽 스티커에 표시되어있다",
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
  font-weight: 500;
  text-align: center;
}

// contents
.guide-view {
  position: relative;
  & > div {
    position: absolute;
    width: 50px;
    height: 50px;
    background: #fff;
    opacity: 0.6;
    border: 2px solid red;
    border-radius: 50%;
    text-align: center;
    word-break: keep-all;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .check-menu {
    display: block;
    width: 100%;
  }
  .engine {
    top: 32%;
    left: 33%;
    &:after {
      content: "엔진오일";
    }
  }
  .cool {
    bottom: 3%;
    left: 28%;
    &:after {
      content: "냉각수 보조통";
    }
  }
  .cool-sub {
    bottom: 5%;
    right: 35%;
    &:after {
      content: "라디 에이터 캡";
    }
  }
  .washer {
    bottom: 3%;
    left: -3%;
    &:after {
      content: "워셔액";
    }
  }
  .break {
    top: 7%;
    right: 27%;
    &:after {
      content: "브레이크 오일";
    }
  }
  .bettery {
    top: 20%;
    right: 15%;
    &:after {
      content: "배터리";
    }
  }
}
ul {
  padding: 50px 0 80px;
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
        font-weight: 400;
        color: #000;
      }
      .fine {
        color: green;
        &:before {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          background: green;
          margin-right: 5px;
        }
      }
      .bad {
        color: darkred;
        &:before {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          background: darkred;
          margin-right: 5px;
        }
      }
      p {
        font-size: 20px;
        line-height: 1.2;
        word-break: keep-all;
        word-wrap: break-word;
        &.title {
          padding-bottom: 10px;
          font-size: 25px;
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
