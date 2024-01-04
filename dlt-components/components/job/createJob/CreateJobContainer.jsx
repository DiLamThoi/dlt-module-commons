import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CreateJobView from './CreateJobView';
import { jobApiAction } from '@dlt-object-base/dlt-job/actions/jobActions';

const CreateJobContainer = (props) => {
    const { typeView } = props;
    const dispatch = useDispatch();

    const createJob = useCallback((data) => {
        dispatch(jobApiAction.createJob(data));
    }, [dispatch]);

    return (
        <CreateJobView typeView={typeView} createJob={createJob} />
    );
};

CreateJobContainer.propTypes = {
    typeView: PropTypes.oneOf(['float', 'modal', 'view']),
};

CreateJobContainer.defaultProps = {
    typeView: 'float',
};

export default CreateJobContainer;
