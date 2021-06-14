import { CheckboxStateReturn, useCheckboxState } from 'reakit/Checkbox';

export type SelectorOption = {
  id: string | number;
  label: string;
  disabled?: boolean;
};

export type UseSelector = {
  options: SelectorOption[];
  checkbox: CheckboxStateReturn;
};

export function useSelector(options: SelectorOption[] = []): UseSelector {
  const checkbox = useCheckboxState({
    state: options.filter(option => !option.disabled).map(option => option.id)
  });
  // TODO: Save this state in url
  return {
    options,
    checkbox
  };
}
