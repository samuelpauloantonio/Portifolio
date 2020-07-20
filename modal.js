const modal = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".childs-of-cards")

for(let card of cards){
  card.addEventListener("click", function(){
    modal.classList.add("active");
    modal.querySelector("iframe").src="/Aulas/Portifolio/videos/cleancode.mp4";
  } )
};
document.querySelector(".close").addEventListener("click", function(){
  modal.classList.remove("active");
  modal.querySelector("iframe").src="";
})



