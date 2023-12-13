import React from 'react';
import PropTypes from 'prop-types';
import JobListView from './JobListView';

const JobListContainer = (props) => {
    const { jobIds } = props;

    return (
        <JobListView jobIds={jobIds}/>
    );
};

JobListContainer.propTypes = {
    jobIds: PropTypes.arrayOf(PropTypes.string),
};

JobListContainer.defaultProps = {
    jobIds: [],
};

export default JobListContainer;
