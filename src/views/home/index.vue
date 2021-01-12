<template>
  <div>
    <Pc v-if="!isMobile"
        :list="list" />
    <Mobile v-else
            :list="list" />

    <div class="footer">
      <div>Photo By : {{ name }}</div>
    </div>
  </div>
</template>

<script>
import Pc from './components/pc.vue'
import Mobile from './components/mobile.vue'

export default {
  components: {
    Pc,
    Mobile
  },
  data () {
    return {
      name: 'Aires',
      isMobile: false,
      list: [
        {
          url: require('@/assets/img/作品-8.png'),
          title: 'KM服务订单H5'
        },
        {
          url: require('@/assets/img/作品-5.png'),
          title: '上海体育投票活动'
        },
        {
          url: require('@/assets/img/作品-11.png'),
          title: '上药控股微信报账系统'
        },
        {
          url: require('@/assets/img/作品-3.jpg'),
          title: '第十五届世界武术竞标赛英文网'
        },
        {
          url: require('@/assets/img/作品-9.png'),
          title: '奉贤税务局减税降费'
        },
        {
          url: require('@/assets/img/作品-1.png'),
          title: '默克差旅助手'
        },
        {
          url: require('@/assets/img/作品-13.png'),
          title: '上海体育会员系统小程序'
        },
        {
          url: require('@/assets/img/作品-2.png'),
          title: '健康上海 人人来赛'
        },
        {
          url: require('@/assets/img/作品-10.png'),
          title: '疫情防控税费优惠一点通'
        },
        {
          url: require('@/assets/img/作品-14.png'),
          title: '默克物资请购、S&T等'
        },
        {
          url: require('@/assets/img/作品-12.png'),
          title: '上海体育2019新春祝福H5'
        },
        {
          url: require('@/assets/img/作品-7.png'),
          title: '汇添富基金十五周年邀请函'
        },
        {
          url: require('@/assets/img/作品-16.png'),
          title: '悠哈小程序'
        },
        {
          url: require('@/assets/img/作品-15.png'),
          title: 'Edwards公司介绍设计一'
        },

        {
          url: require('@/assets/img/作品-4.png'),
          title: '默克色彩库小程序'
        },

        {
          url: require('@/assets/img/作品-6.png'),
          title: '惠灵顿学院招生设计'
        }
      ]
    }
  },
  created () {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  },
  mounted () {
    this.$nextTick(() => {
      const watermakr = document.createElement('div')
      watermakr.className = 'watermark'
      watermakr.style.backgroundImage = `url(${this.createWaterMark()})`
      document.body.appendChild(watermakr)

      // 观察器的配置（需要观察什么变动）
      const config = { attributes: true, childList: true, subtree: true }
      // 当观察到变动时执行的回调函数
      const callback = function (mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for (let mutation of mutationsList) {
          mutation.removedNodes.forEach(function (item) {
            if (item === watermakr) {
              document.body.appendChild(watermakr)
            }
          })
        }
      }
      // 监听元素
      const targetNode = document.body
      // 创建一个观察器实例并传入回调函数
      const observer = new MutationObserver(callback)
      // 以上述配置开始观察目标节点
      observer.observe(targetNode, config)
    })
  },
  methods: {
    createWaterMark () {
      const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="180px" height="100px">
        <text x="0px" y="30px" dy="16px"
        text-anchor="start"
        stroke="#000"
        stroke-opacity="0.15"
        fill="none"
        transform="rotate(-20)"
        font-weight="100"
        font-size="16"
        >
         ${this.name}
        </text>
      </svg>`
      return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: #fff;
  border-radius: 12px;
  padding: 20px 14px;
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
}
</style>
<style>
.watermark {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  pointer-events: none;
  background-repeat: repeat;
}
</style>
