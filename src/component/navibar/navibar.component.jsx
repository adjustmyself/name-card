import React from 'react';
import './navibar.styles.scss';
import { connect } from 'react-redux';

const Navibar = ({naviTitle}) => {
    return (
    <>
        <nav className='nav-top'>
            <span className='title'>{naviTitle}</span>
        </nav>
        <nav className='nav-bottom'>
            <span>Copyright © 2020 Winz All rights reserved.</span>
        </nav>
    </>    
    );
}

const mapStateToProps = ({navi}) => ({
    naviTitle: navi.naviTitle
})

export default connect(mapStateToProps)(Navibar);