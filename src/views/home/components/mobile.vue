<template>
  <div class="web-site">
    <div class="layout">
      <!-- 分类 -->
      <!-- <div class="menu"></div> -->
      <!-- 瀑布流 -->
      <div class="container-water-fall">
        <waterfall :col="col" :data="list">
          <!--   @loadmore="loadmore" -->
          <template>
            <div class="cell-item" v-for="(item, index) in list" :key="index">
              <viewer>
                <img v-if="item.url" :src="item.url" alt="加载错误" />
              </viewer>
              <div class="item-body">
                <div class="item-desc">{{ item.title }}</div>
                <!-- <div class="item-footer">分类{{ index }}</div> -->
              </div>
            </div>
          </template>
        </waterfall>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      col: 2,

      viewerVisible: false,
      imgDataList: [],
      imgIndex: 0
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.web-site {
  background: #f5f5f5;
  --gbshadow-0: 0 none;
  --gbshadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 4px 8px 0 rgba(0, 0, 0, 0.02);
  --gbshadow-2: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 8px 16px 0 rgba(0, 0, 0, 0.07);
  --gbshadow-3: 0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 16px 32px 0 rgba(0, 0, 0, 0.07);
  --gbshadow-hover: 0 1px 3px rgba(0, 0, 0, 0.02), 0 16px 32px -4px rgba(0, 0, 0, 0.17);
}
.layout {
  max-width: 1440px;
  margin: 0 auto;
}
// .menu {
// }
.container-water-fall {
  // padding: 0 28px;
  width: 100%;
  box-sizing: border-box;
  h4 {
    padding-top: 56px;
    padding-bottom: 28px;
    font-family: PingFangSC-Medium;
    font-size: 36px;
    color: #000000;
    letter-spacing: 1px;
    text-align: justify;
  }
  button {
    background-color: #ff0;
    color: #24292e;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 0.25em;
    width: 100px;
    line-height: 26px;
    font-size: 13px;
    margin: 4px 0;
    margin-right: 4px;
    cursor: pointer;
    outline: none;
    &.blue-light {
      background: #27fbc2;
    }
  }
  button:hover {
    background-image: linear-gradient(-180deg, #fafbfc, #ccc 90%);
  }

  .cell-item {
    width: 100%;
    background: #ffffff;
    border: 2px solid #f0f0f0;
    border-radius: 12px 12px 12px 12px;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 20px;

    img {
      // border-radius: 12px 12px 0 0;
      width: 100%;
      height: auto;
      display: block;
    }
    .item-body {
      // border: 1px solid #F0F0F0;
      padding: 12px;
      .item-desc {
        font-size: 15px;
        color: #333333;
        line-height: 15px;
        font-weight: bold;
      }
      .item-footer {
        margin-top: 22px;
      }
    }
  }
}
</style>
