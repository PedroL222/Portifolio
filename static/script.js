// Abrir e fechar menu lateral em celulares

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.contains('bi-list')
    ? menuMobile.classList.replace("bi-list","bi-x")
    : menuMobile.classList.replace("bi-x","bi-list")
    body.classList.toggle("menu-nav-active")
});

// Fechar menu ao selecionar navegação

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item =>{
    item.addEventListener("click", () => {
        if(body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

// Animar tudo que tiver data-animação

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})

// Ativar carregamento de mensagem o botão de envio

const btnEnviar = document.querySelector("#btn-enviar");
const btnEnviarLoader = document.querySelector("#btn-enviar-loader");

btnEnviar.addEventListener('click',()=>{
  btnEnviarLoader.computedStyleMap.display = "block";
  btnEnviar.computedStyleMap.display = "none";
})

// Filtrar carrosel do Portifólio

const filtros = document.querySelectorAll(".port-filtro");

const portWeb = document.querySelector(".portWeb");
const portMobile = document.querySelector(".portMobile");
const portOutros = document.querySelector(".portOutros");


filtros.forEach((fil)=>{
  fil.addEventListener("click",()=>{
    if(fil.classList.contains('filtro-selecionado')){

    }else{
      filtros.forEach((fil2)=>{
        fil2.classList.remove("filtro-selecionado");
      });
      fil.classList.add("filtro-selecionado");
    }

    if(fil.innerHTML == "Web"){
      if(portWeb.classList.contains("displayBlock") == false){
        portOutros.classList.remove("displayBlock");
        portMobile.classList.remove("displayBlock");
        portWeb.classList.add("displayBlock");
      }
    }else if(fil.innerHTML == "Mobile"){
      if(portMobile.classList.contains("displayBlock") == false){
        portOutros.classList.remove("displayBlock");
        portMobile.classList.add("displayBlock");
        portWeb.classList.remove("displayBlock");
      }
    }else if (fil.innerHTML == "Outros"){
      if(portOutros.classList.contains("displayBlock") == false){
        portOutros.classList.add("displayBlock");
        portMobile.classList.remove("displayBlock");
        portWeb.classList.remove("displayBlock");
      }
    }

  })
})

// Dark mode

const darkMode = document.querySelector('#dark-mode-container');
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const infosIniciais = document.querySelector("#infos-iniciais");
const curriculo = document.querySelector("#curriculo");

darkMode.addEventListener("click", ()=>{

  

  if (darkMode.firstChild.classList.contains("bi-brightness-high")){
    darkMode.firstChild.classList.remove("bi");
    darkMode.firstChild.classList.replace("bi-brightness-high","bi-moon");
  }else{
    darkMode.firstChild.classList.replace("bi-moon","bi-brightness-high");
    darkMode.firstChild.classList.remove("bi");
  }

  body.classList.toggle("bg-dark");
  const secoes = document.querySelectorAll(".section-bg");
  secoes.forEach((sc)=>{
    sc.classList.toggle("bg-dark");
    sc.classList.toggle("section-bg-dark");
  });
  header.classList.toggle("menu-bg-dark");
  footer.classList.toggle("menu-bg-dark");
  infosIniciais.classList.toggle("infos-iniciais-dark");
  curriculo.classList.toggle("curriculo-dark");
})