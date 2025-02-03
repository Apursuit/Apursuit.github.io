<template>
  <!-- 背景容器，动态绑定背景图片和透明度样式 -->
  <div
    class="body-bg"
    :style="`background: url(${bgImg}) center center / cover no-repeat;opacity:${opacity}`"
  ></div>
</template>
<!-- 在网页的背景上显示一张或多张图片，并且可以设置图片的透明度 -->

<script>
import { type } from '../util' // 导入类型检查工具函数

export default {
  data() {
    return {
      bgImg: '', // 当前背景图片路径
      opacity: 0.5 // 背景图片的透明度，默认值为0.5
    }
  },
  mounted() {
    // 从主题配置中获取背景设置
    let { bodyBgImg, bodyBgImgOpacity, bodyBgImgInterval = 15 } = this.$themeConfig

    // 如果 bodyBgImg 是字符串，则直接设置为背景图片
    if (type(bodyBgImg) === 'string') {
      this.bgImg = bodyBgImg
    } 
    // 如果 bodyBgImg 是数组，则轮播显示背景图片
    else if (type(bodyBgImg) === 'array') {
      let count = 0 // 当前图片索引
      let timer = null // 定时器

      // 设置初始图片
      this.bgImg = bodyBgImg[count]

      // 清除定时器以防止重复计时
      clearInterval(timer)
      timer = setInterval(() => {
        // 切换到下一张图片
        if (++count >= bodyBgImg.length) {
          count = 0 // 回到第一张图片
        }
        this.bgImg = bodyBgImg[count]

        // 预加载下一张图片以提高切换时的性能
        if (bodyBgImg[count + 1]) {
          const img = new Image()
          img.src = bodyBgImg[count + 1]
        }
      }, bodyBgImgInterval * 1000) // 以配置的间隔时间切换图片
    }

    // 如果设置了背景透明度，则应用该值
    if (bodyBgImgOpacity !== undefined) {
      this.opacity = bodyBgImgOpacity
    }
  }
}
</script>

<style lang='stylus'>
.body-bg
  position fixed // 背景固定定位
  left 0 // 背景左对齐
  top 0 // 背景顶对齐
  z-index -999999 // 确保背景在所有内容后面
  height 100vh // 背景高度为视口高度
  width 100vw // 背景宽度为视口宽度
  transition background 0.5s // 背景切换时的过渡动画
</style>
