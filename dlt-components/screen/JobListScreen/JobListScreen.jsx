import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import JobContainer from '../../components/job/JobContainer';
import jobAction from '../../../dlt-object-base/dlt-job/actions/jobActions';

const JobListScreen = () => {
    const jobIds = ['job1', 'job2', 'job3'];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobAction.fetchJob('meId'));
    }, [dispatch]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '24px 16px' }}>
            {jobIds.map((jobId) => (
                <div key={jobId} style={{ width: '100%', padding:'12px 8px', backgroundColor: '#fff' , borderRadius: 10 }}>
                    <JobContainer jobId={jobId}/>
                </div>
            ))}
        </div>
    );
};

export default JobListScreen;
