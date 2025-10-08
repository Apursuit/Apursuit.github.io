<template>
  <div class="custom-page archives-page">
    <div class="theme-vdoing-wrapper">
      <!-- 页面标题，展示博客文章标题和徽章 -->
      <h1>
        <img
          :src="currentBadge"
          v-if="$themeConfig.titleBadge === false ? false : true"
        />
        {{ $page.title }}
      </h1>
      <!-- 展示文章总数 -->
      <div class="count">
        总共 <i>{{ $sortPostsByDate.length }}</i> 篇文章
      </div>
      <!-- 按年份分组展示文章列表 -->
      <ul>
        <template v-for="(item, index) in postsList">
          <!-- 按年份分组，年份标题 -->
          <li
            class="year"
            v-if="(year = getYear(index)) !== getYear(index - 1)"
            :key="index + $sortPostsByDate.length"
          >
            <h2>
              {{ year }}
              <span>
                <i>{{ countByYear[year] }}</i> 篇
              </span>
            </h2>
          </li>
          <!-- 每篇文章的链接和标题 -->
          <li :key="index">
            <router-link :to="item.path">
              <span class="date">{{ getDate(item) }}</span>
              {{ item.title }}
              <span class="title-tag" v-if="item.frontmatter.titleTag">
                {{ item.frontmatter.titleTag }}
              </span>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import { type } from '../util'
import TitleBadgeMixin from '../mixins/titleBadge'

export default {
  mixins: [TitleBadgeMixin],
  data() {
    return {
      postsList: [], // 当前展示的文章列表
      countByYear: {}, // 按年份统计的文章数

      perPage: 80, // 每页展示的文章数量
      currentPage: 1 // 当前页码
    }
  },
  created() {
    this.getPageData()

    // 根据年份统计文章数量
    const { $sortPostsByDate, countByYear } = this
    for (let i = 0; i < $sortPostsByDate.length; i++) {
      const { frontmatter: { date } } = $sortPostsByDate[i];
      if (date && type(date) === 'string') {
        const year = date.slice(0, 4)
        if (!countByYear[year]) {
          countByYear[year] = 0
        }
        countByYear[year] += 1
      }
    }
    this.countByYear = countByYear
  },
  mounted() {
    // 监听滚动事件，实现懒加载
    window.addEventListener('scroll', debounce(() => {
      if (this.postsList.length < this.$sortPostsByDate.length) {
        const docEl = document.documentElement
        const docBody = document.body
        const scrollTop = docEl.scrollTop || docBody.scrollTop;
        const clientHeight = docEl.clientHeight || docBody.clientHeight;
        const scrollHeight = docEl.scrollHeight || docBody.scrollHeight;

        if (scrollHeight > clientHeight && scrollTop + clientHeight >= scrollHeight - 250) {
          this.loadmore()
        }
      }

    }, 200))
  },
  methods: {
    // 获取当前页的数据
    getPageData() {
      const currentPage = this.currentPage
      const perPage = this.perPage
      this.postsList = this.postsList.concat(
        this.$sortPostsByDate.slice((currentPage - 1) * perPage, currentPage * perPage)
      )
    },
    // 加载更多数据
    loadmore() {
      this.currentPage += 1
      this.getPageData()
    },
    // 获取文章年份
    getYear(index) {
      const item = this.postsList[index]
      if (!item) {
        return
      }
      const { frontmatter: { date } } = item
      if (date && type(date) === 'string') {
        return date.slice(0, 4)
      }
    },
    // 获取文章日期（MM-DD）
    getDate(item) {
      const { frontmatter: { date } } = item
      if (date && type(date) === 'string') {
        return date.slice(5, 10)
      }
    }
  }
}
</script>

<style lang='stylus'>
@require '../styles/wrapper.styl'

/* 样式相关部分，主要处理归档页面布局与外观 */
.theme-style-line
  .archives-page .theme-vdoing-wrapper
    box-shadow 0 0

.archives-page
  .theme-vdoing-wrapper
    @extend $vdoing-wrapper
    position relative
    @media (min-width $contentWidth + 80)
      margin-top 1.5rem !important
    .count
      text-align right
      margin-top -2.5rem
      font-size 0.85rem
      opacity 0.8
    ul, li
      margin 0
      padding 0
    ul
      margin-top 2rem
    li
      list-style none
      &.year
        position sticky
        top $navbarHeight
        background var(--mainBg)
        z-index 1
      &.year:not(:first-child)
        margin-top 3.5rem
      h2
        margin-bottom 0.8rem
        font-weight 400
        padding 0.5rem 0
        span
          font-size 0.85rem
          font-weight 300
          float right
          margin-top 1rem
      a
        display block
        color var(--textColor)
        transition padding 0.3s
        padding 0.5rem 2rem
        line-height 1.2rem
        &:hover
          padding-left 2.5rem
          color $accentColor
          background #f9f9f9
        @media (max-width $contentWidth + 80)
          padding 0.5rem 1rem
          font-weight normal
          &:hover
            padding-left 1.5rem
        span.date
          opacity 0.6
          font-size 0.85rem
          font-weight 400
          margin-right 0.3rem
        .title-tag
          border 1px solid $activeColor
          color $activeColor
          font-size 0.8rem
          padding 0 0.35rem
          border-radius 0.2rem
          margin-left 0rem
          transform translate(0, -0.05rem)
          display inline-block
    .loadmore
      text-align center
      margin-top 1rem
      opacity 0.5
.theme-mode-dark .archives-page .theme-vdoing-wrapper li a:hover, .theme-mode-read .archives-page .theme-vdoing-wrapper li a:hover
  background var(--customBlockBg)
.hide-navbar
  .archives-page
    .theme-vdoing-wrapper
      li.year
        top 0
</style>
