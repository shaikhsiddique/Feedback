import React, { useState, useRef, useEffect } from 'react';
import axios from './config/axios';
import gsap from 'gsap';
import FeedbackForm from './components/FeedbackForm';
import Login from './components/Login';
import Feedbacks from './components/Feedbacks';

function App() {
  const [view, setView] = useState('form');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const currentDate = new Date().toLocaleDateString();

  const handleViewFeedbacks = () => {
    const token = localStorage.getItem('Auth-Token');
    if (!token) {
      setView('login');
      return;
    }
    setLoading(true);
    axios
      .get('/admin/', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
        setView('feedbacks');
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setView('login');
      });
  };

  useEffect(() => {
    if (view !== 'form' && containerRef.current) {
      gsap.fromTo(containerRef.current, { y: '100%' }, { y: 0, duration: 0.5 });
    }
  }, [view]);

  return (
    <div className="flex flex-col min-h-screen justify-between relative bg-white text-black transition-colors duration-300">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Feedback Portal</h1>
      </div>

      <div ref={containerRef} className="flex-grow">
        {view === 'form' && <FeedbackForm setView={setView} />}
        {view === 'login' && <Login setView={setView} />}
        {view === 'feedbacks' && <Feedbacks />}
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p className="mb-2">Today's Date: {currentDate}</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
            onClick={handleViewFeedbacks}
          >
            View Feedbacks
          </button>
        )}
      </footer>
    </div>
  );
}

export default App;
