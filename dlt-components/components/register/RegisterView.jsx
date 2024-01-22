import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Select, Typography } from 'antd';
import UserForm from './components/UserForm';
import EmployerForm from './components/EmployerForm';
import { noop } from 'lodash/util';
import { ACCOUNT_ROLE } from '@dlt-components/constants/authConstants';
import { useToken } from '@dlt-components/hooks';

const RegisterView = (props) => {
    const { onRegisterUser, onRegisterEmployer, navigateLogin } = props;

    const token = useToken();

    const [type, setType] = useState(ACCOUNT_ROLE.USER);

    const RoleOptions = useMemo(() => ([
        {
            value: ACCOUNT_ROLE.USER,
            label: 'Người tìm việc',
        },
        {
            value: ACCOUNT_ROLE.EMPLOYER,
            label: 'Nhà tuyển dụng',
        },
    ]), []);

    const onTypeChange = useCallback((value) => {
        setType(value);
    }, []);

    const renderRegisterForm = useCallback((registerType) => {
        switch (registerType) {
        case ACCOUNT_ROLE.USER:
            return <UserForm onFinish={onRegisterUser} />;
        case ACCOUNT_ROLE.EMPLOYER:
            return <EmployerForm onFinish={onRegisterEmployer} />;
        default:
            return null;
        }
    }, [onRegisterEmployer, onRegisterUser]);

    return (
        <div
            style={{
                backgroundColor: token.colorBgContainer,
                minWidth: 400,
                borderRadius: token.borderRadiusSM,
                padding: token.paddingSM,
                boxShadow: token.boxShadowSecondary,
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <Typography.Title level={3} style={{ color: token.colorTextHeading }}>
                    Tạo tài khoản mới
                </Typography.Title>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'start', marginBottom: token.marginLG, gap: 8 }}>
                    <span style={{ display: 'flex', textAlign: 'start', alignItems: 'center', color: token.colorTextLabel }}>
                        Bạn là:
                    </span>
                    <Select size="middle" options={RoleOptions} value={type} onChange={onTypeChange} style={{ width: 150 }}/>
                </div>
                {renderRegisterForm(type)}
                <Button type="link" onClick={navigateLogin}>
                    Bạn đã có tài khoản ư?
                </Button>
            </div>
        </div>
    );
};

RegisterView.propTypes = {
    onRegisterUser: PropTypes.func,
    onRegisterEmployer: PropTypes.func,
    navigateLogin: PropTypes.func,
};

RegisterView.defaultProps = {
    onRegisterUser: noop,
    onRegisterEmployer: noop,
    navigateLogin: noop,
};

export default RegisterView;
