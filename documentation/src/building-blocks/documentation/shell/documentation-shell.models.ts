import { IconDescription } from '../../icon/icon.models';

export interface DocuHeader {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  badges: DocuBadge[];
}

export interface DocuBadge {
  label: string;
  icon: IconDescription;
}
