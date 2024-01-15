import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Subject } from 'rxjs';
import { Button, Layout, theme } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import JobContainer from '@dlt-components/components/job/JobContainer';
import { CloseCircleOutlined } from '@ant-design/icons';
import { JOB_TYPE_VIEW } from '@dlt-components/components/job/constants/jobConstants';
import { INFOBAR_TYPE } from '../constants/infoBarConstants';
import EmployerContainer from '@dlt-components/components/employer/EmployerContainer';
import { EMPLOYER_TYPE_VIEW } from '@dlt-components/components/employer/constants/employerConstants';
import 'react-perfect-scrollbar/dist/css/styles.css';
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
    const { token } = theme.useToken();

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
        <Sider className="dlt-sider" theme="light" width={800}>
            <PerfectScrollbar>
                <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
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
