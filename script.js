const scrollTopBtn = document.getElementsByClassName('btn-scrollTop')[0];
const navBarEl = document.getElementsByClassName('navbar-nav')[1];

const intersectionObserver = new IntersectionObserver(observe);

function observe(entry) {
    if (!entry[0].isIntersecting && innerWidth < 992) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

intersectionObserver.observe(navBarEl)

scrollTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; //For other Browsers
})

