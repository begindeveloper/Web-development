const observer = new Intersection IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElement = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));
