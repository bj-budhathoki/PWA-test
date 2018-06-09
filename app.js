window.addEventListener('load',(e)=>{
    updateNews();
});
async function updateNews() {
    const res=await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5b499da98abd4def912c7b015cd96050')
}
// const API_KEY=5b499da98abd4def912c7b015cd96050