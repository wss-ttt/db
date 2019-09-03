<template>
  <div class="card">
    <div class="left">
      <img src="http://placehold.it/48x48/" />
    </div>
    <div class="right">
      <div class="up">
        <p>
          <span>某某</span>写了日记
        </p>
        <p>2019-09-02 17:03:35</p>
      </div>
      <div class="down">
        <div class="content">
          <div class="title">爱如士App 4.12.0 主要更新</div>
          <div class="desc">- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</div>
        </div>
        <div class="actions">
          <span class="action like">
            <i>4</i>
          </span>
          <span class="action comment">
            <i>3</i>
          </span>
          <span class="action retweet">
            <i>2</i>
          </span>
          <span class="action more"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style scoped lang="scss">
.card {
  display: flex;
  border-bottom:1px solid #ccc;
  margin:15px 0;
  .left {
    img {
      border-radius: 50%;
    }
  }
  .right {
    .up {
      p {
        span {
          font-weight: bold;
        }
      }
      height: 48px;
      padding-left: 15px;
    }
    .down {
      margin-top: 5px;
      .content {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 15px;
        .title {
          font-size: 18px;
          font-weight: 500;
        }
        .desc {
          font-size: 14px;
          color: #aaa;
        }
      }
      .actions {
        padding: 30px 0 15px;
        .action {
          display: inline-flex;
          align-items: center;
          i {
            font-style: normal;
            color: #aaa;
            margin-left: 5px;
          }
          &::before {
            content: '';
            display: inline-block;
            width: 24px;
            height: 24px;
            background-repeat: no-repeat;
            background-position: center center;
          }
          &.like::before {
            background-image: url('../assets/ic_like_gray.svg');
          }
          &.comment::before {
            background-image: url('../assets/ic_comment.svg');
          }
          &.retweet::before {
            background-image: url('../assets/ic_retweet_gray.svg');
          }
          &.more {
            float: right;
            &::before {
              background-image: url('../assets/more.svg');
            }
          }
        }
      }
    }
  }
}
</style>