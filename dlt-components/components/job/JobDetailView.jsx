import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

// Components
import dayjs from 'dayjs';
import { Button, Input, theme } from 'antd';
import { CalendarOutlined, ClockCircleOutlined, DeleteOutlined, DollarOutlined, EnvironmentOutlined, EyeOutlined, FileDoneOutlined, FormOutlined, HeartOutlined, LineHeightOutlined, SendOutlined, TeamOutlined, UserSwitchOutlined } from '@ant-design/icons';
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerNameContainer from '@dlt-components/components/employer/employerName/EmployerNameContainer';
import EmployerAddressContainer from '@dlt-components/components/employer/employerAddress/EmployerAddressContainer';
import { noop } from 'lodash/util';
import { JOB_DEGREE, JOB_EXPERIENCE, JOB_GENDER, JOB_METHOD } from './constants/jobConstants';

const JobField = (props) => {
    const { token } = theme.useToken();
    const { title, value, Icon, fontSize = token.fontSizeLG, color = token.colorTextSecondary, valueColor } = props;
    return (
        <span style={{ color, fontSize }}>
            {Icon && <Icon style={{ paddingRight: 8 }}/>}
            {title}:
            <span style={{ paddingLeft: 8, color: valueColor || color }}>{value}</span>
        </span>
    );
};
JobField.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    Icon: PropTypes.element,
    fontSize: PropTypes.number,
    color: PropTypes.string,
    valueColor: PropTypes.string,
};

const JobDetailView = (props) => {
    const { data, onFollow, onDelete } = props;

    const { 
        id,
        title,
        methodId,
        levelId,
        degreeId,
        experienceId,
        ageMin,
        ageMax,
        genderId,
        quantity,
        probationTime,
        applyStartTime,
        applyEndTime,
        applyCount,
        salaryMin,
        salaryMax,
        salaryUnit,
        description,
        totalView,
        employerId,
    } = data;

    const salaryString = useMemo(() => `${salaryMin} - ${salaryMax} ${salaryUnit || 'triệu VND'}`, [salaryMax, salaryMin, salaryUnit]);
    const applyEndTimeString = useMemo(() => applyEndTime ? dayjs(applyEndTime).format('DD/MM/YYYY') : 'Chưa xác định', [applyEndTime]);
    const probationTimeString = useMemo(() => `${probationTime} tháng`, [probationTime]);
    const genderString = useMemo(() => {
        switch (genderId) {
        case JOB_GENDER.MALE:
            return 'Nam';
        case JOB_GENDER.FEMALE:
            return 'Nữ';
        case JOB_GENDER.NONE:
        default:
            return 'Không yêu cầu';
        }
    }, [genderId]);
    const methodString = useMemo(() => {
        switch (methodId) {
        case JOB_METHOD.FULLTIME_FIXED:
            return 'Toàn thời gian cố định';
        case JOB_METHOD.FULLTIME_TEMP:
            return 'Toàn thời gian tạm thời';
        case JOB_METHOD.PARTIME_FIXED:
            return 'Bán thời gian cố định';
        case JOB_METHOD.PARTIME_TEMP:
            return 'Bán thời gian tạm thời';
        case JOB_METHOD.CONTRACT:
            return 'Theo hợp đồng';
        case JOB_METHOD.INTERN:
            return 'Thực tập';
        case JOB_METHOD.OTHER:
        default:
            return 'Không yêu cầu';
        }
    }, [methodId]);
    const ageString = useMemo(() => `${ageMin} - ${ageMax} tuổi`, [ageMax, ageMin]);
    const degreeString = useMemo(() => {
        switch (degreeId) {
        case JOB_DEGREE.CERTIFICATE:
            return 'Chứng chỉ';
        case JOB_DEGREE.HIGH_SCHOOL:
            return 'Trung học';
        case JOB_DEGREE.INTERMEDIATE:
            return 'Trung cấp';
        case JOB_DEGREE.COLLEGE:
            return 'Cao đẳng';
        case JOB_DEGREE.UNIVERSITY:
            return 'Đại học';
        case JOB_DEGREE.AFTER_UNIVERSITY:
            return 'Trên đại học';
        case JOB_DEGREE.NONE:
        default:
            return 'Không yêu cầu';
        }
    }, [degreeId]);
    const experienceString = useMemo(() => {
        switch (experienceId) {
        case JOB_EXPERIENCE.UNDER_1_YEAR:
            return 'Dưới 1 năm';
        case JOB_EXPERIENCE.ABOUT_1_YEAR:
            return '1 năm';
        case JOB_EXPERIENCE.ABOUT_2_YEAR:
            return '2 năm';
        case JOB_EXPERIENCE.ABOUT_3_YEAR:
            return '3 năm';
        case JOB_EXPERIENCE.ABOUT_4_YEAR:
            return '4 năm';
        case JOB_EXPERIENCE.ABOUT_5_YEAR:
            return '5 năm';
        case JOB_EXPERIENCE.OVER_5_YEAR:
            return 'Trên 5 năm';
        case JOB_EXPERIENCE.NONE:
        default:
            return 'Không yêu cầu';
        }
    }, [experienceId]);

    const { token } = theme.useToken();

    const onClickFollowJobButton = useCallback((e) => {
        onFollow(id);
    }, [id, onFollow]);

    const onClickDeleteJobButton = useCallback((e) => {
        onDelete(id);
    }, [id, onDelete]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: token.paddingSM }} direction="vertical">
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    gap: 8,
                    backgroundColor: token.colorBgBase,
                    boxShadow: token.boxShadow,
                    borderRadius: token.borderRadius,
                    padding: token.paddingSM,
                }}
            >
                <div style={{ display: 'flex', width: 120, height: '100%' }}>
                    <EmployerLogoContainer employerId={employerId} width={120} height={120} style={{ objectFit: 'contain' }} />
                </div>
                <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ color: token.colorTextSecondary, fontSize: token.fontSizeLG, fontWeight: token.fontWeightStrong }}>
                        <EmployerNameContainer employerId={employerId} />
                    </span>
                    <span style={{ color: token.colorTextBase, fontSize: token.fontSizeXL, fontWeight: token.fontWeightStrong }}>{title}</span>
                    <JobField title="Mức lương" Icon={DollarOutlined} value={salaryString} valueColor={token.pink}/>
                    <JobField title="Hạn nộp hồ sơ" Icon={CalendarOutlined} value={applyEndTimeString}/>
                    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                        <span style={{ flex: 1, display: 'flex', gap: 8 }}>
                            <Button type="primary" shape="default" icon={<SendOutlined />}>Gửi hồ sơ</Button>
                            <Button icon={<HeartOutlined />} onClick={onClickFollowJobButton}/>
                            <Button icon={<DeleteOutlined />} onClick={onClickDeleteJobButton}/>
                        </span>
                        <JobField title="Lượt xem" Icon={EyeOutlined} value={totalView || 0} fontSize={token.fontSizeSM} color={token.colorTextBase}/>
                    </div>
                </span>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 8,
                    backgroundColor: token.colorBgBase,
                    boxShadow: token.boxShadow,
                    borderRadius: token.borderRadius,
                    padding: token.paddingSM,
                }}
            >
                <span style={{ color: token.colorTextBase, fontSize: token.fontSizeXL, fontWeight: token.fontWeightStrong }}>
                    Thông tin chung
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: token.paddingXS }}>
                    <JobField title="Thời gian thử việc" Icon={ClockCircleOutlined} value={probationTimeString}/>
                    <JobField title="Yêu cầu giới tính" Icon={UserSwitchOutlined} value={genderString}/>
                    <JobField title="Số lượng cần tuyển" Icon={TeamOutlined} value={applyCount}/>
                    <JobField title="Hình thức làm việc" Icon={FormOutlined} value={methodString}/>
                    <JobField title="Độ tuổi" Icon={LineHeightOutlined} value={ageString}/>
                    <JobField title="Bằng cấp" Icon={FileDoneOutlined} value={degreeString}/>
                    <JobField title="Yêu cầu kinh nghiệm" Icon={UserSwitchOutlined} value={experienceString}/>
                </span>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 8,
                    backgroundColor: token.colorBgBase,
                    boxShadow: token.boxShadow,
                    borderRadius: token.borderRadius,
                    padding: token.paddingSM,
                }}
            >
                <span style={{ color: token.colorTextBase, fontSize: token.fontSizeXL, fontWeight: token.fontWeightStrong }}>
                    Mô tả công việc
                </span>
                <div>
                    <Input.TextArea value={description} readOnly autoSize bordered={false} />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 8,
                    backgroundColor: token.colorBgBase,
                    boxShadow: token.boxShadow,
                    borderRadius: token.borderRadius,
                    padding: token.paddingSM,
                }}
            >
                <span style={{ color: token.colorTextBase, fontSize: token.fontSizeXL, fontWeight: token.fontWeightStrong }}>
                    Địa chỉ làm việc
                </span>
                <span style={{ color: token.colorTextSecondary }}>
                    <EnvironmentOutlined style={{ marginRight: token.marginXS }} />
                    <EmployerAddressContainer employerId={employerId}/>
                </span>
            </div>
        </div>
    );
};

JobDetailView.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        levelId: PropTypes.string,
        employerId: PropTypes.string,
        quantity: PropTypes.number,
        methodId: PropTypes.number,
        experienceId: PropTypes.string,
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

JobDetailView.defaultProps = {
    onFollow: noop,
    onDelete: noop,
};

export default JobDetailView;
