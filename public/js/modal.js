const cards = document.querySelectorAll(".childs-of-cards")


const video = document.querySelector("iframe")

for(let card of cards){
  card.addEventListener("click", function(){
    const imgId = card.getAttribute("id")
    return  window.location.href=`video_single?id=${imgId}`
  } )
};

