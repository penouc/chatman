<template>
  <div class="chat-wrap">
    <div class="chat-content">
      <ul class="chat-list">
        <li>
          <div class="chat-item">
            <div class="chat-item-avatar">
              <img
                src="https://avatars.githubusercontent.com/u/1407692?v=4"
                alt="avatar"
              />
            </div>
            <div class="chat-item-content">
              <h3>Chatman</h3>
              <p>
                Hi, I'm Chatman, your personal AI assistant. How can I help you
                today?
              </p>
            </div>
          </div>
          <div
            class="chat-item"
            v-for="(chat, index) in chatHistory"
            :key="index"
          >
            <div class="chat-item-avatar">
              <img :src="chat.avatar" alt="avatar" />
            </div>
            <div class="chat-item-content">
              <h3>{{ chat.name }}</h3>
              <div v-html="parseMd(chat.message)"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="chat-footer">
      <Textarea
        class="chat-textarea"
        type="text"
        placeholder="Type a message"
        v-model="inputWords"
        @keypress.enter="sendChat"
      />
      <Button variant="outline" @click="sendChat" :loading="loading">
        send
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { runGeminiChat } from "@/lib/request";
import { marked } from "marked";
import { set } from "@vueuse/core";

const chatHistory = ref<{ name: string; message: any; avatar: string }[]>([]);
const inputWords = ref("");
const loading = ref(false);

const sendChat = () => {
  loading.value = true;

  runGeminiChat(inputWords.value).then((res) => {
    console.log("gemni chat", res);
    chatHistory.value.push({
      name: "Gemini",
      message: res,
      avatar: "https://avatars.githubusercontent.com/u/1407692?v=4",
    });
  });

  chatHistory.value.push({
    name: "You",
    message: inputWords.value,
    avatar: "https://avatars.githubusercontent.com/u/1407692?v=4",
  });
  inputWords.value = "";
};

// 转换 markdown
const parseMd = (md: string) => {
  return marked(md);
};

// 监听 chatHistory 变化
watch(chatHistory.value, (newVal) => {
  // 滚动到底部
  const chatContent = document.querySelector(".chat-content");
  setTimeout(() => {
    chatContent?.scrollTo(0, chatContent.scrollHeight);
  }, 100);
});
</script>
<style lang="less">
.chat-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  .chat-content {
    height: 100%;
    flex: 1;
    background-color: hsl(240, 10%, 3.9%);
    margin-top: 4px;
    overflow-y: scroll;
    color: white;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
      border-radius: 5px;
    }

    .chat-list {
      list-style: none;
      padding: 0;
      margin: 0;
      height: calc(100vh - 154px);

      li {
        .chat-item {
          display: flex;
          flex-direction: row;
          padding: 10px;
          .chat-item-avatar {
            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
          }
          .chat-item-content {
            padding-left: 10px;
            width: calc(100% - 40px);
            font-size: 12px;
            line-height: 24px;

            h3 {
              margin: 0;
              font-size: 14px;
              color: white;
            }
            p {
              margin: 0;
              font-size: 12px;
              color: #e0e0e0;
              word-break: break-word;
            }
          }
        }
      }
    }
  }

  .chat-footer {
    height: 80px;
    background-color: hsl(240, 10%, 3.9%);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 10px 10px 10px;

    .chat-textarea {
      margin-right: 10px;
      color: white;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #e0e0e0;
        border-radius: 5px;
      }
    }
  }
}
</style>
