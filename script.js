 //adding button basedon display theme.
 window.addEventListener('DOMContentLoaded', () => {
    let savedTheme = localStorage.getItem('theme');
    const themeButton = document.querySelector('#toggleButton');

// If no theme saved, default to light
    if (!savedTheme) {
    savedTheme = 'light';
    localStorage.setItem('theme', savedTheme);
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
     }
    
    if (savedTheme === 'dark') {
      themeButton.textContent = '🌙';
    } else if (savedTheme === 'light') {
      themeButton.textContent = '☀️';
    }
  });

  //adds the display theme to localstorage and updates site responsively
     const toggleDarkMode = ()=> {
    const displayModeButton = document.querySelector('#toggleButton');
    
    displayModeButton.addEventListener("click",()=>{
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
        localStorage.setItem('theme','light');
        displayModeButton.textContent = '☀️';
        document.documentElement.setAttribute('data-bs-theme','light');
    }else{
         localStorage.setItem('theme','dark');
        displayModeButton.textContent = '🌙';
        document.documentElement.setAttribute('data-bs-theme','dark');
    }
});
}
toggleDarkMode();

