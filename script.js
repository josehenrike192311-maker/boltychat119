// =========================
// script.js
// =========================

const respostas = {
  "o que é ia": "A Inteligência Artificial é uma tecnologia criada para simular capacidades humanas como aprendizado, interpretação de informações e tomada de decisões. Hoje ela está presente em aplicativos, bancos, hospitais, redes sociais e empresas.",

  "ia e emprego": "A IA pode substituir tarefas repetitivas, mas também cria novas profissões ligadas à tecnologia, programação, automação e análise de dados.",

  "produtividade": "A IA aumenta a produtividade automatizando tarefas, reduzindo erros e acelerando processos empresariais.",

  "automação": "Automação é o uso de sistemas inteligentes e softwares para realizar tarefas automaticamente com pouca intervenção humana.",

  "profissões do futuro": "As profissões do futuro estarão ligadas à tecnologia, segurança digital, programação, inteligência artificial e análise de dados.",

  "machine learning": "Machine Learning é uma área da IA onde sistemas aprendem automaticamente através de dados e experiências.",

  "deep learning": "Deep Learning utiliza redes neurais artificiais inspiradas no cérebro humano para reconhecer padrões complexos.",

  "ética na ia": "A ética na IA envolve privacidade de dados, transparência dos algoritmos e uso responsável da tecnologia.",

  "ia na saúde": "Na saúde, a IA ajuda em diagnósticos, análise de exames e monitoramento de pacientes.",

  "ia nas empresas": "As empresas utilizam IA para automatizar processos, reduzir custos e melhorar produtividade.",

  "chatbot": "Chatbots são sistemas inteligentes capazes de conversar automaticamente com pessoas utilizando IA.",

  "mercado de trabalho": "O mercado de trabalho está sendo transformado pela tecnologia e exige profissionais mais adaptáveis e qualificados.",

  "tecnologia": "A tecnologia transformou a comunicação, educação, trabalho e praticamente todas as áreas da sociedade moderna."
};

const respostasExtras = [
  "Posso aprofundar mais esse assunto se quiser.",
  "Esse tema é muito importante atualmente.",
  "A IA vem transformando diversas áreas da sociedade.",
  "Esse assunto está ligado ao futuro da tecnologia.",
  "Posso explicar isso de forma mais simples também."
];

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function adicionarMensagem(texto, tipo) {
  const mensagem = document.createElement("div");

  mensagem.classList.add("message");
  mensagem.classList.add(tipo);

  mensagem.innerHTML = texto;

  chatBox.appendChild(mensagem);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function buscarResposta(pergunta) {
  const texto = pergunta.toLowerCase();

  for (let chave in respostas) {
    if (texto.includes(chave)) {
      const fraseExtra = respostasExtras[
        Math.floor(Math.random() * respostasExtras.length)
      ];

      return respostas[chave] + " " + fraseExtra;
    }
  }

  return "Ainda não tenho uma resposta exata para isso, mas posso falar sobre Inteligência Artificial, produtividade, emprego, automação, empresas, tecnologia e profissões do futuro.";
}

function enviarMensagem() {
  const pergunta = userInput.value.trim();

  if (pergunta === "") return;

  adicionarMensagem(pergunta, "user-message");

  const resposta = buscarResposta(pergunta);

  setTimeout(() => {
    adicionarMensagem(resposta, "bot-message");
  }, 500);

  userInput.value = "";
}

function usarPergunta(texto) {
  userInput.value = texto;
}

userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    enviarMensagem();
  }
});
