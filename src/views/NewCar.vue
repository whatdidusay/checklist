<template>
  <div class="new-wrap">
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
  name: "newCar",
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
          part: "조립상태, 단차, 스크래치, 도색불량",
          description:
            "도장면, 창문 유리면에 스크래치가 있는지 탁송중 돌맹이에 맞지 않았는지 확인!!",
        },
        {
          title: "타이어",
          img: "wheel",
          part: "제조일, 휠 밸런스 확인 스티커, 휠 스크래치",
          description:
            "제조기간이 6개월 이내인지 확인하고 주황색 스티커 유무 꼭 확인! 차량 출고시 신차에는 무조건 스티커가 붙어있음 휠의 크기가 동일한지 확인!",
        },
        {
          title: "내부 품질",
          img: "sheet",
          part: "시트마감, 고무패킹, 도어 개폐 상태",
          description:
            "개폐시 이상 소음은 없는지 손잡이와 잠금장치는 멀쩡한지 선루프가 있다면 선루프 작동확인, 창문 열고 닫고 해보기, 고무패킹과 잘 안맞으면 비가 새니까 꼭 확인!",
        },
        {
          title: "센터페시아, 콘솔 품질",
          img: "interior",
          part: "조립상태, 편의장치",
          description:
            "운전석에 앉아서 콘솔, 센터페시아등 버튼들을 눌러보아요 버튼 상태는 괜찮은지 에어컨, 히터 제대로 작동 확인 공조기 바람방향, 냄새, 오디오 음질 확인! 주행거리 6~8km내외인데 이보다 많으면 인수거부차량이거나 출고과정중 사고차량은 아닌지 의심해보자!",
        },
        {
          title: "스티어링 휠",
          img: "steering-wheel",
          part: "스티어링 휠 방향",
          description:
            "타이어를 정방향을 맞추고 스티어링휠이 중앙에 맞는지 확인! 임시운행이 가능하다면 스티어링 휠이 중앙에 맞춰 직진하는지 확인!",
        },
        {
          title: "엔진룸 상태",
          img: "engine",
          part: "엔진오일, 미션오일, 브레이크오일, 냉각수, 클램프 호스",
          description:
            "엔진룸이 청결한지 클램프가 연결이 제대로 되어있는지 냉각수 누수는 없는지 확인!",
        },
        {
          title: "엔진 상태",
          img: "cluster",
          part: "엔진, 시동",
          description:
            "3~5회 시동을 껏다 켰다 체크, 모든 기기를 끄고 시동을 켠후 예열되는 시간동안 떨림이나 소음은 없는지 확인!",
        },
        {
          title: "조명장치 내부 품질",
          img: "roomlamp",
          part: "내부 조명 확인",
          description:
            "각종 버튼의 조명, 브레이크등, 상하향등, 좌우 비상등 확인!",
        },
        {
          title: "조명장치 외부 품질",
          img: "led",
          part: "외부 조명 확인",
          description: "조사각은 맞는지 방향지시등, 안개등, 테일램프등 확인!",
        },
        {
          title: "차량 지급품",
          img: "gift",
          part: "스페어타이어 ,타이어 수리키트, 소화기, 삼각대 등",
          description: "트렁크를 열어서 차량 기본 지급품목, 공구들 확인!",
        },
        {
          title: "인수 서류 확인",
          img: "paper",
          part: "임시운행허가증, 세금계산서, 차량인수증, 차량등록증, 차대번호",
          description:
            "차량등록증의 차대번호와 실제 차량의 차대번호가 일치하는지 반드시 확인!",
        },
        {
          title: "피자 주문 확인",
          img: "pizza",
          part: "페퍼로니, 치즈피자, 코카콜라",
          description: "피자가 조수석에 있는지 반드시 확인!",
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
      p {
        font-size: 25px;
        line-height: 1.2;
        word-break: keep-all;
        word-wrap: break-word;
        &.title {
          padding-bottom: 10px;
        }
        &.part {
          padding-top: 10px;
          font-size: 20px;
        }
        &.des {
          padding-top: 10px;
          font-size: 15px;
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
