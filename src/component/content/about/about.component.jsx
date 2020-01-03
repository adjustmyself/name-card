import React from 'react';
import { setNaviTitle } from '../../../redux/navi/navi.action';
import { connect } from 'react-redux';
import './about.styles.scss';
import personalImg from '../../../asset/personal-2.png';

const About = ({setNaviTitle}) => {
    setNaviTitle('ABOUT')
    return (
        <div className='about-content'>
            <div className='about-img'>
                <img className='personalImag' src={personalImg} alt='personal' />
            </div>
            <div className='about'>
                <div className='about-A about-styles'>
                    <span>2010年畢業於弘光科技大學資訊管理系</span>
                    <span>當了2年CNC技術員、3年業務</span>
                    <span>現在朝全端程式設計師努力...</span>
                </div>
                <div className='about-B about-styles'>
                    <span>利用網路資源自學REACT以及NODE.JS</span>
                    <span>實作了一個購物網站</span>
                    <span>目前想實作訂房網站</span>
                </div>
                <div className='about-C about-styles'>
                    <span>未來計畫使用GATSBY.JS記錄學習</span>
                    <span>想學得太多了</span>
                    <span>都試試看吧!</span>
                </div>
            </div>

        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setNaviTitle: title => dispatch(setNaviTitle(title))
})

export default connect(null, mapDispatchToProps)(About);