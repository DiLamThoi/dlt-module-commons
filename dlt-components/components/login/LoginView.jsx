import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Form, Input, Checkbox, Divider } from 'antd';
import { Link } from 'react-router-dom';

const LoginView = (props) => {
    const { onLogin, navigateRegister } = props;

    const onFinish = useCallback((values) => {
        onLogin(values.username, values.password);
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
                <Typography.Title level={3}>Đi làm thôi</Typography.Title>
            </div>
            <Form
                style={{ padding: '0px 8px' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item name="username">
                    <Input size="large" placeholder="Tài khoản" />
                </Form.Item>
                <Form.Item name="password">
                    <Input.Password size="large" placeholder="Mật khẩu" />
                </Form.Item>
                {/* <Form.Item name="remember">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}
                <Form.Item>
                    <Button size="large" type="primary" htmlType="submit" style={{ width: '100%' }}>Đăng nhập</Button>
                </Form.Item>
                <Divider />
                <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size="large" type="primary" style={{ backgroundColor: '#42b72a' }} onClick={navigateRegister}>
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
