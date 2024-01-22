import React from 'react';
import PropTypes from 'prop-types';
import { useToken } from '@dlt-components/hooks';
import { Form } from 'antd';
import DarkThemeSwitch from './theme/DarkThemeSwitch';
import EffectThemeSwitch from './effect/EffectThemeSwitch';
import CompactThemeSwitch from './compact/CompactThemeSwitch';

const SettingView = (props) => {
    const token = useToken();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: token.paddingSM }}>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    gap: 8,
                    backgroundColor: token.colorBgContainer,
                    boxShadow: token.boxShadowSecondary,
                    borderRadius: token.borderRadius,
                    padding: token.paddingSM,
                }}
            >
                <span style={{ color: token.colorTextBase, fontSize: token.fontSizeXL, fontWeight: token.fontWeightStrong }}>
                    Cài đặt hệ thống
                </span>
                <Form
                    labelCol={{
                        span: 10,
                        style: {
                            textAlign: 'start',
                            fontWeight: token.fontWeightStrong,
                        },
                    }}
                    wrapperCol={{ span: 12, style: { fontSize: token.fontSizeLG } }}
                    style={{ padding: token.paddingSM, width: '100%' }}
                    size="large"
                >
                    <Form.Item label="Chế độ tối">
                        <DarkThemeSwitch />
                    </Form.Item>
                    <Form.Item label="Hiệu ứng">
                        <EffectThemeSwitch />
                    </Form.Item>
                    <Form.Item label="Chế độ thu gọn">
                        <CompactThemeSwitch />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

SettingView.propTypes = {};

SettingView.defaultProps = {};

export default SettingView;
