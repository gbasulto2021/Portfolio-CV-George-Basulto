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

((d)=>{
    $inputs =d.querySelectorAll(".contact-form [required]");

    $inputs.forEach((input)=>{
          const $span = d.createElement("SPAN");
          $span.id = input.name;
          $span.textContent = input.title;
          $span.classList.add("contact-form-error", "none");
          input.insertAdjacentElement("afterend", $span);
          
          
    });
    d.addEventListener("keyup", (e)=>{
          
        if(e.target.matches(".contact-form [required]")){
          let $input = e.target,
              patron = $input.pattern || $input.dataset.pattern;
              // console.log(patron);
              
              if(patron && $input.value !== ""){
                  // console.log("Tiene patron");
                  let regex = new RegExp(patron);
                  return !regex.exec($input.value)
                  ? d.getElementById($input.name).classList.add("is-active")
                  : d.getElementById($input.name).classList.remove("is-active");

              }
              if(!patron){
                  return $input.value ===""
                  ? d.getElementById($input.name).classList.add("is-active")
                  : d.getElementById($input.name).classList.remove("is-active");
              //    console.log("No tiene patron");
              }

        }
   });

   d.addEventListener("submit", (e)=> {
       e.preventDefault();
       const $loader = d.querySelector(".contact-form-loader"),
             $response = d.querySelector(".contact-form-response"),
             $form = d.querySelector(".contact-form");
        
        $loader.classList.remove("none");

       fetch("https://formsubmit.co/ajax/gbasulto2015@gmail.com", {
           method: "POST",
           body: new FormData(e.target)
       } )
       .then(res => res.ok? res.json(): Promise.reject(res))
       .then((json)=>{
           console.log(json);
           location.hash = "#gracias";
           $form.reset();
        })
        .catch((err)=>{
            console.log(err);
            location.hash = "#gracias";
            let message = err.statusText || "Ocurrio un error al enviar el formulario";
            $response.querySelector("h3").innerHTML = `<p>Error ${err.status} : ${message}</p>`;
            
        })
        .finally(()=>{

            $loader.classList.add("none");
            setTimeout(() => {
              location.hash = "#contacto";

           }, 3000);
       });
       
      });
})(document);
