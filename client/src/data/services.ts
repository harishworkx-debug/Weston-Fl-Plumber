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
    slug: "plumber-weston-fl", baseSlug: "plumber", title: "Plumber in Weston, FL", short: "Full-service plumbing for homes and businesses in Weston.", icon: Wrench, image: "/assets/service.jpg", 
    intro: "When your home needs a steady hand, Weston FL Plumber brings practical diagnosis, careful workmanship, and clear communication to every call. From everyday repairs to urgent plumbing problems, our team helps you understand the issue and the next best step.", 
    benefits: ["Clear explanation before work begins", "Careful protection of floors and finished spaces", "Solutions matched to your property and priorities"], 
    process: ["Tell us what is happening and where", "We inspect the visible symptoms and likely source", "We explain practical repair or replacement paths", "You decide how you would like to move forward"],
    symptoms: ["Unexplained water pooling", "Sudden drops in water pressure", "Unpleasant odors from drains", "Visible rust or corrosion on pipes"],
    causes: "Plumbing systems naturally degrade over time due to mineral buildup, water pressure fluctuations, and general wear and tear on seals and fittings. In Weston, the local climate and water hardness can also accelerate wear on certain components.",
    costFactors: "Pricing depends on the complexity of the diagnosis, the accessibility of the affected pipes, and whether parts can be repaired versus requiring complete replacement. We always provide transparent pricing upfront.",
    emergencyInfo: "If you have an active leak, locate your main water shutoff valve immediately to minimize damage. Call our team, and we will guide you on the next steps until our plumber arrives.",
    reviewName: "Alejandro"
  },
  { 
    slug: "residential-plumbing-weston-fl", baseSlug: "residential-plumbing", title: "Residential Plumbing in Weston, FL", short: "Thoughtful plumbing service for South Florida homes.", icon: House, image: "/assets/residential.jpg", 
    intro: "Your home’s plumbing should feel invisible—in the best way. We help Weston homeowners with fixtures, supply lines, drains, water heaters, toilets, and the everyday repairs that keep a household moving.", 
    benefits: ["Respectful in-home service", "Solutions for kitchens, baths, utility rooms, and exterior lines", "Straightforward options for repair and replacement"], 
    process: ["Review the symptoms and your home’s layout", "Inspect the fixture, line, or equipment", "Prioritize the repair around safety and function", "Test the work and leave the area orderly"],
    symptoms: ["Running toilets that waste water", "Dripping faucets in kitchens or bathrooms", "Water spots on ceilings or walls", "Appliance connection issues"],
    causes: "Residential plumbing issues are often caused by aging fixtures, worn-out washers, shifting foundations, or improper previous installations.",
    costFactors: "Costs for residential plumbing are influenced by the cost of replacement fixtures, the time required for careful in-home installation, and the extent of any hidden damage.",
    emergencyInfo: "For residential emergencies like a burst pipe, shut off the water to the affected fixture or the whole house. We prioritize residential emergencies to protect your home's interior.",
    reviewName: "alex roman"
  },
  { 
    slug: "emergency-plumber-weston-fl", baseSlug: "emergency-plumber", title: "Emergency Plumber in Weston, FL", short: "Fast guidance when a plumbing problem cannot wait.", icon: Clock3, image: "/assets/emergency.jpg", 
    intro: "Burst pipes, overflowing fixtures, sudden loss of water, and active leaks can escalate quickly. Call Weston FL Plumber for help understanding the first steps and getting the problem under control.", 
    benefits: ["Phone guidance for immediate containment", "Focused attention on active water damage risks", "A calm, methodical approach under pressure"], 
    process: ["Call as soon as you notice active water or sewage", "Shut off the nearest fixture valve or main supply if safe", "We identify the source and limit further damage", "We outline the repair needed to restore service"],
    symptoms: ["Water rapidly flooding floors", "Sewage backing up into tubs or showers", "Complete loss of water pressure", "Loud banging noises from pipes"],
    causes: "Emergencies typically stem from severe blockages, sudden pipe ruptures due to pressure spikes, failed water heater tanks, or collapsed sewer lines.",
    costFactors: "Emergency plumbing costs factor in immediate dispatch priority, after-hours requirements, and the scale of the immediate mitigation needed to protect the property.",
    emergencyInfo: "Do not wait. Shut off the main water valve if safe to do so. If electrical outlets are near standing water, turn off the breaker. Call us immediately for dispatch.",
    reviewName: "Tim Flounder"
  },
  { 
    slug: "plumbing-repair-weston-fl", baseSlug: "plumbing-repair", title: "Plumbing Repair in Weston, FL", short: "Dependable repairs for fixtures, lines, and plumbing systems.", icon: Hammer, image: "/assets/repair.jpg", 
    intro: "Small plumbing issues rarely improve on their own. We troubleshoot dripping fixtures, weak flow, running toilets, supply line concerns, and other repairs with an emphasis on the underlying cause—not just the symptom.", 
    benefits: ["Diagnosis before parts are changed", "Repair-first thinking when it makes sense", "Respect for your time and your home"], 
    process: ["Describe the issue and when it started", "Inspect connected components", "Repair the source and test the result", "Share care notes to help prevent repeat issues"],
    symptoms: ["Persistent leaks under sinks", "Loose or wobbly fixtures", "Discolored water", "Hissing sounds from supply lines"],
    causes: "Many repairs are necessitated by degraded O-rings, hard water mineral scale buildup, corroded connections, or faulty internal valve mechanisms.",
    costFactors: "Repair costs depend on whether individual components (like a cartridge or washer) can be replaced, or if the entire assembly has failed and requires replacement.",
    emergencyInfo: "If a fixture breaks completely and cannot be turned off, use the angle stop valve beneath the sink or behind the toilet to isolate the flow.",
    reviewName: "Nebulxx"
  },
  { 
    slug: "drain-cleaning-weston-fl", baseSlug: "drain-cleaning", title: "Drain Cleaning in Weston, FL", short: "Clear slow, backed-up, and recurring drains.", icon: Waves, image: "/assets/drain.jpg", 
    intro: "A slow drain is useful information. We help Weston homeowners clear kitchen, bath, laundry, and main-line drainage problems while looking for signs of buildup, intrusion, or a deeper restriction.", 
    benefits: ["Approach matched to the drain and blockage", "Attention to recurring backups", "Practical maintenance guidance"], 
    process: ["Identify which fixtures are affected", "Check for patterns and nearby access points", "Clear the restriction with the appropriate method", "Run water and confirm the drain is moving properly"],
    symptoms: ["Water pooling in showers", "Gurgling sounds when draining", "Foul smells from the sink", "Multiple fixtures backing up simultaneously"],
    causes: "Drains commonly clog due to hair, soap scum, cooking grease, food particles, or in severe cases, tree root intrusion into the main line.",
    costFactors: "The cost to clear a drain depends on the location of the blockage, the severity of the clog, and whether advanced equipment (like a camera inspection or hydro-jet) is required.",
    emergencyInfo: "If sewage is backing up into your home, stop using all water immediately to prevent further overflow, and call us for emergency extraction and clearing.",
    reviewName: "Maggie Lopez"
  },
  { 
    slug: "sewer-line-repair-weston-fl", baseSlug: "sewer-line-repair", title: "Sewer Line Repair in Weston, FL", short: "Support for sewer backups, odors, and line concerns.", icon: Waves, image: "/assets/sewer.jpg", 
    intro: "Sewer line problems can affect comfort, sanitation, and the way your whole property functions. We help locate the problem, explain what the symptoms may mean, and identify the least disruptive path forward.", 
    benefits: ["Careful attention to recurring symptoms", "Clear explanation of repair considerations", "Solutions focused on restoring dependable flow"], 
    process: ["Review backups, odors, and drainage patterns", "Inspect accessible cleanouts and connected fixtures", "Discuss repair scope and practical next steps", "Restore flow and verify the system response"],
    symptoms: ["Soggy or unusually green patches in the yard", "Sewage odors outside or inside", "Multiple drains backing up at once", "Pest issues near drain lines"],
    causes: "Sewer lines can fail due to aging cast iron or clay pipes, shifting soil, heavy tree root infiltration, or ground settling.",
    costFactors: "Sewer repair is heavily influenced by the depth of the line, the extent of the damage, and whether trenchless methods can be used versus traditional excavation.",
    emergencyInfo: "A compromised sewer line is a sanitation risk. Keep children and pets away from pooling wastewater and avoid flushing toilets until the line is assessed.",
    reviewName: "michelin star"
  },
  { 
    slug: "leak-detection-weston-fl", baseSlug: "leak-detection", title: "Leak Detection in Weston, FL", short: "Find hidden water leaks before they become bigger problems.", icon: Gauge, image: "/assets/hero.jpg", 
    intro: "Some leaks announce themselves. Others show up as a warm wall, a damp cabinet, an unexplained water bill, or a sound behind the wall. We help Weston property owners narrow down the source and make an informed repair decision.", 
    benefits: ["Focus on source, not just visible moisture", "Careful inspection around fixtures and supply lines", "Actionable next steps after the cause is identified"], 
    process: ["Map the symptoms and affected areas", "Check fixtures, valves, visible lines, and pressure clues", "Narrow the likely source", "Repair or refer the next step based on what is found"],
    symptoms: ["Unexpected spikes in water bills", "Sound of running water when fixtures are off", "Warm spots on the floor", "Mold or mildew growth"],
    causes: "Hidden leaks are often caused by pinhole leaks in copper piping, failing joints, slab shifts, or high municipal water pressure.",
    costFactors: "Detection costs depend on the difficulty of locating the leak (e.g., under a concrete slab vs. behind drywall) and the equipment needed to pinpoint the exact location.",
    emergencyInfo: "If you suspect a major hidden leak, monitor your water meter. If the dial is spinning while all water is off, shut off the main valve and call for detection.",
    reviewName: "Sophia R"
  },
  { 
    slug: "water-heater-repair-weston-fl", baseSlug: "water-heater-repair", title: "Water Heater Repair in Weston, FL", short: "Restore reliable hot water and address heater concerns.", icon: Flame, image: "/assets/residential.jpg", 
    intro: "No hot water, inconsistent temperature, unusual sounds, and visible moisture around a heater all deserve attention. We help diagnose water heater concerns and explain the repair or replacement path that fits the situation.", 
    benefits: ["Diagnosis of common heater symptoms", "Attention to connections, valves, and visible condition", "Repair and replacement guidance in plain language"], 
    process: ["Review temperature, noise, and water symptoms", "Inspect the heater and surrounding connections", "Explain repairability and replacement considerations", "Test hot water delivery after the work"],
    symptoms: ["Water not getting hot enough", "Rusty or discolored hot water", "Popping or rumbling noises from the tank", "Water pooling around the base of the unit"],
    causes: "Water heater issues stem from burnt heating elements, faulty thermostats, sediment buildup in the tank, or a failing pressure relief valve.",
    costFactors: "Repair costs vary based on the specific part that failed (like a thermostat or element). If the tank itself is leaking, replacement is required.",
    emergencyInfo: "If your water heater is leaking heavily, turn off the cold water supply valve on top of the tank and shut off the power at the breaker (or gas supply) immediately.",
    reviewName: "Lorenzo C"
  },
  { 
    slug: "water-heater-installation-weston-fl", baseSlug: "water-heater-installation", title: "Water Heater Installation in Weston, FL", short: "A considered approach to new water heater installation.", icon: Droplets, image: "/assets/repair.jpg", 
    intro: "A new water heater is a household decision, not simply a box swap. We help evaluate your existing setup, usage needs, available space, and the practical details that affect a clean installation.", 
    benefits: ["Installation planning around your home", "Clear discussion of equipment and connections", "Attention to safe, tidy final setup"], 
    process: ["Review household hot-water needs", "Assess the existing location and connections", "Coordinate the installation approach", "Verify operation and explain basic care"],
    symptoms: ["Existing tank is over 10-12 years old", "Frequent repairs are becoming costly", "Tank is visibly rusting or leaking", "Upgrading to a more energy-efficient model"],
    causes: "Tanks eventually rust through, or households outgrow their current hot water capacity, making a new installation the most practical choice.",
    costFactors: "Installation costs include the price of the new unit (tank vs. tankless), any necessary modifications to plumbing or venting, and the safe disposal of the old unit.",
    emergencyInfo: "If your old tank bursts, we can expedite the installation of a new unit to restore your household's hot water safely and quickly.",
    reviewName: "alex roman"
  },
  { 
    slug: "toilet-repair-weston-fl", baseSlug: "toilet-repair", title: "Toilet Repair in Weston, FL", short: "Fix running, leaking, rocking, or clogged toilets.", icon: Bath, image: "/assets/sewer.jpg", 
    intro: "A toilet that runs, rocks, leaks, or clogs can waste water and disrupt your day. We troubleshoot the fixture, supply, seal, and drain connection to identify the repair that makes sense.", 
    benefits: ["Repair of common toilet symptoms", "Attention to floor and supply-line leaks", "Testing for proper fill, flush, and shutoff"], 
    process: ["Describe the issue and frequency", "Inspect tank, bowl, supply, seal, and connection", "Repair the failed component or explain options", "Test the fixture through multiple cycles"],
    symptoms: ["Toilet runs constantly", "Water pooling at the base", "Weak or incomplete flushes", "Fixture rocks when sat on"],
    causes: "Common culprits include a deteriorated flapper, a faulty fill valve, a failed wax ring seal at the base, or blockages in the trap.",
    costFactors: "Toilet repairs are generally straightforward and cost-effective, depending on whether internal parts just need replacing or if the toilet must be pulled to replace the wax ring.",
    emergencyInfo: "If a toilet is overflowing, immediately turn the shutoff valve located on the wall behind the toilet clockwise to stop the water flow.",
    reviewName: "Tim Flounder"
  }
];
