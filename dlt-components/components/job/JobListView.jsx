import React from 'react';
import PropTypes from 'prop-types';
import { theme } from 'antd';
import JobContainer from './JobContainer';
import { JOB_TYPE_VIEW } from './constants/jobConstants';

const JobListView = (props) => {
    const { jobIds } = props;

    const { token } = theme.useToken();

    return (
        <div style={{ padding: token.padding, display: 'flex', flexDirection: 'column', gap: 8 }}>
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
