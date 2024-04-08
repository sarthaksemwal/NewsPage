
function CallAPI(){
fetch('https://newsapi.org/v2/everything?q=apple&from=2024-04-07&to=2024-04-07&sortBy=popularity&apiKey=7b693578a4924803b6dd37fb45bec7a6')
.then((res)=>res.json())
.then((data)=> renderUI(data))

}





function renderUI(data){
    const root=document.getElementById("root");
    const articles=data.articles;
    for(let i=0;i<articles.length;i++){
    const ar=articles[i];
    const div=document.createElement("div");

    div.setAttribute("class","news-card")

    const h3=document.createElement("h3")
    h3.innerText=ar.title

    const img=document.createElement("img")
    img.src=ar.urlToImage

    const p=document.createElement("p")
    p.innerText=ar.description

    
    const a = document.createElement("a");
    a.setAttribute("class","btn")
    a.href = ar.url;
    a.innerText = "Read More";
    a.className = "button";
    
   div.appendChild(img)
   div.appendChild(h3)
   div.appendChild(a);
   root.appendChild(div)

    }
    
 
}
CallAPI()

