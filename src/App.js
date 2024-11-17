/* eslint-disable react-hooks/rules-of-hooks */
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import Weather from "./components/Weather";
import { ProtectecdRoute } from './components/ProtectecdRoute';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const showToast = (text) => {
    toast(text);
  };
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route exact path="/weather" element={<ProtectecdRoute Component={Weather} />} />
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login showToast={showToast} />} />
      </Routes></>
  );
}

export default App;
