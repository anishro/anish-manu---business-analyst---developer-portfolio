export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  startDate: string;
  endDate: string;
  summary?: string;
  achievements: string[];
  skillsApplied: string[];
  category: 'sales_bd' | 'web_dev' | 'internship';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tools: string[];
  category: 'analytics' | 'sql' | 'market_research' | 'web_dev';
  description: string;
  highlights: string[];
  demoType: 'dashboard' | 'sql_runner' | 'market_matrix' | 'web_preview';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface SqlQueryPreset {
  id: string;
  title: string;
  description: string;
  sql: string;
  explanation: string;
  results: Record<string, any>[];
  columns: string[];
}

export interface SalesDataRecord {
  month: string;
  region: 'APAC' | 'Europe' | 'MEA' | 'LATAM';
  revenue: number;
  target: number;
  leads: number;
  conversions: number;
  crmActivity: number;
}
