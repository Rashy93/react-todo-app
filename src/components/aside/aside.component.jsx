import React from 'react';
// import { Link } from 'react-router-dom';
// import { auth } from '../../firebase/firebase.utils';
import TodoForm from '../todo-form/todo-form.component'
import './aside.styles.scss';

const Aside = () => (
        <div className="aside">
            <TodoForm />
        </div>
)

export default Aside;