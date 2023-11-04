import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import JobContainer from '@dlt-components/components/job/JobContainer';
import jobAction from '@dlt-object-base/dlt-job/actions/jobActions';
import { Col, Row } from 'antd';

const JobListScreen = () => {
    const jobIds = ['job1', 'job2', 'job3', 'job4', 'job5' ];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobAction.fetchJob('meId'));
    }, [dispatch]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 8 }}>
            <Row gutter={[16, 16]}>
                {jobIds.map((jobId) => (
                    <Col key={jobId} xs={24} sm={24} md={12} lg={8} xl={6}>
                        <JobContainer key={jobId} jobId={jobId}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default JobListScreen;
