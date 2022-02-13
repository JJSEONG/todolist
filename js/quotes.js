const quotes = [
    {
        quote: "네가 무엇을 하던 간에, 좋은 사람이 되어라",
        author: "- Abraham Lincoln",
    },
    {
        quote: "네가 상상하는 모든 것이 현실이다",
        author: "- Pablo Picasso",
    },
    {
        quote: "늘 명심하라. 성공하겠다는 너 자신의 결심이 다른 어떤 것보다 중요하다는 것을",
        author: "- Lincoln",
    },
    {
        quote: "나보다 시작이 더 나은 선수들이 있겠지만, 나는 끝이 강한 선수다",
        author: "- Usain Bolt",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.",
        author: "- Friedrich Nietzsche",
    },
    {
        quote: "한 차례의 패배를 최후의 패배로 혼동하지 말라",
        author: "- F. Scott Fitzgerald",
    },
    {
        quote: "성공의 커다란 비결은 지치지 않고 자기 앞의 생을 살아가는 것이다.",
        author: "- Albert Schweitzer",
    },
    {
        quote: "젊었을 때 배움을 게을리 한 사람은 과거를 상실하며 미래도 없다.",
        author: "- Euripides",
    },
    {
        quote: "성공은 열심히 노력하며 기다리는 사람에게 찾아온다",
        author: "- Thomas Alva Edison",
    },
    {
        quote: "실패를 받아들일 수 없다면, 그 어떤 성공도 이룰 수 없다.",
        author: "- George Dewey Cukor",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;