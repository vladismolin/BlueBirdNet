import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';


const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"></img>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <NavLink to='/login'>
                        {props.login === 'Vlad_Smolin' ? 'Maria Kolos' : props.login}
                    </NavLink>
                    : <NavLink to='/login'>
                        Login
                    </NavLink>}
            </div>
        </header>
    );
}

export default Header;
