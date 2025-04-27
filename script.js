function toggleMode() {
  const html = document.documentElement
  /* if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }*/
  html.classList.toggle("light") //Maneira curta, menos código

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
   if(html.classList.contains("light")) {
     // se tiver light mode, adicionar a imagem light
     img.setAttribute('src', './assets/avatarcumuruvillage.png')
   }else {
     // se tiver sem light mode, manter a imagem normal
     img.setAttribute('src', './assets/avatarcumuruvillage.png')
   }
  const alt = document.querySelector("#profile alt") 
   if(html.classList.contains("light")) {
    alt.setAttribute('alt', 'Cumuru-Village2')
   }else {
    alt.setAttribute('alt', 'Cumuru-Village')
   }  
}