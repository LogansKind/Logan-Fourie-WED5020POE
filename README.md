# Safe Haven Animal Rescue - WED5020 POE

**Module:** WED5020 - Web Development (Introduction)  
**Institution:** IIE Rosebank College / Rosebank International College  
**Repository:** https://github.com/LogansKind/Logan-Fourie-WED5020POE  
**Live Site:** https://safehavenwedepoe.netlify.app  
**Author:** Logan Fourie

---

## Project Overview
Safe Haven Animal Rescue is a responsive website for a fictional non-profit animal rescue organisation. The goal is to raise awareness, encourage pet adoption, drive donations, and recruit volunteers.

The site was designed to be accessible, user-friendly, and optimized for all devices while following modern web standards and SEO best practices.

**Target Audience:** Potential adopters, donors, volunteers, and the general public looking to support animal welfare.

---

## Website Structure
/ (root)
├── index.html          # Home / Landing page
├── about.html          # About Us - Mission & Team
├── services.html       # Adoption, Services & Animals
├── enquiry.html        # Enquiry / Volunteering Form
├── contact.html        # Contact Details & Location
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # Main JavaScript functionality
├── images/             # All site images
├── sitemap.xml         # SEO sitemap
├── robots.txt          # SEO crawler file
└── README.md           # Project documentation


## Features

### Core Pages (Part 1 Foundation)
- **Home (index.html):** Hero banner, mission statement, success stories, FAQ section
- **About Us (about.html):** Organisation history, mission, vision, team members
- **Services (services.html):** Adoption process, available animals, care services
- **Enquiry (enquiry.html):** Volunteer and adoption enquiry forms
- **Contact (contact.html):** Contact form, shelter address, operating hours, embedded map

### Design & Responsiveness
- Mobile-first responsive design using Flexbox and CSS Grid
- Consistent navigation bar and footer across all pages
- Accessible colour contrast and readable typography
- Image optimisation and lazy loading considerations
- Cross-browser compatibility

### JavaScript Interactivity (Part 3)
- **FAQ Accordion:** Interactive FAQ on Home page using vanilla JavaScript
- **Animal Profile Modals:** Click on animal cards in Services to view full details
- **Form Validation:** Real-time client-side validation for all forms (Contact & Enquiry)
- **Interactive Map:** Leaflet.js map integration for shelter location on Contact page
- **Lightbox Gallery:** Image gallery with lightbox view for animal photos
- **Dynamic Footer Year:** JavaScript auto-updates copyright year
- **Smooth Scrolling & UI Enhancements:** Improved user experience interactions

### SEO & Technical Optimisation
- Semantic HTML5 markup (header, nav, main, section, article, footer)
- Meta titles and descriptions on every page
- Alt attributes for all images
- Proper heading hierarchy (h1 - h3)
- `sitemap.xml` and `robots.txt` included
- Optimised file structure for hosting
- Deployed via Netlify with continuous deployment from GitHub

## Technologies Used
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Libraries:** Leaflet.js (for interactive maps), Font Awesome (icons)
- **Version Control:** Git & GitHub
- **Hosting / Deployment:** Netlify (Connected to GitHub repo)
- **Tools:** VS Code, Chrome DevTools

## How to Run Locally
1. Clone the repository:
   `git clone https://github.com/LogansKind/Logan-Fourie-WED5020POE.git`
2. Navigate to project folder
3. Open `index.html` in any modern browser
4. No build steps required - pure HTML/CSS/JS

## Deployment
The site is deployed on Netlify with GitHub integration.
- **Publish Directory:** `Safe Haven Rescue WED5020 POE`
- **Build Command:** None (static site)
- Any push to the `main` branch automatically triggers a redeploy.

Live URL: https://safehavenwedepoe.netlify.app

## Changelog & Development Progress

### Part 1 - Initial Website Proposal & Structure
- Created project proposal for Safe Haven Animal Rescue
- Set up basic 5-page HTML structure
- Created initial CSS stylesheet
- Added placeholder content and images
- Implemented basic navigation
- Initial GitHub repository setup

### Part 2 - Styling, Responsiveness & Content
- Complete CSS redesign and styling
- Implemented full responsiveness for mobile, tablet, desktop
- Added actual content: mission, animal profiles, services
- Created enquiry and contact forms (HTML only)
- Optimised images and added proper folder structure (css/, images/, js/)
- Added meta tags for SEO
- First deployment to Netlify and bug fixes for file paths
- Updated GitHub with improved file organisation

### Part 3 - JavaScript, SEO & Final Deployment
- Fixed deployment issues: corrected publish directory and renamed `Index.html` to `index.html` (lowercase) for Netlify compatibility
- Added full JavaScript functionality:
    - FAQ accordion logic
    - Adoption modal system
    - Contact form validation with error handling
    - Leaflet.js map integration
    - Lightbox functionality
- SEO improvements:
    - Created `sitemap.xml`
    - Created `robots.txt`
    - Improved meta descriptions and keywords
    - Added alt text audit and heading structure fixes
- Updated README with full documentation
- Final testing across devices and browsers
- Set site to public for marking

## Future Improvements
- Backend integration for form submissions
- CMS for staff to update animal profiles
- Donation payment gateway integration
- User accounts for adoption tracking

## References & Acknowledgements

### Academic & Institutional
- IIE Rosebank International - WED5020 Module Manual and Lecture Notes
- IIE ARC - Web Development Learning Materials and POE Guidelines
- Rosebank International - Web Development Study Guides

### Web Development Documentation
- MDN Web Docs - HTML, CSS, JavaScript Documentation (developer.mozilla.org)
- W3Schools - HTML5, CSS3, JavaScript Tutorials and References
- CSS-Tricks - Flexbox and Grid Layout Guides
- JavaScript.info - Modern JavaScript Tutorial

### Libraries & Frameworks
- Leaflet.js - Open-source JavaScript library for interactive maps (leafletjs.com)
- OpenStreetMap - Map data for Leaflet integration
- Font Awesome - Icon library (fontawesome.com)

### Design & Media
- Unsplash.com - Royalty-free animal and shelter images (Educational use)
- Pexels.com - Free stock photos for non-profit concept
- Google Fonts - Typography (Poppins, Open Sans)
- Coolors.co - Colour palette generator for site theme

### Hosting & Tools
- GitHub Docs - Version control and GitHub Pages documentation
- Netlify Docs - Deployment and hosting documentation
- VS Code Documentation - Development environment
- Chrome DevTools - Debugging and responsiveness testing

### Content Inspiration
- ASPCA.org - Structure and content reference for animal rescue messaging
- RSPCA.org.uk - Layout inspiration for adoption process
- TEARS Animal Rescue (South Africa) - Local NPO reference
