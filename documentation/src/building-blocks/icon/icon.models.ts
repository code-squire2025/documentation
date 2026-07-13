import { LucideIconInput } from '@lucide/angular';
import { BrandIcon } from './brand-icon/brand-icon.models';

export type IconType = 'lucide' | 'brand';
export type IconDescription = LucideIconDescription | BrandIconDescription;

export type LucideIconDescription = {
  type: 'lucide';
  icon: LucideIconInput;
}

export type BrandIconDescription = {
  type: 'brand';
  icon: BrandIcon;
}
