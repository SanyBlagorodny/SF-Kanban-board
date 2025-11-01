import React from 'react';
import Add from '../add/Add';
import Task from '../task/Task';
import style from './board.module.css';

const Board = ({ state, ...props }) => {
  const titles = {
    'Backlog': 'Задачи',
    'Ready': 'Готово',
    'In Progress': 'В работе',
    'Finished': 'Сделано',
  };
  return (
    <>
      {state.map(item =>
        <div key={item.title} className={style.board}>
          <h2> {titles[item.title] || item.title} </h2>
          {item.tasks.length
            ? item.tasks.map(item =>
              <Task key={item.id} id={item.id}>
                {item.task}
              </Task>
            )
            : <div className={style.missing}>нет задач</div>
          }
          <Add
            alt='+ добавить карточку'
            title={item.title}
            tasks={item.tasks}
            state={state}
            setState={props.setState}
          > добавить карточку </Add>
        </div>
      )}
    </>
  );
}

export default Board;
