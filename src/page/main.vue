<template>
  <div>
    <head-top title="标题" 
    :left-options="leftOptions"
    :right-options="rightOptions"></head-top>
    <div class="g-container">
      <router-link to="/grid" class="g-item">grid</router-link>
      <router-link to="/columnCount" class="g-item">column-count</router-link>
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
    computed: {
      leftOptions (){
        return {
          showBack:false
        }
      },
      rightOptions(){
        return {
          showMore:true
        }
      }
    },

  }
</script>

<style lang="scss" scoped>
  $count: 16;
  $numb : 4;

  .g-container {
      margin: 10px;
      display: grid;
      grid-template-columns: repeat($numb, 1fr);
  }

  @for $i from 1 to $count+1 {
      .g-item:nth-child(#{$i}) {
          position: relative;
          border: 1px solid #ccc;
          border-left: none;
          border-top: none;
          padding: 10px;
          text-align: center;
      }
  }

  @for $i from 1 to $count+1 {
    @if $i == 1 or $i == 5 or $i == 9{
      .g-item:nth-child(#{$i}) {
          border-left:1px solid #ccc;
      }
    }
  }

  @for $i from 1 to $numb+1 {
    .g-item:nth-child(#{$i}) {
        border-top:1px solid #ccc;
    }
  }

</style>
