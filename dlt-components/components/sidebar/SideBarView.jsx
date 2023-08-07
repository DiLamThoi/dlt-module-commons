import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const SideBarView = (props) => {
    return (
        <Sider width={200} theme="light">
            <Menu mode="vertical" theme="light">
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link to="/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key="settings">
                    <Link to="/settings">Settings</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default SideBarView;
