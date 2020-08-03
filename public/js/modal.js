const modal = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".childs-of-cards")

for(let card of cards){
  card.addEventListener("click", function(){
    const videoId = card.getAttribute("id")
    modal.classList.add("active");
    modal.querySelector("iframe").src=`https://www.youtube.com/embed/${videoId}`;
  } )
};
document.querySelector(".close").addEventListener("click", function(){
  modal.classList.remove("active");
  modal.querySelector("iframe").src="";
})



