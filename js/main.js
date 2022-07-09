const openModal = document.querySelector(".hero__cta, .hero__cta2");
const modal = document.querySelector(".modal, .modal2")
const closeModal = document.querySelector(".modal__close")

openModal.addEventListener("click", (e)=>{
    
e.preventDefault();
    modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e)=>{
    e.preventDefault();
        modal.classList.remove("modal--show");
    })