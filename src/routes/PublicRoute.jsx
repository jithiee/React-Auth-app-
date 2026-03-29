import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default PublicRoute;


