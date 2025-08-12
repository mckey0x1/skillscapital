# SkillsCapital Homepage

This project implements the **SkillsCapital homepage** with a **modular component-based architecture** using **React** and **Tailwind CSS** for styling. Each section of the page is separated into reusable components, making the codebase **clean, maintainable, and scalable**.

## 📂 Project Structure

The homepage is built by **dividing the layout into independent components**, each responsible for a specific section or functionality.  
These components are then **combined** in the main `Home` component to create the complete structured UI.

### **Key Components**
1. **HeroSection** – The main landing area with a headline and call-to-action.
2. **AboutSection** – Brief introduction about SkillsCapital.
3. **ServicesSection** – List of services offered, styled with cards.
4. **CertificationsVettingHorizontalAlternate** –  
   - Displays certifications in a **timeline-like horizontal layout** on larger screens.  
   - Automatically switches to a **vertical stacked layout** on mobile for better readability.
5. **Testimonials** – Client feedback and reviews.
6. **Footer** – Company details, links, and copyright.

### **Styling**
- **Tailwind CSS** is used for utility-first styling.
- Responsive breakpoints ensure **mobile-first** adaptability.
- Predefined gradients, colors, and spacing for brand consistency.

### **Responsive Design Features**
- **Horizontal to Vertical Transformation** – Example: Certifications section changes layout for small devices.
- **Adaptive Text Sizes & Gaps** – Typography and spacing adjust according to screen size.

## 🚀 How to Run
```bash
# Clone repository
git clone https://github.com/your-username/skillscapital.git

# Go to project directory
cd skillscapital

# Install dependencies
npm install

# Start development server
npm run dev
