  // Add this script to dynamically create the animated lines
  document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.services-lines-container');
    
    // Create vertical lines
    for(let i = 0; i < 5; i++) {
      const line = document.createElement('div');
      line.className = 'services-line';
      line.style.left = `${(i + 1) * 20}%`;
      line.style.animationDelay = `${i * 1.5}s`;
      container.appendChild(line);
    }
  });












  const contentData = [
    {
      label: 'OUR MISSION',
      number: '01',
      title: 'Empowering Financial Freedom Through Innovation',
      text: 'We are committed to revolutionizing financial services by combining cutting-edge technology with expert guidance. Our mission is to democratize wealth creation, providing every client with personalized investment strategies that transform aspirations into achievements.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
    },
    {
      label: 'OUR VISION',
      number: '02',
      title: 'Shaping the Future of Global Finance',
      text: 'We envision a world where financial success is accessible to all, powered by innovative technology and guided by expertise. Our goal is to become the global standard for personalized investment solutions, creating lasting prosperity for generations to come.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>'
    }
  ];
  
  let currentIndex = 0;
  const intervalTime = 5000;
  
  function updateContent(index) {
    const content = contentData[index];
    
    // Fade out
    const card = document.getElementById('contentCard');
    card.style.opacity = '0';
    
    setTimeout(() => {
      // Update content
      document.getElementById('cardLabel').textContent = content.label;
      document.getElementById('cardNumber').textContent = content.number;
      document.getElementById('cardTitle').textContent = content.title;
      document.getElementById('cardText').textContent = content.text;
      document.getElementById('cardIcon').innerHTML = content.icon;
      
      // Update buttons
      document.getElementById('missionButton').className = `w-12 h-1 rounded-full transition-all duration-300 ${index === 0 ? 'bg-[#DBAB23]' : 'bg-white/20'}`;
      document.getElementById('visionButton').className = `w-12 h-1 rounded-full transition-all duration-300 ${index === 1 ? 'bg-[#DBAB23]' : 'bg-white/20'}`;
      
      // Fade in
      card.style.opacity = '1';
    }, 300);
  }
  
  // Initial load
  updateContent(0);
  
  // Auto-rotation
  let interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % contentData.length;
    updateContent(currentIndex);
  }, intervalTime);
  
  // Button click handlers
  document.getElementById('missionButton').addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = 0;
    updateContent(0);
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % contentData.length;
      updateContent(currentIndex);
    }, intervalTime);
  });
  
  document.getElementById('visionButton').addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = 1;
    updateContent(1);
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % contentData.length;
      updateContent(currentIndex);
    }, intervalTime);
  });










  document.addEventListener('DOMContentLoaded', function() {
    // Create additional diagonal lines dynamically
    const diagonalLines = document.querySelector('.diagonal-lines');
    for (let i = 0; i < 4; i++) {
      const line = document.createElement('div');
      line.className = 'diagonal-line';
      line.style.left = `${(i + 1) * 20}%`;
      line.style.animationDelay = `${-i * 3}s`;
      diagonalLines.appendChild(line);
    }
  });


















  
document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll('#navbar button');
  
    navButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove the blue text color from all buttons
        navButtons.forEach((btn) => {
          btn.classList.remove('text-orange-500');
          btn.classList.add('text-white');
        });
  
        // Add blue text color to the clicked button
        button.classList.add('text-orange-500');
        button.classList.remove('text-white');
      });
    });
  });
  
  
  
  
  const homeBtnMobile = document.getElementById('homeBtnMobile');
  const servicesBtnMobile = document.getElementById('servicesBtnMobile');
  const TeamBtnMobile = document.getElementById('TeamBtnMobile');
  const aboutBtnMobile = document.getElementById('aboutBtnMobile');
  const contactBtnMobile = document.getElementById('contactBtnMobile');
  
  // Function to handle mobile menu clicks
  function handleMobileMenuClick(section) {
    // First close the mobile menu
    const navbarSticky = document.getElementById('navbar-sticky');
    navbarSticky.classList.add('hidden');
    
    // Then scroll to section
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  // Add event listeners for mobile buttons
  homeBtnMobile.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('navbar-sticky').classList.add('hidden');
  });
  
  servicesBtnMobile.addEventListener('click', () => {
    const servicesSection = document.getElementById('servicesSection');
    handleMobileMenuClick(servicesSection);
  });
  
  TeamBtnMobile.addEventListener('click', () => {
    const TeamSection = document.getElementById('TeamSection');
    handleMobileMenuClick(TeamSection);
  });
  
  aboutBtnMobile.addEventListener('click', () => {
    const aboutUsPageSection = document.getElementById('AboutUsPageSection');
    handleMobileMenuClick(aboutUsPageSection);
  });
  
  contactBtnMobile.addEventListener('click', () => {
    const contactSection = document.getElementById('contactSection');
    handleMobileMenuClick(contactSection);
  });
  
  // Optional: Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const navbarSticky = document.getElementById('navbar-sticky');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    
    if (!navbarSticky.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      navbarSticky.classList.add('hidden');
    }
  });
  
  
  
      // Get all sections
      // Select all relevant DOM elements
      // Select all relevant DOM elements
      const menuToggle = document.getElementById('mobile-menu-toggle');
      const navbarSticky = document.getElementById('navbar-sticky');
  
      menuToggle.addEventListener('click', () => {
        // Toggle the visibility of the mobile menu
        navbarSticky.classList.toggle('hidden');
      });
      const allSections = document.querySelectorAll('section');
      const servicePageSection = document.getElementById('servicePageSection');
      const navbar = document.querySelector("#navbar");
      const banner = document.querySelector("#banner");
      const footer = document.querySelector("footer");
      // Get the navbar using DOM API
  
      // Add a scroll event listener to the window
  
      // Get all service card buttons 
      const serviceButtons = document.querySelectorAll('#servicesSection button');
  
      // Function to hide all sections except servicePageSection, navbar, banner, and footer
      function showServicePage() {
        allSections.forEach(section => {
          if (section.id !== 'servicePageSection' && section.id !== 'banner' && section.id !== 'navbar' && section.id !== 'footer') {
            section.classList.add('hidden');
          }
        });
        servicePageSection.classList.remove('hidden');
  
        // Ensure navbar is visible
        navbar.style.display = 'block';
  
        // Ensure banner and footer are visible
        banner.classList.remove('hidden');
        footer.classList.remove('hidden');
      }
  
      // Add click event listeners to all service card buttons
      serviceButtons.forEach(button => {
        button.addEventListener('click', showServicePage);
      });
  
      // Existing code for navbar scroll behavior...
  
  
  
  
  
  
  
  
      // Get the navbar using DOM API
  
  
  
      // Get the navbar buttons
      const homeBtn = document.getElementById('homeBtn');
      const servicesBtn = document.getElementById('servicesBtn');
      const TeamBtn = document.getElementById('TeamBtn');
      const contactBtn = document.getElementById('contactBtn');
      const aboutBtn = document.getElementById('aboutBtn');
      const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
  
      // FOOTER BUTTONS
  
      const servicesBtnFooter = document.getElementById('servicesBtnFooter');
      const TeamBtnFooter = document.getElementById('TeamBtnFooter');
      const contactBtnFooter = document.getElementById('contactBtnFooter');
      const missionBtnFooter = document.getElementById('missionBtnFooter');
      const valuesBtnFooter = document.getElementById('valuesBtnFooter');
  
  
      // Get the sections
      const servicesSection = document.getElementById('servicesSection');
      const TeamSection = document.getElementById('TeamSection');
      const contactSection = document.getElementById('contactSection');
      const aboutUsPageSection = document.getElementById('AboutUsPageSection');
      const missionAndVisionSection = document.getElementById('missionAndVisionSection');
      const valuesSection = document.getElementById('valuesSection');
  
  
      // Function to scroll to a section with offset
      function scrollToSection(section) {
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const sectionPosition = section.getBoundingClientRect().top;
        const offsetPosition = sectionPosition + window.pageYOffset - navbarHeight;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
  
      // Function to show all sections and hide servicePageSection
     
      // Event listeners for buttons
      homeBtn.addEventListener('click', () => {
        ;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  
      bookAppointmentBtn.addEventListener('click', () => {
        ;
        scrollToSection(contactSection);
      });
  
      
  
      servicesBtn.addEventListener('click', () => {
        
        scrollToSection(servicesSection);
      });
  
      TeamBtn.addEventListener('click', () => {
        ;
        scrollToSection(TeamSection);
      });
  
      servicesBtnFooter.addEventListener('click', () => {
        ;
        scrollToSection(servicesSection);
      });
  
      TeamBtnFooter.addEventListener('click', () => {
        ;
        scrollToSection(TeamSection);
      });
  
      
     
  
  
  
  
  
  
  
  
  
  
      contactBtn.addEventListener('click', () => {
        ;
        scrollToSection(contactSection);
      });
  
      aboutBtn.addEventListener('click', () => {
        ;
        scrollToSection(aboutUsPageSection);
      });
  








      window.onload = function () {
        // Function to get URL parameters
        function getUrlParameter(name) {
          name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
          var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
          var results = regex.exec(location.search);
          return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }
  
        // Function to scroll to a section with offset
        function scrollToSection(sectionId) {
          var section = document.getElementById(sectionId);
          if (section) {
            var navbarHeight = document.querySelector('nav').offsetHeight;
            var sectionPosition = section.getBoundingClientRect().top;
            var offsetPosition = sectionPosition + window.pageYOffset - navbarHeight;
  
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
  
        // Get the section parameter from the URL
        var section = getUrlParameter('section');
  
        if (section) {
          // If a section is specified, scroll to it after a short delay
          setTimeout(function () {
            scrollToSection(section);
          }, 500); // 500ms delay
        }
      };



      document.addEventListener('DOMContentLoaded', function() {
        // Initialize EmailJS with your User ID
        emailjs.init("fn7HLNkZiCrBoKJnJ"); // Replace with your EmailJS User ID from Account > API Keys
    
        const form = document.querySelector('form');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
    
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = 'Sending...';
            submitButton.disabled = true;
    
            // Get form values and prepare email parameters
            const templateParams = {
                from_name: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
                from_email: document.getElementById('email').value,
                phone_number: document.getElementById('phone').value,
                investment_amount: document.getElementById('investmentAmount').value,
                message: document.getElementById('message').value,
                to_name: "Fiinvest Team",
                to_email: "fiinvestpk@gmail.com"
            };
    
            // Send email using EmailJS
            emailjs.send("service_3tszrsc", "template_pmi1yyy", templateParams)
                .then(function() {
                    submitButton.innerHTML = '✓ Message Sent!';
                    form.reset();
                    
                    setTimeout(() => {
                        submitButton.innerHTML = originalButtonText;
                        submitButton.disabled = false;
                    }, 3000);
                })
                .catch(function(error) {
                    console.error('Failed:', error);
                    submitButton.innerHTML = '× Failed to Send';
                    
                    setTimeout(() => {
                        submitButton.innerHTML = originalButtonText;
                        submitButton.disabled = false;
                    }, 3000);
                });
        });
    });