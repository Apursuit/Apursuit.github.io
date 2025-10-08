<template>
  <aside class="blogger-wrapper card-box">
    <!-- 博主头像区域 -->
    <div class="avatar">
      <!-- 动态绑定头像图片，显示图片的 alt 和 title 属性 -->
      <img :src="blogger.avatar" alt="头像" title="我好看吗" />
    </div>
    
    <!-- 社交图标区域 -->
    <div class="icons" v-if="social && social.icons && social.icons.length">
      <!-- 遍历社交图标列表，每个图标为一个链接 -->
      <a
        v-for="(item, index) in social.icons"
        :key="index"
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        :style="{ width: 100 / social.icons.length + '%' }"
        target="_blank"
      />
    </div>

    <!-- 博主信息区域 -->
    <div class="blogger">
      <!-- 博主名称 -->
      <span class="name">{{ blogger.name }}</span>
      <!-- 博主标语或口号 -->
      <span class="slogan">{{ blogger.slogan }}</span>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    // 从主题配置中获取博主信息
    blogger () {
      return this.$themeConfig.blogger
    },
    // 从主题配置中获取社交信息
    social () {
      return this.$themeConfig.social
    }
  }
}
</script>

<style lang='stylus'>
.blogger-wrapper
  height auto
  display inline-table
  padding-top 0 !important
  overflow hidden
  .avatar
    width 100%
    // height 235px
    overflow hidden
    @media (max-width 900px)
      // width 205px
      // height 205px
    img
      width 100%
      height 100%
  .icons
    // border 1px solid var(--borderColor)
    border-top none
    height 35px
    line-height 35px
    a
      font-size 20px
      width 33%
      color var(--textColor)
      display block
      float left
      text-align center
      opacity 0.8
      &:hover
        color $accentColor
  .blogger
    padding 0.3rem 0.95rem 0 0.95rem
    .name
      font-size 1.3rem
      display block
      margin-bottom 6px
    .slogan
      color var(--textColor)
</style>
