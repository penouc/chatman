<template>
  <div class="content-wrap bg-background">
    <div class="content-header">
      <div class="content-header-title">
        <span>Chat</span>
      </div>
      <div class="content-header-btns">
        <Button>Gemini</Button>
        &nbsp;
        <Button>openai</Button>
        &nbsp;
        <Button variant="secondary">+</Button>
      </div>
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

  .content-header {
    height: 50px;
    background-color: hsl(240, 10%, 3.9%);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    justify-content: flex-end;
    border-bottom: hsl(240, 3.7%, 15.9%) 2px solid;

    .content-header-title {
      flex: 1;
      color: white;
      font-size: 16px;
    }

    .content-header-btns {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
  }

  .content-main {
    flex: 1;
    background-color: hsl(240, 10%, 3.9%);
  }
}
</style>
