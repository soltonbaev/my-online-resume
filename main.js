$('.portfolio-cards__item_hover1').click(function () {
   $('.portfolio').toggleClass('portfolio-bg1');
   $(this).toggleClass('item-to-vanish');
   $('.portfolio-cards').each(function () {
      $('.item-to-vanish').toggleClass('vanish');
   });
   $(this).toggleClass('item-to-vanish');
});
$('.portfolio-cards__item_hover2').click(function () {
   $('.portfolio').toggleClass('portfolio-bg2');
   $(this).toggleClass('item-to-vanish');
   $('.portfolio-cards').each(function () {
      $('.item-to-vanish').toggleClass('vanish');
   });
   $(this).toggleClass('item-to-vanish');
});
$('.portfolio-cards__item_hover3').click(function () {
   $('.portfolio').toggleClass('portfolio-bg3');
   $(this).toggleClass('item-to-vanish');
   $('.portfolio-cards').each(function () {
      $('.item-to-vanish').toggleClass('vanish');
   });
   $(this).toggleClass('item-to-vanish');
});
$('.portfolio-cards__item_hover4').click(function () {
   $('.portfolio').toggleClass('portfolio-bg4');
   $(this).toggleClass('item-to-vanish');
   $('.portfolio-cards').each(function () {
      $('.item-to-vanish').toggleClass('vanish');
   });
   $(this).toggleClass('item-to-vanish');
});
$('.portfolio-cards__item_hover5').click(function () {
   $('.portfolio').toggleClass('portfolio-bg5');
   $(this).toggleClass('item-to-vanish');
   $('.portfolio-cards').each(function () {
      $('.item-to-vanish').toggleClass('vanish');
   });
   $(this).toggleClass('item-to-vanish');
});
$('.portfolio-cards__item_hover6').click(function () {
   $('.portfolio').toggleClass('portfolio-bg6');
   $(this).toggleClass('item-to-vanish');
   $('.portfolio-cards').each(function () {
      $('.item-to-vanish').toggleClass('vanish');
   });
   $(this).toggleClass('item-to-vanish');
});

$('.portfolio-cards__item_hover1').click(function () {
   $('.portfolio-cards__item_hover1').toggleClass(
      'portfolio-cards__item_expand'
   );
});

// const contentContainer = document.querySelector(".content__container");
// const contentSection = document.querySelector(".content__section");

// const observeSection = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("fadeIn");
//         alert("Section entered");
//       } else {
//         entry.target.classList.remove("fadeIn");
//         alert("Section left");
//       }
//     });
//   },
//   {
//     root: contentContainer,
//     threshold: 0,
//   }
// );
// observeSection.observe(contentSection);

// const container = document.querySelector(".content");
// const wrappers = document.querySelectorAll(".content__container");
// const imgs = document.querySelectorAll(".content__section");
// const animClasses = [
//   "animateSection",
//   "animateSection",
//   "animateSection",
//   "animateSection",
//   "animateSection",
// ];
// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       const currentIndex = Array.from(wrappers).indexOf(entry.target);
//       if (entry.isIntersecting) {
//         imgs[currentIndex].classList.add(animClasses[currentIndex]);
//       } else {
//         if (entry.boundingClientRect.y > 0) {
//           imgs[currentIndex].classList.remove(animClasses[currentIndex]);
//         }
//       }
//     });
//   },
//   {
//     root: container,
//     threshold: 0.5,
//   }
// );

// wrappers.forEach((wrapper) => {
//   observer.observe(wrapper);
// });

let observerOptions = {
   rootMargin: '0px',
   threshold: 0.5,
};

var observer = new IntersectionObserver(observerCallback, observerOptions);

function observerCallback(entries, observer) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('animateSection');
      } else {
         entry.target.classList.remove('animateSection');
      }
   });
}

let target = '.section-container';
document.querySelectorAll(target).forEach(i => {
   if (i) {
      observer.observe(i);
   }
});

// $(".ellipsis").append("...");

function shorten_text_to_parent_size(text_elem) {
   textContainerHeight = text_elem.parent().height();

   while (text_elem.outerHeight(true) > textContainerHeight) {
      text_elem.html(function (index, text) {
         return text.replace(/(?!(<[^>]*>))\W*\s(\S)*$/, '...');
      });
   }
}

$('.portfolio-cards__desc').each(function () {
   shorten_text_to_parent_size($(this));
});

/*===================== LANGUAGE SWITCHER ===========================*/

// console.log('langAttr', langAttr);
let langSwitcher = document.getElementsByClassName('lang-switcher')[0];

langSwitcher.addEventListener('click', () => {
   console.group('Starting langSwitcher group');
   // let langAttr = document.documentElement.lang;
   if (document.documentElement.lang === 'ru') {
      document.documentElement.setAttribute('lang', 'eng');
      console.log(document.documentElement.lang);
      // langSwitcher.innerHTML = '<span>Eng</span>';
      let engCol = document.querySelectorAll('.lang-switcher__en');
      engCol.forEach(section => {
         section.classList.remove('lang-switcher__hide');
      });
      let ruCol = document.querySelectorAll('.lang-switcher__ru');
      ruCol.forEach(section => {
         section.classList.add('lang-switcher__hide');
      });
   } else {
      // langSwitcher.innerHTML = '<span>Ru</span>';
      document.documentElement.setAttribute('lang', 'ru');
      console.log(document.documentElement.lang);
      let engCol = document.querySelectorAll('.lang-switcher__en');
      engCol.forEach(section => {
         section.classList.add('lang-switcher__hide');
      });
      let ruCol = document.querySelectorAll('.lang-switcher__ru');
      ruCol.forEach(section => {
         section.classList.remove('lang-switcher__hide');
      });
   }
   console.groupEnd();
});
