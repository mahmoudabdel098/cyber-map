const fs = require('fs');

const content = fs.readFileSync('./src/data/mapData.ts', 'utf-8');
const idRegex = /(?:sub|cat)\('([^']+)',\s*'([^']+)'/g;
let match;
const nodes = [];
while ((match = idRegex.exec(content)) !== null) {
  nodes.push({ id: match[1], label: match[2] });
}

// Genera un testo enciclopedico e nativo, senza traduzioni letterali incrociate.
const getDetailedText = (id, label) => {
  let w_it = "", w_en = "", u_it = "", u_en = "";
  
  if (id.includes('endpoint-hygiene')) {
    w_it = "L'Endpoint Hygiene comprende l'insieme delle pratiche e delle configurazioni necessarie per mantenere i dispositivi finali (PC, smartphone, server) in uno stato sicuro e conforme. Includono la gestione delle patch, il rafforzamento delle configurazioni (hardening) e la correzione delle derive rispetto alle baseline aziendali.";
    u_it = "Costituisce la prima linea di difesa contro attacchi opportunistici. Riduce drasticamente la superficie d'attacco impedendo che vulnerabilità note e configurazioni deboli vengano sfruttate da malware o da attaccanti non sofisticati, garantendo stabilità operativa.";
    w_en = "Endpoint Hygiene refers to the continuous process of securing end-user devices, servers, and mobile platforms by ensuring they meet established security baselines. This involves consistent patch management, configuration hardening, and the removal of unauthorized software.";
    u_en = "It minimizes the overall attack surface by eliminating low-hanging fruit for threat actors. Proper hygiene disrupts automated exploitation attempts and ensures that devices interacting with the corporate network maintain a reliable security posture.";
  } else if (id.includes('edr-xdr')) {
    w_it = "Le soluzioni EDR (Endpoint Detection and Response) e XDR (Extended Detection and Response) monitorano costantemente gli host e la rete per identificare comportamenti anomali. Utilizzano l'analisi euristica, la threat intelligence e l'apprendimento automatico per individuare minacce che eludono le difese perimetrali.";
    u_it = "Queste tecnologie forniscono la visibilità necessaria per identificare tempestivamente le compromissioni in corso. Permettono ai team di sicurezza di isolare gli endpoint infetti e di intraprendere azioni di risposta prima che un attacco si trasformi in una violazione diffusa (es. ransomware).";
    w_en = "Endpoint Detection and Response (EDR) and eXtended Detection and Response (XDR) are advanced telemetry platforms that continuously monitor host and network activities. They leverage telemetry, behavioral analytics, and AI to uncover sophisticated attacks bypassing traditional prevention.";
    u_en = "They provide critical visibility into post-compromise activities. Security teams rely on these tools to swiftly detect indicators of compromise (IoCs), isolate affected assets, and orchestrate automated or manual remediation to prevent lateral movement.";
  } else if (id.includes('mdm')) {
    w_it = "Il Mobile Device Management (MDM) è un framework tecnologico che centralizza l'amministrazione, il monitoraggio e la sicurezza dei dispositivi mobili aziendali e personali (BYOD).";
    u_it = "Garantisce che smartphone e tablet accedano ai dati aziendali solo se conformi alle policy di sicurezza. Permette inoltre di formattare i dispositivi da remoto in caso di smarrimento e separa le applicazioni lavorative da quelle personali.";
    w_en = "Mobile Device Management (MDM) software empowers organizations to centrally govern, monitor, and secure corporate-owned and bring-your-own-device (BYOD) endpoints like smartphones and tablets across various operating systems.";
    u_en = "It ensures corporate data remains isolated and protected regardless of the physical location of the device. Features like remote wipe, mandatory encryption, and application containerization critically safeguard sensitive information against device theft or loss.";
  } else if (id.includes('ngav')) {
    w_it = "L'Antivirus di Nuova Generazione (NGAV) supera il tradizionale approccio basato sulle firme dei virus. Adotta invece algoritmi di machine learning e analisi comportamentale per identificare e bloccare i malware sconosciuti.";
    u_it = "A differenza dei sistemi legacy, è in grado di neutralizzare attacchi zero-day, malware senza file (fileless) e script dannosi bloccando l'esecuzione di processi anomali direttamente a livello di host.";
    w_en = "Next-Generation Antivirus (NGAV) advances beyond legacy signature-based detection. It employs deep machine learning, behavioral analysis, and exploit mitigation to identify malicious intent before an executable fully runs.";
    u_en = "NGAV is essential for thwarting modern threat tactics, such as fileless malware, weaponized documents, and zero-day exploits, protecting endpoints from threats that have never been seen before in the wild.";
  } else if (id.includes('dlp') || id.includes('data-leakage')) {
    w_it = "La Data Loss Prevention (DLP) raggruppa le tecnologie e policy finalizzate a identificare, monitorare e proteggere i dati sensibili in movimento (rete), a riposo (storage) o in uso (endpoint).";
    u_it = "Previenine la fuga di informazioni riservate—sia accidentale che intenzionale—bloccando trasferimenti non autorizzati verso chiavette USB, servizi cloud esterni o via email, garantendo il rispetto delle normative sulla privacy.";
    w_en = "Data Loss Prevention (DLP) entails the strategy and tools designed to ensure that sensitive data is not lost, misused, or accessed by unauthorized users. It monitors data at rest, in motion, and in use.";
    u_en = "It safeguards intellectual property and regulated data (such as PII or PHI) by enforcing policies that block unauthorized data exfiltration, whether through emails, untrusted cloud uploads, or removable media.";
  } else if (id.includes('data-classification')) {
    w_it = "La classificazione dei dati è il processo metodico di organizzazione delle informazioni in distinte categorie (es. Pubblico, Uso Interno, Confidenziale, Strettamente Riservato) in base al loro valore e alla loro criticità per l'azienda.";
    u_it = "Rappresenta il fondamento di qualsiasi strategia di protezione delle informazioni. Permette di allocare le risorse di sicurezza e i controlli crittografici in modo proporzionale al rischio, evitando costi inutili e ottimizzando le difese.";
    w_en = "Data Classification is the systematic process of organizing and tagging data into distinct categories according to its sensitivity, value, and regulatory requirements (e.g., Public, Internal, Confidential).";
    u_en = "It establishes the foundational rules of engagement for data security. By understanding exactly what data exists and its criticality, organizations can deploy encryption, access controls, and DLP policies accurately and cost-effectively.";
  } else if (id.includes('data-retention')) {
    w_it = "Le politiche di data retention regolamentano la conservazione sicura e la successiva distruzione delle informazioni. Definiscono per quanto tempo i dati devono essere archiviati per ottemperare ai vincoli legali e quando devono essere cancellati definitivamente.";
    u_it = "Oltre a garantire la conformità legale, minimizza in modo proattivo il rischio aziendale associato ai data breach: conservare solo i dati strettamente necessari riduce il volume delle informazioni esposte in caso di attacco.";
    w_en = "Data Retention policies dictate how long data must be securely stored and managed to comply with business and regulatory requirements, as well as outlining precise procedures for its eventual secure disposal.";
    u_en = "Beyond demonstrating compliance with data privacy frameworks, strict retention significantly shrinks the organization's risk surface. Storing less historical data directly reduces potential liability during a data breach scenario.";
  } else if (id.includes('container-sec')) {
    w_it = "Questo dominio affronta le sfide di sicurezza legate all'ecosistema dei container e all'orchestrazione (es. Docker, Kubernetes). Include lo scanning delle immagini, la segmentazione della rete interna al cluster e la protezione runtime dei nodi host.";
    u_it = "Essenziale per impedire che vulnerabilità e misconfigurazioni permettano a un attaccante di sfuggire al container (container escape), compromettendo l'infrastruttura sottostante o accedendo trasversalmente ad altri servizi (lateral movement).";
    w_en = "Container Security encompasses the specialized practices and tools required to protect containerized environments and orchestration platforms (e.g., Kubernetes). It covers image scanning, registry protection, and runtime host defense.";
    u_en = "It secures microservices architecture by ensuring defective images do not reach production and by strictly restricting container networking, thereby preventing container breakouts and malicious lateral movement within the cluster.";
  } else if (id.includes('cloud-sec') || id.includes('cspm') || id.includes('casb') || id.includes('cnapp')) {
    w_it = "La sicurezza per infrastrutture Cloud e SaaS comprende piattaforme architetturali (come CNAPP e CSPM) atte a monitorare, governare e correggere continuamente le configurazioni in ambienti multi-cloud (AWS, Azure, GCP).";
    u_it = "Gestisce la complessa superficie d'attacco del cloud pubblico mitigando la cattiva gestione dei permessi (IAM) e rilevando istantaneamente storage esposti al pubblico, violazioni della compliance e traffico anomalo.";
    w_en = "Cloud Security refers to the discipline and toolsets (such as CSPM, CASB, and CNAPP) dedicated to managing the security posture of cloud service providers (AWS, Azure, GCP) and continuous auditing of SaaS environments.";
    u_en = "It drastically reduces exposure in public clouds by identifying misconfigured public storage buckets, overly permissive IAM roles, and dormant risk factors, allowing cloud-native applications to scale safely and compliantly.";
  } else if (id.includes('fed-id') || id.includes('iam') || id.includes('idm') || id.includes('iga')) {
    w_it = "L'Identity and Access Management (IAM) disciplina la gestione delle identità digitali durante il loro intero ciclo di vita (creazione, modifica, dismissione). Applica il principio del 'Privilegio Minimo' affidando ad ogni utente solo i diritti necessari.";
    u_it = "Assicura che ex dipendenti non mantengano accessi attivi e impedisce l'accumulo di privilegi nel tempo. È il perno centrale per ostacolare sia le minacce interne (insider threat) sia lo sfruttamento di credenziali rubate.";
    w_en = "Identity and Access Management (IAM) along with Identity Governance regulates the end-to-end lifecycle of digital identities. It operationalizes the 'Principle of Least Privilege' by granting precise, necessary access uniformly across systems.";
    u_en = "It forms the modern security boundary. IAM prevents privilege creep, revokes access immediately upon employee offboarding, and fundamentally guards against lateral movement facilitated by compromised credentials or insider threats.";
  } else if (id.includes('mfa-sso')) {
    w_it = "L'Autenticazione a più fattori (MFA) richiede all'utente elementi aggiuntivi oltre la password (es. token, app, biometria). Il Single Sign-On (SSO) centralizza il login per decine di applicazioni aziendali in un'unica piattaforma fidata.";
    u_it = "La MFA rende praticamente inutile il furto di password o gli attacchi di brute-force, poiché l'attaccante in rete non possiede il secondo fattore fisico. L'SSO riduce la fatica degli utenti e centralizza la visibilità sugli accessi.";
    w_en = "Multi-Factor Authentication (MFA) dictates the requirement of two or more verification factors to gain access, while Single Sign-On (SSO) centralizes cross-application login workflows through a singular trusted identity provider.";
    u_en = "MFA effectively neutralizes the vast majority of identity-centric attacks (like phishing or credential stuffing) by requiring unforgeable secondary factors. SSO significantly boosts user productivity while unifying authentication logs.";
  } else if (id.includes('pam')) {
    w_it = "Il Privileged Access Management (PAM) è una branca della sicurezza specializzata nella gestione, segregazione e tracciamento rigoroso degli account con autorizzazioni di alto livello (utenti root o amministratori di dominio).";
    u_it = "Confina il rischio di compromissioni sistematiche. Gli attaccanti prendono di mira gli account privilegiati per assumere il controllo della rete; il PAM impedisce il loro abuso bloccando le credenziali in cassaforti digitali (vault) controllate da flussi di approvazione.";
    w_en = "Privileged Access Management (PAM) is a specialized subset of identity security focusing on isolating, vaulting, and continuously monitoring accounts holding elevated administrative permissions (e.g., Domain Admins, Root).";
    u_en = "Elevated accounts are the ultimate target for adversaries aiming to gain full network control. PAM solutions tightly govern these credentials, requiring strict checkout procedures, thereby neutralizing devastating lateral movement.";
  } else if (id.includes('rbac-abac') || id.includes('access-control')) {
    w_it = "I modelli di autorizzazione definiscono come vengono concessi i permessi. L'RBAC si basa sui ruoli aziendali prestabiliti, mentre l'ABAC utilizza logiche granulari legate al contesto (orario, localizzazione, dispositivo).";
    u_it = "Automatizza e standardizza l'assegnazione dei diritti d'accesso ai dati aziendali. Permette al reparto IT di scalare in modo efficiente, proteggendo le informazioni in ottemperanza ai protocolli di conformità.";
    w_en = "Authorization models define permission assignment frameworks. Role-Based Access Control (RBAC) maps access to static job functions, whereas Attribute-Based Access Control (ABAC) dynamically evaluates contextual variables like time, IP, or device posture.";
    u_en = "These models standardize and automate data access across the enterprise, allowing secure scalability while simultaneously ensuring strict adherence to compliance mandates regarding data segregation and need-to-know principles.";
  } else if (id.includes('zero-trust')) {
    w_it = "Il framework Zero Trust scardina il concetto di perimetro fidato. Sancisce che né gli utenti interni né i dispositivi conosciuti debbano ricevere fiducia predefinita. Ogni singola richiesta viene continuamente autenticata e autorizzata.";
    u_it = "Costituisce la difesa architetturale più avanzata contro ransomware e minacce moderne. Segmentando a fondo gli accessi, garantisce che una singola macchina infetta all'interno dell'azienda non sia in grado di accedere arbitrariamente alle infrastrutture circostanti.";
    w_en = "Zero Trust is an overarching architectural framework predicated on the axiom 'never trust, always verify'. It abolishes the concept of an inherent internal trusted network, mandating continuous granular authentication for every interaction.";
    u_en = "It ranks as the premier defense against lateral progression. By continuously scrutinizing users, devices, and workloads, Zero Trust ensures that a localized breach on a single endpoint is fundamentally incapable of propagating further.";
  } else if (id.includes('firewalls') || id.includes('ids-ips') || id.includes('waf') || id.includes('network')) {
    w_it = "Le difese di rete approfondite (Network Security) ispezionano il traffico in entrata e in uscita implementando firewall di nuova generazione, sistemi di prevenzione delle intrusioni (IPS) e Web Application Firewall (WAF).";
    u_it = "Fungono da filtro per respingere attivamente il traffico anomalo. Individuano comportamenti malevoli, firme d'attacco note e tentativi di sfruttamento prima che tali pacchetti raggiungano l'applicazione o l'infrastruttura sottostante.";
    w_en = "Core Network Security infrastructure inspects traversing traffic via Next-Generation Firewalls, Intrusion Prevention Systems (IPS), and highly specialized Web Application Firewalls (WAF) targeting layers 3 through 7.";
    u_en = "These form the critical frontline barricade against network-borne threats. They actively detect and drop malicious payloads, vulnerability exploits, and denial-of-service attempts before they can interact with the protected destination.";
  } else if (id.includes('ddos')) {
    w_it = "Le soluzioni di prevenzione contro gli attacchi Distributed Denial of Service (DDoS) sfruttano reti distribuite di grande capacità (CDN o hardware dedicato) per smistare e mitigare ondate artificiali di traffico indesiderato dirette verso i server aziendali.";
    u_it = "Garantiscono la disponibilità (Availability) dei servizi essenziali, assicurando l'accesso ininterrotto alle applicazioni business-critical anche durante tentativi aggressivi di saturazione causati da botnet malevoli.";
    w_en = "Distributed Denial of Service (DDoS) mitigation leverages enormous globally distributed traffic-scrubbing networks (CDNs or specialized edge hardware) engineered to absorb and filter overwhelming waves of illegitimate volumetric traffic.";
    u_en = "It safeguards enterprise availability. By diverting and washing massive cyber assaults, it ensures that business-critical web properties, APIs, and infrastructure remain fully accessible to legitimate users under extreme duress.";
  } else if (id.includes('patch-mgmt')) {
    w_it = "Il Patch Management è il rigoroso processo operativo che regola l'identificazione, il testing e la distribuzione sistematica degli aggiornamenti software, chiudendo tempestivamente le falle emerse nel codice.";
    u_it = "Rappresenta un pilastro portante per mitigare i rischi tecnici. Oltre i due terzi degli attacchi informatici riusciti sfruttano vulnerabilità già note (CVE) per le quali l'aggiornamento risolutivo era già disponibile da tempo.";
    w_en = "Patch Management provides strict procedural rigor surrounding the discovery, pre-deployment testing, and systematic rollout of vendor software updates aimed at resolving known codebase vulnerabilities.";
    u_en = "It stands as a foundational pillar for technical risk mitigation. The vast majority of successful network intrusions historically leverage established vulnerabilities (CVEs) for which a remediating patch natively existed prior to the breach.";
  } else if (id.includes('baseline-config') || id.includes('secure-build')) {
    w_it = "La creazione di Golden Image (o Hardening) è la pratica di definire configurazioni 'sicure di default' riducendo al minimo i servizi attivi, le autorizzazioni predefinite e le porte aperte su nuovi sistemi operativi e apparati.";
    u_it = "Eliminando configurazioni insicure di fabbrica, si implementa il principio di sicurezza by design. Evita la compromissione precoce dei server isolando strutturalmente i principali vettori logici d'attacco.";
    w_en = "Establishing Secure Build baselines (Hardening or Golden Images) revolves around actively stripping systems of unnecessary pre-installed services, disabling insecure default protocols, and closing universally known vector ports.";
    u_en = "This embeds 'security by design' at deployment. Removing default administrative overlaps and excessive exposure intrinsically inoculates new assets against automated scanning malware spanning widespread foundational corporate deployments.";
  } else if (id.includes('cryptography') || id.includes('key-secret') || id.includes('vaulting') || id.includes('hsm') || id.includes('cert-mgmt')) {
    w_it = "La scienza e i meccanismi ingegneristici per l'uso della crittografia, inclusa la gestione del ciclo di vita dei certificati TLS, i vault digitali per i secret e l'utilizzo di moduli hardware anti-manomissione (HSM).";
    u_it = "Questo dominio tutela il nucleo nevralgico della confidenzialità. Assicura in modo matematico l'illeggibilità e la sicurezza dei dati sensibili anche se i dischi fisici o i database venissero trafugati in chiaro dall'attaccante.";
    w_en = "The applied science mechanisms of cryptography handling symmetric and asymmetric encryption architectures, full SSL/TLS lifecycle rotations, secret vaults, and uncompromising physical Hardware Security Modules (HSM).";
    u_en = "Protects the absolute core of data confidentiality. By physically vaulting root keys and encrypting the payload databases, it mathematically ensures data remains undecipherable even amidst a catastrophic extraction breach yielding the entire raw volume.";
  } else if (id.includes('ot-ics') || id.includes('scada')) {
    w_it = "L'insieme delle discipline progettate per governare la sicurezza delle apparecchiature tecnologiche industriali (Operational Technology e sistemi SCADA) in siti di produzione, fabbriche e infrastrutture critiche del mondo reale.";
    u_it = "Previene rischi che trascendono la perdita dei dati informatici. Nelle reti industriali, impedire che un malware interagisca con PLC o sensoristica evita danni ambientali, guasti fisici mortali e l'arresto rovinoso di servizi pubblici.";
    w_en = "The highly specialized disciplines architected to govern and secure the industrial technological equipment layer (Operational Technology, DCS, SCADA) embedded across manufacturing floors, robotic assembly lines, and critical national infrastructure.";
    u_en = "Addresses risks transcending typical digital data loss. In industrial networking, thwarting malware from manipulating valve pressures or grid PLCs actively averts physical devastation, environmental disasters, and potentially fatal human safety disruptions.";
  } else if (id.includes('hardware-sec') || id.includes('tpm')) {
    w_it = "Integrazione fisica di processori crittografici dedicati (Trusted Platform Module) sulle schede di sistema per attestare l'autenticità dell'avvio e proteggere le chiavi di sicurezza primarie al di fuori dello spazio di esecuzione del sistema operativo.";
    u_it = "Serve a invalidare minacce estremamente sofisticate (es. bootkit, rootkit o firmware maligni). Offre prove crittografiche che l'integrità profonda del dispositivo non sia stata manomessa da minacce capaci di aggirare l'antivirus.";
    w_en = "Hardware Security fundamentally integrates dedicated cryptographic coprocessors (like the Trusted Platform Module) physically onto mainboards, validating boot authenticity and sequestering primary keys entirely outside operational OS environments.";
    u_en = "Renders highly persistent sophisticated threats (e.g., hardware backdoors, bootkits, kernel rootkits) ineffective. It delivers cryptographic attestation proving the silicon-level integrity of the device remains untampered before loading any software.";
  } else if (id.includes('framework') || id.includes('cis') || id.includes('nist') || id.includes('iso') || id.includes('owasp') || id.includes('mitre') || id.includes('slsa')) {
    w_it = "Raccolta e implementazione di metodologie, metriche e framework universalmente validati a livello civile e governativo (es. NIST CSF, ISO 27001, MITRE ATT&CK), che offrono linee guida rigorose per modellare la sicurezza.";
    u_it = "Permette all'organizzazione di confrontare concretamente il proprio livello di maturità rispetto a standard industriali rigorosi, colmando sistematicamente carenze tattiche e fornendo prove di solidità in caso di audit di terze parti.";
    w_en = "The adoption of universally validated institutional methodologies, metrics, and strategic frameworks globally recognized in both civil and federal spaces (e.g., NIST CSF, ISO 27001, MITRE ATT&CK core matrices).";
    u_en = "Enables coherent benchmarking of organizational capability maturity against rigorous industry-leading standards. Provides structural governance roadmaps explicitly addressing tactical shortcomings while delivering certifiable proof reflecting security solidity during audits.";
  } else if (id.includes('threat-hunting')) {
    w_it = "Ricerca avanzata delle minacce guidata dall'essere umano. Processo metodologico interattivo in cui analisti specializzati formulano ipotesi sui vettori d'attacco ed esplorano le telemetrie aziendali alla ricerca di intrusi nascosti.";
    u_it = "Chiude il divario causato dai limiti dei controlli automatici. Mentre le difese passive bloccano le minacce conosciute, il Threat Hunting snida proattivamente gli avversari più furtivi (APT), riducendo drasticamente i tempi medi di rilevamento della breccia.";
    w_en = "Advanced, proactive, human-driven threat discovery. A rigorous methodological process where specialized analysts hypothesize advanced adversary vectors and meticulously hunt through organizational telemetry tracing stealthy intruders.";
    u_en = "Bridges the inherent gap presented by automated controls. While passive defenses generally drop known threat behaviors, active Threat Hunting proactively expunges the most elusive adversarial presences (APTs), drastically collapsing the organizational breach dwell time.";
  } else if (id.includes('vuln-mgmt') || id.includes('vuln-scan') || id.includes('assets-inventory')) {
    w_it = "Processo operativo ininterrotto il cui scopo è consolidare l'inventario delle risorse digitali, eseguire controlli frequenti (scanning) per rilevare punti di debolezza, valutarne la gravità e orchestrare il piano di mitigazione o applicazione delle patch.";
    u_it = "Diminuisce concretamente la finestra temporale a disposizione degli attaccanti. Individuando sistematicamente applicazioni obsolete o esposte su server non documentati, si previene il loro sfruttamento prima che inneschino incidenti critici.";
    w_en = "An uninterrupted operational lifecycle intended resolving continuous validation across consolidated global asset inventories, enforcing frequent automated vulnerability scanning aimed identifying inherent software weaknesses, subsequently determining severity prior orchestrating timely remediation patches.";
    u_en = "Decisively shrinks the temporal window of opportunity heavily relied upon by threat actors. Systematically unearthing undocumented servers running critically obsolete services ultimately prevents inevitable widespread exploitation halting catastrophic intrusions.";
  } else if (id.includes('soar') || id.includes('siem') || id.includes('soc') || id.includes('detection')) {
    w_it = "Il nucleo della componente di rilevamento aziendale: architetture di Security Information and Event Management (SIEM) orchestrate dal Security Operations Center (SOC), potenziato dall'analisi assistita dall'automazione (SOAR).";
    u_it = "Concentra in un'unica sala operativa visibilità totale ed efficienza. Permette di elaborare e correlare miliardi di log giornalieri filtrandone il rumore di fondo, rispondendo così celermente a incidenti autentici ed evitando l'affaticamento degli analisti (alert fatigue).";
    w_en = "The central nervous system of corporate threat intelligence fusion: Security Information and Event Management (SIEM) data-lakes utilized by the Security Operations Center (SOC) heavily augmented via automated security orchestration (SOAR).";
    u_en = "Focuses total visibility aggregating relentless intelligence. Enables the correlation processing of daily billions of logs to confidently identify acute real incidents rapidly without exhausting analytical personnel amidst massive background noise and alert fatigue operations.";
  } else if (id.includes('incident') || id.includes('breach') || id.includes('containment') || id.includes('eradication')) {
    w_it = "Le fasi d'emergenza, preparazione forense e risposta letale durante le crisi Cybernetiche. Includono piani di identificazione della falla, procedure mirate per il suo contenimento e sforzi di bonifica volti all'eradicazione definitiva della minaccia.";
    u_it = "Rappresenta il ponte operativo per salvare il business durante attacchi distruttivi. Agire su schemi collaudati permette di circoscrivere le violazioni informatiche senza cedere al panico, contenendo i danni normativi ed economici in modo strutturato e legale.";
    w_en = "Crisis-level emergency, forensic preparedness, and rigorous reaction phasing utilized deeply amidst cyber warfare. Distinctly encompass breach identification planning, specific surgical containment protocol execution, and subsequent remediation ensuring absolute eradication.";
    u_en = "Serves as the vital operational bridge recovering corporate survivability during radically destructive invasions. Following heavily drilled playbooks rapidly encircles systemic violations devoid of mass panic, purposefully containing escalating financial and regulatory fallout parameters gracefully.";
  } else if (id.includes('team') || id.includes('bas')) {
    w_it = "L'emulazione dell'avversario tramite metodologie manuali (Red Team vs Blue Team) o simulazioni continue automatizzate (BA&S). Valida senza filtri l'effettiva capacità di un ambiente IT di resistere e rilevare incursioni simulate ultra-realistiche.";
    u_it = "Rivela lucidamente punti di vulnerabilità non visibili statisticamente, mettendo oggettivamente alla prova se il SOC, i SIEM aziendali e i protocolli di risposta sono pronti a reagire come prefigurato prima di affidarsi a loro in un vero incidente incombente.";
    w_en = "Aggressive adversary emulation executed manually involving heavily organized offense arrays (Red Teaming against internal defensive Blue Teams) or employing continuously scaled automated Breach & Attack Simulations assessing authentic architectural combat resilience levels.";
    u_en = "Sheds objective unflinching light onto unmonitored blind spots definitively stress-testing whether current corporate SOC infrastructure, SIEM configurations, and response methodologies legitimately function effectively anticipating the reality of an imposing devastating actual strike ahead.";
  } else if (id.includes('career') || id.includes('training') || id.includes('coaches') || id.includes('education') || id.includes('awareness')) {
    w_it = "Investimenti istituzionali dedicati alla formazione del 'Firewall Umano', partendo da campagne di sensibilizzazione contro il pishing fino ai percorsi di studio guidati per il raggiungimento di certificazioni specialistiche di sicurezza per dipendenti e reparti tecnici.";
    u_it = "Migliora la postura sicura del personale aziendale contrastando l'ingegneria sociale. Previene l'esecuzione involontaria di software malevolo, poiché l'anello debole umano adeguatamente formato diviene la prima fondamentale componente difensiva di prevenzione reattiva.";
    w_en = "Dedicated widespread institutional human-investment spanning from corporate basic mandatory anti-phishing awareness reinforcement models to advanced guided education channels prioritizing prestigious foundational security certifications boosting internal proficiency paths exclusively.";
    u_en = "Significantly elevates personnel security posture heavily neutralizing manipulative Social Engineering. Prevents unintentional execution triggering massive malware payloads, fundamentally transforming adequately trained end-users organically representing paramount resilient human firewalls serving frontline preventative duties inherently.";
  } else if (id.includes('appsec') || id.includes('cicd') || id.includes('shift-left') || id.includes('ssdlc') || id.includes('sec-ux')) {
    w_it = "Messa in sicurezza dello sviluppo software tramite l'inserimento integrato, precoce ed automatico di rigidi controlli di sicurezza e vulnerabilità direttamente nel processo di Continuous Integration/Deployment dei programmatori ('Shift-Left').";
    u_it = "Previene l'immissione sul mercato di bug di sicurezza o di difetti infrastrutturali sistemici nelle applicazioni. Far fronte in pre-produzione alle correzioni garantisce risparmi drastici rispetto al debito di rimediazione causato da attacchi ad applicativi ormai esposti on-line.";
    w_en = "Securing software development lifecycle execution ensuring strictly integrated, early proactive automated continuous scanning controlling vulnerabilities embedded effortlessly within overarching continuous deployment pipeline iterations driven entirely heavily leftwards ('Shift-Left').";
    u_en = "Prevents systemic infrastructure deficits fundamentally permeating successfully published application releases. Mandating corrective actions tightly within pre-production guarantees massive significant overall savings contrasting steeply heavily deferred severe remediation debts caused managing massive active live public software intrusions securely.";
  } else if (id.includes('sast') || id.includes('iast') || id.includes('sca') || id.includes('sbom') || id.includes('scan') || id.includes('source-code')) {
    w_it = "Analisi statiche puntuali e inventari granulari del codice sorgente nativo e moduli di parti terze (SAST/SCA), accompagnate alle manifestazioni burocratiche estese note come SBOM, fondamentali per identificare l'anatomia interna dei pacchetti integrati senza esecuzione.";
    u_it = "Rivela chiavi di login lasciate scritte in chiaro nel codice, previene violazioni crittografiche intrinseche e garantisce istantanea visibilità se, ad esempio, una delle complesse librerie esterne importate nell'applicativo presentasse una pericolosissima falla non documentata.";
    w_en = "Exacting granular static point-in-time assessments extensively covering unexecuted native source code plus external imported third-party libraries (SAST/SCA), thoroughly accompanied tracking massive structural bureaucratic manifestations denoted explicitly 'Software Bill of Materials' (SBOM).";
    u_en = "Reveals heavily damaging inherently plain-text hard-coded administrative credentials embedded inadvertently. Prevents internal intrinsic structural cryptographic violations while guaranteeing instant enterprise-level visibility whenever any complex widely imported external repository libraries inherently manifest undocumented profoundly dangerous mass severe vulnerabilities quickly.";
  } else if (id.includes('risk') || id.includes('erm') || id.includes('cyber-insurance') || id.includes('assessment')) {
    w_it = "Enterprise Risk Management focalizzato sulle procedure che convertono l'analisi tecnica informatica in un quantificatore del rischio di business, impiegando polizze assicurative e valutazioni dell'esposizione economica in caso d'impatto distruttivo alle strutture.";
    u_it = "Fondamentale per comunicare l'effettiva incidenza delle lacune IT ai livelli massimi (Board of Directors). Sviluppa un lessico comprensibile capace di tradurre i difetti su server complessi nell'effettiva prospettiva di perdita economica giustificando gli investimenti e limitando la severità degli incidenti corporativi maggiori.";
    w_en = "Enterprise Risk Management focused exclusively addressing overarching procedures structurally transferring technical IT analytical diagnostics smoothly converting them into objective business risk quantification mechanisms natively employing insurance policies navigating extreme catastrophic fiscal impacts determining overarching structural exposure limits effectively.";
    u_en = "Indispensable communicating effectively addressing exact tangible significance illustrating complex IT loopholes explicitly reaching extreme high-level overarching executive suites (Board of Directors). Masterfully translates profound complex server anomalies distinctly explicitly representing impending fiscal bankruptcy perspectives heavily justifying defensive financial scaling accurately strictly limiting major severe corporate incident severities continuously.";
  } else if (id.includes('threat-intel') || id.includes('ti-') || id.includes('osint') || id.includes('darkweb')) {
    w_it = "Pratica estensiva per intercettare l'avversario tramite metodologie d'Intelligence strutturale di fonte aperta (OSINT) e investigazione segreta nel Dark Web, collezionando vettori, tecniche TTP in uso, botnet note e indicatori per mitigare le probabilità emergenti.";
    u_it = "Provede una visibilità fondamentale sulle campagne ransomware nascenti che stanno operando attivamente in settori affini, fornendo la garanzia di proteggere le organizzazioni chiudendo gli exploit minacciosi giorni prima che la loro infrastruttura diventi un bersaglio imminente confermato in reti sotterranee.";
    w_en = "Extensive practical mechanisms intercepting adversary actions incorporating structural deeply vetted Intelligence methodologies spanning open-source intelligence matrices (OSINT) alongside dark web covert forensics gathering highly relevant emerging distinct vectors encompassing heavily exploited Tactics, Techniques, and Procedures (TTPs) mapping massive external trends.";
    u_en = "Delivers fundamental crucial foresight monitoring massively emerging ransomware syndicates actively operating heavily tracking similar-sector enterprises. Ensures organizational protective guarantees significantly addressing looming exploits distinct days effectively anticipating infrastructure heavily rendering it an impending confirmed high-value target actively cataloged across shadowy underground threat channels definitively.";
  } else if (id.includes('governance') || id.includes('laws') || id.includes('gdpr') || id.includes('privacy') || id.includes('compliance')) {
    w_it = "Il ramo dell'architettura aziendale relativo al monitoraggio e all'applicazione rigorosa dei dettami burocratici imposti sia dalle compliance contrattuali private che dalle stringenti regolamentazioni di stato globali volte primariamente a tutelare la privacy ed impedire abusi finanziari diffusi (GDPR, PCI, HIPAA).";
    u_it = "Armonizza e disciplina le modalità d'impiego operativo della Cybersecurity a livello dirigenziale. Costituisce la leva necessaria per la protezione della direzione in cause legali, salvaguardando il riconoscimento positivo societario prevenendo disastrose conseguenze finanziarie associate a sanzioni massicce ed irregolarità procedurali globalmente tracciate.";
    w_en = "The architectural domain encompassing precise continuous widespread monitoring enforcing incredibly strict bureaucratic dictates strongly imposed simultaneously through deeply contracted private compliance obligations harmonized amidst globally towering sweeping federal state regulations fundamentally seeking massive operational consumer-privacy safeguarding explicitly averting vast widespread global corporate financial malpractices (PCI, HIPAA, GDPR directives).";
    u_en = "Harmonizes profoundly institutionalizing meticulous overarching methodologies governing administrative Cybersecurity disciplines strictly impacting heavily guiding C-Suite directives smoothly. Represents the ultimate foundational defensive organizational legal shield ensuring massively guarding prestigious corporate organizational global branding extensively avoiding universally disastrous fiscal consequences tethered solely tracking incredibly massive sweeping regulatory penalizations stemming distinctly from internationally tracked profoundly sweeping procedural uniform irregularities inherently.";
  } else {
    // Generico 
    w_it = `Elemento metodologico, normativo o operativo legato a ${label}. Costituisce uno degli specifici domini analizzati in architettura di cyber defence, posizionato dagli esperti del settore per gestire determinati rischi tecnologici.`;
    u_it = `Lavora a garanzia del corretto inquadramento della sicurezza per ${label}. Fornisce valore al perimetro aziendale rafforzandone sistematicamente i confini logici o concettuali e incrementando la resilienza aziendale complessiva.`;
    w_en = `Methodological, regulatory, or operational element firmly related to ${label}. It constitutes a specific domain analyzed heavily within cyber defense architecture positioned explicitly by industry experts managing precise systemic technological risks.`;
    u_en = `Works continuously guaranteeing the proper framing securely addressing ${label}. Provides intrinsic value reinforcing systematically logical operational corporate boundaries incrementally elevating the comprehensive overarching baseline business organizational operational resilience profoundly.`;
  }

  return {whatItIsIt: w_it, whatItIsEn: w_en, utilityIt: u_it, utilityEn: u_en};
}

const descriptions = {};

for(let {id, label} of nodes) {
  let {whatItIsIt, whatItIsEn, utilityIt, utilityEn} = getDetailedText(id, label);

  descriptions[id] = {
    whatItIs: { it: whatItIsIt, en: whatItIsEn },
    utility: { it: utilityIt, en: utilityEn }
  };
}

const out = [];
out.push('export interface NodeDesc {');
out.push('  whatItIs: { it: string; en: string };');
out.push('  utility: { it: string; en: string };');
out.push('}');
out.push('');
out.push('// GENERATED VIA generate_encyclopedia2.cjs per output NATURALE in Italiano e Inglese, NON una traduzione letterale.');
out.push('export const nodeDescriptions: Record<string, NodeDesc> = ' + JSON.stringify(descriptions, null, 2) + ';');

fs.writeFileSync('./src/data/nodeDescriptions.ts', out.join('\n'));
console.log("nodeDescriptions.ts GENERATED CON TESTI NATURALI");
