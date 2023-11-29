import React, { useEffect } from 'react';

// Components
import { Col, Row } from 'antd';
import JobContainer from '@dlt-components/components/job/JobContainer';

// Selector + Action
import { useDispatch, useSelector } from 'react-redux';
import { jobApiAction } from '@dlt-object-base/dlt-job/actions/jobActions';
import hasJobSelector from '@dlt-object-base/dlt-job/selector/hasJobSelector';

const JobListScreen = () => {
    const dispatch = useDispatch();
    const jobIds = useSelector((state) => hasJobSelector.getItemIds(state, '-1'));

    useEffect(() => {
        dispatch(jobApiAction.fetchJob('meId'));
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
