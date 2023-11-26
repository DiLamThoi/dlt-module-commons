import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerNameContainer from '@dlt-components/components/employer/employerName/EmployerNameContainer';
import EmployerAddressContainer from '@dlt-components/components/employer/employerAddress/EmployerAddressContainer';

const JobView = (props) => {
    const { data } = props;

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
    } = data;

    const jobSalary = `${salaryMin}-${salaryMax} ${salaryUnit}`;

    return (
        <Button style={{ width: '100%', minWidth: 300, height: 'max-content', padding: '12px 8px' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'start' }}>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                    <text style={{ flex: '1' }}>{title}</text>
                    <Button type="text" icon={<HeartOutlined />} />
                </div>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 8 }}>
                    <span style={{ display: 'block', width: 100 }}>
                        <EmployerLogoContainer employerId={employerId} width={100} />
                    </span>
                    <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <EmployerNameContainer employerId={employerId} />
                        <text style={{ }}>{jobSalary}</text>
                        <EmployerAddressContainer employerId={employerId} style={{ }}/>
                    </span>
                </div>
            </div>
        </Button>
    );
};

JobView.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
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
