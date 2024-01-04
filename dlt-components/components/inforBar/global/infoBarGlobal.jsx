import React, { useCallback, useEffect, useState } from 'react';
import { Subject } from 'rxjs';
import { Layout } from 'antd';
import JobContainer from '@dlt-components/components/job/JobContainer';
const { Sider } = Layout;

const subject = new Subject(null);

export const showJobInfoBar = (jobId) => {
    subject.next({ id: jobId, type: 'JOB' });
};

export const closeInfoBar = () => subject.next();

const InfoBarGlobal = () => {
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

    const renderView = () => {
        switch (type) {
        case 'JOB':
            return <JobContainer key={id} jobId={id}/>;
        default:
            return null;
        }
    };

    return type && (
        <Sider className="dlt-sider" theme="light" width={500}>
            {renderView()}
        </Sider>
    );
};

export default InfoBarGlobal;
