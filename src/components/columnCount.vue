<template>
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
  $count : 4;

  * { padding: 0; margin: 0; }
  .main {
    width: 100%;
    column-count: $count;
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
