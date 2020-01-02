import React from 'react';
import { setNaviTitle } from '../../../redux/navi/navi.action';
import { connect } from 'react-redux';

const About = ({setNaviTitle}) => {
    setNaviTitle('ABOUT')
    return (
        <div className='content'>
            <h1>Hello World</h1>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setNaviTitle: title => dispatch(setNaviTitle(title))
})

export default connect(null, mapDispatchToProps)(About);