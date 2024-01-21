import { useAntdContext } from '@dlt-components/context/antd/AntdContext';

const useCompactTheme = () => {
    const context = useAntdContext();
    return {
        isCompact: context.isCompact,
        toggleCompact: context.toggleCompact,
    };
};

export default useCompactTheme;
