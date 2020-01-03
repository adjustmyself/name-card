import React from 'react';
import { setNaviTitle } from '../../../redux/navi/navi.action';
import { connect } from 'react-redux';
import './project.styles.scss';
import projectA from '../../../asset/homePage-reduce.png';

const Projects = ({setNaviTitle}) => {
    setNaviTitle('PROJECT')
    return (
        <div className='project-content'>
            <div className='project-item'>
                <img className='project-img' src={projectA} alt="project" />
                <div className='project-modal'>
                    <span>#REACT #REDUX #REDUX-SAGA #FIREBASE</span>
                    <a href='https://crwn-adjustmyself.herokuapp.com/' target='blank'>＞check out＜</a>
                </div>
                <div className='project-link'>
                    <span>#REACT #REDUX #REDUX-SAGA #FIREBASE</span>
                    <a href='https://crwn-adjustmyself.herokuapp.com/' target='blank'>＞check out＜</a>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setNaviTitle: title => dispatch(setNaviTitle(title))
})

export default connect(null, mapDispatchToProps)(Projects);