<template>
  <div>
    <Pc v-if="!isMobile" :list="list" />
    <Mobile v-else :list="list" />
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
  data() {
    return {
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
          url: require('@/assets/img/作品-15.png'),
          title: 'Edwards公司介绍设计一'
        },

        {
          url: require('@/assets/img/作品-4.png'),
          title: '默克色彩库小程序'
        },
        {
          url: require('@/assets/img/作品-3.jpg'),
          title: '第十五届世界武术竞标赛英文网'
        },
        {
          url: require('@/assets/img/作品-6.png'),
          title: '惠灵顿学院招生设计'
        }
      ]
    }
  },
  created() {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  }
}
</script>
