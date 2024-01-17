import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { InfoBarInstant } from '@dlt-components/components/inforBar/global/infoBarGlobal';
import { INFOBAR_TYPE } from '@dlt-components/components/inforBar/constants/infoBarConstants';

// CONTEXT
const GroupEmployerContext = createContext();

// PROVIDER
const GroupEmployerContextProvider = ({ children }) => {
    const [selectedEmployerId, setSelectedEmployerId] = useState(null);

    const store = useMemo(() => ({
        selectedEmployerId,
    }), [selectedEmployerId]);

    useEffect(() => {
        const subscription = InfoBarInstant.InfoBarSubject.subscribe(({ type, id }) => {
            if (!type) setSelectedEmployerId(null);
            else if (type === INFOBAR_TYPE.EMPLOYER) {
                setSelectedEmployerId(id);
            }
        });
        return () => subscription.unsubscribe();
    }, []);

    return (
        <GroupEmployerContext.Provider value={store}>
            {children}
        </GroupEmployerContext.Provider>
    );
};

GroupEmployerContextProvider.propTypes = {
    children: PropTypes.node,
};

// HOOK
const useGroupEmployerContext = () => {
    const context = useContext(GroupEmployerContext);
    if (!context) {
        throw new Error('useGroupEmployerContext must be used within a GroupEmployerContextProvider');
    }
    return {
        selectedEmployerId: context.selectedEmployerId,
    };
};

export { GroupEmployerContextProvider, useGroupEmployerContext };
