import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, theme } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerNameContainer from '@dlt-components/components/employer/employerName/EmployerNameContainer';
import EmployerAddressContainer from '@dlt-components/components/employer/employerAddress/EmployerAddressContainer';
import { noop } from 'lodash/util';

const JobView = (props) => {
    const { data, onFollowJob } = props;

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

    const { token } = theme.useToken();

    const jobSalary = `${salaryMin}-${salaryMax} ${salaryUnit}`;

    const onShowJobDetail = useCallback((e) => {
        //
    }, []);

    const onClickFollowJobButton = useCallback((e) => {
        onFollowJob();
        e.stopPropagation();
    }, [onFollowJob]);

    return (
        <Button
            onClick={onShowJobDetail}
            style={{
                width: '100%',
                minWidth: 300,
                height: 'max-content',
                paddingLeft: token.paddingContentHorizontalSM,
                paddingRight: token.paddingContentHorizontalSM,
                paddingTop: token.paddingContentVerticalSM,
                paddingBottom: token.paddingContentVerticalSM,
            }}
        >
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'start' }}>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                    <span style={{ flex: '1', color: token.colorTextSecondary, fontWeight: token.fontWeightStrong }}>{title}</span>
                    <Button type="text" icon={<HeartOutlined />} onClick={onClickFollowJobButton}/>
                </div>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 8 }}>
                    <span style={{ display: 'block', width: 100 }}>
                        <EmployerLogoContainer employerId={employerId} width={100} height={100} style={{ objectFit: 'contain' }} />
                    </span>
                    <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <span style={{ color: token.colorTextSecondary }}>
                            <EmployerNameContainer employerId={employerId} />
                        </span>
                        <span style={{ color: token.colorTextSecondary }}>{jobSalary}</span>
                        <span style={{ color: token.colorTextSecondary }}>
                            <EmployerAddressContainer employerId={employerId}/>
                        </span>
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
    onFollowJob: PropTypes.func,
};

JobView.defaultProps = {
    onFollowJob: noop,
};

export default JobView;
