export interface QuizQuestion {
  question: { it: string; en: string };
  options: { it: string[]; en: string[] };
  correctIndex: number;
  explanation: { it: string; en: string };
}

export const nodeQuizzes: Record<string, QuizQuestion> = {
  "waf": {
    "question": {
      "it": "Qual è il compito principale di un Web Application Firewall (WAF)?",
      "en": "What is the primary task of a Web Application Firewall (WAF)?"
    },
    "options": {
      "it": ["Cifrare il disco rigido del server", "Filtrare e monitorare il traffico HTTP tra un'applicazione web e Internet", "Gestire le password degli utenti", "Proteggere fisicamente il data center"],
      "en": ["Encrypt the server's hard drive", "Filter and monitor HTTP traffic between a web application and the Internet", "Manage user passwords", "Physically protect the data center"]
    },
    "correctIndex": 1,
    "explanation": {
      "it": "Il WAF protegge le applicazioni web filtrando e monitorando il traffico HTTP, bloccando attacchi come SQL injection e XSS.",
      "en": "A WAF protects web applications by filtering and monitoring HTTP traffic, blocking attacks like SQL injection and XSS."
    }
  },
  "mfa-sso": {
    "question": {
      "it": "Perché l'MFA è considerato fondamentale per la sicurezza degli accessi?",
      "en": "Why is MFA considered fundamental for access security?"
    },
    "options": {
      "it": ["Perché rende l'accesso più veloce per l'utente", "Perché richiede almeno due prove di identità diverse, rendendo inutile il solo furto della password", "Perché elimina la necessità di avere un firewall", "Perché crittografa tutti i file dell'utente"],
      "en": ["Because it makes login faster for the user", "Because it requires at least two different proofs of identity, making password theft alone useless", "Because it eliminates the need for a firewall", "Because it encrypts all user files"]
    },
    "correctIndex": 1,
    "explanation": {
      "it": "L'autenticazione a più fattori (MFA) aggiunge uno strato di sicurezza: anche se un hacker ruba la password, non potrà entrare senza il secondo fattore (es. un codice sul telefono).",
      "en": "Multi-Factor Authentication (MFA) adds a security layer: even if a hacker steals the password, they cannot enter without the second factor (e.g., a code on the phone)."
    }
  },
  "zero-trust": {
    "question": {
      "it": "Qual è il principio cardine della filosofia Zero Trust?",
      "en": "What is the core principle of the Zero Trust philosophy?"
    },
    "options": {
      "it": ["Fidarsi di chiunque sia già all'interno della rete aziendale", "Non fidarsi mai, verificare sempre (Never Trust, Always Verify)", "Utilizzare solo software open-source", "Non usare mai la connessione Internet"],
      "en": ["Trust anyone already inside the corporate network", "Never Trust, Always Verify", "Use only open-source software", "Never use the Internet connection"]
    },
    "correctIndex": 1,
    "explanation": {
      "it": "Zero Trust assume che le minacce possano provenire sia dall'esterno che dall'interno, richiedendo una verifica continua per ogni richiesta di accesso.",
      "en": "Zero Trust assumes threats can come from both outside and inside, requiring continuous verification for every access request."
    }
  },
  "phishing": {
    "question": {
      "it": "Cos'è il Phishing?",
      "en": "What is Phishing?"
    },
    "options": {
      "it": ["Un tipo di firewall molto potente", "Una tecnica di ingegneria sociale per ingannare gli utenti e rubare dati sensibili", "Un metodo per velocizzare la rete Wi-Fi", "Un virus che rompe l'hardware del computer"],
      "en": ["A very powerful type of firewall", "A social engineering technique to trick users into stealing sensitive data", "A method to speed up Wi-Fi", "A virus that breaks computer hardware"]
    },
    "correctIndex": 1,
    "explanation": {
      "it": "Il phishing usa email o messaggi falsi che sembrano provenire da fonti affidabili per rubare password o installare malware.",
      "en": "Phishing uses fake emails or messages that appear to come from trusted sources to steal passwords or install malware."
    }
  },
  "incident-response": {
    "question": {
      "it": "Qual è l'obiettivo principale dell'Incident Response?",
      "en": "What is the primary goal of Incident Response?"
    },
    "options": {
      "it": ["Punire chi ha commesso l'errore", "Gestire una violazione di sicurezza per limitarne i danni e ripristinare i servizi", "Comprare nuovi computer ogni anno", "Scrivere il manuale d'uso del software"],
      "en": ["Punish whoever made the mistake", "Manage a security breach to limit damage and restore services", "Buy new computers every year", "Write the software user manual"]
    },
    "correctIndex": 1,
    "explanation": {
      "it": "L'Incident Response serve a reagire rapidamente agli attacchi, contenere l'impatto e tornare alla normalità il prima possibile.",
      "en": "Incident Response is used to react quickly to attacks, contain the impact, and return to normalcy as soon as possible."
    }
  },
  "gdpr": {
    "question": {
      "it": "Cosa protegge principalmente il GDPR?",
      "en": "What does GDPR primarily protect?"
    },
    "options": {
      "it": ["I segreti industriali delle aziende", "I dati personali e la privacy dei cittadini europei", "I diritti d'autore della musica online", "La velocità di navigazione dei siti web"],
      "en": ["Corporate trade secrets", "Personal data and privacy of European citizens", "Online music copyrights", "Website browsing speed"]
    },
    "correctIndex": 1,
    "explanation": {
      "it": "Il GDPR è il regolamento europeo che dà ai cittadini il controllo sui propri dati personali e impone regole severe alle aziende.",
      "en": "GDPR is the European regulation that gives citizens control over their personal data and imposes strict rules on companies."
    }
  },
  "threat-modeling": {
    "question": {
      "it": "Quando dovrebbe essere eseguito il Threat Modeling?",
      "en": "When should Threat Modeling be performed?"
    },
    "options": {
      "it": ["Solo dopo che è avvenuto un attacco", "Durante la fase di progettazione (Design) di un sistema o applicazione", "Una volta all'anno, a caso", "Solo se lo chiede il cliente"],
      "en": ["Only after an attack has occurred", "During the design phase of a system or application", "Once a year, randomly", "Only if the client asks"]
    },
    "correctIndex": 1,
    "explanation": {
      "it": "Identificare le minacce in fase di design permette di costruire sistemi sicuri 'by design', evitando falle strutturali costose da correggere dopo.",
      "en": "Identifying threats during the design phase allows for building systems that are secure 'by design', avoiding structural flaws that are costly to fix later."
    }
  },
  "siem": {
    "question": {
      "it": "A cosa serve principalmente un SIEM?",
      "en": "What is a SIEM primarily used for?"
    },
    "options": {
      "it": ["Per montare video professionali", "Per raccogliere e analizzare i log di sicurezza da tutta la rete in tempo reale", "Per bloccare fisicamente le porte dell'ufficio", "Per fare il backup delle foto dei dipendenti"],
      "en": ["Professional video editing", "Collecting and analyzing security logs from across the network in real-time", "Physically locking office doors", "Backing up employee photos"]
    },
    "correctIndex": 1,
    "explanation": {
      "it": "Il SIEM monitora i log di vari sistemi per individuare pattern sospetti che potrebbero indicare un attacco in corso.",
      "en": "SIEM monitors logs from various systems to identify suspicious patterns that might indicate an ongoing attack."
    }
  },
  "ai-sec": {
    "question": {
      "it": "Cosa si intende per 'Model Poisoning' nella sicurezza dell'IA?",
      "en": "What is 'Model Poisoning' in AI security?"
    },
    "options": {
      "it": ["Spegnere il computer dell'IA", "Manipolare i dati di addestramento per alterare il comportamento dell'IA", "Rompere lo schermo del PC", "Installare un antivirus sull'IA"],
      "en": ["Shutting down the AI computer", "Manipulating training data to alter AI behavior", "Breaking the PC screen", "Installing an antivirus on the AI"]
    },
    "correctIndex": 1,
    "explanation": {
      "it": "Il Model Poisoning avviene quando un attaccante inquina i dati usati per addestrare l'IA, portandola a prendere decisioni errate o pericolose.",
      "en": "Model Poisoning occurs when an attacker pollutes the data used to train the AI, leading it to make incorrect or dangerous decisions."
    }
  },
  "risk-assessment": {
    "question": {
      "it": "Qual è lo scopo principale del Risk Assessment?",
      "en": "What is the primary purpose of Risk Assessment?"
    },
    "options": {
      "it": ["Eliminare ogni singola possibilità di rischio (impossibile)", "Identificare, analizzare e valutare i rischi per decidere come gestirli", "Firma dei contratti di vendita", "Aggiornare solo le password"],
      "en": ["Eliminate every single possibility of risk (impossible)", "Identify, analyze, and evaluate risks to decide how to manage them", "Signing sales contracts", "Only updating passwords"]
    },
    "correctIndex": 1,
    "explanation": {
      "it": "L'analisi del rischio permette di capire quali sono le minacce più probabili e gravi, aiutando l'azienda a investire le risorse dove serve davvero.",
      "en": "Risk assessment helps understand which threats are most likely and serious, helping the company invest resources where they are truly needed."
    }
  }
};
