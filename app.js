document.addEventListener('DOMContentLoaded', function() {
    // ---- 1. Mobile Menu Toggle ----
    // Select the hamburger button and the navigation list
    const hamburger = document.querySelector('#hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // ---- 2. Dark Mode Toggle ----
    // Select the dark mode toggle button
    const darkToggleBtn = document.getElementById('darkModeToggle');

    // Function to toggle dark mode
    function toggleDarkMode() {
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
    // Select all filter buttons and project cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-link');

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the filter category from the data attribute
            const filter = button.dataset.filter;

            // Remove 'active' class from all buttons and add it to the clicked one
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Iterate through all project cards and show/hide them based on the filter
            projectCards.forEach(card => {
                const category = card.dataset.category;

                // This logic only affects elements with the class 'project-card-link'.
                // The footer is a separate element and is not affected by this logic.
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block'; // Show the card
                } else {
                    card.style.display = 'none'; // Hide the card
                }
            });
        });
    });

    // ---- 4. Fade-in Animation on Scroll ----
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
