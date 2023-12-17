import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash/util';
import { FloatButton, Modal, theme } from 'antd';
import { AppstoreAddOutlined, PlusOutlined } from '@ant-design/icons';
import JobForm from './components/JobForm';

const CreateJobView = (props) => {
    const { typeView, createJob } = props;
    const { token } = theme.useToken();

    const [open, setOpen] = useState(false);

    const onOpen = useCallback(() => setOpen(true), []);
    const onClose = useCallback(() => setOpen(false), []);

    const Title = useMemo(() => (
        <div style={{ color: token.blue, fontSize: token.fontSizeHeading3 }}>
            <AppstoreAddOutlined style={{ marginRight: 8 }} size={30} />
            Đăng tin tuyển dụng
        </div>
    ), [token]);

    switch (typeView) {
    // case 'view':
    //     return <JobForm onFinish={createJob} />;
    // case 'modal':
    //     return (
    //         <Modal title={Title} open={open} onCancel={onClose} footer={null}>
    //             <JobForm onFinish={createJob} />
    //         </Modal>
    //     );
    case 'float':
        return (
            <React.Fragment>
                <FloatButton
                    shape="circle"
                    type="primary"
                    onClick={onOpen}
                    style={{ right: 24, width: 60, height: 60 }}
                    icon={<PlusOutlined />}
                    tooltip="Đăng tin tuyển dụng"
                />
                <Modal
                    title={Title}
                    open={open}
                    onCancel={onClose}
                    footer={null}
                    width={'60vw'}
                    styles={{
                        body: { overflow: 'auto', height: '60vh' },
                    }}
                >
                    <JobForm onFinish={createJob} />
                </Modal>
            </React.Fragment>
        );
    default:
        return null;
    }
};

CreateJobView.propTypes = {
    typeView: PropTypes.oneOf(['float', 'modal', 'view']),
    createJob: PropTypes.func,
};

CreateJobView.defaultProps = {
    typeView: 'float',
    createJob: noop,
};

export default CreateJobView;
