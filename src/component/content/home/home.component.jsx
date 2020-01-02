import React from 'react';
import { setNaviTitle } from '../../../redux/navi/navi.action';
import { connect } from 'react-redux';


const Home = ({setNaviTitle}) => {
    setNaviTitle('HOME');
    return(
        <div className='content'>
            <h1>home</h1>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    setNaviTitle: title => dispatch(setNaviTitle(title))
});

export default connect(null, mapDispatchToProps)(Home);