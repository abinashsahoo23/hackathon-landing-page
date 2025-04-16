// Theme Switcher + DOM Initialization
(function() {
    // Theme switching functionality
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;
    
    // Content elements that will change with the theme
    const heroTitle = document.querySelector('#hero h1');
    const heroSubtitle = document.querySelector('#hero p');
    const heroButton = document.querySelector('#hero .cta-button');
    
    const conceptTitle = document.querySelector('#concept h2');
    const conceptText1 = document.querySelector('#concept .concept-text p:first-child');
    const conceptText2 = document.querySelector('#concept .concept-text p:last-child');
    const conceptImage = document.querySelector('#concept .concept-image img');
    
    const dualityTitle = document.querySelector('#duality h2');
    const dualityText = document.querySelector('#duality .duality-text p');
    const dualityImage = document.querySelector('#duality .duality-image img');
    
    const ctaTitle = document.querySelector('#cta h2');
    const ctaButton = document.querySelector('#cta .cta-button');
    
    // Content for each theme
    const darkContent = {
        heroTitle: 'Eternal Shadows',
        heroSubtitle: 'Embrace the darkness that dwells within us all. A Gothic journey through forgotten realms.',
        heroButton: 'Begin Your Journey',
        
        conceptTitle: 'The Veil Between Worlds',
        conceptText1: 'In the realm of Eternal Shadows, the boundary between the living and the departed grows thin. Ancient cathedrals rise from mist-shrouded valleys, their spires piercing the twilight sky like obsidian needles.',
        conceptText2: 'Our immersive experience transports you to a world where Victorian elegance meets supernatural mystery. Every shadow tells a story, and every whisper carries secrets from beyond.',
        conceptImageSrc: 'images/gothic-cathedral.jpg',
        conceptImageAlt: 'Gothic cathedral shrouded in mist with towering spires reaching toward a twilight sky',
        
        dualityTitle: 'Beauty in Darkness',
        dualityText: 'Eternal Shadows explores the delicate balance between beauty and decay, passion and restraint, immortality and the ephemeral nature of existence. Our curated collection of art, literature, and music celebrates the haunting allure of Gothic aesthetics that has captivated souls for centuries.',
        dualityImageSrc: 'images/gothic-rose.jpg',
        dualityImageAlt: 'A black rose with droplets of dew against a weathered stone background',
        
        ctaTitle: 'Cross the Threshold',
        ctaButton: 'Join the Nocturnal Pilgrimage'
    };
    
    const lightContent = {
        heroTitle: 'Sunlit Dreams',
        heroSubtitle: 'Discover the magic of everyday moments. A whimsical adventure through enchanted gardens and cheerful celebrations.',
        heroButton: 'Start Your Adventure',
        
        conceptTitle: 'Enchanted Gardens',
        conceptText1: 'In the world of Sunlit Dreams, ordinary gardens transform into magical realms of wonder. Flower petals dance with gentle breezes, and butterflies paint the air with vibrant colors.',
        conceptText2: 'Our immersive experience brings you to a place where childhood imagination meets grown-up wonder. Every bloom tells a story of joy, and every sunbeam carries whispers of possibility.',
        conceptImageSrc: 'images/enchanted-garden.jpg',
        conceptImageAlt: 'Sunlit garden with colorful flowers, butterflies, and a magical gazebo',
        
        dualityTitle: 'Joy in Simplicity',
        dualityText: 'Sunlit Dreams celebrates the perfect balance between excitement and tranquility, adventure and comfort, the extraordinary and the everyday. Our collection of experiences, treats, and treasures highlights the beautiful simplicity that brings light and joy to life\'s journey.',
        dualityImageSrc: 'images/butterfly-flower.jpg',
        dualityImageAlt: 'A vibrant butterfly resting on a colorful flower in bright sunlight',
        
        ctaTitle: 'Join Our Celebration',
        ctaButton: 'Become Part of the Magic'
    };
    
    // Function to update content based on theme
    function updateContent(themeName) {
        const content = themeName === 'light' ? lightContent : darkContent;
        
        // Update hero section
        heroTitle.textContent = content.heroTitle;
        heroSubtitle.textContent = content.heroSubtitle;
        heroButton.textContent = content.heroButton;
        
        // Update concept section
        conceptTitle.textContent = content.conceptTitle;
        conceptText1.textContent = content.conceptText1;
        conceptText2.textContent = content.conceptText2;
        conceptImage.src = content.conceptImageSrc;
        conceptImage.alt = content.conceptImageAlt;
        
        // Update duality section
        dualityTitle.textContent = content.dualityTitle;
        dualityText.textContent = content.dualityText;
        dualityImage.src = content.dualityImageSrc;
        dualityImage.alt = content.dualityImageAlt;
        
        // Update CTA section
        ctaTitle.textContent = content.ctaTitle;
        ctaButton.textContent = content.ctaButton;
    }
    
    // Function to set the theme
    function setTheme(themeName) {
        if (themeName === 'light') {
            body.classList.add('light-theme');
            themeToggle.checked = true;
            updateContent('light');
        } else {
            body.classList.remove('light-theme');
            themeToggle.checked = false;
            updateContent('dark');
        }
        // Save theme preference to localStorage
        localStorage.setItem('theme', themeName);
    }
    
    // Toggle theme when checkbox changes
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
    
    // Check for saved theme preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
    
    // Smooth scrolling for navigation links with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get the height of the fixed header
                const headerHeight = document.querySelector('.main-nav').offsetHeight;
                
                // Calculate the target position with offset
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Initial check
    checkFade();
    
    // Check fade on scroll
    window.addEventListener('scroll', checkFade);
    
    // Hover effect for buttons
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('hover-effect');
        });
        
        button.addEventListener('mouseout', () => {
            button.classList.remove('hover-effect');
        });
    });

    // Scroll Animation using Intersection Observer
    const scrollElements = document.querySelectorAll(
        '#concept h2, #concept p, #concept .image-container, ' +
        '#duality h2, #duality p, #duality .image-container, ' +
        '#cta h2, #cta .cta-button'
    );

    // Create the observer
    const scrollObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Unobserve after animation is triggered once
                    scrollObserver.unobserve(entry.target);
                }
            });
        },
        {
            root: null, // Use viewport as root
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: "0px 0px -50px 0px" // Slightly adjust the trigger point
        }
    );

    // Observe all scroll elements
    scrollElements.forEach(element => {
        scrollObserver.observe(element);
    });
})();
