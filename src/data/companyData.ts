export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  shortDesc: string;
  applications: string[];
  features: string[];
  technicalInfo?: string;
  standards?: string[];
  image: string;
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  shortDesc?: string;
  tags?: string[];
  keyComponents: string[];
  capabilities: string[];
  iconName: string;
  image: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export const COMPANY_INFO = {
  name: "VERSATECH EPC",
  tagline: "Engineering Reliable Material Handling Solutions",
  subtitle: "Design, Engineering, Manufacturing & Supply of Material Handling Systems and Industrial Equipment.",
  foundedYear: 2008,
  city: "Nagpur",
  state: "Maharashtra",
  country: "India",
  address: "33, Sarvashree Nagar, Umred Road, Dighori, Nagpur – 440034, Maharashtra, India",
  phones: ["+91 9096500330", "+91 7507579005"],
  emails: {
    sales: "sales@versatechepc.com",
    info: "info@versatechepc.com",
    primary: "versatechepc@gmail.com"
  },
  website: "www.versatechepc.com",
  whatsapp: "919096500330",
  standards: ["ASME Section VIII", "IS 2825", "IS 17938"],
  chpCapability: "Up to 100 TPH",
  corePillars: [
    { title: "Durability", desc: "Heavy-duty structural integrity built for extreme industrial operations." },
    { title: "Efficiency", desc: "Optimized material flow design reducing energy consumption and throughput bottlenecks." },
    { title: "Low Maintenance", desc: "Precision engineering with accessible component layouts for minimum downtime." },
    { title: "Reliable Performance", desc: "Rigorously tested mechanical and pneumatic systems ensuring high operational availability." },
    { title: "Customized Engineering", desc: "Tailored design solutions matched to precise site constraints and process flow specifications." },
    { title: "Safety First", desc: "Integrated explosion prevention, pressure relief, and operator safety mechanisms." },
    { title: "Environmental Responsibility", desc: "High-efficiency dust collection and sealed pneumatic conveying to eliminate spillage." }
  ]
};

export const SOLUTIONS: Solution[] = [
  {
    id: "ash-handling-systems",
    title: "Ash Handling Systems",
    subtitle: "Dense-Phase Pneumatic & Mechanical Fly Ash / Bottom Ash Conveying",
    description: "VERSATECH EPC designs and manufactures advanced Ash Handling Systems tailored for thermal power plants and process industries. Utilizing dense-phase pneumatic conveying technology, our systems ensure leak-proof, dust-free transfer of fly ash and bottom ash across long distances with minimal power consumption and low wear.",
    shortDesc: "Dense-phase pneumatic fly ash & bottom ash conveying with leak-proof high reliability.",
    tags: ["Dense Phase Vessels", "Dome Valves", "Pneumatic Ash Conveying"],
    keyComponents: [
      "Dense Phase Ash Vessels",
      "Dome Valves & Rotary Airlock Valves",
      "Alloy CI & Basalt Lined Bends",
      "Silo Pressure Release Valves",
      "Terminal End Boxes & Ash Conditioners"
    ],
    capabilities: [
      "Dense-phase pneumatic fly ash conveying up to 500+ meters",
      "Bottom ash handling & wet/dry ash conditioning",
      "High reliability with ceramic/basalt wear-resistant lining",
      "Low velocity conveying minimizing pipe erosion"
    ],
    iconName: "Flame",
    image: "/images/ash_handling_sys.jpg"
  },
  {
    id: "coal-handling-systems",
    title: "Coal Handling Systems",
    subtitle: "Turnkey CHP Equipment & Systems Up to 100 TPH",
    description: "Complete Coal Handling Plants (CHP) engineered for power generation, cement, steel, and industrial boilers. Stated profile capabilities up to 100 TPH throughput, including crushing, screening, magnetic separation, dust suppression, and automated belt conveyor networks.",
    shortDesc: "Turnkey Coal Handling Plants (CHP) up to 100 TPH throughput with crushing & screening.",
    tags: ["Up to 100 TPH", "Belt Conveyors", "Crushers & Screens"],
    keyComponents: [
      "Heavy-Duty Belt Conveyor Systems",
      "Inline Magnetic Separator (ILMS) & Suspended Magnets",
      "Industrial Coal Crushers & Vibrating Screens",
      "Dry Fog Dust Suppression & Extraction Systems",
      "Flap Gates, Rack & Pinion Gates, Belt Feeders (RBF)"
    ],
    capabilities: [
      "Coal Handling Plant design & execution up to 100 TPH",
      "Effective dust suppression minimizing explosive coal dust hazmat",
      "Heavy-duty crushing and sized product discharge",
      "Automated tripper and chute diverting systems"
    ],
    iconName: "Container",
    image: "/images/coal_handling_sys.jpg"
  },
  {
    id: "material-handling-equipment",
    title: "Material Handling Equipment",
    subtitle: "Bulk Solids Conveying, Elevating & Feeding Infrastructure",
    description: "Versatile bulk material handling equipment designed for continuous duty in harsh industrial environments. From granular minerals and cement clinker to grain and chemical powders, we deliver custom-engineered belt, screw, air slide, and bucket elevator systems.",
    shortDesc: "Heavy-duty conveying, elevating, and feeding systems built for extreme industrial duty.",
    tags: ["Bucket Elevators", "Screw Conveyors", "Air Slides"],
    keyComponents: [
      "Belt, Screw & Air Slide Conveyors",
      "Heavy-Duty Bucket Elevators",
      "Submerged Scrapper Conveyors & Clinker Grinders",
      "Telescopic Chutes with Wear Liners",
      "Vibrating Feeders, Screens & Grab Buckets"
    ],
    capabilities: [
      "Custom conveyor length and incline geometry",
      "Enclosed air-slide conveying for fluidizable fine powders",
      "High-lift bucket elevators for heavy mineral ores",
      "Zero-spillage telescopic loading chutes for truck & wagon loading"
    ],
    iconName: "Truck",
    image: "/images/versatech_hero.jpg"
  },
  {
    id: "dust-pollution-control",
    title: "Dust & Pollution Control",
    subtitle: "Industrial Air Filtration, Extraction & Suppression",
    description: "Comprehensive industrial environmental solutions engineered to capture air-borne particulate matter at source. We supply bag filter systems, dry fog dust suppression, and high-efficiency industrial ventilation networks.",
    shortDesc: "High-efficiency pulse-jet bag filters and dry fog dust suppression capturing dust at source.",
    tags: ["Pulse-Jet Bag Filters", "Dry Fog Suppression", "Exhaust Ducting"],
    keyComponents: [
      "Pulse-Jet Bag Filter Systems",
      "Dust Extraction Hoods & Ducting Networks",
      "Dry Fog Dust Suppression Nozzles & Controls",
      "Adaptable Dust Control Modules",
      "High-Capacity Industrial Centrifugal Fans"
    ],
    capabilities: [
      "Source capturing of coal, cement, and chemical dusts",
      "Sub-micron particulate filtration efficiency",
      "Minimal water addition dry fog technology for belt transfer points",
      "Compliance with environmental emission norms"
    ],
    iconName: "Wind",
    image: "/images/dust_pollution_control.jpg"
  },
  {
    id: "valves-flow-control",
    title: "Valves & Flow Control",
    subtitle: "Precision Material Isolation & Metering Valves",
    description: "Heavy-duty industrial valves designed specifically for abrasive materials, high temperatures, and pneumatic pressure differentials. Engineered for tight shut-off, rapid cycle times, and minimal maintenance.",
    shortDesc: "Precision abrasion-resistant dome valves, knife gates, and airlocks for tight shut-off.",
    tags: ["Dome Valves", "Rotary Airlocks", "Knife Gates"],
    keyComponents: [
      "Inflatable Dome Valves",
      "Rotary Airlock Valves",
      "Pneumatic & Manual Slide Gate Valves",
      "Knife Gate Valves & Diverter Gates",
      "Rack & Pinion & Rod Gates"
    ],
    capabilities: [
      "Pressure-tight sealing under pneumatic ash conveying conditions",
      "Abrasion-resistant alloy seating surfaces",
      "Pneumatic, motor-operated, or manual activation options",
      "Quick overhaul designs with drop-in replacement seals"
    ],
    iconName: "Settings",
    image: "/images/valves_flow_control.jpg"
  },
  {
    id: "industrial-fabrication-epc",
    title: "Industrial Fabrication & EPC",
    subtitle: "Structural Steel, Pressure Vessels & Site Erection",
    description: "End-to-end industrial EPC capability combining structural steel fabrication, pressure vessel manufacturing according to ASME Section VIII / IS standards, heavy ducting, industrial hoppers, and complete field erection.",
    shortDesc: "ASME Section VIII pressure vessels, heavy structural fabrication, silos & turnkey erection.",
    tags: ["ASME Section VIII", "Storage Silos", "Turnkey Erection"],
    keyComponents: [
      "ASME Section VIII / IS 2825 / IS 17938 Compliant Vessels",
      "Storage Silos & Heavy Process Hoppers",
      "Air Receivers & Liquid Fuel Storage Tanks",
      "Structural Steel Support Trestles & Platforms",
      "Site Piping, Erection & Commissioning"
    ],
    capabilities: [
      "Precision shop fabrication with certified NDT welding",
      "Pressure vessel design adhering to code specifications",
      "Turnkey site erection and structural steel assembly",
      "System modification and plant brownfield revamping"
    ],
    iconName: "Wrench",
    image: "/images/pressure_vessels_hero.jpg"
  }
];

export const PRODUCT_CATEGORIES = [
  { id: "ash-handling", name: "Ash Handling Systems" },
  { id: "coal-handling", name: "Coal Handling Systems" },
  { id: "material-handling", name: "Material Handling Equipment" },
  { id: "valves-gates", name: "Valves & Gates" },
  { id: "dust-control", name: "Dust & Pollution Control" },
  { id: "storage-process", name: "Storage & Process Equipment" },
  { id: "cranes-heavy", name: "Cranes & Heavy Equipment" }
];

export const PRODUCTS: Product[] = [
  // ASH HANDLING
  {
    id: "ash-vessel",
    name: "Ash Vessel",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "High-pressure rated vessel engineered for dense-phase pneumatic conveying of hot fly ash.",
    applications: ["Thermal Power Plants", "Captive Power Units", "Boiler Ash Disposal"],
    features: ["Heavy-duty pressure shell construction", "Integrated fluidizing pad array", "Top dome valve mounting flange", "Designed for abrasive ash media"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    standards: ["ASME Section VIII", "IS 2825"],
    image: "/images/products/ash-vessel.jpg"
  },
  {
    id: "spool-piece",
    name: "Spool Piece",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Heavy wall transit spool connector for ash conveying pipelines with wear-resistant lining options.",
    applications: ["Pneumatic Ash Lines", "Slurry Transfer Lines"],
    features: ["Precision machined flanges", "Optional basalt or alloy lining", "High vibration tolerance"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/spool-piece.jpg"
  },
  {
    id: "rotary-airlock-valve-ash",
    name: "Rotary Airlock Valve",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Precision rotor airlock valve for controlled discharge of fly ash from ESP hoppers and bag filters.",
    applications: ["ESP Hoppers", "Bag House Discharge", "Silo Unloading"],
    features: ["Replaceable rotor tips", "Gland packed shaft seals", "High temperature operation capable"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/rotary-airlock.jpg"
  },
  {
    id: "dome-valve-ash",
    name: "Dome Valve",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Inflatable seal spherical dome valve engineered for pressure-tight isolation in pneumatic ash systems.",
    applications: ["Dense Phase Ash Transmitters", "Silo Inlet Isolation"],
    features: ["Full bore un-obstructed passage", "Inflatable elastomeric seal", "Cuts through moving column of ash"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/dome-valve.jpg"
  },
  {
    id: "knife-gate-valve-ash",
    name: "Knife Gate Valve",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Heavy-duty bi-directional knife gate valve designed for ash hopper isolation.",
    applications: ["Boiler Bottom Ash Isolation", "Economizer Hoppers"],
    features: ["Hardfaced stainless steel gate", "Self-cleaning seat design", "Pneumatic or manual actuation"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/knife-gate.jpg"
  },
  {
    id: "fluidizing-pad",
    name: "Fluidizing Pad",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Porous aeration pad to promote ash fluidization and smooth gravity discharge in hoppers.",
    applications: ["Fly Ash Silos", "Pre-hopper Aeration", "Dense Phase Vessels"],
    features: ["Uniform air diffusion", "Temperature resistant filter fabric", "Stainless steel support casing"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/fluidizing-pad.jpg"
  },
  {
    id: "flow-pad",
    name: "Flow Pad",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "High-permeability flow aid pad ensuring continuous discharge of non-free-flowing powders.",
    applications: ["Storage Silos", "Coal Dust Hoppers", "Ash Bins"],
    features: ["Prevents bridging and rat-holing", "Low compressed air requirement", "Easy exterior installation"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/flow-pad.jpg"
  },
  {
    id: "ash-hoses",
    name: "Industrial Hoses for Ash Handling",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Flexible ceramic-lined or synthetic rubber hoses designed for abrasive pneumatic transport.",
    applications: ["Flexible Ash Line Expansion", "Vapor Extraction Hose"],
    features: ["High abrasion resistance", "Integrated wire helix for vacuum service", "Weather and heat resistant cover"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/industrial-hoses.jpg"
  },
  {
    id: "nrv-ash",
    name: "Non-Return Valve (NRV)",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Heavy-duty swing type NRV preventing backflow of ash or air into compressed air supply lines.",
    applications: ["Pneumatic Conveying Air Lines", "Compressor Discharge"],
    features: ["Robust cast steel body", "Tight elastomeric/metal seat", "Low pressure drop design"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/nrv-valve.jpg"
  },
  {
    id: "blow-valve",
    name: "Blow Valve",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Fast-acting solenoid operated pneumatic blow valve for pulse conveying and line cleaning.",
    applications: ["Dense Phase Conveying Cycles", "Pipeline Purging"],
    features: ["High flow coefficient (Cv)", "Rapid opening time", "Heavy industrial coil enclosure"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/blow-valve.jpg"
  },
  {
    id: "poppet-valve",
    name: "Poppet Valve",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Heavy duty poppet valve for quick pneumatic air injection and venting in ash vessels.",
    applications: ["Vessel Venting", "Air Injection Manifolds"],
    features: ["Positive shut-off", "Hardened seating surfaces", "Long seal life"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/poppet-valve.jpg"
  },
  {
    id: "alloy-ci-bend",
    name: "Alloy CI Bend",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Ni-Hard / Alloy Cast Iron pipe bends designed to withstand high-velocity abrasive ash impact.",
    applications: ["Pneumatic Ash Pipeline Changes in Direction"],
    features: ["Extra thick outer back wall", "High Brinell hardness casting", "Flanged ends for easy inline replacement"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/alloy-bend.jpg"
  },
  {
    id: "basalt-bend",
    name: "Cast Basalt Lined Bend",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Fused cast basalt lined steel bends providing maximum abrasion protection in ash lines.",
    applications: ["Heavy Duty Fly Ash Conveying Lines"],
    features: ["Near-zero wear rate under sliding abrasion", "Outer steel casing protection", "Extended operating lifetime"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/basalt-bend.jpg"
  },
  {
    id: "terminal-end-box",
    name: "Terminal End Box",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Target box installed at ash silo entry to decelerate ash particles and absorb impact kinetic energy.",
    applications: ["Fly Ash Silo Top Entry"],
    features: ["Replaceable heavy alloy wear back plate", "Expands air volume to drop ash velocity", "Dust-tight flanged mounting"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/terminal-box.jpg"
  },
  {
    id: "silo-pressure-release-valve",
    name: "Silo Pressure Release Valve",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Safety relief valve mounted on top of ash silos to protect vessel against pressure/vacuum surges.",
    applications: ["Ash Silos", "Cement Silos", "Bulk Powder Bins"],
    features: ["Dual action (overpressure and vacuum relief)", "Weatherproof cover", "Quick spring response"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/silo-prv.jpg"
  },
  {
    id: "ash-conditioner",
    name: "Ash Conditioner (Unloader)",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Twin-shaft paddle mixer that conditions dry fly ash with controlled water spray for dust-free truck loading.",
    applications: ["Ash Silo Dry-to-Wet Loading", "Hazardous Dust Disposal"],
    features: ["Wear-resistant paddle blades", "Regulated water atomizing manifold", "Enclosed continuous mixing trough"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/ash-conditioner.jpg"
  },
  {
    id: "ash-intake-valve",
    name: "Ash Intake Valve",
    category: "Ash Handling Systems",
    categoryId: "ash-handling",
    shortDesc: "Heavy duty intake valve installed directly beneath hopper outlets to feed ash into conveying lines.",
    applications: ["ESP Hopper Outlets", "Baghouse Outlets"],
    features: ["Abrasive dust seal", "Compact head room height", "Automatic pneumatic sequence operation"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/ash-intake.jpg"
  },

  // COAL HANDLING
  {
    id: "belt-conveyor-system",
    name: "Belt Conveyor System",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Continuous duty coal conveyor systems engineered for coal handling plants (CHP) up to 100 TPH capability.",
    applications: ["Coal Handling Plants", "Thermal Power Plants", "Captive Power Plants"],
    features: ["Heavy structural steel gantries & stringers", "High troughing idler sets", "Self-aligning & impact idlers", "Emergency pull cord & zero speed switches"],
    technicalInfo: "Engineered for CHP systems up to 100 TPH capability. Contact us for custom lengths, belt widths, and drive specifications.",
    image: "/images/products/belt-conveyor.jpg"
  },
  {
    id: "suspended-magnet",
    name: "Suspended Magnet",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Over-belt electro/permanent suspended magnet to extract tramp iron from moving coal belts.",
    applications: ["Coal Conveyor Lines", "Crusher Protection"],
    features: ["Deep magnetic penetration field", "Heavy duty oil-cooled coil design", "Suspension rig with turnbuckle adjustment"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/suspended-magnet.jpg"
  },
  {
    id: "inline-magnetic-separator",
    name: "Inline Magnetic Separator (ILMS)",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Self-cleaning cross-belt or inline magnetic separator for continuous automatic tramp metal discharge.",
    applications: ["Coal Handling Plants", "Mining Belt Lines"],
    features: ["Continuous discharge rubber belt with cleats", "Dust proof motor drive", "High gradient magnetic circuit"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/ilms.jpg"
  },
  {
    id: "flap-gate",
    name: "Flap Gate",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Two-way motorized or pneumatic flap gate for diverting coal flow between crusher streams or silos.",
    applications: ["Chute Transfer Towers", "Coal Bunker Distribution"],
    features: ["Abrasion-resistant liner plates (Hardox/HARDOX-equivalent)", "Dust-tight seal housing", "Electric actuator or pneumatic cylinder drive"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/flap-gate.jpg"
  },
  {
    id: "rack-pinion-gate-coal",
    name: "Rack & Pinion Gate",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Precision manual/motorized rack and pinion gate for regulated discharge of raw or crushed coal.",
    applications: ["Coal Hopper Outlets", "Feeder Loading Points"],
    features: ["Machined rack and pinion gear track", "Jam-resistant roller support bearings", "Handwheel or chain-wheel control"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/rack-pinion-gate.jpg"
  },
  {
    id: "industrial-crusher",
    name: "Industrial Coal Crusher",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Ring granulator / double roll coal crusher for sizing run-of-mine coal down to boiler specification.",
    applications: ["Coal Handling Plants", "Boiler Feed Prep"],
    features: ["Heavy cast steel hammers/rings", "Adjustable breaker plate clearance", "Vibration dampening subframe"],
    technicalInfo: "Integrated into CHP capacity up to 100 TPH. Contact us for technical specifications.",
    image: "/images/products/coal-crusher.jpg"
  },
  {
    id: "belt-feeder-rbf",
    name: "Belt Feeder / RBF",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Reversible belt feeder / Raw Belt Feeder for controlled metering of coal under track hoppers or reclaim bins.",
    applications: ["Track Hopper Reclaim", "Bunker Extraction"],
    features: ["Heavy duty impact bed under loading zone", "Variable speed drive compatibility", "Skirt sealing rubber strips"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/belt-feeder.jpg"
  },
  {
    id: "dust-extraction-system-coal",
    name: "Dust Extraction System for CHP",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Negative pressure extraction ducting and bag filter unit for coal transfer houses and crushers.",
    applications: ["Crusher Houses", "Conveyor Transfer Points", "Bunker Bays"],
    features: ["Explosion relief venting doors", "Anti-static filter bags", "Heavy duty radial exhaust fan"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/dust-extraction.jpg"
  },
  {
    id: "ventilation-system-coal",
    name: "CHP Ventilation System",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Industrial supply and exhaust ventilation systems for underground coal tunnels and conveyor galleries.",
    applications: ["Reclaim Tunnels", "Junction Towers", "Track Hopper Tunnels"],
    features: ["Axial flow supply fans", "Air intake louvers & filters", "Ensures compliance with indoor air safety standards"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/ventilation-system.jpg"
  },
  {
    id: "dry-fog-dust-suppression",
    name: "Dry Fog Dust Suppression System",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Sonic atomizing nozzle system creating micro-droplet dry fog to agglomerate floating coal dust without wetting fuel.",
    applications: ["Track Hopper Unloading", "Crusher Inlets & Outlets", "Belt Transfer Points"],
    features: ["Sub-10 micron water droplet size", "Moisture addition < 0.1% to bulk coal", "Automated acoustic/optical sensor activation"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/dry-fog.jpg"
  },
  {
    id: "vacuum-system-coal-spillage",
    name: "Vacuum System for Coal Spillage",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Heavy-duty central vacuum cleaning system for quick recovery of coal dust spillage across plant galleries.",
    applications: ["Conveyor Gallery Clean-up", "Tunnel Maintenance"],
    features: ["High vacuum exhauster package", "Primary separation hopper with rotary valve", "Multi-point suction manifold network"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/vacuum-system.jpg"
  },
  {
    id: "crusher-spares",
    name: "Crusher Spares",
    category: "Coal Handling Systems",
    categoryId: "coal-handling",
    shortDesc: "Precision manufactured replacement hammers, rings, breaker plates, screens, and shafts for industrial crushers.",
    applications: ["Coal Crusher Maintenance & Overhaul"],
    features: ["High manganese / alloy steel castings", "Heat treated for maximum wear life", "Direct dimension interchangeability"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/crusher-spares.jpg"
  },

  // MATERIAL HANDLING
  {
    id: "screw-conveyor",
    name: "Screw Conveyor",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Enclosed tubular or trough screw conveyor for controlled metering of powders, granules, and sludge.",
    applications: ["Cement Plants", "Chemical Processing", "Ash Handling", "Food & Grain"],
    features: ["Continuous flight or sectional flight screw", "Heavy duty hanger bearings", "Dust-tight top covers"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/screw-conveyor.jpg"
  },
  {
    id: "air-slide-conveyor",
    name: "Air Slide Conveyor",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Low energy pneumatic gravity conveyor using porous fabric media to transport dry fluidizable powders.",
    applications: ["Cement Conveying", "Fly Ash Transport", "Alumina & Powder Minerals"],
    features: ["Zero moving internal mechanical parts", "Extremely low power consumption", "Dust-sealed rectangular chute design"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/air-slide.jpg"
  },
  {
    id: "bucket-elevator",
    name: "Bucket Elevator",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Centrifugal or continuous discharge vertical elevator for bulk solids elevation to high storage silos.",
    applications: ["Cement Clinker & Meal", "Minerals & Ores", "Grain Handling", "Fertilizers"],
    features: ["Heavy chain or heat-resistant rubber belt media", "Fabricated seamless steel buckets", "Head assembly with backstop device"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/bucket-elevator.jpg"
  },
  {
    id: "scrapper-conveyor",
    name: "Scrapper Conveyor",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Drag chain scrapper conveyor engineered for handling hot, sticky, or abrasive bulk solids.",
    applications: ["Boiler Bottom Ash", "Slag Handling", "Industrial Waste"],
    features: ["Heat-treated forged chain links", "Hardened steel flights", "Trough equipped with replaceable wear liners"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/scrapper-conveyor.jpg"
  },
  {
    id: "submerged-scrapper-conveyor",
    name: "Submerged Scrapper Conveyor (SSC)",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Water filled trough submerged scrapper for continuous quenching and removal of boiler bottom ash.",
    applications: ["Thermal Power Boilers", "Incinerator Ash Removal"],
    features: ["Integrated water seal trough", "Quenches hot slag instantly", "Heavy duty slow speed drag chain"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/submerged-scrapper.jpg"
  },
  {
    id: "clinker-grinder",
    name: "Clinker Grinder",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Heavy duty roll grinder positioned under bottom ash hoppers to crush oversized fused clinkers.",
    applications: ["Power Boiler Bottom Ash Outlets"],
    features: ["Hardened alloy steel cutter teeth", "Dual counter-rotating shafts", "Shear pin / hydraulic jam protection"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/clinker-grinder.jpg"
  },
  {
    id: "telescopic-chute",
    name: "Telescopic Loading Chute",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Retractable dust-controlled loading spout for dust-free bulk loading into trucks, ships, or open stockpiles.",
    applications: ["Fly Ash Truck Loading", "Cement Bulker Loading", "Grain & Fertilizer Loading"],
    features: ["Internal wear cones", "Integrated dust extraction sleeve", "Automatic level sensor auto-retract"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/telescopic-chute.jpg"
  },
  {
    id: "vibrating-screen",
    name: "Vibrating Screen",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Circular or linear motion vibrating screen for precise particle sizing and scalp screening of minerals.",
    applications: ["Coal Sizing", "Quarry Aggregates", "Mining & Fertilizer"],
    features: ["High screening efficiency", "Replaceable woven mesh or polyurethane decks", "Unbalance motor or eccentric shaft drive"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/vibrating-screen.jpg"
  },
  {
    id: "vibrating-feeder",
    name: "Vibrating Feeder",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Electromagnetic or electromechanical feeder for regulated, uniform rate discharge from hoppers.",
    applications: ["Hopper Reclaim", "Crusher Feeding", "Weighing Belt Feed"],
    features: ["Stepless feed rate control", "Wear resistant pan liners", "Low maintenance suspended/floor mounted design"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/vibrating-feeder.jpg"
  },
  {
    id: "loading-conveyor",
    name: "Loading Conveyor",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Mobile or stationary incline conveyor tailored for bag/bulk loading into trucks and rail wagons.",
    applications: ["Bagged Cement", "Fertilizer Loading", "Warehouse Logistics"],
    features: ["Adjustable hydraulic boom height", "Chevron pattern high grip belt", "Heavy wheel chassis for mobility"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/loading-conveyor.jpg"
  },
  {
    id: "discharge-chute-liner",
    name: "Discharge Chute with Wear Liner",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Custom fabricated chute transitions fitted with wear-resistant liners for high-impact material transfer.",
    applications: ["Conveyor Transfer Towers", "Hopper Discharges"],
    features: ["Fitted with Hardox, Ceramic, or Basalt liners", "Optimized trajectory design to eliminate plugging", "Flanged bolt-on maintenance doors"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/discharge-chute.jpg"
  },
  {
    id: "grab-bucket",
    name: "Grab Bucket",
    category: "Material Handling Equipment",
    categoryId: "material-handling",
    shortDesc: "Electro-hydraulic or mechanical rope grab bucket for handling coal, sand, iron ore, and scrap bulk materials.",
    applications: ["EOT Cranes", "Port Bulk Handling", "Steel Mill Yards"],
    features: ["High penetration lip design", "Heavy duty hydraulic cylinder package", "Wear-resistant scoop edges"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/grab-bucket.jpg"
  },

  // VALVES & GATES
  {
    id: "dome-valve-std",
    name: "Dome Valve",
    category: "Valves & Gates",
    categoryId: "valves-gates",
    shortDesc: "Inflatable seal spherical dome valve for pressure-tight sealing in abrasive powder conveying.",
    applications: ["Pneumatic Conveying Systems", "Silo Pressure Isolation"],
    features: ["Inflatable elastomeric seal ring", "Cuts through stationary or moving static columns", "Pneumatic 90-degree actuator"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/dome-valve.jpg"
  },
  {
    id: "rotary-airlock-std",
    name: "Rotary Airlock Valve",
    category: "Valves & Gates",
    categoryId: "valves-gates",
    shortDesc: "Heavy-duty cast rotor feeder valve providing pressure seal between atmospheric hoppers and pressure lines.",
    applications: ["Cyclones", "Bag Filters", "Silo Outlets"],
    features: ["Precision machined rotor-to-casing clearance", "Outboard bearings", "Adjustable rotor tip blades"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/rotary-airlock.jpg"
  },
  {
    id: "slide-gate-valve",
    name: "Slide Gate Valve",
    category: "Valves & Gates",
    categoryId: "valves-gates",
    shortDesc: "Compact blade slide gate for gravity shut-off of dry bulk materials under bins and hoppers.",
    applications: ["Hopper Maintenance Isolation", "Conveyor Inlets"],
    features: ["Smooth precision blade guides", "Self-cleaning seat profile", "Zero leakage to atmosphere"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/slide-gate.jpg"
  },
  {
    id: "manual-slide-gate",
    name: "Manual Slide Gate Valve",
    category: "Valves & Gates",
    categoryId: "valves-gates",
    shortDesc: "Handwheel operated slide gate valve for periodic maintenance isolation of hoppers.",
    applications: ["Maintenance Isolation Points"],
    features: ["Ergonomic handwheel or chain drive", "Stainless steel slide plate", "Rugged fabricated steel frame"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/manual-slide-gate.jpg"
  },
  {
    id: "pneumatic-slide-gate",
    name: "Pneumatic Slide Gate Valve",
    category: "Valves & Gates",
    categoryId: "valves-gates",
    shortDesc: "Automated pneumatic cylinder driven slide gate valve for rapid material stream shut-off.",
    applications: ["Automated Batching Systems", "Silo Outlet Control"],
    features: ["Heavy pneumatic cylinder with reed switches", "Magnetic position sensing", "Quick stroke speed"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/pneumatic-slide-gate.jpg"
  },
  {
    id: "diverter-gate",
    name: "Diverter Gate Valve",
    category: "Valves & Gates",
    categoryId: "valves-gates",
    shortDesc: "Symmetrical or asymmetrical Y-diverter gate for switching bulk material flow between two downstream paths.",
    applications: ["Conveyor Transfer Chutes", "Silo Filling Networks"],
    features: ["Internal flap with replaceable polyurethane/steel seal", "Electric or pneumatic actuator", "Dust proof shaft packing"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/diverter-gate.jpg"
  },
  {
    id: "rod-gate",
    name: "Rod Gate Valve (Pin Gate)",
    category: "Valves & Gates",
    categoryId: "valves-gates",
    shortDesc: "Individual steel rod gate designed to isolate coarse, lumpy material streams like coal or crushed stone.",
    applications: ["Primary Hopper Outlets", "Crusher Feed Chutes"],
    features: ["Individually driven stainless steel rods", "Pushes through packed lump beds", "Zero maintenance jam-free operation"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/rod-gate.jpg"
  },

  // DUST & POLLUTION CONTROL
  {
    id: "dust-control-bag-filter",
    name: "Dust Control / Bag Filter System",
    category: "Dust & Pollution Control",
    categoryId: "dust-control",
    shortDesc: "Pulse-jet cleanable industrial bag filter system removing dry particulate matter from process exhaust air.",
    applications: ["Cement Grinding", "Fly Ash Silos", "Coal Processing", "Metals & Mining"],
    features: ["Pulse-jet reverse air cleaning controller", "Pleated element or needle felt bag media", "Integrated hopper with rotary discharge valve"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/bag-filter.jpg"
  },
  {
    id: "adaptable-dust-control",
    name: "Adaptable Dust Control System",
    category: "Dust & Pollution Control",
    categoryId: "dust-control",
    shortDesc: "Modular localized dust collector designed for direct retrofit onto conveyor transfer points and hoppers.",
    applications: ["Retrofit Conveyor Transfer Lines", "Silo Top Venting"],
    features: ["Compact footprint", "Direct material return into process stream", "Low compressed air consumption"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/adaptable-dust.jpg"
  },

  // STORAGE & PROCESS EQUIPMENT
  {
    id: "industrial-silo",
    name: "Industrial Storage Silo",
    category: "Storage & Process Equipment",
    categoryId: "storage-process",
    shortDesc: "Heavy structural steel or bolted storage silo for fly ash, cement, coal dust, and chemical powders.",
    applications: ["Power Plants", "Cement Terminals", "Chemical Processing Plants"],
    features: ["Engineered for wind and seismic loading", "Internal aeration & fluidizing systems", "Integrated level telemetry mounting bosses"],
    standards: ["ASME Section VIII", "IS 2825", "IS 17938"],
    technicalInfo: "Manufactured per profile pressure-vessel standards ASME Section VIII, IS 2825, IS 17938 where applicable. Contact us for custom capacities.",
    image: "/images/products/industrial-silo.jpg"
  },
  {
    id: "industrial-hopper",
    name: "Industrial Hopper",
    category: "Storage & Process Equipment",
    categoryId: "storage-process",
    shortDesc: "Custom fabricated surge hoppers, track hoppers, and boiler ash hoppers with wear lining options.",
    applications: ["Track Hopper Reclaim", "Boiler Bottom Ash", "Crusher Surge Feed"],
    features: ["Reinforced stiffener structural web", "Optional ceramic or UHMWPE liners", "Designed for mass flow geometry"],
    standards: ["IS 2825", "IS 17938"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/industrial-hopper.jpg"
  },
  {
    id: "air-receiver-storage-tank",
    name: "Air Receiver / Storage Tank",
    category: "Storage & Process Equipment",
    categoryId: "storage-process",
    shortDesc: "Certified compressed air receiver vessels and surge tanks built strictly according to pressure vessel codes.",
    applications: ["Compressed Air Systems", "Pneumatic Ash Conveying Air Storage"],
    features: ["Certified NDT Radiography of welded joints", "Safety relief valve nozzle", "Internal corrosion resistant coating"],
    standards: ["ASME Section VIII", "IS 2825"],
    technicalInfo: "Stated pressure-vessel standards: ASME Section VIII, IS 2825, IS 17938. Contact us for pressure ratings.",
    image: "/images/products/air-receiver.jpg"
  },
  {
    id: "oil-storage-tank",
    name: "Fuel Oil Storage Tank",
    category: "Storage & Process Equipment",
    categoryId: "storage-process",
    shortDesc: "Heavy steel storage tanks for Light Diesel Oil (LDO), Heavy Fuel Oil (HFO), and industrial lubricants.",
    applications: ["Fuel Oil Handling Systems", "Boiler Ignition Fuel Storage"],
    features: ["Leak-tight double welded seams", "Level gauge & breather vent nozzles", "Compliance with explosive storage guidelines"],
    standards: ["IS 2825", "IS 17938"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/oil-storage.jpg"
  },
  {
    id: "grain-storage-silo",
    name: "Grain Storage Silo",
    category: "Storage & Process Equipment",
    categoryId: "storage-process",
    shortDesc: "Galvanized corrugated or steel plate silos engineered for bulk agricultural grain preservation and handling.",
    applications: ["Grain Terminals", "Food Processing", "Flour Mills"],
    features: ["Temperature and moisture sensor ports", "Sweeping auger discharge option", "Smooth hygiene-compliant interior"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/grain-silo.jpg"
  },

  // CRANES & HEAVY EQUIPMENT
  {
    id: "eot-crane",
    name: "EOT Crane (Electric Overhead Traveling)",
    category: "Cranes & Heavy Process Equipment",
    categoryId: "cranes-heavy",
    shortDesc: "Single and double girder EOT cranes designed for heavy industrial material handling and plant maintenance.",
    applications: ["Power House Bays", "Fabrication Shops", "Foundries & Steel Mills"],
    features: ["Heavy box girder structural fabrication", "VVVF variable frequency drives for smooth inching", "Overload limit switch & fail-safe brakes"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/eot-crane.jpg"
  },
  {
    id: "hydraulic-systems",
    name: "Industrial Hydraulic Systems",
    category: "Cranes & Heavy Process Equipment",
    categoryId: "cranes-heavy",
    shortDesc: "Custom hydraulic power packs, cylinders, and manifold controls for heavy gate actuation and tilting systems.",
    applications: ["Wagon Tipplers", "Heavy Flap Gates", "Furnace Tilting"],
    features: ["High pressure pump assembly", "Precision proportional valve blocks", "Heavy duty hydraulic fluid filtration unit"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/hydraulic-system.jpg"
  },
  {
    id: "ladle-heavy-process-equipment",
    name: "Ladle / Heavy Process Equipment",
    category: "Cranes & Heavy Process Equipment",
    categoryId: "cranes-heavy",
    shortDesc: "Custom fabricated hot metal ladles, ducting headers, and heavy process vessels for metal industries.",
    applications: ["Steel Melting Shops", "Foundries", "Smelters"],
    features: ["Refractory lining ready shell", "Heavy trunnion pins for crane lifting", "Heat resistant alloy steel plate"],
    technicalInfo: "Contact us for technical specifications and customized requirements.",
    image: "/images/products/ladle-equipment.jpg"
  }
];

export const INDUSTRIES: Industry[] = [
  { id: "power-plants", title: "Power Plants", description: "Comprehensive ash handling and coal handling systems for thermal & captive power generators.", iconName: "Zap" },
  { id: "coal-handling-plants", title: "Coal Handling Plants", description: "CHP equipment including conveyors, crushers, screens, magnets, and dust suppression systems.", iconName: "Container" },
  { id: "cement-plants", title: "Cement Plants", description: "Bulk material conveying, air slides, bucket elevators, silos, and bag filter systems for cement manufacturing.", iconName: "Building2" },
  { id: "mining", title: "Mining", description: "Heavy duty crushed ore transport, vibrating screens, magnetic separators, and telescopic loading chutes.", iconName: "Pickaxe" },
  { id: "chemical-industries", title: "Chemical Industries", description: "Sealed pneumatic powder conveying, stainless process vessels, storage tanks, and isolation valves.", iconName: "FlaskConical" },
  { id: "steel-metal", title: "Steel / Metal Industries", description: "Raw material handling, heavy process ladles, EOT cranes, and high-temperature dust extraction.", iconName: "Factory" },
  { id: "construction", title: "Construction", description: "Bulk cement storage silos, aggregate feed conveyors, and environmental dust control.", iconName: "HardHat" },
  { id: "agriculture", title: "Agriculture", description: "Bulk fertilizer and grain handling equipment, elevators, and storage silos.", iconName: "Wheat" },
  { id: "fertilizer-industries", title: "Fertilizer Industries", description: "Corrosion-resistant conveyor systems, bucket elevators, and bagging loading chutes.", iconName: "Sprout" },
  { id: "food-industries", title: "Food Industries", description: "Sanitary pneumatic handling, stainless screw conveyors, and bulk powder storage.", iconName: "Utensils" },
  { id: "grain-handling", title: "Grain Handling", description: "High-capacity grain elevators, storage silos, telescopic loading spouts, and air filtration.", iconName: "Wheat" },
  { id: "quarries", title: "Quarries", description: "Aggregates vibrating screens, heavy belt conveyors, dry fog dust suppression, and feed hoppers.", iconName: "Mountain" },
  { id: "industrial-manufacturing", title: "Industrial Manufacturing", description: "Turnkey material handling automation, air receivers, pressure vessels, and custom EPC steel structures.", iconName: "Cog" }
];

export const SERVICES: Service[] = [
  {
    id: "design-engineering",
    title: "Design & Engineering",
    description: "Detailed 3D modeling, mechanical calculations, pneumatic line sizing, structural analysis, and layout engineering.",
    deliverables: ["P&ID Diagrams", "GA & Piping Layouts", "Structural Load Analysis", "Equipment Sizing Specifications"],
    iconName: "Compass"
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "In-house precision fabrication of pressure vessels, silos, conveyors, valves, and structural steel modules.",
    deliverables: ["ASME / IS Code Fabrication", "NDT & Pressure Testing", "Precision Machine Shop Production", "Surface Treatment & Painting"],
    iconName: "Hammer"
  },
  {
    id: "supply",
    title: "Supply",
    description: "Quality assured procurement and timely dispatch of specialized components, bought-out drives, and wear spares.",
    deliverables: ["Factory Inspected Assemblies", "Export/Domestic Logistics Packaging", "Spare Parts Inventories"],
    iconName: "PackageCheck"
  },
  {
    id: "installation-erection",
    title: "Installation & Erection",
    description: "On-site mechanical erection, structural alignment, piping, and electrical integration under expert engineering supervision.",
    deliverables: ["Site Erection Management", "Alignment & Rigging Safety", "Interconnecting Piping Installation"],
    iconName: "Wrench"
  },
  {
    id: "project-execution",
    title: "Project Execution",
    description: "End-to-end turnkey project management from preliminary design through procurement, installation, and commissioning.",
    deliverables: ["Single-Point Project Management", "Milestone Tracking & QA", "Safety Compliance Protocols"],
    iconName: "Briefcase"
  },
  {
    id: "om-support",
    title: "O&M Support",
    description: "Operations & Maintenance contracts ensuring maximum plant uptime, preventive overhauls, and immediate spare response.",
    deliverables: ["Scheduled Plant Overhauls", "Routine Inspection Audits", "24/7 Field Service Response"],
    iconName: "Activity"
  },
  {
    id: "system-modification",
    title: "System Modification Solutions",
    description: "Brownfield revamping, throughput upgrades, and de-bottlenecking of existing material handling infrastructure.",
    deliverables: ["Capacity Upgrade Feasibility", "Wear Component Retrofits", "Dust Mitigation Revamping"],
    iconName: "RefreshCw"
  },
  {
    id: "design-consultancy",
    title: "Design Engineering Consultancy",
    description: "Expert engineering advisory for material handling feasibility studies, vendor drawing reviews, and system optimizations.",
    deliverables: ["Technical Audit Reports", "EPC Tender Specification Drafting", "Process Flow Optimization"],
    iconName: "FileText"
  },
  {
    id: "customized-solutions",
    title: "Customized Industrial Solutions",
    description: "Bespoke mechanical designs tailored specifically for unique site layout constraints or difficult bulk materials.",
    deliverables: ["Custom Equipment Engineering", "Special Alloy Fabrication", "Tailored Process Interfaces"],
    iconName: "Layers"
  }
];

export const PROJECTS_DATA = [
  {
    id: "proj-1",
    title: "Thermal Power Plant Ash Handling Retrofit",
    industry: "Power Plants",
    location: "Maharashtra, India",
    solution: "Dense Phase Pneumatic Ash Handling",
    status: "Project details coming soon."
  },
  {
    id: "proj-2",
    title: "100 TPH Coal Handling Plant Conveyor System",
    industry: "Coal Handling Plants",
    location: "Central India",
    solution: "Coal Handling Plant (Up to 100 TPH)",
    status: "Project details coming soon."
  },
  {
    id: "proj-3",
    title: "Cement Silo Aeration & Telescopic Loading Station",
    industry: "Cement Plants",
    location: "Nagpur Region, Maharashtra",
    solution: "Storage Silo & Telescopic Chutes",
    status: "Project details coming soon."
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Established Experience Since 2008",
    desc: "Over 18 years of engineering excellence in design, manufacturing, and execution based in Nagpur, Maharashtra."
  },
  {
    title: "Engineering-Focused Solutions",
    desc: "Rooted in rigorous mechanical calculations, material flow analysis, and robust CAD modeling rather than off-the-shelf assembly."
  },
  {
    title: "Customized Industrial Equipment",
    desc: "Every system is custom-designed to match specific bulk density, abrasive characteristics, and site layout constraints."
  },
  {
    title: "Durable Steel & Pressure Vessel Construction",
    desc: "Fabricated to strict standards (ASME Section VIII, IS 2825, IS 17938) with premium wear-resistant linings."
  },
  {
    title: "Efficient Material Handling Performance",
    desc: "Optimized pneumatic pressure ratios and conveyor throughput designed for minimal energy consumption."
  },
  {
    title: "Low-Maintenance Design Approach",
    desc: "Accessible maintenance hatches, drop-in replacement seals, and heavy-duty bearings engineered to minimize plant downtime."
  },
  {
    title: "End-to-End Turnkey Capability",
    desc: "Complete responsibility from conceptual design and shop fabrication to site erection, commissioning, and O&M support."
  },
  {
    title: "Deep Industrial Application Expertise",
    desc: "Proven engineering knowledge across power generation, cement, steel, chemical processing, mining, and bulk agriculture."
  }
];
