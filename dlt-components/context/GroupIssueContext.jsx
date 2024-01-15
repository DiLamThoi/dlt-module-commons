import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { InfoBarInstant } from '@dlt-components/components/inforBar/global/infoBarGlobal';
import { INFOBAR_TYPE } from '@dlt-components/components/inforBar/constants/infoBarConstants';

// CONTEXT
const GroupJobContext = createContext();

// PROVIDER
const GroupJobContextProvider = ({ children }) => {
    // const [jobIds, setJobIds] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState(null);

    const store = useMemo(() => ({
        // jobIds,
        // setJobIds,
        selectedJobId,
        // setSelectedJobId,
    }), [selectedJobId]);

    useEffect(() => {
        const subscription = InfoBarInstant.InfoBarSubject.subscribe(({ type, id }) => {
            if (!type) setSelectedJobId(null);
            else if (type === INFOBAR_TYPE.JOB) {
                setSelectedJobId(id);
            }
        });
        return () => subscription.unsubscribe();
    }, []);

    return (
        <GroupJobContext.Provider value={store}>
            {children}
        </GroupJobContext.Provider>
    );
};

GroupJobContextProvider.propTypes = {
    children: PropTypes.node,
};

// HOOK
const useGroupJobContext = () => {
    const context = useContext(GroupJobContext);
    if (!context) {
        throw new Error('useGroupJobContext must be used within a GroupJobContextProvider');
    }
    return {
        selectedJobId: context.selectedJobId,
    };
};

export { GroupJobContextProvider, useGroupJobContext };
