import { RadioStateReturn, useRadioState } from 'reakit/Radio';

export type SelectorOption = {
  id: string | number;
  label: string;
  disabled?: boolean;
};

export type UseSelector = {
  selected: string | number;
  options: SelectorOption[];
  radio: RadioStateReturn;
};

export function useSelector(options: SelectorOption[]): UseSelector {
  const radio = useRadioState({ state: options?.[0].id });
  return {
    selected: radio.state,
    options,
    radio
  };
}
