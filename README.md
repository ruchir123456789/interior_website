# JB Furniture & Interior — Website

A premium, modern, responsive website for **JB Furniture & Interior**, a custom furniture and interior design business based in Pune, Maharashtra.

---

## 🌟 Brand & Visual Identity

- **Design Aesthetic:** Premium • Modern • Minimal • Luxury Interior Design
- **Primary Heading Typography:** *Playfair Display* (Google Fonts serif)
- **Body Typography:** *Montserrat* (Google Fonts sans-serif)
- **Color Palette:**
  - **Deep Black (`#0B0B0B`):** Main background, navbar, footer, and premium luxury sections
  - **Rich Black (`#151515`):** Secondary dark sections and cards
  - **Warm Gold (`#C99A4A`):** Primary brand accent, buttons, highlights, decorative elements
  - **Light Gold (`#E1BD73`):** Hover states, highlights, and secondary accents
  - **Metallic Silver (`#C9C9C9`):** Secondary typography, monogram details
  - **Soft White (`#F8F8F8`):** Main text and high-contrast accents
  - **Border Grey (`#2A2A2A`):** Subtle architectural borders

---

## 📂 Project Structure

```
jb-furniture-interior/
│
├── index.html              # Home page
├── services.html           # In-depth Services page (6 core offerings)
├── about.html              # Story, Philosophy (3 Pillars), Founder (Abdullah), Service Area
├── contact.html            # Contact info, consultation form & WhatsApp generator
│
├── css/
│   └── style.css           # Design tokens, responsive utilities, luxury styling
│
├── js/
│   └── script.js           # Navigation, scroll animations, gallery filter, form validation
│
├── assets/
│   ├── images/             # Custom SVG brand logo & realistic interior photography
│   └── icons/              # Crisp SVG service and contact icons
│
└── README.md
```

---

## 🛠️ Technology Stack

- **HTML5:** Semantic, accessible markup with comprehensive SEO tags
- **CSS3:** Vanilla CSS with custom properties (CSS variables), flexbox, grid, and fluid typography
- **JavaScript:** Pure Vanilla JS (zero external dependencies/libraries)

---

## ⚙️ Client Customization & Configuration

### 1. WhatsApp Number & Message
In `js/script.js`, edit the `CONFIG` object:
```javascript
const CONFIG = {
  whatsappNumber: "919876543210", // Set client WhatsApp number (country code + number)
  instagramHandle: "jb_furniture_interior_pune",
  instagramUrl: "https://www.instagram.com/jb_furniture_interior_pune/",
  defaultWhatsAppMsg: "Hello JB Furniture & Interior, I would like to discuss a furniture/interior project in Pune."
};
```

### 2. Updating Contact Placeholders
Search and update the following placeholders in `index.html`, `services.html`, `about.html`, and `contact.html` once confirmed with the client:
- `[PHONE NUMBER]`
- `[WHATSAPP NUMBER]`
- `[EMAIL ADDRESS]`

### 3. Google Maps Embed
In `contact.html`, update the `<iframe>` `src` attribute in `#location-map` with the client's verified Google Maps embed URL.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or serve it locally using any static file server:

```bash
# Using Python
python -m http.server 3000

# Using Node.js (npx)
npx serve .
```
