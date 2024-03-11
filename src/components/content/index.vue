<template>
  <div class="content-wrap bg-background">
    <div class="content-header">
      <Button>Gemini</Button>
      &nbsp;
      <Button>openai</Button>
      &nbsp;
      <Button variant="secondary">+</Button>
    </div>
    <div class="content-main">
      <Chat />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import Chat from "./chat/index.vue";
</script>

<style lang="less">
.content-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ::selection {
    background-color: transparent;
  }

  .content-header {
    height: 50px;
    background-color: #000000;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    justify-content: flex-end;
  }

  .content-main {
    flex: 1;
    background-color: #000000;
    margin-top: 4px;
  }
}
</style>
