import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import JobContainer from '@dlt-components/components/job/JobContainer';
import jobAction from '@dlt-object-base/dlt-job/actions/jobActions';

const JobListScreen = () => {
    const jobIds = ['job1', 'job2', 'job3'];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobAction.fetchJob('meId'));
    }, [dispatch]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '8' }}>
            {jobIds.map((jobId) => (
                <JobContainer key={jobId} jobId={jobId}/>
            ))}
        </div>
    );
};

export default JobListScreen;
