import React, { useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Form, Input, Divider, Select } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { noop } from 'lodash/util';
import { ACCOUNT_ROLE } from '@dlt-components/constants/authConstants';

const LoginView = (props) => {
    const { onLogin, navigateRegister } = props;

    const [form] = Form.useForm();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

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

    const onFinish = useCallback((values) => {
        onLogin(values.username, values.password, values.role);
    }, [onLogin]);

    const onFinishFailed = useCallback(({ values, errorFields, outOfDate }) => {
        const firstErrorField = errorFields[0].name[0];
        form.scrollToField(firstErrorField);
        if (firstErrorField === 'username' && usernameRef.current) usernameRef.current.focus();
        if (firstErrorField === 'password' && passwordRef.current) passwordRef.current.focus();
    }, [form]);

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
                form={form}
                size="large"
                style={{ padding: '0px 8px' }}
                initialValues={{ role: ACCOUNT_ROLE.USER }}
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
                <Form.Item name="username" rules={[{ required: true, message: '' }]}>
                    <Input placeholder="Tài khoản" ref={usernameRef}/>
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '' }]}>
                    <Input.Password placeholder="Mật khẩu" ref={passwordRef}/>
                </Form.Item>
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
    onLogin: noop,
    navigateRegister: noop,
};

export default LoginView;
