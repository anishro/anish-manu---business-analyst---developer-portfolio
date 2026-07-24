import { ExperienceItem, ProjectItem, EducationItem, CertificationItem, SkillGroup, SqlQueryPreset, SalesDataRecord } from '../types';

export const PERSONAL_INFO = {
  name: 'Anish Manu',
  title: 'Business Analyst & Development Executive',
  subtitle: 'Ex-Freelance Web Developer | Data Analytics & Strategic Market Expansion',
  location: 'Udaipur, Rajasthan, India',
  phone: '+91 86905 13219',
  emailPrimary: 'anishmanuudr@gmail.com',
  emailSecondary: 'anishmanu@zohomail.in',
  linkedin: 'https://linkedin.com/in/anishmanu',
  summary: `Business Analyst aspirant and Business Development Executive at WiseGuy Reports, delivering consistent monthly revenue of over $7,500 while driving market penetration across APAC, Europe, and MEA/LATAM. Backed by an MBA from MIT-WPU and a Bachelor of Computer Applications (BCA) with IBM & edX analytics certifications, I bridge the gap between technical web engineering (React, SQL, Python) and data-driven business strategy. My freelance web development experience enables me to translate complex business requirements into high-performing, user-centric solutions.`,
  keyStats: [
    { label: 'Monthly Revenue Generated', value: '$7,500+', subtext: 'Consistently achieved across global markets' },
    { label: 'Global Markets Covered', value: 'APAC, Europe, MEA', subtext: 'B2B international market expansion' },
    { label: 'Tech & Frontend Experience', value: '3+ Years', subtext: 'ReactJS, Angular, Flutter, SQL, Python' },
    { label: 'Academic Qualifications', value: 'MBA + BCA', subtext: 'MIT-WPU & Pacific University' },
  ],
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-bde-wiseguy',
    role: 'Business Development Executive',
    company: 'WiseGuy Reports',
    location: 'Pune / Remote',
    period: 'March 2025 – February 2026',
    startDate: '2025-03-03',
    endDate: '2026-02-27',
    category: 'sales_bd',
    summary: 'Achieved revenue targets exceeding $7,500 monthly by focusing on APAC, Europe, and MEA B2B research markets.',
    achievements: [
      'Achieved consistent monthly revenue targets of $7,500+ through strategic B2B sales and customized research solutions.',
      'Managed end-to-end client relationships across APAC, Europe, and MEA regions.',
      'Conducted detailed client discovery sessions to gather business requirements and translate them into actionable recommendations.',
      'Developed and executed international market penetration strategies using CRM analytics and performance reporting.',
      'Collaborated closely with cross-functional research, operations, and delivery teams to ensure successful project execution.'
    ],
    skillsApplied: ['B2B Sales', 'CRM Management', 'Requirements Gathering', 'Market Research', 'Stakeholder Communication', 'Data Interpretation']
  },
  {
    id: 'exp-mt-wiseguy',
    role: 'Management Trainee',
    company: 'WiseGuy Reports',
    location: 'Pune',
    period: 'November 2024 – February 2025',
    startDate: '2024-11-27',
    endDate: '2025-02-28',
    category: 'sales_bd',
    summary: 'Conducted customer requirement analysis, inbound lead qualification, and business proposal preparation.',
    achievements: [
      'Responded to inbound leads, conducted needs assessments, and presented report solutions to prospective corporate clients.',
      'Assisted in preparing comprehensive business proposals and solution recommendations.',
      'Guided customers through the purchasing process while ensuring smooth post-sale experience.',
      'Supported CRM record management and maintained accurate business performance data.'
    ],
    skillsApplied: ['Inbound Lead Nurturing', 'Business Proposals', 'Customer Needs Assessment', 'CRM Hygiene', 'Client Onboarding']
  },
  {
    id: 'exp-freelance-dev',
    role: 'Freelance Frontend Web Developer',
    company: 'Self-Employed',
    location: 'Udaipur, India',
    period: 'February 2021 – March 2024',
    startDate: '2021-02-03',
    endDate: '2024-03-31',
    category: 'web_dev',
    summary: 'Delivered custom, responsive web applications and e-commerce solutions for diverse clients.',
    achievements: [
      'Collaborated directly with clients to gather requirements and conduct review meetings, delivering user-centric UI/UX solutions.',
      'Converted complex business requirements into responsive web applications using ReactJS, Angular, Flutter, and low-code platforms.',
      'Advised clients on domain registration, hosting architecture, and coordinated end-to-end setup of payment gateway solutions.',
      'Managed multiple client projects simultaneously while maintaining high code quality and strict delivery timelines.'
    ],
    skillsApplied: ['ReactJS', 'JavaScript', 'Angular', 'Flutter', 'UI/UX Design', 'Payment Gateway Integration', 'Client Consulting']
  },
  {
    id: 'exp-totalenergies',
    role: 'Sales Intern',
    company: 'TotalEnergies',
    location: 'India',
    period: 'June 2024 – August 2024',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    category: 'internship',
    summary: 'Assisted with market analysis for lubricant products and gathered client feedback to identify purchasing trends.',
    achievements: [
      'Supported sales and marketing activities for lubricants and motor oils in the energy sector.',
      'Gathered customer feedback to analyze purchasing trends and identify regional market growth opportunities.',
      'Prepared market observation reports summarizing customer insights to improve engagement strategies.'
    ],
    skillsApplied: ['Market Analysis', 'Customer Feedback Loops', 'Energy Sector Insights', 'Trend Analysis', 'Report Writing']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-sales-dashboard',
    title: 'Sales Performance & KPI Dashboard',
    subtitle: 'Interactive Business Intelligence & Revenue Simulator',
    tools: ['Power BI', 'Excel', 'Recharts', 'Financial Modeling'],
    category: 'analytics',
    description: 'Developed interactive dashboards to visualize sales performance, track regional revenue targets, analyze deal conversion funnels, and simulate revenue growth scenarios.',
    highlights: [
      'Visualizes monthly revenue vs $7,500 target across APAC, Europe, and MEA markets.',
      'Interactive scenario slider allows testing impact of lead conversion rates and CRM response time.',
      'Automated reporting workflows to reduce manual analysis time by 40%.'
    ],
    demoType: 'dashboard'
  },
  {
    id: 'proj-sql-analytics',
    title: 'Business Analytics & SQL Query Engine',
    subtitle: 'Client Segmentation & Revenue Data Analysis',
    tools: ['SQL', 'PostgreSQL', 'Data Cleaning', 'Relational Database'],
    category: 'sql',
    description: 'Executed complex SQL queries to extract business insights, identify high-value client segments, optimize lead conversion bottlenecks, and clean transactional data.',
    highlights: [
      'Interactive query runner with pre-built SQL scripts for customer segmentation and churn risk.',
      'Performs data cleaning, CTE joins, window functions, and aggregated KPI summaries.',
      'Generates actionable tabular reports and instant visualization charts.'
    ],
    demoType: 'sql_runner'
  },
  {
    id: 'proj-market-trend',
    title: 'International Market Trend Analysis',
    subtitle: 'Competitive Landscape & Strategic Gap Matrix',
    tools: ['Market Research', 'Power BI', 'Competitive Intelligence', 'Excel'],
    category: 'market_research',
    description: 'Conducted competitor benchmarking and regional market trend analysis across APAC and Europe using publicly available datasets and CRM historical records.',
    highlights: [
      'Identified expansion gaps in B2B market research product lines.',
      'SWOT analysis and positioning matrix for corporate research offerings.',
      'Presented strategic recommendations to management for improved conversion.'
    ],
    demoType: 'market_matrix'
  },
  {
    id: 'proj-web-solutions',
    title: 'Interactive Web Solutions & Payment Gateway',
    subtitle: 'Client Requirement Intake & E-Commerce App',
    tools: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'Payment API'],
    category: 'web_dev',
    description: 'Full-stack client requirement intake tool and responsive e-commerce application prototype featuring multi-device viewport testing and live checkout simulator.',
    highlights: [
      'Live multi-device simulator (Desktop, Tablet, Mobile).',
      'Interactive client requirement intake form with instant estimate calculation.',
      'Payment gateway setup simulation with instant webhook notification.'
    ],
    demoType: 'web_preview'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Business & Strategy Analysis',
    description: 'Translating business goals into functional requirements, process workflows, and client solutions.',
    skills: [
      { name: 'Requirements Gathering', level: 95, highlight: true },
      { name: 'Stakeholder Management', level: 90, highlight: true },
      { name: 'Business Process Analysis', level: 92, highlight: true },
      { name: 'Gap Analysis & User Stories', level: 88 },
      { name: 'CRM Systems (HubSpot / Salesforce)', level: 90, highlight: true },
      { name: 'B2B Sales & Account Management', level: 95, highlight: true },
      { name: 'Agile & SDLC Fundamentals', level: 85 },
      { name: 'Client Discovery & Consulting', level: 92 }
    ]
  },
  {
    category: 'Data Analytics & BI',
    description: 'Leveraging data tools to generate actionable insights, KPIs, and executive reporting.',
    skills: [
      { name: 'SQL (Data Extraction & Cleaning)', level: 92, highlight: true },
      { name: 'Power BI & Dashboarding', level: 90, highlight: true },
      { name: 'Microsoft Excel (Advanced & Modeling)', level: 95, highlight: true },
      { name: 'Python (Data Analysis)', level: 82 },
      { name: 'KPI Reporting & Root Cause Analysis', level: 88, highlight: true },
      { name: 'Market Research & Trend Analysis', level: 90 }
    ]
  },
  {
    category: 'Technical & Web Development',
    description: 'Building responsive, high-performing web applications and technical integrations.',
    skills: [
      { name: 'ReactJS & JavaScript (ES6+)', level: 90, highlight: true },
      { name: 'HTML5 & CSS3 / Tailwind CSS', level: 95, highlight: true },
      { name: 'Angular & Flutter', level: 80 },
      { name: 'C++ & Rust', level: 75 },
      { name: 'Payment Gateway Integration', level: 88 },
      { name: 'REST APIs & Web Architecture', level: 88 }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-mba',
    degree: 'Master of Business Administration (MBA)',
    institution: 'MIT World Peace University (MIT-WPU) - School of Business',
    location: 'Pune, Maharashtra',
    period: '2023 – 2025',
    details: 'Specialization in Business Analytics, Marketing Strategy, and Corporate Leadership.'
  },
  {
    id: 'edu-bsc',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Pacific University of Higher Education',
    location: 'Udaipur, Rajasthan',
    period: '2018 – 2021',
    details: 'Strong technical foundation in Computer Applications, Software Engineering, Data Structures, SQL Databases, and Web Development.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-ibm',
    title: 'IBM Data Analytics Professional Certificate',
    issuer: 'IBM',
    year: '2024',
    icon: 'Award'
  },
  {
    id: 'cert-edx',
    title: 'edX Data Visualization Certification',
    issuer: 'edX',
    year: '2024',
    icon: 'BarChart3'
  }
];

export const ATS_KEYWORDS = [
  'Business Analyst', 'Business Analysis', 'Requirements Gathering', 'Functional Requirements',
  'Stakeholder Management', 'Business Process Improvement', 'Process Mapping', 'Gap Analysis',
  'User Stories', 'SDLC', 'Agile', 'Scrum', 'SQL', 'Power BI', 'Excel (Advanced)', 'Data Analysis',
  'Dashboard Development', 'KPI Reporting', 'Root Cause Analysis', 'Documentation',
  'Business Intelligence', 'Market Research', 'CRM', 'Client Requirement Analysis', 'Cross-functional Collaboration'
];

export const SALES_SHOWCASE_DATA: SalesDataRecord[] = [
  { month: 'Mar 2025', region: 'APAC', revenue: 3200, target: 2500, leads: 42, conversions: 12, crmActivity: 180 },
  { month: 'Mar 2025', region: 'Europe', revenue: 2800, target: 2500, leads: 38, conversions: 10, crmActivity: 165 },
  { month: 'Mar 2025', region: 'MEA', revenue: 1850, target: 1500, leads: 25, conversions: 7, crmActivity: 110 },
  
  { month: 'Apr 2025', region: 'APAC', revenue: 3450, target: 2500, leads: 48, conversions: 14, crmActivity: 205 },
  { month: 'Apr 2025', region: 'Europe', revenue: 2950, target: 2500, leads: 40, conversions: 11, crmActivity: 172 },
  { month: 'Apr 2025', region: 'MEA', revenue: 1900, target: 1500, leads: 28, conversions: 8, crmActivity: 125 },

  { month: 'May 2025', region: 'APAC', revenue: 3600, target: 2500, leads: 52, conversions: 15, crmActivity: 220 },
  { month: 'May 2025', region: 'Europe', revenue: 3100, target: 2500, leads: 44, conversions: 12, crmActivity: 190 },
  { month: 'May 2025', region: 'MEA', revenue: 2100, target: 1500, leads: 30, conversions: 9, crmActivity: 140 },

  { month: 'Jun 2025', region: 'APAC', revenue: 3800, target: 2500, leads: 55, conversions: 16, crmActivity: 240 },
  { month: 'Jun 2025', region: 'Europe', revenue: 3250, target: 2500, leads: 46, conversions: 13, crmActivity: 198 },
  { month: 'Jun 2025', region: 'MEA', revenue: 2200, target: 1500, leads: 32, conversions: 10, crmActivity: 150 },

  { month: 'Jul 2025', region: 'APAC', revenue: 4100, target: 2500, leads: 60, conversions: 18, crmActivity: 260 },
  { month: 'Jul 2025', region: 'Europe', revenue: 3400, target: 2500, leads: 49, conversions: 14, crmActivity: 210 },
  { month: 'Jul 2025', region: 'MEA', revenue: 2350, target: 1500, leads: 35, conversions: 11, crmActivity: 162 },
];

export const SQL_PRESETS: SqlQueryPreset[] = [
  {
    id: 'query-1',
    title: 'Top Accounts by Monthly Revenue & Region',
    description: 'Find accounts generating over $1,000 monthly, grouped by geographical market.',
    sql: `SELECT 
  client_id,
  client_name,
  region,
  industry,
  SUM(monthly_spend) AS total_revenue,
  COUNT(report_orders) AS total_reports_purchased
FROM client_accounts
WHERE account_status = 'Active'
GROUP BY client_id, client_name, region, industry
HAVING SUM(monthly_spend) >= 1000
ORDER BY total_revenue DESC;`,
    explanation: 'Uses GROUP BY and HAVING clauses to isolate top-tier B2B accounts across APAC, Europe, and MEA.',
    columns: ['Client ID', 'Client Name', 'Region', 'Industry', 'Total Revenue ($)', 'Reports Purchased'],
    results: [
      { client_id: 'CL-802', client_name: 'AeroTech Corp (APAC)', region: 'APAC', industry: 'Aerospace & Tech', total_revenue: 2850, total_reports_purchased: 4 },
      { client_id: 'CL-419', client_name: 'EuroResearch GmbH', region: 'Europe', industry: 'Market Intelligence', total_revenue: 2200, total_reports_purchased: 3 },
      { client_id: 'CL-931', client_name: 'Gulf Energy Solutions', region: 'MEA', industry: 'Energy & Lubricants', total_revenue: 1950, total_reports_purchased: 3 },
      { client_id: 'CL-104', client_name: 'Pacific Commerce Ltd', region: 'APAC', industry: 'E-Commerce & Retail', total_revenue: 1650, total_reports_purchased: 2 },
      { client_id: 'CL-512', client_name: 'Nordic Insights Group', region: 'Europe', industry: 'Consulting', total_revenue: 1400, total_reports_purchased: 2 }
    ]
  },
  {
    id: 'query-2',
    title: 'Lead Conversion Funnel & CRM Bottleneck',
    description: 'Calculate step-by-step conversion rates from Inbound Lead -> Discovery Call -> Proposal Sent -> Deal Closed.',
    sql: `SELECT 
  lead_source,
  COUNT(lead_id) AS total_inbound_leads,
  SUM(CASE WHEN discovery_completed = TRUE THEN 1 ELSE 0 END) AS discovery_calls,
  SUM(CASE WHEN proposal_sent = TRUE THEN 1 ELSE 0 END) AS proposals_sent,
  SUM(CASE WHEN deal_status = 'Closed Won' THEN 1 ELSE 0 END) AS closed_deals,
  ROUND(
    (SUM(CASE WHEN deal_status = 'Closed Won' THEN 1 ELSE 0 END) * 100.0 / COUNT(lead_id)), 2
  ) AS win_rate_percentage
FROM crm_inbound_leads
GROUP BY lead_source
ORDER BY closed_deals DESC;`,
    explanation: 'Evaluates win rate percentages by channel to highlight which lead sources deliver highest ROI.',
    columns: ['Lead Source', 'Inbound Leads', 'Discovery Calls', 'Proposals Sent', 'Closed Deals', 'Win Rate (%)'],
    results: [
      { lead_source: 'Direct Web Inquiries', total_inbound_leads: 120, discovery_calls: 98, proposals_sent: 76, closed_deals: 38, win_rate_percentage: 31.67 },
      { lead_source: 'LinkedIn B2B Outreach', total_inbound_leads: 95, discovery_calls: 70, proposals_sent: 52, closed_deals: 24, win_rate_percentage: 25.26 },
      { lead_source: 'Partner Referral Network', total_inbound_leads: 45, discovery_calls: 40, proposals_sent: 35, closed_deals: 22, win_rate_percentage: 48.89 },
      { lead_source: 'Inbound Organic Search', total_inbound_leads: 80, discovery_calls: 50, proposals_sent: 32, closed_deals: 12, win_rate_percentage: 15.00 }
    ]
  },
  {
    id: 'query-3',
    title: 'Customer Churn Risk & Engagement Scoring',
    description: 'Identify accounts with no CRM activity in the last 45 days for proactive retention.',
    sql: `SELECT 
  account_id,
  account_name,
  primary_contact,
  last_contact_date,
  DATEDIFF('day', last_contact_date, CURRENT_DATE) AS days_inactive,
  CASE 
    WHEN DATEDIFF('day', last_contact_date, CURRENT_DATE) > 60 THEN 'High Risk'
    WHEN DATEDIFF('day', last_contact_date, CURRENT_DATE) > 30 THEN 'Medium Risk'
    ELSE 'Low Risk'
  END AS churn_risk_tier
FROM client_crm_activity
WHERE DATEDIFF('day', last_contact_date, CURRENT_DATE) >= 30
ORDER BY days_inactive DESC;`,
    explanation: 'Calculates recency metrics to alert account managers before client relationship decay occurs.',
    columns: ['Account ID', 'Account Name', 'Primary Contact', 'Last Contact Date', 'Days Inactive', 'Risk Tier'],
    results: [
      { account_id: 'ACT-088', account_name: 'Apex Global Trade', primary_contact: 'Markus Vance', last_contact_date: '2026-05-10', days_inactive: 75, churn_risk_tier: 'High Risk' },
      { account_id: 'ACT-142', account_name: 'Solaria Energy Co', primary_contact: 'Elena Rostova', last_contact_date: '2026-06-01', days_inactive: 53, churn_risk_tier: 'Medium Risk' },
      { account_id: 'ACT-209', account_name: 'Kanto Robotics', primary_contact: 'Kenji Sato', last_contact_date: '2026-06-15', days_inactive: 39, churn_risk_tier: 'Medium Risk' }
    ]
  }
];
