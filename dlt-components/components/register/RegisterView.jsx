import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Input, Row, Typography } from 'antd';

const RegisterView = (props) => {
    const { onRegister, navigateLogin } = props;

    const [form] = Form.useForm();

    const onFinish = useCallback((values) => {
        onRegister(values);
    }, [onRegister]);

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
                <Typography.Title level={3}>Tạo tài khoản mới</Typography.Title>
            </div>
            <Form
                form={form}
                style={{ padding: '0px 8px' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="firstName">
                            <Input size="large" placeholder="Họ" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="lastName">
                            <Input size="large" placeholder="Tên" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item name="email">
                    <Input size="large" placeholder="Email" />
                </Form.Item>
                <Form.Item name="userName">
                    <Input size="large" placeholder="Tên tài khoản" />
                </Form.Item>
                <Form.Item name="password">
                    <Input.Password size="large" placeholder="Mật khẩu mới" />
                </Form.Item>
                <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size="large" type="primary" htmlType="submit" style={{ backgroundColor: '#42b72a' }}>
                        Đăng ký
                    </Button>
                </Form.Item>
                <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button type="link" onClick={navigateLogin}>
                        Bạn đã có tài khoản ư?
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

RegisterView.propTypes = {
    onRegister: PropTypes.func,
    navigateLogin: PropTypes.func,
};

RegisterView.defaultProps = {
    onRegister: () => undefined,
    navigateLogin: () => undefined,
};

export default RegisterView;
