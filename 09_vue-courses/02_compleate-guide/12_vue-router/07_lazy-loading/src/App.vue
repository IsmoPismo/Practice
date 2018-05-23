<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <app-header></app-header>
                <transition name="slide" mode="out-in">
                  <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
    export default {
      components: {
        appHeader: Header
      }
    }
</script>

<style>
  .slide-leave-active {
    transition: all 680ms ease;
    opacity: 0;
    transform: translateX(-200px);
  }
  .slide-enter {
    transform: translateX(260px);
    opacity: 0;
  }
  .slide-enter-active {
    transition: all 480ms ease;
  }
    </style>
