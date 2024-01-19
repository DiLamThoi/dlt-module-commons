import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Input, Row } from 'antd';
import { noop } from 'lodash/util';

const UserForm = (props) => {
    const { style, onFinish } = props;

    const [form] = Form.useForm();
    const emailRef = useRef(null);
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const onFinishFailed = useCallback(({ values, errorFields, outOfDate }) => {
        const firstErrorField = errorFields[0].name[0];
        form.scrollToField(firstErrorField);
        if (firstErrorField === 'email' && emailRef.current) emailRef.current.focus();
        if (firstErrorField === 'userName' && userNameRef.current) userNameRef.current.focus();
        if (firstErrorField === 'password' && passwordRef.current) passwordRef.current.focus();
    }, [form]);

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
            <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}>
                <Input placeholder="Email" ref={emailRef}/>
            </Form.Item>
            <Form.Item name="userName" rules={[{ required: true, message: 'Vui lòng nhập Tên tài khoản!' }]}>
                <Input placeholder="Tên tài khoản" ref={userNameRef}/>
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu!' }]}>
                <Input.Password placeholder="Mật khẩu mới" ref={passwordRef} />
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
};

UserForm.defaultProps = {
    onFinish: noop,
};

export default UserForm;
