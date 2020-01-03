import React from 'react';
import { setNaviTitle } from '../../../redux/navi/navi.action';
import { connect } from 'react-redux';
import './link.styles.scss';
import cakeLogo from '../../../asset/cake-logo.png';
import githubLogo from '../../../asset/github-logo2.png';
import igLogo from '../../../asset/ig-logo.png';


const Links = ({setNaviTitle}) => {
    setNaviTitle('LINK')
    return (
        <div className='link-content'>
            <div className='link-item'>
                <a href='https://www.cakeresume.com/adjustmyself' target='blank'><img className='logo-img' src={cakeLogo} alt='cake-logo' /></a>
                <div className='logo-content'>
                    <a href='https://www.cakeresume.com/adjustmyself' target='blank'>CakeResume</a>
                </div>
            </div>
            <div className='link-item'>
                <a href='https://github.com/adjustmyself' target='blank'><img className='logo-img' src={githubLogo} alt='github-logo' /></a>
                <div className='logo-content'>
                    <a href='https://github.com/adjustmyself' target='blank'>Github</a>
                </div>
            </div>
            <div className='link-item'>
                <a href='https://www.instagram.com/adjustmyself/' target='blank'><img className='logo-img' src={igLogo} alt='ig-logo' /></a>
                <div className='logo-content'>
                    <a href='https://www.instagram.com/adjustmyself/' target='blank'>Instagram</a>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setNaviTitle: title => dispatch(setNaviTitle(title))
})

export default connect(null, mapDispatchToProps)(Links);