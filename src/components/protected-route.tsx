import React, { ReactNode } from "react"
import { auth } from "../firebase"
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({children}) => {

  const user = auth.currentUser;
  
  if(user === null) {
    return <Navigate to={"/login"}/>
  }

  return children
}

export default ProtectedRoute