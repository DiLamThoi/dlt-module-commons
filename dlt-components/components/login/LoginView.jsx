import React, { useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Form, Input, Divider, Select } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { noop } from 'lodash/util';
import { ACCOUNT_ROLE } from '@dlt-components/constants/authConstants';
import { useToken } from '@dlt-components/hooks';

const LoginView = (props) => {
    const { onLogin, navigateRegister } = props;

    const token = useToken();
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
                backgroundColor: token.colorBgContainer,
                minWidth: 400,
                borderRadius: token.borderRadiusSM,
                padding: token.paddingSM,
                boxShadow: token.boxShadowSecondary,
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <Typography.Title level={3} style={{ color: token.blue }}>
                    <LoginOutlined style={{ marginRight: token.marginXS }} />
                    Đăng nhập
                </Typography.Title>
            </div>
            <Form
                form={form}
                size="large"
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
                    <Button type="primary" style={{ backgroundColor: token.green }} onClick={navigateRegister}>
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
