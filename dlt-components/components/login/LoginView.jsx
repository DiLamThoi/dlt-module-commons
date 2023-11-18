import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Form, Input, Divider, Select } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { ROLE_LOGIN } from './constants/loginConstants';

const LoginView = (props) => {
    const { onLogin, navigateRegister } = props;

    const RoleOptions = useMemo(() => ([
        {
            value: ROLE_LOGIN.USER,
            label: 'Người tìm việc',
        },
        {
            value: ROLE_LOGIN.EMPLOYER,
            label: 'Nhà tuyển dụng',
        },
    ]), []);

    const onFinish = useCallback((values) => {
        onLogin(values.username, values.password, values.role);
    }, [onLogin]);

    const onFinishFailed = useCallback((errorInfo) => {}, []);

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
                <Typography.Title level={3} style={{ color: '#42b72a' }}>
                    <LoginOutlined style={{ marginRight: 8 }} />
                    Đăng nhập
                </Typography.Title>
            </div>
            <Form
                size="large"
                style={{ padding: '0px 8px' }}
                initialValues={{
                    role: ROLE_LOGIN.USER,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="role"
                    label={'Vai trò đăng nhập'}
                >
                    <Select size="middle" options={RoleOptions} />
                </Form.Item>
                <Form.Item name="username">
                    <Input placeholder="Tài khoản" />
                </Form.Item>
                <Form.Item name="password">
                    <Input.Password placeholder="Mật khẩu" />
                </Form.Item>
                {/* <Form.Item name="remember">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Đăng nhập</Button>
                </Form.Item>
                <Divider />
                <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button type="primary" style={{ backgroundColor: '#42b72a' }} onClick={navigateRegister}>
                        Tạo tài khoản mới
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

LoginView.propTypes = {
    onLogin: PropTypes.func,
    navigateRegister: PropTypes.func,
};

LoginView.defaultProps = {
    onLogin: () => undefined,
    navigateRegister: () => undefined,
};

export default LoginView;
