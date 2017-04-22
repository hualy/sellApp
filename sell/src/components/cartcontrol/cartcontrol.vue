<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event) {
//          保证pc点击和手机点击相同次数
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
//          this.food.count = 1;
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
//        添加商品的时候派发一个事件
        this.$emit('add', event.target);
      },
      decreaseCart(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .cartcontrol {
    font-size: 0;
    .cart-decrease {
      display: inline-block;
      padding: 6px;
      /*最终状态*/
      opacity: 1;
      /*开启硬件加速*/
      transform: translate3d(0, 0, 0);
      .inner {
        /*为了有宽度和高度*/
        display: inline-block;
        line-height: 24px;
        font-size: 24px;
        color: rgb(0, 160, 220);
        transition: all 0.4s linear;
        transform: rotate(0);
      }
      &.move-enter-active, &.move-leave-active {
            transition: all 0.4s linear;
          }
        /*进入动画*/
        &.move-enter, &.move-leave-active {
          opacity: 0;
          transform: translate3d(24px, 0, 0);
          .inner{
            transform: rotate(180deg);
          }
      }
    }
    .cart-count {
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147, 153, 159);
    }
    .cart-add {
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
    }
  }
</style>
