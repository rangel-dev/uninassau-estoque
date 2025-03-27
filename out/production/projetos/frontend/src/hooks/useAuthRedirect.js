// hooks/useAuthRedirect.js
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../services/authService";

const useAuthRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated() && location.pathname === "/login") {
      navigate("/dashboard");
    }
  }, [location, navigate]);
};

export default useAuthRedirect;
