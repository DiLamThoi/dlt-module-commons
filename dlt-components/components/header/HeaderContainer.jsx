import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HeaderView from './HeaderView';

const HeaderContainer = (props) => {
    const dispatch = useDispatch();
    return <HeaderView />;
};

HeaderContainer.propTypes = {};

HeaderContainer.defaultProps = {};

export default HeaderContainer;
