import React from 'react';
import './home.styles.scss';
import { Link } from 'react-router-dom';

const HomePage = ({setNaviTitle}) => (
    <>
        <div className='navigation-left'>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
                <li>
                    <Link to='/skill'>SKILL</Link>
                </li>
                <li>
                    <Link to='/project'>PROJECT</Link>
                </li>
                <li>
                    <Link to='/link'>LINK</Link>
                </li>
            </ul>
        </div>
        <div className='navigation-top'>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
                <li>
                    <Link to='/skill'>SKILL</Link>
                </li>
                <li>
                    <Link to='/project'>PROJECT</Link>
                </li>
                <li>
                    <Link to='/link'>LINK</Link>
                </li>
            </ul>
        </div>
    </>
);



export default HomePage;