<template>
  <app-header></app-header>
  <div>
    <app-aside></app-aside>
    <app-container></app-container>
  </div>
  <app-footer></app-footer>
</template>
<script>
import appHeader from "@/layout/appHeader";
import appFooter from "@/layout/appFooter";
import appAside from "@/layout/appAside";
import appContainer from "@/layout/appContainer";
export default {
  components: {
    appHeader,
    appFooter,
    appAside,
    appContainer,
  },
};
</script>
<style lang="less">
  @import "./assets/less/app";
</style>
<style>

</style>
