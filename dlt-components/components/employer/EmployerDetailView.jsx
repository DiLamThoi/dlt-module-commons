import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import { Input } from 'antd';
import EmployerLogoContainer from '@dlt-components/components/employer/employerLogo/EmployerLogoContainer';
import EmployerNameContainer from '@dlt-components/components/employer/employerName/EmployerNameContainer';
import EmployerAddressContainer from './employerAddress/EmployerAddressContainer';
import { EnvironmentOutlined, GlobalOutlined, MailOutlined } from '@ant-design/icons';
import JobContainer from '@dlt-components/components/job/JobContainer';
import { JOB_TYPE_VIEW } from '../job/constants/jobConstants';
import { useToken } from '@dlt-components/hooks';

const EmployerDetailView = (props) => {
    const { data, jobIds, style } = props;

    const token = useToken();

    const { id, email, name, status, logo, address, website, description } = data;

    // eslint-disable-next-line react/prop-types
    const Box = memo(({ title, children }) => (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                gap: 8,
                backgroundColor: token.colorBgContainer,
                boxShadow: token.boxShadowSecondary,
                padding: token.paddingSM,
            }}
        >
            {title && (<span style={{ color: token.colorTextBase, fontSize: token.fontSizeXL, fontWeight: token.fontWeightStrong }}>
                {title}
            </span>)}
            {children}
        </div>
    ));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    gap: 16,
                    backgroundColor: token.colorBgContainer,
                    boxShadow: token.boxShadowSecondary,
                    padding: token.paddingSM,
                }}
            >
                <div style={{ display: 'flex', width: 120, height: '100%' }}>
                    <EmployerLogoContainer employerId={id} width={120} height={120} style={{ objectFit: 'contain' }} />
                </div>
                <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <EmployerNameContainer employerId={id} style={{ color: token.colorTextBase, fontSize: token.fontSizeXL, fontWeight: token.fontWeightStrong }} />
                    <span>
                        <EnvironmentOutlined style={{ marginRight: token.marginXS, color: token.blue }} size={20} />
                        <EmployerAddressContainer employerId={id} style={{ color: token.colorTextSecondary, fontSize: token.fontSizeLG }}/>
                    </span>
                    {website && <span style={{ color: token.colorTextSecondary, fontSize: token.fontSizeLG }}>
                        <GlobalOutlined style={{ marginRight: token.marginXS, color: token.blue }} size={20} />{website}
                    </span>}
                    <span style={{ color: token.colorTextSecondary, fontSize: token.fontSizeLG }}>
                        <MailOutlined style={{ marginRight: token.marginXS, color: token.blue }} size={20} />{email}
                    </span>
                </span>
            </div>
            <Box title="Vị trí đang tuyển">
                {jobIds.length === 0 && (
                    <span style={{ color: token.colorTextDisabled }}>Chưa có thông tin tuyển dụng</span>
                )}
                {jobIds.map((jobId) => (
                    <JobContainer key={jobId} jobId={jobId} typeView={JOB_TYPE_VIEW.BUTTON} />
                ))}
            </Box>
            <Box title="Giới thiệu doanh nghiệp">
                <Input.TextArea value={description} readOnly autoSize bordered={false} placeholder="Chưa có thông tin mô tả" />
            </Box>
            <Box title="Thông tin liên hệ">
                <span>
                    <EnvironmentOutlined style={{ marginRight: token.marginXS, color: token.blue }} size={20} />
                    <EmployerAddressContainer employerId={id} style={{ color: token.colorTextSecondary, fontSize: token.fontSizeLG }}/>
                </span>
                {website && <span style={{ color: token.colorTextSecondary, fontSize: token.fontSizeLG }}>
                    <GlobalOutlined style={{ marginRight: token.marginXS, color: token.blue }} size={20} />{website}
                </span>}
                <span style={{ color: token.colorTextSecondary, fontSize: token.fontSizeLG }}>
                    <MailOutlined style={{ marginRight: token.marginXS, color: token.blue }} size={20} />{email}
                </span>
            </Box>
            {/* <Box title="Hình ảnh" /> */}
        </div>
    );
};

EmployerDetailView.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        email: PropTypes.string,
        name: PropTypes.string,
        status: PropTypes.number,
        logo: PropTypes.string,
        address: PropTypes.string,
        website: PropTypes.string,
        description: PropTypes.string,
    }),
    jobIds: PropTypes.array,
    style: PropTypes.object,
};

EmployerDetailView.defaultProps = {
    jobIds: [],
    style: {},
};

export default EmployerDetailView;
