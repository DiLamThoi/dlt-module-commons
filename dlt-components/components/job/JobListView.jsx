import React from 'react';
import PropTypes from 'prop-types';

// Components
import JobContainer from './JobContainer';
import JobSearchBarContainer from './searchBar/JobSearchBarContainer';

// Constants
import { JOB_TYPE_VIEW } from './constants/jobConstants';
import { useToken } from '@dlt-components/hooks';

const JobListView = (props) => {
    const { jobIds } = props;

    const token = useToken();

    return (
        <div style={{ padding: token.padding, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <JobSearchBarContainer />
            {jobIds.map((jobId) => (
                <JobContainer key={jobId} jobId={jobId} typeView={JOB_TYPE_VIEW.BUTTON}/>
            ))}
        </div>
    );
};

JobListView.propTypes = {
    jobIds: PropTypes.arrayOf(PropTypes.string),
};

JobListView.defaultProps = {
    jobIds: [],
};

export default JobListView;
