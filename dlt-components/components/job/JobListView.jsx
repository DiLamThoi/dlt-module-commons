import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import JobContainer from './JobContainer';

const JobListView = (props) => {
    const { jobIds } = props;

    return (
        <Row gutter={[16, 16]}>
            {jobIds.map((jobId) => (
                <Col key={jobId} xs={24} sm={24} md={24} lg={12} xl={8}>
                    <JobContainer key={jobId} jobId={jobId}/>
                </Col>
            ))}
        </Row>
    );
};

JobListView.propTypes = {
    jobIds: PropTypes.arrayOf(PropTypes.string),
};

JobListView.defaultProps = {
    jobIds: [],
};

export default JobListView;
