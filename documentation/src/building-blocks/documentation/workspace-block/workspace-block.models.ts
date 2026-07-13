import { IconDescription } from '../../icon/icon.models';

export interface WorkspaceBlock {
  header: string;
  subtitle: string;
  description: string;
  image: string;
  badges: WorkspaceBadge[];
}

export interface WorkspaceBadge {
  label: string;
  icon?: IconDescription;
}
