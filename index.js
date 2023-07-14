const currentDate = document.querySelector(".date");
const navBtn = document.querySelector(".pri-nav-menu");
const closeBtn = document.querySelector(".nav-bar-close");
const secNavContents = document.querySelector(".nav-bar-sec");
const moreItemsBtn = document.querySelector(".pri-nav-more");


//Display current date in the welcome section
const options = {
    weekday: "long",
    day:"numeric",
    month:"long"
};

const date = new Date();

currentDate.textContent = date.toLocaleDateString("en-US", options);

//Show and hide secondary navbar

navBtn.addEventListener("click", function(){
    secNavContents.classList.toggle("nav-bar-sec__visible");
});


moreItemsBtn.addEventListener("click", function(){
    secNavContents.classList.toggle("nav-bar-sec__visible");
})

closeBtn.addEventListener("click", function(){
    secNavContents.classList.remove("nav-bar-sec__visible");
});


// CAROUSEL SECTION FUNCTIONALITY

const reco_track = document.querySelector(".reco-carousel__track-container");
const latest_track = document.querySelector(".latest-carousel__track-container");
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".left-btn");
const nextBtn = document.querySelector(".right-btn");
const recoLink = document.querySelector(".recommended");
const latestLink = document.querySelector(".latest");

//Add an event listener to the recommended link
recoLink.addEventListener("click", function(){
    recoLink.classList.add("default");
    latestLink.classList.remove('default');
    latest_track.style.display="none";
    reco_track.style.display="flex";
    
    
    // Select all slides
    const slides = Array.from(reco_track.children);
    console.log(slides);

    // Get the dimensions of the first slide(L*W)
    const slideSize = slides[0].getBoundingClientRect();
    console.log(slideSize);

    // Get the slide width
    const slideWidth = slideSize.width;
    console.log(slideWidth);


    // current slide counter
    let curSlide = 0;
    // maximum number of slides
    let maxSlide = slides.length;

    
    // add event listener and navigation functionality
    nextBtn.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
        if (curSlide === maxSlide){
        curSlide = 0;
        nextBtn.style.visibility = "hidden";
        prevBtn.style.visibility = "visible";

        } else {
        curSlide= curSlide + 1;
        }

        // move slide by -100%
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-`+ slideWidth*2 +`px)`;
        });
        });

    // add event listener and navigation functionality
    prevBtn.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
            curSlide = maxSlide;
            prevBtn.style.visibility="hidden";
            nextBtn.style.visibility="visible";
            
        } else {
            curSlide--;
        }

        //   move slide by 100%
        slides.forEach((slide) => {
            // slide.style.transform = `translateX(${120 * (indx - curSlide)}%)`;
            slide.style.transform = `translateX(`+ slideWidth/2 +`px)`
        }); 
    });  
});

// Add an event listener to the latest link
latestLink.addEventListener("click",function(){

    recoLink.classList.remove("default");
    latestLink.classList.add("default");
    reco_track.style.display="none";
    latest_track.style.display="flex";
    
    
    // Select all slides
    const slides = Array.from(latest_track.children);
    console.log(slides);

    // Get the dimensions of the first slide(L*W)
    const slideSize = slides[0].getBoundingClientRect();
    console.log(slideSize);

    // Get the slide width
    const slideWidth = slideSize.width;
    console.log(slideWidth);


    // current slide counter
    let curSlide = 0;
    // maximum number of slides
    let maxSlide = slides.length;

    
    // add event listener and navigation functionality
    nextBtn.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
        if (curSlide === maxSlide){
        curSlide = 0;
        nextBtn.style.visibility = "hidden";
        prevBtn.style.visibility = "visible";

        } else {
        curSlide= curSlide + 1;
        }

        // move slide by -100%
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-`+ slideWidth*2 +`px)`;
        });
        });

    // add event listener and navigation functionality
    prevBtn.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
            curSlide = maxSlide;
            prevBtn.style.visibility="hidden";
            nextBtn.style.visibility="visible";
            
        } else {
            curSlide--;
        }

        //   move slide by 100%
        slides.forEach((slide) => {
            // slide.style.transform = `translateX(${120 * (indx - curSlide)}%)`;
            slide.style.transform = `translateX(`+ slideWidth/2 +`px)`
        }); 
    });  
  
  
});

latest_track.style.display="none";
reco_track.style.display="flex";





  





