/* QUABX category taxonomy — 36 categories in 4 groups (source: QUABX CATEGORIES.pdf). */

export type GroupId = "A" | "B" | "C" | "D";

export const GROUPS: { id: GroupId; name: string; short: string; blurb: string }[] = [
  {
    id: "A",
    name: "Core engineering & manufacturing",
    short: "Core",
    blurb: "Shop-floor processes, trades, maintenance and quality: the foundation of industrial sourcing.",
  },
  {
    id: "B",
    name: "Advanced engineering & digital manufacturing",
    short: "Advanced",
    blurb: "Design, automation, electronics, semiconductors and the digital layer of the modern factory.",
  },
  {
    id: "C",
    name: "Sector-specific advanced & specialised",
    short: "Sector",
    blurb: "Specialist capability for regulated and demanding industries, from aerospace to pharma.",
  },
  {
    id: "D",
    name: "Industrial support, supply chain & professional",
    short: "Support",
    blurb: "Procurement, logistics, safety, projects, technical sales and training that keep industry running.",
  },
];

type Raw = { t: string; code: string; g: GroupId; s: string[]; note?: string };

const RAW: Raw[] = [
  {
    t: "Mechanical Engineering & General Manufacturing", code: "MEC", g: "A",
    s: ["Mechanical assembly and fitting", "Bench fitting and hand tools", "Industrial machinery assembly", "Machine maintenance and repair", "Pumps, compressors and gearbox maintenance", "Shafts, bearings, couplings and transmission systems", "Mechanical drafting", "Mechanical inspection", "Hydraulic and pneumatic systems", "Industrial equipment installation", "Preventive and breakdown maintenance"],
  },
  {
    t: "CNC Machining & Precision Manufacturing", code: "CNC", g: "A",
    s: ["CNC turning and lathe operation", "CNC milling and machining centres", "VMC and HMC operation", "3-axis, 4-axis and 5-axis machining", "CNC programming: G-code and M-code", "CAM programming", "Swiss-type CNC turning", "Multi-axis mill-turn machining", "Precision grinding", "Jig boring and honing", "EDM, wire EDM and sinker EDM", "Micro-machining", "Tool setting and offset management", "Cutting-tool selection and optimisation", "First-piece inspection and process validation"],
  },
  {
    t: "Welding, Fabrication & Metalworking", code: "WLD", g: "A",
    s: ["SMAW / ARC welding", "MIG / MAG welding", "TIG welding", "Gas welding and cutting", "Plasma cutting", "Laser cutting", "Oxy-fuel cutting", "Sheet-metal fabrication", "Structural steel fabrication", "Pipe welding and fabrication", "Pressure-vessel fabrication", "Aluminium and stainless-steel fabrication", "Robotic welding", "Welding inspection", "Welding procedure and welder qualification support"],
  },
  {
    t: "Foundry, Casting, Forging & Metal Forming", code: "FCF", g: "A",
    s: ["Sand casting", "Investment casting", "Die casting", "Gravity and pressure casting", "Pattern making", "Mould and core making", "Melting and furnace operation", "Casting simulation", "Forging and press operation", "Hot and cold forging", "Rolling and extrusion", "Sheet-metal stamping", "Press-tool operation", "Heat treatment", "Foundry quality control"],
  },
  {
    t: "Electrical Engineering & Industrial Electrical", code: "ELE", g: "A",
    s: ["Industrial electrical wiring", "Motors and generators", "Transformers", "Electrical panels and switchgear", "Motor control centres", "Power distribution", "Industrial cable installation", "Electrical testing", "Earthing and protection systems", "Electrical maintenance", "VFD and motor drives", "Industrial electrical troubleshooting", "Electrical design and estimation"],
  },
  {
    t: "Electronics & Instrumentation", code: "EIN", g: "A",
    s: ["Electronic circuit assembly", "PCB assembly and soldering", "SMT and through-hole technology", "PCB testing and rework", "Analog and digital electronics", "Sensors and transducers", "Industrial instrumentation", "Control and measurement systems", "Calibration", "Process instrumentation", "SCADA instrumentation", "Industrial communication interfaces", "Electronic product testing"],
  },
  {
    t: "Civil, Structural & Industrial Construction", code: "CIV", g: "A",
    s: ["Civil construction", "Industrial building construction", "Structural steel erection", "RCC works", "Industrial flooring", "Surveying and levelling", "Quantity surveying", "Construction planning", "Structural detailing", "Rebar fabrication", "Industrial piping supports", "Site supervision", "Project estimation", "Construction safety"],
  },
  {
    t: "Industrial Maintenance, Utilities & Facilities", code: "MNT", g: "A",
    s: ["Mechanical maintenance", "Electrical maintenance", "Instrumentation maintenance", "HVAC maintenance", "Chiller and refrigeration maintenance", "Boiler operation", "Compressor and air-system maintenance", "Water-treatment plant operation", "Pumps and pipeline maintenance", "Industrial utilities", "Facility management", "Condition monitoring", "Reliability engineering", "Lubrication management"],
  },
  {
    t: "Production, Operations & Industrial Management", code: "OPS", g: "A",
    s: ["Production planning and control", "Manufacturing operations", "Industrial supervision", "Assembly-line management", "Lean manufacturing", "Kaizen and 5S", "Six Sigma", "Industrial engineering", "Work-study and time-motion studies", "Capacity planning", "Production scheduling", "Inventory and stores management", "Supply chain operations", "Manufacturing cost estimation"],
  },
  {
    t: "Quality Assurance, Testing & Inspection", code: "QAI", g: "A",
    s: ["Quality control inspection", "Dimensional inspection", "CMM operation", "GD&T inspection", "Vernier, micrometer and gauges", "Non-destructive testing (NDT)", "Ultrasonic testing", "Radiographic testing", "Magnetic particle testing", "Dye penetrant testing", "Hardness and material testing", "Metallography", "Calibration and metrology", "Quality documentation", "Supplier quality engineering", "Root cause analysis and CAPA"],
  },
  {
    t: "CAD, CAM, CAE & Engineering Design", code: "CAE", g: "B",
    s: ["2D and 3D CAD drafting", "Parametric modelling", "Mechanical product design", "Sheet-metal design", "Tool and die design", "Mould design", "Assembly design", "GD&T and tolerance analysis", "CNC CAM programming", "Finite Element Analysis (FEA)", "Computational Fluid Dynamics (CFD)", "Structural simulation", "Thermal simulation", "Kinematic and dynamic simulation", "Product lifecycle management (PLM)", "Engineering change management"],
    note: "Software skills recorded separately: SolidWorks, CATIA, Siemens NX, Creo, AutoCAD, Fusion, Inventor, Mastercam, HyperMesh, ANSYS and similar tools.",
  },
  {
    t: "Robotics & Industrial Automation", code: "ROB", g: "B",
    s: ["Industrial robot programming", "Robotic arm operation", "Robot integration", "Robotic welding", "Pick-and-place automation", "PLC programming", "HMI development", "SCADA development", "DCS systems", "Servo systems", "Motion control", "Machine vision", "Industrial sensors", "Automated guided vehicles (AGVs)", "Autonomous mobile robots (AMRs)", "Collaborative robots (cobots)", "Industrial automation commissioning"],
  },
  {
    t: "Embedded Systems & Firmware Engineering", code: "EMB", g: "B",
    s: ["Embedded C and C++", "Microcontroller programming", "ARM architecture", "AVR and PIC microcontrollers", "ESP32 and Arduino development", "RTOS and real-time firmware", "Embedded Linux", "Device drivers", "Firmware development", "PCB hardware interfacing", "IoT device development", "CAN, LIN, SPI, I²C and UART", "Automotive embedded systems", "Sensor integration", "Edge computing", "Hardware debugging and validation", "Firmware security and testing"],
  },
  {
    t: "Semiconductor, VLSI & Microelectronics", code: "SEM", g: "B",
    s: ["Semiconductor process engineering", "Wafer fabrication", "Photolithography", "Thin-film deposition", "Etching and doping", "Cleanroom operations", "Semiconductor packaging", "IC design", "Digital and analog VLSI", "RTL design", "Verilog and SystemVerilog", "FPGA design", "ASIC design", "Physical design", "Design verification", "DFT and semiconductor testing", "Failure analysis", "Semiconductor equipment maintenance"],
  },
  {
    t: "Additive Manufacturing, 3D Printing & Rapid Prototyping", code: "AM", g: "B",
    s: ["FDM / FFF 3D printing", "SLA and DLP printing", "SLS printing", "SLM / LPBF metal printing", "Electron beam melting", "Binder jetting", "Directed energy deposition", "Metal powder handling", "3D scanning", "Reverse engineering", "Generative design", "Topology optimisation", "Support structure optimisation", "Additive manufacturing process engineering", "Post-processing and finishing", "Prototype testing and validation"],
  },
  {
    t: "Industrial IoT, Smart Manufacturing & Industry 4.0", code: "IOT", g: "B",
    s: ["Industrial IoT architecture", "Smart sensor integration", "Machine connectivity", "OPC UA", "MQTT", "Industrial Ethernet", "Edge computing", "Manufacturing execution systems (MES)", "Digital production monitoring", "Predictive maintenance", "Condition monitoring", "Smart factory integration", "Industrial data acquisition", "OEE analytics", "Manufacturing dashboard development", "Digital thread implementation"],
  },
  {
    t: "Artificial Intelligence, Data Science & Industrial Analytics", code: "AI", g: "B",
    s: ["Python for engineering", "Industrial data analytics", "Machine learning", "Deep learning", "Computer vision", "AI-based defect detection", "Predictive quality", "Predictive maintenance models", "Process optimisation", "Manufacturing data engineering", "Statistical process control analytics", "Generative AI for engineering", "AI-assisted design", "Production forecasting", "Industrial knowledge systems", "AI model deployment at the edge"],
  },
  {
    t: "Digital Twin, Simulation & Virtual Engineering", code: "DTW", g: "B",
    s: ["Digital twin development", "Virtual commissioning", "Discrete-event simulation", "Factory simulation", "Process simulation", "Digital product models", "Real-time system simulation", "Structural digital twins", "Thermal digital twins", "Fluid-flow simulation", "Simulation-based optimisation", "Model-based systems engineering", "Simulation data integration", "Virtual reality engineering", "Augmented reality maintenance"],
  },
  {
    t: "Industrial Software, IT & Cybersecurity", code: "ISW", g: "B",
    s: ["Industrial application development", "Manufacturing ERP", "MES software", "PLM software administration", "Industrial database development", "API and system integration", "Cloud manufacturing platforms", "Industrial network administration", "OT cybersecurity", "SCADA security", "PLC network security", "Industrial data protection", "Software testing and validation", "DevOps and industrial software deployment"],
  },
  {
    t: "Product Development, Prototyping & Systems Engineering", code: "PDE", g: "B",
    s: ["New product development", "Product architecture", "Systems engineering", "Requirements engineering", "Product lifecycle management", "Design for Manufacturing (DFM)", "Design for Assembly (DFA)", "Design for Reliability (DFR)", "Prototype development", "Engineering validation", "Design verification", "Value engineering", "Failure Mode and Effects Analysis (FMEA)", "Product certification support", "Engineering project management"],
  },
  {
    t: "Aerospace & Aviation Engineering", code: "AER", g: "C",
    s: ["Aircraft structural design", "Aircraft systems engineering", "Aerodynamics", "Aircraft propulsion", "Gas turbine engineering", "Aircraft engine maintenance", "Avionics", "Flight control systems", "Aircraft electrical systems", "Composite aircraft structures", "Aerospace CNC machining", "Aerospace precision fabrication", "Aircraft assembly", "Aircraft inspection and maintenance", "NDT for aerospace", "Fatigue and fracture mechanics", "Aerospace quality and configuration management", "UAV and drone engineering", "Flight testing and certification support"],
  },
  {
    t: "Marine, Shipbuilding & Offshore Engineering", code: "MAR", g: "C",
    s: ["Naval architecture", "Marine engineering", "Ship structural design", "Hull fabrication", "Marine propulsion systems", "Marine diesel engines", "Ship electrical systems", "Marine automation", "Ship piping systems", "Offshore structural engineering", "Subsea engineering", "Offshore installation engineering", "Dynamic positioning systems", "Marine HVAC and refrigeration", "Cryogenic vessel and LNG carrier engineering", "Cryogenic material and welding engineering", "Marine corrosion protection", "Ship repair and dry-dock operations", "Marine NDT and inspection", "Polar and ice-class vessel engineering"],
  },
  {
    t: "Automotive, Electric Vehicles & Mobility", code: "AUT", g: "C",
    s: ["Automotive design engineering", "Powertrain engineering", "Engine and transmission systems", "Electric vehicle architecture", "Battery pack design", "Battery management systems (BMS)", "EV motor and inverter engineering", "Vehicle control systems", "Automotive embedded software", "Automotive electronics", "ADAS engineering", "Autonomous driving systems", "Automotive functional safety", "Vehicle testing and validation", "Charging infrastructure", "Thermal management", "Lightweight structures", "Automotive quality engineering"],
  },
  {
    t: "Defence, Space & Satellite Engineering", code: "DEF", g: "C",
    s: ["Defence systems engineering", "Military vehicle engineering", "Aerospace defence components", "Radar systems", "Electronic warfare systems", "Secure communications", "Guidance and navigation systems", "Satellite design", "Spacecraft structures", "Satellite propulsion", "Ground station engineering", "Space electronics", "Space-qualified materials", "Launch vehicle engineering", "Rocket propulsion", "Thermal protection systems", "Mission systems engineering", "Space environment testing"],
  },
  {
    t: "Oil, Gas, Petrochemical & Process Engineering", code: "OGP", g: "C",
    s: ["Process engineering", "Chemical plant design", "Refinery engineering", "Pipeline engineering", "Pressure vessel design", "Piping stress analysis", "Rotating equipment engineering", "Pump and compressor engineering", "Valve engineering", "Tank design and fabrication", "Process control and instrumentation", "Process safety engineering", "Hazard and operability studies (HAZOP)", "Corrosion engineering", "Inspection and integrity management", "LNG and gas processing", "Offshore process engineering", "Industrial commissioning"],
  },
  {
    t: "Energy, Renewables & Nuclear Technologies", code: "ENR", g: "C",
    s: ["Thermal power engineering", "Turbine engineering", "Boiler engineering", "Hydropower engineering", "Solar photovoltaic engineering", "Solar thermal engineering", "Wind turbine engineering", "Wind blade composites", "Battery energy storage systems", "Grid integration", "Smart grid engineering", "Power electronics", "Hydrogen production technologies", "Fuel-cell engineering", "Nuclear systems engineering", "Nuclear instrumentation", "Nuclear quality assurance", "Energy auditing and efficiency"],
  },
  {
    t: "Medical Devices, Biomedical & Healthcare Engineering", code: "MED", g: "C",
    s: ["Biomedical equipment maintenance", "Medical device design", "Surgical instrument manufacturing", "Diagnostic equipment engineering", "Medical electronics", "Medical imaging systems", "Medical robotics", "Prosthetics and orthotics", "Implant manufacturing", "Precision medical machining", "Medical-grade polymers", "Cleanroom manufacturing", "Medical device testing", "Quality and regulatory engineering", "Biocompatibility testing coordination", "Clinical engineering"],
  },
  {
    t: "Pharmaceutical, Biotechnology & Life Sciences Engineering", code: "PHA", g: "C",
    s: ["Pharmaceutical process engineering", "Bioprocess engineering", "Fermentation technology", "Bioreactor operation", "Cleanroom engineering", "Sterile manufacturing", "Process validation", "Pharmaceutical equipment maintenance", "GMP production operations", "HVAC and clean utilities", "Water-for-injection systems", "Packaging and filling automation", "Laboratory instrumentation", "Quality control laboratory operations", "Biotechnology manufacturing", "Automation and digitalisation in life sciences"],
  },
  {
    t: "Food Processing, Agriculture & Industrial Biotechnology", code: "FOD", g: "C",
    s: ["Food process engineering", "Food machinery design", "Dairy processing technology", "Meat and seafood processing technology", "Beverage processing", "Grain milling and processing", "Industrial refrigeration", "IQF and freezing technology", "Thermal processing and sterilisation", "Food packaging machinery", "Hygienic design engineering", "CIP and SIP systems", "Agricultural machinery engineering", "Precision agriculture", "Farm automation", "Food quality and laboratory testing", "Industrial biotechnology and bio-processing"],
  },
  {
    t: "Environmental, Water, HVAC & Sustainable Engineering", code: "ENV", g: "C",
    s: ["Water-treatment engineering", "Wastewater-treatment engineering", "Desalination systems", "Membrane technology", "Industrial effluent treatment", "Solid waste management", "Air pollution control", "Industrial filtration", "HVAC system design", "Refrigeration engineering", "Heat exchanger design", "Thermal systems engineering", "Energy management", "Carbon accounting", "Environmental monitoring", "Sustainable manufacturing", "Industrial water reuse", "Green hydrogen and decarbonisation systems"],
  },
  {
    t: "Industrial Supply Chain, Procurement & Sourcing", code: "SCM", g: "D",
    s: ["Strategic sourcing", "Vendor development", "Supplier qualification", "Purchase management", "Technical procurement", "RFQ and quotation management", "Cost estimation and negotiation", "Material planning", "MRP and ERP operations", "Inventory control", "Warehouse management", "Supplier performance management", "Contract management", "International sourcing", "Import/export documentation"],
  },
  {
    t: "Logistics, Warehousing & Material Handling", code: "LOG", g: "D",
    s: ["Industrial logistics", "Freight forwarding", "Export packing", "Forklift operation", "Crane and hoist operation", "Rigging and slinging", "Heavy-lift planning", "Warehouse automation", "Conveyor systems", "Automated storage and retrieval systems", "Fleet management", "Transport planning", "Cold-chain logistics", "Dangerous-goods handling", "Shipping and port operations"],
  },
  {
    t: "Industrial Safety, Health & Environment (HSE)", code: "HSE", g: "D",
    s: ["Industrial safety supervision", "Occupational health and safety", "Fire safety", "Electrical safety", "Machine guarding", "Confined-space safety", "Working-at-height safety", "Permit-to-work systems", "Risk assessment", "Process safety management", "Environmental compliance", "Emergency response", "Industrial hygiene", "Safety auditing", "Incident investigation"],
  },
  {
    t: "Project Engineering, Installation & Commissioning", code: "PRJ", g: "D",
    s: ["Project engineering", "Project planning and scheduling", "EPC project coordination", "Plant installation", "Equipment erection", "Mechanical commissioning", "Electrical commissioning", "Instrumentation commissioning", "Factory acceptance testing (FAT)", "Site acceptance testing (SAT)", "Installation qualification", "Operational qualification", "Turnaround and shutdown management", "Site engineering", "Project controls and cost management"],
  },
  {
    t: "Technical Sales, Service & Customer Support", code: "TSS", g: "D",
    s: ["Industrial technical sales", "Application engineering", "Pre-sales engineering", "After-sales service", "Field service engineering", "Equipment troubleshooting", "Customer technical support", "Product demonstrations", "Technical proposal preparation", "Tender and bid management", "Service contract management", "Spare parts sales", "Export sales", "Key account management", "Industrial product management"],
  },
  {
    t: "Technical Education, Training & Research", code: "EDU", g: "D",
    s: ["Industrial skills instruction", "ITI and vocational training", "CNC training", "Welding training", "Robotics training", "PLC and automation training", "CAD/CAM training", "Additive manufacturing training", "Apprenticeship coordination", "Engineering research", "Materials research", "Product innovation", "Laboratory research", "Industrial R&D", "Technology transfer"],
  },
];

export const CATEGORIES = RAW.map((c, i) => ({
  ...c,
  n: String(i + 1).padStart(2, "0"),
  code: `CAT-${c.code}`,
  slug: `cat-${c.code.toLowerCase()}`,
}));

export type Category = (typeof CATEGORIES)[number];

export const TOTAL_SKILLS = CATEGORIES.reduce((sum, c) => sum + c.s.length, 0);
