import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const JobView = (props) => {
    const { jobData } = props;

    const { 
        id,
        title,
        levelId,
        employerId,
        quantity,
        methodId,
        probationTime,
        salaryUnit,
        salaryMin,
        salaryMax,
        applyStartTime,
        applyEndTime,
        applyCount,
        ageMin,
        ageMax,
        degreeId,
        genderId,
        description,
        totalView,
    } = jobData;

    const jobSalary = `${salaryMin}-${salaryMax} ${salaryUnit}`;

    return (
        <Button style={{ width: '100%', height: 'max-content', padding: '12px 8px', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ flex: '1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
                <Button type="text" icon={<HeartOutlined />} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'pink' }}>
                {jobSalary}
            </div>
        </Button>
    );
};

JobView.propTypes = {
    jobData: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        levelId: PropTypes.string,
        employerId: PropTypes.string,
        quantity: PropTypes.number,
        methodId: PropTypes.number,
        probationTime: PropTypes.number,
        salaryUnit: PropTypes.string,
        salaryMin: PropTypes.number,
        salaryMax: PropTypes.number,
        applyStartTime: PropTypes.number,
        applyEndTime: PropTypes.number,
        applyCount: PropTypes.number,
        ageMin: PropTypes.number,
        ageMax: PropTypes.number,
        degreeId: PropTypes.string,
        genderId: PropTypes.string,
        description: PropTypes.string,
        totalView: PropTypes.number,
    }),
};

JobView.defaultProps = {};

export default JobView;
