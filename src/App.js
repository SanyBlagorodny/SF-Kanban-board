import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Account from './components/account/Account';
import InsideTask from './components/insideTask/InsideTask';
import Login from './components/login/Login';
import Register from './components/register/Register';
import NoPage from './components/NoPage/NoPage';
import './App.css';
import { AuthContext } from "./context";
import Loader from "./components/UI/loader/Loader";
import { I18nContext, translations } from './i18n';
import LanguageSelect from './components/lang/LanguageSelect';

function App() {
  const [state, setState] = useState([
    {
      title: 'Backlog',
      tasks: [],
    },
    {
      title: 'Ready', tasks: [],
    },
    {
      title: 'In Progress', tasks: [],
    },
    {
      title: 'Finished', tasks: [],
    }
  ]);

  useEffect(() => {
    try {
      const tasks = localStorage.getItem('state');
      if (tasks) {
        const parsed = JSON.parse(tasks);
        if (Array.isArray(parsed)) {
          setState(parsed);
        }
      }
    } catch (e) {
      localStorage.removeItem('state');
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state))
  }, [state]);

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [lang, setLang] = useState('ru');
  const t = (key) => {
    const dict = translations[lang] || translations.ru;
    const parts = key.split('.');
    return parts.reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), dict) ?? key;
  };
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    const savedLang = localStorage.getItem('lang');
    if (savedLang) setLang(savedLang);
    setLoading(false);
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <I18nContext.Provider value={{ lang, setLang: (l)=>{ localStorage.setItem('lang', l); setLang(l); }, t }}>
        <Router>
          <Routes>
          {isAuth
            ? <Route path='/' element={<Header />}>
              <Route index element={<Account />} />
              <Route path='tasks' element={<Main state={state} setState={setState} />} />
              <Route path='tasks/task/:id' element={<InsideTask state={state} setState={setState} />} />

              <Route path='*' element={<NoPage />} />
            </Route>
            : <>
                <Route path="/" element={<LanguageSelect />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='*' element={<NoPage />} />
              </>
          }
          </Routes>
        </Router>
      </I18nContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
