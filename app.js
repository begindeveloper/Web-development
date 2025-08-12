document.addEventListener('DOMContentLoaded', function() {
    // ---- 1. Mobile Menu Toggle ----
    // This section is kept the same as before.
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-list');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // ---- 2. Dark Mode Toggle (Updated) ----
    // Select the dark mode toggle button by its class
    const darkToggleBtn = document.querySelector('.theme-toggle .button');

    function toggleDarkMode() {
        // Toggle the 'dark-mode' class on the body
        document.body.classList.toggle('dark-mode');
        // Save the user's preference to local storage
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    }

    // Set the theme on page load based on local storage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Attach the event listener to the dark mode button
    if (darkToggleBtn) {
        darkToggleBtn.addEventListener('click', toggleDarkMode);
    }

    // ---- 3. Project Card Filtering ----
    // This section is kept the same as before.
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-link');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            projectCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ---- 4. Fade-in Animation on Scroll ----
    // This section is kept the same as before.
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
