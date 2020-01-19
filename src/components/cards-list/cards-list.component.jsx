import React from 'react';

import Todos from '../todos/todos.component'
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


import './cards-list.styles.scss';

const CardList = ({list})=> {
    // console.log({})
    return (
      <div className="center">
      <ul>
      {list.map(( todo, index, currentUser)=><Todos key={index} title={todo.title} text={todo.text} date={todo.date} currentUser={currentUser} />)}
      </ul>

      </div>
    )
}

export default CardList