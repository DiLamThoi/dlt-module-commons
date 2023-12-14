import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Select, Typography } from 'antd';
import { ROLE_REGISTER } from './constants/registerConstants';
import UserForm from './components/UserForm';
import EmployerForm from './components/EmployerForm';
import { noop } from 'lodash/util';

const RegisterView = (props) => {
    const { onRegisterUser, onRegisterEmployer, navigateLogin } = props;

    const [type, setType] = useState(ROLE_REGISTER.USER);

    const RoleOptions = useMemo(() => ([
        {
            value: ROLE_REGISTER.USER,
            label: 'Người tìm việc',
        },
        {
            value: ROLE_REGISTER.EMPLOYER,
            label: 'Nhà tuyển dụng',
        },
    ]), []);

    const onTypeChange = useCallback((value) => {
        setType(value);
    }, []);

    const renderRegisterForm = useCallback((registerType) => {
        switch (registerType) {
        case ROLE_REGISTER.USER:
            return <UserForm onFinish={onRegisterUser} />;
        case ROLE_REGISTER.EMPLOYER:
            return <EmployerForm onFinish={onRegisterEmployer} />;
        default:
            return null;
        }
    }, [onRegisterEmployer, onRegisterUser]);

    return (
        <div
            style={{
                backgroundColor: '#fff',
                minWidth: 400,
                borderRadius: 8,
                paddingBottom: 14,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <Typography.Title level={3}>Tạo tài khoản mới</Typography.Title>
            </div>
            <div style={{ padding: '0px 8px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'start', marginBottom: 24, gap: 8 }}>
                    <span style={{ display: 'flex', textAlign: 'start', alignItems: 'center' }}>
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
