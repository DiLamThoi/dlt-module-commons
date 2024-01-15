import React, { useEffect } from 'react';

// Components
import JobListContainer from '@dlt-components/components/job/JobListContainer';

// Selector + Action
import { useDispatch, useSelector } from 'react-redux';
import { jobApiAction } from '@dlt-object-base/dlt-job/actions/jobActions';
import hasJobSelector from '@dlt-object-base/dlt-job/selector/hasJobSelector';
import CreateJobContainer from '@dlt-components/components/job/createJob/CreateJobContainer';
import WrapperScreen from '../WrapperScreen';
import { GroupJobContextProvider } from '@dlt-components/context/GroupIssueContext';

const JobListScreen = () => {
    const dispatch = useDispatch();
    const jobIds = useSelector((state) => hasJobSelector.getItemIds(state, '-1'));

    useEffect(() => {
        dispatch(jobApiAction.fetchJob('meId'));
    }, [dispatch]);

    return (
        <WrapperScreen>
            <GroupJobContextProvider>
                <JobListContainer jobIds={jobIds} />
            </GroupJobContextProvider>
            <CreateJobContainer typeView="float" />
        </WrapperScreen>
    );
};

export default JobListScreen;
