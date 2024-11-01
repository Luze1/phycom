document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('#navbar ul li a');
    
    let currentSectionId = '';

    // Check if the page is scrolled to the top
    if (window.scrollY === 0) {
        // Remove 'active' class from all links when at the top
        navbarLinks.forEach(link => link.classList.remove('active'));
        return; // Exit the function early
    }

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});
