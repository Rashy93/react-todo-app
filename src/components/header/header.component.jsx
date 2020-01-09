import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';


import { ReactComponent as Logo } from '../../assets/publisher.svg'
import { ReactComponent as Icon } from '../../assets/sign-out.svg'

import './header.component.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
    <ul className="sideNav">
        <div className='logo-container' >
            <Logo className='logo' to='/' />
            <Icon className='signout-icon' onClick={() => auth.signOut()} />

        </div>

        <div className='options'>
                {currentUser ? (
                    <h3 className='option'>
                        Welcome back {currentUser.displayName}
                    </h3>
                ) : (
                    <div></div>
                )}
                <div className="navList">
                    <Link className='option' to='/archive'>
                    ARCHIVE
                    </Link>
                    <Link className='option' to='/contact'>
                        CONTACT
                    </Link>
                </div>

                </div>

            </ul>

        </div>
    
);

export default Header;