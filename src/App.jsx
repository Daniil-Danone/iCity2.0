import React, { useEffect, useState } from 'react'
import { AuthContext } from './context';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import EventsPage from './pages/EventsPage';
import MapPage from './pages/MapPage';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem('isLogin')) {
      setIsLogin(true);
    }
  }, [isLogin, user])

  return (
    <AuthContext.Provider value={{
      isLogin, setIsLogin, user, setUser
    }}>
      <Routes>
        <Route path='/' element={<IndexPage/>}></Route>
        <Route path='/map' element={<MapPage/>}></Route>
        <Route path='/events' element={<EventsPage/>}></Route>
      </Routes>
    </AuthContext.Provider>
  )
}

export default App;
