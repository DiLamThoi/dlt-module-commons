import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import jobSelector from '@dlt-module-job/selector/jobSelector';

import JobView from './JobView';

const JobContainer = (props) => {
    const { jobId } = props;

    const jobData = useSelector((state) => jobSelector.get(state, jobId));

    const onFollowJob = useCallback(() => {
        // Dispath Folowjob action here
    }, []);

    return jobData && (
        <JobView data={jobData} onFollowJob={onFollowJob} />
    );
};

JobContainer.propTypes = {
    jobId: PropTypes.string,
};

export default JobContainer;
