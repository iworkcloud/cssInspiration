<template>
  <div class="vux-header">
    <div class="vux-header-left">
      <slot name="overwrite-left">
        <a class="vux-header-back" v-show="_leftOptions.showBack" @click.preventDefault @click="onClickBack">
            {{ typeof _leftOptions.backText === 'undefined' ? '返回' : _leftOptions.backText}}
          </a>
        <div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
      </slot>
    </div>
    <h1 class="vux-header-title">
      <slot>
          <span v-show="title">{{title}}</span>
      </slot>
    </h1>
    <div class="vux-header-right" v-if="rightOptions.showMore">
      搜索
    </div>
  </div>
</template>

<script>
  export default {
    
    data () {
      return {
        
      }
    },
    props: { 
      title:String,
      leftOptions:Object,
      rightOptions: {
        type: Object,
        default () {
          return {
            showMore: false
          }
        }
      },
    },
    computed: {
      _leftOptions () {
        return Object.assign({
          showBack: true,
        }, this.leftOptions || {})
      }
    },
  mounted () {
    //console.log(this._leftOptions)
  },
  methods: {
    onClickBack () {
      this.$router ? this.$router.back() : window.history.back()
    },
  },
}
</script>
<style lang="scss">
  /*@import '../../styles/variable.less';*/
  
.vux-header {
  position: relative;
  padding: 3px 0;
  box-sizing: border-box;
  background-color: #35495e;
}
.vux-header .vux-header-title {
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
.vux-header-title-area, .vux-header .vux-header-title {
  margin: 0 88px;
  height: 40px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vux-header .vux-header-title > span {
  display: inline-block;
  color: #fff;
}
.vux-header .vux-header-left,.vux-header .vux-header-right {
  position: absolute;
  top: 14px;
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: #ccc;
}
.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button {
  float: left;
  margin-right: 8px;
  color: #ccc;
}
.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active {
  opacity: .5
}
.vux-header .vux-header-left {
  left: 18px
}
.vux-header .vux-header-left .vux-header-back {
  padding-left: 16px
}
.vux-header .vux-header-left .left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
  }
}
.vux-header .vux-header-right {
  right: 15px
}
.vux-header .vux-header-right a,.vux-header .vux-header-right button {
  margin-left: 8px;
  margin-right: 0
}
.vux-header .vux-header-right .vux-header-more:after {
  content: "\2022\0020\2022\0020\2022\0020";
  font-size: 16px;
}
.vux-header-fade-in-right-enter-active {
  animation: fadeinR .5s;
}
.vux-header-fade-in-left-enter-active {
  animation: fadeinL .5s;
}
@keyframes fadeinR {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity:1;
    transform:translateX(0);
  }
}
@keyframes fadeinL{
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
