import React, { createContext, useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { THEME_STORAGE_KEY } from './constant/antdConstants';
import { ConfigProvider, theme as themeAntd } from 'antd';
import { useLocalStorage } from 'usehooks-ts';
import { HappyProvider } from '@ant-design/happy-work-theme';

// CONTEXT
const AntdContext = createContext();

// PROVIDER
const AntdProvider = ({ children }) => {
    const [dark, setDark] = useLocalStorage(THEME_STORAGE_KEY.DARK_THEME, false);
    const [compact, setCompact] = useLocalStorage(THEME_STORAGE_KEY.COMPACT_THEME, false);
    const [effect, setEffect] = useLocalStorage(THEME_STORAGE_KEY.EFFECT_THEME, true);

    const toggleDark = useCallback(() => {
        setDark((prev) => !prev);
    }, [setDark]);

    const toggleCompact = useCallback(() => {
        setCompact((prev) => !prev);
    }, [setCompact]);

    const toggleEffect = useCallback(() => {
        setEffect((prev) => !prev);
    }, [setEffect]);

    const theme = useMemo(() => {
        const algorithm = [];
        if (dark) algorithm.push(themeAntd.darkAlgorithm);
        if (compact) algorithm.push(themeAntd.compactAlgorithm);
        return { algorithm };
    }, [compact, dark]);

    const store = useMemo(() => ({
        isDark: dark,
        toggleDark,
        isEffect: effect,
        toggleEffect,
        isCompact: compact,
        toggleCompact,
    }), [dark, toggleDark, effect, toggleEffect, compact, toggleCompact]);

    return (
        <AntdContext.Provider value={store}>
            <ConfigProvider theme={theme}>
                <HappyProvider disabled={!effect}>
                    {children}
                </HappyProvider>
            </ConfigProvider>
        </AntdContext.Provider>
    );
};

AntdProvider.propTypes = {
    children: PropTypes.node,
};

// HOOK
const useAntdContext = () => {
    const context = useContext(AntdContext);
    if (!context) {
        throw new Error('useAntdContext must be used within a AntdContext');
    }
    return {
        // Dark Theme
        toggleDark: context.toggleDark,
        isDark: context.isDark,
        // Effect Theme
        isEffect: context.isEffect,
        toggleEffect: context.toggleEffect,
        // Compact Theme
        isCompact: context.isCompact,
        toggleCompact: context.toggleCompact,
    };
};

export { AntdProvider, useAntdContext };
