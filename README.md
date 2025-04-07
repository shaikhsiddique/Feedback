# 📝 Feedback Portal

A simple and responsive feedback portal built with **React.js**, allowing users to submit feedback and admins to view all submissions after login.

## 🔧 Features

- 💬 Feedback submission form
- 🔐 Admin login authentication
- 📋 View submitted feedbacks (admin only)
- 📆 Displays current date in the footer
- ⚡ Smooth transitions using GSAP
- 📱 Responsive and mobile-friendly UI

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Animations**: GSAP
- **HTTP Requests**: Axios
- **Authentication**: Token-based auth using `Auth-Token`

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

## 🧪 How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/feedback-portal.git
   cd feedback-portal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` in your browser.

## 🔐 Admin Access

To view feedbacks, an admin must log in using a valid token saved in `localStorage` under the key `Auth-Token`.

## ✍️ Author

Developed with ❤️ by **Siddique Shaikh**  
[GitHub](https://github.com/shaikhsiddique) | [LinkedIn](https://linkedin.com/in/shaikhsiddique)

## 📄 License

This project is licensed under the MIT License.