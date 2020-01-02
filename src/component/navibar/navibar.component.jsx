import React from 'react';
import './navibar.styles.scss';
import { connect } from 'react-redux';

const Navibar = ({naviTitle}) => {
    return (
    <>
        <nav className='nav-top'>
            <h1 className='title'>{naviTitle}</h1>
        </nav>
        <nav className='nav-bottom'>

        </nav>
    </>    
    );
}

const mapStateToProps = ({navi}) => ({
    naviTitle: navi.naviTitle
})

export default connect(mapStateToProps)(Navibar);