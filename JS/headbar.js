const Button = document.querySelectorAll(".Button");





Button.forEach((button, index) => {
  
  button.addEventListener("click", () => {
    const windowHeight = window.innerHeight
    if (index <= 3) {
    scrollButton = true // Pour éviter que le WallpaperSmooth s'active pendant le scroll
    window.scrollTo({
          
      top: windowHeight * (index+1),
      behavior: 'smooth' // Pour une transition fluide
      
      
    });
    setTimeout(function() {  
      scrollButton = false
      
    },1500)
  } else {
    scrollButton = true
    window.scrollTo({
          
      top:  windowHeight * (index - 4 + 1),
      behavior: 'smooth' // Pour une transition fluide
      
      
    });
    setTimeout(function() {  
      scrollButton = false
      
    },2000)
  }
  });
});
