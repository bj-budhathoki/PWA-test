const API_KEY='5b499da98abd4def912c7b015cd96050';
const main=document.querySelector('main');
const sourceSelector=document.querySelector('.selector');
const defaultSource='bbc-news';
window.addEventListener('load', async (e)=>{
    updateNews();
    await updateSources();
    sourceSelector.value=defaultSource;
    sourceSelector.addEventListener('change',(e)=>{
        updateNews(e.target.value);
    })
    if('serviceWorker' in navigator){
        try {
            navigator.serviceWorker.register('sw.js');
            console.log('service worker register');
        } catch (error) {
            console.log(error);
        }
    }
});
async function updateSources(){
    const res=await fetch(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`);
    const json= await res.json();
    console.log(json);
    sourceSelector.innerHTML=json.sources.map(src=>`<option value="${src.id}">${src.name}</option>`).join('\n');
}
async function updateNews(source=defaultSource) {
    const res=await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`);
    const json= await res.json();
    console.log(json);
    main.innerHTML=json.articles.map(createArticle).join('\n');
}
function createArticle(article){
    return`
    <div class="article">
        <a href="${article.url}">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}"/>
            <p>${article.description}</p>
        </a>
    </div>
    `
}
