import { useContext } from 'solid-js';

import {
  TonConnectUIContext,
  type TonConnectUIContextType,
} from './TonUIContext';

export function useTonConnectUI(): TonConnectUIContextType {
  const context = useContext(TonConnectUIContext);
  if (!context) {
    throw new Error('Unable to get TonConnectUIContext');
  }
  return context;
}