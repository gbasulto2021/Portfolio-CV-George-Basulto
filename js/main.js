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

    const $menuLinks = d.querySelectorAll(".menu a"),
          $heroTitle = d.querySelector(".hero-image-title"),
          $btnContact = d.querySelector(".btn-contact"),
          $btnCV = d.querySelector(".btn-cv"),
          $aboutExperience = d.querySelector(".about p"),
          $skillTitle = d.querySelector(".skills h2"),
          $skills = d.querySelectorAll(".skills .progress .skill"),
          $servicesTitle = d.querySelector(".services h2"),
          $servicesName = d.querySelectorAll(".services .service-card h3"),
          $servicesDescription = d.querySelectorAll(".services .service-card p"),
          $works = d.querySelector(".portfolio h2"),
          $worksTitle = d.querySelectorAll(".portfolio .portfolio-card h3"),
          $worksDescription = d.querySelectorAll(".portfolio .portfolio-card p"),
          $portfolioTitle = d.querySelectorAll(".portfolio-info h3"),
          $portfolioDescription = d.querySelectorAll(".portfolio-info p"),
          $testimonials = d.querySelectorAll(".slide blockquote"),
          $contactFormResponse = d.querySelector(".contact-form-response h3"),
          $inputsNameEmail = d.querySelectorAll(".contents input[required]"),
          $textArea = d.querySelector(".contact-form textarea"),
          $btnSendMessage = d.querySelector(".contact-form input[type='submit']"),
          $contentTitle = d.querySelector(".contact .section-title");
          
        



    const languaje = {
        en:{
            menuHome: "Home",
            menuAbout: "About",
            menuServices: "Services",
            menuPorfolio: "Portfolio",
            menuTestimonials: "Testimonial",
            menuContact: "Contact",
            heroTitle: "Welcome!",
            heroContact: "CONTACT ME",
            aboutBtn:"Download my CV",
            aboutExperience:"Since 2004 I have experience in the area of web development, network administration and SQL databases for tourism companies and educational institutions. Also collaborated on small projects as a full stack freelance although I am more oriented to the front-end area. I enjoy making the layout and interactivity of web interfaces",
            skillText:"Skills",
            skillFront: "Front-end Development",
            skillDesign:"Web Design",
            skillBackend:"Back-end Web Development",
            servicesTitle:"Services",
            webDev:"Web Development",
            webDesign:"Web Design",
            webHost:"Web Hosting",
            devDescription:"I develop sites and applications for your web platforms I help you build your project from start to finish front-end back-end and databases",
            designDescription:"I prototype and mock up your static designs and turn them into amazing responsive, optimal and accessible web sites and applications",
            hostDescription:"You do not have a domain and web hosting for your project?.Don't worry about those technical things. I'll take care of them",
            works:"My works",
            workCreditScoring:"Credit Score GTM",
            workWilfredo:"Portfolio of Dr.C Wilfredo Campos from the University of Guantánamo",
            workUniversityGtm:"Agriculture Campus University of Guantanamo",
            workECommerce:"GB Store",
            workSpa:"SPA App with Vanilla JS",
            workGeorgeB:"Portfolio Ing. George Basulto",
            creditScoreDescrp:"Credit scoring model to improve the granting of microcredits",
            wilfredoDescrp:"Web site with information about Dr Wilfredo Campos, his works and skills.",
            universityGtmDescrp:"Website with informaction of the Faculty of Agriculture of the University of Guantánamo",
            ecommerceDescrp:"Electronic commerce for medical equipment sales",
            spaDescrp:"SPA aplication using JS vanilla, fetching data from WordPress API",
            georgeBDescrp:"Portfolio Ing. George L Basulto Reyes, whit his works and skills.",
            testimonialWilfredo:"The design totally fits what I was looking for. An attractive and clean image in a functional, comfortable and intuitive design. All with personalized attention thanks to which they have been able to make my work known.",
            testimonialSilvio:"My experience was totally satisfactory. At all times he cares about identifying my needs and adapting to them and my deadlines as much as possible.",
            thanks:`!Thanks
            <br>
            For your comments`,
            contentTitle:"CONTACT",
            contentsName:"Type your Name",
            contentsEmail:"Type your Email",
            contentsComments:"Comments",
            contentBtn:"SEND MESSAGE"
        },
        es:{
            menuHome: "Inicio",
            menuAbout: "Acerca",
            menuServices: "Servicios",
            menuPorfolio: "Portafolio",
            menuTestimonials: "Testimonio",
            menuContact: "Contacto",
            heroTitle:"Bienvenidos!",
            heroContact:"CONTÁCTAME",
            aboutBtn:"Descarga mi CV",
            aboutExperience:" Desde 2004 tengo experiencia en el área del desarrollo web, administracion de redes y bases de datos SQL para compañias de turismo e instituciones educacionales. He colaborado en pequeños proyectos como full stack aunque estoy mas orientado al area de Font-end. Disfruto llevar a cabo la maquetación e interactividad de interfaces web.",
            skillText:"Habilidades",
            skillFront: "Desarrollo Web Front-end",
            skillDesign:"Diseño Web",
            skillBackend:"Desarrollo Web Back-end",
            servicesTitle:"Servicios",
            webDev:"Desarrollo Web",
            webDesign:"Diseño Web",
            webHost:"Alojamiento Web",
            devDescription:"Desarrollo sitios y aplicaciones para plataformas Web. Te ayudo a construir tu proyecto de principio a fin: Frontend, Backend y Base de Datos.",
            designDescription:"Prototipo y maqueto tus diseños estáticos y los convierto en increíbles sitios y aplicaciones web responsivas, óptimas y accesibles. ",
            hostDescription:"¿No cuentas con dominio y hospedaje web para tu proyecto? No te preocupes de esas cosas técnicas me encargo yo.",
            works:"Mis trabajos",
            workCreditScoring:"Credit Score GTM",
            workWilfredo:"Portafolio Wilfredo Campos",
            workUniversityGtm:"Facultada de Agricultura de la Universidad de Guantanamo",
            workECommerce:"Ecommerce GBStore",
            workSpa:"Aplicacion SPA con vanilla JS",
            workGeorgeB:"Portafolio Ing. George Basulto",
            creditScoreDescrp:"Modelo de credito para perfeccionar la concesion de microcreditos",
            wilfredoDescrp:"Portafolio del Doctor Wilfredo Campos de la Universidad e Guantanamo con informacion acerca de su trabajo y habilidades",
            universityGtmDescrp:"Sitio Web con informacion de la facultad de agricultura de la Universidad de Gtmo",
            ecommerceDescrp:"Comercio Electronico para la venta de equipamiento medico",
            spaDescrp:"Aplicacion SPA usando solo Java Script y consumiendo la API de WordPress",
            georgeBDescrp:"Portafolio del Ing. George L Basulto Reyes, en donde se pueden observar sus trabajos mas recientes asi como sus habilidades.",
            testimonialWilfredo:"El diseño se ajusta totalmente a lo que buscaba. Una imagen atractiva y limpia en un diseño funcional, cómodo e intuitivo. Todo con una atención personalizada gracias a la cual se han podido dar a conocer mi trabajo.",
            testimonialSilvio:"Mi experiencia fue totalmente satisfactoria.En todo momento se preocupo por identificar mis necesidades y adaptarse a ellas y a mis plazos lo máximo posible.",
            thanks:`!Gracias
            <br>
            Por sus comentarios`,
            contentTitle:"CONTACTO",
            contentsName:"Ingrese su nombre",
            contentsEmail:"Ingrese su email",
            contentsComments:"Escriba sus comentarios",
            contentBtn:"ENVIAR MENSAJE"
        }
    }

    const changeLanguaje = (lang)=>{
          for (let menuLinks of $menuLinks) {
           menuLinks.textContent = lang[menuLinks.dataset.menu];
                     
          }
          $heroTitle.textContent = lang.heroTitle;
          $btnContact.textContent = lang.heroContact;
          $btnCV.textContent = lang.aboutBtn;
          $aboutExperience.textContent =lang.aboutExperience;
          $skillTitle.textContent = lang.skillText;
          $servicesTitle.textContent =lang.servicesTitle;
          $works.textContent = lang.works;
          $contactFormResponse.innerHTML = lang.thanks;
          $contentTitle.textContent = lang.contentTitle;
          $textArea.setAttribute("placeholder",`${lang.contentsComments}`);
          $btnSendMessage.value = lang.contentBtn;

          for (let skill of $skills) {
            skill.textContent = lang[skill.dataset.skill]
          } 
          for (let serviceName of $servicesName) {
            serviceName.textContent = lang[serviceName.dataset.service]
          } 
          for (let serviceDescription of $servicesDescription) {
            serviceDescription.textContent = lang[serviceDescription.dataset.description]
          } 
          for (let workTitle of $worksTitle) {
            workTitle.textContent = lang[workTitle.dataset.work]
          } 
          for (let workDescription of $worksDescription) {
            workDescription.textContent = lang[workDescription.dataset.description]
          } 
          for (let portfolioTitle of $portfolioTitle) {
            portfolioTitle.textContent = lang[portfolioTitle.dataset.title]
          } 
          for (let portfolioDescription of $portfolioDescription) {
            portfolioDescription.textContent = lang[portfolioDescription.dataset.description]
          } 
          for (let testimonial of $testimonials){
            testimonial.textContent = lang[testimonial.dataset.testimonial]
          }

          for (let input of $inputsNameEmail){
            input.setAttribute("placeholder", `${lang[input.dataset.name]}`)
          }




    }
            
         d.addEventListener("click", e=>{
             const {es, en} = languaje;
             if(e.target.matches(".languaje__en")) {
                  changeLanguaje(en)
           
             }
             if(e.target.matches(".languaje__es")){
                changeLanguaje(es)
           
             }
              
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
