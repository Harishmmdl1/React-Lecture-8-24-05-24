import React from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

const Contact = ({username}) => {
  const navigate = useNavigate();

  return username ? (
    <div>
      <h2 className="mt-5" > Hello {username} Welcome to Contact Page.... 📞</h2>
    </div>
  ) : (
    // navigate("/")
    <Navigate to="/" />
  );
}

export default Contact