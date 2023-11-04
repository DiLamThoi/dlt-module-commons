import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const JobView = (props) => {
    const { jobData } = props;

    const { 
        title,
        description,
        educationLevel,
        generalTitle,
        level,
        salary,
        location,
        type,
        hours,
        startTime,
        applicationDeadline,
        employerId,
    } = jobData;

    return (
        <Button style={{ display: 'block', width: '100%', height: '100px', padding: '12px 8px', backgroundColor: '#fff', borderRadius: 10 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span>{title}</span>
                <span>{description}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'pink' }}>
                {salary}
            </div>
        </Button>
    );
};

JobView.propTypes = {
    jobData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        educationLevel: PropTypes.number,
        generalTitle: PropTypes.string,
        level: PropTypes.string,
        salary: PropTypes.string,
        location: PropTypes.string,
        type: PropTypes.string,
        hours: PropTypes.number,
        startTime: PropTypes.number,
        applicationDeadline: PropTypes.number,
        employerId: PropTypes.string,
    }),
};

JobView.defaultProps = {};

export default JobView;
