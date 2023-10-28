import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import jobSelector from '@dlt-module-job/selector/jobSelector';

import JobView from './JobView';

const JobContainer = (props) => {
    const { jobId } = props;

    const jobData = useSelector((state) => jobSelector.get(state, jobId));

    return (
        <JobView jobData={jobData}/>
    );
};

JobContainer.propTypes = {
    jobId: PropTypes.string,
};

export default JobContainer;
