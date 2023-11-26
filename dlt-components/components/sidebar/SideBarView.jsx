import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const SideBarView = (props) => {
    const menuItems = [
        { key: 'jobs', title: 'Danh sách công việc', path: '/jobs' },
        { key: 'employers', title: 'Nhà tuyển dụng', path: '/employers' },
        { key: 'profile', title: 'Hồ sơ', path: '/profile' },
        // { key: 'settings', title: 'Cài đặt', path: '/settings' },
    ];

    return (
        <Menu mode="vertical" theme="light" style={{ padding: '24px 8px', gap: 8 }}>
            {menuItems.map((item) => (
                <Menu.Item key={item.key}>
                    <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default SideBarView;
