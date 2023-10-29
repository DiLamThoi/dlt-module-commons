import { Button, Typography, Form, Input, Checkbox } from 'antd';

const LoginView = (props) => {
    const { onLogin } = props;

    const onFinish = (values) => {
        onLogin(values.username, values.password);
    };
    const onFinishFailed = (errorInfo) => {};

    return (
        <div style={{
            backgroundColor: '#fff',
            minWidth: 400,
            borderRadius: 8,
            paddingBottom: 14,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{ textAlign: 'center' }}>
                <Typography.Title level={2}>Đi làm thui!!!</Typography.Title>
            </div>
            <Form
                style={{ padding: '0px 8px' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item name="username">
                    <Input size="large" placeholder='Tài khoản' />
                </Form.Item>
                <Form.Item name="password">
                    <Input.Password size="large" placeholder='Mật khâu' />
                </Form.Item>
                {/* <Form.Item name="remember">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}
                <Form.Item>
                    <Button size="large"  type="primary" htmlType="submit" style={{ width: '100%' }}>Đăng nhập</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginView;
