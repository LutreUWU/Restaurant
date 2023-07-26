allMenu = document.querySelectorAll(".MenuDiv")
allTitle = document.querySelectorAll(".TitleDiv")

allTitle.forEach(Title => {


    Title.addEventListener('mouseover', enlargeTitle);
    Title.addEventListener('mouseout', resetTitle);

   
    });


    function enlargeTitle() {
      allTitle.forEach(function(Title) {
        Title.style.animation = 'none';
        Title.style.transform = 'scale(1.05)'
        Title.style.cursor = 'pointer' 
      
      });
    }

    function resetTitle() {
      allTitle.forEach(function(Title) {
        Title.style.animation = 'scale 2s infinite alternate-reverse';
        Title.style.transform = 'scale(1)'
        Title.style.cursor = '' 
      });
    }

allMenu.forEach(Menu => {


  Menu.addEventListener('mouseover', enlargeMenu);
  Menu.addEventListener('mouseout', resetMenu);
 
 });

 function enlargeMenu() {
  allMenu.forEach(function(Menu) {
     Menu.style.animation = 'none';
     Menu.style.transform = 'scale(1.05)'
     Menu.style.cursor = 'pointer' 
   
  });
}

function resetMenu() {
  allMenu.forEach(function(Menu) {
    Menu.style.animation = 'scale 2s infinite alternate-reverse';

    Menu.style.transform = 'scale(1)'
    Menu.style.cursor = '' 
  });
}


