import React from 'react';
import PropTypes from 'prop-types';
import JobListView from './JobListView';
import { GroupJobContextProvider } from '@dlt-components/context/GroupJobContext';

const JobListContainer = (props) => {
    const { jobIds } = props;
    
    return (
        <GroupJobContextProvider>
            <JobListView jobIds={jobIds}/>
        </GroupJobContextProvider>
    );
};

JobListContainer.propTypes = {
    jobIds: PropTypes.arrayOf(PropTypes.string),
};

JobListContainer.defaultProps = {
    jobIds: [],
};

export default JobListContainer;
