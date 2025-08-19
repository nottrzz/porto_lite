    const card = document.getElementById("parallaxCard");

    window.addEventListener("scroll", () => {
    const hero = document.querySelector(".welcome");
    const profile = document.querySelector(".profile-pages");

    const heroRect = hero.getBoundingClientRect();
    const profileRect = profile.getBoundingClientRect();

    if (heroRect.bottom > 0 && profileRect.top > 0) {
    const totalHeight = window.innerHeight;
    const progress = 1 - heroRect.bottom / totalHeight;
      const moveY = Math.min(progress * 40,40);
    card.style.transform = `translate(0px, ${moveY}px)`;
    }

    else if (profileRect.top <= 0) {
      card.style.transform = `translate(-50px, 50px)`; 
    }

    else {
    card.style.transform = `translate(0px, 0px)`;
    }
});


// const text = document.getElementById("parallax-welcome")

// window.addEventListener("scroll", () =>{
//     const pagesAwal = document.querySelector(".hero");
//     const profileSecond = document.querySelector(".profile");

//     const awalRect = pagesAwal.getBoundingClientRect();
//     const secondRect = profileSecond.getBoundingClientRect();
// })





//navbar bottom

// const navbar = document.getElementById('navlink');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 100) {
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//   }
// });









// <!-- <script>
// const card = document.getElementById("parallaxCard");

// function updateParallax() {
//   const hero = document.querySelector(".hero");
//   const profile = document.querySelector(".profile");

//   const heroRect = hero.getBoundingClientRect();
//   const profileRect = profile.getBoundingClientRect();
//   const screenWidth = window.innerWidth;

//   // Atur batas maksimum per device
//   let maxMoveY = 950; // default desktop
//   let maxMoveX = -1220; // default shift kanan

//   if (screenWidth < 768) {
//     maxMoveY = 800;
//     maxMoveX = 0;
//   } else if (screenWidth < 3080) {
//     maxMoveY = 650;
//     maxMoveX = -750;
//   }

//   // Saat scroll di antara hero dan profile
//   if (heroRect.bottom > 0 && profileRect.top > 0) {
//     const progress = 1 - heroRect.bottom / window.innerHeight;
//     const moveY = Math.min(progress * maxMoveY, maxMoveY);
//     card.style.transform = `translate(0px, ${moveY}px)`;
//   }
//   // Saat sudah sampai di profile, geser ke kanan
//   else if (profileRect.top <= 0) {
//     card.style.transform = `translate(${maxMoveX}px, ${maxMoveY}px)`;
//   }
//   // Saat awal halaman
//   else {
//     card.style.transform = `translate(0px, 0px)`;
//   }

//   // Loop terus untuk animasi smooth
//   requestAnimationFrame(updateParallax);
// }

// // Mulai animasi
// requestAnimationFrame(updateParallax);












// //sec 3

//   const profileSection = document.querySelector('.profile');
//   const section3 = document.querySelector('.videos');

//   window.addEventListener('scroll', () => {
//     const profileBottom = profileSection.getBoundingClientRect().bottom;

//     // Jika bagian bawah .profile sudah naik ke atas viewport
//     if (profileBottom <= 0) {
//       section3.classList.add('active');
//     } else {
//       section3.classList.remove('active');
//     }
//   });


// </script> -->
