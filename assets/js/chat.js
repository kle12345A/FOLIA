// ========== FLOATING CONTACT FUNCTIONALITY ==========

class FloatingContact {
  constructor() {
    this.isChatbotOpen = false;
    this.API_KEY = "AIzaSyDsM1teUsYv2Why2F9q1_cVL2x27US7Uc8";
    this.API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.API_KEY}`;
    this.chatHistory = [];
    this.userData = {
      message: null,
      file: {
        data: null,
        mime_type: null
      }
    };
    this.init();
  }

  init() {
    this.bindEvents();
    this.createFloatingButtons();
  }

  createFloatingButtons() {
    // Tạo container cho floating buttons
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-contact';
    floatingContainer.innerHTML = `
      <!-- Facebook Messenger -->
      <a href="https://m.me/your-facebook-page" target="_blank" class="contact-btn messenger" data-tooltip="Chat Facebook">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" />
      </a>

      <!-- Zalo -->
      <a href="https://zalo.me/your-zalo-oa" target="_blank" class="contact-btn zalo" data-tooltip="Chat Zalo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9M6V08Mvxd3OORurB4xNIKudVqwzq0taGQ&s" alt="Zalo" />
      </a>

      <!-- ChatGPT -->
      <button class="contact-btn chatbot" data-tooltip="Chat AI">
        <span class="material-symbols-rounded">mode_comment</span>
      </button>
    `;

    // Tạo chatbot popup
    const chatbotPopup = document.createElement('div');
    chatbotPopup.className = 'chatbot-popup';
    chatbotPopup.innerHTML = `
      <div class="chat-header">
        <div class="header-info">
          <h2 class="logo-text">FOLIA</h2>
        </div>
        <button class="material-symbols-rounded" id="close-chatbot">keyboard_arrow_down</button>
      </div>
      <div class="chat-body" id="chatBody">
        <div class="message bot-message">
          <div class="message-text">
            Xin chào! 👋<br>
            Tôi là trợ lý AI của FOLIA. Tôi có thể giúp bạn tìm hiểu về sản phẩm từ sợi tự nhiên, đặt hàng hoặc trả lời các câu hỏi về thương hiệu FOLIA. Bạn cần hỗ trợ gì?
          </div>
        </div>
      </div>
      <div class="chat-footer">
        <form class="chat-form" id="chatForm">
          <textarea placeholder="Nhập tin nhắn của bạn..." class="message-input" id="messageInput" required></textarea>
          <div class="chat-controls">
            <button type="button" id="emoji-picker" class="material-symbols-outlined">sentiment_satisfied</button>
            <div class="file-upload-wrapper">
              <input type="file" id="file-input" hidden />
              <img src="#" id="file-preview" style="display: none;" />
              <button type="button" id="file-upload" class="material-symbols-rounded">attach_file</button>
              <button type="button" id="file-cancel" class="material-symbols-rounded" style="display: none;">close</button>
            </div>
            <button type="submit" id="send-message" class="material-symbols-rounded">arrow_upward</button>
          </div>
        </form>
      </div>
    `;

    // Thêm vào body
    document.body.appendChild(floatingContainer);
    document.body.appendChild(chatbotPopup);

    // Thêm Material Icons
    this.addMaterialIcons();
  }

  addMaterialIcons() {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  bindEvents() {
    // Chatbot toggle
    document.addEventListener('click', (e) => {
      if (e.target.closest('.contact-btn.chatbot')) {
        this.toggleChatbot();
      }
      
      if (e.target.closest('#close-chatbot')) {
        this.closeChatbot();
      }
    });

    // Send message
    document.addEventListener('submit', (e) => {
      if (e.target.id === 'chatForm') {
        e.preventDefault();
        this.sendMessage();
      }
    });

    // Enter key to send
    document.addEventListener('keypress', (e) => {
      if (e.target.id === 'messageInput' && e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    // File upload
    document.addEventListener('change', (e) => {
      if (e.target.id === 'file-input') {
        this.handleFileUpload(e.target.files[0]);
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.id === 'file-upload') {
        document.getElementById('file-input').click();
      }
      
      if (e.target.id === 'file-cancel') {
        this.cancelFileUpload();
      }
    });
  }

  toggleChatbot() {
    this.isChatbotOpen = !this.isChatbotOpen;
    const chatbot = document.querySelector('.chatbot-popup');
    
    if (this.isChatbotOpen) {
      chatbot.classList.add('show');
      document.getElementById('messageInput').focus();
    } else {
      chatbot.classList.remove('show');
    }
  }

  closeChatbot() {
    this.isChatbotOpen = false;
    document.querySelector('.chatbot-popup').classList.remove('show');
  }

  sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (!message) return;

    // Store user data
    this.userData.message = message;

    // Add user message
    this.addMessage(message, 'user');
    input.value = '';

    // Show typing indicator
    this.showTypingIndicator();

    // Get AI response
    setTimeout(() => {
      this.hideTypingIndicator();
      this.getAIResponse(message);
    }, 1000);
  }

  addMessage(content, sender) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-text';
    contentDiv.textContent = content;
    
    messageDiv.appendChild(contentDiv);
    chatBody.appendChild(messageDiv);
    
    this.scrollToBottom();
  }

  showTypingIndicator() {
    const chatBody = document.getElementById('chatBody');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = `
      <div class="message-text">
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
    chatBody.appendChild(typingDiv);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  async getAIResponse(userMessage) {
    try {
      // Add system prompt if chat history is empty
      if (this.chatHistory.length === 0) {
        this.chatHistory.push({
          role: "user",
          parts: [{ text: "Bạn là trợ lý AI của FOLIA - thương hiệu sản phẩm từ sợi tự nhiên như chuối, lục bình, cỏ bàng. Hãy trả lời thân thiện và hữu ích về sản phẩm, giá cả, đặt hàng. FOLIA cam kết bảo vệ môi trường và tạo ra sản phẩm bền vững." }]
        });
        this.chatHistory.push({
          role: "model", 
          parts: [{ text: "Tôi hiểu rồi! Tôi là trợ lý AI của FOLIA, sẵn sàng hỗ trợ bạn về sản phẩm từ sợi tự nhiên." }]
        });
      }

      // Add user message to chat history
      this.chatHistory.push({
        role: "user",
        parts: [{ text: userMessage }, ...(this.userData.file.data ? [{ inline_data: this.userData.file }] : [])],
      });

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: this.chatHistory
        })
      };

      const response = await fetch(this.API_URL, requestOptions);
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error.message);
      
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      
      // Add bot response to chat history
      this.chatHistory.push({
        role: "model",
        parts: [{ text: apiResponseText }]
      });
      
      this.addMessage(apiResponseText, 'bot');
    } catch (error) {
      console.error('API Error:', error);
      this.addMessage('Xin lỗi, tôi đang gặp sự cố kỹ thuật. Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi.', 'bot');
    } finally {
      this.userData.file = { data: null, mime_type: null };
    }
  }

  getSimulatedResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('sản phẩm') || lowerMessage.includes('sản phẩm')) {
      return 'Chúng tôi có nhiều sản phẩm từ sợi chuối, sợi lục bình như túi xách, dép, lót ly... Bạn muốn tìm hiểu về sản phẩm nào cụ thể?';
    }
    
    if (lowerMessage.includes('giá') || lowerMessage.includes('price')) {
      return 'Giá sản phẩm dao động từ 60,000đ đến 799,000đ tùy theo loại sản phẩm. Bạn có thể xem chi tiết giá trong trang Sản phẩm.';
    }
    
    if (lowerMessage.includes('đặt hàng') || lowerMessage.includes('mua')) {
      return 'Bạn có thể đặt hàng qua Facebook, Zalo hoặc gọi trực tiếp số 0343793211. Chúng tôi hỗ trợ giao hàng toàn quốc.';
    }
    
    if (lowerMessage.includes('liên hệ') || lowerMessage.includes('contact')) {
      return 'Thông tin liên hệ:\n- Địa chỉ: Ngõ 521 - Cổ Nhuế 2 - Bắc Từ Liêm - Hà Nội\n- Số điện thoại: 0343793211\n- Email: Foliaoriginalvietnam@gmail.com';
    }
    
    if (lowerMessage.includes('môi trường') || lowerMessage.includes('xanh')) {
      return 'Tất cả sản phẩm của FOLIA đều được làm từ nguyên liệu tự nhiên, thân thiện với môi trường và có thể phân hủy sinh học. Chúng tôi cam kết bảo vệ môi trường!';
    }
    
    if (lowerMessage.includes('cảm ơn') || lowerMessage.includes('thanks')) {
      return 'Không có gì! Rất vui được hỗ trợ bạn. Nếu có thắc mắc gì khác, đừng ngại hỏi nhé!';
    }
    
    return 'Cảm ơn bạn đã liên hệ! Tôi có thể giúp bạn tìm hiểu về sản phẩm, giá cả, cách đặt hàng hoặc thông tin liên hệ. Bạn cần hỗ trợ gì thêm không?';
  }

  handleFileUpload(file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const preview = document.getElementById('file-preview');
        preview.src = e.target.result;
        preview.style.display = 'block';
        document.getElementById('file-cancel').style.display = 'block';
        document.getElementById('file-upload').style.display = 'none';
      };
      reader.readAsDataURL(file);
    }
  }

  cancelFileUpload() {
    document.getElementById('file-input').value = '';
    document.getElementById('file-preview').style.display = 'none';
    document.getElementById('file-cancel').style.display = 'none';
    document.getElementById('file-upload').style.display = 'block';
  }

  scrollToBottom() {
    const chatBody = document.getElementById('chatBody');
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

// ========== TYPING INDICATOR STYLES ==========
const typingStyles = `
  .typing-indicator .message-text {
    background: #e8f0e5;
    padding: 0.75rem 1rem;
  }
  
  .typing-dots {
    display: flex;
    gap: 4px;
    align-items: center;
  }
  
  .typing-dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #999;
    animation: typing 1.4s infinite ease-in-out;
  }
  
  .typing-dots span:nth-child(1) {
    animation-delay: -0.32s;
  }
  
  .typing-dots span:nth-child(2) {
    animation-delay: -0.16s;
  }
  
  @keyframes typing {
    0%, 80%, 100% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

// Add typing indicator styles
const styleSheet = document.createElement('style');
styleSheet.textContent = typingStyles;
document.head.appendChild(styleSheet);

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
  new FloatingContact();
});
