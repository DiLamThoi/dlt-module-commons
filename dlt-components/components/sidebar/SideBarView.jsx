import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Menu, theme } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { noop } from 'lodash/util';

const SideBarView = (props) => {
    const { logout } = props;
    const { token } = theme.useToken();

    const menuItems = [
        { key: 'jobs', title: 'Danh sách công việc', path: '/jobs' },
        { key: 'employers', title: 'Nhà tuyển dụng', path: '/employers' },
        { key: 'profile', title: 'Hồ sơ', path: '/profile' },
        // { key: 'settings', title: 'Cài đặt', path: '/settings' },
    ];

    return (
        <div style={{ padding: '24px 8px', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Menu mode="vertical" theme="light" style={{ flex: 1, borderWidth: 0, gap: 8 }}>
                {menuItems.map((item) => (
                    <Menu.Item key={item.key}>
                        <Link to={item.path}>
                            <span style={{ color: token.colorTextSecondary, fontWeight: token.fontWeightStrong }}>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
            <Button
                type="text"
                onClick={logout}
                icon={<LogoutOutlined />}
                danger
                ghost
                style={{ fontWeight: token.fontWeightStrong }}
            >
                Đăng xuất
            </Button>
        </div>
    );
};

SideBarView.propTypes = {
    logout: PropTypes.func,
};

SideBarView.defaultProps = {
    logout: noop,
};

export default SideBarView;
