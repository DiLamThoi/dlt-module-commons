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
        educationLevel: PropTypes.string,
        generalTitle: PropTypes.string,
        level: PropTypes.string,
        salary: PropTypes.number,
        location: PropTypes.string,
        type: PropTypes.string,
        hours: PropTypes.number,
        startTime: PropTypes.string,
        applicationDeadline: PropTypes.string,
        employerId: PropTypes.string,
    }),
};

JobView.defaultProps = {};

export default JobView;
