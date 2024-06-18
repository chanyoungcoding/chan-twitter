import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CreateAccount from "./routes/create-account"
import styled, { createGlobalStyle } from "styled-components"
import { useEffect, useState } from "react"
import reset from "styled-reset"

import Layout from "./components/layout"
import Profile from "./routes/profile"
import Login from "./routes/login"
import Home from "./routes/home"

import LoadingScreen from "./components/loading-screen"
import { auth } from "./firebase";
import ProtectedRoute from "./components/protected-route"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout/>
        </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home/>
      },

      {
        path: "profile",
        element: <Profile/>
      }
    ]
  },

  {
    path: "/login",
    element: <Login/>
  },

  {
    path: "/create-account",
    element: <CreateAccount/>
  }
])

function App() {

  const [loading, setLoading] = useState(false);

  const init = async () => {
    // firebase
    await auth.authStateReady();
    setLoading(true);
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <Wrapper>
      <GlobalStyles/>
      {loading ? <RouterProvider router={router}/> : <LoadingScreen/>}
    </Wrapper>
  )
}

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, 
    -apple-system, BlinkMacSystemFont, 
    'Segoe UI', 
    Roboto, 
    Oxygen, 
    Ubuntu, 
    Cantarell, 
    'Open Sans', 
    'Helvetica Neue', 
    sans-serif;
  }
  ::-webkit-scrollbar {
    display:none;
  }
`

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default App
