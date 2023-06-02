import { BaseForms } from '../containers/types';

export interface FormAutoCompleteProps extends BaseForms {
  label: string;
  name: string;
  placeholder: string;
  options: any;
}

export interface IntegerStepProps extends BaseForms {
  minVal: number;
  maxVal: number;
  label: string;
  name: string;
}
