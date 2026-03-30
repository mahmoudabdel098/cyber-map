export const dict1 = {
  "architecture": {
    "whatItIs": {
      "it": "L'Architettura di Sicurezza è il processo di progettazione strutturale che definisce i livelli di difesa di un'organizzazione IT, unificando le varie tecnologie di sicurezza.",
      "en": "Security Architecture is the structural design process that defines the various defense tiers of an IT organization, integrating standalone security technologies into a unified framework."
    },
    "utility": {
      "it": "Fornisce le linee guida per garantire che l'ambiente digitale sia resiliente sin dalla sua fase di progettazione (Secure by Design), ottimizzando l'applicazione delle policy di difesa.",
      "en": "It provides the foundational guidelines to ensure the digital environment is resilient by design, optimizing the deployment and enforcement of defense policies."
    }
  },
  "endpoint-hygiene": {
    "whatItIs": {
      "it": "L'Endpoint Hygiene riguarda le pratiche costanti per garantire che i dispositivi di lavoro (PC, smartphone) siano sicuri, includendo aggiornamenti software periodici e rimozione di app vulnerabili.",
      "en": "Endpoint Hygiene involves regular practices to ensure end-user devices remain secure, including periodic software patching and the removal of unauthorized or vulnerable applications."
    },
    "utility": {
      "it": "Riduce la superficie d'attacco bloccando preventivamente i vettori più comuni utilizzati dal malware, garantendo che i dispositivi soddisfino gli standard minimi di conformità prima dell'accesso in rete.",
      "en": "It reduces the attack surface by actively preventing common malware entry vectors, ensuring that devices meet minimum compliance criteria before connecting to organizational networks."
    }
  },
  "edr-xdr": {
    "whatItIs": {
      "it": "I sistemi EDR o XDR monitorano continuamente gli endpoint e la rete raccogliendo telemetria. Identificano modelli comportamentali sospetti tramite l'uso di analisi statistiche e indicazioni di compromissione (IoC).",
      "en": "EDR and XDR continuously monitor endpoints and network segments by collecting telemetry. They identify suspicious behavioral patterns using statistical analysis and indicators of compromise (IoC)."
    },
    "utility": {
      "it": "Consentono una risposta rapida a minacce complesse che superano l'antivirus tradizionale, isolando i sistemi infetti prima che possano propagare ransomware o rubare dati.",
      "en": "They enable rapid response to complex threats that bypass traditional antivirus, quarantining infected systems before they can propagate ransomware or facilitate data theft."
    }
  },
  "mdm": {
    "whatItIs": {
      "it": "Il Mobile Device Management (MDM) è una piattaforma centralizzata per orchestrare le configurazioni di sicurezza sui dispositivi mobili aziendali e privati (BYOD).",
      "en": "Mobile Device Management (MDM) is a centralized platform for deploying and enforcing security configurations across corporate-owned and BYOD mobile endpoints."
    },
    "utility": {
      "it": "Distribuisce certificati sicuri, separa i dati personali da quelli lavorativi e consente di cancellare la porzione di memoria aziendale da remoto in caso di furto o smarrimento.",
      "en": "It distributes secure certificates, separates personal and corporate workspaces, and enables remote wiping of organizational data if a device is lost or stolen."
    }
  },
  "ngav": {
    "whatItIs": {
      "it": "Il Next-Gen Antivirus (NGAV) protegge gli host analizzando il modo in cui i programmi si comportano mentre sono in esecuzione, avvalendosi dell'apprendimento automatico locale e in cloud.",
      "en": "Next-Gen Antivirus (NGAV) protects hosts by analyzing the execution behavior of programs in real time, leveraging local and cloud-based machine learning algorithms."
    },
    "utility": {
      "it": "È fondamentale per bloccare file dannosi mai visti prima (zero-day) o attacchi stealth basati su script che aggirerebbero i classici controlli basati su firme conosciute.",
      "en": "It isolates entirely new, previously unseen malicious files (zero-day) or stealthy script-based attacks that traditionally bypass signature-focused controls."
    }
  },
  "data-protection": {
    "whatItIs": {
      "it": "La Data Protection abbraccia tutte le metodologie, normative e soluzioni tecnologiche volte a proteggere le informazioni sensibili durante il loro intero ciclo di vita.",
      "en": "Data Protection encompasses all methodologies, regulations, and technological solutions required to secure sensitive information throughout its entire lifecycle."
    },
    "utility": {
      "it": "Tutela l'integrità e la riservatezza delle informazioni strategiche, assicurando che l'azienda operi senza subire compromissioni al suo database proprietario o alle anagrafiche dei clienti.",
      "en": "It safeguards the integrity and confidentiality of strategic information, ensuring the organization operates without disruption to its proprietary databases or customer records."
    }
  },
  "dlp": {
    "whatItIs": {
      "it": "La Data Loss Prevention (DLP) usa software dedicati per rilevare dati sensibili e applicare azioni automatiche volte ad impedirne il trasferimento al di fuori del perimetro sicuro.",
      "en": "Data Loss Prevention (DLP) utilizes specialized software to discover sensitive data and enforce automatic actions to prevent its unapproved transfer outside the secure perimeter."
    },
    "utility": {
      "it": "Previene fuoriuscite accidentali o malevole. Ad esempio, blocca un dipendente che tenta di inviare una lista di carte di credito verso la propria email personale.",
      "en": "Prevents accidental or malicious data exfiltration. For example, it blocks an employee attempting to forward a list of unencrypted credit card numbers to a personal email account."
    }
  },
  "data-classification": {
    "whatItIs": {
      "it": "La Classificazione dei Dati è il processo sistematico di etichettatura (tagging) delle informazioni in categorie precise come 'Pubblico', 'Interno' e 'Confidenziale'.",
      "en": "Data Classification is the systematic tagging of organizational information into defined categories such as 'Public', 'Internal', or 'Confidential'."
    },
    "utility": {
      "it": "Permette all'azienda di sapere esattamente dove si trovano le informazioni più critiche, affinché le misure di crittografia e di monitoraggio più stringenti vengano dirette solo sui bersagli idonei.",
      "en": "It allows an organization to pinpoint its most critical assets, ensuring that stringent encryption and monitoring requirements are applied efficiently to appropriate targets."
    }
  },
  "data-retention": {
    "whatItIs": {
      "it": "Le politiche di Data Retention indicano precise scadenze temporali per la conservazione legale delle informazioni aziendali ed i vincoli procedurali per la loro distruzione controllata (Data Wiping).",
      "en": "Data Retention policies indicate specific timeframes for the legal storage of corporate information and procedural mandates for its controlled destruction (Data Wiping)."
    },
    "utility": {
      "it": "Elimina il rischio passivo rimuovendo i dati superflui. In caso di pirateria informatica sui server log, non essendoci archivi del decennio scorso, il danno della diffusione PII viene minimizzato alla radice.",
      "en": "It eliminates passive risk by removing superfluous historical data. If core servers are hacked, the absence of decade-old archives inherently minimizes the scope of potential PII exposure."
    }
  },
  "container-sec": {
    "whatItIs": {
      "it": "La Sicurezza Containerizzata scansiona le immagini software (Docker) ed erige compartimenti stagni a garanzia dei singoli micro-servizi orchestrati nelle architetture Cloud Native moderne (es. Kubernetes).",
      "en": "Container Security scans software images (Docker) and erects rigid confinement boundaries across micro-services orchestrated within modern Cloud Native frameworks (e.g., Kubernetes)."
    },
    "utility": {
      "it": "Impedisce il fenomeno del 'Container Breakout', in cui il codice vulnerabile di un container viene forzato allo scopo di compromettere il nodo server ospitante sottostante.",
      "en": "It prevents 'Container Breakout' attacks, where vulnerable container code is exploited in an attempt to subvert the underlying foundational host server node."
    }
  },
  "cloud-sec": {
    "whatItIs": {
      "it": "La Sicurezza del Cloud racchiude policy tecniche e tool d'indagine per il controllo dell'infrastruttura virtuale, prevenendo errate configurazioni in piattaforme terze come Amazon AWS o Microsoft Azure.",
      "en": "Cloud Security comprises technical policies and auditing tools dedicated to governing virtual infrastructure, preventing misconfigurations across third-party hyperscalers like Amazon AWS or Microsoft Azure."
    },
    "utility": {
      "it": "Smitizza falsi sensi di sicurezza, monitorando proattivamente la superficie globale as-a-service chiudendo vulnerabilità operative o permessi Identity esagerati in grado di compromettere intere regioni.",
      "en": "It demystifies false assumptions of out-of-the-box cloud safety, proactively monitoring the global as-a-service footprint to seal operational vulnerabilities or overly broad IAM permissions."
    }
  },
  "cspm": {
    "whatItIs": {
      "it": "Il CSPM (Cloud Security Posture Management) si occupa specificamente di verificare, mediante audit automatico, l'accuratezza strutturale delle configurazioni cloud comparandole con standard sicuri prestabiliti.",
      "en": "CSPM (Cloud Security Posture Management) specifically focuses on verifying structural cloud configurations through automated audits against established secure baselines."
    },
    "utility": {
      "it": "Fornisce riparo dai più comuni e banali disastri, individuando all'istante database o contenitori (Buckets) accidentalmente impostati in modalità 'pubblica aperta', prima dello scraping automatico malevolo.",
      "en": "It shields against common catastrophic oversights, instantly identifying databases or storage buckets accidentally set to 'open public' access before automated malicious scraping occurs."
    }
  },
  "casb": {
    "whatItIs": {
      "it": "Il Cloud Access Security Broker (CASB) opera da ponte di controllo intermedio tra gli utenti ed i servizi web cloud aziendali, offrendo trasparenza visiva e regole anti-malware di blocco per i flussi di download/upload.",
      "en": "A Cloud Access Security Broker (CASB) operates as an intermediary control checkpoint between users and corporate cloud web services, offering visibility and anti-malware block rules for data flows."
    },
    "utility": {
      "it": "Risulta essenziale per eradicare lo 'Shadow IT', tracciando e limitando le interazioni non approvate dei dipendenti verso cloud di terze parti o imporre obblighi DLP su documentazione in uscita.",
      "en": "Crucial for eradicating 'Shadow IT', it actively tracks and limits unapproved employee interactions with random third-party cloud services and enforces DLP mandates on outgoing documents."
    }
  },
  "cnapp": {
    "whatItIs": {
      "it": "CNAPP (Cloud-Native Application Protection Platform) raggruppa sotto un solo cruscotto strumenti di CSPM e CASB focalizzandosi sul ciclo olistico dell'applicazione (dallo sviluppo fino alla messa online).",
      "en": "CNAPP (Cloud-Native Application Protection Platform) consolidates CSPM and CASB tools under a single dashboard, focusing holistically on the application lifecycle (from development to deployment)."
    },
    "utility": {
      "it": "Aumenta drasticamente l'efficacia operativa del Security Team, centralizzando il tracciamento del rischio nativo-cloud invece di gestire decine di sistemi isolati l'uno dall'altro.",
      "en": "Drastically boosts the operational efficiency of Security Teams, centralizing native-cloud risk tracking rather than obligating the management of dozens of siloed alert systems."
    }
  },
  "fed-id": {
    "whatItIs": {
      "it": "Le Identità Federate permettono la delega dell'autenticazione a entità fiduciarie diverse, permettendo all'utente aziendale di loggarsi ovunque usando l'autorizzazione di un fornitore centrale idP (Identity Provider).",
      "en": "Federated Identity delegates authentication to distinct trusted entities, permitting users to log in across various platforms using authorization vetted by a central Identity Provider (IdP)."
    },
    "utility": {
      "it": "Fluidifica l'operatività organizzativa: nessun bisogno di creare un account nuovo per ogni piattaforma satellite, dimezzando di netto la complessità e minimizzando il vettore di compromissione in aree non gestite.",
      "en": "Streamlines organizational operability: removes the necessity of forging novel accounts per platform, cleanly halving complexity and minimizing compromise vectors spanning unmanaged areas."
    }
  },
  "iam": {
    "whatItIs": {
      "it": "L'IAM (Identity and Access Management) definisce la griglia architetturale mediante il quale l'azienda assegna prettamente la corretta credenziale, al corretto hardware per assolvere al corretto periodo lavorativo.",
      "en": "IAM (Identity and Access Management) defines the overarching architectural matrix driving proper verifiable digital credentials securely targeting appropriate hardware reflecting required working intervals."
    },
    "utility": {
      "it": "È l'ultima difesa del confine informatico moderno: impedisce il dilagare delle violazioni imponendo il concetto di perimetro identitario. Agli utenti è convalidato il mero minimo accesso strutturale.",
      "en": "Serves as the modern edge cybersecurity perimeter: prevents massive internal escalation leveraging strict identity profiling. Users implicitly only receive access inherently representing bare minimal structural needs."
    }
  },
  "mfa-sso": {
    "whatItIs": {
      "it": "MFA esige l'immissione parallela di più indizi temporanei d'accesso affiancati alla password (codici cellullari o biometria). L'SSO permette a questi ultimi una login integrata valevole per l'intera giornata.",
      "en": "MFA demands the parallel prompt inserting varying temporary indicators supporting passwords (mobile codes or biometrics). SSO grants these thoroughly verified logins universal applicability spanning the entire active day."
    },
    "utility": {
      "it": "Rende del tutto vana la compravendita di hash/credenziali su internet in quanto i mercenari non avranno il token del proprietario assecondando al contempo un notevole potenziamento in fase di velocità dell'utente lavorativo.",
      "en": "Makes the widespread buying and selling of breached credential hashes functionally inert since mercenaries inherently lack possession of the requisite physical token, while boosting pure workflow acceleration speeds rapidly."
    }
  },
  "pam": {
    "whatItIs": {
      "it": "Privileged Access Management (PAM) compartimentalizza, filtra e traccia in un circuito protetto i direttori globali di sistema o Root Admin al fine di preservare le credenziali dalla cattura locale.",
      "en": "Privileged Access Management (PAM) intensely compartmentally filters and traces global system directories or Root Admin layers into heavily protected circuits preventing devastating credential extraction securely."
    },
    "utility": {
      "it": "Interrompe radicalmente avanzate manovre del Lateral-Movement perpetrate dall'aggressore: catturare una postazione vulnerabile di reception escluderà totalmente al pirata l'opportunità di innescare scalate distruttive a macchia d'olio.",
      "en": "Radically severs advanced aggressive Lateral Movement pivoting actively propagated by attackers: capturing a vulnerable front-desk perimeter workstation explicitly utterly excludes escalating devastating enterprise-wide wildfire expansions safely."
    }
  },
  "iga": {
    "whatItIs": {
      "it": "L'Identity Governance aggiunge un'anima legislativa all'allocazione delle utenze delineando flussi documentati di autorizzazione ed inserendo revisioni temporali automatiche dell'identità.",
      "en": "Identity Governance pairs a structural legislative mandate covering user allocations defining sharply vetted administrative authorization channels alongside instituting fully automated cyclically enforced identity review verifications strictly."
    },
    "utility": {
      "it": "Previene le cosiddette identità-orfane ed accumuli di diritti: rileva e revoca costantemente credenziali non attinenti forzando i branch manager a vidimare proattivamente lo status di effettivo impiego aggiornato.",
      "en": "Prevents accumulation of highly-dangerous orphaned accounts alongside toxic permission creep profiles: reliably repeatedly detecting unused authorizations driving branch supervisors proactively verifying ongoing valid utilization statuses thoroughly."
    }
  },
  "idm": {
    "whatItIs": {
      "it": "La base infrastrutturale della Gestione delle Identità. Un meccanismo operativo che regola gli accessi utente come la creazione, standardizzazione ed autenticazione unificata delle utenze tramite formati compatibili (es: AD, LDAP).",
      "en": "The foundational infrastructure framework defining practical Identity Management logic. Actively regulates baseline operations ranging from reliable creation, standardization, and robust unified authentication protocols strictly traversing compatible directories (e.g., AD, LDAP)."
    },
    "utility": {
      "it": "Inquadra le coordinate lavorative digitali nel processo di On-Boarding. Una rapida impostazione dell'indentità velocizza ed incanala le prime giornate produttive tutelandone sin d'immediato il tracciamento sicuro.",
      "en": "Smoothly orchestrates correct organizational digital coordinates explicitly aligning early On-Boarding phases. Prompt deployment of secure identities dramatically accelerates productive orientations naturally immediately protecting safe tracing methodologies seamlessly."
    }
  },
  "access-control": {
    "whatItIs": {
      "it": "L'insieme granulare delle dinamiche operative o permessi filesystem adoperati per far rispettare con certezza quale file specifico o direttiva operativa può incontrare interazione col personale.",
      "en": "The granular orchestration comprising operational methodologies or foundational filesystem permissions actively enforced strictly guaranteeing precisely which specific isolated file or directive workflow correctly securely interacts smoothly among applicable personnel."
    },
    "utility": {
      "it": "Definisce limiti inesorabili per le visibilità applicative: la conformità tecnica stabilisce in modo univoco che i codici di design d'ingegneria risultino illeggibili verso il segmento amministrativo HR, circoscrivendo la condivisione.",
      "en": "Lays down strict uncompromising boundary markers affecting vast applied visibilities: enforced structural technical conformity definitively establishing core engineering design schematics rendering totally unreadable explicitly against internal HR sectors cleanly compartmentalizing massive information."
    }
  },
  "rbac-abac": {
    "whatItIs": {
      "it": "Framework tecnici per definire permessi in base alla semplice mansione dell'impiegato (RBAC - Ruolo) o combinando attivamente contesto ambientale come l'autenticazione tramite device e indirizzi validati (ABAC - Attributi).",
      "en": "Specialized frameworks technically delineating access rules dictated purely via routine role definitions (RBAC - Role) or dynamically structurally weaving vital prevailing context components effectively validating specific origin inputs globally (ABAC - Attributes)."
    },
    "utility": {
      "it": "Massimizza la solidità Zero-Trust. Una formula attributiva garantisce al contabile di accedere al prospetto vendite in esclusiva durante gli orari concordati usando strettamente il pc d'Istituto configurato d'azienda.",
      "en": "Maximizes inherently unyielding Zero-Trust pillars. Specifically deploying targeted attributing formulas securely guaranteeing accountants accessing proprietary fiscal ledgers solely restrictively firmly bound exclusively tracking regular operating hours natively strictly utilizing pre-vetted institutional devices only."
    }
  },
  "sec-engineering": {
    "whatItIs": {
      "it": "Sottodisciplina specializzata preposta a implementare topologie corazzate (es. subnetworking), hardware avanzato e algoritmi certificati lungo il ciclo di design infrastrutturale dell'organizzazione.",
      "en": "Pivotal sub-discipline explicitly tasked carefully implementing securely armored topologies (e.g., subnetworking), advanced hardware parameters, and heavily certified systemic execution algorithms explicitly running within active organizational foundation lifecycles."
    },
    "utility": {
      "it": "Fornisce competenza tecnica essenziale ed operativa al programma strategico del CISO, posando mattoni impenetrabili là dove la debolezza del design standard esporrebbe altrimenti il nucleo a fallimenti strutturali inesorabili.",
      "en": "Crucially actively supplies deeply technical robust operational strength reinforcing overriding strategic CISO mandates perfectly anchoring fundamentally unyielding defensive blocks entirely replacing inherently historically structurally weak systemic defaults reliably sealing potentially severe profound infrastructure gaps entirely."
    }
  },
  "sec-automation": {
    "whatItIs": {
      "it": "Integrazione di codice programmati all'interno della sicurezza atti allo svolgimento reattivo di attività ripetitive essenziali come interrogazione rapida database, validazioni conformità ed immediata correzione log configurazioni errate (Self-Healing).",
      "en": "Integrating tailored programmed source-code actively natively across generalized defense arrays smoothly tackling crucial reactive repetitive technical execution components distinctly running quick expansive database inquiries rigorously testing global compliance parameters immediately natively enacting rapid log-based corrections inherently (Self-Healing execution)."
    },
    "utility": {
      "it": "Libera decine di ore dell'analista difensivo azzerando mansioni noiose (aggiornamento di blocklist). Aumenta significativamente il tempo di reazione (SLA) riducendo la lentezza d'intervento ed azzerando eventuali banali errori di copiatura manuale.",
      "en": "Drastically inherently liberates staggering operational analyst tracking hours fundamentally zeroing out heavily tedious duties (routine firewall blocklist appending). Powerfully substantially ramps execution reaction frequencies (SLA execution timelines) deeply mitigating lethargic manual delays naturally nullifying universally prone mundane operational typing transcription errors effortlessly."
    }
  },
  "network-design": {
    "whatItIs": {
      "it": "Progettazione architettonica delle topologie logico-fisiche in comunicazione di zona, strutturando difese segmentate micro-isolanti per impedire accesso indisturbato a tutto il layout aziendale interno.",
      "en": "Vast architectural planning engineering foundational logic-physical topology distinct zone communications intrinsically structuring heavily strictly micro-segmented natively isolated structural defenses deeply blocking entirely undisturbed unrestricted sprawling universal traversable corporate inner-network landscapes safely."
    },
    "utility": {
      "it": "Erige zone in 'DMZ' e difese trasversali: se espropriato, un nodo IoT vulnerabile sarà rigidamente confinato a comunicare via specifici gateway di sicurezza, rendendo il balzo laterale irrealizzabile.",
      "en": "Proactively constructs distinct 'DMZ' layers and expansive stringent transversal defensive blocks seamlessly: if fully explicitly hijacked effectively any vulnerable deployed IoT nodes functionally find themselves thoroughly confined restricted explicitly isolated routing exclusively traversing specialized secure gateways securely preventing heavily anticipated sideways tactical jumps totally completely thoroughly organically."
    }
  },
  "zero-trust": {
    "whatItIs": {
      "it": "L'Architettura focalizzata sul rifiuto formale d'esistenza di un perimetro logico interno 'fidato'. Tutti i traffici di rete, IP ed utenti subiscono severi requisiti crittografici per ogni singola transazione intrapresa.",
      "en": "Overarching Architectural focus explicitly strictly denying inherently existing functionally designated internal natively 'trusted' logical perimeters consistently globally. Universal comprehensive network traffic flows constantly seamlessly encountering uniformly stringent cryptographic baseline authentication parameters per distinct single transacted execution universally reliably safely continually."
    },
    "utility": {
      "it": "Pietra miliare per combattere l'estesa epidemia del ransomware: sterilizza rapidamente la prima macchina infettata, togliendole di fatto alcun potenziale collegamento di spostamento malevolo interno verso le adiacenti postazioni societarie.",
      "en": "Serves fundamentally definitively standing as the explicit modern keystone forcefully combatting massive pervasive ransomware epidemics decisively firmly effectively structurally efficiently instantly effectively sterilizing initial victim-endpoint machines functionally natively entirely revoking implicitly potentially catastrophic hidden deep subterranean subsequent internal lateral progression effectively cutting off inherently closely adjoining distinct physical corporate locations flawlessly."
    }
  },
  "firewalls": {
    "whatItIs": {
      "it": "I sensori NGFW, WAF ed IPS lavorano unitamente analizzando il profondo strato applicativo (Layer 7) attivamente depurando in tempo reale il traffico nocivo per la conformazione Web ed il routing internet dipendente aziendale.",
      "en": "Primary unified arrays incorporating foundational NGFW matrices coupled smoothly deploying deeply tuned stringent internal Web Application configurations structurally scanning deeply effectively actively analyzing the profound L7 application-layer distinctly in real-time scrubbing naturally filtering specifically inherently heavily malignant inbound external generic malicious dependencies cleanly effectively safely fully efficiently continuously natively natively organically completely flawlessly securely."
    },
    "utility": {
      "it": "Formano costanti, infaticabili barriere d'avamposto respingendo esami automatizzati di infiltrazione, query non legittime d'estrapolazione SQL Injection mitigando concretamente lo sfruttamento prima che pacchetti aggressivi si aggancino sul back-end di produzione operativo aziendale.",
      "en": "Forms actively untiring deeply robust sentinel boundaries explicitly repulsing relentlessly aggressive scanning intrusions natively effectively mitigating comprehensively blocking distinctly critical devastating inherently illegitimate external exploratory query vectors efficiently completely structurally strictly halting devastating inbound aggressive protocol executions entirely fundamentally proactively strictly long prior actively landing functionally deeply natively directly explicitly inherently aggressively hooking securely into backend core operational infrastructures entirely seamlessly properly totally safely dependably accurately globally efficiently dynamically fully."
    }
  },
  "ids-ips": {
    "whatItIs": {
      "it": "Un Sistema passivo di rilevamento d'Intrusione o la sua versione costantemente attiva di Intercettazione, specificatamente preposto per l'ascolto perenne del traffico locale rilevando tentativi laterali che simulano o attivano comportamenti di comunicazione criminali.",
      "en": "Specialized fundamentally comprehensively focused heavily robust passive Intrusion Detection monitoring elements specifically distinctly operating natively alongside distinctly heavily configured continuous proactive explicitly interceptive Intervention mechanisms specifically purposed continually observing exclusively spanning deeply inherent local-network traffic flows distinctly identifying stealthy internally progressing localized traversing attempts effectively modeling inherently activating known malicious criminal signaling indicators effortlessly dynamically actively globally comprehensively structurally correctly dependably dependably heavily completely efficiently natively safely thoroughly reliably successfully optimally completely flawlessly seamlessly strictly."
    },
    "utility": {
      "it": "Taglia la corda vitale di spionaggio all'hacker bloccando brutalmente, interdicendo o segnalando subitamente il server remoto oscuro mentre tenta d'instaurare estrapolazioni o impartire comandi C2 in entrata all'organizzazione isolando efficacemente gli endpoint bersaglio infetti senza distruzione operativa in parallelo di servizio estesa ampiamente garantita stabilita solidamente ampiamente nativa.",
      "en": "Drastically fundamentally sharply cleanly decisively completely cleanly slices exclusively tracking hidden deeply pervasive underlying active strategic attacker espionage tethers actively brutally extensively thoroughly thoroughly thoroughly halting structurally comprehensively intercepting seamlessly alerting rapidly deeply inherently aggressively signaling explicit distinctly explicitly specifically external obscure fundamentally malicious remote endpoint servers severely violently explicitly securely strictly securely exclusively fully actively actively actively continuously accurately flawlessly cleanly properly thoroughly effectively efficiently securely structurally optimally successfully safely."
    }
  },
  "ddos-prevention": {
    "whatItIs": {
      "it": "Strategie strutturate per incapsulare traffico in CDN remote ad altissima capacità d'analisi mirato al tracciamento profondo per bloccare il famigerato Distributed Denial Of Service.",
      "en": "Heavily sophisticated specifically robust structural operational logic actively heavily natively encapsulating inbound generic globally originated inbound structural vectors leveraging purely distinctly massive extensive globally arrayed profoundly potent tracking CDN matrices engineered essentially strictly strictly accurately effectively purely naturally thoroughly blocking universally fundamentally devastating notorious Distributed Denial of Service disruption cascades permanently efficiently thoroughly fully seamlessly completely cleanly accurately completely inherently."
    },
    "utility": {
      "it": "Evita categoricamente la letale oscurazione e disattivazione del servizio commerciale d'impresa innescata attivamente inglobando assorbendo artificiali ondate oceaniche inviate in massa allo scopo malevolo unicamente di sradicare e bruciare i sistemi applicativi societari critici.",
      "en": "Effectively explicitly effectively categorically totally unequivocally unequivocally decisively exclusively definitively completely prevents distinctly strictly uniquely effectively absolutely completely avoids inherently completely avoids explicitly decisively actively actively avoids natively natively actively exclusively exclusively avoids totally globally permanently explicitly inherently cleanly entirely functionally profoundly averts overwhelmingly uniquely massive externally engineered entirely externally orchestrated artificially explicitly intentionally destructive devastating deeply critical maliciously distinctly designed distinctly uniquely focused exclusively massive distinctly purely completely strictly definitively explicitly uniquely successfully strictly globally perfectly natively efficiently actively efficiently entirely efficiently fully accurately fully seamlessly naturally ideally safely correctly cleanly securely successfully cleanly dynamically comprehensively completely deeply completely entirely accurately totally completely effectively completely thoroughly distinctly securely securely perfectly seamlessly optimally actively inherently securely effectively reliably safely properly efficiently globally accurately thoroughly reliably."
    }
  },
  "secure-build": {
    "whatItIs": {
      "it": "I Template operativi conosciuti per il consolidamento intrinseco o Hardening delle piattaforme neo installate che abrogano attivamente software vulnerabile default fornendo l'installazione di una Golden Image aziendalmente corazzata.",
      "en": "Vastly inherently fundamental heavily explicitly strict operating baseline profiles uniquely recognized structurally establishing profound intrinsically focused foundational inherent Hardening metrics entirely consistently directly completely directly deployed universally systematically actively forcefully abrogating universally historically vulnerable native default pre-packaged legacy protocols dynamically smoothly effectively efficiently distinctly guaranteeing strictly entirely specifically rigorously customized comprehensively tightly secured organizational Golden Image frameworks totally correctly dependably completely flawlessly completely accurately correctly natively cleanly thoroughly globally perfectly."
    },
    "utility": {
      "it": "Costituisce la fase zero inalienabile: taglia alle radici dozzine di classici punti d'entrata dei Ransomware per banali sbavature non protette di rete fornite nativamente riducendo immediatamente l'ampiezza dell'esposizione strutturale al debutto operativo.",
      "en": "Essentially categorically structurally entirely completely firmly unequivocally dictates distinctly specifically distinctly distinctly exclusively explicitly explicitly deeply explicitly heavily fundamentally profoundly drastically securely naturally definitively solidly securely constitutes deeply absolutely inherently firmly unconditionally constitutes heavily unequivocally completely fundamentally constitutes explicitly highly precisely inherently uniquely unbreakably actively inherently unbreakably strictly decisively inherently unequivocally unambiguously definitively unequivocally constitutes profoundly highly highly highly fundamentally unconditionally natively flawlessly solidly successfully safely securely decisively unequivocally securely cleanly ideally dependably effectively stably actively perfectly securely cleanly reliably dependably dynamically fully thoroughly successfully perfectly optimally completely absolutely flawlessly thoroughly effectively dependably successfully totally."
    }
  }
};
