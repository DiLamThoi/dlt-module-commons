import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, theme } from 'antd';

const SideBarView = (props) => {
    const { token } = theme.useToken();

    const menuItems = [
        { key: 'jobs', title: 'Danh sách công việc', path: '/jobs' },
        { key: 'employers', title: 'Nhà tuyển dụng', path: '/employers' },
        // { key: 'profile', title: 'Hồ sơ', path: '/profile' },
        // { key: 'settings', title: 'Cài đặt', path: '/settings' },
    ];

    return (
        <Menu mode="vertical" theme="light" style={{ padding: '24px 8px', gap: 8 }}>
            {menuItems.map((item) => (
                <Menu.Item key={item.key}>
                    <Link to={item.path}>
                        <span style={{ color: token.colorTextSecondary, fontWeight: token.fontWeightStrong }}>{item.title}</span>
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default SideBarView;
