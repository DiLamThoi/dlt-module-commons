import { useAntdContext } from '@dlt-components/context/antd/AntdContext';

const useEffectMode = () => {
    const context = useAntdContext();
    return {
        isEffect: context.isEffect,
        toggleEffect: context.toggleEffect,
    };
};

export default useEffectMode;
