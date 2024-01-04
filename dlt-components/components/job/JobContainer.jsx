import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import jobSelector from '@dlt-module-job/selector/jobSelector';

import JobView from './JobView';
import { jobApiAction } from '@dlt-object-base/dlt-job/actions/jobActions';

const JobContainer = (props) => {
    const { jobId } = props;
    const dispatch = useDispatch();

    const jobData = useSelector((state) => jobSelector.getInfo(state, jobId, 'data'));

    const onFollowJob = useCallback(() => {
        // Dispath Folowjob action here
    }, []);

    const onDeleteJob = useCallback((id) => {
        dispatch(jobApiAction.deleteJob(id));
    }, [dispatch]);

    return jobData && (
        <JobView data={jobData} onFollow={onFollowJob} onDelete={onDeleteJob} />
    );
};

JobContainer.propTypes = {
    jobId: PropTypes.string,
};

export default JobContainer;
