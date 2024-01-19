import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Form } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { USER_PROFILE_TYPE } from './constants/userConstants';
import { useToken } from '@dlt-components/hooks';

const UserProfileView = (props) => {
    const { data } = props;

    const token = useToken();

    const { id, email, firstName, lastName, fullName, userName } = data;

    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    const expandIcon = useCallback(({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />, []);

    const registerInfo = useMemo(() => (
        <Form
            labelCol={{
                span: 4,
                style: {
                    textAlign: 'start',
                    fontWeight: token.fontWeightStrong,
                },
            }}
            wrapperCol={{ span: 20, style: { fontSize: token.fontSizeLG } }}
            style={{ maxWidth: 600 }}
            size="large"
        >
            <Form.Item label="Tài khoản">
                <span>{userName}</span>
            </Form.Item>
            <Form.Item label="Email">
                <span>{email}</span>
            </Form.Item>
            <Form.Item label="Sđt" />
        </Form>
    ), [email, token, userName]);

    const personalInfo = useMemo(() => (
        <Form
            labelCol={{
                span: 4,
                style: {
                    textAlign: 'start',
                    fontWeight: token.fontWeightStrong,
                },
            }}
            wrapperCol={{ span: 20, style: { fontSize: token.fontSizeLG } }}
            style={{ maxWidth: 600 }}
            size="large"
        >
            <Form.Item label="Họ và tên">
                <span>{fullName}</span>
            </Form.Item>
            <Form.Item label="Ngày sinh" />
            <Form.Item label="Địa chỉ" />
        </Form>
    ), [fullName, token]);

    return (
        <div>
            <Collapse
                items={[
                    { key: USER_PROFILE_TYPE.REGISTER_INFO, label: 'Thông tin đăng ký', children: registerInfo },
                    { key: USER_PROFILE_TYPE.PERSONAL_INFO, label: 'Thông tin cá nhân', children: personalInfo },
                ]}
                defaultActiveKey={[USER_PROFILE_TYPE.PERSONAL_INFO]}
                expandIcon={expandIcon}
            />
        </div>
    );
};

UserProfileView.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        email: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        fullName: PropTypes.string,
        userName: PropTypes.string,
    }),
};

UserProfileView.defaultProps = {};

export default UserProfileView;
