import { type Node, type Edge, MarkerType } from 'reactflow';
import type { LocalizedString } from '../lib/LanguageContext';

export interface DomainNodeData {
  label: LocalizedString;
  category?: string;
  isSubNode?: boolean;
  color?: string;
  description?: LocalizedString;
  focus?: LocalizedString[];
  isUnderAttack?: boolean;
}

export interface TreeNode {
  id: string;
  label: string;
  color?: string;
  children?: TreeNode[];
}

const cat = (id: string, color: string, label: string, children?: TreeNode[]): TreeNode => ({
  id, color, label, children
});

const sub = (id: string, label: string, children?: TreeNode[]): TreeNode => ({
  id, label, children
});

// --- LEFT PANEL DATA ---
const leftGroups: TreeNode[] = [
  cat('architecture', '#fcd34d', 'Security Architecture', [
    sub('endpoint-hygiene', 'Endpoint Hygiene', [
      sub('edr-xdr', 'EDR / XDR'),
      sub('mdm', 'Mobile Device Mgmt (MDM)'),
      sub('ngav', 'Next-Gen Antivirus (NGAV)'),
    ]),
    sub('data-protection', 'Data Protection', [
      sub('dlp', 'Data Leakage Prevention'),
      sub('data-classification', 'Data Classification'),
      sub('data-retention', 'Data Retention'),
    ]),
    sub('container-sec', 'Container/K8s Security'),
    sub('cloud-sec', 'Cloud Security', [
      sub('cspm', 'CSPM'),
      sub('casb', 'CASB'),
      sub('cnapp', 'CNAPP'),
    ]),
    sub('fed-id', 'Federated Identity'),
    sub('iam', 'Identity & Access Management', [
      sub('mfa-sso', 'MFA & SSO'),
      sub('pam', 'Privileged Access Management (PAM)'),
      sub('iga', 'Identity Governance (IGA)'),
    ]),
    sub('idm', 'Identity Management'),
    sub('access-control', 'Access Control', [
      sub('rbac-abac', 'RBAC / ABAC'),
    ]),
    sub('sec-engineering', 'Security Engineering', [
      sub('sec-automation', 'Security Automation'),
    ]),
    sub('network-design', 'Network Design', [
      sub('ids-ips', 'IDS / IPS'),
      sub('ddos-prevention', 'DDoS Prevention'),
      sub('sase', 'SASE (Secure Access Service Edge)'),
      sub('ztna', 'ZTNA (Zero Trust Network Access)'),
      sub('micro-segmentation', 'Micro-segmentation'),
    ]),
    sub('secure-build', 'Secure System Build', [
      sub('patch-mgmt', 'Patch Management'),
      sub('baseline-config', 'Baseline Configuration'),
    ]),
    sub('cryptography', 'Cryptography', [
      sub('key-secret', 'Key and Secret Management', [
        sub('vaulting', 'Vaulting'),
        sub('hsm', 'HSM'),
      ]),
      sub('cert-mgmt', 'Certificate Management (PKI)'),
      sub('enc-standards', 'Encryption Standards'),
    ]),
    sub('ot-ics', 'OT / ICS Security', [
      sub('scada', 'SCADA / PLC / DCS'),
    ]),
    sub('hardware-sec', 'Hardware Security', [
      sub('tpm', 'TPM / Secure Boot'),
    ]),
  ]),

  cat('frameworks', '#d9f99d', 'Frameworks and Standards', [
    sub('cis', 'CIS Top 20 Controls / CIS Benchmarks'),
    sub('nist', 'NIST Cybersecurity Framework'),
    sub('iso', 'ISO 27001 27017 27018'),
    sub('owasp', 'OWASP Top 10 (WebApp & API)'),
    sub('mitre', 'MITRE ATT&CK Framework'),
  ]),

  cat('ops', '#fef08a', 'Security Operation', [
    sub('threat-hunting', 'Threat Hunting'),
    sub('vuln-mgmt', 'Vulnerability Management'),
    sub('soar', 'SOAR'),
    sub('siem', 'SIEM'),
    sub('soc', 'Security Operation Centers'),
    sub('active-defense', 'Active Defense'),
    sub('incident-response', 'Incident Response', [
      sub('detection', 'Detection'),
      sub('investigation', 'Investigation'),
      sub('breach-notification', 'Breach Notification'),
      sub('containment', 'Containment'),
      sub('eradication', 'Eradication'),
    ]),
    sub('purple-team', 'Purple Team'),
    sub('red-team', 'Red Team', [
      sub('bas', 'Breach & Attack Simulation (BAS)'),
    ]),
    sub('blue-team', 'Blue Team'),
    sub('forensics', 'Forensics / DFIR'),
    sub('honeypots', 'Honeypots & Deception'),
    sub('mdr-mssp', 'MDR / MSSP Services'),
  ]),

  cat('career', '#38bdf8', 'Career Development', [
    sub('training', 'Training'),
    sub('coaches', 'Coaches and Role Models'),
    sub('peer-groups', 'Peer Groups'),
    sub('self-study', 'Self Study'),
    sub('certifications', 'Certifications'),
    sub('conferences', 'Conferences'),
  ]),

  cat('education', '#22d3ee', 'User Education', [
    sub('training-new', 'Training (new skills)'),
    sub('awareness', 'Awareness (reinforcement)'),
    sub('tabletop', 'Cyber security table-top exercise'),
  ]),

  cat('physical-iot', '#f472b6', 'Physical & IoT Security', [
    sub('iot-security', 'IoT Security'),
    sub('facility-controls', 'Facility Controls', [
      sub('biometrics', 'Biometrics & Badges'),
      sub('surveillance', 'Surveillance (CCTV)'),
    ]),
    sub('env-security', 'Environmental Security (HVAC, Power)'),
  ])
];

// --- RIGHT PANEL DATA ---
const rightGroups: TreeNode[] = [
  cat('appsec', '#fb923c', 'Application Security', [
    sub('cicd', 'CI/CD Pipeline Security'),
    sub('shift-left', '"Shift Left"'),
    sub('ssdlc', 'S-SDLC', [
      sub('sec-ux', 'Security UX'),
      sub('sec-qa', 'Security QA'),
      sub('api-sec', 'API Security'),
      sub('threat-modeling', 'Threat Modeling'),
    ]),
    sub('source-code-scan', 'Source Code Analysis', [
      sub('sast', 'Static Analysis (SAST)'),
      sub('iast', 'Interactive Analysis (IAST)'),
      sub('sca', 'Software Composition (SCA)'),
      sub('open-source-scan', 'Open Source Scan'),
    ]),
    sub('supply-chain-sec', 'Sw Supply Chain Security', [
      sub('sbom', 'SBOM (Software Bill of Materials)'),
      sub('slsa', 'SLSA Framework'),
    ]),
    sub('ai-sec', 'Securing AI / ML', [
      sub('llm-sec', 'LLM Security (OWASP Top 10)'),
      sub('model-poisoning', 'Model Poisoning Prevention'),
    ]),
    sub('web3-sec', 'Web3 & Smart Contract Sec'),
    sub('waf', 'Web App Firewall (WAF)'),
    sub('rasp', 'RASP (Runtime Protection)'),
    sub('api-gw', 'API Gateway Security'),
    sub('fuzzing', 'Fuzz Testing'),
  ]),

  cat('risk-assessment', '#fca5a5', 'Risk Assessment', [
    sub('vuln-scan', 'Vulnerability scan', [
      sub('assets-inventory', 'Assets Inventory'),
    ]),
    sub('data-flow', 'Data-Flow Diagram'),
    sub('third-party-risk', '3rd Party Risk', [
      sub('fourth-party-risk', '4th Party Risk'),
    ]),
    sub('pen-test', 'Penetration test', [
      sub('infra-pen-test', 'Infrastructure (Network and Systems)'),
      sub('social-engineering', 'Social Engineering'),
      sub('dast', 'DAST'),
      sub('app-pen-test', 'Application Pen Tests'),
    ]),
    sub('risk-monitoring', 'Risk Monitoring Services (Risk score)'),
  ]),

  cat('erm', '#fbcfe8', 'Enterprise Risk Management', [
    sub('risk-treatment', 'Risk Treatment Actions'),
    sub('risk-acceptance', 'Risk Acceptance Statement'),
    sub('cyber-insurance', 'Cyber Insurance'),
    sub('lines-of-defense', 'Lines of Defense', [
      sub('process-owners', '1. Process Owners'),
      sub('risk-mgmt-group', '2. Risk Mgmt Group'),
      sub('audit', '3. Audit'),
    ]),
    sub('risk-register', 'Risk Register'),
    sub('risk-appetite', 'Risk Appetite'),
    sub('crisis-mgmt', 'Crisis Management'),
    sub('bcp-dr', 'BCP/DR'),
    sub('soc1-soc2', 'SOC1/SOC2'),
  ]),

  cat('threat-intel', '#d8b4fe', 'Threat Intelligence', [
    sub('ti-external', 'External', [
      sub('ti-contextual-ext', 'Contextual'),
      sub('ti-iocs-ext', 'IOCs'),
      sub('ti-sharing-ext', 'Intel. Sharing'),
      sub('ti-osint', 'OSINT (Open Source)'),
      sub('ti-darkweb', 'Dark Web Monitoring'),
      sub('stix-taxii', 'STIX / TAXII Standards'),
      sub('misp', 'Threat Sharing (MISP)'),
    ]),
    sub('ti-internal', 'Internal', [
      sub('ti-contextual-int', 'Contextual'),
      sub('ti-iocs-int', 'IOCs'),
      sub('ti-sharing-int', 'Intel. Sharing'),
    ]),
  ]),

  cat('governance', '#86efac', 'Governance', [
    sub('laws-regs', 'Laws and Regulations', [
      sub('pci', 'PCI'),
      sub('hipaa', 'HIPAA'),
      sub('gdpr', 'GDPR'),
      sub('glba', 'GLBA'),
      sub('ccpa', 'CCPA'),
      sub('nys-dfs', 'NYS-DFS 23 NYCRR 500'),
      sub('industry-specific', 'Industry Specific'),
      sub('central-gov', 'Central Government'),
      sub('regional', 'Regional'),
      sub('nist-privacy', 'NIST Privacy Framework'),
      sub('lgpd', 'LGPD (Brazil)'),
      sub('ens', 'ENS (Spanish Scheme)'),
    ]),
    sub('exec-mgmt', 'Executive Management Involvement', [
      sub('risk-informed', 'Risk Informed'),
    ]),
    sub('written-policies', "Company's Written Policies", [
      sub('policy', 'Policy'),
      sub('procedure', 'Procedure'),
      sub('standard', 'Standard'),
      sub('guideline', 'Guideline'),
    ]),
    sub('compliance', 'Compliance & Enforcement', [
      sub('reports-scorecards', 'Reports and Scorecards'),
      sub('kpis-kris', 'KPIs/KRIs'),
      sub('grc-platform', 'GRC Platforms'),
    ]),
    sub('privacy-eng', 'Privacy Engineering', [
      sub('privacy-by-design', 'Privacy by Design'),
      sub('dpia', 'PIA / DPIA (Impact Assessments)'),
      sub('dsar', 'Data Subject Requests (DSAR)'),
    ]),
  ]),
];

const nodes: Node<DomainNodeData>[] = [];
const edges: Edge[] = [];

// --- STRUCTURED RECURSIVE MENTAL MAP LAYOUT ---
const CENTER_X = 0;
const CENTER_Y = 0;

nodes.push({
  id: 'center',
  type: 'cyber',
  data: {
    label: { en: 'Cybersecurity Domains', it: 'Domini Cybersecurity' },
    color: '#3b82f6',
  },
  position: { x: CENTER_X, y: CENTER_Y },
});

const SUB_Y_SPACING = 95;
const GROUP_X_OFFSET = 1000;
const SUB_X_OFFSET = 700;
const GROUP_Y_GAP = 140;
// Recursively calculate total height needed for a branch
const getTreeHeight = (node: TreeNode): number => {
  if (!node.children || node.children.length === 0) return SUB_Y_SPACING;
  return node.children.reduce((acc, child) => acc + getTreeHeight(child), 0);
};

// Layout the tree visually using standard top-to-bottom spreading logic
const layoutTree = (
  node: TreeNode,
  depth: number,
  baseX: number,
  startY: number,
  isLeft: boolean,
  catColor: string,
  categoryId: string
) => {
  const height = getTreeHeight(node);
  const cy = startY + height / 2 - (SUB_Y_SPACING / 2);
  const cx = baseX + (isLeft ? -SUB_X_OFFSET * depth : SUB_X_OFFSET * depth);
  const isCategory = depth === 0;

  nodes.push({
    id: node.id,
    type: 'cyber',
    data: {
      label: { en: node.label, it: node.label },
      category: categoryId,
      isSubNode: !isCategory,
      color: catColor,
    },
    position: { x: cx, y: cy },
  });

  let currentY = startY;
  if (node.children) {
    node.children.forEach(child => {
      layoutTree(child, depth + 1, baseX, currentY, isLeft, catColor, categoryId);
      const childHeight = getTreeHeight(child);

      edges.push({
        id: `e-${node.id}-${child.id}`,
        source: node.id,
        target: child.id,
        sourceHandle: isLeft ? 'sl' : 'sr',
        targetHandle: isLeft ? 'r' : 'l',
        type: 'default',
        style: { strokeWidth: depth === 0 ? 2.5 : 1.5, stroke: `${catColor}B0`, strokeOpacity: 0.9 },
        markerEnd: { type: MarkerType.ArrowClosed, color: `${catColor}B0` }
      });

      currentY += childHeight;
    });
  }
};

const layoutSide = (groups: TreeNode[], direction: 'left' | 'right') => {
  const isLeft = direction === 'left';

  // Total vertical height for centering
  const totalHeight = groups.reduce((acc, g) => acc + getTreeHeight(g) + GROUP_Y_GAP, 0) - GROUP_Y_GAP;
  let currentY = CENTER_Y - (totalHeight / 2);

  groups.forEach((catObj) => {
    const catHeight = getTreeHeight(catObj);
    const baseX = CENTER_X + (isLeft ? -GROUP_X_OFFSET : GROUP_X_OFFSET);

    layoutTree(catObj, 0, baseX, currentY, isLeft, catObj.color!, catObj.id);

    // Link Core to Category
    edges.push({
      id: `e-center-${catObj.id}`,
      source: 'center',
      target: catObj.id,
      sourceHandle: isLeft ? 'l' : 'r',
      targetHandle: isLeft ? 'r' : 'l',
      type: 'default',
      style: { strokeWidth: 3, stroke: `${catObj.color}`, strokeOpacity: 0.9 },
      markerEnd: { type: MarkerType.ArrowClosed, color: `${catObj.color}` },
      animated: true,
    });

    currentY += catHeight + GROUP_Y_GAP;
  });
};

layoutSide(leftGroups, 'left');
layoutSide(rightGroups, 'right');

export const initialNodes = nodes;
export const initialEdges = edges;
