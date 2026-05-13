/* =========================
   style.css (estilo WhatsApp / ChatGPT)
========================= */

body {
  margin: 0;
  font-family: Arial;
  background: #0b141a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.app {
  width: 100%;
  max-width: 420px;
  height: 90vh;
  background: #111b21;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
}

/* HEADER */
.header {
  background: #202c33;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
}

.avatar {
  width: 40px;
  height: 40px;
  background: #00a884;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.header-info h1 {
  font-size: 16px;
  margin: 0;
}

.header-info span {
  font-size: 12px;
  color: #aebac1;
}

/* CHAT */
.chat {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.msg {
  max-width: 80%;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.4;
}

.bot {
  background: #202c33;
  color: white;
  align-self: flex-start;
  border-top-left-radius: 0;
}

.user {
  background: #005c4b;
  color: white;
  align-self: flex-end;
  border-top-right-radius: 0;
}

/* TYPING */
.typing {
  display: none;
  font-size: 12px;
  color: #aebac1;
  padding: 5px 10px;
}

/* INPUT */
.input-area {
  display: flex;
  padding: 10px;
  background: #202c33;
  gap: 8px;
}

.input-area input {
  flex: 1;
  border: none;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  background: #111b21;
  color: white;
}

.input-area button {
  background: #00a884;
  border: none;
  color: white;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
}
