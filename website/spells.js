var SPELL_LEVEL_CAP = 5;

var SCHOOLS = [
  {
    "id": "kinetics",
    "name": "Kinetics",
    "tagline": "Magic of force and motion",
    "icon": "⟳"
  },
  {
    "id": "luministry",
    "name": "Luministry",
    "tagline": "Magic of light and perception",
    "icon": "✦"
  },
  {
    "id": "thanaturgy",
    "name": "Thanaturgy",
    "tagline": "Magic of death and decay",
    "icon": "☽"
  },
  {
    "id": "verdancy",
    "name": "Verdancy",
    "tagline": "Magic of living growth and the natural world",
    "icon": "⌘"
  },
  {
    "id": "thermaturgy",
    "name": "Thermaturgy",
    "tagline": "Magic of heat, cold, and the winds between",
    "icon": "△"
  },
  {
    "id": "metametrics",
    "name": "Metametrics",
    "tagline": "Magic of physical transformation",
    "icon": "◈"
  },
  {
    "id": "vitalics",
    "name": "Vitalics",
    "tagline": "Magic of healing and restoration",
    "icon": "♥"
  },
  {
    "id": "aegistry",
    "name": "Aegistry",
    "tagline": "Magic of protection and reinforcement",
    "icon": "⬡"
  },
  {
    "id": "chronophotometry",
    "name": "Chronophotometry",
    "tagline": "Magic of potential futures and uncollapsed timelines",
    "icon": "⧗"
  }
];

var SPELLS = [
  {
    school: "kinetics", level: 1, name: "Force Catapult", cost: "2 pts",
    components: [{ type: "S", time: "Half action", succ: 2 }, { type: "M", time: "Half action", succ: 2 }],
    duration: "Instant", range: "15m",
    dmgType: "Bludgeoning",
    desc: "You launch a projectile weighing up to 5 kg up to 15 meters. Roll dice equal to your spell attack,  spell damage is 3d10 bludgeoning.",
    upcast: "Every 2 spell points: weight limit +5 kg, damage +2d10, Somatic casting time +half action."
  },
  {
    school: "kinetics", level: 1, name: "Mend", cost: "1 pt",
    components: [{ type: "S", time: "3 Actions", succ: 2 }, { type: "M", time: "2 Actions", succ: 2 }],
    duration: "Permanent", range: "Touch",
    desc: "You gently realign the kinetic strings of a broken non-magical object, coaxing its pieces back into their original configuration. The object is repaired seamlessly  no seam, no weakness, as though it was never broken. Works on objects up to the size of a chest. Does not work on living tissue or magical items. Cannot restore destroyed objects, only broken ones. The repair is structural  a repaired bone would need Vitalics, but a repaired sword hilt needs only this.",
    upcast: "Every 2 pts: object size doubles and adds 1 action to Somatic (up to a door, then a cart, then a small boat)."
  },
  {
    school: "kinetics", level: 1, name: "Shifting Step", cost: "1 pt",
    components: [{ type: "V", time: "Half action", succ: 2 }],
    duration: "Concentration, 1 pt/turn", range: "Self or ally",
    desc: "You subtly adjust the tension of strings under your or an ally's feet, allowing them to move slightly faster and redirect momentum. While this spell lasts the target gains +5m to base movement and the DC for the dodge reaction is reduced by 1.",
    upcast: "Every 2 spell points: +5m movement and dodge DC −1 further. Concentration cost increases by 1 per 2 points."
  },
  {
    school: "kinetics", level: 2, name: "Feather Fall", cost: "2 pts",
    components: [{ type: "V", time: "Reaction (free action cost)", succ: 2 }],
    duration: "Until landing", range: "20m",
    desc: "When you or a creature you can see begins to fall, you immediately compress the air beneath them into a decelerating kinetic cushion. Their fall is slowed to a harmless drift  they land on their feet, take no fall damage regardless of height, and may guide their descent horizontally up to 5m per 10m fallen. Can be cast after a fall has already begun as a reaction with no action cost from next turn.",
    upcast: "Every 2 pts: affect one additional creature within range."
  },
  {
    school: "kinetics", level: 2, name: "Unseen Hand", cost: "Variable",
    components: [{ type: "S", time: "Action", succ: 2 }, { type: "V", time: "Action", succ: 2 }],
    duration: "Concentration, 10 min per spell point spent", range: "30m",
    desc: "You extend a persistent telekinetic presence  not a force of violence but a hand capable of fine manipulation. You can move objects up to 10 kg, open and close doors, pour liquids, turn pages, carry items, and perform simple manual tasks at range. The hand has your Intellect score in Strength for the purpose of forcing stuck objects. You cannot wield weapons through it. The hand is invisible but can be felt by creatures it touches. At 2 pts it lasts 20 minutes; at 3 pts, 30 minutes, and so on.",
    upcast: "Every additional pt: duration +10 min, weight limit +10 kg."
  },
  {
    school: "kinetics", level: 2, name: "Vector Redirect", cost: "3 pts",
    components: [{ type: "S", time: "Reaction (half action cost)", succ: 2 }],
    duration: "Instant", range: "20m",
    desc: "You catch an incoming motion  an arrow, a falling object, a shove  and deflect part of its path through controlled tension redirection. You reduce successes rolled on 5 dice.",
    upcast: "Each additional spell point adds one die to the reduction pool."
  },
  {
    school: "kinetics", level: 3, name: "Momentum Siphon", cost: "6 pts",
    components: [{ type: "S", time: "Action", succ: 5 }, { type: "M", time: "Half action", succ: 4 }],
    duration: "Concentration, 1 min", range: "20m",
    dmgType: "Bludgeoning",
    desc: "You seize the kinetic thread of a moving creature and hold it. Target's movement drops to 0 and they cannot take reactions. On their turn as an action or as a reaction(cost 1 action)they may make a threshold save (Strength + Athletics or Fortitude toughness) to break free: on failure they remain held; on success they are flung 3m in their last direction of travel. You may release as a free action, launching the target up to 10m in any direction and dealing bludgeoning damage equal to successes on 4d10 on impact.",
    upcast: "Every 2 spell points: target one additional creature. Each adds an action to Somatic."
  },
  {
    school: "kinetics", level: 3, name: "Ritual of Safe Passage", cost: "5 pts",
    components: [{ type: "S", time: "4 Actions", succ: 4 }, { type: "V", time: "4 Actions", succ: 4 }, { type: "M", time: "2 Actions", succ: 3 }],
    duration: "8 hours(no concentration)", range: "Self and up to 6 companions",
    desc: "A lengthy ritual performed before a journey across dangerous terrain. Over the casting period you attune the kinetic strings of your group to the terrain ahead, creating a persistent field of subtle correction. For the duration: the group cannot be surprised by terrain hazards (rockslides, collapsing floors, unstable ice); fall damage for any member is halved; Athletics and Acrobatics rolls made to traverse difficult terrain have DC reduced by 2; and the group moves through natural difficult terrain at full speed.",
    upcast: null
  },
  {
    school: "kinetics", level: 3, name: "Shockwave", cost: "5 pts",
    components: [{ type: "S", time: "Action", succ: 4 }, { type: "V", time: "Half action", succ: 4 }],
    duration: "Instant", range: "Self, 10m radius",
    dmgType: "Force",
    desc: "You release a violent pulse of kinetic force outward from your body. Every creature within 10m takes 5d10 wound successes. Any creature that rolls fewer than 3 successes on their reaction roll is also thrown 5m away and knocked prone.",
    upcast: "Every 2 spell points: radius +5m or damage +2d10. Increasing radius adds a half action to Somatic."
  },
  {
    school: "kinetics", level: 4, name: "Gravitic Collapse", cost: "7 pts",
    components: [{ type: "S", time: "Action", succ: 5 }, { type: "V", time: "Action", succ: 5 }, { type: "M", time: "Half action", succ: 4 }],
    duration: "Concentration, 1 min", range: "40m",
    dmgType: "Force",
    desc: "You designate a 5m radius point and invert the kinetic strings around it, creating crushing gravitational pull. Creatures within 15m make a threshold save (Strength + Athletics) each turn or be pulled 5m toward the centre. Creatures within 5m have movement halved and take 6d10 wound successes of force damage each turn. Structures take double wounds.",
    upcast: "Every 3 spell points: pull range +5m or damage +2d10."
  },
  {
    school: "kinetics", level: 5, name: "Orbit", cost: "8 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }],
    duration: "Concentration, up to 1 min", range: "30m",
    dmgType: "Force",
    desc: "You seize every loose object within 15m of a point you designate (debris, weapons, bodies, furniture, stones) and set them into a violent orbital ring. Up to 20 objects of up to 50 kg each spiral at high speed. Any creature caught in the orbit takes 8d10 wound successes. Any creature that rolls fewer than 3 successes on their reaction roll is also knocked prone. At the start of each of your turns the orbit tightens by 2m. When concentration ends or the orbit collapses, all objects are flung outward and every creature within 20m takes the same damage.",
    upcast: "Every 2 pts: orbit radius +5m or object weight limit +25 kg."
  },
  {
    school: "kinetics", level: 5, name: "Pressure Wave", cost: "9 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }],
    duration: "Instant", range: "60m line",
    dmgType: "Force",
    desc: "You compress the kinetic strings of the air into a hyper-dense column and release it as a focused overpressure wave 60m long and 5m wide. Every creature in the line takes 10d10 wound successes (force damage). Any creature that rolls fewer than 3 successes on their reaction roll is also thrown backward 10m, knocked prone, and deafened for 1 hour. Structures in the line take double wounds. The wave is heard 2 km away.",
    upcast: "Every 2 pts: +2d10 or width +3m."
  },
  {
    school: "kinetics", level: 6, name: "Anti-gravity Field", cost: "11 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 6 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Concentration, up to 10 min", range: "50m",
    desc: "You invert gravitational strings within a 15m radius sphere. Everything within begins floating immediately. Creatures without a surface to grip drift at 2m per round in a random direction. Ranged attacks within the zone have all DCs increased by 3. Any creature exiting the zone falls from wherever they are hovering. When concentration ends everything drops simultaneously  creatures take fall damage (2d10 per 5m fallen). You may selectively exempt creatures at casting.",
    upcast: "Every 2 pts: radius +5m."
  },
  {
    school: "kinetics", level: 6, name: "Stillness of the World", cost: "11 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 7 }, { type: "M", time: "Action", succ: 6 }],
    duration: "Concentration, up to 3 rounds", range: "60m",
    desc: "You seize the kinetic strings of everything within a 20m radius sphere and hold them perfectly still. Time does not stop, breath continues, hearts beat, minds race, but nothing can move. Every creature within the sphere is frozen in place and cannot take any action requiring physical movement. Spells with only Vocal components may still be cast. This is a threshold save (Strength + Athletics): creatures may attempt to break free as a reaction(1 action cost). You may exclude up to 4 creatures when you cast.",
    upcast: null
  },
  {
    school: "kinetics", level: 7, name: "The Pull of Ruin", cost: "14 pts",
    components: [{ type: "S", time: "2 Actions", succ: 8 }, { type: "V", time: "Action", succ: 7 }, { type: "M", time: "Action", succ: 7 }],
    duration: "Concentration, up to 1 min", range: "120m",
    dmgType: "Force",
    desc: "You create a point of absolute gravitational hunger at a location you can see. The effect begins 2 rounds after casting. Once active: all creatures within 40m make a threshold save (Strength + Athletics) at the start of each turn or be pulled 10m toward the centre. Within 10m, movement is impossible and creatures take 10d10 wound successes per turn. Structures within 20m begin collapsing inward. At the start of your third concentration round you may release it, the compressed strings explode outward and every creature within 60m takes 22d10 wound successes. After releasing you cannot cast Kinetics spells until a long rest.",
    upcast: null
  },
  {
    school: "kinetics", level: 8, name: "Mjolnir's Descent", cost: "16 pts",
    components: [{ type: "S", time: "2 Actions", succ: 9 }, { type: "V", time: "2 Actions", succ: 9 }, { type: "M", time: "Action", succ: 8 }],
    duration: "Instant", range: "500m (requires line of sight or a marked location)",
    dmgType: "Bludgeoning",
    desc: "You accelerate an object of up to 2 tonnes from height directly above the target point at terminal velocity. Every creature in the 10m radius impact zone takes 28d10 wound successes. Any creature that rolls fewer than 3 successes on their reaction roll is also buried and restrained. The ground ruptures: a 10m crater forms and all terrain within 20m becomes difficult. Can only be cast outdoors or in spaces with 30m of vertical clearance. Cannot be blocked or dodged by any magical means that does not also stop the object.",
    upcast: null
  },
  {
    school: "kinetics", level: 9, name: "Separation", cost: "20 pts",
    components: [{ type: "S", time: "3 Actions", succ: 10 }, { type: "V", time: "2 Actions", succ: 10 }, { type: "M", time: "Action", succ: 9 }],
    duration: "Permanent", range: "Touch",
    dmgType: "Force",
    desc: "You place both hands on a target and unravel every bond holding it together simultaneously. This is a threshold save (Fortitude + Toughness), needing 6 successes. On failure: the creature dies instantly and cannot be resurrected by any spell below level 9. On success: they take 32d10 wound successes and are thrown 20m away. Against non-living matter of any size, Separation simply works: walls dissolve, locks cease to exist, fortifications crumble. Casting this spell ages the caster visibly. Cannot be cast more than once per year.",
    upcast: null
  },
  {
    school: "luministry", level: 1, name: "Blind", cost: "1 pt",
    components: [{ type: "S", time: "Half action", succ: 2 }],
    duration: "Instant", range: "Self, 5m radius",
    desc: "You unleash a blinding burst of light in a 5m radius around you. This is a threshold save (Fortitude + Toughness): creatures that fail are blinded for one round.",
    upcast: "Each spell point: radius +5m, Somatic time +half action."
  },
  {
    school: "luministry", level: 1, name: "Cantrip Light", cost: "Free",
    components: [{ type: "V", time: "Free action", succ: 1 }],
    duration: "1 hour (no concentration)", range: "Touch",
    desc: "You touch an object and infuse it with a mote of captured photons it sheds steady light in a 10m radius for 1 hour without needing your attention. The light is cool, clean, and does not flicker. It can be any colour you choose. Touching the object again extinguishes it early. Multiple objects can be lit simultaneously. This costs no spell points and counts as a free action  it is the most basic expression of Luministry.",
    upcast: null
  },
  {
    school: "luministry", level: 1, name: "Mirror Message", cost: "1 pt",
    components: [{ type: "S", time: "3 Actions", succ: 2 }, { type: "M", time: "2 Actions", succ: 2 }],
    duration: "Permanent (until received)", range: "Any reflective surface the caster has personally touched",
    desc: "You encode a short message of up to 1 minute of speech and image into a reflective surface  a mirror, still water, a polished shield. The message is invisible until a person you name (or describe precisely) places their palm on the surface and thinks of the sender. They then see and hear the message play once, after which it vanishes. The message cannot be intercepted or read by others. You may encode messages into multiple surfaces simultaneously, each requiring a separate casting.",
    upcast: "Every 2 pts: the message can be up to 10 minutes long, or can be received by multiple named individuals."
  },
  {
    school: "luministry", level: 1, name: "Refraction", cost: "2 pts",
    components: [{ type: "S", time: "Half action", succ: 2 }, { type: "M", time: "Half action", succ: 2 }],
    duration: "Instant", range: "20m",
    desc: "You create a 5×5m plane to manipulate passing light  smoky illusions, blurry barriers, or perfect invisibility for anything directly behind it. A creature directly observing must make a Perception check needing successes equal to your spellcasting ability. Noticing the illusion doesn't reveal the truth, only that it is false.",
    upcast: "Every 2 spell points: +5m to width or height. Additional points can increase illusion detail (DM discretion)."
  },
  {
    school: "luministry", level: 2, name: "Concentrated UV", cost: "4 pts",
    components: [{ type: "S", time: "Action", succ: 4 }, { type: "M", time: "Action", succ: 3 }, { type: "V", time: "Half action", succ: 2 }],
    duration: "Instant", range: "40m beam",
    dmgType: "Radiant",
    desc: "You create a 40m long, 5m wide beam of UV radiation. Any creature within the area takes radiant damage equal to successes rolled on 5d10.",
    upcast: "Each additional spell point: +1d10. Every 2 points: Material casting time +half action."
  },
  {
    school: "luministry", level: 2, name: "Scrying Eye", cost: "3 pts",
    components: [{ type: "S", time: "4 Actions", succ: 4 }, { type: "M", time: "3 Actions", succ: 3 }],
    duration: "Concentration, up to 1 hour", range: "Any location you have personally visited",
    desc: "You create an invisible, drifting mote of captured light at any location you have physically been. Through it you can see and hear everything at that location as though you were present; the mote floats at eye level and can be moved up to 10m per round by thought as a free action. The mote is invisible to mundane senses but visible to magical sight as a faint luminescence. Creatures with magical awareness may make a threshold save (Wits + Perception) to notice it. You cannot interact with the environment through the mote, only observe.",
    upcast: "Every 2 pts: range extends to any location you have seen a clear image of, or the mote becomes undetectable to magical sight."
  },
  {
    school: "luministry", level: 3, name: "Particle Beam", cost: "6 pts",
    components: [{ type: "S", time: "Action", succ: 5 }, { type: "V", time: "Action", succ: 5 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Instant", range: "30m",
    dmgType: "Radiant",
    desc: "You focus three seconds of casting time into a single point of pure high-energy radiation. The target takes wounds equal to successes rolled on 14d10. If the target suffers 3 or more deep wounds from this attack, one limb of your choice is destroyed. If reduced to 0 wounds, half their body is disintegrated.",
    upcast: "Every 2 spell points: +2d10. Somatic +half action."
  },
  {
    school: "luministry", level: 3, name: "Permanent Illusion", cost: "6 pts",
    components: [{ type: "S", time: "5 Actions", succ: 5 }, { type: "V", time: "4 Actions", succ: 4 }, { type: "M", time: "3 Actions", succ: 4 }],
    duration: "Permanent (until dispelled)", range: "30m",
    desc: "A lengthy ritual version of Phantom Image that requires no ongoing concentration. The illusion you construct  visual, auditory, thermal, and olfactory  is anchored in place permanently and plays on a loop you script at casting. You may give it up to 3 scripted responses to physical interaction (a door that appears to open when touched, a guard that seems to turn its head when approached). Physical contact combined with a successful Perception check reveals the illusion but does not dispel it. The illusion persists until a Metametrics Counterspell or Spellbreaker of level 3 or higher unmakes it.",
    upcast: null
  },
  {
    school: "luministry", level: 3, name: "Phantom Image", cost: "5 pts",
    components: [{ type: "S", time: "Action", succ: 4 }, { type: "V", time: "Action", succ: 4 }, { type: "M", time: "Half action", succ: 3 }],
    duration: "Concentration, 10 min", range: "30m",
    desc: "You construct a fully three-dimensional illusion within a 10m cube: includes sound, smell, and temperature. Creatures that physically interact with the illusion may attempt a threshold save (Wits + Perception) to see through it entirely. Move it 10m per turn and alter sounds as a free action while concentrating.",
    upcast: "Every 2 spell points: illusion gains scripted responses to interaction without requiring concentration to direct."
  },
  {
    school: "luministry", level: 3, name: "Searing Arc", cost: "6 pts",
    components: [{ type: "S", time: "Action", succ: 5 }, { type: "V", time: "Half action", succ: 4 }],
    duration: "Instant", range: "30m",
    dmgType: "Radiant",
    desc: "UV compressed into a branching arc that leaps between targets. Primary target takes 8d10 wound successes. The arc then leaps to up to 2 additional targets within 10m of the first taking 6d10 wound successes each.",
    upcast: "Every 2 spell points: arc leaps to one additional target. Each additional leap adds a half action to Somatic."
  },
  {
    school: "luministry", level: 4, name: "Eclipse", cost: "7 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }, { type: "M", time: "Action", succ: 4 }],
    duration: "Concentration, 1 min", range: "60m",
    dmgType: "Psychic",
    desc: "You blot out all light within a 20m radius sphere: actively consuming it. No light source, magical or mundane, illuminates within. Darkvision is suppressed. Creatures starting their turn inside take 4d10 mental wound successes. You see perfectly within the sphere.",
    upcast: "Every 2 spell points: radius +5m."
  },
  {
    school: "luministry", level: 5, name: "Revelation", cost: "8 pts",
    components: [{ type: "S", time: "Action", succ: 6 }],
    duration: "Instantaneous", range: "30m radius",
    desc: "You collapse all magical illusions, concealments, invisibilities, and disguises of level 4 or below, within 30m simultaneously. All such features are dropped for 1 round. Every creature in the area also sees the Source strings of every other creature for that round, allowing spellcasters to identify every active concentration effect and magical condition on any creature present.",
    upcast: null
  },
  {
    school: "luministry", level: 5, name: "Veil of Non-Being", cost: "8 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Concentration, 10 min", range: "Self",
    desc: "You bend every photon around yourself so completely that you become undetectable to every sense that relies on any form of radiation  including darkvision, magical sight, and detection auras. You cast no shadow and have no heat signature. Tremorsense still detects movement. While active you cannot attack or cast spells without breaking concentration, but you may move freely and observe. If you do attack or cast, the veil collapses at the end of your turn.",
    upcast: "Every 3 pts: extend to one additional touched creature."
  },
  {
    school: "luministry", level: 6, name: "False Sun", cost: "10 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 6 }, { type: "M", time: "Action", succ: 6 }],
    duration: "Concentration, up to 1 hour", range: "500m overhead",
    dmgType: "Radiant",
    desc: "You suspend a stable miniature star 200m overhead, visible for 5 km and illuminating the area as full daylight. The false sun has all properties of natural sunlight: Vampires treat the area as daytime, undead take daylight penalties, and all magical darkness is suppressed. Choose one additional effect: Warmth (no creature within 1 km dies from cold), Radiation (8d10 wound successes per round to any creature flying within 30m of the star), or Reveal (as the Revelation spell, refreshed every 10 minutes). If concentration breaks the star collapses explosively, dealing 12d10 wound successes in a 50m radius.",
    upcast: null
  },
  {
    school: "luministry", level: 6, name: "Helios Unbound", cost: "10 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 7 }, { type: "M", time: "Action", succ: 6 }],
    duration: "Concentration, 1 min", range: "Self",
    dmgType: "Radiant",
    desc: "You become a vessel for unfiltered stellar radiation. You shed blinding light in a 30m radius. Any creature starting its turn within 15m takes 8d10 wound successes from radiation with no reduction possible. Any creature looking directly at you makes a threshold save (Fortitude + Toughness) or be permanently blinded until magically treated. Your own attacks deal an additional 5d10 wound successes as radiant energy. When the spell ends you are blinded for 1 hour.",
    upcast: null
  },
  {
    school: "luministry", level: 7, name: "The Pillar", cost: "13 pts",
    components: [{ type: "S", time: "Action", succ: 8 }, { type: "V", time: "Action", succ: 8 }, { type: "M", time: "Action", succ: 7 }],
    duration: "Concentration, 1 min", range: "200m",
    dmgType: "Radiant",
    desc: "You call down a column of concentrated stellar light 5m wide and unlimited in height. Everything within it takes 8d10 wound successes each round with no reduction possible. The pillar moves up to 20m per round as a free action. Creatures inside cannot take reactions and have all DCs increased by 2. The pillar is visible from 10 km away and illuminates 500m in radius as bright daylight, dispelling all magical darkness. Undead, Demons, and Blighted within the pillar make a threshold save (Resolve + Focus) at the start of each turn or be instantly destroyed.",
    upcast: null
  },
  {
    school: "luministry", level: 8, name: "Blindness of Heaven", cost: "15 pts",
    components: [{ type: "S", time: "2 Actions", succ: 9 }, { type: "V", time: "Action", succ: 9 }, { type: "M", time: "Action", succ: 8 }],
    duration: "Until dispelled", range: "1 km radius",
    desc: "You unleash a wave of light so total and so perfectly wrong that it severs the connection between eye and mind in all creatures within 1 km who do not have the Blind condition. All affected creatures are permanently blinded. This cannot be reversed except by a Vitalics spell of level 8 or higher or divine intervention. You are not immune. Before casting you must either close your eyes (requiring Resolve + Focus DC 9 needing 5 successes to maintain the spell) or already be blind. Can only be cast once  the caster's body cannot survive generating this magnitude of light a second time.",
    upcast: null
  },
  {
    school: "luministry", level: 9, name: "Sol Invictus", cost: "20 pts",
    components: [{ type: "S", time: "3 Actions", succ: 11 }, { type: "V", time: "3 Actions", succ: 11 }, { type: "M", time: "2 Actions", succ: 10 }],
    duration: "Permanent", range: "Region (up to 10 km radius)",
    desc: "You anchor a second sun in the sky above the target region. It burns for 1d10 years before exhausting itself. While it burns: no magical darkness can exist within the region, undead cannot exist within it without making a threshold save (Fortitude + Toughness) each dawn or dissolving, Vampires cannot enter at all, and all Luministry spells cast within the region have their spell point cost halved. The second sun deals no direct damage but prevents night entirely for its duration. Crops grow at twice the speed and the region cannot support evil planar creatures. Casting this spell requires the caster to permanently burn away their own Source connection: they can never cast spells again. Cannot be undone except by another casting of this spell or a Chronophotometry spell of level 9.",
    upcast: null
  },
  {
    school: "thanaturgy", level: 1, name: "Chains from the Grave", cost: "2 pts",
    components: [{ type: "V", time: "Half action", succ: 2 }, { type: "M", time: "Action + Half action", succ: 4 }],
    duration: "Until escape", range: "Touch",
    desc: "Rust and flesh-covered chains rush from the ground to grasp a target. The creature must spend an action attempting escape  needing successes equal to your spellcasting threshold  or remain restrained.",
    upcast: "Every 2 points: bind an additional creature or add another escape action requirement. Material +action per 2 points."
  },
  {
    school: "thanaturgy", level: 1, name: "Speak with Dead", cost: "2 pts",
    components: [{ type: "V", time: "4 Actions", succ: 3 }, { type: "M", time: "4 Actions", succ: 3 }],
    duration: "10 minutes", range: "Touch (a corpse)",
    desc: "You reach into the spiritual residue still clinging to a corpse and coax it into coherent speech. The dead creature can answer up to 5 questions. It knows what it knew in life  it cannot provide information from after its death, cannot lie (but may withhold), and answers through the lens of its personality and biases. A creature that died unwillingly, violently, or hating you may be uncooperative. A creature dead for more than 1 month answers in one-word fragments. A creature dead for more than 1 year cannot be reached at all. The corpse's mouth moves; the voice is hollow and distant.",
    upcast: "Every 2 pts: +5 questions or extend the reachable death window by 1 month."
  },
  {
    school: "thanaturgy", level: 1, name: "Touch of Decay", cost: "Variable",
    components: [{ type: "S", time: "Half action", succ: 2 }, { type: "M", time: "Half action", succ: 2 }],
    duration: "Instant", range: "Touch",
    dmgType: "Necrotic",
    desc: "You collapse the fragile bonds in a small patch of organic material on touch, causing rapid decay. Spend at least 1 spell point. Roll 4d10, take wounds equal to successes",
    upcast: " Every 2 points beyond the first: Somatic +half action +2d10."
  },
  {
    school: "thanaturgy", level: 2, name: "Animate Remains", cost: "4 pts",
    components: [{ type: "S", time: "Action", succ: 4 }, { type: "M", time: "Action", succ: 4 }],
    duration: "concentration up to an 1 hour", range: "Touch",
    desc: "You tap into the spiritual residue of a deceased creature, animating its corpse as an undead servant. Stats/2, no proficiencies, acts on your turn with 1 action. The degree of tasks it can accomplish is dependant on the attributes it has.",
    upcast: "Every 2 points: add +1 to all attributes and +1 to 1 point of proficiency of your choice."
  },
  {
    school: "thanaturgy", level: 2, name: "Death Ward", cost: "3 pts",
    components: [{ type: "S", time: "4 Actions", succ: 4 }, { type: "V", time: "3 Actions", succ: 3 }, { type: "M", time: "2 Actions", succ: 3 }],
    duration: "8 hours", range: "Touch",
    desc: "You inscribe a ward into a willing creature's vital strings that activates only at the moment of death. If the warded creature would die while the ward is active, it immediately triggers: they fall to unconcious as if they took only shallow wounds instead, the death blow is nullified, and the ward is consumed. This can only prevent death once. The ward protects creatures from falling to death saves and immidiatly stabilises them.  Creatures under this ward feel slightly colder to the touch and can sense the ward as a faint pressure behind the sternum. NOTE: this is different than dnd, does not bring you back to 1 hp, rather stabalises you if you have deep wounds upon going unconcious so you dont bleed out.",
    upcast: "Every 2 pts: affect one additional creature."
  },
  {
    school: "thanaturgy", level: 2, name: "Decay", cost: "2 pts",
    components: [{ type: "S", time: "3 Actions", succ: 3 }, { type: "M", time: "2 Actions", succ: 2 }],
    duration: "Permanent", range: "Touch",
    desc: "You accelerate the natural decay of organic matter  not living tissue, but dead organic material. A corpse becomes skeletal remains in minutes. Food spoils instantly. Wood rots through. Cloth crumbles. Rope frays to nothing. Leather dissolves. The decomposition is complete and leaves behind only what would remain naturally. Useful for destroying evidence, creating compost rapidly, clearing blocked passages grown over with deadwood, or rendering a body unidentifiable. Does not affect treated, preserved, or magically protected organic material.",
    upcast: "Every 2 pts: affect material in a 2m radius without touch, or affect magically preserved material."
  },
  {
    school: "thanaturgy", level: 3, name: "Corpse Tide", cost: "6 pts",
    components: [{ type: "S", time: "Action", succ: 4 }, { type: "M", time: "Action", succ: 5 }],
    duration: "10 min", range: "15m",
    desc: "Animate up to three corpses simultaneously as independent undead servants. Each acts on your initiative count  issue standing orders as a free action each turn. Stats/2, no proficiencies, 1 action/turn. Collapse when the duration ends or you are incapacitated.",
    upcast: "Every 3 pts: +2 corpse, + half action to material."
  },
  {
    school: "thanaturgy", level: 3, name: "Ritual of Passage", cost: "4 pts",
    components: [{ type: "V", time: "5 Actions", succ: 4 }, { type: "M", time: "5 Actions", succ: 4 }, { type: "S", time: "3 Actions", succ: 3 }],
    duration: "Permanent (for the spirit)", range: "Touch (a corpse or place of death)",
    desc: "You perform the last rites for a dead creature, properly severing their remaining vital strings and guiding the spiritual residue to dissolution. After this ritual: the creature cannot be animated as undead by any means; Speak with Dead cast on them will receive no answer; they will not become a ghost, revenant, or haunt; and any curse or compulsion keeping their spirit earthbound is broken. For undead that have already risen, performing this ritual at the location they are bound to forces a threshold save (Resolve + Focus): on failure they are immediately destroyed as their spiritual anchor is removed.",
    upcast: null
  },
  {
    school: "thanaturgy", level: 3, name: "Wither", cost: "6 pts",
    components: [{ type: "S", time: "Action", succ: 5 }, { type: "V", time: "Half action", succ: 4 }],
    duration: "Instant + lingering", range: "20m",
    dmgType: "Necrotic",
    desc: "You collapse the vital strings within a living creature, accelerating the decay present in all flesh. The spell deals 5d10 wound successes. Any creature that rolls fewer than 3 successes on their reaction roll also suffers the Wither curse: until healed or long rest, any shallow wounds they receive count as deep wounds instead.",
    upcast: "Every 2 spell points: +1d10 initial damage."
  },
  {
    school: "thanaturgy", level: 4, name: "Soul Fetter", cost: "7 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }, { type: "M", time: "Half action", succ: 5 }],
    duration: "Concentration, 10 min", range: "10m",
    dmgType: "Necrotic",
    desc: "You reach into the vital thread connecting a creature to its life force and clench. This is a threshold save (Resolve + Toughness): on failure the target is paralysed and cannot move, speak, or act. They repeat the threshold save each turn to break free. While fettered, you may spend your action to deal 3d10 necrotic wound successes to the paralysed target: no save to reduce the damage. Creatures who die while fettered cannot be resurrected for 1 hour.",
    upcast: "Every 2 pts: +1 additional target, each adding an action to both Somatic and Verbal."
  },
  {
    school: "thanaturgy", level: 5, name: "Finger of Death", cost: "9 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "2 Actions", succ: 5 }],
    duration: "Instant", range: "30m",
    dmgType: "Necrotic",
    desc: "You send a bolt of negative energy crackling toward a creature you can see. The target takes 14d10 wound successes. If the target dies from this damage, they immediately rise as a zombie under your permanent control at the start of your next turn. This zombie persists indefinitely until destroyed and does not count toward your normal limit of animated servants. You may only have one Finger of Death zombie at a time  creating a second destroys the first.",
    upcast: null
  },
  {
    school: "thanaturgy", level: 5, name: "Necrotic Field", cost: "9 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }, { type: "M", time: "Half action", succ: 4 }],
    duration: "Concentration, 1 min", range: "Self, 20m radius",
    dmgType: "Necrotic",
    desc: "You saturate the local Source strings with decay energy. All living creatures within 20m at the start of their turn take 5d10 wound successes. Healing effects within the field are halved. Creatures that die within the field cannot be resurrected until the field has been down for 1 hour. Undead within the field instead recover 1 shallow wound at the start of each of your turns. You may designate up to 4 creatures to be immune at casting.",
    upcast: "Every 2 pts: radius +5m."
  },
  {
    school: "thanaturgy", level: 6, name: "Bone Army", cost: "12 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "M", time: "2 Actions", succ: 8 }, { type: "V", time: "Action", succ: 6 }],
    duration: "Concentration, 1 hour", range: "50m",
    desc: "Every corpse, bone fragment, and skeletal remain within 50m rises simultaneously under your command. You animate up to 20 undead servants  complete corpses animate at stats/1.5, partial remains at stats/2. All act on your initiative. One command to all as a free action per turn, or individual commands as a half action each. Unlike Corpse Tide, this army retains dim tactical awareness: they will flank, hold chokepoints, and protect your flanks without commands. If you fall unconscious the army continues executing its last order.",
    upcast: "Every 3 pts: +5 maximum servants."
  },
  {
    school: "thanaturgy", level: 6, name: "Rite of Ereshkigal", cost: "11 pts",
    components: [{ type: "V", time: "Action", succ: 7 }, { type: "M", time: "2 Actions", succ: 8 }, { type: "S", time: "Action", succ: 6 }],
    duration: "Until sunrise", range: "30m radius",
    desc: "You recite the Descent Rite over a 30m radius area. Every living creature within makes a threshold save (Resolve + Focus): on failure they are subjected to the Seven Gates. At the start of each of their turns they lose one of the following in order: their reaction, their half action, their action, their movement, their ability to speak, their ability to perceive beyond 2m, and finally their consciousness. Each loss is permanent until they leave the area and rest for 1 hour. Creatures may repeat the threshold save each turn to resist the next gate. You and designated creatures are immune.",
    upcast: null
  },
  {
    school: "thanaturgy", level: 7, name: "Thanatos", cost: "13 pts",
    components: [{ type: "S", time: "Action", succ: 8 }, { type: "V", time: "Action", succ: 8 }, { type: "M", time: "Action", succ: 7 }],
    duration: "Instant", range: "60m",
    dmgType: "Necrotic",
    desc: "You target a single creature you can see. This is a threshold save (Fortitude + Toughness), needing 5 successes. On failure: they die instantly and painlessly: their vital strings simply extinguished. On success: they take 22d10 wound successes and are stunned until the end of their next turn. Against creatures that are immortal or divine by nature, the spell instead deals 22d10 wound successes regardless of the save outcome.",
    upcast: null
  },
  {
    school: "thanaturgy", level: 8, name: "The Pale Tide", cost: "15 pts",
    components: [{ type: "S", time: "Action", succ: 9 }, { type: "V", time: "2 Actions", succ: 9 }, { type: "M", time: "2 Actions", succ: 8 }],
    duration: "Concentration, up to 1 hour", range: "500m radius",
    dmgType: "Necrotic",
    desc: "A wave of necromantic dissolution spreads from your position outward at 100m per round for 5 rounds, then holds for the remaining duration. Every living creature within takes 10d10 wound successes each round. Every creature that dies within the area immediately rises as an undead servant under your control at full stats. You can control a number equal to twice your spellcasting level. The wave is visible as a grey luminescence at its boundary. Fuelling this wave requires you to sacrifice a creature of significant power as a material component before casting.",
    upcast: null
  },
  {
    school: "thanaturgy", level: 9, name: "Entropy", cost: "20 pts",
    components: [{ type: "S", time: "3 Actions", succ: 11 }, { type: "V", time: "3 Actions", succ: 11 }, { type: "M", time: "2 Actions", succ: 10 }],
    duration: "Permanent", range: "Touch",
    desc: "You introduce absolute thermodynamic dissolution into a target's vital or structural strings. This is a threshold save (Fortitude + Toughness), needing 5 successes. On failure the creature begins unravelling at the cellular level: every long rest they make another threshold save at DC 10. On failure their maximum deep wounds decrease by 1 permanently. When this reaches 0 they die and cannot be resurrected. On success the process slows but does not stop. No spell below level 9 can reverse Entropy. On a structure (a fortress, a ship, a monument), Entropy causes it to crumble over 1d6 weeks. Casting Entropy permanently reduces the caster's own maximum deep wounds by 1.",
    upcast: null
  },
  {
    school: "verdancy", level: 1, name: "Animal Messenger", cost: "2 pts",
    components: [{ type: "V", time: "3 Actions", succ: 2 }, { type: "M", time: "2 Actions", succ: 2 }],
    duration: "Until message delivered or 3 days", range: "Touch (a small animal)",
    desc: "You touch a willing small animal  a bird, a rat, a cat  and whisper a message of up to 1 minute in length along with a description of a recipient and a destination. The animal becomes a reliable messenger, travelling by the most direct safe route it can navigate. Upon reaching a creature matching your description it will approach them, wait to be acknowledged, and play back your message as a whispered mimicry. The animal behaves normally along the way  it will avoid danger, rest, and eat. It cannot pass through magically sealed areas. If the animal dies in transit the message is lost.",
    upcast: "Every 2 pts: the animal moves at twice its natural speed, or the message duration doubles."
  },
  {
    school: "verdancy", level: 1, name: "Beast Whistle", cost: "Variable",
    components: [{ type: "S", time: "Half action", succ: 1 }, { type: "V", time: "Half action", succ: 1 }],
    duration: "Concentration, 10 min", range: "Nearby animal",
    desc: "You extend a thread of life connection to a nearby animal. It becomes aware of your intent, reacts to your presence, and may follow simple commands or communicate through instinctual signals.",
    upcast: "More spell points deepen the connection, allowing more complex commands and tasks (DM discretion)."
  },
  {
    school: "verdancy", level: 1, name: "Purify Food and Water", cost: "1 pt",
    components: [{ type: "V", time: "3 Actions", succ: 2 }, { type: "M", time: "2 Actions", succ: 2 }],
    duration: "Permanent", range: "Touch",
    desc: "You coax the vital strings of organic matter to expel anything hostile to life  poison, disease spores, rot, parasites, contamination. Up to 1 cubic meter of food or water per casting is rendered completely safe to consume. Works on food that has begun to spoil but not fully rotted. Works on water tainted by most mundane sources. Does not remove magical curses from food or alchemical poisons applied with intent  only naturally occurring or accidental contamination. A staple of healers, travellers, and anyone moving through blighted land.",
    upcast: "Every 2 pts: volume +1 cubic meter or remove one specific magical contamination per additional 3 pts."
  },
  {
    school: "verdancy", level: 1, name: "Sprout Pulse", cost: "Variable",
    components: [{ type: "M", time: "Action", succ: 2 }, { type: "V", time: "Action", succ: 2 }],
    duration: "5 minutes", range: "Touch",
    desc: "You encourage latent growth in nearby plants, causing them to twist, bend, and reach toward your guidance. Move or create 5 cubic meters of growth as a structure of your choice. The structure holds against 7 wounds (does not soak). Weight limit 100 kg.",
    upcast: "Every 2 points: growth +5m, weight limit +50 kg, wounds +3."
  },
  {
    school: "verdancy", level: 2, name: "Commune with Nature", cost: "3 pts",
    components: [{ type: "M", time: "4 Actions", succ: 3 }, { type: "V", time: "4 Actions", succ: 3 }, { type: "S", time: "3 Actions", succ: 2 }],
    duration: "10 minutes", range: "Self, 3 km radius",
    desc: "You sit and open your awareness into the living network of the surrounding ecosystem. For the duration you gain instinctual knowledge of the following within 3 km: the general presence and rough number of any creature types (not specific individuals); the location of water sources; whether the land has been recently blighted, corrupted, burned, or magically altered; the presence of any unnatural or out-of-place features (ruins, buried structures, dead zones). The information comes as feeling and impression, not precise coordinates. You cannot move or act during this ritual.",
    upcast: "Every 2 pts: radius +2 km or gain specific impressions about one creature type of your choice."
  },
  {
    school: "verdancy", level: 2, name: "Ensnaring Thicket", cost: "4 pts",
    components: [{ type: "M", time: "Action", succ: 4 }, { type: "V", time: "Half action", succ: 3 }],
    duration: "Concentration, 1 min", range: "30m",
    desc: "A burst of aggressive, thorny vines erupts in a 10m radius. The area becomes difficult terrain. Creatures entering or starting their turn inside make a threshold save (Agility + Acrobatics) or become restrained. A restrained creature can spend an action making a threshold save (Strength + Athletics) to break free.",
    upcast: "Every 2 spell points: radius +5m."
  },
  {
    school: "verdancy", level: 3, name: "Hallucinogenic Spores", cost: "4 pts",
    components: [{ type: "M", time: "5 Actions", succ: 4 }, { type: "V", time: "4 Actions", succ: 3 }],
    duration: "8 hours (the prepared space)", range: "Prepared area up to 10m radius",
    desc: "You spend the ritual period cultivating a specific species of fungus and coaxing its spore production with Verdancy. The spores are invisible and odourless. Any creature entering the prepared area must make Fortitude + Toughness vs DC 6 or begin experiencing vivid, controllable hallucinations  the nature and content of which you determine during the ritual preparation. The hallucinations can be pleasant or terrifying, and cause the affected creature to believe they are somewhere or with someone entirely different. The effect lasts for 1 hour after leaving the area. The spores disperse naturally after 8 hours.",
    upcast: null
  },
  {
    school: "verdancy", level: 3, name: "Strangling Growth", cost: "5 pts",
    components: [{ type: "M", time: "Action", succ: 4 }, { type: "V", time: "Action", succ: 4 }, { type: "S", time: "Half action", succ: 3 }],
    duration: "Concentration, 1 min", range: "25m",
    dmgType: "Piercing",
    desc: "Aggressive plant growth erupts around and through a single target. This is a threshold save (Agility + Acrobatics): on failure the target is restrained and takes 3d10 wound successes at the start of each of their turns. They may spend an action making a threshold save (Strength + Athletics) to tear free. If they escape, vines reorient and attempt to seize them again next turn unless they move more than 25m from the origin.",
    upcast: "Every 2 pts: +1d10 damage or designate one additional target."
  },
  {
    school: "verdancy", level: 4, name: "Verdant Titan", cost: "7 pts",
    components: [{ type: "M", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }, { type: "S", time: "Action", succ: 5 }],
    duration: "Concentration, 10 min", range: "5m",
    dmgType: "Bludgeoning",
    desc: "A 4-meter tall construct of living plant matter rises under your direction.3 to all physical stats and 1 to all mental. It has 5 hp. Slam attack: 2 points, 2d10 damage dice, reach 3m. Speed: 5m/turn. Acts on your initiative, costs half action to command. Collapses beyond 40m range or if concentration lapses. You may cast Verdancy spells through it for positioning.",
    upcast: "Every 3 pts: +1 deep wound or gains a second attack per turn."
  },
  {
    school: "verdancy", level: 5, name: "Plague of Locusts", cost: "8 pts",
    components: [{ type: "M", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }],
    duration: "Concentration, up to 10 min", range: "100m",
    dmgType: "Piercing",
    desc: "You summon a living storm of insects that fills a 15m radius area. The swarm moves up to 20m per round as a free action. Any creature in the swarm's area has all DCs increased by 2 and takes 5d10 wound successes at the start of their turns as insects infiltrate armour, eyes, and mouth. The swarm blocks line of sight for all creatures within it. It cannot be harmed by conventional attacks  only fire, extreme cold, or area-of-effect magic. Any crops, wood, rope, leather, or organic material in the area is destroyed in 1 minute.",
    upcast: "Every 2 pts: radius +5m."
  },
  {
    school: "verdancy", level: 5, name: "Root Mind", cost: "8 pts",
    components: [{ type: "M", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }, { type: "S", time: "Action", succ: 6 }],
    duration: "Concentration, 1 hour", range: "Any plant network in contact with soil you touch",
    desc: "You merge your consciousness into the mycorrhizal network of the surrounding ecosystem. For the duration you perceive through every root, fungal thread, and plant stem within 1 km of your casting point. You sense the weight and movement of every creature on the surface, detect the presence of blight, fire, magic, or corruption within the network, and may speak to any creature touching living soil within range  your voice rising as a whisper through the roots beneath their feet. You cannot act physically while merged. Concentration breaks if you take damage.",
    upcast: "Every 3 pts: range +500m."
  },
  {
    school: "verdancy", level: 6, name: "The Binding Root", cost: "11 pts",
    components: [{ type: "M", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 7 }, { type: "S", time: "Action", succ: 6 }],
    duration: "Until removed", range: "40m",
    dmgType: "Bludgeoning",
    desc: "Roots of impossible toughness erupt from the ground and grow through a single target, pinning them completely. They cannot move, cannot take reactions, and cannot cast spells with Somatic components. Each root has 4 shallow wounds and 2 deep wounds  there are 6 roots per target. The roots regenerate 2 shallow wounds per round from the earth itself. While bound, you may spend a half action to cause the roots to tighten  the target takes 10d10 wound successes. This may be repeated once per round. The spell has no concentration requirement and maintains itself as long as the target lives and living soil is beneath them.",
    upcast: null
  },
  {
    school: "verdancy", level: 6, name: "World Tree", cost: "11 pts",
    components: [{ type: "M", time: "2 Actions", succ: 8 }, { type: "V", time: "Action", succ: 7 }, { type: "S", time: "Action", succ: 6 }],
    duration: "Permanent (until destroyed)", range: "Touch (ground)",
    desc: "You plant a seed of impossible growth that erupts over 1 round into a tree 60m tall and 10m in trunk diameter. The tree has 10 shallow wounds and 8 deep wounds, soak 5 against all damage. Its canopy spans 40m and creates difficult terrain throughout. It produces edible fruit year-round, its sap is a mild healing agent (equivalent to Tend Fibers once per creature per day), and any Verdancy spell cast within its canopy has its point cost reduced by 2. While it stands, the land within 300m cannot be magically altered by spells below level 7.",
    upcast: null
  },
  {
    school: "verdancy", level: 7, name: "Green Wrath", cost: "13 pts",
    components: [{ type: "M", time: "Action", succ: 8 }, { type: "V", time: "Action", succ: 8 }, { type: "S", time: "Action", succ: 7 }],
    duration: "Concentration, up to 10 min", range: "200m radius",
    dmgType: "Piercing",
    desc: "The deep memory of forests rises at your call. All plant life within 200m becomes aggressive and mobile. Trees uproot and move at 8m per round, vines lash outward with 10m reach dealing 10d10 wounds on hit. Every creature on the ground not designated by you makes a threshold save (Agility + Acrobatics) each round or become restrained, taking 6d10 wound successes at the start of their turns. The terrain becomes impassable without a successful threshold save (Strength + Athletics) each turn. Structures take 8d10 wound successes each round as roots tear through them.",
    upcast: null
  },
  {
    school: "verdancy", level: 8, name: "Germination", cost: "15 pts",
    components: [{ type: "M", time: "2 Actions", succ: 9 }, { type: "V", time: "2 Actions", succ: 8 }, { type: "S", time: "Action", succ: 8 }],
    duration: "Permanent", range: "1 km radius",
    desc: "You seed an entire region with living memory. Every barren, salted, or magically dead stretch of land within 1 km of your casting point is seeded with Verdancy-infused growth. Over 1d4 weeks the land becomes fertile and forested, water sources purify, and Blighted ground is cleansed. The transformation is permanent and cannot be reversed except by Thanaturgy of level 8 or higher. You must remain in the region for the full transformation period, casting this spell once per dawn each day until complete. Can reverse the effect of The Pale Tide within the same area.",
    upcast: null
  },
  {
    school: "verdancy", level: 9, name: "Samsara", cost: "20 pts",
    components: [{ type: "M", time: "3 Actions", succ: 11 }, { type: "V", time: "3 Actions", succ: 11 }, { type: "S", time: "2 Actions", succ: 10 }],
    duration: "Permanent", range: "Touch",
    desc: "You touch a dead creature and reintroduce their vital strings into the living world. They return not as themselves but as something new  born into a random living creature gestating nearby (DM determines the species), retaining no memories but carrying the deepest patterns of their soul: their skills at half value, their core stat array shifted but recognisable, and a single wordless conviction that is the last echo of who they were. If cast simultaneously with Resurrection Pulse, the two spells in concert achieve true resurrection with no restrictions, no time limit, and no exhaustion cost. Samsara alone is continuation, not resurrection. Can only be cast under open sky on living soil. Casting causes the caster to weep tears of blood for 3 days.",
    upcast: null
  },
  {
    school: "thermaturgy", level: 1, name: "Guiding Wind", cost: "1 pt",
    components: [{ type: "S", time: "Half action", succ: 1 }, { type: "V", time: "Half action", succ: 1 }],
    duration: "Instant", range: "10m",
    desc: "A focused gust pushes or pulls one unanchored creature or object 5m in a direction of your choice. A creature may resist with a threshold save (Strength + Athletics).",
    upcast: "Each spell point: push distance +5m."
  },
  {
    school: "thermaturgy", level: 1, name: "Warm Flicker", cost: "1 pt",
    components: [{ type: "S", time: "Half action", succ: 2 }, { type: "V", time: "Half action", succ: 2 }],
    duration: "Instant or Concentration", range: "Touch",
    desc: "Choose one effect: Warmth - touch an object, it emanates gentle heat, dries clothes, warms drinks, sheds dim light 2m radius. Chill - touch a creature, they make a threshold save (Fortitude + Toughness) or the DC for their next Agility-based check increases by 1. Can be sustained by expending 1 spell point to slowly raise or lower temperature.",
    upcast: null
  },
  {
    school: "thermaturgy", level: 1, name: "Warmth", cost: "1 pt",
    components: [{ type: "V", time: "2 Actions", succ: 1 }, { type: "S", time: "2 Actions", succ: 1 }],
    duration: "8 hours (no concentration)", range: "Touch",
    desc: "You thread a gentle constant heat through a willing creature's thermal strings. For the duration they do not feel cold regardless of ambient temperature and cannot suffer harm from natural cold exposure. They remain comfortable in freezing conditions, blizzards, and icy water indefinitely. Their body temperature remains perfectly stable. A winter traveller's essential spell. Can be applied to objects instead  a tent, a sleeping roll, a blanket  warming everything inside it.",
    upcast: "Every 2 pts: affect one additional creature or object."
  },
  {
    school: "thermaturgy", level: 2, name: "Control Weather", cost: "4 pts",
    components: [{ type: "S", time: "5 Actions", succ: 4 }, { type: "V", time: "5 Actions", succ: 4 }, { type: "M", time: "3 Actions", succ: 3 }],
    duration: "8 hours (no concentration)", range: "5 km radius",
    desc: "A lengthy ritual that takes hold of the thermal currents in the sky above. Over the ritual period you bring the weather to a state of your choosing within natural limits for the region and season  you cannot create a blizzard in a desert, but you can summon rain in a drought, clear fog, push away storm clouds, raise or lower temperature by up to 15 degrees, or call a light wind. The change happens gradually over 1 hour and holds for 8 hours before natural weather patterns reassert themselves. Cannot be used to create combat weather effects.",
    upcast: "Every 3 pts: the change can exceed seasonal norms by one step."
  },
  {
    school: "thermaturgy", level: 2, name: "Flash Freeze", cost: "4 pts",
    components: [{ type: "S", time: "Action", succ: 4 }, { type: "V", time: "Half action", succ: 3 }],
    duration: "Instant", range: "20m",
    dmgType: "Cold",
    desc: "You violently drain the thermal energy from a target. The spell deals 6d10 wound successes. Any creature that rolls fewer than 3 successes on their reaction roll also has their movement halved and DC for Strength and Agility actions increased by 2 until the end of their next turn.",
    upcast: "Every 2 pts: target one additional creature."
  },
  {
    school: "thermaturgy", level: 2, name: "Forge", cost: "3 pts",
    components: [{ type: "S", time: "4 Actions", succ: 3 }, { type: "V", time: "3 Actions", succ: 3 }, { type: "M", time: "4 Actions", succ: 3 }],
    duration: "30 days", range: "Touch (raw materials)",
    desc: "You manipulate thermal strings to achieve the precise, sustained temperatures of a basic forge without requiring a furnace or bellows. Over the ritual period you can smelt, temper, cast, and work metal with the precision of a skilled blacksmith  the heat is under your complete control down to the degree. You can shape metal objects of up to 10 kg, alloy materials, harden and temper blades, set stones into metal settings, and repair metal items with forge-quality results. You must still have smithing knowledge  the spell provides the heat and control, not the skill.",
    upcast: "Every 2 pts: material weight +10 kg or work time halved."
  },
  {
    school: "thermaturgy", level: 3, name: "Fireball", cost: "6 pts",
    components: [{ type: "S", time: "Action", succ: 5 }, { type: "V", time: "Half action", succ: 4 }, { type: "M", time: "Half action", succ: 3 }],
    duration: "Instant", range: "40m",
    dmgType: "Fire",
    desc: "A mote of compressed thermal energy detonates into a 10m radius sphere of roiling fire. Every creature in the area takes 6d10 wound successes. Flammable objects ignite. Area is difficult terrain until your next turn.",
    upcast: "Every 2 pts: radius +3m or damage +2d10. Increasing damage adds a half action to Material."
  },
  {
    school: "thermaturgy", level: 3, name: "Thermal Shell", cost: "5 pts",
    components: [{ type: "S", time: "Action", succ: 4 }, { type: "V", time: "Action", succ: 4 }],
    duration: "Concentration, 1 min", range: "Self",
    dmgType: "Fire",
    desc: "A sheath of superheated air surrounds you. Melee attackers take 2d10 wound successes when they attack you. You take 3 less cold damage per instance.",
    upcast: "Every 2 pts: discharge damage +1d10."
  },
  {
    school: "thermaturgy", level: 3, name: "Wind Walk", cost: "5 pts",
    components: [{ type: "S", time: "5 Actions", succ: 5 }, { type: "V", time: "5 Actions", succ: 5 }, { type: "M", time: "3 Actions", succ: 4 }],
    duration: "8 hours or until dismissed", range: "Self and up to 5 willing creatures",
    desc: "A long ritual that attunes the thermal strings of you and your companions to the wind itself. For the duration, each affected creature can choose at the start of their turn to become gaseous and travel at 100 km/h as a cloud-like form. In this form they cannot interact with anything, cannot be harmed by mundane means, and are invisible from below against a sky background. Reverting to solid form takes a full round. The group must stay within 1 km of each other while wind walking or individuals revert automatically. Ideal for crossing terrain, evading pursuit, or reaching siege positions.",
    upcast: null
  },
  {
    school: "thermaturgy", level: 4, name: "Magma Fissure", cost: "7 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Concentration, 1 min", range: "30m",
    dmgType: "Fire",
    desc: "A line up to 20m long and 3m wide erupts with molten rock. Creatures in the line take 8d10 wound successes. Any creature that rolls fewer than 3 successes on their reaction roll also falls in and becomes restrained;  escaping requires a threshold save (Strength + Athletics) as an action. Creatures in the fissure or restrained by the fissure take 3d10 wound successes per turn. After the spell ends, jagged obsidian difficult terrain remains, creating difficult terrain.",
    upcast: "Every 3 pts: fissure length +5m."
  },
  {
    school: "thermaturgy", level: 5, name: "Chain Lightning", cost: "9 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 },{ type: "M", time: "Half action", succ: 5 }],
    duration: "Instant", range: "60m",
    dmgType: "Lightning",
    desc: "You generate a massive electrostatic discharge. The primary target takes 12d10 wound successes. The bolt then leaps to the nearest other creature within 15m for 10d10, then 8d10, then 6d10, then 4d10. The chain continues until there are no creatures within 15m of the last struck target or the dice would fall below 2d10. A creature cannot be struck twice by the same casting. Metal armour increases damage by 2d10 against the wearer. Each struck creature has a 50% chance to be stunned until the end of their next turn.",
    upcast: "Every 2 pts: primary target +2d10 (the whole chain scales accordingly), + half action."
  },
  {
    school: "thermaturgy", level: 5, name: "Cone of Cold", cost: "9 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }],
    duration: "Instant", range: "Self, 15m cone",
    dmgType: "Cold",
    desc: "You release a blast of arctic air in a 15m cone. Every creature in the area takes 12d10 wound successes. Any creature that rolls fewer than 3 successes on their reaction roll is also Frozen: movement 0, cannot take reactions, +2 DC on all actions, until they make a threshold save (Fortitude + Toughness) at the end of their turn. Creatures already Frozen take the full damage with no reduction possible. Any liquid in the cone freezes solid.",
    upcast: "Every 2 pts: cone length +5m or +2d10."
  },
  {
    school: "thermaturgy", level: 6, name: "Brahmanda", cost: "11 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 7 }, { type: "M", time: "Action", succ: 6 }],
    duration: "Concentration, up to 3 rounds", range: "80m",
    dmgType: "Fire",
    desc: "You compress thermal energy above a target point for 1 round. On round 2 the compression reaches critical mass  a column of plasma 10m wide and 50m tall erupts. Every creature within takes 16d10 wound successes (Agility + Acrobatics, half on success). Terrain is melted  stone becomes lava, wood is vaporised, metal runs like water. On round 3 if you maintain concentration the column expands to 20m wide and deals 10d10 to the outer 10m ring additionally. The caster must succeed on Resolve + Focus DC 7 (3 successes) each round or lose concentration from thermal feedback.",
    upcast: null
  },
  {
    school: "thermaturgy", level: 6, name: "Hailstorm of Iron", cost: "10 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 6 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Concentration, up to 3 rounds", range: "100m",
    dmgType: "Cold",
    desc: "You superheat and flash-freeze iron particles in the upper atmosphere above a 20m radius area, precipitating them as needle-sharp metal hail. Every round any creature in the area takes 10d10 wound successes. Metal armour provides no protection against this reaction roll. Structures take 8d10 each round. Anyone moving through the area outside the storm still takes 2d10 from ground-level shrapnel.",
    upcast: "Every 2 pts: +1 round duration."
  },
  {
    school: "thermaturgy", level: 7, name: "Eye of the Storm", cost: "12 pts",
    components: [{ type: "S", time: "Action", succ: 8 }, { type: "V", time: "Action", succ: 7 }, { type: "M", time: "Action", succ: 6 }],
    duration: "Concentration, up to 10 min", range: "500m",
    dmgType: "Lightning",
    desc: "You call a real thermodynamic weather event nucleated at a point you designate. Wind speeds reach 200 km/h within 300m. Unattended objects are thrown. Medium or smaller creatures must make Strength + Athletics vs DC 8 each turn or be flung 2d10 × 3m. Lightning strikes a random creature or structure in the storm zone every round for 12d10 wound successes  you may spend a reaction (half action cost) to redirect a strike to a chosen target. Rain halves all fire damage in the area. You stand in perfect calm at the eye and may move it up to 50m per round as a free action.",
    upcast: null
  },
  {
    school: "thermaturgy", level: 8, name: "Meteor Swarm", cost: "16 pts",
    components: [{ type: "S", time: "Action", succ: 9 }, { type: "V", time: "Action", succ: 9 }, { type: "M", time: "Action", succ: 8 }],
    duration: "Instant", range: "1 km (must be outdoors)",
    dmgType: "Fire",
    desc: "You call down four blazing meteors from the upper atmosphere, each striking a point you designate. Each meteor hits a 10m radius area for 20d10 wound successes. You may target four different points or concentrate them: overlapping areas take each meteor's damage separately. Terrain struck becomes burning difficult terrain for 1 hour. Structures within any impact zone take double wounds. This is loud enough to be heard 20 km away.",
    upcast: null
  },
  {
    school: "thermaturgy", level: 9, name: "Ragnarok", cost: "20 pts",
    components: [{ type: "S", time: "3 Actions", succ: 11 }, { type: "V", time: "3 Actions", succ: 11 }, { type: "M", time: "3 Actions", succ: 10 }],
    duration: "Permanent", range: "10 km radius",
    desc: "You initiate an irreversible thermodynamic catastrophe across an entire region. Over 24 hours: geothermal vents crack open, temperatures oscillate between extreme heat and killing cold every hour, and a permanent storm system establishes itself lasting decades. Any settlement within the region is effectively destroyed over this period. Crops fail. Water turns toxic from thermal shock. The region becomes a wasteland of volcanic activity and alternating frozen wastes. This spell kills the caster  their body consumes itself as the thermal fuel source for the cascade. The caster knows this before they choose to cast. Their soul is preserved in the storm  those who enter the region sometimes hear a voice in the wind.",
    upcast: null
  },
  {
    school: "metametrics", level: 1, name: "Detect Magic", cost: "1 pt",
    components: [{ type: "S", time: "3 Actions", succ: 2 }, { type: "V", time: "2 Actions", succ: 2 }],
    duration: "Concentration, 10 min", range: "Self, 30m radius",
    desc: "You tune your awareness to the Source strings around you, becoming sensitive to active manipulation. For the duration you can sense the presence of magic within 30m  not its nature or origin, but the fact of it. You can tell which objects or creatures carry active magical effects, and roughly how powerful (faint, moderate, overwhelming). Moving toward a source or concentrating on a specific object for a full action reveals its school of magic. Does not reveal inactive magical items or items whose enchantment has been dormant for more than a month.",
    upcast: "Every 2 pts: you also learn the approximate level of each magical effect."
  },
  {
    school: "metametrics", level: 1, name: "Mage Hand", cost: "Free",
    components: [{ type: "S", time: "Half action", succ: 1 }],
    duration: "Concentration, 10 min", range: "10m",
    desc: "The simplest expression of Metametrics  you extend your own structural presence as a spectral hand of concentrated force. The hand can carry up to 5 kg, open unlocked doors, retrieve items, and perform simple tasks like pouring, pulling levers, or steadying objects. It moves wherever you direct it as a free action. It cannot attack, cannot hold weapons with intent to harm, and cannot perform tasks requiring more dexterity than a thick winter glove. Costs no spell points.",
    upcast: null
  },
  {
    school: "metametrics", level: 1, name: "Reconfigure Matter", cost: "2 pts",
    components: [{ type: "S", time: "Half action", succ: 2 }, { type: "M", time: "Half action", succ: 2 }],
    duration: "Instant", range: "5m cube",
    desc: "Target a 5m cube of non-living mundane material and rewrite its structural configuration: stone wall to sand, dirt to mud, wooden door to brittle glass. If transforming ground, creatures in the area make a threshold save (Agility + Acrobatics) or are restrained until their next turn. If targeting a worn object, the wearer makes a threshold save (Fortitude + Toughness) to negate.",
    upcast: "Every 2 pts: cube size +5m on one side."
  },
  {
    school: "metametrics", level: 1, name: "Structural Pliability", cost: "2 pts",
    components: [{ type: "S", time: "Half action", succ: 2 }, { type: "M", time: "Half action", succ: 2 }],
    duration: "Concentration, 5 min", range: "Touch",
    desc: "You touch a non-magical object and temporarily soften its physical structure. Any skill checks made to break, bend, or disable the object (lock picking, forcing a door) have their success DC reduced by 2.",
    upcast: "Every 2 pts: DC reduced by 1 further, Somatic time +half action."
  },
  {
    school: "metametrics", level: 2, name: "Arcane Lock", cost: "3 pts",
    components: [{ type: "S", time: "4 Actions", succ: 4 }, { type: "V", time: "4 Actions", succ: 3 }, { type: "M", time: "3 Actions", succ: 3 }],
    duration: "Until dispelled", range: "Touch",
    desc: "A ritual that restructures the molecular configuration of a closeable object  door, chest, gate, book  so that it becomes permanently sealed except to those you designate. Anyone attempting to force, pick, or break through the sealed object finds the difficulty increased by 3 successes and the DC increased by 2. Knock spells and Metametrics spells of lower level than this one fail to open it. Those you designate can open and close it normally with no effort. The ritual leaves a faint geometric pattern on the object's surface visible to magical sight.",
    upcast: "Every 2 pts: the difficulty increase rises by 1 and the DC by 1."
  },
  {
    school: "metametrics", level: 2, name: "Biomorphic Adaptation", cost: "4 pts",
    components: [{ type: "S", time: "Action", succ: 4 }, { type: "V", time: "Action", succ: 3 }],
    duration: "Concentration, 10 min", range: "Self",
    desc: "You rewrite the structural strings of your own body. Choose one effect: Adaptive Form  gills + swim speed, or claws + climb speed equal to base movement. Mutable Visage  change height, weight, features, voice; +2 dice to Deception/Performance for the disguise. Natural Weapons  unarmed strikes count as a proficient weapon, deal successes on 1 die.",
    upcast: "Every 2 pts: gain one additional effect from the list."
  },
  {
    school: "metametrics", level: 2, name: "Weapon Shift", cost: "3 pts",
    components: [{ type: "S", time: "Reaction (half action cost)", succ: 4 }],
    duration: "Instant", range: "15m",
    desc: "When a creature you can see attacks with a non-magical weapon, you rewrite its structure for a crucial moment. The attacker makes a threshold save (Resolve + Focus). On failure: the weapon turns to useless material: the attack automatically fails.",
    upcast: "Every 2 pts: DC of target's Resolve + Focus check +1."
  },
  {
    school: "metametrics", level: 3, name: "Counterspell", cost: "5 pts",
    components: [{ type: "S", time: "Reaction (Action cost)", succ: 5 }],
    duration: "Instant", range: "30m",
    desc: "When a creature you can see begins casting a spell, you unravel it. Make a contested spellcasting roll  both roll dice equal to your spellcasting focus proficiency. More successes: spell fails, spell points wasted. Caster wins: spell proceeds. If the countered spell is higher level than your highest known spell, your DC to counterspell increases by 1 for each level above.",
    upcast: "Every 2 pts: +2 dice to your contested roll."
  },
  {
    school: "metametrics", level: 3, name: "Identify", cost: "2 pts",
    components: [{ type: "S", time: "4 Actions", succ: 4 }, { type: "M", time: "4 Actions", succ: 4 }],
    duration: "Instant", range: "Touch",
    desc: "A careful ritual examination of a magical object or creature. After the ritual you learn: every magical property the object possesses (including hidden or dormant ones); how it was made and what school of magic created it; any curses or conditions attached to using it; the rough level of magic used to create it; and the name of the object if it has one. On a creature, you learn all active magical effects currently on them, their school, level, and remaining duration. Cannot reveal information the object itself does not contain  an unidentified item made by an unknown god may yield incomplete results.",
    upcast: null
  },
  {
    school: "metametrics", level: 3, name: "Restructure", cost: "5 pts",
    components: [{ type: "S", time: "2 Actions", succ: 5 }, { type: "M", time: "2 Actions", succ: 5 }],
    duration: "Until concentration lapses", range: "15m",
    desc: "You take control of the structural strings of a large volume of non-living matter and reshape it deliberately  walls, bridges, stairs, barriers, emplacements. Up to a 10m cube. Material retains its original properties. If concentration lapses, matter returns to original shape over 1 minute.",
    upcast: "Every 2 pts: cube size +5m on one side."
  },
  {
    school: "metametrics", level: 4, name: "Unmaking", cost: "7 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Instant", range: "Touch",
    dmgType: "Force",
    desc: "You dissolve the structural strings of a non-magical object or construct up to Huge size. Roll 8d10  take wounds equal to successes. Reduced to 0: disintegrated to fine powder. Cast on a magical object: suppresses its properties for 24 hours on a successful roll. Magical objects make a contested roll using the creator's original spellcasting focus proficiency.",
    upcast: "Every 3 pts: +2d10 wound dice."
  },
  {
    school: "metametrics", level: 5, name: "Disintegrate", cost: "9 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }],
    duration: "Instant", range: "30m",
    dmgType: "Force",
    desc: "You fire a thin green ray that unmakes whatever it touches at the molecular level. A creature struck takes 14d10 wound successes. If reduced to 0 wounds by this damage, they are disintegrated entirely  nothing remains except a trace of fine dust. No body means no resurrection below level 9. Against objects and structures, Disintegrate simply works on any volume up to a 3m cube  it ceases to exist. Magical objects make a contested roll against your threshold to resist.",
    upcast: "Every 2 pts: +2d10."
  },
  {
    school: "metametrics", level: 5, name: "Petrify", cost: "9 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "M", time: "Action", succ: 6 }],
    duration: "Permanent until reversed", range: "20m",
    dmgType: "Force",
    desc: "You rewrite the structural configuration of a living creature's organic material to stone. This is a threshold save (Fortitude + Toughness), needing 4 successes. On failure: they are turned entirely to stone: aware but unable to move or act, and cannot be killed while petrified. Only a Metametrics spell of level 5 or higher reverses it. On success: they take 12d10 wound successes and their movement is halved for 1 hour.",
    upcast: null
  },
  {
    school: "metametrics", level: 6, name: "The Tablets of Fate", cost: "12 pts",
    components: [{ type: "S", time: "2 Actions", succ: 8 }, { type: "V", time: "Action", succ: 7 }, { type: "M", time: "2 Actions", succ: 7 }],
    duration: "Until triggered or 1 week", range: "Touch (an inscription surface)",
    desc: "You inscribe a law of reality onto a surface. The law is stated in plain language and may describe any physical condition and consequence  examples: 'No blood shall be spilled within these walls', 'No weapon may pass this threshold', 'Any creature that speaks a lie within this chamber takes 6d10 wound successes'. The inscription becomes a hard physical law of the local Source strings for the duration. Violation is not a save  it simply happens. The inscription can hold up to 3 laws simultaneously. Laws may govern immediate physical actions but may not dictate broad future events. Each law inscribed ages the caster 1 year visibly.",
    upcast: null
  },
  {
    school: "metametrics", level: 6, name: "Transmute Flesh", cost: "11 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "M", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 6 }],
    duration: "Permanent until reversed", range: "Touch or 10m (for unwilling targets)",
    desc: "On a willing target: choose any natural creature of equal or lower level: the target permanently takes on that creature's physical form and natural abilities while retaining their mind and class abilities. They may revert to their original form once per day as an action. On an unwilling target: this is a threshold save (Fortitude + Toughness), needing 5 successes. On failure: the target is transformed into a mundane animal of your choice, retaining their mind but losing all class abilities and spells while transformed. Permanent, reversible only by Metametrics level 5 or higher.",
    upcast: null
  },
  {
    school: "metametrics", level: 7, name: "Prometheus Unchained", cost: "13 pts",
    components: [{ type: "S", time: "Action", succ: 8 }, { type: "V", time: "Action", succ: 7 }, { type: "M", time: "Action", succ: 7 }],
    duration: "Permanent", range: "Touch",
    desc: "You rewrite one fundamental property of a willing target creature permanently and irreversibly. Choose one: they gain the ability to breathe underwater and in vacuum; they no longer need to eat or sleep; they become immune to one damage type permanently; their age permanently freezes at its current state; one of their stats increases by 2 permanently and that stat's cap increases by 2; or they may concentrate on two spells simultaneously. This is not an enchantment  it is a change to what the creature fundamentally is and cannot be dispelled. It cannot be undone except by another casting of this spell or a Metametrics spell of level 9. The caster permanently loses 1 point from a stat of their choice as the cost.",
    upcast: null
  },
  {
    school: "metametrics", level: 8, name: "Sculptor of Worlds", cost: "15 pts",
    components: [{ type: "S", time: "3 Actions", succ: 10 }, { type: "M", time: "3 Actions", succ: 10 }, { type: "V", time: "Action", succ: 8 }],
    duration: "Permanent", range: "500m radius",
    dmgType: "Bludgeoning",
    desc: "You reshape up to 500m radius of terrain permanently. You may raise or lower ground by up to 50m, redirect waterways, create or destroy ravines, build or unmake cliff faces, and transform the ground's material composition. Structures within the area not protected by magical wards are reshaped with the terrain. This requires 1 full hour of concentration to execute. Beings within the area during reshaping must make Agility + Acrobatics each round or be buried under shifting terrain for 8d10 wound successes and become restrained. This spell has been cast perhaps twelve times in recorded history.",
    upcast: null
  },
  {
    school: "metametrics", level: 9, name: "The Last Rewrite", cost: "20 pts",
    components: [{ type: "S", time: "3 Actions", succ: 11 }, { type: "V", time: "3 Actions", succ: 11 }, { type: "M", time: "3 Actions", succ: 11 }],
    duration: "Permanent", range: "Any location the caster has personally visited",
    desc: "You rewrite one law of physics within a region of up to 10 km radius. Examples: fire no longer produces heat; gravity is halved; living creatures regenerate one shallow wound per hour naturally; spellcasting requires no components; the region exists outside normal time and those within do not age. The rewrite is permanent and functions even in antimagic fields because it rewrites the field in which magic operates, not magic itself. Other Metametrics casters cannot undo it without casting their own Last Rewrite to overwrite it. Casting this spell requires a sacrifice: not the caster's life, but their identity. They forget who they were entirely  name, history, relationships, personal memories. They retain skills and knowledge but wake as a stranger to themselves.",
    upcast: null
  },
  {
    school: "vitalics", level: 1, name: "Cure Affliction", cost: "2 pts",
    components: [{ type: "S", time: "4 Actions", succ: 3 }, { type: "V", time: "3 Actions", succ: 3 }, { type: "M", time: "2 Actions", succ: 2 }],
    duration: "Permanent", range: "Touch",
    desc: "A careful ritual of vital realignment that targets and removes a single specific affliction from a willing creature. Works on: disease (mundane illness, infections, and blights), mundane poison (the poison is neutralised and any ongoing damage stopped), parasites, and natural venoms. Does not work on magical curses, Thanaturgy-based afflictions, or poison applied as a deliberate magical effect. The creature may feel brief nausea as the affliction is expelled. A healer's workhorse spell  less powerful than a Vitalics purge but far cheaper and repeatable.",
    upcast: "Every 2 pts: remove one additional affliction, or remove a magical poison (not a curse)."
  },
  {
    school: "vitalics", level: 1, name: "Pulse Sync", cost: "1 pt",
    components: [{ type: "S", time: "Half action", succ: 2 }, { type: "M", time: "Half action", succ: 2 }],
    duration: "5 min", range: "Touch",
    desc: "You touch a willing creature and stabilize their vital essence. For the duration, the target adds 1 success to any Resolve or Composure checks to resist mental effects or maintain concentration.",
    upcast: "Every 2 pts: target one additional creature."
  },
  {
    school: "vitalics", level: 1, name: "Stabilise", cost: "Free",
    components: [{ type: "S", time: "2 Actions", succ: 2 }, { type: "V", time: "2 Actions", succ: 1 }],
    duration: "Until a long rest (the stabilisation holds)", range: "Touch",
    desc: "You immediately stabilise a dying creature  all active deep wound countdowns are suspended and their conditions suppressed, as though Knit Bone and Sinew had been cast simultaneously on all of them. The creature is still wounded and still has all their deep wounds; they are simply no longer counting down. This costs no spell points. It takes 4 actions total (during which you are tending to them). This is the essential first skill of any battlefield medic  buying time until proper treatment is possible.",
    upcast: null
  },
  {
    school: "vitalics", level: 1, name: "Tend Fibers", cost: "2 pts",
    components: [{ type: "S", time: "Half action", succ: 3 }, { type: "V", time: "Half action", succ: 2 }],
    duration: "Instant", range: "Touch",
    desc: "You touch a willing creature and guide vital strings within them to mend minor injuries. The target recovers from one shallow wound. Cannot heal deep wounds.",
    upcast: "Every 2 pts: target recovers from one additional shallow wound."
  },
  {
    school: "vitalics", level: 2, name: "Knit Bone and Sinew", cost: "3 pts",
    components: [{ type: "S", time: "Action", succ: 3 }, { type: "V", time: "Half action", succ: 2 }],
    duration: "Instant", range: "Touch",
    desc: "You perform complex vitalic restoration on a critically injured creature. Touch a creature with at least one deep wound. The spell stabilises that deep wound  stopping its timer and suppressing its active condition. This does not remove the deep wound.",
    upcast: "Every 3 pts: stabilise one additional deep wound."
  },
  {
    school: "vitalics", level: 2, name: "Rest Ritual", cost: "3 pts",
    components: [{ type: "S", time: "5 Actions", succ: 4 }, { type: "V", time: "4 Actions", succ: 3 }, { type: "M", time: "3 Actions", succ: 3 }],
    duration: "The next 8 hours", range: "Touch (up to 6 willing creatures)",
    desc: "A slow ritual performed at the beginning of a rest period. You attune the vital strings of a group of people to rest more efficiently. For the rest that follows: any deep wounds they have count as already stabilised for the purpose of natural recovery; they heal 1 additional shallow wound during the rest; they do not suffer nightmares or magical sleep interruption; and they wake fully alert with no grogginess regardless of their prior level of exhaustion. Commonly used by military units on campaign or travelling parties who cannot afford poor recovery.",
    upcast: null
  },
  {
    school: "vitalics", level: 3, name: "Mend the Deep", cost: "6 pts",
    components: [{ type: "S", time: "Action", succ: 5 }, { type: "V", time: "Action", succ: 4 }, { type: "M", time: "Half action", succ: 3 }],
    duration: "Instant", range: "Touch",
    desc: "Emergency vitalic surgery. Close (fully heal) one deep wound and stabilise one additional deep wound.",
    upcast: "Every 3 pts: close one additional deep wound."
  },
  {
    school: "vitalics", level: 3, name: "Remove Curse", cost: "5 pts",
    components: [{ type: "S", time: "5 Actions", succ: 5 }, { type: "V", time: "5 Actions", succ: 5 }, { type: "M", time: "4 Actions", succ: 4 }],
    duration: "Permanent", range: "Touch",
    desc: "A careful and demanding ritual that unweaves a magical curse from a willing creature's vital strings. Works on curses of level 4 and below automatically. For curses of level 5 or higher you make a contested spellcasting roll against the original caster's threshold  on success the curse is removed, on failure the spell points are spent and the attempt fails (you may try again). Some curses are not removed but merely suppressed  the DM will indicate which. Cannot remove the effects of Entropy, Beast Metal corruption, or any curse stated to be permanent and irremovable. The ritual is exhausting for the caster  you cannot cast another ritual spell for 1 hour afterward.",
    upcast: null
  },
  {
    school: "vitalics", level: 3, name: "Vital Transfer", cost: "5 pts",
    components: [{ type: "S", time: "Action", succ: 4 }, { type: "V", time: "Action", succ: 4 }, { type: "M", time: "Half action", succ: 4 }],
    duration: "Instant", range: "Touch (two creatures)",
    dmgType: "Necrotic",
    desc: "Siphon vital energy from one creature and pour it into another. Donor takes 4d10 wound successes  cannot be reduced or resisted. Recipient recovers deep wounds equal to half the successes dealt (round down). Donor must be willing or incapacitated.",
    upcast: null
  },
  {
    school: "vitalics", level: 4, name: "Resurrection Pulse", cost: "8 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 6 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Instant", range: "Touch",
    desc: "Reach into the fading vital thread of a creature dead within the last minute. Cannot target victims of soul-burning. Make a spellcasting check vs DC 6. Success: creature returns, deep wounds stabilised, 1 shallow wound remaining, unconscious for 1 hour. Failure: spell points lost, cannot be re-attempted on this creature. The caster gains one level of exhaustion that cannot be removed for 48 hours.",
    upcast: null
  },
  {
    school: "vitalics", level: 5, name: "Knit the Whole", cost: "8 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }, { type: "M", time: "Half action", succ: 4 }],
    duration: "Instant", range: "Touch",
    desc: "Full restoration  not emergency medicine but the deliberate work of a master healer. You close all deep wounds on a touched willing creature and restore all shallow wounds. Limbs destroyed within the last 24 hours are regrown. Diseases and poisons are purged from the vital strings. Permanent stat damage caused by wounds or mundane illness is reversed. This does not reverse magical curses, Entropy, or deliberate permanent alterations. After casting, both caster and recipient are exhausted and cannot take more than a half action per turn until they sleep.",
    upcast: "Every 3 pts: affect one additional touched creature."
  },
  {
    school: "vitalics", level: 5, name: "Vital Surge", cost: "8 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }],
    duration: "Concentration, up to 1 min", range: "20m",
    desc: "You flood a willing creature's vital strings with excess life energy beyond natural limits. For the duration: the target gains +2 dice on all Strength and Agility rolls, +3m movement, their maximum shallow wounds increase by 3 (gained immediately), and they can take one additional half action per turn. They automatically succeed on Fortitude + Toughness rolls against poison and disease. When the spell ends the target loses the additional shallow wounds (which may cause deep wounds if current total exceeds the new maximum) and is exhausted until a long rest.",
    upcast: "Every 2 pts: +1 to the additional half actions or +1 to the shallow wound increase."
  },
  {
    school: "vitalics", level: 6, name: "Fravashi", cost: "10 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 6 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Concentration, up to 1 hour", range: "Self or Touch",
    desc: "You manifest a protective spiritual counterpart around a willing creature. While the Fravashi is active: the first time the protected creature would die in each encounter, they instead fall to 1 shallow wound remaining and the Fravashi absorbs the killing blow. The Fravashi can absorb 3 killing blows before dissolving. Additionally, the protected creature automatically stabilises all deep wounds at the start of each of their turns and heals 1 shallow wound per round. The Fravashi is visible as a faint second silhouette and can be attacked (3 shallow wounds and 2 deep wounds; destroying it ends the spell).",
    upcast: null
  },
  {
    school: "vitalics", level: 6, name: "Mass Restoration", cost: "10 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 7 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Instant", range: "20m radius",
    desc: "You pour vital energy outward in a wave, restoring every ally simultaneously. All willing creatures within 20m recover 2 shallow wounds. All deep wounds on any target within range are stabilised. Any ongoing poison or disease effect on targets is suppressed for 1 hour. Additionally, any ally who is at 0 shallow wounds and has not yet taken a death save this encounter instead recovers to 1 shallow wound and remains conscious. After casting, you lose 1 shallow wound as the vital expenditure costs you directly.",
    upcast: "Every 2 pts: +1 shallow wound recovered per target."
  },
  {
    school: "vitalics", level: 7, name: "Lay on Hands", cost: "12 pts",
    components: [{ type: "S", time: "Action", succ: 8 }, { type: "V", time: "Action", succ: 7 }],
    duration: "Instant", range: "Touch",
    desc: "You pour your own vital strings through a touched creature. They are restored to full health instantly: all wounds closed, all conditions removed, all stat damage reversed, curses weakened (they gain advantage on their next curse-break attempt), and if they were dead within the last hour they are returned to life as per Resurrection Pulse with no exhaustion and no chance of failure. The cost to the caster is total: after casting you are reduced to 1 shallow wound, lose all spell points, and cannot cast any spells until a long rest. Cannot be cast on yourself.",
    upcast: null
  },
  {
    school: "vitalics", level: 8, name: "The Undying Covenant", cost: "14 pts",
    components: [{ type: "S", time: "Action", succ: 9 }, { type: "V", time: "Action", succ: 9 }, { type: "M", time: "Action", succ: 8 }],
    duration: "Permanent (until broken)", range: "Touch (willing creature)",
    desc: "You forge a permanent vital link between yourself and a single willing creature  your life strings intertwined at the root. While the Covenant holds: the bonded creature cannot die while you live. Any wound that would kill them instead transfers half its successes to you. You are both aware of each other's wound states at all times regardless of distance. Once per day as a free action you may transfer any number of your shallow wounds to yourself from them, or share your remaining spell points equally. The Covenant can only be broken by mutual willingness or the death of the caster  in which case the bonded creature receives all wounds the caster had at the moment of death. A caster may hold only one Covenant at a time.",
    upcast: null
  },
  {
    school: "vitalics", level: 9, name: "Fountain of Siloam", cost: "20 pts",
    components: [{ type: "S", time: "3 Actions", succ: 11 }, { type: "V", time: "3 Actions", succ: 11 }, { type: "M", time: "2 Actions", succ: 10 }],
    duration: "Permanent", range: "Touch (a water source)",
    desc: "You infuse a natural water source permanently with your vital strings. Any creature that drinks from or is fully submerged in the water gains the following: all wounds healed, all diseases cured, all poisons purged, one permanent stat loss reversed, and if they are dying they are stabilised. The water retains this power indefinitely but cannot be bottled and taken elsewhere  once removed from the source it becomes normal water within 1 minute. Word of the Fountain spreads within 1d6 months and people begin making pilgrimage. Casting permanently transfers the caster's ability to heal themselves  they can still cast all Vitalics spells on others but no Vitalics spell can ever affect the caster again.",
    upcast: null
  },
  {
    school: "aegistry", level: 1, name: "Alarm", cost: "1 pt",
    components: [{ type: "S", time: "3 Actions", succ: 2 }, { type: "V", time: "3 Actions", succ: 2 }],
    duration: "8 hours (no concentration)", range: "Touch (a threshold)",
    desc: "You weave a ward across a doorway, window, corridor, or any passage up to 5m wide. When a creature of your size or larger crosses the threshold, you are immediately alerted in one of two ways you choose at casting: a mental ping that wakes you even from deep sleep, or an audible chime heard within 30m. You may designate up to 8 creatures as exempt at casting. The ward is invisible and leaves no trace. Commonly used for camp security, protected rooms, and watch schedules.",
    upcast: "Every 2 pts: passage width +5m, exempt creature limit +8, or duration +8 hours."
  },
  {
    school: "aegistry", level: 1, name: "Lock Knot", cost: "2 pts",
    components: [{ type: "V", time: "Action", succ: 3 }],
    duration: "10 min", range: "Touch",
    desc: "You create a magical lock on an object that can be closed  door, window, chest. Any attempt to break, force open, or lockpick has successes needed +3 and DC +1.",
    upcast: "Every 2 pts: duration to 1 hour, or successes needed +2, or DC +1."
  },
  {
    school: "aegistry", level: 1, name: "Protection Circle", cost: "2 pts",
    components: [{ type: "S", time: "4 Actions", succ: 3 }, { type: "V", time: "4 Actions", succ: 3 }, { type: "M", time: "3 Actions", succ: 3 }],
    duration: "8 hours (no concentration)", range: "Self (3m radius circle you draw)",
    desc: "You inscribe a circle of protective strings on any surface during the ritual. Any creature designated as hostile by you when casting  you may specify creature types, specific individuals, or general alignments  cannot willingly enter the circle. They may attack into it from outside, but their bodies are repelled by the ward. The circle is fixed to the surface where it was drawn  if you move, you leave its protection. Useful for sleeping in dangerous places, holding rituals safely, or creating a brief sanctuary. The drawn circle is visible as faint geometric lines.",
    upcast: "Every 2 pts: radius +2m or duration +8 hours."
  },
  {
    school: "aegistry", level: 1, name: "Thread Ward", cost: "2 pts",
    components: [{ type: "S", time: "Half action", succ: 2 }],
    duration: "1 min (until triggered)", range: "Self or Touch",
    desc: "You weave a protective matrix of magical strings around yourself or a touched creature. The first time the warded creature would take damage from an attack, the ward absorbs the impact  reduce the incoming successes by 2. The spell then ends.",
    upcast: "Each additional spell point: ward reduces successes by 1 more."
  },
  {
    school: "aegistry", level: 2, name: "Glyph of Warding", cost: "4 pts",
    components: [{ type: "S", time: "5 Actions", succ: 5 }, { type: "V", time: "4 Actions", succ: 4 }, { type: "M", time: "4 Actions", succ: 4 }],
    duration: "Until triggered or 1 year", range: "Touch (a surface)",
    desc: "You inscribe an invisible glyph on a surface  a door, a floor, a page, a container. The glyph holds a single spell of level 3 or lower that you know and pay the point cost for now. Define a trigger: when the surface is touched, when a specific creature steps within 2m, when a specific word is spoken nearby. When triggered, the stored spell fires from the glyph's location as though cast by you with your threshold. The glyph is nearly invisible  Perception + Wits vs DC 8 to notice it. Magical sight reveals it immediately.",
    upcast: "Every 2 pts: the stored spell may be level 4 or lower, or the glyph holds 2 spells that both trigger simultaneously."
  },
  {
    school: "aegistry", level: 2, name: "Sanctum of Woven Strings", cost: "5 pts",
    components: [{ type: "S", time: "Action", succ: 5 }, { type: "V", time: "Action", succ: 4 }],
    duration: "Concentration, 1 min", range: "Self",
    desc: "You weave a defensive matrix in a stationary 5m radius dome around you. The dome shimmers visibly and provides cover. Any ranged attack passing through the dome to target a creature inside has its DC for successes increased by 2. Creatures move freely in and out.",
    upcast: "Every 2 pts: radius +5m."
  },
  {
    school: "aegistry", level: 3, name: "Consecrate Ground", cost: "5 pts",
    components: [{ type: "S", time: "6 Actions", succ: 5 }, { type: "V", time: "6 Actions", succ: 5 }, { type: "M", time: "5 Actions", succ: 4 }],
    duration: "1 year (or permanent with weekly renewal)", range: "Self, 20m radius",
    dmgType: "Radiant",
    desc: "A lengthy ritual of spiritual and Source-string alignment that designates the ground you stand on as holy. For the duration: undead entering the area must make Resolve + Focus vs DC 7 or be unable to approach you within 10m; Demons entering the area take 3d10 wound successes per round; any creature dying within the consecrated area cannot be animated as undead; Vitalics spells cast within the area cost 1 less spell point (minimum 1). The ritual must be performed uninterrupted and in silence. The ground shows subtle signs of consecration  plants grow more healthily, the air feels cleaner, and magical sight reveals golden threads woven through the earth.",
    upcast: "Every 3 pts: radius +10m or duration becomes permanent without renewal."
  },
  {
    school: "aegistry", level: 3, name: "Runic Barrier", cost: "5 pts",
    components: [{ type: "S", time: "Action", succ: 5 }, { type: "V", time: "Action", succ: 4 }, { type: "M", time: "Half action", succ: 3 }],
    duration: "Concentration, 1 min", range: "Self or Touch",
    desc: "A layered ward of protective strings actively deflects incoming force. The warded creature gains a defensive pool of 2 dice at the start of each of their turns. When they would take wounds, roll this pool and reduce incoming wounds by the number of successes. Pool refreshes each turn. Ward is visibly manifested as geometric light patterns.",
    upcast: "Every 2 pts: defensive pool +1 die."
  },
  {
    school: "aegistry", level: 3, name: "Spell Mantle", cost: "5 pts",
    components: [{ type: "S", time: "Action", succ: 4 }, { type: "V", time: "Action", succ: 5 }],
    duration: "Concentration, 10 min", range: "Self",
    desc: "A shimmering aegis unravels incoming spells on contact. Once per round, when a spell directly targets you, make a contested spellcasting roll against the caster. Win: spell absorbed, recover 3 spell points. Lose: spell hits normally. Does not function against area spells you happen to be within.",
    upcast: "Every 2 pts: contest one additional spell per round."
  },
  {
    school: "aegistry", level: 4, name: "Warding Nexus", cost: "7 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Concentration, 10 min", range: "20m anchor",
    desc: "A 15m radius protective field centred on a designated point. Allied creatures within: incoming spell attacks have their damage dice reduced by 3 before the target's defensive roll; cannot be teleported in or out against their will; hostile spellcasters inside make a threshold save (Resolve + Focus) or their spell fails. Move the anchor up to 5m per turn as a free action.",
    upcast: "Every 3 pts: radius +5m or spell success reduction +1."
  },
  {
    school: "aegistry", level: 5, name: "Bulwark of Asha", cost: "8 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 5 }],
    duration: "Concentration, up to 10 min", range: "20m",
    desc: "You erect an invisible barrier in any shape you choose of up to 20m perimeter. The barrier is impassable to: undead, Demons, the Blighted, and any creature currently under the effect of a mind-control or charm effect. These creatures may not cross by any means including teleportation. All spells cast by a creature outside the barrier against a creature inside it must overcome a contested roll against your threshold or fail entirely. All other creatures pass freely. Demons and undead that approach the barrier are visibly repelled.",
    upcast: "Every 3 pts: duration +10 min or perimeter +10m."
  },
  {
    school: "aegistry", level: 5, name: "Spellbreaker", cost: "9 pts",
    components: [{ type: "S", time: "Action", succ: 6 }, { type: "V", time: "Action", succ: 6 }],
    duration: "Instant", range: "30m",
    desc: "You unmake every active magical effect on a target simultaneously. All ongoing magical effects currently affecting that target  concentration spells, curses, enchantments, magical buffs, poisons, wards  are stripped away. For each effect below level 5 this is automatic. For effects of level 5 or higher you make a contested roll against the original caster's threshold. You may instead target a single specific magical effect  automatic against effects up to level 6, contested at level 7 and above. Effects removed by Spellbreaker cannot be reapplied for 1 round.",
    upcast: null
  },
  {
    school: "aegistry", level: 6, name: "Mirror Veil", cost: "10 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 6 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Concentration, up to 10 min", range: "Self",
    desc: "You weave a perfect reflective aegis that sends spells back to their origin. Any spell that directly targets you is automatically reflected back at the caster with all its original effects and power. The caster may make a threshold save (Resolve + Focus) to negate the reflection: on success the spell simply fails. You are unaffected by your own reflected spells. The veil has a charge limit of 5 reflections. Area spells you happen to be within are not reflected. The veil is visible to magical sight as a faint iridescence.",
    upcast: "Every 2 pts: +2 reflection charges."
  },
  {
    school: "aegistry", level: 6, name: "Wall of Force", cost: "10 pts",
    components: [{ type: "S", time: "Action", succ: 7 }, { type: "V", time: "Action", succ: 7 }, { type: "M", time: "Action", succ: 6 }],
    duration: "Concentration, 1 hour", range: "100m",
    desc: "You weave a plane of absolute defensive force  not a physical wall but a structural impossibility inserted into space. Up to 40m long and 10m tall, completely impenetrable to physical objects, magic, and force. Attacks, spells, and movement stop at its surface. The wall can be shaped freely. Creatures with Strength 6 or higher may spend a full round action to push a 1m breach (Strength + Athletics vs DC 10, 5 successes) that lasts until your next turn. You may move the wall up to 10m per round as an action  objects and creatures in its path are pushed (not damaged) until they reach an obstruction.",
    upcast: null
  },
  {
    school: "aegistry", level: 7, name: "Adamantine Shell", cost: "13 pts",
    components: [{ type: "S", time: "Action", succ: 8 }, { type: "V", time: "Action", succ: 7 }, { type: "M", time: "Action", succ: 7 }],
    duration: "Concentration, up to 10 min", range: "Self or Touch (willing creature)",
    desc: "The protected creature is encased in a shell of perfectly reinforced Source strings that soaks all incoming damage by 8 successes. Spells that would bypass soak must overcome this separately. Teleportation into or out of the shell by others is impossible. Mind-affecting spells that require line of effect cannot penetrate. The protected creature has +3 DC on all saves. While the shell is active the protected creature moves at half speed and cannot make reactions beyond soaking. The shell is visible as faint geometric lines of golden light. If the protected creature attacks or casts offensively, the soak drops to 4 until the start of their next turn.",
    upcast: "Every 2 pts: soak +1."
  },
  {
    school: "aegistry", level: 8, name: "The Unseen Wall", cost: "15 pts",
    components: [{ type: "S", time: "2 Actions", succ: 9 }, { type: "V", time: "2 Actions", succ: 9 }, { type: "M", time: "2 Actions", succ: 8 }],
    duration: "Permanent (until broken)", range: "500m radius",
    desc: "You construct an invisible dome of permanent protective warding across an entire location. The ward has the following permanent effects: no Demon, undead, or Blighted creature may willingly enter; no scrying or magical perception can penetrate the boundary from outside; all spells cast against creatures within by creatures outside roll with +2 DC; and once per day the ward absorbs one catastrophic attack dealing more than 15d10 damage entirely. The ward must be anchored to a physical object you place at the centre. If the anchor is destroyed the ward collapses. The ward can be perceived by those with magical sight as an immense dome of compressed golden string above the area.",
    upcast: null
  },
  {
    school: "aegistry", level: 9, name: "The Armour of Heaven", cost: "20 pts",
    components: [{ type: "S", time: "3 Actions", succ: 11 }, { type: "V", time: "3 Actions", succ: 11 }, { type: "M", time: "3 Actions", succ: 10 }],
    duration: "Until the caster dies or removes it", range: "Touch (willing creature)",
    dmgType: "Radiant",
    desc: "You weave the sum total of your defensive mastery into another living creature permanently. The protected creature gains: immunity to all damage from Demons, undead, and the Blighted; all incoming damage soaked by 5 permanently; they cannot be killed by any means while standing on consecrated or naturally holy ground; they automatically succeed on any save against magical effects three times per day; and any creature that deals a killing blow to them must make Resolve + Focus vs DC 10 needing 5 successes or be struck by a retributive surge for 18d10 wound successes and permanent deafness. The caster permanently loses the ability to cast Aegistry spells. It can never be undone.",
    upcast: null
  },
  {
    school: "chronophotometry", level: 1, name: "Echo Trace", cost: "1 pt",
    components: [{ type: "M", time: "Half action", succ: 4 }],
    duration: "5 min", range: "Touch (surface)",
    desc: "You touch an object or surface and sense residual echoes of recent events. You gain one brief sensory impression (sound, smell, strong emotion) related to the last significant event there within the past hour. The vision is symbolic  you might feel greed rather than see a specific person.",
    upcast: "Each additional spell point: attempt to gain deeper insight and more information."
  },
  {
    school: "chronophotometry", level: 1, name: "Glimpse Thread", cost: "2 pts",
    components: [{ type: "V", time: "Half action", succ: 3 }],
    duration: "Concentration, 1 min", range: "Visible ally",
    desc: "You peer into the immediate threads of potential futures for a creature you can see. Choose one ally. On their next turn, that ally can add 2 dice to any single attack roll or skill check they make.",
    upcast: "Every 2 pts: add one additional die to the pool."
  },
  {
    school: "chronophotometry", level: 1, name: "Read the Past", cost: "2 pts",
    components: [{ type: "V", time: "3 Actions", succ: 3 }, { type: "S", time: "3 Actions", succ: 3 }, { type: "M", time: "2 Actions", succ: 2 }],
    duration: "10 minutes", range: "Touch (object or location)",
    desc: "You open your perception to the collapsed history of an object or location. Unlike the quick impression of Echo Trace, this ritual gives you a sustained, clear vision  you can observe up to 24 hours of the object or location's past at your chosen moment in history. You watch events play out in real time, though you may fast-forward through uneventful periods. You cannot interact with the past you observe, only watch and listen. The vision is complete  you see the room as it was, hear the conversations, and observe the people present. The exact moment you can reach is limited by your knowledge: you must specify a rough timeframe.",
    upcast: "Every 2 pts: reach back an additional week, or the vision plays at up to 10x speed."
  },
  {
    school: "chronophotometry", level: 2, name: "Foresight (minor)", cost: "4 pts",
    components: [{ type: "V", time: "5 Actions", succ: 4 }, { type: "S", time: "4 Actions", succ: 4 }],
    duration: "8 hours (no concentration)", range: "Self",
    desc: "A ritual of probability weaving that grants passive precognitive awareness for the day ahead. For the duration: you cannot be surprised; you have advantage on any initiative roll; once during the duration you may ask the GM a single yes or no question about something that will happen within the next 8 hours, and receive an honest answer based on current probability; and once during the duration you may reroll any single roll you make and take the better result. The visions are brief flashes  impressions, not complete foreknowledge. This is not the overwhelming awareness of Thread Sight but a quiet, practical attunement.",
    upcast: null
  },
  {
    school: "chronophotometry", level: 2, name: "Precognitive Insight", cost: "3 pts",
    components: [{ type: "V", time: "Reaction (half action cost)", succ: 4 }],
    duration: "Instant", range: "20m",
    desc: "You grant an ally a flash of insight into an impending attack. When an ally you can see is targeted by an attack, use your reaction to allow them to immediately take the Dodge reaction without paying its usual action cost. They also add 3 dice to their dodge roll for this specific attack.",
    upcast: "Every 2 pts: ally adds one additional die to the dodge roll."
  },
  {
    school: "chronophotometry", level: 3, name: "Haste", cost: "5 pts",
    components: [{ type: "V", time: "Action", succ: 5 }, { type: "S", time: "Half action", succ: 4 }],
    duration: "Concentration, up to 3 rounds", range: "20m",
    desc: "You pull three seconds of future time forward and lend them to a willing creature. For the duration, the target gains one additional action on each of their turns. When the spell ends, the target immediately loses their next turn entirely as the debt is paid. The target is aware of this cost when the spell is offered.",
    upcast: "Every 3 pts: spell lasts one additional round and target loses one additional turn when it ends."
  },
  {
    school: "chronophotometry", level: 3, name: "Sending", cost: "3 pts",
    components: [{ type: "V", time: "4 Actions", succ: 4 }, { type: "M", time: "4 Actions", succ: 3 }],
    duration: "Instant (exchange)", range: "Any creature you know personally",
    desc: "You send a mental message of up to 25 words to a creature you personally know, regardless of distance or planar boundary. They receive it instantly as a voice in their mind that they recognise as yours. They may immediately send a reply of up to 25 words which you hear. The exchange takes no time on either end  a conversation of 25 words delivered instantly across continents. You do not need to know their location, only their person. If the target is unconscious, the message waits and they receive it when they wake. If the target is dead, you receive a brief impression of absence.",
    upcast: "Every 2 pts: message length doubles, or you may target a creature you know only by precise description (at DM's discretion)."
  },
  {
    school: "chronophotometry", level: 3, name: "Stutter", cost: "5 pts",
    components: [{ type: "V", time: "Action", succ: 5 }, { type: "S", time: "Half action", succ: 4 }],
    duration: "Instant", range: "15m",
    desc: "You fracture a creature's moment-to-moment perception of time. This is a threshold save (Resolve + Focus): on failure the target becomes Stuttered for 3 rounds: at the start of each of their turns they must spend their first half action repeating exactly what they did at the start of their previous turn. They are aware it is happening but cannot stop it. At the end of each turn they may repeat the threshold save to break free.",
    upcast: "Every 2 pts: break DC +1, or affect one additional target (each adds an action to Somatic)."
  },
  {
    school: "chronophotometry", level: 4, name: "Temporal Anchor", cost: "8 pts",
    components: [{ type: "V", time: "Action", succ: 6 }, { type: "S", time: "Action", succ: 6 }, { type: "M", time: "Action", succ: 5 }],
    duration: "Up to 10 min", range: "Self",
    desc: "You drive a spike of fixed time into the present moment. Mark your current position, wound state, spell point total, and status conditions. At any point within 10 minutes, spend your action to snap back  you return to the marked state. Everything else in the world remains: enemies do not reset, party resources do not reset. Only you. After snapping back, cannot cast this spell again until a long rest.",
    upcast: null
  },
  {
    school: "chronophotometry", level: 5, name: "Contingency", cost: "9 pts",
    components: [{ type: "V", time: "Action", succ: 6 }, { type: "S", time: "Action", succ: 5 }, { type: "M", time: "Half action", succ: 4 }],
    duration: "Until triggered or long rest", range: "Self",
    desc: "You read a probability thread in which you will need a specific spell and pre-cast it into a waiting future. Nominate a second spell of level 4 or lower that you know and pay its full spell point cost now. Then define a specific trigger condition in plain language such as: when I fall unconscious, when I am reduced to 1 shallow wound, or when a creature within 5m casts a spell against me. When the trigger condition is met, the prepared spell fires automatically at no action cost and no component requirement. Only one Contingency may be active at a time. If the trigger never occurs before your next long rest, the prepared spell's points are not refunded.",
    upcast: "Every 2 pts: the held spell may be level 5 or lower instead."
  },
  {
    school: "chronophotometry", level: 5, name: "Thread Sight", cost: "8 pts",
    components: [{ type: "V", time: "Action", succ: 6 }, { type: "S", time: "Action", succ: 5 }],
    duration: "Concentration, up to 1 hour", range: "Self",
    desc: "You open your perception to the uncollapsed threads of possible futures simultaneously. For the duration you see 3 rounds ahead as a constant peripheral vision of probability. You cannot be surprised. You always act in the first round of any encounter. When an attack is made against you, you know whether to dodge or block before the dice are rolled. Your dodge reactions add 4 dice. Once per round when you would be hit by an attack, you may announce you saw this and negate it entirely. This can be used a number of times equal to your Resolve score before the probability threads begin to collapse and the spell ends.",
    upcast: null
  },
  {
    school: "chronophotometry", level: 6, name: "The Norn's Cut", cost: "11 pts",
    components: [{ type: "V", time: "2 Actions", succ: 8 }, { type: "S", time: "Action", succ: 7 }],
    duration: "Instant", range: "60m",
    dmgType: "Psychic",
    desc: "You choose a creature you can see and sever their fate thread at a specific future point. Declare a trigger condition: when they next attack, at the start of their next turn, or the moment they cast a spell. When that moment arrives this is a threshold save (Resolve + Focus), needing 5 successes. On failure: the creature instantly loses all remaining actions for that turn, loses their next turn entirely, and takes 12d10 wound successes. On success they take 6d10 and lose only their next half action. This cannot be blocked or dodged.",
    upcast: null
  },
  {
    school: "chronophotometry", level: 6, name: "Time Stop", cost: "12 pts",
    components: [{ type: "V", time: "Action", succ: 8 }, { type: "S", time: "Action", succ: 7 }],
    duration: "1d4+1 rounds (private time)", range: "Self",
    desc: "You step outside the flow of time entirely. For the duration  1d4+1 rounds only you experience  everything around you is frozen absolutely. You may move, manipulate objects, cast spells, and prepare. You may not deal direct damage to frozen creatures or force them into harmful positions directly, but you may set up traps, move away, place objects, or prepare spells with extended casting times. Any spells you cast with instant harmful effects are delayed and fire at the start of the first normal round after time resumes. You cannot cast Time Stop again until a long rest.",
    upcast: null
  },
  {
    school: "chronophotometry", level: 7, name: "Age", cost: "13 pts",
    components: [{ type: "V", time: "Action", succ: 8 }, { type: "S", time: "Action", succ: 8 }],
    duration: "Instant", range: "40m",
    dmgType: "Necrotic",
    desc: "You collapse decades of future time onto a single target in an instant. This is a threshold save (Fortitude + Toughness), needing 5 successes. On failure: the target ages 40 years instantly: their physical stats each decrease by 2 permanently and their maximum wounds decrease by 1. Creatures that have a lifespan die if the ageing would carry them past their natural end. On success: they age 10 years, physical stats each decrease by 1. This ageing cannot be reversed by any spell below level 8. Against undead, Constructs, and creatures with no natural lifespan, Age instead deals 20d10 wound successes, and all their abilities degrade by 1 tier for the rest of the encounter.",
    upcast: null
  },
  {
    school: "chronophotometry", level: 8, name: "The Wheel Reversed", cost: "16 pts",
    components: [{ type: "V", time: "2 Actions", succ: 10 }, { type: "S", time: "2 Actions", succ: 10 }, { type: "M", time: "2 Actions", succ: 9 }],
    duration: "Permanent", range: "100m radius",
    desc: "You reverse local time by up to 1 hour within the affected area  not for the caster but for everything within it. Creatures return to where they were an hour ago with their wound states, spell points, and conditions as they were. Structures repair. The dead return if they died within the hour. Objects return to their prior location. Creatures within the radius retain their memories of both timelines. Cannot reverse effects of level 9 spells or permanent magical alterations made before the reversal window. Cannot reverse its own casting. Can only be cast once per week. Casting it causes you to experience all events within the reversed hour simultaneously  Resolve + Focus DC 9 or gain a mental wound.",
    upcast: null
  },
  {
    school: "chronophotometry", level: 9, name: "The Unmaking of Hours", cost: "20 pts",
    components: [{ type: "V", time: "3 Actions", succ: 11 }, { type: "S", time: "3 Actions", succ: 11 }, { type: "M", time: "3 Actions", succ: 11 }],
    duration: "Permanent", range: "Any point the caster has personally visited",
    desc: "You designate a single event that occurred at a location you have visited: a death, a battle, the signing of a treaty, the destruction of a city, a promise made. That event is unmade. It did not happen in any timeline. All effects flowing from that event unravel  the dead return, the destroyed is rebuilt, the oath was never sworn. People who witnessed the event forget it. The world reorganises itself around the new history with DM discretion on cascading consequences. The caster does not forget what they unmade  they carry the memory of the erased timeline alone and are the only person in the world who knows what happened. Cannot erase the casting of another level 9 spell. The caster ages 20 years.",
    upcast: null
  }
];
