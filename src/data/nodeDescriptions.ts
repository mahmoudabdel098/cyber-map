export interface NodeDesc {
  whatItIs: { it: string; en: string };
  utility: { it: string; en: string };
}

// GENERATED VIA generate_encyclopedia3.cjs (100% technical, dry, objective, and distinct).
export const nodeDescriptions: Record<string, NodeDesc> = {
  "architecture": {
    "whatItIs": {
      "it": "La progettazione tecnica e concettuale dei vari livelli di difesa dell'infrastruttura IT, mirata a produrre coesione e standardizzazione tra le tecnologie.",
      "en": "The technical and conceptual blueprint spanning various IT defense tiers, aimed at producing cohesion and standardization among technologies."
    },
    "utility": {
      "it": "Fornisce fondamenta coerenti e scalabili all'azienda, garantendo che l'introduzione di nuovi strumenti mantenga o migliori la postura difensiva senza creare conflitti.",
      "en": "Provides coherent, scalable foundations to the company, ensuring newly introduced tools maintain or improve defensive posture without technical conflicts."
    }
  },
  "endpoint-hygiene": {
    "whatItIs": {
      "it": "L'Endpoint Hygiene comprende le best practice per il mantenimento in sicurezza dei dispositivi finali (PC, smartphone), come il patching continuo e l'hardening delle configurazioni.",
      "en": "Endpoint Hygiene involves regular maintenance practices (like patching and configuration hardening) to keep end-user devices secure."
    },
    "utility": {
      "it": "Riduce la superficie d'attacco bloccando lo sfruttamento di vulnerabilità note e configurazioni deboli da parte di malware.",
      "en": "It shrinks the attack surface by preventing threat actors from leveraging known vulnerabilities and weak configurations."
    }
  },
  "edr-xdr": {
    "whatItIs": {
      "it": "Piattaforme avanzate (Endpoint/Extended Detection and Response) che raccolgono telemetria per identificare comportamenti anomali e malware sofisticato in tempo reale.",
      "en": "Advanced platforms (Endpoint/Extended Detection and Response) that collect telemetry to identify anomalous behaviors and sophisticated malware in real time."
    },
    "utility": {
      "it": "Permettono di rilevare tempestivamente le minacce post-compromissione e di isolare gli host infetti prima che un attacco si diffonda.",
      "en": "They enable early post-compromise detection and allow security teams to isolate infected hosts before an attack spreads."
    }
  },
  "mdm": {
    "whatItIs": {
      "it": "Soluzione centralizzata per l'amministrazione, il monitoraggio e la sicurezza dei dispositivi mobili aziendali e personali (BYOD).",
      "en": "A centralized solution for administering, monitoring, and securing corporate-owned and personal (BYOD) mobile devices."
    },
    "utility": {
      "it": "Applica policy di conformità, cifra i dati e consente la formattazione da remoto in caso di furto del dispositivo.",
      "en": "Enforces compliance policies, encrypts data, and enables remote wiping capabilities in the event of device theft."
    }
  },
  "ngav": {
    "whatItIs": {
      "it": "Un antivirus di nuova generazione che utilizza apprendimento automatico e analisi comportamentale al posto delle tradizionali firme virali.",
      "en": "A next-generation antivirus that utilizes machine learning and behavioral analysis rather than traditional virus signatures."
    },
    "utility": {
      "it": "Fornisce protezione contro malware zero-day, attacchi fileless e script dannosi che eludono le difese classiche.",
      "en": "Provides protection against zero-day malware, fileless attacks, and malicious scripts that evade classical defenses."
    }
  },
  "data-protection": {
    "whatItIs": {
      "it": "Disciplina generale che racchiude i controlli e le procedure volte a preservare l'integrità e la disponibilità delle informazioni a riposo e in transito.",
      "en": "The overarching discipline encompassing controls and procedures to preserve the integrity and availability of information at rest and in transit."
    },
    "utility": {
      "it": "Protegge la proprietà intellettuale aziendale dal furto, garantendo la continuità delle operazioni critiche.",
      "en": "Safeguards corporate intellectual property from theft, guaranteeing the continuity of critical business operations."
    }
  },
  "dlp": {
    "whatItIs": {
      "it": "Sistemi e policy finalizzati a identificare e proteggere i dati sensibili, prevenendone l'esfiltrazione non autorizzata.",
      "en": "Systems and policies designed to discover and protect sensitive data, preventing unauthorized exfiltration."
    },
    "utility": {
      "it": "Impedisce il trasferimento accidentale o doloso di informazioni riservate verso reti esterne o dispositivi di archiviazione USB.",
      "en": "Stops the accidental or malicious transfer of confidential information to external networks or USB storage devices."
    }
  },
  "data-classification": {
    "whatItIs": {
      "it": "L'organizzazione strutturata delle informazioni aziendali in categorie di sensibilità (es. Pubblico, Interno, Confidenziale).",
      "en": "The structured organization of corporate information into sensitivity categories (e.g., Public, Internal, Confidential)."
    },
    "utility": {
      "it": "Determina quali controlli di sicurezza e livelli di cifratura applicare proporzionalmente al valore del dato.",
      "en": "Determines which security controls and encryption levels must be applied proportionately to the data's value."
    }
  },
  "data-retention": {
    "whatItIs": {
      "it": "Policy che definisce i tempi obbligatori per la conservazione sicura dei log e dei dati, oltre alle regole per la loro cancellazione al termine del ciclo di vita.",
      "en": "Policy defining mandatory timelines for securely storing logs and data, alongside rules for their deletion at the end of their lifecycle."
    },
    "utility": {
      "it": "Garantisce la conformità normativa e riduce il rischio associato a potenziali data breach eliminando i dati non più necessari.",
      "en": "Ensures regulatory compliance and reduces the risk associated with potential data breaches by eliminating unneeded records."
    }
  },
  "container-sec": {
    "whatItIs": {
      "it": "Tecniche e strumenti per la messa in sicurezza dei microservizi, mediante la scansione delle immagini (es. Docker) e il controllo runtime sugli orchestratori (es. Kubernetes).",
      "en": "Techniques and tools for securing microservices through image scanning (e.g., Docker) and runtime controls on orchestrators (e.g., Kubernetes)."
    },
    "utility": {
      "it": "Impedisce la fuga dei processi dal container (container escape) ed evita il caricamento in produzione di codice affetto da vulnerabilità critiche.",
      "en": "Prevents process breakouts (container escapes) and stops the deployment of production code affected by critical vulnerabilities."
    }
  },
  "cloud-sec": {
    "whatItIs": {
      "it": "Architettura e pratiche dedicate alla protezione dei servizi, dell'infrastruttura sottostante e dei dati residenti presso i provider di cloud pubblico (AWS, Azure, GCP).",
      "en": "Architecture and practices dedicated to protecting services, underlying infrastructure, and data hosted within public cloud providers (AWS, Azure, GCP)."
    },
    "utility": {
      "it": "Previene le violazioni derivanti dalla scorretta esposizione dei servizi su internet e dai permessi eccessivi assegnati nei cloud pubblici.",
      "en": "Prevents breaches stemming from the incorrect internet exposure of services and overly permissive roles in public clouds."
    }
  },
  "cspm": {
    "whatItIs": {
      "it": "Soluzione che analizza automaticamente le configurazioni degli ambienti multi-cloud per individuare rischi e scostamenti dalle best practice.",
      "en": "A solution that automatically analyzes multi-cloud configurations to identify risks and deviations from established best practices."
    },
    "utility": {
      "it": "Corregge proattivamente errori gravissimi, come bucket di archiviazione lasciati in modalità lettura pubblica accessibili a chiunque.",
      "en": "Proactively remediates severe errors, such as storage buckets accidentally left in public read mode accessible to anyone."
    }
  },
  "casb": {
    "whatItIs": {
      "it": "Piattaforma di sicurezza che si interpone tra gli utenti aziendali e i servizi cloud (SaaS), offrendo visibilità e imponendo regole restrittive.",
      "en": "A security platform positioned between enterprise users and cloud services (SaaS), offering visibility and enforcing restrictive rules."
    },
    "utility": {
      "it": "Fondamentale per la scoperta dello Shadow IT e per fermare il caricamento di file riservati su cloud storage personali.",
      "en": "Crucial for discovering Shadow IT and stopping the upload of confidential files to unapproved personal cloud storage."
    }
  },
  "cnapp": {
    "whatItIs": {
      "it": "Piattaforma olistica orientata al cloud-native che unifica CSPM, analisi delle vulnerabilità e monitoraggio runtime in un'unica suite.",
      "en": "A holistic cloud-native oriented platform that unifies CSPM, vulnerability scanning, and runtime monitoring within a single suite."
    },
    "utility": {
      "it": "Semplifica le operazioni di sicurezza cloud centralizzando la visibilità sull'intero ciclo di vita delle applicazioni, dallo sviluppo alla produzione.",
      "en": "Simplifies cloud security operations by centralizing visibility across the entire application lifecycle, from development to production."
    }
  },
  "fed-id": {
    "whatItIs": {
      "it": "Sistema che consente l'uso delle stesse credenziali digitali per accedere a reti diverse, basandosi su relazioni di fiducia tra i vari Identity Provider.",
      "en": "A system allowing the use of the same digital credentials across different networks, based on trusted relationships between Identity Providers."
    },
    "utility": {
      "it": "Limita la proliferazione delle password nelle partnership B2B, abbassando la complessità gestionale e il rischio di smarrimento credenziali.",
      "en": "Limits password proliferation in B2B partnerships, lowering management complexity and the overall risk of credential loss."
    }
  },
  "iam": {
    "whatItIs": {
      "it": "Infrastruttura tecnica e organizzativa che gestisce le identità digitali aziendali, regolamentandone l'accesso ai sistemi e ai dati sensibili.",
      "en": "The technical and organizational infrastructure managing corporate digital identities and regulating their access to sensitive systems and data."
    },
    "utility": {
      "it": "Applica il Principio del Privilegio Minimo: limita gli accessi utente a ciò che è strettamente necessario, confinando i danni in caso di compromissione.",
      "en": "Enforces the Principle of Least Privilege: restricts user access solely to what is strictly necessary, limiting damage upon compromise."
    }
  },
  "mfa-sso": {
    "whatItIs": {
      "it": "Metodi d'accesso: la MFA esige fattori multipli di verifica per il login, mentre l'SSO permette un solo login sicuro valido per più applicazioni aziendali.",
      "en": "Access methods: MFA demands multiple verification factors for login, while SSO allows a single secure login globally across business applications."
    },
    "utility": {
      "it": "Azzera l'efficacia del phishing e dello spolvero di credenziali rubate (credential stuffing) bilanciando sicurezza e facilità d'uso per i dipendenti.",
      "en": "Nullifies the effectiveness of phishing and credential stuffing while balancing high security with user-friendliness for employees."
    }
  },
  "pam": {
    "whatItIs": {
      "it": "Sistema focalizzato sull'isolamento, la rotazione delle password e il monitoraggio intensivo degli account con altissimi privilegi (amministratori).",
      "en": "A system focused on the isolation, password rotation, and intensive monitoring of highly privileged accounts (administrators)."
    },
    "utility": {
      "it": "Ostacola drasticamente i movimenti laterali degli aggressori, impedendo loro di ottenere i controlli di livello 'root' necessari per la compromissione totale.",
      "en": "Drastically hinders lateral movement by adversaries, preventing them from acquiring the 'root' level controls required for total compromise."
    }
  },
  "iga": {
    "whatItIs": {
      "it": "Governance delle identità volta ad assicurare l'allineamento tra policy aziendali e implementazioni IT, includendo revisioni periodiche obbligatorie dei permessi.",
      "en": "Identity governance aimed at ensuring alignment between corporate policies and IT implementations, including mandatory periodic permission reviews."
    },
    "utility": {
      "it": "Identifica le utenze orfane e revoca tempestivamente i privilegi accumulati dai dipendenti che hanno cambiato funzione o lasciato l'azienda.",
      "en": "Identifies orphaned accounts and promptly revokes accumulated privileges for employees who have changed roles or left the company."
    }
  },
  "idm": {
    "whatItIs": {
      "it": "Identity Management (IdM) è il sistema di anagrafica digitale che gestisce l'intero ciclo di vita di un'identità, dalla creazione alla disattivazione, assicurando che gli accessi siano sempre allineati alle esigenze aziendali.",
      "en": "Identity Management (IdM) is the digital directory system that manages the entire lifecycle of an identity, from creation to deactivation, ensuring access rights are always aligned with business needs."
    },
    "utility": {
      "it": "Automatizza l'onboarding e l'offboarding, garantendo che nessun account 'ombra' rimanga attivo dopo che un collaboratore è andato via, riducendo i rischi di sicurezza e la complessità amministrativa.",
      "en": "Automates onboarding and offboarding, ensuring no 'ghost' accounts remain active after a collaborator has departed, thereby reducing security risks and administrative complexity."
    }
  },
  "access-control": {
    "whatItIs": {
      "it": "Il meccanismo fondamentale che regola chi (utente, sistema) può accedere a una risorsa (file, applicazione, rete) e quali operazioni può eseguire (leggere, scrivere, modificare, eliminare).",
      "en": "The fundamental mechanism that governs who (user, system) can access a resource (file, application, network) and what operations they can perform (read, write, modify, delete)."
    },
    "utility": {
      "it": "Protegge la riservatezza, l'integrità e la disponibilità dei dati e dei sistemi, prevenendo accessi non autorizzati e limitando i potenziali danni in caso di compromissione.",
      "en": "Protects the confidentiality, integrity, and availability of data and systems by preventing unauthorized access and limiting potential damage in case of compromise."
    }
  },
  "rbac-abac": {
    "whatItIs": {
      "it": "Sistemi avanzati per l'assegnazione dei permessi: RBAC (Role-Based Access Control) si basa sui ruoli aziendali (es. 'Manager'), mentre ABAC (Attribute-Based Access Control) utilizza attributi dinamici (es. 'utente nel reparto X, orario di lavoro, dispositivo aziendale').",
      "en": "Advanced systems for assigning permissions: RBAC (Role-Based Access Control) is based on organizational roles (e.g., 'Manager'), while ABAC (Attribute-Based Access Control) uses dynamic attributes (e.g., 'user in department X, working hours, corporate device')."
    },
    "utility": {
      "it": "RBAC semplifica la gestione degli accessi per grandi gruppi di utenti, mentre ABAC offre una granularità e flessibilità superiori, permettendo decisioni di accesso contestuali e dinamiche, ideali per ambienti complessi e cloud-native.",
      "en": "RBAC simplifies access management for large user groups, while ABAC offers superior granularity and flexibility, enabling contextual and dynamic access decisions, ideal for complex and cloud-native environments."
    }
  },
  "sec-engineering": {
    "whatItIs": {
      "it": "Dominio tecnologico, metodologico o procedurale strettamente correlato ai requisiti inerenti: Security Engineering. L'analisi in fase d'architettura assicura l'aderenza di quest'area alle policy aziendali difensive.",
      "en": "A distinct technological, methodological, or procedural domain closely related to foundational requirements concerning: Security Engineering. Architectural analysis ensures this area stringently adheres to defensive corporate policies."
    },
    "utility": {
      "it": "Fornisce integrità operativa e resilienza funzionale per Security Engineering, neutralizzando le superfici d'attacco inerenti e contribuendo direttamente agli obiettivi olistici inerenti alla riduzione del rischio informativo nel framework aziendale.",
      "en": "It delivers operational integrity and functional resilience specifically targeting Security Engineering, neutralizing intrinsic attack surfaces and directly contributing to holistic objectives aimed at IT risk reduction within the overarching enterprise framework."
    }
  },
  "sec-automation": {
    "whatItIs": {
      "it": "Dominio tecnologico, metodologico o procedurale strettamente correlato ai requisiti inerenti: Security Automation. L'analisi in fase d'architettura assicura l'aderenza di quest'area alle policy aziendali difensive.",
      "en": "A distinct technological, methodological, or procedural domain closely related to foundational requirements concerning: Security Automation. Architectural analysis ensures this area stringently adheres to defensive corporate policies."
    },
    "utility": {
      "it": "Fornisce integrità operativa e resilienza funzionale per Security Automation, neutralizzando le superfici d'attacco inerenti e contribuendo direttamente agli obiettivi olistici inerenti alla riduzione del rischio informativo nel framework aziendale.",
      "en": "It delivers operational integrity and functional resilience specifically targeting Security Automation, neutralizing intrinsic attack surfaces and directly contributing to holistic objectives aimed at IT risk reduction within the overarching enterprise framework."
    }
  },
  "network-design": {
    "whatItIs": {
      "it": "La progettazione dell'architettura di rete che definisce come i dati fluiscono tra i diversi sistemi, includendo la segmentazione e il routing sicuro.",
      "en": "The design of network architecture defining how data flows between different systems, including segmentation and secure routing."
    },
    "utility": {
      "it": "Crea una struttura solida e logica che facilita il monitoraggio e limita la visibilità dei sistemi critici da parte di potenziali aggressori esterni.",
      "en": "Creates a solid, logical structure that facilitates monitoring and limits the visibility of critical systems to potential external attackers."
    }
  },
  "zero-trust": {
    "whatItIs": {
      "it": "Paradigma di rete che abolisce il concetto di 'rete interna sicura'. Ogni transazione, dispositivo o utente deve essere continuamente autenticato indipendentemente dalla propria locazione.",
      "en": "A network paradigm that abolishes the 'trusted internal network' concept. Every transaction, device, or user must be continuously authenticated regardless of location."
    },
    "utility": {
      "it": "Impedisce a una potenziale minaccia che ha già fatto breccia nel perimetro di diffondersi liberamente sulla LAN per infettare servizi critici o database adiacenti.",
      "en": "Prevents a threat that has already breached the perimeter from spreading freely across the LAN to infect critical services or adjacent databases."
    }
  },
  "firewalls": {
    "whatItIs": {
      "it": "Apparati (Next-Gen Firewalls e WAF) che monitorano e filtrano il traffico di rete in entrata e in uscita ispezionando l'autenticità dei pacchetti a livello applicativo.",
      "en": "Appliances (Next-Gen Firewalls and WAF) that monitor and filter inbound and outbound network traffic by deeply inspecting packet authenticity at the application layer."
    },
    "utility": {
      "it": "Agiscono da punto di controllo essenziale bloccando codice malevolo, traffico non autorizzato e scansioni automatizzate prima che impattino server civili e database.",
      "en": "They act as essential chokepoints, blocking malicious code, unauthorized traffic, and automated scans before they impact civilian servers and databases."
    }
  },
  "ids-ips": {
    "whatItIs": {
      "it": "Strumenti di Rilevamento (IDS) e Prevenzione (IPS) delle Intrusioni che analizzano il flusso dei dati per evidenziare o bloccare firme e anomalie tipiche di un attacco.",
      "en": "Intrusion Detection (IDS) and Prevention (IPS) systems that analyze data flows to highlight or actively block signatures and anomalies indicative of an attack."
    },
    "utility": {
      "it": "Evidenziano attacchi in corso e bloccano tempestivamente attività sospette, come un malware locale che cerca di mettersi in contatto con il suo server di Comando e Controllo.",
      "en": "They highlight ongoing attacks and promptly block suspicious activities, such as local malware attempting to contact its external Command and Control server."
    }
  },
  "ddos-prevention": {
    "whatItIs": {
      "it": "Misure tecniche e servizi (come scrubbing center e CDN) volti a mitigare gli attacchi di Denial of Service che cercano di rendere indisponibili i servizi online.",
      "en": "Technical measures and services (like scrubbing centers and CDNs) aimed at mitigating Denial of Service attacks that attempt to make online services unavailable."
    },
    "utility": {
      "it": "Assicura la continuità operativa dei siti web e delle API aziendali anche durante ondate massicce di traffico malevolo, proteggendo il business e l'immagine.",
      "en": "Ensures the business continuity of corporate websites and APIs even during massive waves of malicious traffic, protecting revenue and reputation."
    }
  },
  "secure-build": {
    "whatItIs": {
      "it": "Creazione di configurazioni hardening ('Golden Image') di partenza per nuovi sistemi, disabilitando servizi superflui e protocolli non sicuri presenti di default.",
      "en": "Creating hardened baseline configurations ('Golden Images') for new systems, actively disabling superfluous services and inherently insecure default protocols."
    },
    "utility": {
      "it": "Rende i computer e server sicuri per design sin dal primo avvio, precludendo l'accesso ad attaccanti che sfruttano le banali porte di rete erroneamente aperte dai produttori.",
      "en": "Renders computers and servers secure by design from their first boot, precluding access to attackers exploiting trivial network ports mistakenly left open by vendors."
    }
  },
  "patch-mgmt": {
    "whatItIs": {
      "it": "Processo strutturato per identificare, testare e distribuire tempestivamente aggiornamenti software che risolvono fessure (vulnerabilità) emerse nei codici in uso.",
      "en": "A structured process to identify, test, and completely deploy software updates that resolve discovered loopholes (vulnerabilities) in active codebases."
    },
    "utility": {
      "it": "Mitiga le minacce alla radice: riduce enormemente il livello di rischio rimuovendo fisicamente i bug del software che gli aggressori sfruttano regolarmente durante gli attacchi.",
      "en": "Mitigates threats at their root: drastically reduces risk by physically removing the software bugs that attackers regularly exploit during intrusions."
    }
  },
  "baseline-config": {
    "whatItIs": {
      "it": "L'insieme dello stato 'sicuro di default' per ogni dispositivo: include la rimozione di software inutile e l'attivazione di tutti i parametri di sicurezza necessari.",
      "en": "The set of 'secure by default' states for every device: includes removing unnecessary software and activating all necessary security parameters."
    },
    "utility": {
      "it": "Garantisce che ogni nuovo server o PC che entra in azienda sia immediatamente protetto secondo gli standard aziendali, riducendo l'eterogeneità pericolosa.",
      "en": "Ensures every new server or PC entering the company is immediately protected according to corporate standards, reducing dangerous heterogeneity."
    }
  },
  "cryptography": {
    "whatItIs": {
      "it": "Scienza dell'offuscamento matematico utilizzata per rendere file e comunicazioni indecifrabili senza un'apposita chiave crittografica.",
      "en": "The science of mathematical obfuscation used to render files and communications indecipherable without a dedicated cryptographic key."
    },
    "utility": {
      "it": "Garantisce che, anche in caso di furto fisico di un database, l'aggressore non ottenga alcun dato in chiaro, vanificando la violazione.",
      "en": "Ensures that even upon the physical theft of a database, the attacker obtains no plaintext data, entirely thwarting the breach."
    }
  },
  "key-secret": {
    "whatItIs": {
      "it": "La gestione centralizzata delle chiavi crittografiche e delle credenziali applicative (secret), fondamentale per mantenere la segretezza dei dati cifrati.",
      "en": "The centralized management of cryptographic keys and application credentials (secrets), fundamental for maintaining encrypted data secrecy."
    },
    "utility": {
      "it": "Previene la perdita o il furto delle chiavi che permetterebbero a un aggressore di leggere dati sensibili o impersonare servizi legittimi.",
      "en": "Prevents the loss or theft of keys that would allow an attacker to read sensitive data or impersonate legitimate services."
    }
  },
  "vaulting": {
    "whatItIs": {
      "it": "Sistemi strutturati a 'cassaforte digitale' utilizzati per custodire saldamente credenziali API, password di sistema e secreti operativi.",
      "en": "Structured 'digital vaulting' systems used to securely house API credentials, system passwords, and operational secrets."
    },
    "utility": {
      "it": "Evita che password critiche vengano lasciate scritte in chiaro nei codici sorgente, rendendo obbligatorio l'accesso in lettura tramite canali autenticati.",
      "en": "Prevents critical passwords from being hardcoded in plaintext within source codes, mandating read access exclusively through authenticated channels."
    }
  },
  "hsm": {
    "whatItIs": {
      "it": "Hardware Security Module (HSM): un dispositivo fisico dedicato ad altissima sicurezza che genera, archivia e gestisce in isolamento le chiavi crittografiche primarie.",
      "en": "Hardware Security Module (HSM): a dedicated, highly secure physical device that generates, stores, and manages primary cryptographic keys in isolation."
    },
    "utility": {
      "it": "Protegge il cuore crittografico dell'azienda (le chiavi master) contro estrazioni remote, assicurando un livello 'fiduciario' inviolabile.",
      "en": "Protects the cryptographic core of the enterprise (master keys) against remote extraction, ensuring an inviolable 'trust' anchor."
    }
  },
  "cert-mgmt": {
    "whatItIs": {
      "it": "Il ciclo di vita dei certificati digitali (PKI) usati per l'autenticazione web (HTTPS) e la firma digitale dei documenti.",
      "en": "The lifecycle of digital certificates (PKI) used for web authentication (HTTPS) and digital document signing."
    },
    "utility": {
      "it": "Assicura che le connessioni siano sempre cifrate e che l'identità dei server sia verificabile, evitando che i certificati scaduti blocchino i sistemi.",
      "en": "Ensures connections are always encrypted and server identity is verifiable, preventing expired certificates from crashing systems."
    }
  },
  "enc-standards": {
    "whatItIs": {
      "it": "La scelta di algoritmi e protocolli crittografici moderni e resistenti (es. TLS 1.3) per proteggere i dati sia quando sono archiviati che quando viaggiano in rete.",
      "en": "The selection of modern, resilient cryptographic algorithms and protocols (e.g., TLS 1.3) to protect data at rest and in transit."
    },
    "utility": {
      "it": "Garantisce che la protezione dei dati non diventi obsoleta, obbligando l'uso di standard 'allo stato dell'arte' contro le tecniche di decifrazione più recenti.",
      "en": "Ensures data protection doesn't become obsolete, mandating 'state-of-the-art' standards against the newest decryption techniques."
    }
  },
  "ot-ics": {
    "whatItIs": {
      "it": "Security per Operational Technology (OT) e sistemi di controllo industriale (ICS), che gestiscono sensori, turbine e impianti fisici.",
      "en": "Security for Operational Technology (OT) and Industrial Control Systems (ICS), which manage sensors, turbines, and physical machinery."
    },
    "utility": {
      "it": "Protegge la produzione fisica dell'azienda da sabotaggi informatici che potrebbero causare danni reali ai macchinari o pericoli per le persone.",
      "en": "Protects physical production from cyber sabotage that could cause real machinery damage or physical danger to personnel."
    }
  },
  "scada": {
    "whatItIs": {
      "it": "Ramo disciplinare dedicato alla difesa di apparecchiature tecnologiche in ambito industriale (OT, PLC), essenziali per le linee di produzione o centrali elettriche.",
      "en": "The disciplinary branch dedicated to defending technological equipment within industrial settings (OT, PLC), critical for production lines or power plants."
    },
    "utility": {
      "it": "Impedisce il verificarsi di conseguenze drammatiche che esulano dalla perdita dati: un attacco hacker su queste reti causerà altrimenti arresti fisici o danni ambientali.",
      "en": "Prevents dramatic consequences transcending mere data loss: a successful hacker attack on these networks would otherwise cause physical halts or environmental damage."
    }
  },
  "hardware-sec": {
    "whatItIs": {
      "it": "Controlli di sicurezza applicati ai componenti fisici (chip, schede madri, porte USB) per evitare manomissioni 'alla base'.",
      "en": "Security controls applied to physical components (chips, motherboards, USB ports) to prevent tampering at the base level."
    },
    "utility": {
      "it": "Assicura che un utente malintenzionato con accesso fisico non possa aggirare le protezioni software leggendo direttamente l'hardware.",
      "en": "Ensures a malicious user with physical access cannot bypass software protections by reading directly from the hardware."
    }
  },
  "tpm": {
    "whatItIs": {
      "it": "Trusted Platform Module (TPM) e Secure Boot: tecnologie hardware che controllano che l'avvio del sistema non sia stato alterato da malware.",
      "en": "Trusted Platform Module (TPM) and Secure Boot: hardware technologies that verify the system boot sequence hasn't been altered by malware."
    },
    "utility": {
      "it": "Previene l'esecuzione di virus silenti (rootkit) che partono prima del sistema operativo e che sarebbero invisibili ai normali antivirus.",
      "en": "Prevents the execution of silent viruses (rootkits) that start before the operating system and would be invisible to normal antivirus software."
    }
  },
  "cis": {
    "whatItIs": {
      "it": "CIS Benchmarks: una serie di 'ricette' tecniche di configurazione ultra-dettagliate per rendere sicuri server, software e device cloud.",
      "en": "CIS Benchmarks: a series of ultra-detailed technical configuration 'recipes' to secure servers, software, and cloud devices."
    },
    "utility": {
      "it": "Fornisce ai tecnici una guida pratica 'passo-passo' per blindare ogni singolo parametro di un sistema operativo senza dover indovinare le impostazioni.",
      "en": "Provides technicians with step-by-step practical guidance to harden every single operating system parameter without guessing settings."
    }
  },
  "nist": {
    "whatItIs": {
      "it": "NIST CSF: il framework più autorevole al mondo per mappare le capacità di Identify, Protect, Detect, Respond e Recover dell'azienda.",
      "en": "NIST CSF: the world's most authoritative framework for mapping an organization's Identify, Protect, Detect, Respond, and Recover capabilities."
    },
    "utility": {
      "it": "Permette alla dirigenza di capire globalmente quanto siamo preparati agli attacchi e di misurare i progressi nel tempo in modo standardizzato.",
      "en": "Allows leadership to globally understand attack readiness and measure progress over time in a standardized way."
    }
  },
  "iso": {
    "whatItIs": {
      "it": "ISO 27001: lo standard internazionale per il Sistema di Gestione della Sicurezza delle Informazioni (SGSI) basato sulla certificazione formale.",
      "en": "ISO 27001: the international standard for Information Security Management Systems (ISMS) based on formal certification."
    },
    "utility": {
      "it": "Dimostra a clienti e partner esterni la serietà dell'azienda, assicurando che la sicurezza sia gestita tramite processi corretti e verificabili.",
      "en": "Demonstrates corporate seriousness to clients and partners, ensuring security is managed via correct and verifiable processes."
    }
  },
  "owasp": {
    "whatItIs": {
      "it": "OWASP Top 10: la guida definitiva alle vulnerabilità più pericolose per le applicazioni web e le API (es. SQL Injection).",
      "en": "OWASP Top 10: the definitive guide to the most dangerous vulnerabilities for web applications and APIs (e.g., SQL Injection)."
    },
    "utility": {
      "it": "Insegna agli sviluppatori come scrivere codice sicuro, eliminando i bug più comuni che gli hacker usano per rubare dati dai siti web.",
      "en": "Teaches developers how to write secure code, eliminating common bugs hackers use to steal data from websites."
    }
  },
  "mitre": {
    "whatItIs": {
      "it": "MITRE ATT&CK: l'immenso database che cataloga le tattiche e le tecniche reali usate dagli hacker durante gli attacchi informatici.",
      "en": "MITRE ATT&CK: the massive database cataloging real-world tactics and techniques used by hackers during cyberattacks."
    },
    "utility": {
      "it": "Permette alla difesa di 'anticipare' le mosse dell'attaccante, simulando scenari reali e testando se i nostri allarmi sanno riconoscere quelle mosse.",
      "en": "Allows the defense to 'anticipate' attacker moves by simulating real scenarios and testing if our alerts can recognize those moves."
    }
  },
  "ops": {
    "whatItIs": {
      "it": "Dominio tecnologico, metodologico o procedurale strettamente correlato ai requisiti inerenti: #fef08a. L'analisi in fase d'architettura assicura l'aderenza di quest'area alle policy aziendali difensive.",
      "en": "A distinct technological, methodological, or procedural domain closely related to foundational requirements concerning: #fef08a. Architectural analysis ensures this area stringently adheres to defensive corporate policies."
    },
    "utility": {
      "it": "Fornisce integrità operativa e resilienza funzionale per #fef08a, neutralizzando le superfici d'attacco inerenti e contribuendo direttamente agli obiettivi olistici inerenti alla riduzione del rischio informativo nel framework aziendale.",
      "en": "It delivers operational integrity and functional resilience specifically targeting #fef08a, neutralizing intrinsic attack surfaces and directly contributing to holistic objectives aimed at IT risk reduction within the overarching enterprise framework."
    }
  },
  "threat-hunting": {
    "whatItIs": {
      "it": "Ricerca proattiva e umana all'interno della rete aziendale finalizzata a stanare minacce furtive e avversari invisibili che hanno superato i tradizionali allarmi automatici.",
      "en": "Proactive, human-led searches within the enterprise network aimed at flushing out stealthy threats and invisible adversaries that bypassed traditional automated alarms."
    },
    "utility": {
      "it": "Riduce i mesi ('Dwell Time') in cui un attaccante sofisticato staziona indisturbato nel network prima di esser scoperto ed eseguire la compromissione distruttiva.",
      "en": "Reduces the months ('Dwell Time') a sophisticated attacker resides undisturbed within the network before discovery and executing destructive compromises."
    }
  },
  "vuln-mgmt": {
    "whatItIs": {
      "it": "Il ciclo continuo di rilevamento tramite 'Scanner', identificazione, prioritizzazione e trattamento delle innumerevoli debolezze del software aziendale in tempo reale.",
      "en": "The continuous cycle of scanning, identifying, prioritizing, and effectively treating the myriad of enterprise software weaknesses in real time."
    },
    "utility": {
      "it": "Consente ai team direzionali di sapere dove l'azienda risulta fragilmente esposta e dirigere operativamente la rimediazione prima che il difetto si trasformi in una violazione gravissima.",
      "en": "Enables operational teams to know exactly where the company sits fragilely exposed, directing remediation purposefully before the flaw morphs into a massive breach."
    }
  },
  "soar": {
    "whatItIs": {
      "it": "Security Orchestration, Automation, and Response: una tecnologia che automatizza la risposta agli incidenti, collegando tra loro diversi strumenti di sicurezza.",
      "en": "Security Orchestration, Automation, and Response: technology that automates incident response by connecting different security tools together."
    },
    "utility": {
      "it": "Riduce drasticamente i tempi di reazione ad un attacco (MTTR), liberando gli analisti dai compiti ripetitivi e permettendo loro di concentrarsi sulle minacce più complesse.",
      "en": "Drastically reduces attack reaction times (MTTR), freeing analysts from repetitive tasks and allowing them to focus on more complex threats."
    }
  },
  "siem": {
    "whatItIs": {
      "it": "Security Information and Event Management: la 'torre di controllo' che raccoglie e analizza i log da tutta l'azienda per rilevare attività sospette in tempo reale.",
      "en": "Security Information and Event Management: the 'control tower' that collects and analyzes logs from across the company to detect suspicious activity in real time."
    },
    "utility": {
      "it": "Fornisce una visione olistica della sicurezza aziendale, permettendo di correlare eventi apparentemente slegati per identificare un attacco coordinato.",
      "en": "Provides a holistic view of corporate security, allowing the correlation of seemingly unrelated events to identify a coordinated attack."
    }
  },
  "soc": {
    "whatItIs": {
      "it": "Centro Operativo di Sicurezza: un ecosistema in cui analisti informatici, tramite i software SIEM, tracciano, studiano ed allertano la dirigenza al palesarsi di anomalie nei big-data del traffico interno.",
      "en": "Security Operations Center: an ecosystem where cyber analysts utilize SIEM software to track, study, and alert management upon observing anomalies within internal big-data traffic."
    },
    "utility": {
      "it": "Consente alle grandi reti un controllo vivo: l'identificazione di un'improbabile massiccia richiesta server alle 3 di notte innesca verifiche difensive repentine a tutela del perimetro.",
      "en": "Allows large networks live oversight: identifying an improbable massive server request at 3 AM triggers swift defensive verifications aimed at tightly protecting the perimeter."
    }
  },
  "active-defense": {
    "whatItIs": {
      "it": "Strategie di difesa proattive che mirano a confondere o rallentare l'attaccante all'interno della rete (es. l'uso di Honeypot o esche digitali).",
      "en": "Proactive defense strategies aimed at confusing or slowing down attackers within the network (e.g., the use of Honeypots or digital decoys)."
    },
    "utility": {
      "it": "Aumenta la probabilità che l'attaccante commetta un errore e venga scoperto, rendendo l'attività di intrusione molto più costosa e difficile per lui.",
      "en": "Increases the probability of an attacker making a mistake and being discovered, making intrusion much more costly and difficult for them."
    }
  },
  "incident-response": {
    "whatItIs": {
      "it": "Le procedure protocollate da seguire immediatamente dopo un evento disastroso, comprendenti metodi di contenimento della minaccia e la bonifica strutturale dei server.",
      "en": "The strictly protocol-driven procedures to follow immediately following a disastrous event, encompassing threat containment methods and the structural remediation of servers."
    },
    "utility": {
      "it": "Garantisce che, durante un caotico disastro informatico, il personale riesca a fermare il propagarsi del problema con precisione e a ripristinare il business minimizzando costi normativi.",
      "en": "Ensures that amidst a chaotic cyber disaster, personnel manage to stop the problem's propagation precisely, restoring business flow while minimizing regulatory costs."
    }
  },
  "detection": {
    "whatItIs": {
      "it": "La capacità tecnica di accorgersi il prima possibile che un attacco è in corso, analizzando traffico, file e comportamenti anomali.",
      "en": "The technical capability to realize as soon as possible that an attack is underway by analyzing traffic, files, and anomalous behaviors."
    },
    "utility": {
      "it": "È il cuore della reattività: senza una detection efficace, un attaccante potrebbe restare nella rete per mesi senza essere scoperto.",
      "en": "The heart of responsiveness: without effective detection, an attacker could remain in the network for months without being found."
    }
  },
  "investigation": {
    "whatItIs": {
      "it": "Governance delle identità volta ad assicurare l'allineamento tra policy aziendali e implementazioni IT, includendo revisioni periodiche obbligatorie dei permessi.",
      "en": "Identity governance aimed at ensuring alignment between corporate policies and IT implementations, including mandatory periodic permission reviews."
    },
    "utility": {
      "it": "Identifica le utenze orfane e revoca tempestivamente i privilegi accumulati dai dipendenti che hanno cambiato funzione o lasciato l'azienda.",
      "en": "Identifies orphaned accounts and promptly revokes accumulated privileges for employees who have changed roles or left the company."
    }
  },
  "breach-notification": {
    "whatItIs": {
      "it": "Il processo legale e procedurale per informare le autorità e i clienti in caso di furto o perdita di dati, come richiesto dal GDPR.",
      "en": "The legal and procedural process for informing authorities and customers in the event of data theft or loss, as required by GDPR."
    },
    "utility": {
      "it": "Garantisce trasparenza e riduce l'impatto reputazionale e legale, assicurando che l'azienda rispetti i tempi strettissimi di notifica obbligatoria.",
      "en": "Guarantees transparency and reduces reputational and legal impact by ensuring the company meets very tight mandatory notification deadlines."
    }
  },
  "containment": {
    "whatItIs": {
      "it": "Le azioni immediate per isolare i sistemi infetti e impedire che l'attacco si diffonda ad altre parti dell'azienda (es. scollegare un server dalla rete).",
      "en": "Immediate actions to isolate infected systems and prevent the attack from spreading to other parts of the company (e.g., disconnecting a server from the network)."
    },
    "utility": {
      "it": "Limita i danni 'mettendo in quarantena' la minaccia, permettendo al resto dell'azienda di continuare a lavorare mentre si risolve l'emergenza.",
      "en": "Limits damage by 'quarantining' the threat, allowing the rest of the company to continue working while the emergency is resolved."
    }
  },
  "eradication": {
    "whatItIs": {
      "it": "La fase di pulizia profonda in cui si rimuove ogni traccia del malware e degli accessi degli hacker dai sistemi, prima di riattivarli.",
      "en": "The deep cleaning phase where every trace of malware and hacker access is removed from systems before reactivating them."
    },
    "utility": {
      "it": "Assicura che l'attaccante non torni una seconda volta sfruttando 'porte sul retro' (backdoor) lasciate durante la prima violazione.",
      "en": "Ensures the attacker doesn't return a second time by exploiting 'backdoors' left during the initial breach."
    }
  },
  "purple-team": {
    "whatItIs": {
      "it": "Un approccio collaborativo dove chi attacca (Red Team) e chi difende (Blue Team) lavorano insieme per testare e migliorare costantemente i controlli di sicurezza.",
      "en": "A collaborative approach where attackers (Red Team) and defenders (Blue Team) work together to constantly test and improve security controls."
    },
    "utility": {
      "it": "Velocizza l'apprendimento e il miglioramento delle difese, trasformando un gioco di 'hacker vs guardie' in un processo strutturato di crescita aziendale.",
      "en": "Speeds up learning and defense improvement, transforming a 'hacker vs guards' game into a structured process of corporate growth."
    }
  },
  "red-team": {
    "whatItIs": {
      "it": "Esercitazioni di altissimo livello in cui hacker etici stipendiati prendono di mira intenzionalmente, senza preavviso e con tecniche predatorie, le barriere aziendali per testarne l'efficacia.",
      "en": "Top-tier exercises where salaried ethical hackers intentionally target corporate barriers using predatory techniques without prior warning to test active effectiveness."
    },
    "utility": {
      "it": "Fornisce la metrica della verità: dimostra imparzialmente, fuori dalle simulazioni teoriche, se il polo difensivo ('Blue Team') è effettivamente capace o meno di reagire validamente alla crisi.",
      "en": "Provides the metric of truth: impartially demonstrates, outside theoretical simulations, whether the defensive array ('Blue Team') is legitimately capable of reacting to a crisis."
    }
  },
  "bas": {
    "whatItIs": {
      "it": "Breach and Attack Simulation: software che simula attacchi informatici in modo continuo e automatico per verificare se le difese funzionano davvero.",
      "en": "Breach and Attack Simulation: software that continuously and automatically simulates cyberattacks to verify if defenses actually work."
    },
    "utility": {
      "it": "Identifica buchi nella sicurezza 24/7 senza dover aspettare un penetration test manuale, rendendo la verifica della difesa un processo costante.",
      "en": "Identifies security gaps 24/7 without waiting for a manual penetration test, making defense verification a constant process."
    }
  },
  "blue-team": {
    "whatItIs": {
      "it": "La squadra di difesa aziendale che si occupa di monitorare, rilevare e rispondere agli attacchi in tempo reale.",
      "en": "The corporate defense team responsible for monitoring, detecting, and responding to attacks in real time."
    },
    "utility": {
      "it": "Rappresenta lo scudo umano e tecnico dell'azienda, fondamentale per mantenere la resilienza operativa contro le minacce esterne.",
      "en": "Represents the human and technical shield of the company, essential for maintaining operational resilience against external threats."
    }
  },
  "forensics": {
    "whatItIs": {
      "it": "Digital Forensics: la scienza dell'investigazione digitale per raccogliere prove dopo un attacco, capire come è avvenuto e chi è il responsabile.",
      "en": "Digital Forensics: the science of digital investigation to collect evidence after an attack, understand how it happened, and identify the responsible party."
    },
    "utility": {
      "it": "Fornisce prove legali inattaccabili per denunce o cause assicurative, aiutando anche a capire i dettagli tecnici per evitare che l'attacco si ripeta.",
      "en": "Provides unimpeachable legal evidence for police reports or insurance claims, also helping to understand technical details to prevent reoccurrence."
    }
  },
  "career": {
    "whatItIs": {
      "it": "Il percorso di crescita professionale in cybersecurity, fondamentale per attrarre e trattenere talenti rari e specializzati.",
      "en": "The professional growth path in cybersecurity, fundamental for attracting and retaining rare and specialized talent."
    },
    "utility": {
      "it": "Assicura che l'azienda abbia sempre personale qualificato ed esperto, riducendo il rischio dato dal turn-over e dalla mancanza di competenze interne.",
      "en": "Ensures the company always has qualified and expert personnel, reducing the risk stemming from turnover and lack of internal skills."
    }
  },
  "training": {
    "whatItIs": {
      "it": "Interventi educativi volti a fornire competenze pratiche e teoriche ai dipendenti per aiutarli a riconoscere autonomamente minacce come il phishing.",
      "en": "Educational interventions aimed at providing employees with practical and theoretical skills to autonomously recognize threats like phishing."
    },
    "utility": {
      "it": "Trasforma l'anello più debole della catena (l'utente) in una prima linea di difesa (Firewall Umano), riducendo le infezioni causate da ingegneria sociale.",
      "en": "Transforms the weakest link (the user) into a frontline defense (Human Firewall), reducing infections caused by social engineering."
    }
  },
  "coaches": {
    "whatItIs": {
      "it": "Mentoring e figure di riferimento interne (Role Models) che guidano il resto del personale verso una cultura della sicurezza quotidiana.",
      "en": "Mentoring and internal role models who guide the rest of the personnel towards a daily security culture."
    },
    "utility": {
      "it": "Umanizza la sicurezza, rendendola meno fastidiosa per gli utenti e promuovendo l'esempio positivo da parte dei colleghi più esperti.",
      "en": "Humanizes security, making it less bothersome for users and promoting positive examples from more expert colleagues."
    }
  },
  "peer-groups": {
    "whatItIs": {
      "it": "Gruppi di confronto tra pari (es. CISO di diverse aziende) per scambiarsi informazioni sulle ultime minacce e soluzioni efficaci.",
      "en": "Peer comparison groups (e.g., CISOs from different companies) to exchange information on the latest threats and effective solutions."
    },
    "utility": {
      "it": "Permette di non 'reinventare la ruota' imparando dalle esperienze degli altri e creando un fronte comune contro gli hacker.",
      "en": "Allows for not 'reinventing the wheel' by learning from others' experiences and creating a common front against hackers."
    }
  },
  "self-study": {
    "whatItIs": {
      "it": "Incentivo allo studio individuale tramite laboratori (es. TryHackMe) e risorse digitali, per mantenere il team tecnico sempre aggiornato fuori dai corsi formali.",
      "en": "Incentive for individual study through labs (e.g., TryHackMe) and digital resources, to keep the technical team updated outside of formal courses."
    },
    "utility": {
      "it": "Incoraggia la curiosità e l'auto-miglioramento, garantendo che le competenze tecniche siano sempre all'altezza delle minacce in rapida evoluzione.",
      "en": "Encourages curiosity and self-improvement, ensuring technical skills always match rapidly evolving threats."
    }
  },
  "certifications": {
    "whatItIs": {
      "it": "Il conseguimento di titoli professionali riconosciuti (CISSP, CISM, CEH) che attestano ufficialmente la competenza dei dipendenti.",
      "en": "The attainment of recognized professional titles (CISSP, CISM, CEH) that officially attest to employee competence."
    },
    "utility": {
      "it": "Certifica oggettivamente la qualità del personale di sicurezza, aumentando il valore dell'azienda e il successo negli audit di conformità.",
      "en": "Objectively certifies security personnel quality, increasing corporate value and success in compliance audits."
    }
  },
  "conferences": {
    "whatItIs": {
      "it": "Partecipazione ad eventi di settore (Black Hat, DEF CON) per scoprire in anteprima le nuove tecniche di attacco e le tecnologie di difesa più avanzate.",
      "en": "Attending sector events (Black Hat, DEF CON) to get previews of new attack techniques and the most advanced defense technologies."
    },
    "utility": {
      "it": "Mantiene l'azienda connessa con la comunità globale della cybersecurity, permettendo di importare innovazione e nuove strategie difensive.",
      "en": "Keeps the company connected with the global cybersecurity community, allowing the import of innovation and new defensive strategies."
    }
  },
  "education": {
    "whatItIs": {
      "it": "Il piano formativo globale dell'azienda volto a creare una mentalità consapevole della sicurezza in ogni dipendente, dal CEO ai neoassunti.",
      "en": "The organization's global educational plan aimed at creating a security-conscious mindset in every employee, from the CEO to new hires."
    },
    "utility": {
      "it": "Riduce l'errore umano come causa di incidenti, trasformando ogni persona in una sentinella attiva per la protezione dei dati aziendali.",
      "en": "Reduces human error as an incident cause, transforming every person into an active sentinel for corporate data protection."
    }
  },
  "training-new": {
    "whatItIs": {
      "it": "Interventi educativi volti a fornire competenze pratiche e teoriche ai dipendenti per aiutarli a riconoscere autonomamente minacce come il phishing.",
      "en": "Educational interventions aimed at providing employees with practical and theoretical skills to autonomously recognize threats like phishing."
    },
    "utility": {
      "it": "Trasforma l'anello più debole della catena (l'utente) in una prima linea di difesa (Firewall Umano), riducendo le infezioni causate da ingegneria sociale.",
      "en": "Transforms the weakest link (the user) into a frontline defense (Human Firewall), reducing infections caused by social engineering."
    }
  },
  "awareness": {
    "whatItIs": {
      "it": "Campagne di sensibilizzazione cicliche, come finte email di phishing, progettate per mantenere alta l'allerta dei dipendenti verso le ultime truffe online.",
      "en": "Cyclical awareness campaigns, such as simulated phishing emails, designed to maintain high employee alertness toward the latest online scams."
    },
    "utility": {
      "it": "Abbassa drasticamente la percentuale di clic su link dannosi (Click Rate) e previene la compromissione iniziale legata alla cattiva disattenzione formativa.",
      "en": "Drastically lowers the click rate on malicious links and prevents initial network compromise tied to poor educational awareness."
    }
  },
  "tabletop": {
    "whatItIs": {
      "it": "Esercitazioni teoriche dove i manager discutono come rispondere a uno scenario di attacco simulato, testando la prontezza del piano d'emergenza.",
      "en": "Theoretical exercises where managers discuss how to respond to a simulated attack scenario, testing emergency plan readiness."
    },
    "utility": {
      "it": "Scopre lacune nei processi e nelle comunicazioni prima che avvenga un evento reale, assicurando che tutti sappiano cosa fare durante una vera crisi.",
      "en": "Discovers gaps in processes and communications before a real event occurs, ensuring everyone knows what to do during an actual crisis."
    }
  },
  "physical-iot": {
    "whatItIs": {
      "it": "La sicurezza degli oggetti connessi (IoT) e delle infrastrutture fisiche, come serrature smart, telecamere e sensori ambientali.",
      "en": "Security for connected objects (IoT) and physical infrastructure, such as smart locks, cameras, and environmental sensors."
    },
    "utility": {
      "it": "Previene che dispositivi IoT non sicuri diventino una porta d'ingresso per gli hacker verso la rete aziendale principale.",
      "en": "Prevents insecure IoT devices from becoming an entry point for hackers into the main corporate network."
    }
  },
  "iot-security": {
    "whatItIs": {
      "it": "Controlli specifici per proteggere la vasta gamma di dispositivi intelligenti usati in azienda, spesso privi di difese integrate solide.",
      "en": "Specific controls to protect the vast range of smart devices used in the company, which often lack solid integrated defenses."
    },
    "utility": {
      "it": "Garantisce che il frigorifero smart o la stampante non vengano usati per lanciare attacchi DDoS o rubare documenti riservati.",
      "en": "Ensures the smart fridge or printer isn't used to launch DDoS attacks or steal confidential documents."
    }
  },
  "facility-controls": {
    "whatItIs": {
      "it": "Sistemi di controllo fisico degli accessi agli edifici, come tornelli, badge e vigilanza armata, per proteggere l'accesso alle sale server.",
      "en": "Physical building access control systems, such as turnstiles, badges, and armed security, to protect server room access."
    },
    "utility": {
      "it": "Impedisce a persone non autorizzate di entrare fisicamente nei data center per rubare server, collegare dispositivi spia o sabotare gli impianti.",
      "en": "Prevents unauthorized persons from physically entering data centers to steal servers, plug in spy devices, or sabotage systems."
    }
  },
  "biometrics": {
    "whatItIs": {
      "it": "L'uso di impronte digitali, scansione del volto o dell'iride per identificare in modo univoco le persone che accedono a zone critiche.",
      "en": "Using fingerprints, face scans, or iris scans to uniquely identify persons accessing critical zones."
    },
    "utility": {
      "it": "Offre un livello di sicurezza superiore ai semplici badge, che possono essere rubati o smarriti, rendendo quasi impossibile l'impersonificazione fisica.",
      "en": "Offers a higher security level than simple badges, which can be stolen or lost, making physical impersonation almost impossible."
    }
  },
  "surveillance": {
    "whatItIs": {
      "it": "Sistemi di videosorveglianza (CCTV) e allarmi volumetrici che monitorano costantemente il perimetro fisico degli uffici e dei data center.",
      "en": "Video surveillance (CCTV) and volumetric alarms that constantly monitor the physical perimeter of offices and data centers."
    },
    "utility": {
      "it": "Funge da deterrente per i malintenzionati e fornisce prove video fondamentali per investigare furti o tentativi di intrusione fisica.",
      "en": "Acts as a deterrent for malicious actors and provides critical video evidence to investigate physical thefts or intrusion attempts."
    }
  },
  "env-security": {
    "whatItIs": {
      "it": "Misure per proteggere l'infrastruttura IT da pericoli ambientali, come incendi, allagamenti, sbalzi di tensione e guasti ai condizionatori.",
      "en": "Measures to protect IT infrastructure from environmental hazards, such as fires, floods, power surges, and HVAC failure."
    },
    "utility": {
      "it": "Garantisce che i server continuino a funzionare anche in condizioni ambientali avverse, prevenendo danni hardware permanenti e interruzioni di servizio.",
      "en": "Ensures servers continue functioning even in adverse environmental conditions, preventing permanent hardware damage and service outages."
    }
  },
  "appsec": {
    "whatItIs": {
      "it": "Insieme di metodiche dedite alla saldificazione del codice. 'Shift-Left' prevede che lo scanning per vulnerabilità avvenga primariamente sulla scrivania dello sviluppatore e non alla fine del progetto.",
      "en": "The set of methodologies dedicated to code solidification. 'Shift-Left' mandates that vulnerability scanning occurs primarily on the developer's desk rather than at the project's end."
    },
    "utility": {
      "it": "Assicura il lancio di applicazioni già intoccabili sul mercato, azzerando i pesantissimi oneri finanziari dati dall'aggiustare software già compromesso e diffuso pubblicamente online.",
      "en": "Ensures the market launch of resilient applications, zeroing out the heavy financial burdens tied to fixing software that is already compromised and publicly deployed."
    }
  },
  "cicd": {
    "whatItIs": {
      "it": "Securing the CI/CD Pipeline: l'inserimento di controlli automatici di sicurezza nel processo di rilascio del software, per bloccare codice vulnerabile prima del deploy.",
      "en": "Securing the CI/CD Pipeline: inserting automated security controls into the software release process to block vulnerable code before deployment."
    },
    "utility": {
      "it": "Rende la sicurezza parte integrante dello sviluppo (DevSecOps), garantendo rilasci rapidi ma protetti e riducendo il rischio di introdurre involontariamente falle.",
      "en": "Makes security an integral part of development (DevSecOps), ensuring rapid but protected releases and reducing the risk of unintentionally introducing gaps."
    }
  },
  "shift-left": {
    "whatItIs": {
      "it": "Il principio di anticipare la sicurezza il più possibile nelle fasi iniziali dello sviluppo (Requisiti e Design) piuttosto che testarla alla fine.",
      "en": "The principle of moving security as far forward as possible into early development phases (Requirements and Design) rather than testing at the end."
    },
    "utility": {
      "it": "Riduce enormemente i costi di riparazione, poiché risolvere un problema di design su carta costa molto meno che riscrivere un intero sistema già pronto.",
      "en": "Enormously reduces repair costs, as solving a design issue on paper costs much less than rewriting an entire, ready-made system."
    }
  },
  "ssdlc": {
    "whatItIs": {
      "it": "Secure Software Development Life Cycle: l'integrazione della sicurezza in ogni fase del ciclo di vita del software, dall'analisi dei requisiti alla manutenzione.",
      "en": "Secure Software Development Life Cycle: the integration of security into every phase of the software lifecycle, from requirements analysis to maintenance."
    },
    "utility": {
      "it": "Assicura che la sicurezza non sia un'aggiunta finale, ma una caratteristica intrinseca del prodotto, riducendo bug costosi e falle strutturali.",
      "en": "Ensures security is not an afterthought but an inherent product feature, reducing costly bugs and structural flaws."
    }
  },
  "sec-ux": {
    "whatItIs": {
      "it": "Security User Experience: il design di interfacce di sicurezza semplici e intuitive, affinché gli utenti non cerchino di aggirare i controlli.",
      "en": "Security User Experience: the design of simple, intuitive security interfaces so that users do not attempt to bypass controls."
    },
    "utility": {
      "it": "Migliora l'adozione delle misure di sicurezza, riducendo la frustrazione degli utenti e diminuendo gli errori commessi per 'stanchezza da sicurezza'.",
      "en": "Improves security measure adoption, reducing user frustration and decreasing errors made due to 'security fatigue'."
    }
  },
  "sec-qa": {
    "whatItIs": {
      "it": "Security Quality Assurance: l'inserimento di test di sicurezza specifici all'interno delle procedure di controllo qualità del software.",
      "en": "Security Quality Assurance: inserting specific security tests within software quality control procedures."
    },
    "utility": {
      "it": "Garantisce che ogni rilascio software rispetti i criteri minimi di sicurezza prefissati, bloccando versioni vulnerabili prima che raggiungano i clienti.",
      "en": "Guarantees that every software release meets predefined minimum security criteria, blocking vulnerable versions before they reach customers."
    }
  },
  "api-sec": {
    "whatItIs": {
      "it": "Security per Application Programming Interfaces (API): la protezione dei canali di comunicazione tra diversi software, spesso bersaglio primario di attacchi.",
      "en": "Security for Application Programming Interfaces (API): the protection of communication channels between different software pieces, often a primary target for attacks."
    },
    "utility": {
      "it": "Previene il furto di dati sensibili che transitano tra le app e impedisce accessi non autorizzati ai servizi backend aziendali.",
      "en": "Prevents the theft of sensitive data transiting between apps and blocks unauthorized access to corporate backend services."
    }
  },
  "threat-modeling": {
    "whatItIs": {
      "it": "Un processo strutturato per identificare potenziali minacce e vulnerabilità specifiche di un'applicazione già in fase di progettazione.",
      "en": "A structured process to identify potential threats and vulnerabilities specific to an application during the design phase."
    },
    "utility": {
      "it": "Permette di costruire difese mirate contro i pericoli reali, evitando di sprecare risorse su protezioni inutili e concentrandosi sui punti deboli effettivi.",
      "en": "Allows for building targeted defenses against real dangers, avoiding wasting resources on useless protections and focusing on actual weak points."
    }
  },
  "source-code-scan": {
    "whatItIs": {
      "it": "Software Composition Analysis (SCA): procedura di audit volta a identificare tutte le librerie open source di terze parti incluse nel software proprietario.",
      "en": "Software Composition Analysis (SCA): an audit procedure aiming to identify all third-party open-source libraries packaged within proprietary software."
    },
    "utility": {
      "it": "Impedisce l'importazione involontaria di difetti altrui o violazioni di licenza, garantendo che le dipendenze esterne siano patching-compliant.",
      "en": "Prevents the unintentional importing of external flaws or license violations, ensuring that external dependencies are fully securely patched."
    }
  },
  "sast": {
    "whatItIs": {
      "it": "Analisi Statica della Sicurezza (SAST): un processo automatizzato che analizza il codice sorgente senza eseguirlo, cercando difetti e vulnerabilità pre-compilazione.",
      "en": "Static Application Security Testing (SAST): an automated process analyzing source code without executing it, hunting for pre-compilation vulnerabilities."
    },
    "utility": {
      "it": "Rileva difetti (es. SQL Injections) alla base. Essendo eseguito durate la stesura del codice, riduce radicalmente i costi di rimediazione software.",
      "en": "Detects flaws (e.g., SQL Injections) at the root. Being executed during coding, it radically reduces downstream software remediation expenses."
    }
  },
  "iast": {
    "whatItIs": {
      "it": "Interactive Application Security Testing: una tecnologia di analisi che combina SAST e DAST, testando l'app dall'interno mentre è in esecuzione.",
      "en": "Interactive Application Security Testing: an analysis technology combining SAST and DAST, testing the app from the inside while it is running."
    },
    "utility": {
      "it": "Fornisce risultati molto precisi e in tempo reale agli sviluppatori, riducendo i falsi positivi e permettendo di correggere bug durante i test funzionali.",
      "en": "Provides very precise, real-time results to developers, reducing false positives and allowing bug fixes during functional testing."
    }
  },
  "sca": {
    "whatItIs": {
      "it": "Ramo disciplinare dedicato alla difesa di apparecchiature tecnologiche in ambito industriale (OT, PLC), essenziali per le linee di produzione o centrali elettriche.",
      "en": "The disciplinary branch dedicated to defending technological equipment within industrial settings (OT, PLC), critical for production lines or power plants."
    },
    "utility": {
      "it": "Impedisce il verificarsi di conseguenze drammatiche che esulano dalla perdita dati: un attacco hacker su queste reti causerà altrimenti arresti fisici o danni ambientali.",
      "en": "Prevents dramatic consequences transcending mere data loss: a successful hacker attack on these networks would otherwise cause physical halts or environmental damage."
    }
  },
  "open-source-scan": {
    "whatItIs": {
      "it": "Software Composition Analysis (SCA): procedura di audit volta a identificare tutte le librerie open source di terze parti incluse nel software proprietario.",
      "en": "Software Composition Analysis (SCA): an audit procedure aiming to identify all third-party open-source libraries packaged within proprietary software."
    },
    "utility": {
      "it": "Impedisce l'importazione involontaria di difetti altrui o violazioni di licenza, garantendo che le dipendenze esterne siano patching-compliant.",
      "en": "Prevents the unintentional importing of external flaws or license violations, ensuring that external dependencies are fully securely patched."
    }
  },
  "supply-chain-sec": {
    "whatItIs": {
      "it": "La protezione dell'intera catena di fornitura del software, assicurando che tutti i fornitori e le librerie esterne rispettino standard di sicurezza rigorosi.",
      "en": "Protection of the entire software supply chain, ensuring all vendors and external libraries meet rigorous security standards."
    },
    "utility": {
      "it": "Previene attacchi devastanti dove gli hacker colpiscono un fornitore per infettare migliaia di suoi clienti (es. attacchi di tipo SolarWinds).",
      "en": "Prevents devastating attacks where hackers target a vendor to infect thousands of its customers (e.g., SolarWinds-style attacks)."
    }
  },
  "sbom": {
    "whatItIs": {
      "it": "Distinta Base del Software (SBOM): un inventario formale e strutturato contenente l'elenco esatto di ogni componente ingegneristico, libreria e modulo usato in un applicativo.",
      "en": "Software Bill of Materials (SBOM): a formal, structured inventory detailing the exact list of every engineering component, library, and module present in a software build."
    },
    "utility": {
      "it": "Assicura trasparenza estrema per la Supply Chain. Sapendo con esattezza cosa c'è nel software, si reagisce istantaneamente quando si scopre una vulnerabilità in un modulo celebre (es. Log4j).",
      "en": "Ensures extreme Supply Chain transparency. By knowing exactly what resides in the software, teams react instantly upon discovery of a vulnerability within a famous module (e.g., Log4j)."
    }
  },
  "slsa": {
    "whatItIs": {
      "it": "SLSA (Supply-chain Levels for Software Artifacts): un framework per garantire l'integrità formale dei pacchetti software contro le manomissioni durante la compilazione.",
      "en": "SLSA (Supply-chain Levels for Software Artifacts): a framework for ensuring formal integrity of software artifacts against tampering during build."
    },
    "utility": {
      "it": "Crea una 'catena di custodia' verificabile per il software, assicurando che ciò che finisce in produzione sia esattamente ciò che è stato scritto dagli sviluppatori.",
      "en": "Creates a verifiable 'chain of custody' for software, ensuring what ends up in production is exactly what was written by developers."
    }
  },
  "ai-sec": {
    "whatItIs": {
      "it": "Securing AI / ML: la protezione dei modelli di Intelligenza Artificiale da attacchi che mirano a rubare dati o alterare il comportamento dell'algoritmo.",
      "en": "Securing AI / ML: protecting Artificial Intelligence models from attacks aimed at stealing data or altering algorithm behavior."
    },
    "utility": {
      "it": "Assicura che l'AI aziendale rimanga affidabile e che i dati sensibili usati per il training non vengano esposti tramite query maliziose.",
      "en": "Ensures corporate AI remains reliable and that sensitive training data is not exposed through malicious queries."
    }
  },
  "llm-sec": {
    "whatItIs": {
      "it": "LLM Security: controlli specifici per i Large Language Models (come GPT) per prevenire il leaking di dati o istruzioni dannose (Prompt Injection).",
      "en": "LLM Security: specific controls for Large Language Models (like GPT) to prevent data leaking or harmful instructions (Prompt Injection)."
    },
    "utility": {
      "it": "Protegge le interfacce AI dell'azienda, evitando che gli utenti possano 'ingannare' il sistema per fargli rivelare segreti o eseguire azioni protette.",
      "en": "Protects the organization's AI interfaces, preventing users from 'tricking' the system into revealing secrets or performing protected actions."
    }
  },
  "model-poisoning": {
    "whatItIs": {
      "it": "Prevenzione del Model Poisoning: tecniche per evitare che dati malevoli inseriti nel training set possano corrompere permanentemente le decisioni dell'AI.",
      "en": "Model Poisoning Prevention: techniques to prevent malicious data inserted into the training set from permanently corrupting AI decisions."
    },
    "utility": {
      "it": "Garantisce l'integrità del 'cervello' digitale dell'azienda, prevenendo sabotaggi silenti che potrebbero causare errori fatali o decisioni ingiuste.",
      "en": "Guarantees the integrity of the company's digital 'brain', preventing silent sabotage that could cause fatal errors or unfair decisions."
    }
  },
  "web3-sec": {
    "whatItIs": {
      "it": "Security per Web3 e Smart Contracts: l'audit rigoroso del codice applicato alla blockchain per prevenire furti di asset digitali.",
      "en": "Security for Web3 and Smart Contracts: rigorous auditing of blockchain-applied code to prevent digital asset theft."
    },
    "utility": {
      "it": "Protegge gli investimenti in tecnologie decentralizzate, assicurando che i contratti automatici non contengano falle logiche irreparabili e costosissime.",
      "en": "Protects investments in decentralized technologies, ensuring automatic contracts do not contain irreparable and extremely costly logical flaws."
    }
  },
  "waf": {
    "whatItIs": {
      "it": "Web Application Firewall (WAF): uno scudo che analizza il traffico HTTP/S diretto ai siti web per bloccare attacchi comuni come XSS o SQL Injection.",
      "en": "Web Application Firewall (WAF): a shield analyzing HTTP/S traffic directed at websites to block common attacks like XSS or SQL Injection."
    },
    "utility": {
      "it": "Fornisce una protezione perimetrale immediata per le applicazioni web, agendo da filtro critico prima ancora che il traffico raggiunga i server.",
      "en": "Provides immediate perimeter protection for web applications, acting as a critical filter before traffic even reaches the servers."
    }
  },
  "risk-assessment": {
    "whatItIs": {
      "it": "Processo di identificazione, analisi e valutazione dei rischi logici e fisici allo scopo di stabilirne la priorità economica e operativa.",
      "en": "The process of identifying, analyzing, and evaluating logical and physical risks to establish their operational and economic priority."
    },
    "utility": {
      "it": "Informa la dirigenza su quali vulnerabilità presentano la probabilità e l'impatto maggiori, guidando l'allocazione del budget di sicurezza.",
      "en": "Informs executive management regarding which vulnerabilities present the highest probability and impact, guiding security budget allocation."
    }
  },
  "vuln-scan": {
    "whatItIs": {
      "it": "Software Composition Analysis (SCA): procedura di audit volta a identificare tutte le librerie open source di terze parti incluse nel software proprietario.",
      "en": "Software Composition Analysis (SCA): an audit procedure aiming to identify all third-party open-source libraries packaged within proprietary software."
    },
    "utility": {
      "it": "Impedisce l'importazione involontaria di difetti altrui o violazioni di licenza, garantendo che le dipendenze esterne siano patching-compliant.",
      "en": "Prevents the unintentional importing of external flaws or license violations, ensuring that external dependencies are fully securely patched."
    }
  },
  "assets-inventory": {
    "whatItIs": {
      "it": "L'inventario completo di ogni macchina, software e servizio cloud in uso: fondamentale perché non si può difendere ciò che non si sa di avere.",
      "en": "The complete inventory of every machine, software, and cloud service in use: fundamental because you cannot defend what you do not know you have."
    },
    "utility": {
      "it": "Identifica sistemi obsoleti o dimenticati (Shadow IT) che potrebbero fungere da punti d'ingresso facili per gli attaccanti.",
      "en": "Identifies obsolete or forgotten systems (Shadow IT) that could act as easy entry points for attackers."
    }
  },
  "data-flow": {
    "whatItIs": {
      "it": "La mappatura di come i dati sensibili viaggiano attraverso i sistemi aziendali e verso l'esterno.",
      "en": "The mapping of how sensitive data travels through corporate systems and towards external endpoints."
    },
    "utility": {
      "it": "Permette di capire quali canali sono a rischio e di applicare la cifratura o i controlli proprio dove servono di più per proteggere la riservatezza.",
      "en": "Allows for understanding which channels are at risk and applying encryption or controls exactly where they are most needed to protect confidentiality."
    }
  },
  "third-party-risk": {
    "whatItIs": {
      "it": "La valutazione della postura di sicurezza dei fornitori esterni prima di affidargli dati o servizi aziendali.",
      "en": "The evaluation of external vendor security posture before entrusting them with corporate data or services."
    },
    "utility": {
      "it": "Garantisce che i nostri partner non siano l'anello debole che mette a rischio i nostri dati via accesso remoto o piattaforme condivise.",
      "en": "Ensures that our partners are not the weakest link risking our data via remote access or shared platforms."
    }
  },
  "fourth-party-risk": {
    "whatItIs": {
      "it": "La valutazione dei fornitori dei nostri fornitori, per identificare dipendenze critiche nascoste lungo la catena.",
      "en": "The evaluation of our vendors' own vendors, to identify hidden critical dependencies along the chain."
    },
    "utility": {
      "it": "Previene l'effetto domino: se un fornitore di infrastruttura cloud cade, molti altri servizi a cascata potrebbero bloccarsi inaspettatamente.",
      "en": "Prevents the domino effect: if a cloud infrastructure provider fails, many other cascading services might unexpectedly halt."
    }
  },
  "pen-test": {
    "whatItIs": {
      "it": "Simulazione autorizzata e manuale in cui esperti di sicurezza ('Red Team') tentano di fare irruzione nei sistemi aziendali sfruttando falle di rete o web app.",
      "en": "An authorized, manual simulation where security experts ('Red Team') systematically attempt to breach corporate systems by exploiting network or web vulnerabilities."
    },
    "utility": {
      "it": "Fornisce una misurazione reale, non teorica, di quanto tempo o sforzo occorra per bypassare l'architettura difensiva. Scova catene di vulnerabilità invisibili agli scanner.",
      "en": "Provides an actual, non-theoretical measurement of the time and effort needed to bypass defensive architecture, uncovering invisible vulnerability chains."
    }
  },
  "infra-pen-test": {
    "whatItIs": {
      "it": "Simulazione autorizzata e manuale in cui esperti di sicurezza ('Red Team') tentano di fare irruzione nei sistemi aziendali sfruttando falle di rete o web app.",
      "en": "An authorized, manual simulation where security experts ('Red Team') systematically attempt to breach corporate systems by exploiting network or web vulnerabilities."
    },
    "utility": {
      "it": "Fornisce una misurazione reale, non teorica, di quanto tempo o sforzo occorra per bypassare l'architettura difensiva. Scova catene di vulnerabilità invisibili agli scanner.",
      "en": "Provides an actual, non-theoretical measurement of the time and effort needed to bypass defensive architecture, uncovering invisible vulnerability chains."
    }
  },
  "social-engineering": {
    "whatItIs": {
      "it": "Centro Operativo di Sicurezza: un ecosistema in cui analisti informatici, tramite i software SIEM, tracciano, studiano ed allertano la dirigenza al palesarsi di anomalie nei big-data del traffico interno.",
      "en": "Security Operations Center: an ecosystem where cyber analysts utilize SIEM software to track, study, and alert management upon observing anomalies within internal big-data traffic."
    },
    "utility": {
      "it": "Consente alle grandi reti un controllo vivo: l'identificazione di un'improbabile massiccia richiesta server alle 3 di notte innesca verifiche difensive repentine a tutela del perimetro.",
      "en": "Allows large networks live oversight: identifying an improbable massive server request at 3 AM triggers swift defensive verifications aimed at tightly protecting the perimeter."
    }
  },
  "dast": {
    "whatItIs": {
      "it": "Analisi Dinamica (DAST): l'interazione automatica con un'applicazione in funzione per scovare vulnerabilità sfruttabili solo a runtime (es. errori di configurazione server).",
      "en": "Dynamic Analysis (DAST): automated interaction with a running application to uncover vulnerabilities only exploitable at runtime (e.g., server misconfigurations)."
    },
    "utility": {
      "it": "Rivela come le applicazioni reagiscono a input malevoli in scenari reali, testando le difese dal punto di vista dell'attaccante in black-box.",
      "en": "Reveals how applications react to malicious inputs in real scenarios, testing defenses from an attacker's black-box perspective."
    }
  },
  "app-pen-test": {
    "whatItIs": {
      "it": "Simulazione autorizzata e manuale in cui esperti di sicurezza ('Red Team') tentano di fare irruzione nei sistemi aziendali sfruttando falle di rete o web app.",
      "en": "An authorized, manual simulation where security experts ('Red Team') systematically attempt to breach corporate systems by exploiting network or web vulnerabilities."
    },
    "utility": {
      "it": "Fornisce una misurazione reale, non teorica, di quanto tempo o sforzo occorra per bypassare l'architettura difensiva. Scova catene di vulnerabilità invisibili agli scanner.",
      "en": "Provides an actual, non-theoretical measurement of the time and effort needed to bypass defensive architecture, uncovering invisible vulnerability chains."
    }
  },
  "risk-monitoring": {
    "whatItIs": {
      "it": "Attività di sorveglianza continua sul profilo di rischio dell'azienda, sfruttando cruscotti e metriche operative per rilevare scostamenti dalle policy.",
      "en": "Continuous surveillance activities over the enterprise risk profile, utilizing operational dashboards and metrics to detect policy deviations."
    },
    "utility": {
      "it": "Assicura che le variazioni nel panorama delle minacce vengano rilevate istantaneamente, consentendo aggiustamenti proattivi delle difese.",
      "en": "Ensures that variations in the threat landscape are detected instantly, allowing for proactive adjustments to defensive architectures."
    }
  },
  "erm": {
    "whatItIs": {
      "it": "Enterprise Risk Management (ERM): la strategia globale per identificare e gestire tutti i rischi che potrebbero impedire all'azienda di raggiungere i suoi obiettivi.",
      "en": "Enterprise Risk Management (ERM): the global strategy to identify and manage all risks that could prevent the company from reaching its objectives."
    },
    "utility": {
      "it": "Integra il rischio informatico nel contesto più ampio del business, assicurando che la sicurezza sia una priorità strategica per tutto il board.",
      "en": "Integrates cyber risk into the wider business context, ensuring security is a strategic priority for the entire board."
    }
  },
  "risk-treatment": {
    "whatItIs": {
      "it": "Le azioni specifiche intraprese per gestire un rischio: mitigarlo (mettere difese), trasferirlo (assicurazione), evitarlo o accettarlo.",
      "en": "Specific actions taken to manage a risk: mitigate it (build defenses), transfer it (insurance), avoid it, or accept it."
    },
    "utility": {
      "it": "Assicura che ogni rischio identificato abbia un piano d'azione concreto, evitando che rimanga solo una voce in un report senza rimediazione.",
      "en": "Ensures every identified risk has a concrete action plan, preventing it from remaining a mere item in a report without remediation."
    }
  },
  "risk-acceptance": {
    "whatItIs": {
      "it": "La decisione consapevole della dirigenza di non agire su un rischio minore, assumendosene la responsabilità formale in caso di incidente.",
      "en": "A conscious leadership decision not to act on a minor risk, formally assuming responsibility should an incident occur."
    },
    "utility": {
      "it": "Permette all'azienda di concentrare risorse limitate sui rischi più gravi, formalizzando la soglia di tolleranza al danno.",
      "en": "Allows the company to focus limited resources on the most severe risks, formalizing the damage tolerance threshold."
    }
  },
  "cyber-insurance": {
    "whatItIs": {
      "it": "Polizze assicurative stipulate per trasferire parte del rischio finanziario legato agli incidenti informatici, coprendo costi di disservizio e sanzioni.",
      "en": "Insurance policies established to transfer a portion of the financial risk linked to cyber incidents, covering disruption costs and regulatory fines."
    },
    "utility": {
      "it": "Agisce come rete di salvataggio economica: ammortizza i danni monetari immensi derivanti da violazioni massicce, ransomware o furto di dati.",
      "en": "Acts as an economic safety net: amortizes the immense monetary damages associated with massive breaches, ransomware, or data theft."
    }
  },
  "lines-of-defense": {
    "whatItIs": {
      "it": "Il modello organizzativo che separa chi opera (1ª linea), chi controlla e gestisce i rischi (2ª linea) e chi verifica indipendentemente (3ª linea).",
      "en": "The organizational model separating operations (1st line), risk management and control (2nd line), and independent verification (3rd line)."
    },
    "utility": {
      "it": "Crea un sistema di pesi e contrappesi che evita conflitti di interesse e garantisce che nessun errore possa passare del tutto inosservato.",
      "en": "Creates a system of checks and balances avoiding conflicts of interest and ensuring no error passes entirely unnoticed."
    }
  },
  "process-owners": {
    "whatItIs": {
      "it": "Le figure responsabili della gestione quotidiana dei controlli di sicurezza all'interno delle proprie aree operative (1ª Linea di Difesa).",
      "en": "Individuals responsible for daily management of security controls within their respective operational areas (1st Line of Defense)."
    },
    "utility": {
      "it": "Garantisce che la sicurezza sia vissuta 'sul campo' e non solo su carta, responsabilizzando chi effettivamente esegue i processi aziendali.",
      "en": "Ensures security is practiced 'on the ground' and not just on paper, empowering those who actually execute corporate processes."
    }
  },
  "risk-mgmt-group": {
    "whatItIs": {
      "it": "Il team dedicato a supervisionare, definire le policy e monitorare l'andamento globale del rischio informatico (2ª Linea di Difesa).",
      "en": "The team dedicated to oversight, policy definition, and monitoring global cyber risk trends (2nd Line of Defense)."
    },
    "utility": {
      "it": "Fornisce competenza specialistica e visione d'insieme, guidando l'azienda verso scelte di sicurezza coerenti e misurabili.",
      "en": "Provides specialist expertise and a big-picture view, guiding the company toward coherent and measurable security choices."
    }
  },
  "audit": {
    "whatItIs": {
      "it": "Controllo indipendente (spesso esterno) che verifica se le policy e i controlli siano effettivamente implementati ed efficaci (3ª Linea di Difesa).",
      "en": "Independent control (often external) verifying if policies and controls are actually implemented and effective (3rd Line of Defense)."
    },
    "utility": {
      "it": "Rappresenta la verifica finale e imparziale, fondamentale per la trasparenza verso gli stakeholder e per la certificazione degli standard clinici.",
      "en": "Represents the final, impartial verification, essential for stakeholder transparency and certification of clinical standards."
    }
  },
  "risk-register": {
    "whatItIs": {
      "it": "L'elenco formale di tutti i rischi informatici identificati, con i relativi punteggi di gravità e lo stato della loro rimediazione.",
      "en": "The formal list of all identified cyber risks, including severity scores and remediation status."
    },
    "utility": {
      "it": "Agisce come memoria storica e strumento di tracciamento, assicurando che nessun rischio venga dimenticato nel tempo.",
      "en": "Acts as historical memory and a tracking tool, ensuring no risk is forgotten over time."
    }
  },
  "risk-appetite": {
    "whatItIs": {
      "it": "La quantità e il tipo di rischio che un'azienda è disposta a correre pur di raggiungere i propri obiettivi strategici.",
      "en": "The amount and type of risk an organization is willing to take to achieve its strategic objectives."
    },
    "utility": {
      "it": "Aiuta a definire quando un rischio è 'troppo alto' e quando invece un investimento in sicurezza sarebbe sproporzionato rispetto al valore protetto.",
      "en": "Helps define when a risk is 'too high' and when a security investment would be disproportionate to the protected value."
    }
  },
  "crisis-mgmt": {
    "whatItIs": {
      "it": "Crisis Management: il piano d'azione di alto livello per gestire le conseguenze non tecniche di un attacco (es. comunicazione ai media, gestione legale, impatto sul brand).",
      "en": "Crisis Management: the high-level action plan to manage the non-technical consequences of an attack (e.g., media communication, legal management, brand impact)."
    },
    "utility": {
      "it": "Protegge la sopravvivenza dell'azienda a lungo termine, gestendo la percezione pubblica e riducendo il panico tra investitori e clienti durante una violazione.",
      "en": "Protects long-term corporate survival by managing public perception and reducing panic among investors and customers during a breach."
    }
  },
  "bcp-dr": {
    "whatItIs": {
      "it": "La Business Continuity e il Disaster Recovery (BCP/DR) delineano i protocolli tattici e strategici per garantire l'immediata accensione di data-center secondari in caso d'inagibilità della sede madre.",
      "en": "Business Continuity and Disaster Recovery (BCP/DR) outline the tactical and strategic protocols enabling the immediate activation of secondary data-centers during headquarters unavailability."
    },
    "utility": {
      "it": "Agisce come garanzia assoluta di sopravvivenza commerciale preservando incassi e reputazione in caso d'inondazione o massiccio guasto tecnico dei server primari.",
      "en": "Acts as an absolute guarantee of commercial survival, preserving revenue and reputation amidst floods or massive technical failures crippling primary servers."
    }
  },
  "soc1-soc2": {
    "whatItIs": {
      "it": "Certificazioni di audit (System and Organization Controls) che attestano ufficialmente la sicurezza e l'affidabilità operativa dei fornitori di servizi.",
      "en": "Audit certifications (System and Organization Controls) that officially attest to the security and operational reliability of service providers."
    },
    "utility": {
      "it": "Dimostra ai clienti che l'azienda gestisce i loro dati con rigore, fondamentale per vendere servizi a grandi corporate o istituzioni finanziarie.",
      "en": "Proves to customers that the company manages their data with rigor, essential for selling services to large corporates or financial institutions."
    }
  },
  "threat-intel": {
    "whatItIs": {
      "it": "Analisi di informazioni raccolte esternamente (Forum Underground, Feed globali) per prevenire le metodologie e capire i vettori d'attacco delle bande cybercriminali attive.",
      "en": "Analysis of external information (Underground forums, Global threat feeds) to anticipate the methodologies and attack vectors leveraged by active cybercriminal syndicates."
    },
    "utility": {
      "it": "Fornisce saggezza difensiva anticipata (Indicatori di Compromissione), permettendo ai firewall e SOC un rapido aggiornamento delle firme bloccanti settimane prima di finire sotto mira.",
      "en": "Supplies anticipatory defensive wisdom (Indicators of Compromise), allowing firewalls and SOCs to update blocking signatures rapidly weeks before being targeted."
    }
  },
  "ti-external": {
    "whatItIs": {
      "it": "External Threat Intelligence: la raccolta di dati sulle minacce provenienti da fonti esterne (Deep/Dark Web, forum hacker, cyber-criminalità globale).",
      "en": "External Threat Intelligence: the collection of threat data from external sources (Deep/Dark Web, hacker forums, global cybercrime)."
    },
    "utility": {
      "it": "Permette di anticipare i nuovi attacchi scoprendo in anticipo quali gruppi hacker stanno prendendo di mira il nostro settore.",
      "en": "Allows for anticipating new attacks by discovering in advance which hacker groups are targeting our sector."
    }
  },
  "ti-contextual-ext": {
    "whatItIs": {
      "it": "Contextual Threat Intelligence: l'analisi del contesto specifico in cui avvengono le minacce esterne, per capire il 'perché' e il 'come' di un attacco.",
      "en": "Contextual Threat Intelligence: the analysis of the specific context in which external threats occur, to understand the 'why' and 'how' of an attack."
    },
    "utility": {
      "it": "Fornisce alla dirigenza gli elementi per capire se un attacco è mirato, politico o puramente opportunistico, guidando la risposta strategica.",
      "en": "Provides management with the elements to understand if an attack is targeted, political, or purely opportunistic, guiding the strategic response."
    }
  },
  "ti-iocs-ext": {
    "whatItIs": {
      "it": "Indicatori di Compromissione (IOCs) esterni: dati tecnici (IP, domini maliziosi, hash di malware) raccolti da database globali per bloccare le minacce note.",
      "en": "External Indicators of Compromise (IOCs): technical data (IPs, malicious domains, malware hashes) collected from global databases to block known threats."
    },
    "utility": {
      "it": "Aggiorna istantaneamente i sistemi di difesa (firewall, antivirus) con le liste nere di tutto il mondo, bloccando attacchi già visti altrove.",
      "en": "Instantly updates defense systems (firewalls, antivirus) with global blacklists, blocking attacks already seen elsewhere."
    }
  },
  "ti-sharing-ext": {
    "whatItIs": {
      "it": "Intel Sharing: la partecipazione a reti di scambio informazioni tra diverse aziende per allertarsi a vicenda su nuovi attacchi in corso.",
      "en": "Intel Sharing: participating in information exchange networks between different companies to alert each other of new ongoing attacks."
    },
    "utility": {
      "it": "Crea una difesa collettiva: quando un'azienda viene colpita, tutte le altre nel network ricevono i dati tecnici per non subire lo stesso destino.",
      "en": "Creates a collective defense: when one company is hit, all others in the network receive the technical data to avoid the same fate."
    }
  },
  "ti-osint": {
    "whatItIs": {
      "it": "L'Open-Source Intelligence (OSINT) prevede la raccolta investigativa e l'assemblaggio di informazioni sensibili puramente provenienti da fonti pubbliche, siti web e social media.",
      "en": "Open-Source Intelligence (OSINT) strictly involves the investigative collection and compilation of sensitive intel gathered purely from public records, web domains, and social media platforms."
    },
    "utility": {
      "it": "Mappa criticamente l'esposizione societaria dall'esterno, localizzando palesi falle di sicurezza, archivi di password smarriti o dipendenti iper-esposti che potrebbero attrarre attacchi mirati.",
      "en": "Critically maps the public corporate exposure footprint from the outside, pinpointing obvious security gaps, lost password dumps, or highly exposed employees attracting targeted strikes."
    }
  },
  "ti-darkweb": {
    "whatItIs": {
      "it": "Dark Web Monitoring: il monitoraggio costante di mercati neri e canali sotterranei per scoprire se credenziali o dati aziendali sono già stati messi in vendita.",
      "en": "Dark Web Monitoring: constant monitoring of black markets and underground channels to see if corporate credentials or data are already for sale."
    },
    "utility": {
      "it": "Funge da allarme dell'ultimo minuto: ci dice se siamo già stati bucati senza accorgercene, permettendoci di cambiare password o bloccare account prima che vengano usati.",
      "en": "Acts as a last-minute alarm: tells us if we have been breached without realizing it, allowing us to change passwords or block accounts before they're used."
    }
  },
  "ti-internal": {
    "whatItIs": {
      "it": "Internal Threat Intelligence: l'analisi delle minacce rilevate all'interno della propria rete (tentativi di accesso falliti, malware bloccati dai PC aziendali).",
      "en": "Internal Threat Intelligence: the analysis of threats detected within one's own network (failed access attempts, malware blocked on corporate PCs)."
    },
    "utility": {
      "it": "Aiuta a capire se l'azienda è sotto un attacco persistente e specifico, permettendo di rafforzare i controlli esattamente dove gli hacker stanno provando a entrare.",
      "en": "Helps understand if the company is under a persistent and specific attack, allowing for control reinforcement exactly where hackers are trying to enter."
    }
  },
  "ti-contextual-int": {
    "whatItIs": {
      "it": "Contextual Threat Intelligence (Internal): correla gli allarmi interni con le attività reali dell'azienda (es. un allarme durante un viaggio di lavoro del dipendente).",
      "en": "Contextual Threat Intelligence (Internal): correlates internal alarms with real corporate activities (e.g., an alarm during an employee's business trip)."
    },
    "utility": {
      "it": "Riduce i falsi positivi, permettendo alla sicurezza di distinguere tra un vero attacco e un comportamento dell'utente che sembra sospetto ma è legittimo.",
      "en": "Reduces false positives, allowing security to distinguish between a real attack and user behavior that looks suspicious but is legitimate."
    }
  },
  "ti-iocs-int": {
    "whatItIs": {
      "it": "Indicatori di Compromissione (IOCs) interni: log tecnici e tracce lasciate dagli attaccanti all'interno dei nostri sistemi dopo un tentativo di intrusione.",
      "en": "Internal Indicators of Compromise (IOCs): technical logs and traces left by attackers within our systems after an intrusion attempt."
    },
    "utility": {
      "it": "Crea una memoria storica degli attacchi subiti, permettendo di riconoscere istantaneamente se lo stesso hacker sta tornando a colpire mesi dopo.",
      "en": "Creates historical memory of attacks suffered, allowing instant recognition if the same hacker returns to strike months later."
    }
  },
  "ti-sharing-int": {
    "whatItIs": {
      "it": "Internal Sharing: la comunicazione fluida delle minacce scoperte tra i diversi dipartimenti tecnici e di sicurezza dell'azienda.",
      "en": "Internal Sharing: fluid communication of discovered threats among different technical and security departments within the company."
    },
    "utility": {
      "it": "Assicura che se il team del sito web scopre un attacco, anche il team dei server e delle app mobili venga allertato per alzare le difese.",
      "en": "Ensures that if the website team discovers an attack, the server and mobile app teams are also alerted to raise their defenses."
    }
  },
  "governance": {
    "whatItIs": {
      "it": "La Governance è il 'pilota' della sicurezza: definisce la strategia, le regole del gioco e assicura che gli sforzi tecnici siano allineati agli obiettivi aziendali.",
      "en": "Governance is the security 'pilot': it defines the strategy, the rules of the game, and ensures technical efforts are aligned with business goals."
    },
    "utility": {
      "it": "Evita che la sicurezza sia un costo caotico, trasformandola in un asset strutturato che supporta la crescita e la fiducia dei clienti.",
      "en": "Prevents security from being a chaotic cost, transforming it into a structured asset that supports growth and customer trust."
    }
  },
  "laws-regs": {
    "whatItIs": {
      "it": "L'insieme delle leggi (nazionali e internazionali) che obbligano le aziende a proteggere i dati e a seguire determinati standard minimi di sicurezza.",
      "en": "The set of laws (national and international) that mandate companies to protect data and follow specific minimum security standards."
    },
    "utility": {
      "it": "Assicura che l'azienda operi legalmente, evitando sanzioni pesanti e garantendo i diritti dei cittadini sui loro dati personali.",
      "en": "Ensures the company operates legally, avoiding heavy sanctions and guaranteeing citizens' rights over their personal data."
    }
  },
  "pci": {
    "whatItIs": {
      "it": "PCI-DSS è lo standard obbligatorio per chiunque gestisca, trasmetta o conservi dati di carte di credito e pagamenti elettronici.",
      "en": "PCI-DSS is the mandatory standard for anyone managing, transmitting, or storing credit card and electronic payment data."
    },
    "utility": {
      "it": "Protegge l'ecosistema finanziario dalle frodi e garantisce che le transazioni online siano sicure per miliardi di utenti.",
      "en": "Protects the financial ecosystem from fraud and ensures online transactions are secure for billions of users."
    }
  },
  "hipaa": {
    "whatItIs": {
      "it": "Legge statunitense che definisce gli standard per la protezione della privacy e della sicurezza delle informazioni sanitarie sensibili (cartelle cliniche).",
      "en": "US law defining standards for protecting the privacy and security of sensitive health information (medical records)."
    },
    "utility": {
      "it": "Garantisce che i dati medici dei pazienti non vengano divulgati senza il loro consenso o rubati da malintenzionati.",
      "en": "Ensures patients' medical data is not disclosed without their consent or stolen by malicious actors."
    }
  },
  "gdpr": {
    "whatItIs": {
      "it": "Monitoraggio e compliance rispetto alle regolamentazioni internazionali e contrattuali (come il GDPR o normative di settore), volti al rispetto severissimo degli standard di privacy.",
      "en": "Monitoring and continuous compliance against international regulations and contractual mandates (like GDPR or sector directives), aimed at strict adherence to privacy standards."
    },
    "utility": {
      "it": "Impedisce il verificarsi di conseguenze direzionali o penali associate ad audit governativi falliti, tutelando inoltre economicamente le finanze societarie da multe punitive da capogiro.",
      "en": "Prevents executive or penal consequences associated with failed governmental audits, thereby protecting corporate finances from staggering punitive regulatory fines."
    }
  },
  "glba": {
    "whatItIs": {
      "it": "Legge che obbliga le istituzioni finanziarie a spiegare le proprie pratiche di condivisione delle informazioni e a proteggere i dati sensibili dei clienti.",
      "en": "Law mandating financial institutions to explain their information-sharing practices and safeguard sensitive customer data."
    },
    "utility": {
      "it": "Protegge la privacy dei consumatori nel settore bancario e assicurativo, imponendo trasparenza nell'uso dei dati.",
      "en": "Protects consumer privacy in the banking and insurance sectors by mandating transparency in data usage."
    }
  },
  "ccpa": {
    "whatItIs": {
      "it": "Legge della California (CCPA) che conferisce ai consumatori un maggiore controllo sulle informazioni personali raccolte dalle aziende.",
      "en": "California law (CCPA) granting consumers more control over the personal information businesses collect about them."
    },
    "utility": {
      "it": "Introduce il diritto di sapere quali dati vengono raccolti e il diritto di chiederne la cancellazione, influenzando gli standard privacy globali.",
      "en": "Introduces the right to know what data is collected and the right to request deletion, influencing global privacy standards."
    }
  },
  "nys-dfs": {
    "whatItIs": {
      "it": "Regolamento della borsa di New York che impone requisiti di cybersecurity rigorosi alle istituzioni di servizi finanziari operanti a NY.",
      "en": "New York State regulation imposing strict cybersecurity requirements on financial services institutions operating in NY."
    },
    "utility": {
      "it": "Uno degli standard più completi al mondo, che include l'obbligo di nominare un CISO e di eseguire monitoraggi continui.",
      "en": "One of the world's most comprehensive standards, including the mandate to appoint a CISO and perform continuous monitoring."
    }
  },
  "industry-specific": {
    "whatItIs": {
      "it": "Standard di sicurezza verticali creati apposta per specifici settori (es. TISAX per l'automotive, SWIFT per il bancario).",
      "en": "Vertical security standards specifically designed for certain sectors (e.g., TISAX for automotive, SWIFT for banking)."
    },
    "utility": {
      "it": "Affrontano i rischi unici di un settore che i framework generali potrebbero ignorare, facilitando la collaborazione tra partner dello stesso mercato.",
      "en": "Address unique industry risks that general frameworks might overlook, facilitating collaboration between partners in the same market."
    }
  },
  "central-gov": {
    "whatItIs": {
      "it": "Normative di cybersecurity imposte dal governo centrale per proteggere le infrastrutture critiche dello stato.",
      "en": "Cybersecurity regulations mandated by central government to protect critical state infrastructure."
    },
    "utility": {
      "it": "Protegge la sicurezza nazionale impedendo che attacchi informatici blocchino servizi essenziali come acqua, luce o difesa.",
      "en": "Protects national security by preventing cyberattacks from crippling essential services like water, electricity, or defense."
    }
  },
  "regional": {
    "whatItIs": {
      "it": "Leggi sulla protezione dei dati che variano in base alla regione geografica in cui opera l'azienda (es. California vs Europa).",
      "en": "Data protection laws that vary based on the geographic region where the company operates (e.g., California vs Europe)."
    },
    "utility": {
      "it": "Assicura che l'azienda sia accogliente e legale in ogni mercato locale in cui decide di espandersi.",
      "en": "Ensures the company is compliant and legal in every local market it chooses to expand into."
    }
  },
  "exec-mgmt": {
    "whatItIs": {
      "it": "Il coinvolgimento attivo del top management nelle decisioni di sicurezza, essenziale per garantire budget, risorse e priorità strategica a livello di Board.",
      "en": "The active involvement of top management in security decisions, essential for securing budget, resources, and strategic priority at the Board level."
    },
    "utility": {
      "it": "Trasforma la cybersecurity da un problema puramente tecnico a un pilastro della strategia aziendale, migliorando la resilienza e la gestione del rischio complessivo.",
      "en": "Transforms cybersecurity from a purely technical issue into a pillar of business strategy, improving overall resilience and risk management."
    }
  },
  "risk-informed": {
    "whatItIs": {
      "it": "Un approccio decisionale basato sulla comprensione dei rischi reali: le misure di sicurezza vengono scelte in base all'impatto e alla probabilità delle minacce.",
      "en": "A decision-making approach based on understanding real risks: security measures are chosen according to the impact and probability of specific threats."
    },
    "utility": {
      "it": "Ottimizza l'uso delle risorse aziendali, concentrando gli investimenti dove sono più necessari per proteggere gli asset critici e ridurre l'esposizione al rischio.",
      "en": "Optimizes the use of corporate resources by focusing investments where they are most needed to protect critical assets and reduce risk exposure."
    }
  },
  "policy": {
    "whatItIs": {
      "it": "Il documento di alto livello che stabilisce gli obiettivi e le aspettative dell'azienda in materia di sicurezza (es. la Policy sull'uso accettabile degli strumenti IT).",
      "en": "The high-level document establishing the company's security goals and expectations (e.g., the Acceptable Use Policy for IT tools)."
    },
    "utility": {
      "it": "Fornisce il supporto legale e direzionale necessario per far rispettare i controlli tecnici e definire le responsabilità dei dipendenti.",
      "en": "Provides the legal and management support necessary to enforce technical controls and define employee responsibilities."
    }
  },
  "procedure": {
    "whatItIs": {
      "it": "Istruzioni dettagliate passo-dopo-passo che spiegano al personale come eseguire compiti specifici in modo sicuro (es. la procedura di gestione degli incidenti).",
      "en": "Detailed step-by-step instructions explaining to personnel how to perform specific tasks securely (e.g., the incident management procedure)."
    },
    "utility": {
      "it": "Assicura costanza e precisione nelle operazioni di sicurezza, riducendo drasticamente il rischio di errori umani durante attività critiche.",
      "en": "Ensures consistency and precision in security operations, drastically reducing the risk of human error during critical activities."
    }
  },
  "standard": {
    "whatItIs": {
      "it": "Regole tecniche e specifiche obbligatorie che definiscono quali tecnologie o configurazioni devono essere utilizzate (es. lo standard di crittografia AES-256).",
      "en": "Mandatory technical rules and specifications that define which technologies or configurations must be used (e.g., the AES-256 encryption standard)."
    },
    "utility": {
      "it": "Garantisce l'interoperabilità e un livello di sicurezza uniforme in tutta l'infrastruttura, semplificando la gestione e il controllo dei sistemi.",
      "en": "Guarantees interoperability and a uniform level of security across the infrastructure, simplifying system management and oversight."
    }
  },
  "guideline": {
    "whatItIs": {
      "it": "Raccomandazioni e best-practice non obbligatorie, ma fortemente consigliate, per guidare gli utenti e i tecnici verso comportamenti più sicuri.",
      "en": "Non-mandatory recommendations and best practices, strongly encouraged to guide users and technicians towards more secure behaviors."
    },
    "utility": {
      "it": "Offre flessibilità e supporto decisionale in situazioni dove regole rigide non sono applicabili, promuovendo una cultura della sicurezza consapevole.",
      "en": "Offers flexibility and decision support in situations where rigid rules aren't applicable, promoting a conscious security culture."
    }
  },
  "compliance": {
    "whatItIs": {
      "it": "L'attività costante di verifica che l'azienda stia seguendo le leggi, i regolamenti e le proprie policy interne di sicurezza.",
      "en": "The constant activity of verifying that the company is following laws, regulations, and its own internal security policies."
    },
    "utility": {
      "it": "Previene conseguenze legali, multe e danni alla reputazione garantendo che l'azienda sia sempre formalmente e tecnicamente a norma.",
      "en": "Prevents legal consequences, fines, and reputational damage by ensuring the company is always formally and technically compliant."
    }
  },
  "reports-scorecards": {
    "whatItIs": {
      "it": "Documenti e dashboard che sintetizzano lo stato della sicurezza, mostrando i progressi, le vulnerabilità e le aree di miglioramento ai vari stakeholder.",
      "en": "Documents and dashboards summarizing security status, showing progress, vulnerabilities, and areas for improvement to various stakeholders."
    },
    "utility": {
      "it": "Fornisce visibilità e trasparenza alla direzione, rendendo misurabile il valore degli investimenti fatti in cybersecurity.",
      "en": "Provides visibility and transparency to management, making the value of cybersecurity investments measurable."
    }
  },
  "kpis-kris": {
    "whatItIs": {
      "it": "Metriche chiave di performance (KPI) e di rischio (KRI) usate per monitorare l'efficacia dei controlli e l'esposizione al pericolo dell'azienda.",
      "en": "Key Performance Indicators (KPIs) and Key Risk Indicators (KRIs) used to monitor control effectiveness and the company's threat exposure."
    },
    "utility": {
      "it": "Permette decisioni basate sui dati reali (Data-Driven), identificando tempestivamente le aree dove i controlli stanno fallendo o dove i rischi stanno aumentando.",
      "en": "Enables data-driven decision making, promptly identifying areas where controls are failing or where risks are increasing."
    }
  },
  "privacy-eng": {
    "whatItIs": {
      "it": "Pratiche ingegneristiche volte ad integrare controlli tecnici di privacy (come la pseudonimizzazione o la cancellazione sicura) direttamente nello sviluppo software.",
      "en": "Engineering practices aimed at integrating technical privacy controls (such as pseudonymization or secure deletion) directly into software development."
    },
    "utility": {
      "it": "Riduce il rischio di data breach fin dall'inizio del progetto, assicurando che i dati personali siano protetti 'per codice' e non solo per policy.",
      "en": "Reduces data breach risk from the project's inception, ensuring personal data is protected 'by code' and not just by policy."
    }
  },
  "privacy-by-design": {
    "whatItIs": {
      "it": "Il principio fondamentale che impone di considerare la protezione dei dati fin dalla fase di progettazione di qualsiasi nuovo prodotto, servizio o processo.",
      "en": "The fundamental principle mandating data protection consideration from the very design phase of any new product, service, or process."
    },
    "utility": {
      "it": "Previene costosi rifacimenti tecnici e garantisce la conformità automatica a normative come il GDPR e il NIST Privacy Framework.",
      "en": "Prevents costly technical reworks and ensures automatic compliance with regulations like GDPR and the NIST Privacy Framework."
    }
  },
  "dpia": {
    "whatItIs": {
      "it": "Data Protection Impact Assessment: un'analisi approfondita del rischio per valutare come un trattamento di dati possa impattare sui diritti e le libertà degli individui.",
      "en": "Data Protection Impact Assessment: an in-depth risk analysis to evaluate how data processing could impact individual rights and freedoms."
    },
    "utility": {
      "it": "Permette di mitigare i rischi elevati prima che un progetto venga lanciato, evitando violazioni della privacy e sanzioni amministrative.",
      "en": "Enables the mitigation of high risks before project launch, preventing privacy violations and administrative sanctions."
    }
  },
  "dsar": {
    "whatItIs": {
      "it": "Data Subject Access Request: il processo formale che permette ai cittadini di esercitare i propri diritti, chiedendo alle aziende l'accesso ai propri dati o la loro cancellazione.",
      "en": "Data Subject Access Request: the formal process allowing citizens to exercise their rights by requesting data access or deletion from companies."
    },
    "utility": {
      "it": "Assicura la trasparenza e la conformità al GDPR, garantendo che l'azienda sia in grado di rispondere tempestivamente alle richieste degli interessati.",
      "en": "Ensures transparency and GDPR compliance, ensuring the company can promptly respond to data subject requests."
    }
  },
  "sase": {
    "whatItIs": {
      "it": "Secure Access Service Edge (SASE) è un'architettura che combina le capacità di rete (SD-WAN) con funzioni di sicurezza cloud native (SWG, CASB, ZTNA) in un unico servizio globale.",
      "en": "Secure Access Service Edge (SASE) is an architecture that converges wide area networking (SD-WAN) with cloud-native security functions (SWG, CASB, ZTNA) into a single global service."
    },
    "utility": {
      "it": "Permette un accesso sicuro e ottimizzato alle applicazioni indipendentemente dalla posizione dell'utente, eliminando la necessità di riportare il traffico al data center centrale.",
      "en": "Enables secure and optimized access to applications regardless of user location, eliminating the need to backhaul traffic to a central data center."
    }
  },
  "ztna": {
    "whatItIs": {
      "it": "Zero Trust Network Access (ZTNA) è una tecnologia che fornisce un accesso remoto sicuro alle applicazioni basato su policy definite, garantendo che nessuno sia considerato attendibile per impostazione predefinita.",
      "en": "Zero Trust Network Access (ZTNA) is a technology that provides secure remote access to applications based on defined policies, ensuring no one is trusted by default."
    },
    "utility": {
      "it": "Sostituisce le VPN tradizionali riducendo la superficie d'attacco e prevenendo il movimento laterale degli attaccanti all'interno della rete.",
      "en": "Replaces traditional VPNs by reducing the attack surface and preventing lateral movement by attackers within the network."
    }
  },
  "micro-segmentation": {
    "whatItIs": {
      "it": "Tecnica di sicurezza che divide il data center o l'ambiente cloud in segmenti protetti granulari, fino al livello del singolo carico di lavoro o macchina virtuale.",
      "en": "A security technique that divides the data center or cloud environment into granular protected segments, down to the individual workload or virtual machine level."
    },
    "utility": {
      "it": "Isola le compromissioni e impedisce la propagazione laterale di malware o attaccanti tra i server della stessa rete.",
      "en": "Isolates compromises and prevents the lateral propagation of malware or attackers between servers on the same network."
    }
  },
  "honeypots": {
    "whatItIs": {
      "it": "Sistemi esca progettati per essere violati, al fine di rilevare, deviare o studiare i tentativi di hacking e le tattiche degli avversari.",
      "en": "Decoy systems designed to be breached in order to detect, deflect, or study hacking attempts and adversary tactics."
    },
    "utility": {
      "it": "Funzionano come un sistema di allarme precoce (Early Warning), fornendo intelligence preziosa sugli attacchi mirati prima che colpiscano gli asset reali.",
      "en": "Act as an early warning system, providing valuable intelligence on targeted attacks before they hit real assets."
    }
  },
  "mdr-mssp": {
    "whatItIs": {
      "it": "Servizi esternalizzati di monitoraggio e risposta (Managed Detection and Response) forniti da team di esperti (MSSP) che operano 24/7.",
      "en": "Outsourced monitoring and response services (Managed Detection and Response) provided by expert teams (MSSP) operating 24/7."
    },
    "utility": {
      "it": "Colmano il divario di competenze e forniscono capacità di difesa avanzata ad aziende che non possono permettersi un SOC interno completo.",
      "en": "Bridge the skills gap and provide advanced defense capabilities for companies that cannot afford a full in-house SOC."
    }
  },
  "rasp": {
    "whatItIs": {
      "it": "Runtime Application Self-Protection (RASP) è una tecnologia di sicurezza integrata nell'applicazione che controlla l'esecuzione del codice in tempo reale.",
      "en": "Runtime Application Self-Protection (RASP) is a security technology integrated into the application that monitors code execution in real-time."
    },
    "utility": {
      "it": "Blocca attacchi complessi come SQL injection o cross-site scripting dall'interno dell'app stessa, anche se le vulnerabilità non sono state ancora fixate.",
      "en": "Blocks complex attacks such as SQL injection or cross-site scripting from within the app itself, even if vulnerabilities have not yet been patched."
    }
  },
  "api-gw": {
    "whatItIs": {
      "it": "Un gateway API funge da proxy inverso per gestire l'instradamento, l'autenticazione, il limitazione del traffico e la sicurezza delle chiamate API.",
      "en": "An API gateway acts as a reverse proxy to manage routing, authentication, rate limiting, and security for API calls."
    },
    "utility": {
      "it": "Protegge i microservizi esposti esponendo un unico punto di ingresso sicuro e applicando policy di sicurezza centralizzate.",
      "en": "Protects exposed microservices by exposing a single secure entry point and enforcing centralized security policies."
    }
  },
  "fuzzing": {
    "whatItIs": {
      "it": "Tecnica di testing automatizzato che invia dati casuali, invalidi o inaspettati a un'applicazione per scovare bug di memoria e crash di sicurezza.",
      "en": "An automated testing technique that sends random, invalid, or unexpected data to an application to find memory bugs and security crashes."
    },
    "utility": {
      "it": "Identifica vulnerabilità critiche (come buffer overflow) che sfuggono ai test statici tradizionali, alzando la robustezza del software.",
      "en": "Identifies critical vulnerabilities (like buffer overflows) that miss traditional static tests, increasing software robustness."
    }
  },
  "stix-taxii": {
    "whatItIs": {
      "it": "Standard aperti (STIX) e protocolli (TAXII) per lo scambio e la comunicazione automatizzata di informazioni sulle minacce informatiche (Cyber Threat Intelligence).",
      "en": "Open standards (STIX) and protocols (TAXII) for the automated exchange and communication of cyber threat intelligence (CTI)."
    },
    "utility": {
      "it": "Permette a diversi strumenti di sicurezza di 'parlare' la stessa lingua e condividere IOC (Indicatori di Compromissione) in tempo reale tra organizzazioni.",
      "en": "Enables different security tools to 'speak' the same language and share IOCs (Indicators of Compromise) in real-time across organizations."
    }
  },
  "misp": {
    "whatItIs": {
      "it": "Malware Information Sharing Platform (MISP) è una piattaforma open source per la condivisione, l'archiviazione e la correlazione di indicatori di minacce.",
      "en": "Malware Information Sharing Platform (MISP) is an open-source platform for sharing, storing, and correlating indicators of threats."
    },
    "utility": {
      "it": "Facilita la collaborazione tra comunità di sicurezza per rispondere collettivamente a campagne di attacco globali.",
      "en": "Facilitates collaboration among security communities to collectively respond to global attack campaigns."
    }
  },
  "nist-privacy": {
    "whatItIs": {
      "it": "Il NIST Privacy Framework è uno strumento volontario progettato per aiutare le organizzazioni a identificare e gestire il rischio di privacy per gli individui.",
      "en": "The NIST Privacy Framework is a voluntary tool designed to help organizations identify and manage privacy risk for individuals."
    },
    "utility": {
      "it": "Fornisce una struttura flessibile per allineare la conformità alle leggi sulla privacy (come GDPR) con gli obiettivi aziendali.",
      "en": "Provides a flexible structure to align compliance with privacy laws (like GDPR) with business objectives."
    }
  },
  "lgpd": {
    "whatItIs": {
      "it": "La Lei Geral de Proteção de Dados (LGPD) è la legge brasiliana sulla protezione dei dati personali, fortemente ispirata al GDPR europeo.",
      "en": "The Lei Geral de Proteção de Dados (LGPD) is Brazil's personal data protection law, heavily inspired by the European GDPR."
    },
    "utility": {
      "it": "Regola il trattamento dei dati personali dei cittadini brasiliani, imponendo obblighi severi a tutte le aziende globali che operano nel mercato brasiliano.",
      "en": "Regulates the processing of personal data of Brazilian citizens, imposing strict obligations on all global companies operating in the Brazilian market."
    }
  },
  "ens": {
    "whatItIs": {
      "it": "Lo Esquema Nacional de Seguridad (ENS) è il quadro normativo spagnolo che stabilisce gli standard minimi di sicurezza per la pubblica amministrazione e i suoi fornitori.",
      "en": "The Esquema Nacional de Seguridad (ENS) is the Spanish regulatory framework that establishes minimum security standards for public administration and its suppliers."
    },
    "utility": {
      "it": "Garantisce la fiducia nei servizi elettronici pubblici assicurando l'integrità, la disponibilità e la riservatezza delle informazioni gestite.",
      "en": "Guarantees trust in public electronic services by ensuring the integrity, availability, and confidentiality of the information managed."
    }
  },
  "grc-platform": {
    "whatItIs": {
      "it": "Le piattaforme GRC (Governance, Risk, and Compliance) coordinano la strategia aziendale con la gestione del rischio e la conformità normativa.",
      "en": "GRC (Governance, Risk, and Compliance) platforms coordinate corporate strategy with risk management and regulatory compliance."
    },
    "utility": {
      "it": "Elimina i silos informativi fornendo una visione unificata della postura di rischio e dei progressi nella conformità alle certificazioni (ISO, NIST).",
      "en": "Eliminates information silos by providing a unified view of risk posture and progress in compliance with certifications (ISO, NIST)."
    }
  }
};