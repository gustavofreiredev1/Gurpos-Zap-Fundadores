export interface FounderRegistration {
  id: string;
  name: string;
  email: string;
  phone: string;
  groupCount: string;
  niche: string;
  createdAt: string;
  referralCode: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  highlight?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  community: string;
  members: string;
  avatar: string;
  quote: string;
  metrics: string;
}

export interface NotificationToastData {
  id: string;
  name: string;
  location: string;
  groups: string;
  timeAgo: string;
}
