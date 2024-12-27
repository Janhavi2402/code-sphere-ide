# Code Sphere 💻💻 

**Code Sphere** is a modern, feature-rich online Integrated Development Environment (IDE) designed to simplify coding and collaboration. With support for multiple programming languages, customizable themes, and smart functionalities, it provides a seamless coding experience for developers of all levels.

---

## 🌟 Key Features  

- **💻 Multi-Language IDE**  
  Supports **10 programming languages** with smart output handling for success and error states.  

- **🎨 Customizable Themes**  
  Offers **5 VSCode-inspired themes** to personalize your coding experience.  

- **🔗 Flexible Plans**  
  Integrated **Free** and **Pro** plans with webhook support for advanced workflows.  

- **🤝 Collaboration Tools**  
  - Code sharing to streamline teamwork.  
  - Execution history tracking to review past runs.  
  - Advanced filtering and search, improving discoverability by **60%**.  

- **👤 Personal Profiles**  
  Maintain a profile with **history tracking** and saved customizations.  

- **⚙️ Developer-Friendly Controls**  
  Adjust font sizes and workspace preferences for a tailored experience.  

---

## 🛠️ Tech Stack  

- **Frontend:** Next.js 15  
- **Backend:** Convex  
- **Authentication:** Clerk  
- **Programming Language:** TypeScript  

---



## 🚀 Deployment   

Check out the live deployment here: [Vercel Deployment](https://code-editor-sooty-zeta.vercel.app/)  

---
## ⚡ Installation and Setup

Follow these steps to set up Code Sphere on your local machine:

### Prerequisites  

Install Node.js and npm: Node.js Installation Guide

Install Convex CLI:
```bash
npm install -g convex
```

### Setup
1)Setup Environment Variables
Create a .env file in the root directory and add the following variables:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```


2)Add these environment variables to the Convex Dashboard:
```bash
CLERK_WEBHOOK_SECRET=
LEMON_SQUEEZY_WEBHOOK_SECRET=
```

3)Install Dependencies

Run the following command to install project dependencies:
```bash
npm install
```
Run the App Locally
Start the development server:
```bash
npm run dev
```

---


## 📊 Future Enhancements

* Expand programming language support to include 20+ languages.

* Add multilingual support to cater to developers worldwide.

* Introduce real-time collaborative editing for teams.

* Enhance AI-powered assistance for code completion and documentation.

---

Thank you for exploring **Code Sphere**! Together, let’s revolutionize the way developers code and collaborate. 🚀

