import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Input, Row } from 'antd';

const JobForm = (props) => {
    const { style, onFinish, onFinishFailed } = props;

    const [form] = Form.useForm();

    return (
        <Form
            style={style}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item name="chức vụ">
                <Input size="large" placeholder="Email" />
            </Form.Item>
            {/* <Row gutter={16}>
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
            </Form.Item> */}
        </Form>
    );
};

JobForm.propTypes = {
    style: PropTypes.object,
    onFinish: PropTypes.func,
    onFinishFailed: PropTypes.func,
};

JobForm.defaultProps = {
    onFinish: () => undefined,
    onFinishFailed: () => undefined,
};

export default JobForm;
