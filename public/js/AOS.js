  //MAIN AOS 
  AOS.init({
    mirror: true,
    once: true,
    offset: 120,
    duration: 400,
    easing: 'ease',
    //disable all AOS for mobile screens
 /*    disable: function() {
        return window.innerWidth < 1024;
    } */
  });


  //REMOVE ABOUT TEXT AOS
  function removeAOS () {
    const aboutText = document.getElementById('aboutText');

    if(window.innerWidth < 1024) {
      aboutText.setAttribute('data-aos','');
    }
    else{
      aboutText.setAttribute('data-aos','fade-left');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    removeAOS()
  })