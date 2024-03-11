<template>
  <div class="chat-wrap">
    <div class="chat-header">
      <h3>Chat</h3>
    </div>
    <div class="chat-content">
      <ul>
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
              <p>{{ chat.message }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="chat-footer">
      <Input
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { runGeminiChat } from "@/lib/request";

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

watch(chatHistory, () => {
  loading.value = false;

  const chatContent = document.querySelector(".chat-content");
  if (chatContent) {
    chatContent.scrollTop = chatContent.scrollHeight;
  }
});
</script>
<style lang="less">
.chat-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  ::selection {
    background-color: transparent;
  }

  .chat-header {
    height: 50px;
    background-color: #000000;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    justify-content: flex-end;
  }

  .chat-content {
    height: 100%;
    flex: 1;
    background-color: #000000;
    margin-top: 4px;
    overflow-y: scroll;

    ul {
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
            h3 {
              margin: 0;
              font-size: 16px;
              color: white;
            }
            p {
              margin: 0;
              font-size: 14px;
              color: #e0e0e0;
              word-break: break-word;
            }
          }
        }
      }
    }
  }

  .chat-footer {
    height: 50px;
    background-color: #000000;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;

    input {
      margin-right: 10px;
      color: white;
      ::selection {
        background-color: #e0e0e0;
      }
    }
  }
}
</style>
