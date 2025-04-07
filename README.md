
# 📝 Feedback Portal

A simple and responsive feedback portal built with **React.js**, allowing users to submit feedback and admins to view all submissions after login.

🔗 **Live**: [https://grand-snickerdoodle-883958.netlify.app/](https://beautiful-truffle-42eb7b.netlify.app/)  
📂 **GitHub**: [https://github.com/shaikhsiddique/Feedback](https://github.com/shaikhsiddique/Feedback)

---

## 🔧 Features

- 💬 Feedback submission form  
- 🔐 Admin login authentication  
- 📋 View submitted feedbacks (admin only)  
- 📆 Displays current date in the footer  
- ⚡ Smooth transitions using **GSAP**  
- 📱 Fully responsive and mobile-friendly UI  

---

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **Animations**: GSAP  
- **HTTP Requests**: Axios  
- **Authentication**: Token-based auth using `Auth-Token`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── FeedbackForm.jsx
│   ├── Feedbacks.jsx
│   └── Login.jsx
├── config/
│   └── axios.js
├── App.js
└── index.js
```

---

## 🧪 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/shaikhsiddique/Feedback.git
   cd Feedback
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Admin Access

To view submitted feedbacks, login as admin:

- **Email**: `admin@gmail.com`  
- **Password**: `admin@feed`  

🔑 On successful login, a token is stored in `localStorage` under the key `Auth-Token`.

---

## ✍️ Author

Developed with ❤️ by **Siddique Shaikh**  
[GitHub](https://github.com/shaikhsiddique) | [LinkedIn](https://www.linkedin.com/in/shaikhsiddique)

---

## 📄 License

This project is licensed under the **MIT License**.
