<template>
  <div class="g-container">
    <div class="g-item">1</div>
    <div class="g-item">2</div>
    <div class="g-item">3</div>
    <div class="g-item">4</div>
    <div class="g-item">5</div>
    <div class="g-item">6</div>
    <div class="g-item">7</div>
    <div class="g-item">8</div>
  </div>
</template>

<script>
export default {
  name: 'my-grid',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  $count: 8;

  .g-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);/*定义有列宽 1fr每个网格项就会占据网格容器宽度的四分之一*/
  }

  @for $i from 1 to $count+1 {
      .g-item:nth-child(#{$i}) {
          position: relative;
          border: 1px solid #ccc;
          margin: 0.5vw;
          padding: 10px;
          text-align: center;
      }
  }

</style>
