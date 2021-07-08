// show Nav-Menu for smaller screen
  function navMenu() {
    document.getElementById("navMenu").classList.toggle("header-nav-open");
  }


// Hamburger menu toogle
  const menu = document.querySelector('.hamburger')

  menu.addEventListener('click', () => {
      menu.classList.toggle('open');
  })


// Dropdown fxn
  function product() {
      document.getElementById("productBtn").classList.toggle("show");
    }
  function company() {
      document.getElementById("companyBtn").classList.toggle("show");
    }
  function connect() {
      document.getElementById("connectBtn").classList.toggle("show");
    }


  // dropdown arrow animation
  function rotateAngle1() {
    document.getElementById("icon1").classList.toggle("angle-up");
  }
  function rotateAngle2() {
    document.getElementById("icon2").classList.toggle("angle-up");
  }
  function rotateAngle3() {
    document.getElementById("icon3").classList.toggle("angle-up");
  }