export interface ThreatStep {
  title: { it: string; en: string };
  desc: { it: string; en: string };
  nodes: string[];
}

export interface ThreatScenario {
  id: string;
  name: { it: string; en: string };
  iconName: string; 
  steps: ThreatStep[];
}

export const threatScenarios: ThreatScenario[] = [
  {
    id: "ransomware",
    name: { it: "Ransomware Attack", en: "Ransomware Attack" },
    iconName: "alert-triangle",
    steps: [
      {
        title: { it: "1. Vettore di Ingresso", en: "1. Initial Access" },
        desc: { 
          it: "L'attaccante invia una mail contraffatta o sfrutta una vulnerabilità esterna.", 
          en: "The attacker sends a malicious email or exploits an external vulnerability." 
        },
        nodes: ["firewalls", "awareness", "threat-intel", "perimeter", "network-sec", "ops", "training"]
      },
      {
        title: { it: "2. Esecuzione Malware", en: "2. Malware Execution" },
        desc: { 
          it: "Il payload viene eseguito tentano di eludere i difensori per prendere possesso dell'host.", 
          en: "The payload executes and attempts to evade defenders to hijack the host." 
        },
        nodes: ["ngav", "edr-xdr", "endpoint-hygiene", "endpoint-sec", "sast", "dast", "appsec"]
      },
      {
        title: { it: "3. Movimento Laterale", en: "3. Lateral Movement" },
        desc: { 
          it: "Il malware si propaga nella LAN cercando credenziali privilegiate per fare danni su vasta scala.", 
          en: "The malware spreads laterally, seeking privileged credentials for widespread damage." 
        },
        nodes: ["zero-trust", "network-design", "architecture", "iam", "pam", "rbac-abac"]
      },
      {
        title: { it: "4. Impatto e Ripristino", en: "4. Impact & Recovery" },
        desc: { 
          it: "Inizia la cifratura. Subentrano le procedure di continuità per contenere l'esfiltrazione e isolare i danni.", 
          en: "Encryption starts. Continuity protocols kick in to contain exfiltration and isolate damages." 
        },
        nodes: ["incident-response", "bcp-dr", "data-protection", "dlp", "cryptography", "risk", "risk-assessment", "bcdr", "data-sec", "governance"]
      }
    ]
  },
  {
    id: "supply-chain",
    name: { it: "Supply Chain Compromise", en: "Supply Chain Compromise" },
    iconName: "package",
    steps: [
      {
        title: { it: "1. Libreria Compromessa", en: "1. Compromised Library" },
        desc: { 
          it: "Gli sviluppatori scaricano inavvertitamente un pacchetto open-source infetto nel progetto, sfuggendo ai controlli di base.", 
          en: "Developers inadvertently pull an infected open-source package, bypassing basic controls." 
        },
        nodes: ["appsec", "sca", "sbom", "secure-build", "patch-mgmt"]
      },
      {
        title: { it: "2. Rilevamento Anomalie", en: "2. Anomaly Detection" },
        desc: { 
          it: "Il SOC e i servizi cloud notano comportamenti anomali generati dall'applicazione legittima ma manomessa.", 
          en: "The SOC and cloud layers notice anomalous behaviors originating from the tampered legitimate application." 
        },
        nodes: ["soc", "threat-hunting", "vuln-mgmt", "security-operations", "edr-xdr"]
      },
      {
        title: { it: "3. Contenimento Cloud", en: "3. Cloud Containment" },
        desc: { 
          it: "Le piattaforme cloud e container arginano il modulo corrotto impedendogli fughe di autorizzazioni o network esterne.", 
          en: "Cloud platforms and containers box in the corrupted module, preventing privilege escalation or external networking." 
        },
        nodes: ["container-sec", "cspm", "cnapp", "cloud-sec", "zero-trust", "iam"]
      }
    ]
  },
  {
    id: "insider-threat",
    name: { it: "Insider Threat", en: "Insider Threat" },
    iconName: "users",
    steps: [
      {
        title: { it: "1. Accesso Autorizzato", en: "1. Authorized Access" },
        desc: { 
          it: "Un dipendente (o credenziali rubate via SSO) tenta di scaricare masse enormi di documenti sensibili.", 
          en: "An employee (or stolen SSO session) attempts to download massive troves of sensitive documents." 
        },
        nodes: ["iam", "mfa-sso", "iga", "rbac-abac", "pam"]
      },
      {
        title: { it: "2. Furto ed Esfiltrazione", en: "2. Theft and Exfiltration" },
        desc: { 
          it: "L'attaccante prova a spostare i file riservati verso una chiavetta USB o storage SaaS non autorizzati (Cloud personale).", 
          en: "The attacker tries moving confidential files to unauthorized USBs or personal SaaS cloud storage." 
        },
        nodes: ["data-sec", "data-protection", "dlp", "data-classification", "casb", "cloud-sec"]
      },
      {
        title: { it: "3. Analisi Auditing", en: "3. Auditing & Reporting" },
        desc: { 
          it: "Le policy normative tracciano le azioni legali ed impongono allarmi immediati per la palese violazione di compliance.", 
          en: "Regulatory policies trace the illicit actions, enforcing immediate alarms due to blatant compliance violations." 
        },
        nodes: ["governance", "gdpr", "frameworks", "risk-monitoring", "soc", "incident-response"]
      }
    ]
  },
  {
    id: "ddos",
    name: { it: "DDoS Attack", en: "DDoS Attack" },
    iconName: "globe",
    steps: [
      {
        title: { it: "1. Volumetric Flood", en: "1. Volumetric Flood" },
        desc: { 
          it: "Una botnet inonda la rete con finto traffico, paralizzando i server web esterni.", 
          en: "A botnet floods the network with fake traffic, crippling external web servers." 
        },
        nodes: ["perimeter", "firewalls", "network-sec", "architecture"]
      },
      {
        title: { it: "2. Load-Balancing & WAF", en: "2. Load-Balancing & WAF" },
        desc: { 
          it: "Le architetture in cloud redistribuiscono il carico e i Web Application Firewall filtrano le query malevole.", 
          en: "Cloud architectures redistribute the load while Web Application Firewalls filter malicious queries." 
        },
        nodes: ["cloud-sec", "bcp-dr", "appsec"]
      }
    ]
  },
  {
    id: "zero-day",
    name: { it: "Zero-Day Exploit", en: "Zero-Day Exploit" },
    iconName: "bug",
    steps: [
      {
        title: { it: "1. Exploit Sconosciuto", en: "1. Unknown Exploit" },
        desc: { 
          it: "Viene sfruttata una vulnerabilità software non appena scoperta, eludendo gli scanner basati su firme.", 
          en: "A software vulnerability is exploited as soon as it's discovered, bypassing signature-based scanners." 
        },
        nodes: ["vuln-mgmt", "patch-mgmt", "threat-intel"]
      },
      {
        title: { it: "2. Anomalies & AI", en: "2. Anomalies & AI" },
        desc: { 
          it: "L'analisi comportamentale e l'intelligenza artificiale dell'EDR rilevano e bloccano processi sospetti mai visti prima.", 
          en: "Behavioral analysis and EDR Artificial Intelligence detect and block suspicious processes never seen before." 
        },
        nodes: ["soc", "threat-hunting", "edr-xdr", "security-operations"]
      }
    ]
  }
];
