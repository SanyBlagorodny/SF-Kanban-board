import React from 'react';
import { Link } from 'react-router-dom';
import style from './task.module.css'

const Task = ({ children, id }) => {

  return (
    <Link to={`task${id}`} className={style.link}>
      {children}
    </Link >
  );
}

export default Task;
