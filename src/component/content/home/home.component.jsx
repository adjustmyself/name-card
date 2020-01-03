import React from 'react';
import { setNaviTitle } from '../../../redux/navi/navi.action';
import { connect } from 'react-redux';
import background from '../../../asset/bg.jpg';
import './home.styles.scss';


const Home = ({setNaviTitle}) => {
    setNaviTitle('');
    return(
        <div className='content'>
            <img className='background-img' src={background} alt="Background" />
            <div className='title'>AdjustMyself</div>
            <p className='paragraph-1'>
                如果你感到過後悔，
            </p>
            <p className='paragraph-2'>
                那你更應該保握當下...
            </p>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    setNaviTitle: title => dispatch(setNaviTitle(title))
});

export default connect(null, mapDispatchToProps)(Home);