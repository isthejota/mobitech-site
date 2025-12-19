
export interface Product {
  id: string;
  name: string;
  image: string;
  category: 'smartphone' | 'tablet';
  highlight: string;
  price?: string;
  affiliateUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ExternalSite {
  name: string;
  description: string;
  url: string;
  icon: string;
}
