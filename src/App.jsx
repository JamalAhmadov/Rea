import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Header } from './Components/Header';
import { Service } from './Pages/Service';
import Modal from './Components/Modal/Modal';
import { useSelector } from 'react-redux';
import { Footer } from './Components/Footer';

function App() {

  const { isOpen } = useSelector((store) => store.modal)

  const addUser = () => {
    let loggedInUser = "Jamal";
    localStorage.setItem('loggedInUser', loggedInUser);
  };

  return (
    <>
      {isOpen && <Modal />}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
