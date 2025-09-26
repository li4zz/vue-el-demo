<!-- 豆包ai聊天 -->
<template>
  <div>
    <div class="chat-container">
      <h3>豆包聊天界面</h3>

      <!-- 消息显示区域 -->
      <div
        id="message-area"
        class="conversation-container"
        style="min-height: 200px"
      ></div>

      <!-- 输入区域 -->
      <div class="send-area">
        <input type="text" id="input-message" placeholder="输入消息..." />
        <button id="send-button">发送</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    const messageArea = document.getElementById("message-area");
    const inputMessage = document.getElementById("input-message");
    const sendButton = document.getElementById("send-button");

    // 豆包的回答示例
    const doubaoReplies = [
      "你好呀！我是豆包，很高兴和你聊天～有什么想了解的都可以问我哦～",
      "这个问题很有意思呢！让我想想该怎么回答...首先，我们需要从几个方面来分析...",
      "哈哈，你的想法很有创意～关于这个话题，我可以给你分享一些相关的知识和案例～",
      "不用担心，这个问题不难解决～我来告诉你几个简单的方法，你可以试试看～",
    ];

    // 发送按钮点击事件
    sendButton.addEventListener("click", sendMessage);
    inputMessage.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });

    // 发送用户消息并获取豆包回答
    function sendMessage() {
      const userMessage = inputMessage.value.trim();
      if (!userMessage) return;

      // 添加用户消息
      addMessage(userMessage, "user");
      inputMessage.value = "";

      // 模拟网络请求延迟，获取豆包回答
      setTimeout(() => {
        const reply =
          doubaoReplies[Math.floor(Math.random() * doubaoReplies.length)];
        showTypingEffect(reply);
      }, 500);
    }

    // 添加消息到聊天区域
    function addMessage(text, type) {
      const messageEl = document.createElement("div");
      messageEl.className = `message ${
        type === "user" ? "user-message" : "doubao-message"
      }`;
      messageEl.innerHTML = text;
      messageArea.appendChild(messageEl);
      scrollToBottom();
    }

    // 显示打字机效果和加载符
    function showTypingEffect(text) {
      // 创建豆包消息容器
      const doubaoMessage = document.createElement("div");
      doubaoMessage.className = "message doubao-message";
      messageArea.appendChild(doubaoMessage);
      scrollToBottom();

      const textElement = document.createElement("span");
      doubaoMessage.appendChild(textElement);

      // 创建加载效果
      const loader = document.createElement("span");
      loader.className = "loader";
      doubaoMessage.appendChild(loader);

      let index = 0;
      // const speed = 100; // 打字速度（毫秒/字符）
      const speed = Math.max(50, 150 - text.length * 2); // 长文本自动加速
      const timer = setInterval(() => {
        // 添加字符到文本
        if (index < text.length) {
          textElement.textContent += text.charAt(index);
          index++;
        } else {
          // 所有字符显示完毕，移除加载效果
          clearInterval(timer);
          doubaoMessage.removeChild(loader);
        }
      }, speed);
    }

    // 滚动到聊天区域底部
    function scrollToBottom() {
      messageArea.scrollTop = messageArea.scrollHeight;
    }

    function parseHtml(html) {
      const temp = document.createElement("div");
      temp.innerHTML = html;
      return Array.from(temp.childNodes);
    }

    function showRichTextEffect(htmlText) {
      const nodes = parseHtml(htmlText);
      let index = 0;
      setInterval(() => {
        if (index < nodes.length) {
          message.appendChild(nodes[index].cloneNode(true));
          index++;
        }
      }, 150);
    }

    // 页面加载后自动显示一个豆包消息作为示例
    window.addEventListener("load", () => {
      setTimeout(() => {
        showTypingEffect(
          "欢迎使用豆包～我可以回答你的各种问题，比如技术、生活、知识等等，快来和我聊天吧～"
        );
      }, 500);
    });
  },
};
</script>
<style>
/* 聊天容器样式 */
.chat-container {
  max-width: 600px;
  margin: 30px auto;
  font-family: "Microsoft YaHei", sans-serif;
}

/* 消息对聊容器样式 */
.conversation-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* 消息气泡样式 */
.message {
  border-radius: 16px;
  padding: 12px 16px;
  margin-bottom: 15px;
  position: relative;
  width: fit-content;
  max-width: 80%;
}

.user-message {
  background-color: #f0f9ff;
  margin-left: auto;
  text-align: right;
}

.doubao-message {
  background-color: #e6f7ff;
  margin-right: auto;
  text-align: left;
}

/* 加载效果样式（光标） */
.loader {
  display: inline-block;
  width: 8px;
  height: 16px;
  background-color: #409eff;
  border-radius: 4px;
  margin-left: 4px;
  animation: blink 1.2s infinite;
}

/* 光标闪烁动画 */
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

/* 发送按钮样式 */
.send-area {
  display: flex;
  margin-top: 20px;
}

.send-area input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #d9d9d9;
  border-radius: 20px 0 0 20px;
  outline: none;
}

.send-area button {
  padding: 0 20px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
}
</style>
