import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const SideBarView = (props) => {
    return (
        <Menu mode="vertical" theme="light" style={{ padding: '24px 8px', gap: 8 }}>
            <Menu.Item key="home">
                <Link to="/">JobList</Link>
            </Menu.Item>
            <Menu.Item key="profile">
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="settings">
                <Link to="/settings">Settings</Link>
            </Menu.Item>
        </Menu>
    );
};

export default SideBarView;
