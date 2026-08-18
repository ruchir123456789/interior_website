/**
 * JB FURNITURE & INTERIOR — CORE JAVASCRIPT
 * Pune, Maharashtra
 * Pure Vanilla JavaScript implementation
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================
  // 1. CONFIGURABLE CLIENT CONSTANTS
  // ==========================================
  // Note: Replace with actual client phone/whatsapp number when confirmed
  const CONFIG = {
    whatsappNumber: "919876543210", // Client can configure this with their WhatsApp number without + or spaces
    instagramHandle: "jb_furniture_interior_pune",
    instagramUrl: "https://www.instagram.com/jb_furniture_interior_pune/",
    defaultWhatsAppMsg: "Hello JB Furniture & Interior, I would like to discuss a furniture/interior project in Pune."
  };

  // ==========================================
  // 2. STICKY NAVBAR SCROLL HANDLER
  // ==========================================
  const header = document.querySelector('.header');
  const backToTopBtn = document.querySelector('.back-to-top');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================
  // 3. MOBILE NAVIGATION DRAWER
  // ==========================================
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileOverlay = document.querySelector('.mobile-drawer-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = (open) => {
    const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
    if (isOpen) {
      menuToggle?.classList.add('active');
      mobileDrawer?.classList.add('open');
      mobileOverlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      menuToggle?.classList.remove('active');
      mobileDrawer?.classList.remove('open');
      mobileOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  menuToggle?.addEventListener('click', () => toggleMobileMenu());
  mobileOverlay?.addEventListener('click', () => toggleMobileMenu(false));

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // ==========================================
  // 4. ACTIVE NAVIGATION LINK DETECTION
  // ==========================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ==========================================
  // 5. SCROLL INTERSECTION OBSERVER ANIMATIONS
  // ==========================================
  const animatedElements = document.querySelectorAll('.fade-up');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => scrollObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    animatedElements.forEach(el => el.classList.add('visible'));
  }

  // ==========================================
  // 6. GALLERY CATEGORY FILTERING
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || filterValue === category) {
            card.classList.remove('hidden');
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.classList.add('hidden');
            }, 300);
          }
        });
      });
    });
  }

  // ==========================================
  // 7. LIGHTBOX MODAL FOR GALLERY
  // ==========================================
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCat = document.getElementById('lightbox-cat');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox) {
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('.project-img');
        const title = card.querySelector('.project-title')?.childNodes[0]?.textContent.trim();
        const cat = card.querySelector('.project-category')?.textContent.trim();

        if (img && lightboxImg) {
          lightboxImg.src = img.src;
          lightboxImg.alt = title || "JB Furniture Project";
          if (lightboxTitle) lightboxTitle.textContent = title;
          if (lightboxCat) lightboxCat.textContent = cat;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };

    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }

  // ==========================================
  // 8. WHATSAPP LINK GENERATOR
  // ==========================================
  const generateWhatsAppUrl = (customText) => {
    const text = customText || CONFIG.defaultWhatsAppMsg;
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Attach dynamic link to all WhatsApp buttons
  const waButtons = document.querySelectorAll('.dynamic-whatsapp-btn');
  waButtons.forEach(btn => {
    btn.setAttribute('href', generateWhatsAppUrl());
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  // ==========================================
  // 9. CONTACT FORM VALIDATION & SUBMISSION
  // ==========================================
  const contactForm = document.getElementById('project-contact-form');
  const formSuccessBanner = document.getElementById('form-success-banner');

  if (contactForm) {
    const nameInput = document.getElementById('fullName');
    const phoneInput = document.getElementById('phoneNumber');
    const emailInput = document.getElementById('emailAddress');
    const projectTypeSelect = document.getElementById('projectType');
    const locationInput = document.getElementById('projectLocation');
    const budgetSelect = document.getElementById('budgetRange');
    const messageInput = document.getElementById('projectMessage');

    const setError = (inputElement, errorElementId, message) => {
      inputElement.classList.add('error');
      const errEl = document.getElementById(errorElementId);
      if (errEl) errEl.textContent = message;
    };

    const clearError = (inputElement, errorElementId) => {
      inputElement.classList.remove('error');
      const errEl = document.getElementById(errorElementId);
      if (errEl) errEl.textContent = '';
    };

    // Real-time input clearing
    nameInput?.addEventListener('input', () => clearError(nameInput, 'nameError'));
    phoneInput?.addEventListener('input', () => clearError(phoneInput, 'phoneError'));
    projectTypeSelect?.addEventListener('change', () => clearError(projectTypeSelect, 'projectTypeError'));
    messageInput?.addEventListener('input', () => clearError(messageInput, 'messageError'));

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        setError(nameInput, 'nameError', 'Please enter your full name.');
        isValid = false;
      } else {
        clearError(nameInput, 'nameError');
      }

      // Validate Phone
      const phoneClean = phoneInput.value.replace(/[\s\-\(\)]/g, '');
      if (!phoneClean) {
        setError(phoneInput, 'phoneError', 'Please provide your contact phone number.');
        isValid = false;
      } else if (phoneClean.length < 8) {
        setError(phoneInput, 'phoneError', 'Please provide a valid contact number.');
        isValid = false;
      } else {
        clearError(phoneInput, 'phoneError');
      }

      // Validate Project Type
      if (!projectTypeSelect.value) {
        setError(projectTypeSelect, 'projectTypeError', 'Please select a project type.');
        isValid = false;
      } else {
        clearError(projectTypeSelect, 'projectTypeError');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        setError(messageInput, 'messageError', 'Please describe your project requirements.');
        isValid = false;
      } else {
        clearError(messageInput, 'messageError');
      }

      if (isValid) {
        // Construct formatted WhatsApp message for easy direct inquiry
        const inquirySummary = 
          `*New Project Inquiry - JB Furniture & Interior*\n` +
          `• Name: ${nameInput.value.trim()}\n` +
          `• Phone: ${phoneInput.value.trim()}\n` +
          `• Email: ${emailInput?.value.trim() || 'Not specified'}\n` +
          `• Project Type: ${projectTypeSelect.value}\n` +
          `• Location: ${locationInput?.value.trim() || 'Pune'}\n` +
          `• Budget: ${budgetSelect?.value || 'Discuss during consultation'}\n` +
          `• Requirements: ${messageInput.value.trim()}`;

        // Show inline success message
        if (formSuccessBanner) {
          formSuccessBanner.classList.add('active');
          formSuccessBanner.innerHTML = `
            <h4 style="color: #25D366; margin-bottom: 8px;">Thank You, ${nameInput.value.trim()}!</h4>
            <p style="margin-bottom: 12px;">Your consultation request has been prepared. You can also send this inquiry directly to our team on WhatsApp for an immediate response.</p>
            <a href="${generateWhatsAppUrl(inquirySummary)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="display:inline-flex;">
              Send Inquiry via WhatsApp
            </a>
          `;
        }

        // Reset the form fields
        contactForm.reset();

        // Scroll to success banner smoothly
        formSuccessBanner?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Preselect project type from URL params if coming from services page (e.g. contact.html?service=Modular%20Kitchen)
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (serviceParam) {
    const projectTypeSelect = document.getElementById('projectType');
    if (projectTypeSelect) {
      for (let i = 0; i < projectTypeSelect.options.length; i++) {
        if (projectTypeSelect.options[i].text.toLowerCase().includes(serviceParam.toLowerCase()) || 
            projectTypeSelect.options[i].value.toLowerCase().includes(serviceParam.toLowerCase())) {
          projectTypeSelect.selectedIndex = i;
          break;
        }
      }
    }
  }
});
