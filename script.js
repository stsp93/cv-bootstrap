const scrollTopBtn = document.getElementsByClassName('btn-scrollTop')[0];
const navBarEl = document.getElementsByClassName('navbar-nav')[1];
const themeBtn = document.getElementById('themeBtn');

// Observe if navbar is intersecting
const intersectionObserver = new IntersectionObserver(observeCallback);

intersectionObserver.observe(navBarEl)

function observeCallback(entry) {
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

// Change themes

themeBtn.addEventListener('click', function() {

    document.querySelectorAll('.bg-dark').forEach(e => {
        e.classList.toggle('bg-dark-light-theme')
    })

    document.querySelectorAll('.text-light').forEach(e => {
        e.classList.toggle('text-light-light-theme')
    })

    document.querySelectorAll('#education span').forEach(e => {
        e.classList.toggle('education-span-light-theme')
    })

    document.querySelectorAll('#skills span').forEach(e => {
        e.classList.toggle('skills-span-light-theme')
    })
})
