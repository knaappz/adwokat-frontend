// ZEGAR

document.addEventListener("DOMContentLoaded", () => {
    const dateTimeContainer = document.getElementById("date-time");

    const getMonthName = (monthIndex) => {
        const months = [
            "1", "2", "3", "4", "5", "6",
            "7", "8", "9", "10", "11", "12"
        ];
        return months[monthIndex];
    };

    const now = new Date();
    const day = now.getDate();
    const month = getMonthName(now.getMonth());
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");

    dateTimeContainer.textContent = `${day}.${month}.${year} ${hours}:${minutes}`;
});

// SHOW MORE?

document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("show-more");
  
    link.addEventListener("click", (event) => {
      const userConfirmed = confirm("Czy na pewno chcesz przejść do oryginalnego artykułu?");
      if (!userConfirmed) {
        event.preventDefault();
      }
    });
  });
  
// HASŁO DO tajny przepis

document.addEventListener("DOMContentLoaded", () => {
    const recipeButton = document.getElementById("btn-recept");
  
    recipeButton.addEventListener("click", () => {
      const correctPassword = "tajne"; 
      const userPassword = prompt("Podaj hasło, aby przejść do przepisu:");
  
      if (userPassword === correctPassword) {
        const recipePath = `${correctPassword}/index.html`;
        location.href = recipePath; 
      } else {
        alert("Niepoprawne hasło. Dostęp do przepisu został zablokowany.");
      }
    });
  });

// PRZENIESIENIE UŻYTKOWNIKA PO 10s NA /ADWOKAT.HTML
  
  window.onload = function() {
    if (window.location.pathname === '/tajne/index.html') {
      var timeSpent = 0;
      var timeDisplay = document.getElementById("time-spent");

      var timer = setInterval(function() {
        timeSpent++;
        timeDisplay.textContent = timeSpent; 
        
        if (timeSpent >= 10) {
          clearInterval(timer); 
          window.location.href = '/adwokat.html'; 
        }
      }, 1000); 
    }
  };

// ZMIANA FILTRU OBRAZKA 

  function changeFilter(filterType) {
    const image = document.getElementById('adwokatImage');
    
    switch (filterType) {
      case 'normal':
        image.style.filter = 'none';
        break;
      case 'sepia':
        image.style.filter = 'sepia(100%)';
        break;
      case 'grayscale':
        image.style.filter = 'grayscale(100%)';
        break;
      case 'invert':
        image.style.filter = 'invert(100%)';
        break;
      default:
        image.style.filter = 'none';
    }
  }
  
document.getElementById('frame-checkbox').addEventListener('change', function() {
  var imageElement = document.getElementById('image-wrapper');
  if(this.checked) {
    imageElement.classList.add('bordered');
  } else {
    imageElement.classList.remove('bordered');
  }
});