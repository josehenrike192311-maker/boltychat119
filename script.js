/* ========================= */
/* style.css */
/* ========================= */

body {
  margin: 0;
  padding: 0;
  background: #f1f1f1;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.chat-container {
  width: 90%;
  max-width: 700px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.chat-header {
  background: black;
  color: white;
  padding: 20px;
}

.chat-header h1 {
  margin: 0;
  font-size: 28px;
}

.chat-header p {
  margin-top: 5px;
  color: #ccc;
}

.chat-box {
  height: 500px;
  overflow-y: auto;
  padding: 20px;
  background: #fafafa;
}

.message {
  padding: 12px 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  max-width: 80%;
  line-height: 1.5;
}

.bot-message {
  background: white;
  border: 1px solid #ddd;
}

.user-message {
  background: black;
  color: white;
  margin-left: auto;
}

.chat-input-area {
  display: flex;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #ddd;
}

.chat-input-area input {
  flex: 1;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.chat-input-area button {
  background: black;
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 12px;
  cursor: pointer;
}

.suggestions {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background: #f5f5f5;
}

.suggestions button {
  padding: 10px 15px;
  border-radius: 30px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
}

.suggestions button:hover {
  background: black;
  color: white;
}
