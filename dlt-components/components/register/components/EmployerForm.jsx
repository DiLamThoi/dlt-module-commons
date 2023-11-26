import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Input, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const EmployerForm = (props) => {
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
            <Form.Item name="name">
                <Input size="large" placeholder="Tên công ty" />
            </Form.Item>
            <Form.Item name="address">
                <Input size="large" placeholder="Địa chỉ" />
            </Form.Item>
            <Form.Item name="email">
                <Input size="large" placeholder="Email" />
            </Form.Item>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item name="userName">
                        <Input size="large" placeholder="Tên tài khoản" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="password">
                        <Input size="large" placeholder="Mật khẩu" />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" type="primary" htmlType="submit" style={{ backgroundColor: '#42b72a' }}>
                    Đăng ký
                </Button>
            </Form.Item>
        </Form>
    );
};

EmployerForm.propTypes = {
    style: PropTypes.object,
    onFinish: PropTypes.func,
    onFinishFailed: PropTypes.func,
};

EmployerForm.defaultProps = {
    onFinish: () => undefined,
    onFinishFailed: () => undefined,
};

export default EmployerForm;
