import React from 'react';
import PropTypes from 'prop-types';

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
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span>{title}</span>
                <span>{description}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'pink' }}>
                {salary}
            </div>
        </div>
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
