import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import {authService} from "myBase";

function App() {
  //초기화가 됐는지 안됐는지 알려주는 state이다.
  const [init, setInit] = useState(false);
  // 로그인이 됐는지 안됐는지 알려주는 state이다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
      }else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  },[])
  return (
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn}/>: "Initializing..."}
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;