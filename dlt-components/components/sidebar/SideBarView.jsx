import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, List } from 'antd';
import { useToken } from '@dlt-components/hooks';
import { LogoutOutlined } from '@ant-design/icons';
import { noop } from 'lodash/util';
import { InfoBarInstant } from '@dlt-components/components/inforBar/global/infoBarGlobal';
import WrapperScreen from '@dlt-components/screen/WrapperScreen';

const SideBarView = (props) => {
    const { logout } = props;
    const token = useToken();
    const navigate = useNavigate();
    const location = useLocation();
    
    const [selectedKey, setSelectedKey] = useState(null);

    const menuItems = useMemo(() => [
        { key: 'jobs', title: 'Danh sách công việc', path: '/jobs' },
        { key: 'employers', title: 'Nhà tuyển dụng', path: '/employers' },
        { key: 'profile', title: 'Hồ sơ', path: '/profile' },
        { key: 'settings', title: 'Cài đặt', path: '/settings' },
    ], []);

    useEffect(() => {
        menuItems.forEach((item) => {
            if (location.pathname.includes(item.path)) setSelectedKey(item.key);
        });
    }, [location, menuItems]);

    const onClickItem = useCallback((item) => {
        navigate(item.path);
        InfoBarInstant.closeInfoBar();
    }, [navigate]);

    const renderItem = useCallback((item) => {
        const selected = item.key === selectedKey;
        return(
            <Button
                key={item.key}
                size="large"
                onClick={() => onClickItem(item)}
                style={{
                    width: '100%',
                    marginBottom: token.marginXS,
                    borderWidth: 0,
                    backgroundColor: selected ? token.colorPrimaryBg : token.colorBgBase,
                }}
            >
                <span style={{ width: '100%', display: 'flex', color: token.colorTextSecondary, fontWeight: token.fontWeightStrong }}>
                    {item.title}
                </span>
            </Button>
        );
    }, [onClickItem, selectedKey, token]);

    return (
        <WrapperScreen>
            <List size="large" itemLayout="horizontal" dataSource={menuItems} renderItem={renderItem} style={{ flex: 1 }} />
            <Button
                type="text"
                onClick={logout}
                icon={<LogoutOutlined />}
                danger
                style={{ fontWeight: token.fontWeightStrong }}
            >
                Đăng xuất
            </Button>
        </WrapperScreen>
    );
};

SideBarView.propTypes = {
    logout: PropTypes.func,
};

SideBarView.defaultProps = {
    logout: noop,
};

export default SideBarView;
