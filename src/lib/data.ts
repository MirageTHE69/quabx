/* Content for the QUABX homepage. Sample data is illustrative. */

export const LINKS = {
  find: "#find",
  rfq: "#rfq",
  suppliers: "#suppliers",
  knowledge: "#knowledge",
  pricing: "#pricing",
  join: "#pricing",
  signIn: "#suppliers",
  verification: "#verification",
  capabilities: "#cap",
  industries: "#ind",
};

export const NAV_LINKS = [
  { label: "Find Suppliers", href: LINKS.find },
  { label: "Post an RFQ", href: LINKS.rfq },
  { label: "For Suppliers", href: LINKS.suppliers },
  { label: "Knowledge Centre", href: LINKS.knowledge },
  { label: "Pricing", href: LINKS.pricing },
];

export const CAPABILITIES = [
  ["CNC Machining & Precision Engineering", "Turning · Milling · 5-axis · Grinding · EDM", "CAT-CNC"],
  ["Casting, Forging & Forming", "Sand · Investment · Die · Closed-die forging", "CAT-CFF"],
  ["Sheet Metal & Welding", "Laser · Bending · TIG/MIG · Fabrication", "CAT-SMW"],
  ["Piping, Pressure Vessels & Process Equipment", "ASME · Heat exchangers · Skids", "CAT-PPV"],
  ["Additive Manufacturing", "SLM · SLS · FDM · Binder jet", "CAT-AM"],
  ["Composites", "Layup · RTM · Filament winding", "CAT-CMP"],
  ["Electronics & Embedded", "PCB · PCBA · Firmware · Harness", "CAT-ELE"],
  ["VLSI & Semiconductor", "Design · Verification · Packaging", "CAT-VLS"],
  ["Aerospace", "AS9100 · NADCAP processes · Tooling", "CAT-AER"],
  ["Marine, Offshore & Cryogenic", "Class-approved · LNG · Subsea", "CAT-MOC"],
  ["Industrial Machinery", "SPMs · Assemblies · Gearboxes", "CAT-IMC"],
  ["Surface & Heat Treatment", "Plating · Coating · Nitriding · Hardening", "CAT-SHT"],
  ["Testing, Inspection & Calibration", "NDT · CMM · NABL labs", "CAT-TIC"],
  ["Engineering Design & CAE", "CAD · FEA · CFD · DFM", "CAT-CAE"],
  ["Materials & Components", "Bar stock · Plate · Fasteners · Bearings", "CAT-MAT"],
].map(([t, s, code], i) => ({ t, s, code, n: String(i + 1).padStart(2, "0") }));

export const STEP_TITLES = [
  "Define requirement",
  "Discover suppliers",
  "Invite & receive quotes",
  "Evaluate",
  "Award",
];

export const MATCHES = [
  { i: "SA", name: "Supplier A", loc: "Vadodara, GJ · 5-axis, Ø400 envelope", lvl: "CNC · S2", fit: "6/6 fit" },
  { i: "SB", name: "Supplier B", loc: "Rajkot, GJ · Turning centres", lvl: "CNC · S1", fit: "5/6 fit" },
  { i: "SC", name: "Supplier C", loc: "Pune, MH · Job shop", lvl: "CNC · S1", fit: "5/6 fit" },
];

export const INVITES = [
  { name: "Supplier A", s: "Quoted", tone: "ok" },
  { name: "Supplier B", s: "Quoted", tone: "ok" },
  { name: "Supplier C", s: "Clarification", tone: "mid" },
  { name: "Supplier D", s: "Viewed", tone: "wait" },
] as const;

export const QUOTES = [
  { n: "Supplier A", c: "12/12", d: "None", l: "4 wk", p: "₹1,86,400" },
  { n: "Supplier B", c: "11/12", d: "Ra 3.2", l: "3 wk", p: "₹1,72,000" },
  { n: "Supplier C", c: "10/12", d: "2 open", l: "6 wk", p: "₹1,58,900" },
];

export const LEVELS = [
  ["S0", "Contact verified", "Phone and email confirmed."],
  ["S1", "Business verified", "GST, registration and address checked."],
  ["S2", "Capability reviewed", "Process evidence, machines and samples reviewed."],
  ["S3", "Site assessed", "Facility independently assessed on site."],
  ["S4", "Transaction performance", "Track record from completed QUABX orders."],
] as const;

const ICONS = {
  aero: "M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z",
  auto: "M3 17v-4l2-5h14l2 5v4H3zM7 17v2M17 17v2M12 9l-1.5 2.5h3L12 14",
  oil: "M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z",
  marine: "M12 22V8M5 12H2a10 10 0 0 0 20 0h-3M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  power: "M13 2L3 14h9l-1 8 10-12h-9z",
  elec: "M6 6h12v12H6zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4",
  rail: "M6 3h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM4 10h16M8 16l-2 5M16 16l2 5",
  med: "M4 4h16v16H4zM12 8v8M8 12h8",
  food: "M3 18h18M5 18v-6h14v6M8 12V8M12 12V6M16 12V8",
  cons: "M2 18h20M4 18v-2a8 8 0 0 1 16 0v2M10 9V5h4v4",
  robo: "M4 21h8M8 21v-5l5-5 4 2M17 13l3-3M13 11l-2-4 3-2",
  def: "M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z",
};

export const INDUSTRIES = (
  [
    ["Aerospace", "aero"], ["Automotive & EV", "auto"], ["Oil & Gas", "oil"], ["Marine", "marine"],
    ["Power & Energy", "power"], ["Electronics", "elec"], ["Railways", "rail"], ["Medical Devices", "med"],
    ["Food Machinery", "food"], ["Construction", "cons"], ["Industrial Automation", "robo"], ["Defence", "def"],
  ] as const
).map(([t, k], i) => ({ t, p: ICONS[k], code: `IND-${String(i + 1).padStart(2, "0")}` }));

export const GUIDES = [
  { tag: "Procurement", n: "G-02", t: "Procurement & Sourcing Guide", d: "Building a shortlist, qualifying suppliers and running a fair RFQ." },
  { tag: "Quality", n: "G-03", t: "Quality & Supplier Development", d: "PPAP, FAI and growing suppliers into long-term partners." },
  { tag: "RFQ", n: "G-04", t: "How to Prepare an Effective RFQ", d: "What suppliers need to quote accurately the first time." },
  { tag: "Metrology", n: "G-05", t: "GD&T & Metrology", d: "Datums, tolerance frames and how parts are actually measured." },
  { tag: "Technology", n: "G-06", t: "Manufacturing Technology", d: "Choosing between processes for cost, lead time and quality." },
];

export const PLANS = [
  { name: "Starter", price: "Free", per: "", d: "List your company and declare capabilities.", f: ["Company profile", "Self-declared capabilities", "Browse open RFQs", "Knowledge Centre access"], cta: "Start Free", hot: false },
  { name: "Verified", price: "₹1,499", per: "/mo", d: "Get business-verified and respond to RFQs.", f: ["Business verification (S1)", "Evidence uploads with validity", "Respond to matched RFQs", "Verified badge per process"], cta: "Get Verified", hot: true },
  { name: "Professional", price: "₹3,999", per: "/mo", d: "Full capability profile for growing shops.", f: ["Capability review (S2)", "Equipment & capacity listing", "Facility gallery", "RFQ analytics"], cta: "Go Professional", hot: false },
  { name: "Enterprise", price: "Custom", per: "", d: "Multi-plant groups and buyer organisations.", f: ["Multi-plant profiles", "Team seats & roles", "Site assessment (S3) support", "Dedicated onboarding"], cta: "Talk to Us", hot: false },
];

export const BUYER_POINTS = [
  ["Structured RFQs", "Process, material, tolerance, quantity and delivery in one format."],
  ["Drawings by revision", "Every quote is tied to the drawing revision it was priced on."],
  ["Capture deviations", "Suppliers declare exceptions up front, not after PO."],
  ["Compare quotes", "Technical compliance side by side before price."],
  ["Decision records", "Why a supplier was awarded, kept for audit."],
];

export const SUPPLIER_POINTS = [
  ["Capability profile", "Processes, materials and part envelopes, listed per process."],
  ["Equipment & capacity", "Machines, bed sizes, axes and available capacity."],
  ["Certificates & evidence", "Upload proof with validity dates. Expired items flag themselves."],
  ["Matched RFQs", "Receive requirements that fit your verified capability."],
];

export const FOOTER_COLS = [
  { h: "Explore", links: [["Find Suppliers", LINKS.find], ["Post an RFQ", LINKS.rfq], ["Capabilities", LINKS.capabilities], ["Industries", LINKS.industries]] },
  { h: "Resources", links: [["Knowledge Centre", LINKS.knowledge], ["Verification", LINKS.verification], ["RFQ Guide", LINKS.knowledge], ["FAQ", "#faq"]] },
  { h: "For Business", links: [["Join as Supplier", LINKS.join], ["Buyer Accounts", LINKS.suppliers], ["Pricing", LINKS.pricing], ["Enterprise", LINKS.pricing]] },
  { h: "Company", links: [["About", "#about"], ["Contact", "#contact"], ["Careers", "#careers"], ["Terms", "#terms"], ["Privacy", "#privacy"]] },
];
