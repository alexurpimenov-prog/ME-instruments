export interface SequencerSpec {
  label: string;
  value: string;
}

export interface SequencerData {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  specs: SequencerSpec[];
  idealFor: string[];
}

export interface ProcessStepData {
  number: number;
  icon: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}
