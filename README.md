# Code Sphere 💻💻 

**Code Sphere** is a modern, feature-rich online Integrated Development Environment (IDE) designed to simplify coding and collaboration. With support for multiple programming languages, customizable themes, and smart functionalities, it provides a seamless coding experience for developers of all levels. Whether you're working solo or collaborating with a team, Code Sphere offers a reliable platform to write, run, and debug code in real-time.

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
 
-  **💻 Live Preview**
  Get instant feedback by seeing live previews of your code.

- **📊 Statistics Dashboard**  
  Gain insights with **detailed execution metrics** and performance trends.  


- **👤 Personal Profiles**  
  Maintain a profile with **history tracking** and saved customizations.  

- **⚙️ Developer-Friendly Controls**  
  Adjust font sizes and workspace preferences for a tailored experience.

  

---

## 🛠️ Tech Stack

### Frontend:
- **Next.js**: A React-based framework used for building server-side rendered and statically generated web applications. It is the backbone of the frontend and handles routing, page rendering, and API routes.
- **React**: A JavaScript library for building user interfaces, enabling efficient and declarative view updates.
- **Tailwind CSS**: A utility-first CSS framework used to style the components of the app. It allows for highly customizable and responsive layouts.
- **Framer Motion**: A React library for animations that is used to add smooth and interactive transitions in the UI.
- **Lucide React**: Provides a set of customizable icons to enhance the user interface.
- **React-Syntax-Highlighter**: A syntax highlighting library for displaying source code in a user-friendly way.

### Backend:
- **Convex**: A serverless platform used to manage real-time data and API interactions. Convex handles the backend logic, including user authentication, real-time updates, and database management.
- **Clerk**: A user authentication service integrated into the app to manage sign-ups, log-ins, and user sessions. Clerk simplifies user authentication and authorization by offering built-in solutions for handling sensitive data securely.

### APIs:
- **Piston**: An API that allows the execution of code in multiple programming languages on the backend. Code is sent to Piston servers, executed in a sandboxed environment, and the results are returned to the user in real time.
- **Svix**: Used for managing webhooks and handling real-time events like code execution results, notifications, and error handling. This API allows the app to send and receive events efficiently.

### Development Tools:
- **TypeScript**: A superset of JavaScript that adds type safety to the codebase, making it easier to write scalable and maintainable code.

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

