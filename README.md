# Code Sphere 💻

**Code Sphere** is a modern, feature-rich online Integrated Development Environment (IDE) designed to simplify coding and collaboration. With support for multiple programming languages, customizable themes, and smart functionalities, it provides a seamless coding experience for developers of all levels. Whether you're working solo or collaborating with a team, Code Sphere offers a reliable platform to write, run, and debug code in real-time.

---

## 🌟 Highlights  



### 💻 Multi-Language IDE

Write, run, and debug code seamlessly in 10+ programming languages, with real-time feedback for error handling and successful execution.



### 🎨 Personalized Themes

Choose from **5 handcrafted themes** inspired by VSCode to suit your unique coding style.



### ⚖️ Flexible Pricing Plans

Access powerful tools with a **Free Plan**, or unlock advanced workflows, including webhook support, with the **Pro Plan**.


### 🤝 Team Collaboration Tools

- **Live Code Sharing**: Share snippets instantly to streamline teamwork.
- **Execution History Tracking**: Review and analyze your previous runs effortlessly.
- **Enhanced Search and Filtering**: Improve code discoverability by up to **60%**.


 ### 🔎 Live Code Preview
Get instant feedback by seeing **live previews** of your code, bridging the gap between ideation and execution.
  


### 📊 Statistics Dashboard
Gain insights with **detailed execution metrics** and performance trends.  




### 👤 Personal Profiles
  Maintain a profile with **history tracking** and saved customizations.  


### ⚙️ Developer-Friendly Controls 
  Adjust font sizes and workspace preferences for a tailored experience.

 ---

## 🔧 Built With Cutting-Edge Technologies

### **Frontend**
- **Next.js**: A React-based framework used for building server-side rendered and statically generated web applications. It is the backbone of the frontend and handles routing, page rendering, and API routes.
- **React**: A JavaScript library for building user interfaces, enabling efficient and declarative view updates.
- **Tailwind CSS**: A utility-first CSS framework used to style the components of the app. It allows for highly customizable and responsive layouts.
- **Framer Motion**: A React library for animations that is used to add smooth and interactive transitions in the UI.
- **Lucide React**: Provides a set of customizable icons to enhance the user interface.
- **React-Syntax-Highlighter**: A syntax highlighting library for displaying source code in a user-friendly way.



### **Backend**
- **Convex**: A serverless platform used to manage real-time data and API interactions. Convex handles the backend logic, including user authentication, real-time updates, and database management.
- **Clerk**: A user authentication service integrated into the app to manage sign-ups, log-ins, and user sessions. Clerk simplifies user authentication and authorization by offering built-in solutions for handling sensitive data securely.



### **APIs**
- **Piston**: An API that allows the execution of code in multiple programming languages on the backend. Code is sent to Piston servers, executed in a sandboxed environment, and the results are returned to the user in real time.
- **Svix**: Used for managing webhooks and handling real-time events like code execution results, notifications, and error handling. This API allows the app to send and receive events efficiently.



### **Development Tools**
- **TypeScript**: A superset of JavaScript that adds type safety to the codebase, making it easier to write scalable and maintainable code.

---


## 🚀 How to Get Started

### **Prerequisites**

Before setting up Code Sphere locally, ensure the following:

- **Node.js**: Install **Node.js** and **npm**.
- **Convex CLI**: Install **Convex CLI**:

```bash
npm install -g convex
```


## Installation Steps



### Set Up Environment Variables

1)Create a `.env` file in the project root directory and add the following keys:

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
4)Run the App Locally
Start the development server:
```bash
npm run dev
```
5)Access Your Local Instance
Open your browser and navigate to http://localhost:3000 to start coding!

---

## 🙌 Why Choose Code Sphere?



 All-in-One Platform
 From writing and debugging to collaboration and live previews, Code Sphere provides everything you need under one roof.

---

Developer-Focused Design
Every feature is crafted to enhance productivity, streamline workflows, and inspire creativity.

---

 Scalable Solutions
 Suitable for individuals, startups, and large-scale enterprises alike.

---

## 🚀 Deployment   

Check out the live deployment here: [Vercel Deployment](https://code-editor-sooty-zeta.vercel.app/)  



---

We're excited to have you dive into **Code Sphere**!
Let’s break new ground and redefine the future of coding and collaboration together. 🚀


