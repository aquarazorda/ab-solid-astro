import { createMemo, createSignal } from 'solid-js';

export const [langs, setLangs] = createSignal<Map<string, string> | undefined>(undefined);

fetch('https://newstatic.adjarabet.com/static/langkaNew.json?v=1678038124')
  .then(res => res.json())
  .then(res => new Map<string, string>(Object.entries(res)))
  .then(setLangs);

export const l = (key: string) => createMemo<string | undefined>(() => langs()?.get(key));

export default () => <></>;