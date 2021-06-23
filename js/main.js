((d)=>{
   const $btnMenu = d.querySelector(".menu-btn"),
         $menu = d.querySelector(".menu");

         $btnMenu.addEventListener("click", e=>{
             $btnMenu.firstElementChild.classList.toggle("none");
             $btnMenu.lastElementChild.classList.toggle("none");
             $menu.classList.toggle("is-active");
             
         })
         d.addEventListener("click", e=>{
            if(!e.target.matches(".menu a")) return false;
             $btnMenu.firstElementChild.classList.remove("none");
             $btnMenu.lastElementChild.classList.add("none");
             $menu.classList.remove("is-active");
              
         })
})(document);

((d)=>{
      
    d.addEventListener("click", e=>{
        // console.log(e.target)
        if(!e.target.matches(".carrusel label")) return false;
        // console.log(e.target.id)
        switch (e.target.id) {
            case "dot-1":
                d.querySelector(".carrusel .slide-1").classList.add("active");
                d.querySelector(".carrusel .slide-2").classList.remove("active");
                d.querySelector(".carrusel .slide-3").classList.remove("active");
                d.querySelector(".carrusel .slide-4").classList.remove("active");
            break;
            case "dot-2":
                 d.querySelector(".carrusel .slide-2").classList.add("active");
                 d.querySelector(".carrusel .slide-1").classList.remove("active");
                 d.querySelector(".carrusel .slide-3").classList.remove("active");
                 d.querySelector(".carrusel .slide-4").classList.remove("active");
            break;
            case "dot-3":
                 d.querySelector(".carrusel .slide-3").classList.add("active");
                 d.querySelector(".carrusel .slide-4").classList.remove("active");
                 d.querySelector(".carrusel .slide-1").classList.remove("active");
                 d.querySelector(".carrusel .slide-2").classList.remove("active");
            break;
            case "dot-4":
                d.querySelector(".carrusel .slide-4").classList.add("active");
                d.querySelector(".carrusel .slide-1").classList.remove("active");
                d.querySelector(".carrusel .slide-2").classList.remove("active");
                d.querySelector(".carrusel .slide-3").classList.remove("active");
            break;
                            
            default:
                d.querySelector(".carrusel .slide-1").classList.add("active");
            break;
        }
    })
      

})(document);