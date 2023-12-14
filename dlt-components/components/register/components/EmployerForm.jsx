import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Input, Row } from 'antd';
import { noop } from 'lodash/util';

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
            size="large"
        >
            <Form.Item name="name">
                <Input placeholder="Tên công ty" />
            </Form.Item>
            <Form.Item name="address">
                <Input placeholder="Địa chỉ" />
            </Form.Item>
            <Form.Item name="email">
                <Input placeholder="Email" />
            </Form.Item>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item name="userName">
                        <Input placeholder="Tên tài khoản" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="password">
                        <Input placeholder="Mật khẩu" />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="primary" htmlType="submit" style={{ backgroundColor: '#42b72a' }}>
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
    onFinish: noop,
    onFinishFailed: noop,
};

export default EmployerForm;
