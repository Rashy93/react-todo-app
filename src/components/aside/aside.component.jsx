import React from 'react';
// import { Link } from 'react-router-dom';
// import { auth } from '../../firebase/firebase.utils';
import TodoForm from '../todo-form/todo-form.component'

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './aside.styles.scss';

const Aside = ({ handleOnClick }) => (
  <div className="aside">
  <TodoForm handleOnClick={handleOnClick}  />

  </div>
)
export default Aside;

