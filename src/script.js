document.querySelectorAll('.accordion__title').forEach((elem) => {
   elem.addEventListener('click', () => {

      let content = elem.nextElementSibling;

      if (content.style.maxHeight) {
         document.querySelectorAll('.accordion__content').forEach((elem) => elem.style.maxHeight = null);
         //content.closest('.collapse__accordion').querySelector('.accordion__button-icon').style.transform = "rotate(0deg)";
      }
      else {
         document.querySelectorAll('.accordion__content').forEach((elem) => elem.style.maxHeight = null);
         content.closest('.collapse__accordion').querySelector('.accordion__button-icon').style.transform = "rotate(180deg)";
         content.style.maxHeight = content.scrollHeight + "px";
      };
   });
});