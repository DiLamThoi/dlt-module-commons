import { useAntdContext } from '@dlt-components/context/antd/AntdContext';

const useDarkTheme = () => {
    const context = useAntdContext();
    return {
        toggleDark: context.toggleDark,
        isDark: context.isDark,
    };
};

export default useDarkTheme;
