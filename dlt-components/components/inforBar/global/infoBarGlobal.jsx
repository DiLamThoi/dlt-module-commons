import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Subject } from 'rxjs';
import { Button, Layout } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import JobContainer from '@dlt-components/components/job/JobContainer';
import { CloseCircleOutlined } from '@ant-design/icons';
import { JOB_TYPE_VIEW } from '@dlt-components/components/job/constants/jobConstants';
import { INFOBAR_TYPE } from '../constants/infoBarConstants';
import EmployerContainer from '@dlt-components/components/employer/EmployerContainer';
import { EMPLOYER_TYPE_VIEW } from '@dlt-components/components/employer/constants/employerConstants';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useToken } from '@dlt-components/hooks';
import { Resizable } from 'react-resizable';
const { Sider } = Layout;

const subject = new Subject(null);

const showJobInfoBar = (jobId) => {
    subject.next({ id: jobId, type: INFOBAR_TYPE.JOB });
};

const showEmployerInfoBar = (employerId) => {
    subject.next({ id: employerId, type: INFOBAR_TYPE.EMPLOYER });
};

const closeInfoBar = () => subject.next({ type: null });

const InfoBarGlobal = () => {
    const token = useToken();

    const [type, setType] = useState(null);
    const [id, setId] = useState('');

    const listenSubjectChange = useCallback((paramProps) => {
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
        case INFOBAR_TYPE.JOB:
            return 'Chi tiết công việc';
        case INFOBAR_TYPE.EMPLOYER:
            return 'Chi tiết nhà tuyển dụng';
        default:
            return null;
        }
    }, [type]);

    const renderContent = () => {
        switch (type) {
        case INFOBAR_TYPE.JOB:
            return <JobContainer key={id} jobId={id} typeView={JOB_TYPE_VIEW.DETAIL} />;
        case INFOBAR_TYPE.EMPLOYER:
            return <EmployerContainer key={id} employerId={id} typeView={EMPLOYER_TYPE_VIEW.DETAIL}/>;
        default:
            return null;
        }
    };

    return type && (
        <Sider width={800} theme="light">
            <PerfectScrollbar>
                <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            height: 60,
                            backgroundColor: token.colorBgContainer,
                            boxShadow: token.boxShadow,
                            padding: token.paddingXS,
                            marginBottom: token.marginSM,
                            color: token.colorTextBase,
                            fontWeight: token.fontWeightStrong,
                            fontSize: token.fontSizeHeading3,
                        }}
                    >
                        <span style={{ flex: 1 }}>{title}</span>
                        <Button type="text" shape="circle" icon={<CloseCircleOutlined />} onClick={closeInfoBar}/>
                    </div>
                    {renderContent()}
                </div>
            </PerfectScrollbar>
        </Sider>
    );
};

export const InfoBarInstant = {
    showJobInfoBar,
    showEmployerInfoBar,
    closeInfoBar,
    InfoBarSubject: subject,
};

export default InfoBarGlobal;
