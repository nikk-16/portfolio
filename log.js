let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
toggle.onclick = function () {
   toggle.classList.toggle('active');
   topbar.classList.toggle('active');
   navigation.classList.toggle('active');
   main.classList.toggle('active');
}

// education 
const tabsContainer = document.querySelector(".about-tabs"),
education = document.querySelector(".education-experience");

tabsContainer.addEventListener("click" , (e) =>
{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        //  console.log(target);
        education.querySelector(".tab-content.active").classList.remove("active");
        education.querySelector(target).classList.add("active");
    }
});

// // fix menu active class issue for mobile devices
// navigation.onclick = function toggleMenu(){
// //    let navigation = document.querySelector('.navigation');
//    let main = document.querySelector('.main');
// //    let element = navigation.
// //    element.style.opacity = 100;
//    navigation.classList.style.opacity = 60;
//    navigation.classList.remove('active');
//    main.classList.remove('active');

// }