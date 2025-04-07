import React, { useState, useEffect } from 'react';
import axios from '../config/axios';

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('/feedback/')
      .then((res) => {
        console.log(res.data);
        setFeedbacks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError('Error fetching feedbacks');
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Feedbacks</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {feedbacks.map((feedback) => (
            <div key={feedback._id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{feedback.fullName}</h3>
              <p className="text-gray-600 mb-2">{feedback.email}</p>
              <p className="text-gray-800 mb-2">{feedback.message}</p>
              <p className="text-gray-500 text-sm">
                Created: {new Date(feedback.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Feedbacks;
