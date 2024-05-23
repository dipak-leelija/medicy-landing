import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading time
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 1 seconds
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        // Display React Bootstrap Spinner while loading
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Spinner animation="border" variant="primary" style={{ width: '5rem', height: '5rem' }} role="status">
            <span className="sr-only"></span>
          </Spinner>
        </div>
      ) : (
        // Once loading is finished, display MeetSchedule component
        <MeetSchedule />
      )}
    </div>
  );
}

function MeetSchedule() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      viewport={{ once: true }}
      className="container my-5">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/roodro-leelija/product-demo"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </motion.div>
  );
}
