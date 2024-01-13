import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import userSelector from '@dlt-object-base/dlt-user/selector/userSelector';
import UserProfileView from './UserProfileView';
import { userApiAction } from '@dlt-object-base/dlt-user/actions/userActions';

const UserProfileContainer = (props) => {
    const { userId } = props;
    const dispatch = useDispatch();

    const userData = useSelector((state) => userSelector.getInfo(state, userId, 'data'));

    useEffect(() => {
        if (userId && !userData) {dispatch(userApiAction.fetchAnUser(userId));}
    }, [dispatch, userData, userId]);

    return userData && (
        <UserProfileView data={userData}/>
    );
};

UserProfileContainer.propTypes = {
    userId: PropTypes.string,
};

UserProfileContainer.defaultProps = {};

export default UserProfileContainer;
