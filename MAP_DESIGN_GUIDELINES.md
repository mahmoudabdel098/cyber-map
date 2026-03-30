# Cyber Map Design Guidelines (PERMANENT)

Queste regole sono sacre e non devono **MAI** essere alterate nell'applicazione ReactFlow per la mappa *Cybersecurity Domains* senza l'esplicito consenso dell'utente.

## 1. STRUTTURA GEOMETRICA (Zero Sovrapposizioni)
- I rami devono utilizzare linee **costanti Curve (Bezier / `default`)**, mai le linee angolate Smoothstep che si accavallano.
- Tutte le larghezze dei Container (Nodi Root, Categorie e Nodi Semplici) devono essere calcolate tramite `w-max flex`, **non devono mai avere width fissa o vincoli `max-w-`** che creano sbrodolamenti e ritagli del testo.
- La disposizione (`mapData.ts`) **deve** usare una struttura gerarchica Ricorsiva a cascata per supportare i 4+ livelli profondi dell'immagine (Architettura, AppSec ecc.) e le Handle `sl` e `sr` devono essere presenti su *ogni* Nodo.
- **Offset e Spaziatura**: Calcolata in modo predittivo in cascata usando GAP fissi di circa 100-140px tra le larghezze fisiche dei Blocchi e le lunghezze dei branch padri in modo che **nessun ramo si incroci** visualmente e le curve bezier si possano stendere.

## 2. ESTETICA VISIVA (Light Theme Only)
- Il Dark Theme è **BANNATO**.
- Tutti i nodi, l'ambiente (`BackgroundVariant.Dots`), la Dashboard Categorie, la barra di Ricerca, devono sfoggiare la modalità **Light mode** (bg-white, bg-slate-50) ad **Altissimo Contrasto** (testi bold neri/ardesia scura).
- Nodi Principali (Centro): Stile Gigantesco uppercase con glow azzurrino e grande testo.
- Dashboard Categorie Mobile: Menu a scomparsa Hamburger Menu che si trasforma in finestra scrollabile per non oscurare lo schermo intero sui telefoni.
- Trattetti direzionali (Arrow Heads): Obbligatori alla fine di ogni arco Bezier (`MarkerType.ArrowClosed`) per specificare il tracking del flow utente dai radici ai bordi. 

## 3. CONTENUTI RIGOROSI (Autore Reference)
- I dati mappati su `mapData.ts` **devono matchare l'albero 1:1** del poster originale *Map of Cybersecurity Domains - Henry Jiang*. Aggiungere voci è consentito *solo se arricchiscono senza rompere l'architettura base* e mantengono i link di dipendenza logica intatta.
