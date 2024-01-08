import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Subject } from 'rxjs';
import { Button, Layout, Space, theme } from 'antd';
import JobContainer from '@dlt-components/components/job/JobContainer';
import { CloseCircleOutlined } from '@ant-design/icons';
import { JOB_TYPE_VIEW } from '@dlt-components/components/job/constants/jobConstants';
const { Sider } = Layout;

const subject = new Subject(null);

export const showJobInfoBar = (jobId) => {
    subject.next({ id: jobId, type: 'JOB' });
};

export const closeInfoBar = () => subject.next();

const InfoBarGlobal = () => {
    const { token } = theme.useToken();

    const [type, setType] = useState(null);
    const [id, setId] = useState('');

    const listenSubjectChange = useCallback((paramProps = {}) => {
        setType(paramProps.type);
        setId(paramProps.id);
    }, []);

    useEffect(() => {
        const subscription = subject.subscribe((paramProps) => {
            listenSubjectChange(paramProps);
        });
        return () => subscription.unsubscribe();
    });

    const title = useMemo(() => {
        switch (type) {
        case 'JOB':
            return 'Chi tiết công việc';
        default:
            return null;
        }
    }, [type]);

    const renderContent = () => {
        switch (type) {
        case 'JOB':
            return <JobContainer key={id} jobId={id} typeView={JOB_TYPE_VIEW.DETAIL} />;
        default:
            return null;
        }
    };

    return type && (
        <Sider className="dlt-sider" theme="light" width={800}>
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                <div
                    style={{
                        position: 'sticky ',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        height: 60,
                        backgroundColor: token.colorBgBase,
                        boxShadow: token.boxShadow,
                        padding: token.paddingXS,
                        borderRadius: token.borderRadius,
                        marginBottom: token.marginXS,
                        color: token.colorTextBase,
                        fontWeight: token.fontWeightStrong,
                        fontSize: token.fontSizeHeading3,
                    }}
                >
                    <span style={{ flex: 1 }}>{title}</span>
                    <Button type="text" icon={<CloseCircleOutlined />} onClick={closeInfoBar}/>
                </div>
                {renderContent()}
            </div>
        </Sider>
    );
};

export default InfoBarGlobal;
