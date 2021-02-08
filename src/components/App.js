import React, {useState} from 'react';
import AppRouter from "components/Router";
import {authService} from "myBase";

const App = () => {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  )
}

export default App;