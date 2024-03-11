<template>
  <div class="siderbar-wrap">
    <div class="siderbar-header">
      <h1>Siderbar</h1>
    </div>
    <div class="siderbar-content">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
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
</script>

<style lang="less">
.siderbar-wrap {
  width: 260px;
  height: 100%;
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  ::selection {
    background-color: transparent;
  }

  .siderbar-header {
    height: 50px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .siderbar-content {
    flex: 1;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        padding: 10px;
        cursor: pointer;
        &:hover {
          background-color: #e0e0e0;
        }
      }
    }
  }

  .siderbar-footer {
    height: 50px;
    background-color: #000000;
    display: flex;

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
