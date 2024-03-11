<template>
  <div class="siderbar-wrap">
    <div class="siderbar-header">
      <h1>Siderbar</h1>
    </div>
    <div class="siderbar-content">
      <ul class="siderbar-list">
        <li class="siderbar-list-item">
          <Home color="white" :size="14" />
          <span>Home</span>
        </li>
        <li class="siderbar-list-item">
          <Camera color="white" :size="14" />
          <span>Camera</span>
        </li>
        <li class="siderbar-list-item">
          <Bath color="white" :size="14" />
          <span>Bath</span>
        </li>
      </ul>
    </div>
    <div class="siderbar-footer">
      <div class="setting">
        <Icon
          icon="mdi:settings"
          style="font-size: 24px; color: white; margin-left: 6px"
        />
        <h3>Setting</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Camera, Home, Bath } from "lucide-vue-next";
</script>

<style lang="less">
.siderbar-wrap {
  width: 260px;
  height: 100%;
  background-color: hsl(240, 10%, 3.9%);
  color: white;
  display: flex;
  flex-direction: column;
  border-right: hsl(240, 3.7%, 15.9%) 2px solid;
  ::selection {
    background-color: transparent;
  }
  font-size: 12px;

  .siderbar-header {
    height: 50px;
    padding: 24px;
    background-color: hsl(240, 10%, 3.9%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: hsl(240, 3.7%, 15.9%) 2px solid;
  }

  .siderbar-content {
    flex: 1;
    padding: 6px;

    .siderbar-list {
      list-style: none;
      padding: 0;
      margin: 0;

      .siderbar-list-item {
        padding: 6px 10px;
        margin: 4px 0;
        border-radius: 8px;
        cursor: pointer;
        flex-direction: row;
        display: flex;
        align-items: center;
        gap: 10px;

        &:hover {
          background-color: hsl(240, 3.7%, 15.9%);
        }
      }
    }
  }

  .siderbar-footer {
    height: 50px;
    background-color: hsl(240, 10%, 3.9%);
    display: flex;
    padding: 0 16px;
    border-top: hsl(240, 3.7%, 15.9%) 2px solid;

    .setting {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;

      h3 {
        color: white;
        margin-left: 10px;
      }
    }
  }
}
</style>
