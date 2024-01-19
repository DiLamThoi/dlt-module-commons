import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CreateJobView from './CreateJobView';
import { jobApiAction } from '@dlt-object-base/dlt-job/actions/jobActions';
import { useAccount } from '@dlt-components/hooks';
import { JOB_FIELD } from '../constants/jobConstants';

const CreateJobContainer = (props) => {
    const { typeView } = props;
    const dispatch = useDispatch();
    const { meId, isEmployer } = useAccount();

    const createJob = useCallback((data) => {
        data[JOB_FIELD.EMPLOYER] = meId;
        dispatch(jobApiAction.createJob(data));
    }, [dispatch, meId]);

    return isEmployer && (
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
