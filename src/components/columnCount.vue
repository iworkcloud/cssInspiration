<template>
  <div>
    <head-top title="标题">
      <!-- <p slot="overwrite-left">aa</p> -->
    </head-top>
    <div class="main clearfix">
        <div class="m-palace">1</div>
        <div class="m-palace">2</div>
        <div class="m-palace">3</div>
        <div class="m-palace">4</div>

        <div class="m-palace">5</div>
        <div class="m-palace">6</div>
        <div class="m-palace">7</div>
        <div class="m-palace">8</div>

        <div class="m-palace">9</div>
        <div class="m-palace">10</div>
        <div class="m-palace">11</div>
       <!--  <div class="m-palace">12</div> -->
    </div>
  </div>
</template>

<script>

  import headTop from '@/components/header'

  export default {
    data () {
      return {
        
      }
    },
    components:{headTop},
  }
</script>

<style lang="scss" scoped>
  $count : 4;

  * { padding: 0; margin: 0; }
  .main {
    width: 100%;
    column-count: $count;
    column-gap:5px;
  }
  .main {
    & > .m-palace  {
      padding: 5px;
      border: 1px solid #E78326;         
      background-color: #E78326;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }
  /*.main>.m-palace {
    padding: 5px;
    border: 1px solid #E78326;         
    background-color: #E78326;
    border-radius: 5px;
    margin-bottom: 10px;
  }*/
</style>
