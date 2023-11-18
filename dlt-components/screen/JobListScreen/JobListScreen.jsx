import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JobContainer from '@dlt-components/components/job/JobContainer';
import jobAction from '@dlt-object-base/dlt-job/actions/jobActions';
import { Col, Row } from 'antd';
import jobSelector from '@dlt-object-base/dlt-job/selector/jobSelector';

const JobListScreen = () => {
    const dispatch = useDispatch();
    const jobIds = useSelector((state) => jobSelector.getItemIds(state));

    useEffect(() => {
        dispatch(jobAction.fetchJob('meId'));
    }, [dispatch]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 8 }}>
            <Row gutter={[16, 16]}>
                {jobIds.map((jobId) => (
                    <Col key={jobId} xs={24} sm={24} md={24} lg={12} xl={8}>
                        <JobContainer key={jobId} jobId={jobId}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default JobListScreen;
