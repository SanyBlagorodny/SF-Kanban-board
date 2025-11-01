import React, { useState } from 'react';
import Button from '../UI/button/Button';
import style from '../login/login.module.css';
import { useNavigate } from 'react-router-dom';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [color, setColor] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [agree, setAgree] = useState(false);

  const onRegister = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!login || !firstName || !lastName || !email || !password || !confirm) {
      setError('Заполните все обязательные поля');
      return;
    }
    if (!agree) {
      setError('Необходимо согласие на обработку персональных данных');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Некорректная почта');
      return;
    }
    if (password.length < 6) {
      setError('Пароль должен быть не короче 6 символов');
      return;
    }
    if (password !== confirm) {
      setError('Пароли не совпадают');
      return;
    }
    const user = { login, firstName, lastName, email, color, password };
    localStorage.setItem('user', JSON.stringify(user));
    setMessage('Регистрация выполнена. Перенаправляем на страницу входа...');
    setTimeout(() => navigate('/'), 700);
  };

  return (
    <div className={style.login}>
      <form className={style.form} onSubmit={onRegister}>
        <h1>Регистрация</h1>
        <label>
          Логин:
          <input type='text' placeholder='Придумайте логин' className={style.input} value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <label>
          Имя:
          <input type='text' placeholder='Введите имя' className={style.input} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Фамилия:
          <input type='text' placeholder='Введите фамилию' className={style.input} value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Почта:
          <input type='email' placeholder='Введите вашу почту' className={style.input} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' />
        </label>
        <label>
          Любимый цвет:
          <input type='text' placeholder='Например, фиолетовый' className={style.input} value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <label>
          Пароль:
          <input type='password' placeholder='Придумайте пароль' className={style.input} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='new-password' />
        </label>
        <label>
          Повторите пароль:
          <input type='password' placeholder='Повторите пароль' className={style.input} value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete='new-password' />
        </label>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontWeight: 400 }}>
          <input type='checkbox' checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <span>
            Я даю согласие на обработку персональных данных в соответствии с 
            <a href='https://www.consultant.ru/document/cons_doc_LAW_61801/' target='_blank' rel='noreferrer'>Федеральным законом № 152‑ФЗ</a>.
          </span>
        </label>
        {error && <div style={{ color: '#d33', fontSize: 14, textAlign: 'center' }}>{error}</div>}
        {message && <div style={{ color: '#0b5', fontSize: 14, textAlign: 'center' }}>{message}</div>}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Button className={style.button}>Зарегистрироваться</Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
