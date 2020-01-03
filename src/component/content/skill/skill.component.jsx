import React from 'react';
import './skill.styles.scss';
import { setNaviTitle } from '../../../redux/navi/navi.action';
import { connect } from 'react-redux';

const Skills = ({setNaviTitle}) => {
    setNaviTitle('SKILL')
    return (
        <div className='skill-content'>
            <div className='skill-partA'>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>NODE.JS</li>
                </ul>
            </div>
            <div className='skill-partB'>
                <ul>
                    <li>JAVA</li>
                    <li>PYTHON</li>
                    <li>PHP</li>
                    <li>MYSQL</li>
                    <li>MONGODB</li>
                </ul>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setNaviTitle: title => dispatch(setNaviTitle(title))
})

export default connect(null, mapDispatchToProps)(Skills);