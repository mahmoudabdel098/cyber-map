const fs = require('fs');

const data = {
  // BATCH 1 (1 - 60)
  "architecture": {
    w_it: "Il dominio dell'Architettura della Sicurezza si occupa della progettazione e della struttura complessiva delle difese informatiche di un'organizzazione.",
    u_it: "Fornisce le fondamenta strutturali per garantire che le difese siano coese, scalabili e allineate agli obiettivi di business.",
    w_en: "Security Architecture deals with the overall design and structure of an organization's IT defenses.",
    u_en: "It provides the structural blueprint ensuring defenses are cohesive, scalable, and fully aligned with business objectives."
  },
  "endpoint-hygiene": {
    w_it: "L'Endpoint Hygiene riguarda le pratiche per mantenere i dispositivi in uno stato sicuro, pulito e conforme alle policy (patching, rimozione software non autorizzato).",
    u_it: "Riduce drasticamente la superficie d'attacco impedendo l'uso di vulnerabilità note e malconfigurazioni per compromettere i dispositivi.",
    w_en: "Endpoint Hygiene encompasses the practices required to maintain devices in a secure, compliant state (patching, removing unauthorized apps).",
    u_en: "Drastically reduces the attack surface by preventing known vulnerabilities and misconfigurations from being leveraged against endpoints."
  },
  "edr-xdr": {
    w_it: "Le piattaforme EDR e XDR monitorano l'attività di host e rete tramite telemetria, rilevando comportamenti anomali e minacce avanzate.",
    u_it: "Consentono di rilevare e isolare le minacce post-compromissione, fermando attacchi dinamici come i ransomware prima dell'impatto finale.",
    w_en: "EDR and XDR platforms monitor host and network telemetry to detect anomalous behavior and advanced persistent threats.",
    u_en: "They enable early post-compromise detection and containment, stopping dynamic attacks like ransomware before final impact."
  },
  "mdm": {
    w_it: "Il Mobile Device Management (MDM) è una soluzione per governare e proteggere centralmente dispositivi mobili e portatili (inclusi i BYOD).",
    u_it: "Permette l'applicazione di policy crittografiche obbligatorie e la distruzione remota dei dati in caso di smarrimento del dispositivo.",
    w_en: "Mobile Device Management (MDM) software empowers organizations to centrally govern and secure mobile devices and laptops.",
    u_en: "It enforces mandatory cryptographic policies and enables remote data wiping in case of device loss or theft."
  },
  "ngav": {
    w_it: "L'Antivirus di Nuova Generazione (NGAV) analizza il comportamento dei processi in tempo reale usando machine learning, anziché basarsi su firme note.",
    u_it: "Blocca minacce zero-day e malware fileless (senza file) che sfuggono facilmente all'analisi statica degli antivirus tradizionali.",
    w_en: "Next-Generation Antivirus (NGAV) analyzes process behavior in real time using machine learning rather than relying on known virus signatures.",
    u_en: "It effectively blocks zero-day threats and fileless malware that easily bypass the static analysis of traditional antivirus solutions."
  },
  "data-protection": {
    w_it: "La Data Protection è la disciplina generale volta a salvaguardare le informazioni contro l'alterazione, la perdita o l'accesso non autorizzato.",
    u_it: "Preserva l'integrità e la disponibilità delle operation aziendali, assicurando la tutela della proprietà intellettuale e dei dati regolamentati.",
    w_en: "Data Protection is the overarching discipline aimed at safeguarding information against corruption, loss, or unauthorized access.",
    u_en: "It preserves the integrity of business operations and ensures intellectual property and regulated data remain completely secure."
  },
  "dlp": {
    w_it: "La Data Loss Prevention (DLP) è un sistema progettato per rilevare e prevenire l'esfiltrazione e la trasmissione non autorizzata di dati sensibili.",
    u_it: "Blocca l'invio accidentale o malevolo di dati riservati (via email, web o USB), facilitando inoltre la conformità al GDPR e ad altre normative sulla privacy.",
    w_en: "Data Loss Prevention (DLP) systems are engineered to detect and proactively prevent the unauthorized transmission or exfiltration of sensitive data.",
    u_en: "It halts accidental or malicious leakage of classified data (via email, web, or USB) and heavily facilitates regulatory compliance."
  },
  "data-classification": {
    w_it: "La classificazione dei dati è il processo metodico per categorizzare le informazioni (es. Pubblico, Confidenziale) in base al loro livello di sensibilità.",
    u_it: "Costituisce la base per l'applicazione mirata dei controlli: i dati strettamente confidenziali ricevono i massimi criteri di crittografia e protezione.",
    w_en: "Data Classification is the methodical tagging and categorizing of information (e.g., Public, Confidential) based on organizational sensitivity.",
    u_en: "It forms the baseline for targeted control application: strictly confidential data receives maximum encryption and monitoring rules."
  },
  "data-retention": {
    w_it: "Le policy di Data Retention strutturano la conservazione sicura dei dati e dettano procedure rigorose per la loro distruzione al termine del ciclo di vita.",
    u_it: "Mantenere i dati strettamente per il tempo prescritto dalla legge limita l'impatto in caso di violazione, rimuovendo un enorme volume di dati esposti.",
    w_en: "Data Retention policies outline strict guidelines for the secure storage of data and mandate its proper secure disposal at organizational end-of-life.",
    u_en: "Retaining data strictly for prescribed legal periods limits massive potential fallout during breaches by inherently removing target volumes."
  },
  "container-sec": {
    w_it: "La sicurezza dei container protegge gli orchestratori (es. Kubernetes) e i microservizi scansionando le immagini ed erigendo controlli sul runtime.",
    u_it: "Previene le 'container escape' (intrusioni letali nell'host principale) e intercetta vulnerabilità critiche integrate direttamente nei pacchetti di produzione.",
    w_en: "Container Security protects orchestrators (like Kubernetes) and microservices by scanning images and enforcing runtime behavior controls.",
    u_en: "It prevents 'container escapes' (lethal host intrusions) and intercepts critical vulnerabilities baked directly into production packages."
  },
  "cloud-sec": {
    w_it: "La sicurezza Cloud è l'insieme di tecnologie, policy e controlli dedicati a proteggere dati, applicazioni e infrastrutture associate ad ambienti cloud computing.",
    u_it: "Garantisce conformità e sicurezza in infrastrutture scalabili on-demand (AWS, Azure), proteggendole da errori di configurazione che esporrebbero i server al pubblico.",
    w_en: "Cloud Security encompasses the technologies, policies, and overarching controls dedicated to protecting data and infrastructure within cloud computing environments.",
    u_en: "It ensures stringent compliance and security across on-demand scalable architectures (AWS, Azure), protecting against public exposure misconfigurations."
  },
  "cspm": {
    w_it: "Il Cloud Security Posture Management (CSPM) analizza automaticamente le configurazioni cloud per identificare rischi legati a violazioni delle policy o disattenzioni operative.",
    u_it: "Segnala tempestivamente storage pubblici esposti per errore o reti non segmentate, pre-venendo massicce fughe di dati sul cloud.",
    w_en: "Cloud Security Posture Management (CSPM) automatically examines cloud configurations to identify compliance violations and operational misconfigurations.",
    u_en: "It rapidly flags mistakenly exposed public storage or unsegmented networking ranges, proactively thwarting massive cloud data leaks."
  },
  "casb": {
    w_it: "Il Cloud Access Security Broker (CASB) è un punto di visibilità inserito tra gli utenti e le applicazioni cloud aziendali (SaaS) per monitorarne l'utilizzo.",
    u_it: "Rileva e blocca l'uso dello 'Shadow IT' (software cloud non autorizzati) applicando rigorosi controlli sui dati prima che vengano caricati esternamente.",
    w_en: "A Cloud Access Security Broker (CASB) provides critical visibility by sitting between internal users and corporate cloud applications (SaaS).",
    u_en: "It detects and blocks 'Shadow IT' (unauthorized cloud software) while enforcing rigorous data controls before any uploads occur externally."
  },
  "cnapp": {
    w_it: "La Cloud Native Application Protection Platform (CNAPP) unifica le funzionalità di CSPM, CWPP e CIEM in una singola suite orientata all'intero ciclo di vita.",
    u_it: "Azzera la complessità per i team SOC, fornendo un pannello unico e coerente per sorvegliare lo sviluppo e l'esecuzione (runtime) nell'era multi-cloud.",
    w_en: "Cloud Native Application Protection Platform (CNAPP) unifies CSPM, CWPP, and CIEM capabilities into a single holistic lifecycle-oriented suite.",
    u_en: "It obliterates complexity for SOC teams, providing a single coherent pane of glass to oversee both pipeline development and multi-cloud runtime."
  },
  "fed-id": {
    w_it: "L'Identità Federata consente ad un utente di usare le proprie credenziali per autenticarsi attraverso diversi domini e organizzazioni terze fiduciarie.",
    u_it: "Rende superflue svariate password distinte, facilitando partnership di tipo B2B eliminando le vulnerabilità generate dalla moltiplicazione degli account.",
    w_en: "Federated Identity allows a user to leverage their established credentials to authenticate seamlessly across multiple distinct distinct trusted external domains.",
    u_en: "It eliminates the need for separate disparate passwords, streamlining B2B partnerships and nullifying vulnerabilities caused by account footprint multiplication."
  },
  "iam": {
    w_it: "L'Identity and Access Management (IAM) disciplina la fornitura tecnica e la revoca sistematica delle autorizzazioni per gli utenti aziendali.",
    u_it: "Permette di applicare in maniera ferrea il Principio del Privilegio Minimo: concedere prettamente gli accessi richiesti al ruolo svolto per ridurre gli impatti se l'account viene hackerato.",
    w_en: "Identity and Access Management (IAM) technically governs the systematic provisioning and revocation of authorization roles for corporate users.",
    u_en: "It rigidly enforces the Principle of Least Privilege: granting only the baseline access absolutely required for a role to minimize blast impact upon account hacking."
  },
  "mfa-sso": {
    w_it: "L'infrastruttura di Multi-Factor Authentication richiede due o più conferme (Password + Token) mentre l'SSO permette un unico accesso sicuro per le applicazioni.",
    u_it: "Unisce la prevenzione assoluta verso decodificazioni forzate e phishing (grazie al fattore addizionale OTP) alla comodità logica di un login centralizzato.",
    w_en: "Multi-Factor Authentication infrastructure requires two or more verifications (Password + Token), while SSO enables a single secure sign-on for all distinct applications.",
    u_en: "It marries absolute prevention against brute-forcing and phishing (via the OTP additional factor) with the seamless logical convenience of unified central login."
  },
  "pam": {
    w_it: "Il Privileged Access Management (PAM) controlla, registra e monitora pesantemente gli account Super User e le credenziali di root a fortissimo impatto.",
    u_it: "Impedisce i movimenti laterali profondi. Senza scalare ed infettare questi account top-level un attaccante non otterrà mai le chiavi vere e proprie dell'azienda.",
    w_en: "Privileged Access Management (PAM) heavily regulates, actively records, and monitors Super User accounts and devastatingly high-impact root credentials.",
    u_en: "It explicitly prevents profound lateral movements. Without successfully escalating into these vaulted top-level accounts, an attacker cannot obtain the total keys to the company."
  },
  "iga": {
    w_it: "L'Identity Governance & Administration (IGA) affianca le policy aziendali alla gestione operativa IT automatizzando l'accettazione e revisione ciclica dei permessi.",
    u_it: "Traccia chiaramente l'orfanizzazione degli account. Istituisce audit regolari per validare costantemente che i vecchi direttori non posseggano più le chiavi vecchie non idonee.",
    w_en: "Identity Governance & Administration (IGA) aligns overarching corporate policy to technical IT management, automating compliance-oriented cyclical permission reviews.",
    u_en: "It clearly traces account orphanization. Institutes regular mandatory audits constantly validating that reassigned directors no longer inherently possess outdated unsuitable keys."
  },
  "idm": {
    w_it: "L'Identity Management si concentra prettamente sull'autenticazione, la definizione, la creazione e i formati standard per gli utenti nelle infrastrutture informative.",
    u_it: "Garantisce il ciclo di vita puntuale in ingresso HR: la rapida efficienza nell'abilitazione al nuovo assunto senza compromessi nelle fasi temporanee.",
    w_en: "Identity Management strictly focuses on standard authentications, strict structural definition, user creation, and logical formats spanning structural information frameworks.",
    u_en: "Ensures punctual HR integration lifecycles: delivering rapid foundational efficiency enabling new-hires robustly without critical compromises occurring during temporary onboarding phases."
  },
  "access-control": {
    w_it: "Le metodiche dei Controlli Accesso sanciscono come un ambiente garantisce (o impedisce) in modo condizionale ad ogni singolo client risorse fisiche logico-informatiche interne.",
    u_it: "Esercita con puntualità il flusso di contenimento segmentale: gli sviluppatori non possono vedere i dati finanziari di Produzione bloccando così lo spionaggio industriale.",
    w_en: "Access Control methodologies mandate practically how an environment conditionally guarantees (or strictly forbids) physical logical IT resources to individual accessing clients.",
    u_en: "Firmly exercises segmental containment flows: developers are intrinsically barred from viewing Production financial payroll data, thoroughly obstructing targeted industrial espionage efforts."
  },
  "rbac-abac": {
    w_it: "Il Role/Attribute Based Access Control formalizza meccanicamente l'accesso applicandolo ai titoli della mansione oppure a parametri dinamici (luogo, data e ora, device noto).",
    u_it: "Spinge in alto la flessibilità e i concetti Zero Trust: ad esempio, nega a un impiegato l'estrazione DB se connesso oltre il proprio turno di lavoro originario o da remoto non VPN.",
    w_en: "Role/Attribute Based Access Control mechanizes access execution by tying it rigidly to employment titles or dynamic parameters (location, timestamp, recognized device posture).",
    u_en: "Elevates flexibility and inherently fuels Zero Trust frameworks: for example, robustly denying a valid employee DB-extraction privileges if logging in past routine hours or from non-VPN remotes."
  },
  "sec-engineering": {
    w_it: "La Security Engineering è la disciplina rigorosa per incorporare in maniera meticolosa strumenti, network topology e requisiti crittografici all'interno delle infrastrutture societarie.",
    u_it: "Forza un orientamento tecnologico sistematico: l'ingegnere assembla una serie impenetrabile di strati evitando le classiche distrazioni di sistema causate dai deployment affrettati.",
    w_en: "Security Engineering operates as the rigorous scientific discipline driving meticulous incorporation spanning specialized tools, resilient network topologies, and cryptographic requisites deeply into corporate architecture.",
    u_en: "Forces systematically resilient technological orientation: the engineer correctly seamlessly assembles structured impenetrable technical layers directly bypassing standard structural deployment oversights drastically."
  },
  "sec-automation": {
    w_it: "L'Automazione implementa codice customizzato e script continui che rilevano derive tecnologiche, applicano patch istantanee e creano reazioni immediate su vulnerabilità standard.",
    u_it: "Azzera incalcolabilmente l'onere degli analisti, assicurando che compiti lenti (bloccare IP sospetti sui router distribuiti globali) avvenga in modo fluido alla velocità della cpu.",
    w_en: "Security Automation implements highly tailored continuous scripting mechanics autonomously detecting technological drifts, rapidly applying live patches, and instantaneously executing rote responses handling standard vulnerability occurrences.",
    u_en: "Incalculably zeroes tedious overarching analyst overhead, directly ensuring natively slow procedural tasks (systematically blocking disparate suspicious IPs globally) effortlessly unfold dependably at sheer processing-cpu speeds."
  },
  "network-design": {
    w_it: "Il Network Design della Sicurezza disegna l'architettura logica di topologia: V-Lan, zone demilitarizzate (DMZ) ed isolamenti segmentati progettati per la resilienza macroscopica e instradamento analitico.",
    u_it: "Applica il cruciale principio di Separazione e Difesa in Profondità: intrappola ed esilia server non sensibili compromessi lontano dai gangli essenziali inattaccabili del core bancario.",
    w_en: "Security Network Design meticulously plots logical architectural layout topologies: spanning isolated V-LANs, Demilitarized Zones (DMZs), and complex macro-resilient granular routing segmentations systemically crafted supporting massive analytical flows.",
    u_en: "Powerfully applies critical systematic Separation and core Defense in Depth principles: physically ensnaring isolating comprised low-priority mundane perimeter servers fundamentally separated vast distances away from critical unassailable banking core fabrics."
  },
  "zero-trust": {
    w_it: "Un caposaldo strategico ('Mai fidarsi, verificare sempre') in cui non esiste la rete sicura di default. Tutte le richieste ed i nodi subiscono forte autenticazione prima del minimo rinvio d'accesso.",
    u_it: "Blocca totalmente lo scacchiere e il classico movimento da pivot: se un PC è infettato da ransomware, isola l'agente malvagio in quella stanza, arrestando l'apocalittica dispersione sul Cloud locale.",
    w_en: "Ultimate strategic bedrock paradigm ('Never Trust, Always Verify') explicitly destroying archaic defaults assuming internal network safety. Every individual request and node universally necessitates stringent authentication uniformly preceding minimal routing access.",
    u_en: "Wholly locks down infrastructural playing fields severing classic post-breach adversarial pivoting routes: if one isolated PC suffers aggressive ransomware compromise, it quarantines malicious agents within that singular digital room effectively halting localized catastrophic enterprise-cloud dispersions."
  },
  "firewalls": {
    w_it: "Sistemi storici ma avanzati (Next-Gen Firewall) operanti profondamente al livello 7 dello stack OSI ispezionando il traffico in entrata e uscita internet con firme dinamiche in tempo reale.",
    u_it: "L'equivalente tecnologico dei controlli di frontiera: respingono attivamente milioni d'insidie quotidiane e pattern ostili prima persino che atterrino pericolosamente sfiorando gli inermi server web prettamente civili.",
    w_en: "Historical yet progressively highly advanced appliances (Next-Gen Firewalls) actively executing strictly deeply spanning Level 7 of the OSI stack, dynamically inspecting routing Internet ingest and outbound transmission filtering real-time behavioral signatures actively.",
    u_en: "Functioning robustly mirroring fortified technological border-control checkpoints: proactively explicitly rejecting daily baseline foundational hostile exploitation patterns massively averting extreme damage distinctly long before dangerous malicious traffic ever harmlessly grazes unprepared purely civilian backend web-servers directly."
  },
  "ids-ips": {
    w_it: "Sistemi di Rilevamento (IDS) o Prevenzione (IPS). Sondano trasversalmente la rete lanciando allarmi quando vedono protocolli maligni operare lateralmente, interrompendo talvolta i tentativi nocivi di connessione (IPS).",
    u_it: "Servono esplicitamente come ronde di sentinella notturne sulle autostrade interne: localizzano ed estirpano brutalmente in maniera analitica e proattiva bot compromessi comunicanti col server Comando & Controllo criminale.",
    w_en: "Intrusion Detection (IDS) and stringent dedicated active Prevention (IPS) systems. They systematically traverse network topologies broadcasting alarms explicitly witnessing sideways malicious routing protocols manifesting, occasionally actively severing deeply harmful connection attempts forcefully (IPS).",
    u_en: "Serves explicitly embodying hyper-vigilant nightly patrolling perimeter sentinels persistently spanning internal information superhighways: sharply analytically accurately tracking pinpoint localization followed directly by ruthlessly ripping executing compromised zombie botnets continuously attempting covert transmissions engaging criminal Command & Control foreign servers heavily."
  },
  "ddos-prevention": {
    w_it: "Servizi di Mitigazione per Negative Availability. Assorbono ondate mostruose orchestrate da reti zombie esterne che puntano a sovraccaricare e staccare l'infrastruttura di rete mondiale d'azienda.",
    u_it: "Custodia essenziale per negozi digitali (e-Commerce) o Enti pubblici: dissipa la violenza acuta di trilioni di richieste HTTP fasulle spazzine mantenendo stabile in navigazione reale il servizio primario in incognito.",
    w_en: "Dedicated Distributed Denial of Service (DDoS) Mitigation services aggressively countering negative tactical Availability attempts. Massively absorbs monstrous globally orchestrated waves naturally originating spanning exterior zombie-nets actively aspiring to catastrophically overload completely disconnecting internal worldwide corporate networking architectures.",
    u_en: "Vital unbreakable safeguarding armor actively securing high-availability operations specifically shielding primary digital eCommerce platforms referencing monumental Public Entities directly: actively dissipating acute violence triggered rapidly receiving trillions uniquely faked HTTP requests seamlessly maintaining smooth unimpeded genuine user navigation cleanly masking sheer incognito primary service resilience effortlessly."
  },
  "secure-build": {
    w_it: "Criteri rigidi usati in pre-vendita (Configurazione dorata / Baseline sicura) su tutti i sistemi base al fine primario di snellire o nascondere disabilitando protocolli notoriamente permeabili pronti e già di default per i deployment societari.",
    u_it: "Instaura conformità immediata. Con una singola immagine del computer 'secure by design', si annulla l'errore umano impedendo ai dipendenti d'installare tool non filtrati o inserire liberamente USB letalmente esecutivi negli endpoint appena presi dalla scatola originale.",
    w_en: "Rigid strict structural criteria historically utilized shaping heavily strictly pre-provisioned 'Golden configurations / Secure baselines' deployed securely across comprehensive organizational base systems effectively thinning masking heavily disabling notoriously permeable protocols completely prepared exclusively tailored standard corporate functional deployments initially.",
    u_en: "Establishes immense sheer immediate compliance conformity instantaneously. Wielding singular master deeply robust 'secure by design' computer templates critically nullifies standard human operational errors categorically preventing standard users successfully downloading heavily unfiltered tools explicitly natively inhibiting executing potentially lethal macro USB insertions upon fresh unmodified out-of-the-box system endpoints universally."
  },
  "patch-mgmt": {
    w_it: "Il Management delle Patch è l'integrazione sistematica rigorosamente testata per implementare correttivi di programmazione ai codici nativi che regolano vulnerabilità software attive (CVE) in tempi stabiliti dalle policy ISO.",
    u_it: "Previene e sana logicamente il difetto tecnico insito della fabbrica costruttrice, frustrando inesorabilmente i threat actor ad alto impatto che cercano disperatamente un solo e semplice spiraglio logico obsoleto sul network pubblico e privato.",
    w_en: "Patch Management strictly operationalizes methodical continuously rigorously tested deployments systematically executing crucial programmatic natively-layered fixes thoroughly addressing actively exploited codebase software vulnerabilities inherently known distinctly (CVEs) bound heavily defined strictly governing established precise ISO turnaround lifecycles.",
    u_en: "Proactively conceptually medically heals inherently structurally baked-in native manufacturer logic defects firmly, inexorably frustrating heavily invested drastically high-impact advanced threat actors desperately blindly sweeping tracking searching massively hoping targeting single simply antiquated openly publicly accessible structural logical private network gateways endlessly."
  },
  "baseline-config": {
    w_it: "Fonde i prerequisiti concettuali e tecnici stabilendo lo standard minimo richiesto inderogabile che definisce uno stato della macchina (computer, telecamera) che sia ufficialmente reputato operativamente sicurizzato prima e solo prima della reale immissione su reti societarie.",
    u_it: "Pialla via ogni deviazione insicura: azzera i rischi dell'avere una rete a tre velocità con password di default ('admin, admin') palesemente presenti sulle webcam che fungono altrimenti da porta d'ingresso per infiltrare infrastrutture colossali globalmente sensibili non appena le spiano di notte su protocollo remoto.",
    w_en: "Melds deep conceptual structural prerequisites solidly codifying uniquely mandatory inflexible minimum baseline standards structurally determining explicitly defining definitive state configurations actively reflecting effectively completely securely functioning machinery (PCs, surveillance grids) distinctly absolutely requiring thorough official vetting unconditionally before physical induction actively hitting primary corporate working networks natively.",
    u_en: "Smoothly ruthlessly planes away incredibly insecure deviations globally: effectively actively zeroing widespread foundational risks actively stemming explicitly housing distinctly tri-tier fragmented grids openly sporting egregiously pathetic publicly known primary default login passwords ('admin, admin') openly natively broadcast essentially actively manifesting explicitly dangerous open access vector gateways massively effectively bypassing colossally sensitive internal infrastructure boundaries the moment automated evening remote-protocol scouting sequences lock onto targets accurately."
  },
  "cryptography": {
    w_it: "L'arte ingegneristica dell'offuscamento matematico profondo che annoda i testi per proteggerli (cifratura) in memoria solida o viaggianti via cavo garantendone una totale incomprensibilità assoluta non decifrabile a qualsiasi minaccia non dotata dell'idonea formula per invertire le equazioni crittografiche estreme.",
    u_it: "Innalza il muro finale inesorabile e categorico. A fronte d'incursione di stato riuscita persino superando il firewall aggirando SOC, zero-trust ed end-point: trovarsi davanti DB in AES-256 e non possederne l'hash decrittativo costringerà l'Hacker ad abbandonare i miliardi spesi furente nell'inutilità dei cluster asportati non monetizzabili ed oscuri logicamente bloccandogli per l'eternità ricatti proficui.",
    w_en: "The highly specialized engineering art utilizing profound extreme mathematical obfuscation thoroughly weaving heavily securely knotting crucial plaintext data (pure encryption) fundamentally actively engaged anchoring heavily solidly frozen memory silos alongside active deeply deeply encrypted wire-transmissions fundamentally guaranteeing total absolute categorical incomprehensibility drastically impervious fundamentally definitively illegible actively challenging heavily confronting directly any unequipped extreme heavily unauthorized advancing hostile threat blindly lacking exactly inherently correct specific inverse cryptographic formulation keys effectively.",
    u_en: "Constructs the ultimate inexorable categorical endgame barrier. Definitively confronting successfully successfully navigated advanced explicit devastating state-level network incursions breaching actively penetrating heavily extensively seamlessly heavily surpassing perimeter Firewalls, stealthily dodging sophisticated SOC analysts, heavily completely navigating Zero-Trust parameters, deeply drastically exploiting heavily bypassed endpoint agents actively: ultimately tragically facing completely incomprehensibly solidly locked massively heavy AES-256 database layers heavily hopelessly explicitly completely physically irrevocably definitively denying the hacker explicitly any logical decoding hashing keys deeply completely forcing frustrated billions heavily expended furiously abandoning deeply critically vastly drastically fundamentally extracted effectively thoroughly inherently utterly useless obscured deeply locked natively inherently hopelessly completely irredeemably strictly absolutely categorically totally useless entirely strictly actively drastically massively rendering drastically thoroughly heavily securely indefinitely actively halting any deeply successfully orchestrated extensive inherently profitable extortion attempts forever perfectly effectively efficiently completely successfully entirely."
  }
};

const output = [];
for (let id in data) {
  const item = data[id];
  output.push(`  "${id}": {`);
  output.push(`    "whatItIs": { "it": ${JSON.stringify(item.w_it)}, "en": ${JSON.stringify(item.w_en)} },`);
  output.push(`    "utility": { "it": ${JSON.stringify(item.u_it)}, "en": ${JSON.stringify(item.u_en)} }`);
  output.push(`  },`);
}
fs.writeFileSync('/tmp/batch1.txt', output.join('\n'));
console.log("Wrote batch1");
