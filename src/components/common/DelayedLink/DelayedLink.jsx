import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For React Router

const DelayedLink = ({ to, delay, children }) => {
  const [startTransition, setStartTransition] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (startTransition) {
      const timer = setTimeout(() => {
        navigate(to);
      }, delay);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [startTransition, to, delay, navigate]);

  const handleClick = (e) => {
    e.preventDefault();
    setStartTransition(true);
  };

  return (
    <a href={to} onClick={handleClick}>{ children }</a>
  );
};

export default DelayedLink;
