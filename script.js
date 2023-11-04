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
     img.setAttribute('src', './assets/caofeliz1.png')
   }else {
     // se tiver sem light mode, manter a imagem normal
     img.setAttribute('src', './assets/avatar1.png')
   }
  const alt = document.querySelector("#profile alt") 
   if(html.classList.contains("light")) {
    alt.setAttribute('alt', 'Cao Feliz')
   }else {
    alt.setAttribute('alt', 'Rafael, óculos, praia')
   }  
}