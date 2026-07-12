export interface FooterLink {
  label: string;
  route?: string;
  href?: string;
  external?: boolean;
  status?: boolean;
}

export interface FooterSection {
  icon: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  icon: string;
  href: string;
}
