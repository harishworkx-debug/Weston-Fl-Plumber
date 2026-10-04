import {
  Bath,
  Clock3,
  Droplets,
  Flame,
  Gauge,
  Hammer,
  House,
  Waves,
  Wrench,
} from "lucide-react";

export const servicePages = [
  { 
    slug: "plumber-weston-fl", baseSlug: "plumber", title: "Plumber in Weston, FL", short: "Full-service plumbing for homes and businesses in Weston, Florida.", icon: Wrench, image: "/assets/service.jpg", 
    intro: "When your home needs a steady hand, Weston FL Plumber brings practical diagnosis, careful workmanship, and clear communication to every call. From everyday repairs to urgent plumbing problems, our team helps you understand the issue and the next best step.", 
    benefits: ["Clear explanation before work begins", "Careful protection of floors and finished spaces", "Solutions matched to your property and priorities"], 
    process: ["Tell us what is happening and where", "We inspect the visible symptoms and likely source", "We explain practical repair or replacement paths", "You decide how you would like to move forward"],
    symptoms: ["Unexplained water pooling on floors or under cabinets", "Sudden drops in water pressure across fixtures", "Unpleasant sewage odors from drains or yard cleanouts", "Visible rust, green corrosion, or pinhole dampness on pipes"],
    causes: "Plumbing systems naturally degrade over time due to mineral buildup, water pressure fluctuations, and general wear and tear on seals and fittings. In Weston, the local climate and water hardness can also accelerate wear on certain components.",
    costFactors: "Pricing depends on the complexity of the diagnosis, the accessibility of the affected pipes, and whether parts can be repaired versus requiring complete replacement. We always provide transparent pricing upfront.",
    emergencyInfo: "If you have an active leak, locate your main water shutoff valve immediately to minimize damage. Call our team at 754-283-8022 for fast local assistance.",
    reviewName: "Alejandro"
  },
  { 
    slug: "residential-plumbing-weston-fl", baseSlug: "residential-plumbing", title: "Residential Plumbing in Weston, FL", short: "Thoughtful plumbing service for South Florida homes.", icon: House, image: "/assets/residential.jpg", 
    intro: "Your home’s plumbing should feel invisible—in the best way. We help Weston homeowners with fixtures, supply lines, drains, water heaters, toilets, and the everyday repairs that keep a household moving.", 
    benefits: ["Respectful in-home service with shoe covers and work mats", "Solutions for kitchens, baths, utility rooms, and exterior lines", "Straightforward options for repair and replacement"], 
    process: ["Review the symptoms and your home’s layout", "Inspect the fixture, line, or equipment", "Prioritize the repair around safety and function", "Test the work thoroughly and leave the area orderly"],
    symptoms: ["Running toilets that waste water and cycle periodically", "Dripping faucets in kitchens or bathrooms", "Water spots on ceilings or behind vanities", "Appliance and disposal connection leaks"],
    causes: "Residential plumbing issues are often caused by aging fixtures, worn-out rubber washers, mineral scale buildup from hard municipal water, or improper previous installations.",
    costFactors: "Costs for residential plumbing are influenced by replacement fixture quality, accessibility, and whether piping upgrades are required. We provide clear upfront estimates.",
    emergencyInfo: "For residential emergencies like a burst pipe, shut off the water to the affected fixture or the main shutoff valve. We prioritize residential emergencies to protect your home.",
    reviewName: "alex roman"
  },
  { 
    slug: "emergency-plumber-weston-fl", baseSlug: "emergency-plumber", title: "Emergency Plumber in Weston, FL", short: "Fast 24/7 priority response when a plumbing emergency cannot wait.", icon: Clock3, image: "/assets/emergency.jpg", 
    intro: "Burst pipes, active water leaks flooding floors, overflowing toilets, raw sewage backing up into bathtubs, gas line leaks, or sudden loss of water pressure can escalate into severe property damage within minutes. Weston FL Plumber operates a 24/7 emergency response line dispatched directly from our Weston office at 2645 Executive Park Drive.", 
    benefits: ["Immediate phone guidance for emergency water containment", "Rapid 15–30 minute average arrival across Weston neighborhoods", "State-certified master plumbers equipped for instant mitigation"], 
    process: ["Call 754-283-8022 immediately upon discovering an active leak or sewage backup", "Receive step-by-step phone instructions to shut off main valves safely", "Our emergency plumber arrives with diagnostic gear and repair supplies", "We isolate the break, perform immediate repairs, and test system safety"],
    symptoms: ["Active water rapidly pooling on floors, tile, or ceilings", "Raw sewage backing up into tubs, showers, or ground floor drains", "Complete sudden loss of water pressure throughout the home", "Loud banging noises (water hammer) or whistling from supply lines", "Leaking water heater tank dumping water into utility rooms"],
    causes: "Plumbing emergencies in Weston typically stem from high municipal water main pressure spikes rupturing supply lines, thermal expansion stress on water heater tanks, severe main sewer line tree root blockages, or degraded cast iron lateral failures.",
    costFactors: "Emergency plumbing costs reflect immediate dispatch priority, after-hours requirements, and the scale of immediate mitigation needed to protect your home. We provide transparent quotes before starting work.",
    emergencyInfo: "WHAT TO DO WHILE WAITING: 1) Locate your main water shutoff valve on the exterior front wall or meter box and turn it 90 degrees clockwise. 2) If standing water is near electrical outlets, turn off the main circuit breaker immediately. 3) Open exterior hose bibs to release excess line pressure. 4) Avoid flushing toilets or running water during sewage backups.",
    reviewName: "Tim Flounder"
  },
  { 
    slug: "plumbing-repair-weston-fl", baseSlug: "plumbing-repair", title: "Plumbing Repair in Weston, FL", short: "Dependable repairs for fixtures, lines, and plumbing systems.", icon: Hammer, image: "/assets/repair.jpg", 
    intro: "Small plumbing issues rarely improve on their own. We troubleshoot dripping fixtures, weak flow, running toilets, corroded supply lines, and valve leaks with an emphasis on identifying the underlying cause—not just treating the surface symptom.", 
    benefits: ["Thorough diagnosis before replacing parts", "Repair-first mindset whenever cost-effective", "1-Year Warranty on all recommended repair work"], 
    process: ["Describe the issue and when it first started", "Technician inspects connected valves, lines, and fixtures", "We explain repair vs replacement paths with transparent pricing", "We complete the repair, test for leaks, and share maintenance tips"],
    symptoms: ["Persistent leaks under kitchen or bathroom sinks", "Loose or wobbly shower handles and bath spouts", "Discolored or rusty water coming from specific taps", "Hissing or humming sounds from vanity angle stop valves"],
    causes: "Many repairs are necessitated by degraded internal rubber seals, mineral scale scale buildup on ceramic cartridges, corroded angle stop valves, or thermal expansion stress.",
    costFactors: "Repair costs depend on whether individual internal components (like a cartridge or flapper) can be serviced, or if the entire valve assembly requires replacement.",
    emergencyInfo: "If a fixture breaks completely and cannot be turned off at the handle, use the silver angle stop valve located on the wall beneath the sink or behind the toilet.",
    reviewName: "Nebulxx"
  },
  { 
    slug: "drain-cleaning-weston-fl", baseSlug: "drain-cleaning", title: "Drain Cleaning in Weston, FL", short: "Clear clogged kitchen sinks, bathroom drains, and recurring main line backups.", icon: Waves, image: "/assets/drain.jpg", 
    intro: "Slow drains, water pooling around shower ankles, gurgling toilets, and recurring kitchen sink backups are clear warning signs of deep line restrictions. We help Weston homeowners resolve everything from local sink clogs to main sewer line blockages using advanced, non-damaging cleaning methods.", 
    benefits: ["Targeted clearing matched to the specific drain location", "High-definition video sewer camera inspections to verify pipe condition", "Safe, chemical-free methods that protect your plumbing investment"], 
    process: ["Identify affected fixtures and locate accessible cleanout points", "Inspect the drain line with a HD video sewer camera if necessary", "Clear blockages using heavy-duty electric augers or high-pressure hydro-jetting", "Flush the line thoroughly and verify smooth, rapid drainage"],
    symptoms: ["Water pooling in shower basins or bathtub drains", "Gurgling sounds from toilets when running the washing machine", "Foul sewer gas odors escaping from kitchen or laundry drains", "Multiple ground-floor fixtures backing up simultaneously", "Slow draining kitchen sinks despite using a plunger"],
    causes: "Drains commonly clog due to hair, soap scum buildup, solidified cooking grease, flushed wipes, or in severe cases, aggressive tropical tree root intrusion seeking water moisture in main underground sewer laterals.",
    costFactors: "The cost to clear a drain depends on the clog depth, accessibility of cleanouts, severity of root intrusion, and whether hydro-jetting or video camera diagnostics are required.",
    emergencyInfo: "If raw sewage is backing up into tubs or showers, stop using all household water immediately (washing machine, dishwasher, toilets) to prevent sewage overflow onto living area floors.",
    reviewName: "Maggie Lopez"
  },
  { 
    slug: "sewer-line-repair-weston-fl", baseSlug: "sewer-line-repair", title: "Sewer Line Repair in Weston, FL", short: "Support for sewer line backups, odors, and trenchless pipe repairs.", icon: Waves, image: "/assets/sewer.jpg", 
    intro: "Sewer line problems can affect comfort, sanitation, and the structural integrity of your property. We locate sewer line cracks, tree root intrusions, and offset joints, providing clear video camera evidence and trenchless repair options whenever possible.", 
    benefits: ["HD video sewer camera inspection with real-time video review", "Trenchless sewer lining (CIPP) options to minimize lawn excavation", "Full code compliance and City of Weston permitting management"], 
    process: ["Perform video sewer camera inspection through cleanout access", "Map the exact depth and location of the damaged pipe section", "Discuss trenchless lining vs traditional excavation repair paths", "Restore line structural integrity and confirm smooth wastewater flow"],
    symptoms: ["Soggy or unusually green, lush patches in your lawn", "Persistent sewer gas odors outside or inside bathrooms", "Multiple toilets and floor drains backing up at once", "Pest or fruit fly activity near cleanout access points"],
    causes: "Sewer lines fail due to bottom channeling corrosion in aging cast iron pipes, tree root intrusion at PVC joints, or ground settling shifting underground pipe slope.",
    costFactors: "Sewer repair pricing depends on pipe depth, distance to city sewer main, whether trenchless pipe lining can be used, and surface restoration requirements.",
    emergencyInfo: "A compromised sewer line is a sanitation risk. Keep children and pets away from wet lawn areas and avoid using household fixtures until the line is evaluated.",
    reviewName: "michelin star"
  },
  { 
    slug: "leak-detection-weston-fl", baseSlug: "leak-detection", title: "Leak Detection in Weston, FL", short: "Find hidden water leaks under slabs and behind walls before major damage occurs.", icon: Gauge, image: "/assets/hero.jpg", 
    intro: "Some leaks announce themselves clearly. Others show up quietly as an unexplained spike in your water bill, a warm spot on floor tiles, damp baseboards, or the faint sound of running water when all faucets are closed. Weston FL Plumber provides non-invasive leak detection using acoustic amplification and thermal imaging technology.", 
    benefits: ["Non-destructive detection that pinpoints leaks through concrete slabs", "Thermal infrared imaging to detect hidden moisture behind drywall", "Accurate diagnosis that prevents unnecessary wall or floor demolition"], 
    process: ["Perform static pressure test on main incoming supply lines", "Scan floors and walls with thermal imaging and acoustic sound sensors", "Mark the exact leak location through floor tile or drywall", "Provide clear repair options (localized spot repair or overhead pipe reroute)"],
    symptoms: ["Unexplained spikes in monthly municipal water bills", "Faint sound of running water inside walls when all taps are off", "Hot or warm spots on tile, laminate, or carpeted floors", "Peeling paint, swollen baseboards, or mold/mildew growth"],
    causes: "Hidden leaks in Weston homes are commonly caused by pinhole leaks in copper piping due to aggressive soil chemistry, pipe friction against concrete aggregates under slabs, or high municipal water pressure spikes.",
    costFactors: "Leak detection costs depend on accessibility and whether the leak is beneath a post-tension concrete slab or inside a multi-story wall cavity. Pinpointing the leak accurately saves thousands in unnecessary demolition.",
    emergencyInfo: "If you suspect a major hidden leak, check your water meter dial. If the low-flow indicator is spinning while all water is turned off, shut off the main valve immediately.",
    reviewName: "Sophia R"
  },
  { 
    slug: "water-heater-repair-weston-fl", baseSlug: "water-heater-repair", title: "Water Heater Repair in Weston, FL", short: "Restore reliable hot water and address tank noise, leaks, or heating failures.", icon: Flame, image: "/assets/residential.jpg", 
    intro: "No hot water, lukewarm showers, loud rumbling tank noises, or visible water pooling around your heater demand immediate attention. We diagnose gas, electric, and tankless water heaters across Weston, helping you understand whether repair or replacement is the most cost-effective path.", 
    benefits: ["Complete diagnostics of thermostats, heating elements, and relief valves", "Tank sediment flushing to restore heat transfer and eliminate popping noises", "Honest Repair vs Replacement guidance based on tank age and condition"], 
    process: ["Inspect electrical breakers, gas valves, thermostats, and elements", "Check tank shell for rust, corrosion, and pressure relief valve leaks", "Explain transparent repair costs vs replacement energy savings", "Complete the repair, test water temperature, and verify safe operation"],
    symptoms: ["Water not reaching temperature or running out within minutes", "Rusty, discolored, or metallic-tasting hot water", "Loud popping, crackling, or rumbling noises from the tank", "Water pooling around the base of the unit or leaking from relief valves"],
    causes: "Water heater issues stem from burnt heating elements, faulty thermostats, mineral scale accumulation at the bottom of the tank, or failing pressure relief valves.",
    costFactors: "REPAIR VS REPLACEMENT DECISION: If your water heater is under 8 years old and failed an electrical component (thermostat/element), repair is cost-effective ($150–$350). If the tank shell is over 10-12 years old or actively leaking/rusting, unit replacement is recommended to prevent catastrophic tank rupture.",
    emergencyInfo: "If your water heater tank is leaking heavily, turn off the cold water supply valve on top of the tank and shut off the dedicated double-pole circuit breaker in your electrical panel immediately.",
    reviewName: "Lorenzo C"
  },
  { 
    slug: "water-heater-installation-weston-fl", baseSlug: "water-heater-installation", title: "Water Heater Installation in Weston, FL", short: "Expert installation of high-efficiency tank and tankless water heaters.", icon: Droplets, image: "/assets/repair.jpg", 
    intro: "A new water heater is an investment in your home's daily comfort and energy efficiency. We evaluate your household hot water demand, space constraints, and electrical/gas capacity to install top-rated tank or tankless water heaters cleanly according to Weston code.", 
    benefits: ["Precise capacity sizing for 40, 50, or 80-gallon tanks & tankless units", "Code-compliant installation including thermal expansion tanks & pan drains", "Full removal and safe disposal of your old water heater unit"], 
    process: ["Assess household hot water usage and existing connections", "Recommend ideal tank vs tankless models with energy estimates", "Perform clean installation, safety valve fitting, and electrical wiring", "Test system under full temperature and file City of Weston permits"],
    symptoms: ["Existing water heater tank is over 10 to 12 years old", "Frequent repairs are becoming more expensive than replacement", "Tank shell is visibly rusting, flaking, or seeping moisture", "Upgrading household capacity or converting to continuous tankless gas/electric"],
    causes: "Water heater tanks eventually rust through due to galvanic corrosion and mineral buildup. Replacing an outdated unit prevents sudden tank rupture and reduces monthly energy bills.",
    costFactors: "Installation costs depend on unit capacity, electric vs gas hookups, thermal expansion tank additions, safety pan plumbing, and local municipal permit fees.",
    emergencyInfo: "If your old tank has burst, call 754-283-8022 for fast-track same-day replacement to restore household hot water safely.",
    reviewName: "alex roman"
  },
  { 
    slug: "toilet-repair-weston-fl", baseSlug: "toilet-repair", title: "Toilet Repair in Weston, FL", short: "Fix running, leaking, rocking, or clogged toilets.", icon: Bath, image: "/assets/sewer.jpg", 
    intro: "A toilet that runs constantly, rocks on its base, leaks onto bathroom tile, or clogs repeatedly wastes water and disrupts your day. We repair tank components, replace failed wax ring seals, and install modern high-efficiency toilets.", 
    benefits: ["Fast repair of common toilet tank symptoms", "Wax ring replacement to eliminate floor leaks and rot", "Testing for proper fill level, flush power, and instant shutoff"], 
    process: ["Inspect tank fill valve, flapper, handle linkage, and bowl seal", "Check floor flange stability and closet bolt tightness", "Replace failed internal parts or pull fixture to renew wax ring seal", "Test fixture through multiple flush cycles to confirm clean seal"],
    symptoms: ["Toilet runs constantly or cycles water every few minutes", "Water pooling at the tile base around the toilet", "Weak or incomplete flushes requiring multiple handles", "Toilet fixture rocks or moves when sat upon"],
    causes: "Common culprits include degraded rubber flappers, mineral-clogged fill valves, broken brass closet bolts, or failed wax ring seals at the floor flange.",
    costFactors: "Toilet repairs are generally quick and economical. If the toilet must be pulled to replace the wax ring seal or repair the flange, labor reflects resetting and re-sealing.",
    emergencyInfo: "If a toilet is overflowing, immediately turn the silver shutoff valve located on the wall behind the toilet clockwise to stop incoming water.",
    reviewName: "Tim Flounder"
  }
];
