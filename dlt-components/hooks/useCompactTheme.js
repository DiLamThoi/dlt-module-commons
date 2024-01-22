import { useAntdContext } from '@dlt-components/context/AntdContext';

const useCompactTheme = () => {
    const context = useAntdContext();
    return {
        isCompact: context.isCompact,
        toggleCompact: context.toggleCompact,
    };
};

export default useCompactTheme;
