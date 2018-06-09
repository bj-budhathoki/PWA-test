const API_KEY='5b499da98abd4def912c7b015cd96050';
const main=document.querySelector('main');
const selector=document.querySelector('.selector');
console.log(selector);
window.addEventListener('load',(e)=>{
    updateNews();
    updateSources();
});
async function updateSources(){
    const res=await fetch(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`);
    const json= await res.json();
    console.log(json);
    selector.innerHTML=json.sources.map(src=>`<option value="${src.id}">${src.name}</option>`).join('\n');
}
async function updateNews() {
    const res=await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`);
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
