// Safe Haven - Part 3 Final JS - FIXED by Assistant
document.addEventListener('DOMContentLoaded', () => {

  // 1. Hamburger (Part 2 fix + Part 3 responsive)
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if(hamburger && nav){
    hamburger.addEventListener('click', () => nav.classList.toggle('active'));
  }

  // 2. Accordion FAQ - FIXED TO SUPPORT BOTH CLASS NAMES
  // Support .faq-question (your about.html) + .accordion-header (legacy)
  document.querySelectorAll('.faq-question, .accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      // Case A: FAQ structure is button + div.faq-answer
      const answer = header.nextElementSibling;
      if(answer && (answer.classList.contains('faq-answer') || answer.classList.contains('accordion-content'))){
        answer.classList.toggle('active');
        // toggle + / -
        let txt = header.textContent;
        if(txt.includes('+')) header.textContent = txt.replace('+','−');
        else if(txt.includes('−') || txt.includes('-')) header.textContent = txt.replace('−','+').replace('-','+');
      } else {
        // Case B: parent .faq-item or .accordion-item
        const item = header.parentElement;
        item.classList.toggle('active');
        if(answer) answer.classList.toggle('active');
      }
    });
  });

  // 3. Tabs for Services (2.1 tabs)
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if(target) target.classList.add('active');
    });
  });

  // 4. Modals - Volunteer & Adoption (2.1 modals) - FIXED
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById(trigger.dataset.modal);
      if(modal) modal.classList.add('active');
    });
  });
  document.querySelectorAll('.modal-close, .close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('.modal');
      if(modal) modal.classList.remove('active');
    });
  });
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if(e.target === modal) modal.classList.remove('active');
    });
  });
  // ESC to close
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      document.querySelectorAll('.modal.active, .lightbox.active').forEach(m=>m.classList.remove('active'));
    }
  });

  // 5. Lightbox Gallery (2.1 gallery with lightbox)
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img') || document.getElementById('lightboxImage');
  document.querySelectorAll('.gallery-img, .pet-card img, .hero-img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      if(lightbox && lightboxImg){
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Enlarged rescue animal image';
        lightbox.classList.add('active');
      }
    });
  });
  if(lightbox){
    lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
  }

  // 6. Dynamic Content Loading - Pets (2.2)
  const pets = [
    {name:"Max", breed:"Golden Retriever Mix • 2 Years", desc:"Friendly, energetic, great with kids. Loves fetch and outdoor walks.", emoji:"🐶", type:"dog"},
    {name:"Luna", breed:"Domestic Shorthair • 1 Year", desc:"Calm, affectionate, loves sunny spots. Fully vaccinated.", emoji:"🐱", type:"cat"},
    {name:"Buddy", breed:"Labrador • 3 Years", desc:"Rescued from township, now healthy and very playful.", emoji:"🐶", type:"dog"},
    {name:"Milo", breed:"Tabby Cat • 8 Months", desc:"Very cuddly, ideal for apartments. Loves children.", emoji:"🐱", type:"cat"},
    {name:"Rocky", breed:"German Shepherd • 2.5 Years", desc:"Intelligent, loyal, trained basic commands.", emoji:"🐶", type:"dog"},
    {name:"Bella", breed:"Siamese Mix • 1.5 Years", desc:"Vocal, affectionate, loves attention. Indoor cat only.", emoji:"🐱", type:"cat"}
  ];
  const petsGrid = document.getElementById('dynamic-pets');
  if(petsGrid){
    petsGrid.innerHTML = pets.map(p => `
      <article class="pet-card reveal">
        <div class="pet-avatar-wrapper ${p.type==='dog'?'dog-bg':'cat-bg'}">
          <span class="pet-emoji">${p.emoji}</span>
          <span class="pet-tag">${p.type}</span>
        </div>
        <div class="pet-details">
          <h3>${p.name}</h3>
          <p class="pet-breed">${p.breed}</p>
          <p class="pet-desc">${p.desc}</p>
          <a href="enquiry.html" class="btn btn-card">Adopt ${p.name}</a>
        </div>
      </article>
    `).join('');
  }

  // 7. Search & Filter
  const searchInput = document.getElementById('petSearch');
  if(searchInput){
    searchInput.addEventListener('input', () => {
      const term = searchInput.value.toLowerCase();
      document.querySelectorAll('#dynamic-pets .pet-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(term) ? 'block' : 'none';
      });
    });
  }
  const serviceSearch = document.getElementById('serviceSearch');
  if(serviceSearch){
    serviceSearch.addEventListener('input', () => {
      const term = serviceSearch.value.toLowerCase();
      document.querySelectorAll('.service-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(term) ? 'block' : 'none';
      });
    });
  }

  // 8. Scroll Reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
  }, {threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // 9. Enquiry Form
  const enquiryForm = document.getElementById('enquiryForm');
  if(enquiryForm){
    enquiryForm.addEventListener('submit', function(e){
      e.preventDefault();
      let valid = true;
      this.querySelectorAll('.error-msg').forEach(el=>{ el.style.display='none'; el.innerText=''; });
      const name = document.getElementById('fullname');
      if(!name || name.value.trim().length < 3){ showError(name, 'Name must be at least 3 characters'); valid=false; }
      const email = document.getElementById('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!email || !emailRegex.test(email.value)){ showError(email, 'Enter a valid email'); valid=false; }
      const phone = document.getElementById('phone');
      const phoneRegex = /^0\d{9}$/;
      const phoneClean = phone ? phone.value.replace(/\s/g,'') : '';
      if(!phone || !phoneRegex.test(phoneClean)){ showError(phone, 'Enter valid SA number e.g. 0821234567'); valid=false; }
      const type = document.getElementById('enquiry-type');
      if(!type || !type.value){ showError(type, 'Please select how you want to get involved'); valid=false; }
      const msg = document.getElementById('message');
      if(!msg || msg.value.trim().length < 20){ showError(msg, 'Message must be at least 20 chars'); valid=false; }
      if(!valid) return;
      const submitBtn = this.querySelector('button[type=submit]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Submitting...'; submitBtn.disabled = true;
      setTimeout(() => {
        let response = '';
        switch(type.value){
          case 'individual-volunteer': response = 'Thank you Volunteer! Volunteers work Mon-Sat 09:00-16:30. Training FREE, certificate provided. We will contact you within 24h on ' + phone.value + '.'; break;
          case 'corporate-sponsor': response = 'Thank you Sponsor! Sponsorship R500/month includes tax cert (Section 18A) and logo. Proposal sent to ' + email.value + '.'; break;
          case 'foster-parent': response = 'Foster homes needed! We provide ALL food, bedding & vet costs FREE. Foster 2-8 weeks. Thank you ' + name.value + '!'; break;
          case 'pet-adoption': response = 'Adoption fee: R850 (vaccination, deworming, sterilization, microchip). Home-check in 3 days. 12 dogs, 8 cats ready.'; break;
          default: response = 'Thanks! We will respond within 24h to ' + email.value + '.';
        }
        const successBox = document.getElementById('enquirySuccess');
        if(successBox){
          successBox.innerHTML = `<strong>✓ AJAX Submission Success!</strong><br><br>${response}`;
          successBox.style.display='block';
          window.scrollTo({top: successBox.offsetTop - 100, behavior:'smooth'});
        }
        submitBtn.innerText = originalText; submitBtn.disabled = false; this.reset();
      }, 1000);
    });
  }

  // 10. Contact Form
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      let valid = true;
      this.querySelectorAll('.error-msg').forEach(el=>{ el.style.display='none'; });
      const cname = document.getElementById('contact-name');
      if(!cname || cname.value.trim().length < 3){ showError(cname, 'Name min 3 chars'); valid=false; }
      const cemail = document.getElementById('contact-email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!cemail || !emailRegex.test(cemail.value)){ showError(cemail, 'Valid email required'); valid=false; }
      const subject = document.getElementById('subject');
      if(!subject || subject.value.trim().length < 3){ showError(subject, 'Subject too short'); valid=false; }
      const cmsg = document.getElementById('contact-message');
      if(!cmsg || cmsg.value.trim().length < 10){ showError(cmsg, 'Message min 10 chars'); valid=false; }
      if(!valid) return;
      const body = `Name: ${cname.value}%0D%0AEmail: ${cemail.value}%0D%0ASubject: ${subject.value}%0D%0AMessage: ${cmsg.value}`;
      const mailtoLink = `mailto:cpt@safehavenrescue.org.za?subject=${encodeURIComponent(subject.value)}&body=${body}`;
      const successBox = document.getElementById('contactSuccess');
      if(successBox){
        successBox.innerHTML = `<strong>✓ Validation Passed! Email Compiled.</strong><br><br>To: cpt@safehavenrescue.org.za<br>From: ${cemail.value}<br><br><a href="${mailtoLink}" class="btn btn-primary" style="display:inline-block; margin:10px 0;">Click to send via mail app</a>`;
        successBox.style.display='block';
      }
    });
  }

  function showError(input, msg){
    if(!input) return;
    let err = input.parentElement.querySelector('.error-msg') || input.nextElementSibling;
    if(err && err.classList.contains('error-msg')){
      err.innerText = msg; err.style.display='block';
      input.style.borderColor = '#DC2626';
      input.addEventListener('input', () => { input.style.borderColor = '#D1D5DB'; err.style.display='none'; }, {once:true});
    }
  }

  // 11. Leaflet Maps - FIXED WITH TIMEOUT
  function initMaps(){
    const mapElement = document.getElementById('map');
    if(mapElement && typeof L !== 'undefined'){
      if(mapElement._leaflet_id) return; // already init
      const map = L.map('map').setView([-33.9249, 18.4241], 9);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap | Safe Haven' }).addTo(map);
      L.marker([-33.9249, 18.4241]).addTo(map).bindPopup('<b>Cape Town Central Shelter</b><br>12 Hope Street, Gardens').openPopup();
      L.marker([-29.853, 30.921]).addTo(map).bindPopup('<b>KZN Branch</b><br>45 Main Road, Gillitts');
      setTimeout(()=> map.invalidateSize(), 500);
    }
    const mapContact = document.getElementById('map-contact');
    if(mapContact && typeof L !== 'undefined'){
      if(mapContact._leaflet_id) return;
      const map2 = L.map('map-contact').setView([-33.9249, 18.4241], 9);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map2);
      L.marker([-33.9249, 18.4241]).addTo(map2).bindPopup('<b>Cape Town Shelter</b>').openPopup();
      setTimeout(()=> map2.invalidateSize(), 500);
    }
  }
  initMaps();
  setTimeout(initMaps, 1000);

  console.log('Safe Haven Part 3 FIXED - All JS loaded');
});