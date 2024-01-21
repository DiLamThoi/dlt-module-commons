import * as useHooksTs from 'usehooks-ts';
import * as usehooksUidotdev from '@uidotdev/usehooks';
import useTokenDLT from './useToken';
import useAccountDLT from './useAccount';
import useDarkThemeDLT from './useDarkTheme';
import useEffectModeDLT from './useEffectMode';
import useCompactThemeDLT from './useCompactTheme';

// useHooksTs
export const useElementSize = useHooksTs.useElementSize;
// usehooksUidotdev
export const useHover = usehooksUidotdev.useHover;
// useHookDLT
export const useToken = useTokenDLT;
export const useAccount = useAccountDLT;
export const useDarkTheme = useDarkThemeDLT;
export const useEffectMode = useEffectModeDLT;
export const useCompactTheme = useCompactThemeDLT;
