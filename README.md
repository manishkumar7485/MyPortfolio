# Manish Kumar — Personal Portfolio

A modern, responsive personal portfolio website built with **React.js** and **Vite**. The project presents Manish Kumar's profile, technical skills, education, experience, projects, blogs, certificates, testimonials, and contact information in a clean dark-themed interface.

## 🌐 Portfolio Overview

This portfolio is designed for a **Java Full Stack Developer** and highlights:

- Professional profile and introduction
- Technical skills
- Education and academic background
- Internship and development experience
- Web and desktop projects
- Blog section
- Testimonials
- Certificates section
- Contact information and contact form
- Responsive design for desktop, tablet, and mobile devices

---

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

### UI / Icons
- Custom responsive CSS
- CSS gradients and animations
- Lucide React icons
- Google Fonts — Poppins

### Other
- Google Maps Embed
- Git/GitHub
- Responsive Web Design

---

## 📁 Project Structure

```text
manish-portfolio-react/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── profile.jpg
│   │   ├── logo2.jpg
│   │   ├── project images
│   │   ├── blog images
│   │   ├── testimonial images
│   │   └── icon images
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## ✨ Main Features

### 1. About Me

The About section introduces the developer and displays the services currently offered:

- Web Design
- Web Development
- Desktop Applications

It also includes a testimonial section with interactive testimonial cards.

### 2. Resume

The Resume section contains:

- Education
- Academic qualifications
- Professional experience
- Internship experience
- Technical skills
- Skill percentage indicators

The section also provides a link to view the resume online.

### 3. Portfolio

The Portfolio section displays completed projects with categories.

Available filters:

- All
- Web Design
- Applications
- Web Development

The project images include hover effects for a more interactive experience.

### 4. Blog

The Blog section contains blog cards with:

- Blog title
- Category
- Publication date
- Description
- Featured image

### 5. Certificate

A dedicated Certificate section is included and can be expanded with certificate cards or downloadable certificates in the future.

### 6. Contact

The Contact section contains:

- Google Maps location
- Full name field
- Email field
- Message field
- Form validation
- Send Message button

The current form performs client-side validation. A backend or Web3Forms integration can be added for real email delivery.

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm

Check your versions:

```bash
node -v
npm -v
```

---

## 📦 Installation

Clone the project or extract the ZIP file.

Open the project folder in the terminal:

```bash
cd manish-portfolio-react
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Development Server

Start the development server:

```bash
npm run dev
```

Vite will display a local URL similar to:

```text
http://localhost:5173/
```

Open the URL in your browser.

---

## 🏗️ Create Production Build

To create an optimized production build:

```bash
npm run build
```

The generated files will be available inside:

```text
dist/
```

---

## 👀 Preview Production Build

After creating the build:

```bash
npm run preview
```

---

## 🧭 Navigation

The portfolio uses hash-based navigation:

```text
#/about
#/resume
#/portfolio
#/blog
#/certificate
#/contact
```

This approach allows the application to work easily with static hosting platforms such as GitHub Pages.

---

## 📱 Responsive Design

The application is responsive and supports:

- Desktop screens
- Laptop screens
- Tablets
- Mobile phones

Responsive breakpoints are implemented in:

```text
src/styles.css
```

The layout automatically changes from a two-column desktop layout to a mobile-friendly single-column layout.

---

## 🖼️ Assets

The original portfolio assets have been retained in:

```text
src/assets/
```

These include:

- Profile image
- Logo
- Project screenshots
- Blog images
- Testimonial images
- Service icons

When adding new images, place them inside `src/assets/` and reference them using:

```jsx
const A = "/src/assets/";
```

Example:

```jsx
<img src={A + "project.png"} alt="Project" />
```

---

## 📧 Contact Form

The current contact form includes frontend validation.

For production email delivery, connect it to one of the following:

- Web3Forms
- Formspree
- EmailJS
- Custom Node.js/Express backend
- Any REST API/email service

Do not expose private API keys or email-service secrets directly in frontend source code.

---

## 🌍 Google Maps

The Contact page currently uses a Google Maps embedded iframe.

The location can be changed by updating the URL inside the Contact component.

---

## 🔧 Customization

### Change Profile Information

Edit:

```text
src/App.jsx
```

Update:

- Name
- Job title
- Email
- Phone
- Birthday
- Location
- Social media links

### Change Colors

Main colors are defined at the top of:

```text
src/styles.css
```

For example:

```css
:root {
  --gold: hsl(45, 100%, 72%);
  --black: hsl(0, 0%, 7%);
  --panel: hsl(240, 2%, 12%);
}
```

### Add a New Project

Add a new project to the `projects` array in:

```text
src/App.jsx
```

Example:

```jsx
[
  "My New Project",
  "Web development",
  "new-project.png"
]
```

Then place the image inside:

```text
src/assets/
```

---

## 📌 Future Improvements

The following features can be added later:

- Real contact form email delivery
- Downloadable PDF resume
- Dynamic certificate gallery
- Project details pages
- Project GitHub links
- Live project links
- Dark/light theme switcher
- SEO optimization
- Google Analytics
- Backend API
- Admin dashboard
- CMS-based blog management
- Deployment automation using GitHub Actions

---

## 🚢 Deployment

The project can be deployed to:

- GitHub Pages
- Vercel
- Netlify
- Render
- Firebase Hosting
- Any static hosting service

For GitHub Pages, configure the Vite base path according to the repository name and use a suitable deployment workflow.

---

## 👨‍💻 Developer

**Manish Kumar**

Java Full Stack Developer

### Areas of Interest

- Java
- Spring Boot
- JSP / Servlets
- JDBC
- MySQL / SQL
- React.js
- JavaScript
- Node.js
- MongoDB
- Web Development
- Full Stack Development

---

## 📄 License

This portfolio is intended for personal and professional use by Manish Kumar.

You may modify the source code for your own development and learning purposes.

---

## ⭐ Acknowledgement

This project was created as a React-based conversion of the original Manish Kumar portfolio website, preserving the original portfolio content and visual identity while providing a modern component-based React structure.
