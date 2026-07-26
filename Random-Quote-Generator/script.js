const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
  },
  {
    text: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey"
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  quoteText.innerText = '"' + randomQuote.text + '"';
  quoteAuthor.innerText = "- " + randomQuote.author;
}

newQuoteBtn.onclick = generateQuote;

generateQuote();
