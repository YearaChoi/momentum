const quotes = [
  {
    quote: "yet I will rejoice in the Lord, I will be joyful in God my Savior.",
    author: "Habakkuk 3:18",
  },
  {
    quote: "LORD, our Lord, how majestic is your name in all the earth!",
    author: "Psalms 8:9",
  },
  {
    quote:
      "Cast your cares on the Lord and he will sustain you,he will never let the righteous be shaken.",
    author: "Psalms 55:22",
  },
  {
    quote:
      "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
    author: "Matthew 6:33",
  },
  {
    quote:
      "Carry each other’s burdens, and in this way you will fulfill the law of Christ.",
    author: "Galatians 6:2",
  },
  {
    quote: "Hear, O Israel: The Lord our God is one Lord:",
    author: "Deuteronomy 6:4",
  },
  {
    quote: "Truly my soul finds rest in God, my salvation comes from him.",
    author: "Psalm 62:1",
  },
  {
    quote:
      "My beloved spoke and said to me, Arise, my darling,my beautiful one, come with me.",
    author: "Song of Songs 2:10",
  },
  {
    quote: "Blessed are the peacemakers, for they will be called sons of God.",
    author: "Matthew 5:9",
  },
  {
    quote:
      "Rejoice always, pray continually, give thanks in all circumstances, for this is God’s will for you in Christ Jesus.",
    author: "1 Thessalonians 5:16-18",
  },
];

//id가 quote인 element의 첫번째 span을 가져옴
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 0~1사이의 랜덤 숫자들 * array의 길이만큼 숫자를 곱함, floor로 float형식에서 Int형식으로 바꿈
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
