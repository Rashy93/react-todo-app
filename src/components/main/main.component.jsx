import React from 'react';
// import { Link } from 'react-router-dom';

// import { auth } from '../../firebase/firebase.utils';
import CardsList from '../cards-list/cards-list.component'
import './main.styles.scss';

const Main = ({list}) => (
        <div className="main">
            <CardsList list={list} />
        </div>
)

export default Main;