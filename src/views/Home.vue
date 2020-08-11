<template>
  <div class="home">
    <h1>새차삿당! 신차검수하자 :D</h1>
    <ul class="list-wrap">
      <li v-for="(item, idx) in list" :key="idx">
        <label>
          <input type="checkbox" :value="idx" v-model="checkNumb" />
          <span class="check-btn"></span>
          <div class="item-wrap">
            <p>{{ idx + 1 }}.&nbsp;{{ item.title }}</p>
            <p>{{ item.part }}</p>
            <p>{{ item.description }}</p>
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
        {
          title: "외관 품질",
          part: "조립상태, 단차, 스크래치, 도색불량",
          description:
            "도장면, 창문 유리면에 스크래치가 있는지 탁송중 돌맹이에 맞지 않았는지 확인!!"
        },
        {
          title: "타이어",
          part: "제조일, 휠 밸런스 확인 스티커, 휠 스크래치",
          description:
            "제조기간이 6개월 이내인지 확인하고 주황색 스티커 유무 꼭 확인! 차량 출고시 신차에는 무조건 스티커가 붙어있음 휠의 크기가 동일한지 확인!"
        },
        {
          title: "내부 품질",
          part: "시트마감, 고무패킹, 도어 개폐 상태",
          description:
            "개폐시 이상 소음은 없는지 손잡이와 잠금장치는 멀쩡한지 선루프가 있다면 선루프 작동확인, 창문 열고 닫고 해보기, 고무패킹과 잘 안맞으면 비가 새니까 꼭 확인!"
        },
        {
          title: "센터페시아, 콘솔 품질",
          part: "조립상태, 편의장치",
          description:
            "운전석에 앉아서 콘솔, 센터페시아등 버튼들을 눌러보아요 버튼 상태는 괜찮은지 에어컨, 히터 제대로 작동 확인 공조기 바람방향, 냄새, 오디오 음질 확인!"
        },
        {
          title: "스티어링 휠",
          part: "스티어링 휠 방향",
          description:
            "운전석에 앉아서 주행거리도 확인! 6~8km내외인데 이보다 많으면 인수거부차량이거나 출고과정중 사고차량은 아닌지 의심해보자!"
        },
        {
          title: "외관 상태",
          part: "시동을 켠상태에서 조명장치, 엔진 소리",
          description:
            "조사각은 맞는지 엔진에서 소음은 나지 않는지 각 버튼별 조명은 제대로 나오고 있는지 확인!"
        },
        {
          title: "엔진룸 상태",
          part: "엔진오일, 미션오일, 브레이크오일, 냉각수, 클램프 호스",
          description:
            "엔진룸이 청결한지 클램프가 연결이 제대로 되어있는지 냉각수 누수는 없는지 확인!"
        },
        {
          title: "엔진 상태",
          part: "엔진, 시동",
          description:
            "3~5회 시동을 껏다 켰다 체크, 모든 기기를 끄고 시동을 켠후 예열되는 시간동안 떨림이나 소음은 없는지 확인!"
        },
        {
          title: "조명장치 내부 상태",
          part: "내부 조명 확인",
          description:
            "각종 버튼의 조명, 브레이크등, 상하향등, 좌우 비상등 확인!"
        },
        {
          title: "조명장치 외부 상태",
          part: "외부 조명 확인",
          description: "조사각은 맞는지 방향지시등, 안개등, 테일램프등 확인!"
        },
        {
          title: "차량 지급품",
          part: "스페어타이어 ,타이어 수리키트, 소화기, 삼각대 등",
          description: "트렁크를 열어서 차량 기본 지급품목, 공구들 확인!"
        },
        {
          title: "인수 서류 확인",
          part: "임시운행허가증, 세금계산서, 차량인수증, 차량등록증, 차대번호",
          description:
            "차량등록증의 차대번호와 실제 차량의 차대번호가 일치하는지 반드시 확인!"
        }
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
