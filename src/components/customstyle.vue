<template>
  <div class="row">
    <div class="div col-lg-6">col-lg-6</div>
    <div class="div col-lg-6">col-lg-6</div>

    <div class="div green col-md-offset-3 col-md-3 col-lg-9">col-md-offset-3 col-md-4 col-lg-9</div>
    <div class="div green col-md-6 visible-md-block">col-md-6 visible-md-block</div>

    <div class="div blue col-lg-4">col-lg-4</div>
    <div class="div blue col-lg-4">col-lg-4</div>
    <div class="div blue col-lg-4">col-lg-4</div>

    <div class="div purple col-lg-3 hidden-xs">col-lg-3 hidden-xs</div>
    <div class="div purple col-lg-3 hidden-sm">col-lg-3 hidden-sm</div>
    <div class="div purple col-lg-3 hidden-md">col-lg-3 hidden-md</div>
    <div class="div purple col-lg-3 hidden-lg">col-lg-3 hidden-lg</div>

    <div class="div purple col-lg-3 visible-xs-block">col-lg-3 visible-xs-block</div>
    <div class="div purple col-lg-3 visible-sm-block">col-lg-3 visible-sm-block</div>
    <div class="div purple col-lg-3 visible-md-block">col-lg-3 visible-md-block</div>
    <div class="div purple col-lg-3 visible-lg-block">col-lg-3 visible-lg-block</div>

    <div class="pink col-lg-6">
        <div class="row">
            <div class="div blue col-lg-4">col-lg-4</div>
            <div class="div blue col-lg-4">col-lg-4</div>
            <div class="div blue col-lg-4">col-lg-4</div>

            <div class="div red col-lg-6">col-lg-6</div>
            <div class="div red col-lg-6">col-lg-6</div>
        </div>
    </div>
    <div class="yellow col-lg-6">
        <div class="row">
            <div class="div purple col-lg-3 col-md-4 col-xs-6">col-lg-3 col-md-6 col-xs-6</div>
            <div class="div purple col-lg-3 col-md-4 col-xs-6">col-lg-3 col-md-4 col-xs-6</div>
            <div class="div purple col-lg-3 col-md-4 col-xs-6">col-lg-3 col-md-4 col-xs-6</div>
            <div class="div purple col-lg-3 col-md-4 col-xs-6">col-lg-3 col-md-4 col-xs-6</div>

            <div class="div green col-lg-3">col-lg-3</div>
            <div class="div green col-lg-9">col-lg-3</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>

  .row div{
    border: 1px solid #CCC;
  }
  /* col的间隔的像素 */
  $space: 5;

  /*一行col的总数 */
  $col-count: 12;

  /* 小屏幕（平板，大于等于 768px）*/
  $screen-sm-min: 768px;

  /*中等屏幕（桌面显示器，大于等于 992px） */
  $screen-md-min: 992px;

  /* 大屏幕（大桌面显示器，大于等于 1200px） */
  $screen-lg-min: 1200px;

  /* 生成响应工具的函数 */
  @mixin responsive-tools ($size) {
      .visible-#{$size}-inline{
          display: inline;
      }
      .visible-#{$size}-block{
          display: block;
      }
      .visible-#{$size}-inline-block{
          display: inline-block;
      }
      .hidden-#{$size}{
          display: none;
      }
  }

   /*一个容器的宽度,通常是定义两边带余白的容器宽度时候使用 */
  /*.container{
      width: 1170px;
      margin-left: auto;
      margin-right: auto;
  }*/

  /* 行布局,与bootstarp不同,row不需要一定放到container里面 */
  .row{
      /*比100%宽,多出一个栅格的宽度*/
      width: calc(100% + #{$space}px);

      margin-left: -#{$space}px;

      /*去除浮动效果*/
      &:after {
          clear: both;
          display: table;
          content: " ";
      }
  }

  /* 列的通用样式原型 */
  %col{
      padding: 0;
      margin: 0 0 0 #{$space}px;
      float: left;
      width: calc(100% - #{$space}px);
  }

  /*生成不同尺寸的col共通部分*/
  @each $size in 'xs' 'sm' 'md' 'lg' {
      @for $i from 1 through $col-count {
          .col-#{$size}-#{$i} {
              @extend %col;
          }
      }
  }

  /*生成响应式样式帮助类的默认值*/
  @each $size in xs sm md lg {
      .visible-#{$size}-inline, .visible-#{$size}-block, .visible-#{$size}-inline-block{
          display: none;
      }

  }

  /* --------------------------- 定义xs样式,这是默认样式,超小屏幕(手机) ----------------------------- */
  @media screen and (max-width: $screen-sm-min) {
      /* 仅xs的行布局能正常显示;sm md lg都不支持,每列均为100% */
      @include responsive-tools('xs');
      .container{
          width: 750px;
      }
  }
  /* --------------------------- 定义sm样式,这是默认样式,小屏幕（平板) ----------------------------- */
  @media screen and (min-width: $screen-sm-min) and (max-width: $screen-md-min) {
      @include responsive-tools('sm');
      .container{
          width: 970px;
      }
  }
  /*--------------------------- 定义md样式,这是默认样式,中屏幕(小桌面) ----------------------------- */
  @media screen and (min-width: $screen-md-min) and (max-width: $screen-lg-min) {
      @include responsive-tools('md');
  }
  /*--------------------------- 定义lg样式,这是默认样式,大屏幕(大桌面) -----------------------------*/
  @media screen and (min-width: $screen-lg-min) {
      @include responsive-tools('lg');
  }

  /*--------------------------- 定义在不同显示器的情况下的列的表现 -----------------------------*/
  @media screen and (min-width: 0) {
      @for $i from 1 through $col-count {
          .row > .col-xs-#{$i} {
              width: calc(#{100% * $i / $col-count} - #{$space+2}px);
          }

          .row > .col-xs-offset-#{$i} {
              margin-left: calc(#{100% * $i / $col-count} + #{$space}px);
          }
      }
  }
  @media screen and (min-width: $screen-sm-min) {
      @for $i from 1 through $col-count {
          .row > .col-sm-#{$i} {
              width: calc(#{100% * $i / $col-count} - #{$space}px);
          }

          .row > .col-sm-offset-#{$i} {
              margin-left: calc(#{100% * $i / $col-count} + #{$space}px);
          }
      }
  }
  @media screen and (min-width: $screen-md-min) {
      @for $i from 1 through $col-count {
          .row > .col-md-#{$i} {
              width: calc(#{100% * $i / $col-count} - #{$space}px);
          }

          .row > .col-md-offset-#{$i} {
              margin-left: calc(#{100% * $i / $col-count} + #{$space}px);
          }
      }
  }
  @media screen and (min-width: $screen-lg-min) {
      @for $i from 1 through $col-count {
          .row > .col-lg-#{$i} {
              width: calc(#{100% * $i / $col-count} - #{$space}px);
          }

          .row > .col-lg-offset-#{$i} {
              margin-left: calc(#{100% * $i / $col-count} + #{$space}px);
          }
      }
  }

</style>
