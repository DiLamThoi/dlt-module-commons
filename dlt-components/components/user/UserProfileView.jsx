import React from 'react';
import PropTypes from 'prop-types';

const UserProfileView = (props) => {
    const { data } = props;
    return <div>123</div>;
};

UserProfileView.propTypes = {
    data: PropTypes.object,
};

UserProfileView.defaultProps = {};

export default UserProfileView;
