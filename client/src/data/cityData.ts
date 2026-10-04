export interface CityProfile {
  name: string;
  slug: string;
  cityOnly: string;
  county: string;
  tagline: string;
  neighborhoods: string[];
  housingEra: string;
  waterUtility: string;
  commonIssues: string[];
  localOverview: string;
  responseNote: string;
  faqs: { question: string; answer: string }[];
  review: { name: string; quote: string; neighborhood: string; rating: number };
}

export interface LocalServiceContent {
  headline: string;
  intro: string;
  localContext: string;
  symptoms: string[];
  causes: string;
  costFactors: string;
  emergencyTip: string;
  faqs: { question: string; answer: string }[];
}

export const cityProfiles: Record<string, CityProfile> = {
  "Miramar": {
    name: "Miramar, FL",
    slug: "miramar-fl",
    cityOnly: "Miramar",
    county: "Broward County",
    tagline: "Dependable plumbing for Miramar's growing neighborhoods",
    neighborhoods: ["SilverLakes", "Sunset Lakes", "Miramar Town Center", "Historic Miramar", "Vizcaya", "Riviera Isles", "Monarch Lakes"],
    housingEra: "1990s to 2010s master-planned developments and established East Miramar residences",
    waterUtility: "City of Miramar Water & Wastewater Division",
    commonIssues: [
      "High municipal main pressure placing strain on supply line shutoff valves",
      "Garbage disposal and kitchen drain grease buildup in two-story homes",
      "Pinhole copper leaks due to local soil moisture fluctuations",
      "Water heater sediment accumulation from South Florida minerals"
    ],
    localOverview: "Miramar stretches from historic eastern neighborhoods to sprawling western master-planned communities like SilverLakes and Sunset Lakes. Properties in West Miramar feature modern dual-bath plumbing layouts that demand reliable water pressure, while East Miramar homes often require fixture updates and supply line inspections. Weston FL Plumber provides fast dispatch to Miramar via I-75 and Pembroke Road.",
    responseNote: "Located just 12–15 minutes north-west of Miramar, our technicians arrive equipped to handle residential and commercial plumbing needs promptly.",
    faqs: [
      {
        question: "How quickly can a plumber respond to Miramar homes near SilverLakes or Town Center?",
        answer: "Our main dispatch location in Weston is approximately 15 minutes from Miramar via I-75. For active emergencies like burst pipes or main line sewage backups, we prioritize immediate dispatch."
      },
      {
        question: "Why do water heaters fail in Miramar properties?",
        answer: "Miramar homes built during the 1990s and 2000s boom often have original or second-generation water heaters reaching the end of their 8–12 year lifespan. Minerals in South Florida water create sediment scale on heating elements, lowering efficiency."
      },
      {
        question: "Do I need a permit for major plumbing work in Miramar?",
        answer: "Yes, major repairs such as whole-home repiping, water heater replacements, and sewer lateral line replacements require permits from the City of Miramar Building Department. We handle permit submission and code compliance for all eligible work."
      }
    ],
    review: {
      name: "Alejandro M.",
      quote: "Our water heater started leaking on a Sunday in SilverLakes. The team was at our front door within 45 minutes, explained our repair vs replacement options clearly, and installed a new tank the same afternoon.",
      neighborhood: "SilverLakes, Miramar",
      rating: 5
    }
  },
  "Pembroke Pines": {
    name: "Pembroke Pines, FL",
    slug: "pembroke-pines-fl",
    cityOnly: "Pembroke Pines",
    county: "Broward County",
    tagline: "Expert local plumbing service for Pembroke Pines households",
    neighborhoods: ["Pembroke Falls", "Chapel Trail", "Towngate", "Grand Palms", "Pembroke Lakes", "Silver Lakes", "Spring Valley"],
    housingEra: "1980s to 2000s single-family gated communities and townhome developments",
    waterUtility: "City of Pembroke Pines Utilities Department",
    commonIssues: [
      "Slab leaks under concrete foundations in post-tension slab homes",
      "Recirculating pump failures and dual water heater balance issues",
      "Clogged bathroom stack lines and double-sink drainage clogs",
      "Corroded angle stops beneath kitchen and bathroom vanities"
    ],
    localOverview: "As one of Broward County's largest suburban communities, Pembroke Pines features thousands of single-family homes in communities like Pembroke Falls, Chapel Trail, and Towngate. Many homes built in the 1980s and 1990s are currently experiencing aging angle stop valves, failing water heaters, and slab leak concerns. Weston FL Plumber serves Pembroke Pines via Pines Boulevard, Sheridan Street, and I-75.",
    responseNote: "We maintain daily service routes through Pembroke Pines, ensuring rapid arrival for routine maintenance and 24/7 urgent calls.",
    faqs: [
      {
        question: "What are the early signs of a slab leak in Pembroke Pines homes?",
        answer: "Warm spots on tile or wood floors, unexplained increases in your Pembroke Pines water bill, or the constant faint sound of running water behind walls or under floors indicate a slab leak."
      },
      {
        question: "How do you handle plumbing service in gated Pembroke Pines communities?",
        answer: "Our technicians provide gate clearance information in advance and carry full state licensing (#CFC1428593) and insurance credentials required by Pembroke Pines HOA management boards."
      },
      {
        question: "Can you clear main drain clogs in Pembroke Pines split-level or two-story homes?",
        answer: "Yes. We use professional drain snakes and high-definition video sewer inspection cameras to locate and clear line blockages without damaging your home's interior."
      }
    ],
    review: {
      name: "Sophia R.",
      quote: "Called after noticing a warm spot under our living room floor tile in Pembroke Falls. They pinpointed a slab leak accurately with non-invasive detection tools and repaired it cleanly.",
      neighborhood: "Pembroke Falls, Pembroke Pines",
      rating: 5
    }
  },
  "Cooper City": {
    name: "Cooper City, FL",
    slug: "cooper-city-fl",
    cityOnly: "Cooper City",
    county: "Broward County",
    tagline: "Dedicated plumbing repair & maintenance in Cooper City",
    neighborhoods: ["Country Glen", "Rock Creek", "Embassy Lakes", "Diamond Head", "Royal Palm Ranches", "Hibbs Grove"],
    housingEra: "1970s to 1990s family residential neighborhoods and custom acreage estates",
    waterUtility: "Cooper City Utilities Department",
    commonIssues: [
      "Aging cast-iron drain pipe deterioration beneath 1970s/80s slabs",
      "Low water pressure from sediment accumulation in kitchen aerators and showerheads",
      "Toilet flush valve failure and leaking wax ring seals",
      "Lack of accessible cleanouts for main line drain cleaning"
    ],
    localOverview: "Cooper City is known for its strong community feel, excellent parks, and established single-family homes in neighborhoods like Rock Creek and Embassy Lakes. Many of Cooper City's homes constructed in the 1970s and 1980s have original cast-iron sewer lines nearing their 50-year lifespan. Our team provides non-invasive camera inspections, drain jetting, line repairs, and modern fixture updates across Cooper City.",
    responseNote: "Located just east of Weston along Griffin Road, Cooper City is within our core immediate service radius.",
    faqs: [
      {
        question: "Are cast iron sewer pipes common in older Cooper City homes?",
        answer: "Yes. Homes in Rock Creek and older Cooper City subdivisions built prior to 1985 frequently have cast iron lines that corrode internally over time. We conduct camera inspections to evaluate pipe structural integrity."
      },
      {
        question: "How can I improve low water pressure in my Cooper City master bathroom?",
        answer: "Low pressure is often caused by hard water scale clogging fixture cartridges or failing pressure reducing valves (PRVs). We inspect your main supply line and valves to restore strong, steady flow."
      },
      {
        question: "Do you install cleanouts for Cooper City home drain systems?",
        answer: "Yes. Installing an exterior main sewer cleanout allows plumbers to clear main line backups easily without bringing heavy equipment through your home."
      }
    ],
    review: {
      name: "Nebulxx K.",
      quote: "We had a recurring drain backup in Rock Creek. They ran a video camera down our sewer line, showed us where root intrusion was happening, and installed a two-way cleanout. Excellent service!",
      neighborhood: "Rock Creek, Cooper City",
      rating: 5
    }
  },
  "Southwest Ranches": {
    name: "Southwest Ranches, FL",
    slug: "southwest-ranches-fl",
    cityOnly: "Southwest Ranches",
    county: "Broward County",
    tagline: "Specialized estate & rural plumbing support in Southwest Ranches",
    neighborhoods: ["Sunshine Ranches", "Rolling Oaks", "Landmark Ranch Estates", "Country Estates", "Green Meadows"],
    housingEra: "Custom acreage luxury estates, ranch properties, and semi-rural residential parcels",
    waterUtility: "Private Well Systems & Municipal Water Connections",
    commonIssues: [
      "Septic tank outlet line blockages and main line transition stress",
      "Well water pump pressure tank check valve and filtration hookups",
      "High-capacity commercial-grade water heater demand in large luxury estates",
      "Long exterior underground supply line leaks across large acreage lots"
    ],
    localOverview: "Southwest Ranches offers a unique rural and equestrian lifestyle with custom homes on multi-acre lots. Plumbing here often involves complex setups—including private well water systems, high-capacity dual water heaters, extensive irrigation supply runs, and septic tank connections. Weston FL Plumber brings specialized diagnostic tools and estate plumbing expertise to properties throughout Sunshine Ranches and Rolling Oaks.",
    responseNote: "Sharing our southern boundary directly with Weston, Southwest Ranches properties receive rapid priority technician dispatch.",
    faqs: [
      {
        question: "Do you service properties on well water and septic systems in Southwest Ranches?",
        answer: "Yes. We understand the specific demands of private well plumbing, including pressure tanks, inline water treatment filters, and main sewer lines connecting to septic tanks."
      },
      {
        question: "What water heater setup is best for large custom homes in Sunshine Ranches?",
        answer: "Large estates with 5+ bathrooms often benefit from high-efficiency tankless water heaters installed in series or recirculating loop systems that provide instant hot water to distant bathrooms."
      },
      {
        question: "How do you locate leaks on long driveway supply lines in Southwest Ranches?",
        answer: "We utilize electro-acoustic leak detectors and digital line tracing equipment to locate underground leaks across expansive yards without unnecessary excavation."
      }
    ],
    review: {
      name: "Lorenzo C.",
      quote: "Living on a 2-acre lot in Rolling Oaks, getting plumbers who understand complex estate plumbing can be tough. Weston FL Plumber diagnosed our well filtration pressure loss quickly and fixed the main valve.",
      neighborhood: "Rolling Oaks, Southwest Ranches",
      rating: 5
    }
  },
  "Davie": {
    name: "Davie, FL",
    slug: "davie-fl",
    cityOnly: "Davie",
    county: "Broward County",
    tagline: "Prompt, honest plumbing repair & installation for Davie residents",
    neighborhoods: ["Pine Island Ridge", "Shenandoah", "Davie Ranches", "Forest Ridge", "Arrowhead", "Waterfront", "Long Lake Ranches"],
    housingEra: "1970s to 2010s master-planned subdivisions, equestrian properties, and lakefront estates",
    waterUtility: "Town of Davie Water & Sewer Department / Broward County Water",
    commonIssues: [
      "Oak tree root intrusion into sewer lateral pipes in established Davie neighborhoods",
      "Hard water scale buildup causing premature water heater element failure",
      "Main water valve corrosion and outdoor hose bib leaks",
      "Kitchen sink disposal jams and drain line slow flows"
    ],
    localOverview: "Davie combines western equestrian heritage with vibrant residential neighborhoods near Nova Southeastern University and Pine Island Ridge. Established tree-lined communities in Davie frequently encounter root intrusion in sewer laterals and hard water mineral deposits affecting water heaters. Weston FL Plumber provides comprehensive plumbing services across Davie via Griffin Road, Stirling Road, and I-595.",
    responseNote: "Located right next door to Davie, our service vans frequent Pine Island Ridge and Shenandoah daily.",
    faqs: [
      {
        question: "Why are tree roots damaging sewer pipes in older Davie neighborhoods like Forest Ridge?",
        answer: "Mature oak and ficus trees seek water moisture near underground pipe joints. Micro-cracks in older clay or cast-iron pipes allow roots to enter, expand, and block wastewater flow."
      },
      {
        question: "Does Davie water cause scale inside water heater tanks?",
        answer: "Yes. South Florida municipal and well water contains calcium and magnesium. Without periodic tank flushing, sediment builds up at the bottom of tank water heaters, causing popping noises and element burnout."
      },
      {
        question: "What should I do if a fixture bursts in my Davie home?",
        answer: "Immediately locate the individual shutoff valve under the sink/toilet or turn off your main home water valve on the exterior wall. Then call our emergency dispatch line."
      }
    ],
    review: {
      name: "Maggie Lopez",
      quote: "My kitchen sink backed up completely in Shenandoah. They came out with hydro-jetting equipment, cleared out years of grease buildup cleanly, and charged a fair price.",
      neighborhood: "Shenandoah, Davie",
      rating: 5
    }
  },
  "Plantation": {
    name: "Plantation, FL",
    slug: "plantation-fl",
    cityOnly: "Plantation",
    county: "Broward County",
    tagline: "Comprehensive local plumbing solutions in Plantation, FL",
    neighborhoods: ["Jacaranda", "Plantation Acres", "Plantation Isles", "Central Plantation", "Hawks Landing", "Mirror Lake"],
    housingEra: "1960s to 1990s mature suburban residential communities and gated luxury enclaves",
    waterUtility: "City of Plantation Utilities Department",
    commonIssues: [
      "Cast-iron sewer line bottom channeling and structural decay in 1960s/70s homes",
      "Heavy root blockage in main sewer lines from dense oak canopy",
      "Leaking shower valves and worn single-handle faucet cartridges",
      "Water heater replacement & tankless gas conversion in Plantation Acres"
    ],
    localOverview: "Plantation is known for its tree-lined streets, classic 1960s–1980s ranch homes in Central Plantation and Jacaranda, and upscale estates in Hawks Landing. Many classic Plantation homes have cast-iron plumbing systems that are over 40 years old, requiring hydro-jetting, trenchless sewer repairs, or main stack replacements. Weston FL Plumber delivers specialized pipe restoration and general plumbing to Plantation homeowners.",
    responseNote: "Just 10 minutes east on I-595 or Broward Blvd, our technicians provide quick turnaround for Plantation service requests.",
    faqs: [
      {
        question: "How do I know if the cast-iron pipes in my 1970s Plantation home need replacement?",
        answer: "Frequent toilet backups, foul sewer gas odors, slow drains across multiple bathrooms, or dark water returning up bathtub drains indicate cast-iron pipe deterioration."
      },
      {
        question: "Do you offer tankless water heater installations in Plantation Acres?",
        answer: "Yes. We install high-efficiency gas and electric tankless water heaters that provide endless hot water while taking up significantly less space."
      },
      {
        question: "Are your plumbers licensed to operate in Plantation?",
        answer: "Yes. We hold Florida State Certified Master Plumbing License #CFC1428593 and carry full worker's compensation and liability coverage required by the City of Plantation."
      }
    ],
    review: {
      name: "alex roman",
      quote: "Replaced our old 1970s cast iron drain line under the driveway in Jacaranda. Their team was professional, kept the site clean, and communicated every step of the permit process.",
      neighborhood: "Jacaranda, Plantation",
      rating: 5
    }
  },
  "Sunrise": {
    name: "Sunrise, FL",
    slug: "sunrise-fl",
    cityOnly: "Sunrise",
    county: "Broward County",
    tagline: "Fast & reliable residential plumbing in Sunrise, FL",
    neighborhoods: ["Sawgrass Mills Area", "Welleby", "Sunrise Golf Village", "Artesia", "Springtree", "Sunrise Lakes"],
    housingEra: "1970s single-family homes, 1980s communities, and modern multi-story condominium complexes",
    waterUtility: "City of Sunrise Utilities Department",
    commonIssues: [
      "Multi-story condo stack line backups and shared drain restrictions",
      "Failing pressure reducing valves causing high water pressure spikes",
      "Running toilets and broken tank fill mechanisms in older units",
      "Corroded kitchen sink drain traps and garbage disposal leaks"
    ],
    localOverview: "Sunrise spans diverse neighborhoods—from active adult communities like Sunrise Lakes to family developments in Welleby and high-end residences near Sawgrass Mills and Artesia. Plumbing needs in Sunrise range from condo stack clearing to high-pressure valve replacements and kitchen remodels. Weston FL Plumber serves Sunrise via the Sawgrass Expressway, NW 136th Ave, and Sunrise Blvd.",
    responseNote: "Located directly north of Weston, Sunrise is one of our fastest response service areas.",
    faqs: [
      {
        question: "Can you service plumbing issues in Sunrise condominium complexes?",
        answer: "Yes. We frequently work in Sunrise condo buildings and understand building shutoff rules, main stack isolation, and HOA insurance requirements."
      },
      {
        question: "Why is water pressure so high in some Sunrise neighborhoods?",
        answer: "The City of Sunrise municipal water supply pumps at high PSI to maintain pressure across vast distribution areas. If your home's Pressure Reducing Valve (PRV) fails, water pressure can exceed safe limits, stressing pipes and fixtures."
      },
      {
        question: "Do you offer emergency leak repairs near Sawgrass Mills?",
        answer: "Yes. We operate 24/7 emergency dispatch for burst pipes, sudden water heater ruptures, and severe drain line backups throughout Sunrise."
      }
    ],
    review: {
      name: "Tim Flounder",
      quote: "Our master toilet was constantly running and the shutoff valve underneath wouldn't turn. Tech came out to Welleby within an hour, replaced the valve and internal flapper mechanism fast.",
      neighborhood: "Welleby, Sunrise",
      rating: 5
    }
  },
  "Pembroke Park": {
    name: "Pembroke Park, FL",
    slug: "pembroke-park-fl",
    cityOnly: "Pembroke Park",
    county: "Broward County",
    tagline: "Straightforward, professional plumbing in Pembroke Park",
    neighborhoods: ["Lake Shore", "Parkwoods", "Pembroke Park Estates", "SW 30th Avenue corridor"],
    housingEra: "Established mid-century residential homes, mobile home parks, and light commercial properties",
    waterUtility: "Broward County Water and Wastewater Services",
    commonIssues: [
      "Commercial and residential sewer main line grease and debris clogs",
      "Older galvanized iron supply line corrosion and reduced flow",
      "Backflow preventer testing and annual maintenance",
      "Outdoor shutoff valve and hose bib replacement"
    ],
    localOverview: "Pembroke Park combines cozy residential developments with light industrial and commercial zones in South Broward. Homes in Pembroke Park often require specialized care for aging galvanized supply lines, outdoor main shutoffs, and drain maintenance. Weston FL Plumber offers honest upfront pricing and thorough diagnostics to residential and commercial clients in Pembroke Park.",
    responseNote: "Accessible via Florida's Turnpike and Hallandale Beach Blvd, we provide full coverage for Pembroke Park.",
    faqs: [
      {
        question: "Do you service mobile home and manufactured home plumbing in Pembroke Park?",
        answer: "Yes. We work on under-chassis supply lines, specialized shutoff valves, and sewer drop connections common in manufactured home communities."
      },
      {
        question: "What causes discolored water in older Pembroke Park homes?",
        answer: "Older galvanized steel pipes internal rust over time. When water sits in rusty pipes, it can appear brown or yellow. We offer pipe inspections and repiping solutions."
      },
      {
        question: "How fast can I get a plumber to Pembroke Park for a sewer backup?",
        answer: "We offer 24/7 priority emergency dispatch to Pembroke Park for active sewage backups and major leaks."
      }
    ],
    review: {
      name: "michelin star",
      quote: "Honest plumbers who know what they're doing. They cleared out our main drain line in Pembroke Park after another company failed to do it right. Highly recommended!",
      neighborhood: "Pembroke Park",
      rating: 5
    }
  },
  "Hialeah": {
    name: "Hialeah, FL",
    slug: "hialeah-fl",
    cityOnly: "Hialeah",
    county: "Miami-Dade County",
    tagline: "Reliable, high-quality plumbing service for Hialeah homes",
    neighborhoods: ["Palm Springs", "Hialeah Park", "West Hialeah", "Essex Village", "Hialeah Gardens border"],
    housingEra: "1950s to 1980s single-family homes, duplexes, and multi-family residential units",
    waterUtility: "City of Hialeah Department of Water and Sewers",
    commonIssues: [
      "1960s cast-iron sewer line corrosion beneath terrazzo and tile floors",
      "Frequent kitchen sink and washing machine drain line backups",
      "Water heater replacement in tight utility closets",
      "Sub-standard past plumbing DIY fixes requiring professional code correction"
    ],
    localOverview: "Hialeah is one of South Florida's most vibrant and densely populated cities, featuring classic mid-century homes with terrazzo or tile flooring over concrete slabs. Many Hialeah residences have original cast-iron drainage systems installed in the 1960s or 1970s that require modern camera diagnostics, hydro-jetting, or trenchless restoration. Weston FL Plumber brings bilingual communication and expert workmanship to Hialeah homes via I-75 and US-27.",
    responseNote: "We serve North Miami-Dade and Hialeah directly down the I-75 corridor from our Weston operational base.",
    faqs: [
      {
        question: "Do your plumbers speak Spanish to assist Hialeah homeowners?",
        answer: "Sí, contamos con personal bilingüe listo para explicar diagnósticos, opciones de reparación y presupuestos en español con total claridad."
      },
      {
        question: "Why do drains back up frequently in 1960s Hialeah homes?",
        answer: "Cast iron pipes in 1960s homes naturally deteriorate after 50+ years, forming internal ridges that trap toilet paper and grease. We use video cameras to show you the exact condition of your pipe."
      },
      {
        question: "Can you replace a water heater installed in a tight Hialeah utility closet?",
        answer: "Yes. We measure precise dimensions and fit modern energy-efficient tank or tankless units into compact utility rooms while meeting all current Miami-Dade building codes."
      }
    ],
    review: {
      name: "Alejandro M.",
      quote: "Excelente servicio en Hialeah. Teníamos un problema grave con el drenaje principal y lo resolvieron el mismo día con equipos profesionales. Muy satisfecho con el trabajo.",
      neighborhood: "West Hialeah",
      rating: 5
    }
  },
  "Weston": {
    name: "Weston, FL",
    slug: "weston-fl",
    cityOnly: "Weston",
    county: "Broward County",
    tagline: "Weston's premier local plumbing contractor since day one",
    neighborhoods: ["Windmill Ranches", "Savanna", "Isles at Weston", "Weston Hills", "Tequesta", "Bonaventure", "The Isles"],
    housingEra: "1980s to 2010s high-end master-planned residential communities and luxury estates",
    waterUtility: "City of Weston / Broward County Water and Wastewater",
    commonIssues: [
      "Water heater replacement & tankless gas retrofits in Savanna & Weston Hills",
      "Slab leak detection in post-tension foundations",
      "High-end kitchen and bath fixture installation",
      "Backflow preventer assembly certification and maintenance"
    ],
    localOverview: "As our home base, Weston represents the gold standard of our service commitment. From luxury estates in Windmill Ranches to vibrant family communities in Savanna and Weston Hills, we deliver prompt, meticulous plumbing repairs, water heater replacements, and leak detection services. Our office at 2645 Executive Park Drive allows us to reach any Weston home in minutes.",
    responseNote: "Our primary office is right here in Weston on Executive Park Drive for immediate 24/7 service.",
    faqs: [
      {
        question: "Where is your Weston plumbing office located?",
        answer: "Our main headquarters is located at 2645 Executive Park Drive, Weston, FL 33331. We are proud to serve our home community of Weston first and foremost."
      },
      {
        question: "How long does a water heater installation take in Weston homes?",
        answer: "Standard tank replacements typically take 2 to 4 hours. Tankless gas or electric conversions usually take 4 to 6 hours including line fitting and testing."
      },
      {
        question: "Are your plumbers fully licensed and insured in Florida?",
        answer: "Yes. We hold Florida Certified Plumbing Contractor License #CFC1428593 and carry comprehensive liability and worker's compensation insurance."
      }
    ],
    review: {
      name: "Alejandro",
      quote: "They are dependable, communicated well, and took the time to make sure the job was done correctly in Savanna rather than rushing. It's obvious they care about their reputation.",
      neighborhood: "Savanna, Weston",
      rating: 5
    }
  }
};

// Generate localized service content matrix to avoid generic template replacement
export function getLocalizedServiceContent(serviceBaseSlug: string, cityOnly: string): LocalServiceContent {
  const profile = cityProfiles[cityOnly] || cityProfiles["Weston"];
  const city = cityOnly;

  const contentMap: Record<string, (c: string, prof: CityProfile) => LocalServiceContent> = {
    "emergency-plumber": (c, prof) => ({
      headline: `24/7 Emergency Plumber in ${c}, FL`,
      intro: `When a water heater bursts, a main sewer backs up, or a supply line snaps in your ${c} home, waiting until business hours isn't an option. Weston FL Plumber provides 24-hour emergency response to all ${c} neighborhoods including ${prof.neighborhoods.slice(0, 3).join(", ")}.`,
      localContext: `Homes in ${c} often feature ${prof.housingEra}. In emergency situations, our technicians quickly isolate main shutoff valves, contain active water damage risks, and perform immediate repairs tailored to ${c}'s plumbing infrastructure.`,
      symptoms: [
        `Active water flooding floors or ceilings in ${c} residences`,
        `Raw sewage backing up into bathtubs or showers`,
        `Complete loss of water pressure across the entire property`,
        `Loud banging sounds (water hammer) or whistling in main supply lines`
      ],
      causes: `Emergency failures in ${c} typically stem from aging shutoff valves, sudden main line pressure spikes from municipal water feeds, collapsed cast iron or clay sewer laterals, or failed water heater expansion tanks.`,
      costFactors: `Emergency service costs depend on after-hours priority dispatch, whether the main supply must be isolated, and the mitigation required to protect your ${c} home from water damage. We provide clear pricing upfront before work begins.`,
      emergencyTip: `Locate your main water shutoff valve immediately (usually on the exterior front wall or near the meter) and turn it 90 degrees clockwise. If water is near electrical outlets, flip the main circuit breaker before entering.`,
      faqs: [
        {
          question: `How fast can an emergency plumber arrive at my ${c} home?`,
          answer: `Our technicians dispatch directly from our nearby Weston hub. Arrival times in ${c} average 20–30 minutes depending on traffic and your specific neighborhood.`
        },
        {
          question: `Do you handle middle-of-the-night emergency calls in ${c}?`,
          answer: `Yes. Our phone line (${prof.name === "Weston, FL" ? "754-283-8022" : "754-283-8022"}) is answered 24 hours a day, 7 days a week by local dispatchers who guide you through shutoff steps while help is on the way.`
        },
        {
          question: `What should I do while waiting for the plumber to arrive in ${c}?`,
          answer: `Shut off the main water valve if safe to do so, open outdoor hose bibs to drain excess pressure, mop up standing water, and document damage for your homeowner's insurance policy.`
        }
      ]
    }),
    "drain-cleaning": (c, prof) => ({
      headline: `Professional Drain Cleaning in ${c}, FL`,
      intro: `Slow drains, gurgling sinks, and recurring shower backups in ${c} homes are signs of deep line restrictions. We provide thorough drain cleaning, snake augering, and hydro-jetting across ${c} neighborhoods like ${prof.neighborhoods.slice(0, 3).join(", ")}.`,
      localContext: `Many ${c} properties have ${prof.housingEra}. ${c} homes often face drain restrictions caused by mature tree root intrusion into lateral lines, grease accumulation, or deteriorated internal pipe walls.`,
      symptoms: [
        `Water standing in showers or sinks in your ${c} home`,
        `Gurgling noises coming from toilets when running the washing machine`,
        `Foul sewer odors escaping from kitchen or laundry drains`,
        `Multiple fixtures backing up simultaneously on ground level`
      ],
      causes: `In ${c}, drain clogs are frequently caused by hair and soap scum in bathroom lines, solidified cooking oils in kitchen pipes, or intrusive roots from nearby tropical trees seeking moisture in main sewer laterals.`,
      costFactors: `Drain cleaning pricing in ${c} depends on the location of the restriction (branch line vs main sewer stack), accessibility of exterior cleanouts, and whether video camera inspection or hydro-jetting is required.`,
      emergencyTip: `If multiple drains in your ${c} home are backing up at once, stop using all water immediately (washing machine, dishwasher, toilets) to prevent sewage overflow onto living area floors.`,
      faqs: [
        {
          question: `Why do chemical drain cleaners fail to fix clogs in ${c} homes?`,
          answer: `Over-the-counter liquid drain openers only burn small holes through organic clogs without removing the buildup. Chemical cleaners can also corrode older copper or cast-iron pipes found in ${c}.`
        },
        {
          question: `How do you clear heavy tree root blockages in ${c} sewer lines?`,
          answer: `We use heavy-duty electric drain augers with specialized cutting heads to cut through roots, followed by hydro-jetting to flush line walls clean. We then inspect the pipe with a video camera.`
        },
        {
          question: `Do you offer regular maintenance drain cleaning for ${c} properties?`,
          answer: `Yes. Annual drain maintenance and video inspections help prevent sudden backups in busy ${c} households and rental properties.`
        }
      ]
    }),
    "water-heater-repair": (c, prof) => ({
      headline: `Water Heater Repair & Diagnostics in ${c}, FL`,
      intro: `No hot water, lukewarm showers, rumbling tank noises, or moisture around your water heater in ${c}? Weston FL Plumber provides expert diagnostics and fast repair for tank and tankless water heaters in ${prof.neighborhoods.slice(0, 3).join(", ")} and throughout ${c}.`,
      localContext: `Water heaters in ${c} work hard against South Florida's mineral-rich water supply (${prof.waterUtility}). Over time, sediment settles at the bottom of heating tanks, causing element burnouts, noisy operation, and reduced efficiency in ${c} households.`,
      symptoms: [
        `Water not reaching desired temperature or running out quickly in ${c}`,
        `Rusty, brown, or foul-smelling hot water from faucets`,
        `Loud popping, crackling, or rumbling noises from the water heater tank`,
        `Water pooling around the base of the heater or leaking from relief valves`
      ],
      causes: `Common culprits in ${c} include failed upper/lower heating elements, faulty thermostats, corroded anode rods, leaking temperature-pressure relief (TPR) valves, or severe heavy mineral sediment buildup.`,
      costFactors: `Repair costs in ${c} depend on whether individual electrical components (thermostats, elements, valves) can be replaced versus structural tank corrosion requiring unit replacement. We always test components thoroughly first.`,
      emergencyTip: `If your water heater is actively leaking in ${c}, turn off the cold water inlet valve on top of the unit clockwise, and turn off the dedicated double-pole circuit breaker in your electrical panel immediately.`,
      faqs: [
        {
          question: `Is it worth repairing an 8-year-old water heater in ${c}?`,
          answer: `If the tank itself is sound and only an inexpensive electrical component (like a thermostat or element) failed, repair is cost-effective. If the tank shell is rusting or leaking, replacement is safer.`
        },
        {
          question: `Why is my water heater making a loud popping noise in ${c}?`,
          answer: `Popping noises are caused by water trapped underneath a layer of mineral scale at the bottom of the tank boiling up. Flushing the tank sediment can resolve the noise if done early.`
        },
        {
          question: `Can you fix tankless gas water heaters in ${c}?`,
          answer: `Yes. We service both electric and gas tankless units, including descaling heat exchangers, replacing ignition sensors, and clearing error codes.`
        }
      ]
    }),
    "water-heater-installation": (c, prof) => ({
      headline: `Water Heater Installation & Replacement in ${c}, FL`,
      intro: `Upgrade your ${c} home with a high-efficiency tank or tankless water heater. We provide precise sizing, code-compliant installation, and safe removal of old units across ${c} communities including ${prof.neighborhoods.slice(0, 3).join(", ")}.`,
      localContext: `Whether you are replacing an aging 50-gallon tank in ${c} or upgrading to a continuous gas/electric tankless system, our team ensures proper electrical wiring, thermal expansion tanks, code shutoff valves, and City of ${c} permit compliance.`,
      symptoms: [
        `Existing water heater in ${c} is over 10–12 years old`,
        `Visible rust stains or corrosion on the lower jacket of the tank`,
        `Frequent repairs are becoming more costly than replacing the unit`,
        `Household demand has grown beyond current hot water capacity`
      ],
      causes: `Water heater tanks eventually rust through due to galvanic corrosion and South Florida water mineral action. Replacing an outdated unit improves energy efficiency and protects your ${c} home from sudden tank rupture.`,
      costFactors: `Installation cost factors include unit capacity (40, 50, or 80-gallon tank vs tankless), electric vs gas hookups, thermal expansion tank additions, safety pan installation, and local municipal permit fees in ${c}.`,
      emergencyTip: `If your old water heater has ruptured, isolate the main water supply and call us for fast-track same-day replacement to minimize household disruption.`,
      faqs: [
        {
          question: `Should I switch to a tankless water heater in my ${c} home?`,
          answer: `Tankless systems provide endless hot water, save storage space, and reduce energy bills by up to 30%. They require adequate electrical amperage or gas line capacity, which we inspect prior to installation.`
        },
        {
          question: `How long does a standard water heater replacement take in ${c}?`,
          answer: `A standard tank-for-tank replacement typically takes 2 to 4 hours. Our plumbers handle draining, removal, new unit positioning, valve hookup, testing, and code permit filing.`
        },
        {
          question: `Do new water heater installations in ${c} require expansion tanks?`,
          answer: `Yes. Current Florida Building Code requires thermal expansion tanks on closed municipal water systems in ${c} to prevent dangerous pressure spikes when water heats up.`
        }
      ]
    }),
    "leak-detection": (c, prof) => ({
      headline: `Non-Invasive Leak Detection in ${c}, FL`,
      intro: `Unexplained water bill spikes, warm floor spots, or damp drywall in your ${c} home? Weston FL Plumber utilizes acoustic sound amplification and thermal imaging technology to pinpoint hidden leaks under slabs and behind walls in ${c}.`,
      localContext: `In ${c}, properties built during ${prof.housingEra} can develop slab leaks under concrete foundations or pinhole leaks in copper supply lines. Our non-destructive methods identify the exact leak location in ${c} homes without unnecessary wall or floor destruction.`,
      symptoms: [
        `Unusually high monthly water bills from ${prof.waterUtility}`,
        `Sound of running water inside walls or under floors when all faucets are off`,
        `Hot or warm spots on tile, laminate, or carpeted floors in ${c} homes`,
        `Peeling paint, damp baseboards, or unexplained mold growth`
      ],
      causes: `Slab and wall leaks in ${c} occur when copper pipes rub against rebar or concrete aggregates during thermal expansion, when aggressive soil minerals corrode pipe exteriors, or when water pressure spikes strain fitting joints.`,
      costFactors: `Detection costs depend on accessibility and whether the leak is beneath a thick concrete slab or inside a multi-story wall cavity. Pinpointing the leak accurately saves thousands in unnecessary exploratory demolition.`,
      emergencyTip: `Check your main water meter. If the low-flow indicator dial is spinning while every fixture in your ${c} house is turned off, you have an active hidden leak. Shut off the main valve and call for detection.`,
      faqs: [
        {
          question: `How do you find leaks under concrete slabs in ${c} without tearing up floors?`,
          answer: `We use electro-acoustic listening devices to detect subsurface pipe hiss, tracer gas technology, and thermal imaging cameras to locate the exact leak spot through concrete.`
        },
        {
          question: `What are my repair options once a slab leak is found in ${c}?`,
          answer: `Options include direct localized spot repair (opening a small tile/slab area), overhead pipe rerouting (bypassing the under-slab pipe through attic/walls), or epoxy lining.`
        },
        {
          question: `Does homeowner insurance cover leak detection in ${c}?`,
          answer: `Most insurance policies cover the leak detection service and water damage restoration costs, while the pipe repair itself is typically out-of-pocket. We provide detailed photographic reports for claims.`
        }
      ]
    }),
    "sewer-line-repair": (c, prof) => ({
      headline: `Sewer Line Repair & Replacement in ${c}, FL`,
      intro: `Sewer gas odors, recurring main line backups, or wet patches in your ${c} yard indicate sewer pipe damage. We provide video sewer inspections, trenchless pipe lining, and full sewer lateral repairs across ${c} neighborhoods like ${prof.neighborhoods.slice(0, 3).join(", ")}.`,
      localContext: `Sewer lines in ${c} face unique challenges depending on home age—from cracked cast iron under 1970s slabs to heavy tree root intrusion and ground settling in ${c} yards. We assess pipe integrity and recommend the least invasive repair.`,
      symptoms: [
        `Soggy, unusually lush green patches in your ${c} lawn`,
        `Persistent sewer gas smells near exterior walls or inside bathrooms`,
        `Multiple toilets and fixtures backing up simultaneously`,
        `Indentations or sinking pavers above your underground sewer line`
      ],
      causes: `Sewer line failures in ${c} stem from bottom channeling corrosion in cast iron pipes, tree root penetration at PVC joints, offset pipe connections caused by shifting Florida soils, or heavy grease buildup over decades.`,
      costFactors: `Sewer repair pricing depends on pipe depth, distance from home to city connection, whether trenchless pipe lining can be used, and driveway or landscaping restoration requirements in ${c}.`,
      emergencyTip: `A damaged sewer line poses serious health risks. Avoid flushing toilets or running water until the line is evaluated, and keep children and pets away from wet areas in the yard.`,
      faqs: [
        {
          question: `What is trenchless sewer repair and is it suitable for ${c} homes?`,
          answer: `Trenchless sewer repair (CIPP lining) creates a new seamless epoxy pipe inside your existing damaged pipe without excavating your entire yard or driveway in ${c}.`
        },
        {
          question: `How do I know if my ${c} home's sewer line is cast iron or PVC?`,
          answer: `Homes built in ${c} prior to 1985 typically have cast iron main lines, while homes built after 1985 generally feature PVC plastic piping. We confirm pipe material using video cameras.`
        },
        {
          question: `Who is responsible for the sewer line connection in ${c}?`,
          answer: `The homeowner is responsible for the sewer lateral pipe from the residence up to the property line connection with ${prof.waterUtility}.`
        }
      ]
    }),
    "plumbing-repair": (c, prof) => ({
      headline: `Dependable Plumbing Repair in ${c}, FL`,
      intro: `From leaky kitchen faucets and noisy supply lines to running toilets and faulty valves in ${c}, Weston FL Plumber provides fast, lasting repairs with repair-first honesty across ${prof.neighborhoods.slice(0, 3).join(", ")}.`,
      localContext: `Every fixture in your ${c} home plays a role in daily comfort. We troubleshoot plumbing issues carefully, focusing on the root cause—whether it's mineral-scaled valve seats, worn O-rings, or excessive water pressure in ${c}.`,
      symptoms: [
        `Dripping kitchen or bathroom faucets wasting water in ${c}`,
        `Running toilets that cycles water every few minutes`,
        `Loose, wobbly shower handles or leaking vanity supply valves`,
        `Discolored water or low flow from specific household taps`
      ],
      causes: `Plumbing repairs in ${c} are commonly caused by worn rubber washers, mineral scale buildup on ceramic cartridges, degraded angle stops under sinks, or thermal expansion stress on pipe joints.`,
      costFactors: `Repair costs in ${c} depend on part accessibility, whether original replacement components are available, and the time required for careful testing. We provide transparent quotes before starting work.`,
      emergencyTip: `If a faucet or supply valve breaks while being operated, locate the shutoff valve underneath the sink and turn it clockwise to stop flow until a plumber arrives.`,
      faqs: [
        {
          question: `Why does my toilet in ${c} keep running on its own?`,
          answer: `A running toilet is usually caused by a degraded flapper seal allowing water to seep from the tank into the bowl, or a misadjusted fill valve that fails to shut off water flow.`
        },
        {
          question: `Should I repair or replace a leaking shower valve in ${c}?`,
          answer: `If the valve body is structurally sound, replacing internal cartridges and seals restores function affordably. If the valve casing is cracked or corroded, fixture replacement is recommended.`
        },
        {
          question: `Do you provide warranties on plumbing repairs in ${c}?`,
          answer: `Yes. All recommended repair parts and labor performed by Weston FL Plumber in ${c} are backed by our 1-Year Warranty.`
        }
      ]
    }),
    "toilet-repair": (c, prof) => ({
      headline: `Toilet Repair & Replacement in ${c}, FL`,
      intro: `Clogged, overflowing, constantly running, or rocking toilets in your ${c} home? Weston FL Plumber restores proper flushing power, replaces failed seals, and installs modern high-efficiency toilets across ${prof.neighborhoods.slice(0, 3).join(", ")}.`,
      localContext: `Toilets in ${c} homes endure heavy daily use. Whether dealing with a failed wax ring causing floor leaks or upgrading to low-flow dual-flush models in ${c}, our plumbers provide clean, efficient service.`,
      symptoms: [
        `Toilet overflowing or slow to clear during flushing in ${c}`,
        `Water pooling around the base of the toilet on bathroom tile`,
        `Toilet tank constantly refilling or producing hiss noises`,
        `Toilet fixture rocks or moves when sat upon`
      ],
      causes: `Common toilet failures in ${c} include worn flapper valves, mineral-clogged bowl rim jets, broken brass closet bolts, degraded wax ring seals, or underlying main drain line restrictions.`,
      costFactors: `Toilet repairs in ${c} are generally quick and economical. If the toilet must be pulled to replace the wax ring seal or flange, costs reflect the labor required to reset and re-seal the fixture cleanly.`,
      emergencyTip: `If a toilet begins to overflow, immediately reach behind the bowl, locate the silver angle valve on the wall, and turn it clockwise to shut off incoming water immediately.`,
      faqs: [
        {
          question: `Why is water seeping from around the base of my ${c} toilet?`,
          answer: `Water around the base indicates a blown wax ring seal between the toilet outlet and the floor drain flange. Replacing the wax ring prevents water damage to bathroom subfloors.`
        },
        {
          question: `Can a high-efficiency toilet save money on my ${c} water bill?`,
          answer: `Yes. Older toilets use 3.5 to 5 gallons per flush, whereas modern WaterSense certified models use just 1.28 gallons, saving an average family thousands of gallons per year.`
        },
        {
          question: `What should I do if plunging won't clear my ${c} toilet?`,
          answer: `Avoid chemical drain cleaners which can damage porcelain. If a heavy plunger fails, a foreign object or deeper drain restriction requires a professional toilet auger.`
        }
      ]
    }),
    "residential-plumbing": (c, prof) => ({
      headline: `Complete Residential Plumbing Services in ${c}, FL`,
      intro: `Your home's plumbing should operate smoothly and quietly every day. We provide complete residential plumbing repair, maintenance, and fixture installations for homeowners in ${prof.neighborhoods.slice(0, 3).join(", ")} and throughout ${c}.`,
      localContext: `From kitchen remodels and bath upgrades to main line shutoff replacements and water quality solutions, we tailor our residential service to ${c}'s specific home styles (${prof.housingEra}).`,
      symptoms: [
        `Multiple minor plumbing issues piling up across your ${c} home`,
        `Dripping taps, noisy pipes, or slow drains impacting daily routines`,
        `Outdated plumbing fixtures ready for modern style and water efficiency upgrades`,
        `Desire for a comprehensive home plumbing health inspection`
      ],
      causes: `Residential plumbing systems in ${c} experience gradual degradation from water pressure fluctuations, mineral scale accumulation, aging rubber gaskets, and environmental factors unique to South Florida.`,
      costFactors: `Residential service pricing depends on job scope—ranging from minor fixture tune-ups to major repiping. We provide clear, itemized estimates before any work begins.`,
      emergencyTip: `Keep your main water shutoff valve accessible and clear of overgrown landscaping so you can act quickly in the event of a home plumbing emergency.`,
      faqs: [
        {
          question: `Do you offer home plumbing inspections for home buyers in ${c}?`,
          answer: `Yes. We perform thorough home plumbing health checks, inspecting supply lines, water heaters, shutoff valves, pressure levels, and sewer lines with video cameras.`
        },
        {
          question: `Are your plumbers respectful of my ${c} home's cleanliness?`,
          answer: `Absolutely. Our technicians wear shoe covers, use protective floor mats, clean up thoroughly after every job, and treat your property with absolute respect.`
        },
        {
          question: `Can you assist with kitchen and bath fixture installations during a remodel in ${c}?`,
          answer: `Yes. We work seamlessly with homeowners and interior contractors to supply and install sinks, faucets, garbage disposals, bathtubs, and body sprayers according to code.`
        }
      ]
    }),
    "plumber": (c, prof) => ({
      headline: `Licensed Plumber in ${c}, FL`,
      intro: `Weston FL Plumber provides licensed, full-service plumbing repairs, installations, and 24/7 emergency response for homes and businesses in ${c}. Serving ${prof.neighborhoods.join(", ")}.`,
      localContext: `As your local plumbing contractor for ${c}, we bring state-certified expertise (#CFC1428593), clear communication, and guaranteed workmanship to every job site in ${c}.`,
      symptoms: [
        `Any unexpected plumbing symptom in your ${c} home or business`,
        `Leaks, drain blockages, water heater breakdowns, or fixture malfunctions`,
        `Code compliance or permitting requirements for major plumbing alterations`
      ],
      causes: `Plumbing challenges in ${c} stem from South Florida water mineral hardness, aging pipe infrastructure in ${prof.housingEra}, and normal mechanical wear on valves and seals.`,
      costFactors: `Transparent pricing upfront with no hidden fees. Diagnostic fees are explained before dispatch.`,
      emergencyTip: `Call 754-283-8022 for 24/7 priority emergency plumber dispatch to ${c}.`,
      faqs: prof.faqs
    })
  };

  const generator = contentMap[serviceBaseSlug] || contentMap["plumber"];
  return generator(city, profile);
}
