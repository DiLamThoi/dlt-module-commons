import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Input, Row } from 'antd';
import { noop } from 'lodash/util';

const UserForm = (props) => {
    const { style, onFinish, onFinishFailed } = props;

    const [form] = Form.useForm();

    return (
        <Form
            style={style}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="large"
        >
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item name="firstName">
                        <Input placeholder="Họ" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="lastName">
                        <Input placeholder="Tên" />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item name="email">
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="userName">
                <Input placeholder="Tên tài khoản" />
            </Form.Item>
            <Form.Item name="password">
                <Input.Password placeholder="Mật khẩu mới" />
            </Form.Item>
            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="primary" htmlType="submit" style={{ backgroundColor: '#42b72a' }}>
                    Đăng ký
                </Button>
            </Form.Item>
        </Form>
    );
};

UserForm.propTypes = {
    style: PropTypes.object,
    onFinish: PropTypes.func,
    onFinishFailed: PropTypes.func,
};

UserForm.defaultProps = {
    onFinish: noop,
    onFinishFailed: noop,
};

export default UserForm;
