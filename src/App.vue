<script setup lang="ts">
import Siderbar from "./components/siderbar/index.vue";
import Content from "./components/content/index.vue";
</script>

<template>
  <div id="app" class="bg-background">
    <div class="chatman-container">
      <div class="siderbar">
        <Siderbar />
      </div>
      <div class="content bg-background">
        <Content />
      </div>
    </div>
  </div>
</template>

<style lang="less">
.chatman-container {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;

  .siderbar {
    width: 260px;
    height: 100%;
  }

  .content {
    width: 100%;
    height: 100%;
  }
}
</style>
