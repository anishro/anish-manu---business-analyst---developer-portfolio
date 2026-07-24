import React, { useState, useMemo } from 'react';
import {
  BarChart2, Database, Globe, Monitor, Play, RefreshCw, CheckCircle, Sliders, Layers, ChevronRight, Download, Filter, Code, Sparkles, CreditCard, Laptop, Tablet, Smartphone, DollarSign, Users, ShieldAlert, ArrowUpRight
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { PROJECTS, SALES_SHOWCASE_DATA, SQL_PRESETS } from '../data/resumeData';
import { SqlQueryPreset } from '../types';

export const ProjectShowcase: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>('proj-sales-dashboard');

  // --- State for Showcase 1: Sales Performance Dashboard & Simulator ---
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');
  const [leadIncreasePct, setLeadIncreasePct] = useState<number>(15);
  const [crmResponseHours, setCrmResponseHours] = useState<number>(4);
  const [targetWinRatePct, setTargetWinRatePct] = useState<number>(28);

  // Filtered sales data
  const filteredSalesData = useMemo(() => {
    if (selectedRegion === 'ALL') {
      // Aggregate by month
      const monthsMap: Record<string, { month: string; revenue: number; target: number; leads: number; conversions: number }> = {};
      SALES_SHOWCASE_DATA.forEach(item => {
        if (!monthsMap[item.month]) {
          monthsMap[item.month] = { month: item.month, revenue: 0, target: 7500, leads: 0, conversions: 0 };
        }
        monthsMap[item.month].revenue += item.revenue;
        monthsMap[item.month].leads += item.leads;
        monthsMap[item.month].conversions += item.conversions;
      });
      return Object.values(monthsMap);
    }
    return SALES_SHOWCASE_DATA.filter(d => d.region === selectedRegion);
  }, [selectedRegion]);

  // Projected simulation output
  const simulatedResults = useMemo(() => {
    const baseRevenue = 7850; // Average baseline monthly revenue
    // Speed factor: 24h base, every 2 hours faster adds +3% conversion
    const speedBoost = Math.max(0, (24 - crmResponseHours) * 0.8);
    const leadBoost = leadIncreasePct * 0.7;
    const winRateFactor = (targetWinRatePct - 20) * 1.5;

    const projectedRevenue = Math.round(baseRevenue * (1 + (speedBoost + leadBoost + winRateFactor) / 100));
    const projectedDeals = Math.round((projectedRevenue / 850));
    const growthOverBaseline = Math.round(((projectedRevenue - baseRevenue) / baseRevenue) * 100);

    return { projectedRevenue, projectedDeals, growthOverBaseline };
  }, [leadIncreasePct, crmResponseHours, targetWinRatePct]);

  // --- State for Showcase 2: SQL Query Runner ---
  const [selectedSqlPreset, setSelectedSqlPreset] = useState<SqlQueryPreset>(SQL_PRESETS[0]);
  const [currentSqlText, setCurrentSqlText] = useState<string>(SQL_PRESETS[0].sql);
  const [isExecutingQuery, setIsExecutingQuery] = useState<boolean>(false);
  const [queryExecutionTime, setQueryExecutionTime] = useState<number>(18);
  const [queryResults, setQueryResults] = useState<Record<string, any>[]>(SQL_PRESETS[0].results);
  const [queryColumns, setQueryColumns] = useState<string[]>(SQL_PRESETS[0].columns);

  const handlePresetSelect = (preset: SqlQueryPreset) => {
    setSelectedSqlPreset(preset);
    setCurrentSqlText(preset.sql);
    setQueryResults(preset.results);
    setQueryColumns(preset.columns);
  };

  const handleRunSql = () => {
    setIsExecutingQuery(true);
    setTimeout(() => {
      setIsExecutingQuery(false);
      setQueryExecutionTime(Math.floor(Math.random() * 15) + 12);
      setQueryResults(selectedSqlPreset.results);
      setQueryColumns(selectedSqlPreset.columns);
    }, 400);
  };

  // --- State for Showcase 3: Market Trend Matrix ---
  const [activeMarketTab, setActiveMarketTab] = useState<'SWOT' | 'GAPS' | 'STRATEGY'>('SWOT');

  // --- State for Showcase 4: Web Solution Device & Simulator ---
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [intakeServiceType, setIntakeServiceType] = useState<string>('b2b_research');
  const [intakeRegionScope, setIntakeRegionScope] = useState<string>('apac_europe');
  const [intakeUrgency, setIntakeUrgency] = useState<string>('standard');
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const intakeEstimate = useMemo(() => {
    let base = 1200;
    if (intakeServiceType === 'custom_dashboard') base += 800;
    if (intakeServiceType === 'full_web_solution') base += 1500;
    if (intakeRegionScope === 'global') base += 600;
    if (intakeUrgency === 'express') base += 400;
    return base;
  }, [intakeServiceType, intakeRegionScope, intakeUrgency]);

  const handleSimulatePayment = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
    }, 1200);
  };

  const currentProject = PROJECTS.find(p => p.id === activeProjectId) || PROJECTS[0];

  return (
    <section id="showcase" className="py-20 bg-[#0F0F0F] text-[#F5F5F5] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171717] border border-[#262626] text-[11px] font-semibold uppercase tracking-widest text-[#A3A3A3]">
            <Sparkles className="w-3.5 h-3.5 text-[#A3A3A3]" />
            <span>Interactive Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F5F5F5]">
            Analytics & <span className="font-serif-editorial italic font-normal text-white">Technical Work</span>
          </h2>
          <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed">
            Interact with live business intelligence simulations, SQL query execution playgrounds, market gap matrices, and responsive web solutions built from Anish's real-world experience.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {PROJECTS.map((proj) => {
            const isSelected = proj.id === activeProjectId;
            return (
              <button
                key={proj.id}
                id={`btn-select-project-${proj.id}`}
                onClick={() => setActiveProjectId(proj.id)}
                className={`text-left p-4 rounded-xl border transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#171717] border-[#404040] shadow-xl'
                    : 'bg-[#121212] border-[#262626] hover:bg-[#171717] hover:border-[#333]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#F5F5F5]" />
                )}
                <div className="text-[10px] text-[#A3A3A3] font-mono uppercase tracking-widest mb-1.5">{proj.tools.slice(0, 2).join(' • ')}</div>
                <div className="font-semibold text-sm text-[#F5F5F5] line-clamp-1 group-hover:text-white transition-colors">
                  {proj.title}
                </div>
                <div className="text-xs text-[#737373] line-clamp-1 mt-0.5">{proj.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Main Interactive Container */}
        <div className="mt-8 bg-[#171717] border border-[#262626] rounded-xl overflow-hidden shadow-2xl">
          
          {/* Top Banner: Overview of active project */}
          <div className="p-6 bg-[#121212] border-b border-[#262626] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-[#262626] text-[#F5F5F5] border border-[#404040] text-[10px] uppercase tracking-wider font-medium">
                  {currentProject.subtitle}
                </span>
                {currentProject.tools.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-[#262626] text-[#A3A3A3] text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-medium text-[#F5F5F5]">{currentProject.title}</h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] mt-1 max-w-3xl leading-relaxed">{currentProject.description}</p>
            </div>

            <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
              <div className="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-[#262626] text-[#A3A3A3] text-xs font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="uppercase text-[10px] tracking-wider font-semibold">Interactive Mode</span>
              </div>
            </div>
          </div>

          {/* Interactive Playground Body based on demoType */}
          <div className="p-6">

            {/* SHOWCASE 1: Sales Performance & KPI Dashboard + Simulator */}
            {currentProject.demoType === 'dashboard' && (
              <div className="space-y-8">
                
                {/* Control Bar: Region Filter & Simulator Toggle */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                  <div className="flex items-center gap-3">
                    <Filter className="w-4 h-4 text-[#A3A3A3]" />
                    <span className="text-xs font-medium uppercase tracking-wider text-[#A3A3A3]">Region Filter:</span>
                    <div className="flex items-center gap-1 bg-[#171717] p-1 rounded-md border border-[#262626] text-xs">
                      {['ALL', 'APAC', 'Europe', 'MEA'].map((r) => (
                        <button
                          key={r}
                          id={`filter-region-${r}`}
                          onClick={() => setSelectedRegion(r)}
                          className={`px-3 py-1 rounded text-xs uppercase tracking-wider font-medium transition-all ${
                            selectedRegion === r
                              ? 'bg-[#262626] text-[#F5F5F5] border border-[#404040]'
                              : 'text-[#A3A3A3] hover:text-white'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-[#737373]">
                    Target Baseline: <strong className="text-[#F5F5F5]">$7,500/mo</strong> (Wiseguy Reports)
                  </div>
                </div>

                {/* KPI Overview Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                    <div className="text-xs text-[#737373] uppercase tracking-wider font-medium">Total Revenue (Sample)</div>
                    <div className="text-2xl font-light font-serif-editorial italic text-[#F5F5F5] mt-1">$14,250</div>
                    <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      <span>18.5% over target</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                    <div className="text-xs text-[#737373] uppercase tracking-wider font-medium">Avg Monthly Run Rate</div>
                    <div className="text-2xl font-light font-serif-editorial italic text-[#F5F5F5] mt-1">$7,850/mo</div>
                    <div className="text-xs text-[#A3A3A3] mt-1">Exceeding $7.5k quota</div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                    <div className="text-xs text-[#737373] uppercase tracking-wider font-medium">Avg Deal Win Rate</div>
                    <div className="text-2xl font-light font-serif-editorial italic text-[#F5F5F5] mt-1">29.4%</div>
                    <div className="text-xs text-[#A3A3A3] mt-1">CRM lead qualification</div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                    <div className="text-xs text-[#737373] uppercase tracking-wider font-medium">Top Market Penetration</div>
                    <div className="text-xl font-medium text-[#F5F5F5] mt-1">APAC & Europe</div>
                    <div className="text-xs text-[#A3A3A3] mt-1">Enterprise B2B clients</div>
                  </div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Revenue vs Target Trend Chart */}
                  <div className="lg:col-span-7 bg-[#0F0F0F] p-5 rounded-lg border border-[#262626]">
                    <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-4">
                      <div>
                        <h4 className="font-medium text-sm text-[#F5F5F5]">Monthly Revenue vs $7,500 Target</h4>
                        <p className="text-xs text-[#737373]">Tracking regional revenue consistency in USD</p>
                      </div>
                      <span className="text-[10px] font-mono text-[#A3A3A3] bg-[#1A1A1A] px-2.5 py-1 rounded border border-[#262626] uppercase tracking-wider">
                        {selectedRegion} View
                      </span>
                    </div>

                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={filteredSalesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#F5F5F5" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#F5F5F5" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#262626" opacity={0.8} />
                          <XAxis dataKey="month" stroke="#737373" fontSize={11} />
                          <YAxis stroke="#737373" fontSize={11} />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#171717', borderColor: '#333', borderRadius: '6px', color: '#fff', fontSize: '12px' }}
                          />
                          <Area type="monotone" dataKey="revenue" name="Actual Revenue ($)" stroke="#F5F5F5" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
                          <Area type="monotone" dataKey="target" name="Monthly Target ($)" stroke="#737373" strokeWidth={1} strokeDasharray="4 4" fill="none" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Regional Breakdown Bar Chart */}
                  <div className="lg:col-span-5 bg-[#0F0F0F] p-5 rounded-lg border border-[#262626]">
                    <div className="pb-4 border-b border-[#262626] mb-4">
                      <h4 className="font-medium text-sm text-[#F5F5F5]">Regional Revenue Split</h4>
                      <p className="text-xs text-[#737373]">Comparing market contribution across regions</p>
                    </div>

                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { region: 'APAC', revenue: 3630, leads: 51 },
                            { region: 'Europe', revenue: 3100, leads: 43 },
                            { region: 'MEA', regionName: 'MEA', revenue: 2080, leads: 30 }
                          ]}
                          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#262626" opacity={0.8} />
                          <XAxis dataKey="region" stroke="#737373" fontSize={11} />
                          <YAxis stroke="#737373" fontSize={11} />
                          <Tooltip
                            contentStyle={{ backgroundColor: '#171717', borderColor: '#333', borderRadius: '6px', color: '#fff', fontSize: '12px' }}
                          />
                          <Bar dataKey="revenue" name="Avg Revenue ($)" fill="#A3A3A3" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                </div>

                {/* Interactive Revenue Impact Simulator Levers */}
                <div className="bg-[#0F0F0F] p-6 rounded-xl border border-[#262626]">
                  <div className="flex items-center gap-2 mb-4">
                    <Sliders className="w-5 h-5 text-[#A3A3A3]" />
                    <div>
                      <h4 className="font-medium text-base text-[#F5F5F5]">Revenue Scenario Simulator</h4>
                      <p className="text-xs text-[#737373]">Test how strategic operational levers impact projected monthly revenue.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    
                    {/* Lever 1: Inbound Lead Volume */}
                    <div className="space-y-2 bg-[#171717] p-4 rounded-lg border border-[#262626]">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#A3A3A3] font-medium">Inbound Lead Growth</span>
                        <span className="text-[#F5F5F5] font-bold font-mono">+{leadIncreasePct}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        step="5"
                        value={leadIncreasePct}
                        onChange={(e) => setLeadIncreasePct(Number(e.target.value))}
                        className="w-full h-1.5 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-white"
                      />
                      <p className="text-[10px] text-[#737373]">Simulates increased inbound marketing channels.</p>
                    </div>

                    {/* Lever 2: CRM Response Speed */}
                    <div className="space-y-2 bg-[#171717] p-4 rounded-lg border border-[#262626]">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#A3A3A3] font-medium">CRM Follow-Up Speed</span>
                        <span className="text-[#F5F5F5] font-bold font-mono">{crmResponseHours} Hours</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="24"
                        step="1"
                        value={crmResponseHours}
                        onChange={(e) => setCrmResponseHours(Number(e.target.value))}
                        className="w-full h-1.5 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-white"
                      />
                      <p className="text-[10px] text-[#737373]">Faster response reduces discovery drop-off.</p>
                    </div>

                    {/* Lever 3: Target Win Rate */}
                    <div className="space-y-2 bg-[#171717] p-4 rounded-lg border border-[#262626]">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#A3A3A3] font-medium">Win Rate Target</span>
                        <span className="text-[#F5F5F5] font-bold font-mono">{targetWinRatePct}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="45"
                        step="1"
                        value={targetWinRatePct}
                        onChange={(e) => setTargetWinRatePct(Number(e.target.value))}
                        className="w-full h-1.5 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-white"
                      />
                      <p className="text-[10px] text-[#737373]">Refined requirements gathering boosts win rate.</p>
                    </div>

                  </div>

                  {/* Simulator Outcome Output */}
                  <div className="mt-6 p-4 rounded-lg bg-[#171717] border border-[#333] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#262626] border border-[#404040] flex items-center justify-center text-[#F5F5F5] font-bold">
                        <DollarSign className="w-5 h-5 text-[#F5F5F5]" />
                      </div>
                      <div>
                        <div className="text-[11px] text-[#A3A3A3] font-medium uppercase tracking-wider">Simulated Monthly Forecast</div>
                        <div className="text-2xl font-serif-editorial italic text-white">
                          ${simulatedResults.projectedRevenue.toLocaleString()}{' '}
                          <span className="text-xs font-sans not-italic text-[#737373]">/ month</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono">
                      <div className="bg-[#0F0F0F] px-3 py-1.5 rounded border border-[#262626]">
                        <span className="text-[#737373]">Closed Deals: </span>
                        <strong className="text-emerald-400">{simulatedResults.projectedDeals}</strong>
                      </div>
                      <div className="bg-[#0F0F0F] px-3 py-1.5 rounded border border-[#262626]">
                        <span className="text-[#737373]">Growth: </span>
                        <strong className="text-[#F5F5F5]">+{simulatedResults.growthOverBaseline}%</strong>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* SHOWCASE 2: SQL Analytics Playground */}
            {currentProject.demoType === 'sql_runner' && (
              <div className="space-y-6">
                
                {/* Preset SQL selector tabs */}
                <div className="flex flex-wrap gap-2">
                  {SQL_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      id={`btn-sql-preset-${preset.id}`}
                      onClick={() => handlePresetSelect(preset)}
                      className={`px-3.5 py-2 rounded-md text-xs font-medium uppercase tracking-wider transition-all ${
                        selectedSqlPreset.id === preset.id
                          ? 'bg-[#F5F5F5] text-[#0F0F0F] font-semibold'
                          : 'bg-[#0F0F0F] text-[#A3A3A3] hover:text-white border border-[#262626]'
                      }`}
                    >
                      {preset.title}
                    </button>
                  ))}
                </div>

                {/* SQL Code Editor Frame */}
                <div className="bg-[#0F0F0F] rounded-lg border border-[#262626] overflow-hidden">
                  <div className="p-3 bg-[#121212] border-b border-[#262626] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#A3A3A3]" />
                      <span className="text-xs font-mono font-bold text-[#F5F5F5]">PostgreSQL Query Console</span>
                    </div>

                    <button
                      id="btn-run-sql-query"
                      onClick={handleRunSql}
                      disabled={isExecutingQuery}
                      className="flex items-center gap-2 px-4 py-1.5 rounded bg-[#F5F5F5] hover:bg-white text-[#0F0F0F] font-semibold text-xs transition-all uppercase tracking-wider"
                    >
                      {isExecutingQuery ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Executing...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Execute SQL</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 bg-[#0F0F0F] font-mono text-xs text-[#F5F5F5] leading-relaxed overflow-x-auto whitespace-pre">
                    {currentSqlText}
                  </div>

                  <div className="px-4 py-2 bg-[#121212] border-t border-[#262626] text-[11px] text-[#737373] flex items-center justify-between">
                    <span>{selectedSqlPreset.explanation}</span>
                    <span className="font-mono text-emerald-400">Executed in {queryExecutionTime}ms</span>
                  </div>
                </div>

                {/* SQL Results Output Table */}
                <div className="bg-[#0F0F0F] rounded-lg border border-[#262626] overflow-hidden">
                  <div className="p-3 bg-[#121212] border-b border-[#262626] flex items-center justify-between">
                    <span className="text-xs font-medium text-[#A3A3A3] uppercase tracking-wider">
                      Results Output ({queryResults.length} records)
                    </span>
                    <span className="text-[10px] text-[#737373] font-mono">STATUS: 200 OK</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-[#F5F5F5]">
                      <thead className="bg-[#121212] text-[#737373] font-mono border-b border-[#262626] uppercase text-[10px]">
                        <tr>
                          {queryColumns.map((col) => (
                            <th key={col} className="px-4 py-3 font-semibold">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1F1F1F]">
                        {queryResults.map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#1A1A1A] transition-colors">
                            {Object.values(row).map((val, cellIdx) => (
                              <td key={cellIdx} className="px-4 py-3 font-mono">
                                {typeof val === 'number' && val > 100 ? `$${val.toLocaleString()}` : String(val)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* SHOWCASE 3: Market Trend & Competitor Analysis Matrix */}
            {currentProject.demoType === 'market_matrix' && (
              <div className="space-y-6">
                
                {/* Sub-tab navigation */}
                <div className="flex border-b border-[#262626] text-xs font-medium">
                  <button
                    onClick={() => setActiveMarketTab('SWOT')}
                    className={`px-4 py-2.5 border-b-2 uppercase tracking-wider transition-all ${
                      activeMarketTab === 'SWOT' ? 'border-[#F5F5F5] text-[#F5F5F5]' : 'border-transparent text-[#737373] hover:text-[#F5F5F5]'
                    }`}
                  >
                    Regional SWOT
                  </button>
                  <button
                    onClick={() => setActiveMarketTab('GAPS')}
                    className={`px-4 py-2.5 border-b-2 uppercase tracking-wider transition-all ${
                      activeMarketTab === 'GAPS' ? 'border-[#F5F5F5] text-[#F5F5F5]' : 'border-transparent text-[#737373] hover:text-[#F5F5F5]'
                    }`}
                  >
                    Market Gaps
                  </button>
                  <button
                    onClick={() => setActiveMarketTab('STRATEGY')}
                    className={`px-4 py-2.5 border-b-2 uppercase tracking-wider transition-all ${
                      activeMarketTab === 'STRATEGY' ? 'border-[#F5F5F5] text-[#F5F5F5]' : 'border-transparent text-[#737373] hover:text-[#F5F5F5]'
                    }`}
                  >
                    Strategy Recommendations
                  </button>
                </div>

                {activeMarketTab === 'SWOT' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                      <div className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-wider mb-2">Strengths (APAC & Europe)</div>
                      <ul className="text-xs text-[#A3A3A3] space-y-1.5 list-disc list-inside">
                        <li>High client demand for customized B2B research reports in energy & tech.</li>
                        <li>Strong client discovery protocols leading to $7,500+ monthly revenue.</li>
                        <li>Agile CRM tracking ensuring rapid lead qualification and engagement.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                      <div className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-wider mb-2">Opportunities (MEA Region)</div>
                      <ul className="text-xs text-[#A3A3A3] space-y-1.5 list-disc list-inside">
                        <li>High growth in energy & infrastructure research demands in MEA.</li>
                        <li>Bundling research insights with custom interactive Power BI client dashboards.</li>
                        <li>Expanding long-term annual subscription contracts vs one-off reports.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                      <div className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-wider mb-2">Competitive Positioning</div>
                      <p className="text-xs text-[#A3A3A3] leading-relaxed">
                        Wiseguy Reports competes with international market intelligence providers. Key differentiator lies in tailored pre-sales consulting and post-delivery client walk-throughs.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                      <div className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-wider mb-2">Key Data Sources & Tools</div>
                      <p className="text-xs text-[#A3A3A3] leading-relaxed">
                        Utilized SQL query extraction, Excel pivot analysis, Power BI visual dashboards, and CRM sales log audit trails to synthesize findings.
                      </p>
                    </div>
                  </div>
                )}

                {activeMarketTab === 'GAPS' && (
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-medium text-[#F5F5F5]">Gap 1: Demand for Custom Interactive Reports vs Static PDFs</span>
                        <span className="text-[#F5F5F5] font-bold">85% Client Demand</span>
                      </div>
                      <div className="w-full bg-[#1A1A1A] h-1.5 rounded-full overflow-hidden mt-2">
                        <div className="bg-[#F5F5F5] h-full w-[85%]" />
                      </div>
                      <p className="text-xs text-[#737373] mt-2">Clients increasingly request web-based interactive dashboards alongside traditional report PDFs.</p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-medium text-[#F5F5F5]">Gap 2: Inbound Lead Qualification Turnaround Time</span>
                        <span className="text-[#A3A3A3] font-bold">Needs Speed Optimization</span>
                      </div>
                      <div className="w-full bg-[#1A1A1A] h-1.5 rounded-full overflow-hidden mt-2">
                        <div className="bg-[#A3A3A3] h-full w-[65%]" />
                      </div>
                      <p className="text-xs text-[#737373] mt-2">Reducing lead response time from 12 hours to under 4 hours increases proposal conversion rate by 22%.</p>
                    </div>
                  </div>
                )}

                {activeMarketTab === 'STRATEGY' && (
                  <div className="p-5 rounded-lg bg-[#0F0F0F] border border-[#262626] space-y-3 text-xs">
                    <h4 className="font-medium text-sm text-[#F5F5F5] uppercase tracking-wider">Strategic Roadmap Executed by Anish Manu:</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded bg-[#171717] border border-[#262626]">
                        <strong className="text-[#F5F5F5]">1. Pre-Sales Requirement Gathering Framework:</strong> Created standardized client discovery checklists to ensure 100% clarity before proposal submission.
                      </div>
                      <div className="p-3 rounded bg-[#171717] border border-[#262626]">
                        <strong className="text-[#F5F5F5]">2. Cross-Functional Operations Alignment:</strong> Bridged B2B sales teams directly with research analysts for faster order delivery.
                      </div>
                      <div className="p-3 rounded bg-[#171717] border border-[#262626]">
                        <strong className="text-[#F5F5F5]">3. CRM Hygiene & Pipeline Analytics:</strong> Standardized logging protocols across APAC, Europe, and MEA client touchpoints.
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* SHOWCASE 4: Web Development & Payment Gateway Showcase */}
            {currentProject.demoType === 'web_preview' && (
              <div className="space-y-6">
                
                {/* Viewport controls bar */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#A3A3A3]">Viewport:</span>
                    <div className="flex items-center gap-1 bg-[#171717] p-1 rounded border border-[#262626]">
                      <button
                        onClick={() => setViewportMode('desktop')}
                        className={`p-1.5 rounded text-xs flex items-center gap-1 font-medium transition-all ${
                          viewportMode === 'desktop' ? 'bg-[#262626] text-[#F5F5F5]' : 'text-[#737373] hover:text-white'
                        }`}
                      >
                        <Laptop className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Desktop</span>
                      </button>

                      <button
                        onClick={() => setViewportMode('tablet')}
                        className={`p-1.5 rounded text-xs flex items-center gap-1 font-medium transition-all ${
                          viewportMode === 'tablet' ? 'bg-[#262626] text-[#F5F5F5]' : 'text-[#737373] hover:text-white'
                        }`}
                      >
                        <Tablet className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Tablet</span>
                      </button>

                      <button
                        onClick={() => setViewportMode('mobile')}
                        className={`p-1.5 rounded text-xs flex items-center gap-1 font-medium transition-all ${
                          viewportMode === 'mobile' ? 'bg-[#262626] text-[#F5F5F5]' : 'text-[#737373] hover:text-white'
                        }`}
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Mobile</span>
                      </button>
                    </div>
                  </div>

                  <span className="text-xs text-[#A3A3A3] font-mono">ReactJS + Tailwind CSS</span>
                </div>

                {/* Simulated Browser Window Frame */}
                <div
                  className={`mx-auto transition-all duration-300 bg-[#0F0F0F] rounded-xl border border-[#262626] shadow-2xl overflow-hidden ${
                    viewportMode === 'mobile' ? 'max-w-xs' : viewportMode === 'tablet' ? 'max-w-lg' : 'w-full'
                  }`}
                >
                  {/* Browser Bar */}
                  <div className="bg-[#121212] px-4 py-2.5 border-b border-[#262626] flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                    </div>
                    <div className="flex-1 bg-[#0F0F0F] px-3 py-1 rounded text-[11px] font-mono text-[#737373] border border-[#262626] text-center truncate">
                      https://client-portal.anishmanu.dev/intake-calculator
                    </div>
                  </div>

                  {/* Simulated App Page Body */}
                  <div className="p-6 space-y-6 text-xs">
                    
                    <div className="text-center space-y-1">
                      <h4 className="text-base font-semibold text-[#F5F5F5]">Client Requirement Intake & Estimator</h4>
                      <p className="text-[#737373] text-[11px]">Interactive tool built by Anish Manu for automated project scoping.</p>
                    </div>

                    <div className="space-y-4 bg-[#171717] p-4 rounded-lg border border-[#262626]">
                      <div>
                        <label className="block text-[#A3A3A3] font-medium mb-1">Select Service Required:</label>
                        <select
                          value={intakeServiceType}
                          onChange={(e) => setIntakeServiceType(e.target.value)}
                          className="w-full bg-[#0F0F0F] border border-[#262626] rounded p-2 text-[#F5F5F5] focus:outline-none focus:border-[#404040]"
                        >
                          <option value="b2b_research">B2B Market Research & Competitive Study ($1,200)</option>
                          <option value="custom_dashboard">Power BI & SQL Dashboard Development ($2,000)</option>
                          <option value="full_web_solution">Full-Stack React Web Application ($2,700)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#A3A3A3] font-medium mb-1">Target Scope:</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setIntakeRegionScope('apac_europe')}
                            className={`p-2 rounded border text-center transition-all ${
                              intakeRegionScope === 'apac_europe' ? 'bg-[#262626] border-[#404040] text-[#F5F5F5]' : 'bg-[#0F0F0F] border-[#262626] text-[#737373]'
                            }`}
                          >
                            APAC & Europe
                          </button>
                          <button
                            type="button"
                            onClick={() => setIntakeRegionScope('global')}
                            className={`p-2 rounded border text-center transition-all ${
                              intakeRegionScope === 'global' ? 'bg-[#262626] border-[#404040] text-[#F5F5F5]' : 'bg-[#0F0F0F] border-[#262626] text-[#737373]'
                            }`}
                          >
                            Global + MEA (+$600)
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#A3A3A3] font-medium mb-1">Timeline Urgency:</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setIntakeUrgency('standard')}
                            className={`p-2 rounded border text-center transition-all ${
                              intakeUrgency === 'standard' ? 'bg-[#262626] border-[#404040] text-[#F5F5F5]' : 'bg-[#0F0F0F] border-[#262626] text-[#737373]'
                            }`}
                          >
                            Standard (2 Weeks)
                          </button>
                          <button
                            type="button"
                            onClick={() => setIntakeUrgency('express')}
                            className={`p-2 rounded border text-center transition-all ${
                              intakeUrgency === 'express' ? 'bg-[#262626] border-[#404040] text-[#F5F5F5]' : 'bg-[#0F0F0F] border-[#262626] text-[#737373]'
                            }`}
                          >
                            Express 5-Day (+$400)
                          </button>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#262626] flex items-center justify-between">
                        <div>
                          <div className="text-[#737373] text-[11px]">Estimated Investment:</div>
                          <div className="text-xl font-serif-editorial italic text-[#F5F5F5]">${intakeEstimate} USD</div>
                        </div>

                        <button
                          onClick={handleSimulatePayment}
                          disabled={paymentStatus === 'processing'}
                          className="flex items-center gap-1.5 px-4 py-2 rounded bg-[#F5F5F5] hover:bg-white text-[#0F0F0F] font-semibold uppercase text-xs tracking-wider transition-all"
                        >
                          <CreditCard className="w-3.5 h-3.5" />
                          <span>{paymentStatus === 'processing' ? 'Processing...' : 'Checkout'}</span>
                        </button>
                      </div>

                      {paymentStatus === 'success' && (
                        <div className="p-3 rounded bg-[#0F0F0F] border border-emerald-900 text-emerald-400 flex items-center gap-2 animate-fadeIn">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Payment Gateway Webhook Fired! Invoice generated & CRM deal logged.</span>
                        </div>
                      )}

                    </div>

                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
