// Q&A Data (Hardcoded)
const qaPairs = [
    // Greetings
{ q: "hi", a: "Hi there! 😊 How can I assist you today?" },
{ q: "hello", a: "Hello! 👋 I'm Tessa, your portfolio assistant. What would you like to know?" },
{ q: "heyyy", a: "Heyyy! 😊 Need help with something specific?" },
{ q: "hey", a: "Hey! 🙌 Feel free to ask about my projects, skills, or anything else." },
{ q: "hii", a: "Hii! 😊 I'm here to guide you through my portfolio." },

  { q: "your name", a: "I'm Urshitha Sai T T K." },
  { q: "where are you from", a: "I'm based in Mumbai, India." },
  { q: "contact", a: "You can reach me at urshithasaittk@gmail.com or call 9892520825 📧." },
  { q: "email", a: "Email me at urshithasaittk@gmail.com 📩." },
  { q: "call", a: "You can call me at 9892520825 ☎️." },
  { q: "linkedin", a: "You can find me on LinkedIn, just search my name! 🧑‍💼" },

  // Education
  { q: "where are you studying", a: "I'm pursuing BTech in Computer Science at Pillai College of Engineering." },
  { q: "cgpa", a: "My current CGPA is 8.7 📚." },
  { q: "10th", a: "I scored 91% in 10th grade at Atomic Energy Central School." },
  { q: "12th", a: "I scored 91% in 12th grade at Atomic Energy Central School." },

  // Internships
  { q: "npcil", a: "At NPCIL, I built an offline HR chatbot using LLaMA 3.2-1B fine-tuned on 100+ HR documents." },
  { q: "barc", a: "At BARC, I developed a cancer contouring frontend web app for doctors." },
  { q: "internship portal", a: "I built an internship management portal with PHP and MySQL with RBAC." },

  // Projects
  { q: "voxify", a: "Voxify is a real-time speech-to-speech translator for Indian languages built using IndicTrans2." },
  { q: "hr chatbot", a: "An offline chatbot that answers HR queries using LLaMA 3.2-1B without internet dependency." },
  { q: "contouring website", a: "A frontend medical tool to help oncologists view radiation contours." },
  { q: "spa website", a: "A clean responsive website built for a spa & salon using HTML, CSS, and JS." },

  // Skills
  { q: "skills", a: "Web Dev, UI/UX, Python, MySQL, C, Java, AI/ML, Communication 💡" },
  { q: "frontend", a: "Yes, I love frontend design and clean UI/UX using Figma, HTML, CSS, JS ✨" },
  { q: "backend", a: "Yes, I've worked with PHP and MySQL for scalable web applications 🔧" },
  { q: "python", a: "Yes, I’ve used Python extensively in AI/ML and scripting 🐍" },
  { q: "java", a: "I’ve completed a Java for Beginners course on Udemy ☕" },

  // Certifications
  { q: "certifications", a: "I’m certified in Python Data Structures, Programming for Everyone (UoM), and Java (Udemy)." },
  { q: "python data structures", a: "Learned lists, tuples, dictionaries and applied them in projects 🐍" },
  { q: "programming for everybody", a: "Covered Python syntax, loops, functions, and error handling." },
  { q: "java cert", a: "Learned Java fundamentals including OOP and exception handling ☕" },

  // Publications
  { q: "publications", a: "I published a research project titled Voxify: Gateway to Multilingual Conversations 📘" },

  // Extras
  { q: "resume", a: "Check the Resume section to preview or download it 📄." },
  { q: "projects", a: "View my projects in the Projects section 📂." },
  { q: "experience", a: "You can find my internships and freelance experience in the Experience section 💼." },
  { q: "certificates", a: "All my certificates are listed in the Certifications section 📜." },
  { q: "portfolio", a: "You're already here 😊 Scroll around to explore more!" },
  { q: "hackathon", a: "Yes, I participated in Smart India Hackathon 🧠" },
  { q: "organization", a: "I'm a member of IEEE at my college 🔬" },
];

// Match logic
function getChatResponse(userText) {
  const lower = userText.toLowerCase();
  const found = qaPairs.find(({ q }) => lower.includes(q));
  return found ? found.a : "🤔 I'm still learning. Try asking about my projects, skills, or resume!";
}

// Toggle chatbot visibility
function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

// Send user message
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbotBody = document.getElementById("chatbotBody");
  const userText = input.value.trim();
  if (!userText) return;

  // Show user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = userText;
  chatbotBody.appendChild(userMsg);

  // Placeholder bot typing
  const botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.textContent = "Typing...";
  chatbotBody.appendChild(botMsg);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;

  // Answer after short delay
  setTimeout(() => {
    botMsg.textContent = getChatResponse(userText);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }, 600);

  input.value = "";
}

// Enable Enter key to send
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});
