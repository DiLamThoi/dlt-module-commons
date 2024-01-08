import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, theme } from 'antd';
import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerNameContainer from '@dlt-components/components/employer/employerName/EmployerNameContainer';
import EmployerAddressContainer from '@dlt-components/components/employer/employerAddress/EmployerAddressContainer';
import { noop } from 'lodash/util';
import { showJobInfoBar } from '@dlt-components/components/inforBar/global/infoBarGlobal';

const JobButtonView = (props) => {
    const { data, onFollow, onDelete } = props;

    const { id, title, employerId, salaryUnit, salaryMin, salaryMax } = data;

    const { token } = theme.useToken();

    const jobSalary = `${salaryMin}-${salaryMax} ${salaryUnit || 'triệu VND'}`;

    const onShowJobDetail = useCallback(() => {
        showJobInfoBar(id);
    }, [id]);

    const onClickFollowJobButton = useCallback((e) => {
        onFollow(id);
        e.stopPropagation();
    }, [id, onFollow]);

    const onClickDeleteJobButton = useCallback((e) => {
        onDelete(id);
        e.stopPropagation();
    }, [id, onDelete]);

    return (
        <Button
            onClick={onShowJobDetail}
            style={{
                width: '100%',
                minWidth: 200,
                height: 'max-content',
                paddingLeft: token.paddingContentHorizontalSM,
                paddingRight: token.paddingContentHorizontalSM,
                paddingTop: token.paddingContentVerticalSM,
                paddingBottom: token.paddingContentVerticalSM,
            }}
        >
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'start' }}>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                    <span style={{ flex: '1', color: token.colorTextBase, fontWeight: token.fontWeightStrong }}>{title}</span>
                    <Button type="text" icon={<HeartOutlined />} onClick={onClickFollowJobButton}/>
                    <Button type="text" icon={<DeleteOutlined />} onClick={onClickDeleteJobButton}/>
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

JobButtonView.propTypes = {
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
    onFollow: PropTypes.func,
    onDelete: PropTypes.func,
};

JobButtonView.defaultProps = {
    onFollow: noop,
    onDelete: noop,
};

export default JobButtonView;
