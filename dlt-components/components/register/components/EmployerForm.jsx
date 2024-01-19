import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Input, Row } from 'antd';
import { noop } from 'lodash/util';

const EmployerForm = (props) => {
    const { style, onFinish } = props;

    const [form] = Form.useForm();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const onFinishFailed = useCallback(({ values, errorFields, outOfDate }) => {
        const firstErrorField = errorFields[0].name[0];
        form.scrollToField(firstErrorField);
        if (firstErrorField === 'name' && nameRef.current) nameRef.current.focus();
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
            <Form.Item name="name" rules={[{ required: true, message: '' }]}>
                <Input placeholder="Tên công ty" ref={nameRef}/>
            </Form.Item>
            <Form.Item name="address">
                <Input placeholder="Địa chỉ" />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: '' }]}>
                <Input placeholder="Email" ref={emailRef} />
            </Form.Item>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item name="userName" rules={[{ required: true, message: '' }]}>
                        <Input placeholder="Tên tài khoản" ref={userNameRef} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="password" rules={[{ required: true, message: '' }]}>
                        <Input placeholder="Mật khẩu" ref={passwordRef} />
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
};

EmployerForm.defaultProps = {
    onFinish: noop,
};

export default EmployerForm;
