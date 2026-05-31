import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GitBranch, Radar, Database, ExternalLink, Siren, SearchCheck, Workflow } from 'lucide-react';

export function SecurityOpsShowcase() {
  const workflowSteps = [
    'Collect Logs',
    'Detect & Correlate',
    'Enrich with Threat Intel',
    'Triage Alerts',
    'Investigate Incident',
    'Report & Improve Detection'
  ];

  const investigationExamples = [
    {
      title: 'SSH Brute Force Investigation',
      detail:
        'Correlated failed logins, off-hours access, and privilege escalation indicators to build incident timelines and prioritize SOC response.',
      icon: Siren
    },
    {
      title: 'Phishing Header Triage',
      detail:
        'Validated SPF, DKIM, and DMARC, extracted IOCs, and enriched domains and IPs through threat intelligence feeds for analyst action.',
      icon: SearchCheck
    },
    {
      title: 'Behavioral Anomaly Review',
      detail:
        'Applied UBA risk scoring on user activity patterns to identify high-risk accounts and support incident response escalation decisions.',
      icon: Radar
    }
  ];

  const references = [
    {
      label: 'MITRE ATT&CK Knowledge Base',
      href: 'https://attack.mitre.org/'
    },
    {
      label: 'VirusTotal Threat Intelligence',
      href: 'https://www.virustotal.com/'
    },
    {
      label: 'AbuseIPDB Reputation Intelligence',
      href: 'https://www.abuseipdb.com/'
    }
  ];

  return (
    <section className="py-20 px-6" id="security-ops">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            SOC Operations Showcase
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto">
            Cybersecurity Analyst portfolio highlights focused on SOC Analyst, SIEM, Threat Detection,
            Incident Response, Threat Intelligence, IOC Analysis, Detection Engineering, and Security Automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-cyan-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Cybersecurity Career Objective</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Build a SOC Analyst L1 career in Blue Team operations by applying SIEM monitoring,
              threat detection, incident reporting, and automation-driven investigation workflows in
              enterprise security environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="text-blue-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Featured GitHub Repository</h3>
            </div>
            <p className="text-gray-300 mb-5">
              SIEM Log Analyzer for SSH Threat Detection: SOC-ready pipeline with MITRE ATT&CK mapping,
              IOC extraction, event correlation, severity scoring, and analyst-facing incident reporting.
            </p>
            <a
              href="https://github.com/srikruthireddy-pinnapureddy/-SIEM-Log-Analyzer-for-SSH-Threat-Detection-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300"
            >
              View Featured Repository
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Workflow className="text-purple-400" size={24} />
            <h3 className="text-2xl font-bold text-white">SOC Workflow Diagram</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
            {workflowSteps.map((step, index) => (
              <div key={step} className="relative">
                <div className="h-full rounded-lg border border-purple-400/30 bg-purple-500/10 px-3 py-4 text-center text-sm text-purple-200">
                  {step}
                </div>
                {index < workflowSteps.length - 1 && (
                  <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-purple-300">{'->'}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">MITRE ATT&CK and Threat Intelligence</h3>
            <p className="text-gray-300 mb-4">
              Detection logic and incident reporting align with ATT&CK techniques, IOC analysis,
              and enrichment workflows using open threat intelligence sources.
            </p>
            <div className="space-y-3">
              {references.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-cyan-200 hover:bg-cyan-500/20 transition-all duration-300"
                >
                  <span>{item.label}</span>
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Project Architecture Diagram</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3">Log Sources and Email Headers</div>
              <div className="rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3">Parsing and IOC Extraction Pipeline</div>
              <div className="rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3">Threat Intelligence Enrichment Layer</div>
              <div className="rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3">Severity Scoring and Alert Prioritization</div>
              <div className="rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3">SOC Dashboard and Incident Reporting</div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-green-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Security Dashboard Screenshots</h3>
            </div>
            <p className="text-gray-300 mb-5">
              Streamlit SOC dashboards present login anomalies, phishing indicators, risk score trends,
              and incident-response-ready outputs for Security Monitoring workflows.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-green-400/30 bg-green-500/10 px-4 py-6 text-center text-green-200 text-sm">SSH Detection Dashboard</div>
              <div className="rounded-lg border border-green-400/30 bg-green-500/10 px-4 py-6 text-center text-green-200 text-sm">Phishing Analysis Dashboard</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Incident Investigation Examples</h3>
            <div className="space-y-3">
              {investigationExamples.map((example) => (
                <div key={example.title} className="rounded-lg border border-gray-600/50 bg-gray-800/40 px-4 py-3">
                  <div className="flex items-center gap-2 mb-2">
                    <example.icon size={16} className="text-pink-400" />
                    <p className="text-white font-semibold text-sm">{example.title}</p>
                  </div>
                  <p className="text-gray-300 text-sm">{example.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
