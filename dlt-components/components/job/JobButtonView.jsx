import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

// Components
import { Button } from 'antd';
import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerAddressContainer from '@dlt-components/components/employer/employerAddress/EmployerAddressContainer';
import { noop } from 'lodash/util';
import { InfoBarInstant } from '@dlt-components/components/inforBar/global/infoBarGlobal';
import { useGroupJobContext } from '@dlt-components/context/GroupJobContext';
import { useHover, useToken } from '@dlt-components/hooks';

const JobButtonView = (props) => {
    const { data, isOwn, onFollow, onDelete } = props;
    const { id, title, employerId, salaryUnit, salaryMin, salaryMax } = data;

    const token = useToken();
    const [ref, hovering] = useHover();
    const { selectedJobId } = useGroupJobContext();

    const jobSalary = `${salaryMin} - ${salaryMax} ${salaryUnit || 'triệu VND'}`;

    const onShowJobDetail = useCallback(() => {
        InfoBarInstant.showJobInfoBar(id);
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
        <div
            ref={ref}
            onClick={onShowJobDetail}
            style={{
                position: 'relative',
                width: '100%',
                minWidth: 200,
                cursor: 'pointer',
                paddingLeft: token.paddingContentHorizontalSM,
                paddingRight: token.paddingContentHorizontalSM,
                paddingTop: token.paddingContentVerticalSM,
                paddingBottom: token.paddingContentVerticalSM,
                borderRadius: token.borderRadiusLG,
                backgroundColor: (id === selectedJobId || hovering) ? token.colorBgTextHover : token.colorBgBase,
            }}
        >
            <div style={{ display: hovering ? 'block' : 'none', position: 'absolute', zIndex: 1, right: 10 }}>
                {isOwn
                    ? <Button type="text" shape="circle" icon={<DeleteOutlined />} onClick={onClickDeleteJobButton}/>
                    : <Button type="text" shape="circle" icon={<HeartOutlined />} onClick={onClickFollowJobButton}/>
                }
            </div>
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 8 }}>
                <span style={{ display: 'block', width: 50 }}>
                    <EmployerLogoContainer employerId={employerId} width={50} height={50} style={{ objectFit: 'contain' }} />
                </span>
                <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ color: token.colorTextBase, fontWeight: token.fontWeightStrong }}>{title}</span>
                    <span style={{ color: token.colorTextSecondary }}>
                        <span style={{ color: token.pink, marginRight: token.marginXS }}>{jobSalary}</span>
                        <EmployerAddressContainer employerId={employerId}/>
                    </span>
                </span>
            </div>
        </div>
    );
};

JobButtonView.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        levelId: PropTypes.string,
        employerId: PropTypes.string,
        quantity: PropTypes.number,
        methodId: PropTypes.string,
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
    isOwn: PropTypes.bool,
    onFollow: PropTypes.func,
    onDelete: PropTypes.func,
};

JobButtonView.defaultProps = {
    onFollow: noop,
    onDelete: noop,
};

export default JobButtonView;
