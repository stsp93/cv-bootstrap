const scrollTopBtn = document.getElementsByClassName('btn-scrollTop')[0];
const navBarEl = document.getElementsByClassName('navbar-nav')[1];

// Observe if navbar is intersecting
const intersectionObserver = new IntersectionObserver(observeCallback);

intersectionObserver.observe(navBarEl)

function observeCallback(entry) {
    console.log(entry);
    if (!entry[0].isIntersecting && innerWidth < 992) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}


// Scroll to top btn logic
scrollTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; //For other Browsers
})

