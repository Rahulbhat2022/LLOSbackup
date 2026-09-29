// ══════════════════════════════════════════
// STATS
// ══════════════════════════════════════════
const STATS = [
  { name: "Strength",   abbr: "STR", desc: "Raw physical power: the ability to lift, break, and overpower. Used for melee attacks with heavy weapons, grappling, and feats of brute force." },
  { name: "Agility",    abbr: "AGI", desc: "Speed, balance, and flexibility. Governs actions that rely on nimbleness rather than serving as a catch-all for finesse. Used for dodging, acrobatics, and light weapon attacks." },
  { name: "Composure",  abbr: "CMP", desc: "Calm under pressure. Primarily used for ranged attacks: steady breathing and focus are crucial. Also combined with other abilities to reflect poise in tense situations." },
  { name: "Fortitude",  abbr: "FOR", desc: "Endurance, pain tolerance, and the will to push through exhaustion and injury. Determines your maximum shallow wounds and deep wounds." },
  { name: "Intellect",  abbr: "INT", desc: "Knowledge, reasoning, and problem-solving. Governs arcane understanding and the capacity to learn complex systems like magic." },
  { name: "Resolve",    abbr: "RES", desc: "Mental strength, conviction, and fortitude. Determines your mental wound capacity. Spellcasting ability for devotees. Used to resist mental effects." },
  { name: "Wits",       abbr: "WIT", desc: "Quick thinking and fast reactions. Used for Perception and Insight checks. Distinguishes intuition from mental strength." },
  { name: "Presence",   abbr: "PRE", desc: "Personal aura: the power to influence, command, or inspire others whether through natural charm or supernatural force." },
];

const SKILLS = [
  { stat: "Strength",   skills: ["Athletics", "Climbing", "Grappling"] },
  { stat: "Agility",    skills: ["Acrobatics", "Dodge", "Stealth", "Sleight of Hand"] },
  { stat: "Composure",  skills: ["Focus", "Toughness", "Stamina"] },
  { stat: "Intellect",  skills: ["Arcana", "History", "Investigation", "Medicine", "Nature"] },
  { stat: "Wits",       skills: ["Insight", "Perception", "Tracking", "Animal Handling"] },
  { stat: "Presence",   skills: ["Intimidation", "Deception", "Persuasion", "Performance"] },
  { stat: "Resolve",    skills: ["Faith", "Occult"] },
];

// ══════════════════════════════════════════
// ACTIONS
// ══════════════════════════════════════════
const ACTIONS = [
  {
    name: "Action",
    icon: "⬡",
    desc: "Your primary unit of activity. You can attack, use a feature, cast a spell, or take any significant action. Unlike D&D, you don't gain more attacks per action as you level; instead you gain more actions. Certain spells consume multiple actions. Proficient spellcasters can cast spells in 1 action that take others 2.",
    note: "An action can be converted into 2 half actions."
  },
  {
    name: "Half Action",
    icon: "◐",
    desc: "Replacement for the bonus action. Directly convertible from an action: something that costs a half action can be done twice with a full action. When a feature halves its action cost, it divides into half actions as well. Used for movement, quick spells, and many reactions.",
    note: "Two half actions equal one full action."
  },
  {
    name: "Reaction",
    icon: "↺",
    desc: "Taken on another creature's turn. Unlike D&D, reactions are not limited to once per turn: the feature using the reaction determines its cost, which is subtracted from your next turn's actions. Enables active participation between turns: dodging, blocking, protecting allies.",
    note: "Reaction cost reduces your next turn's available actions."
  },
  {
    name: "Free Action",
    icon: "◌",
    desc: "Costs nothing. Usually a one-off opportunity: a surprise attack on an unaware creature, or briefly communicating to an ally. The GM determines what qualifies.",
    note: "Cannot be stacked or repeated freely."
  },
  {
    name: "Interact",
    icon: "⊕",
    desc: "Draw a weapon, grab a shield, pick up an object. In this system you can also make a base skill check using an Interact: a Perception check of your surroundings, or a quick Deception feint against an enemy.",
    note: "One Interact per turn by default."
  },
  {
    name: "Movement",
    icon: "→",
    desc: "Moving costs a half action. You may take multiple movement half actions per turn.",
    note: null,
    sub: [
      { name: "Careful Movement", desc: "No penalties, but you only move up to half your movement speed." },
      { name: "Fast Movement", desc: "Move up to your full speed. +1 DC when blocking an attack, −1 DC when dodging. Casting spells while moving fast increases all spell DCs by 1. Does not stack if you take multiple movement half actions." },
    ]
  },
 {
  name: "Defensive Stance - ALL AP",
  icon: "◫",
  desc: `
    <ul>
      <li>
        Defensive stance consumes ALL available AP for the turn. 
        The player cannot spend AP on anything else during the whole turn 
        (both before and after assuming a defensive stance) unless they exert themselves.
      </li>
      <li>
        While in a defensive stance, opportunity attacks cost 0 AP until your next turn. 
        You can dodge as normal, and Block actions cost 0 AP.
      </li>
    </ul>
  `
},
  {
    name: "Riposte - 1 AP (reaction)",
    icon: "◫",
    desc: "Do not add defence value to the attackers DC, instead, after the attackers attack is complete and any injuries are dealt and you are still capable of attacking, perform a normal attack.",
    note: "Rock weapons cannot use riposte"
  },
  {
    name: "Dodge(0.5 AP)",
    icon: "◎",
    desc: "A reaction that must be taken for each individual creature attacking you. Roll dice equal to your Agility + Dodge points. Better wound reduction than blocking, but more resource-intensive: the cost is deducted from your next turn.",
    note: null
  },
  {
    name: "Help",
    icon: "❖",
    desc: "When taking the Help action, you add your skill modifier to each d10 rolled by your ally for their relevant check.",
    note: null
  },
   {
    name: "Brace- 0 Ap",
    icon: "❖",
    desc: "When taking the brace reaction you roll dice equal to your Fortitude. You reduce damage taken equal to the amount of successes. Your primary tool against physical and elemental spells: there is no automatic defensive roll anymore, brace or take the full total.",
    note:
     `
    <ul>
      <li>
        You may take this reaction an amount of times equal to the amount of points you have in Art of Brace.
      </li>
      <li>
        You cannot take this reaction if you have taken a dodge reaction on the same instance.
      </li>
      <li>
        You cannot take this reaction if you are unaware or restrained.
      </li>
    </ul>
    `
  },
  {
    name: "Strengthen Psyche- 0.5 Ap",
    icon: "❖",
    desc: "The mind's counterpart to Brace. Roll dice equal to your Resolve + Focus. You reduce mental wound successes taken equal to the amount of successes. Your primary tool against mental, psychic, and fear spells: physical toughness does nothing against an assault on the mind.",
    note:
     `
    <ul>
      <li>
        Costs a half action from your next turn.
      </li>
      <li>
        You cannot take this reaction if you have taken a dodge reaction on the same instance.
      </li>
      <li>
        You cannot take this reaction if you are unaware, restrained, or otherwise unable to focus your mind.
      </li>
    </ul>
    `
  },
  {
    name: "Block(0.5 AP)",
    icon: "◫",
    desc: "A reaction costing a half action. Using a shield or similar, you block incoming melee or ranged attacks from one creature. The shield type determines how much it raises the DC for the attacker's successes. Against spells or larger effects (anything feasibly blockable with a shield) you can take the block and brace, or block and Strengthen Psyche, reaction combined: add the amount of dice you have in shield on top of the brace or Strengthen Psyche roll.",
    note: "You cannot block while restrained and you must be able to see or otherwise perceive the attack"
  },
  


];


// ══════════════════════════════════════════
// ARTS
// ══════════════════════════════════════════
const ARTS_INTRO = "Unlike the normal skills on your character sheets, arts are more complex skills that many spend their life on perfecting. In this category you have skills such as tools, weapon arts and defensive arts. ";

const WEAPON_ARTS = [
  { name: "Art of Daggers",            desc: "Fast, concealable blades built for opportunistic strikes and off-hand work.",              weapons: ["Dagger", "Parrying Cloak / Dagger"] },
  { name: "Art of Swords",             desc: "Balanced, versatile blades that reward technique over raw force.",                          weapons: ["Rapier", "Longsword", "Greatsword"] },
  { name: "Art of Spears & Polearms",  desc: "Reach weapons that control distance and threaten before an enemy can close.",                weapons: ["Spear", "Glaive", "Halberd"] },
  { name: "Art of Hammers & Axes",     desc: "Heavy, momentum-driven weapons that trade finesse for devastating force.",                   weapons: ["Great Hammer", "Greataxe"] },
  { name: "Art of Bows",               desc: "Drawn ranged weapons favoring sustained accuracy over raw stopping power.",                  weapons: ["Shortbow", "Longbow", "Composite Bow", "War Bow"] },
  { name: "Art of Crossbows",          desc: "Mechanical ranged weapons: slower to reload, but consistent and often armor-piercing.",     weapons: ["Light Crossbow", "Heavy Crossbow", "Hand Crossbow"] },
  { name: "Art of Slings & Thrown",    desc: "Simple, inexpensive ranged options any adventurer can pick up and use effectively.",         weapons: ["Sling", "Dart"] },
];

const OTHER_ARTS = [
  { name: "Art of Dodge",              desc: "Dedicated training in evasive footwork, beyond raw Agility. Governs the effectiveness of the Dodge reaction (see Actions & Reactions): rolling to avoid incoming melee and ranged attacks entirely." },
  { name: "Art of Armor",              desc: "Practical mastery of moving, fighting, and enduring in armor: light, medium, or heavy. Depening on points in proficiency in art of armor you are capable of donning heavier and heavier armors.(see Armors to see which armors need how many points of profiency)." },
  { name: "Art of Shield",             desc: "The discipline of the shield-bearer. Governs the Block reaction and a shield's passive free block (see Weapons - Shield, and Actions - Block)." },
  { name: "Art of Spellcasting Focus", desc: "The discipline of channeling magic through a focus: wand, orb, tome, or other anchor. Governs how effectively a caster's focus amplifies, stabilizes, or infuses Source strings (see Ether Cores)." },
  { name: "Art of Tools",              desc: "Mastery of a specialized toolkit beyond a simple skill check: poisoner's tools, disguise kits, thieves' tools, and forgery kits are examples, not an exhaustive list. Each toolkit is its own art; mastering one grants no proficiency with the others." },
];

// ══════════════════════════════════════════
// WOUNDS
// ══════════════════════════════════════════
const WOUND_RULES = {
  physical: {
    intro: "When a creature takes physical wounds, divide the number of successes by 2: take that many deep wounds and any remainder as shallow wounds. An unconscious or paralyzed creature does not divide; they take deep wounds equal to the full successes.",
    shallow: "Surface-level injury: cuts, fractures, bruises. The first line of defence. Represents injuries an adventurer can power through without penalties. Maximum shallow wounds equals your Fortitude score. Accumulate too many and they convert to a deep wound.",
    deep: "Serious injury: stabs, gashes, anything leaving the adventurer in active lethal danger. When you gain a deep wound you have a number of turns equal to your Fortitude score to secure it. If time passes and the wound is not treated, you gain another deep wound. If all deep wound slots fill and time passes again, you die.",
    stabilize: "A deep wound may be 'stabilized': the drawback is temporarily suppressed. If you take another wound near the same location, make a Fortitude + Toughness roll needing successes equal to 2 + (your total deep wounds), at DC 6 + 1 per deep wound. On failure the drawback returns."
  },
  mental: {
    intro: "Mental wounds are governed by a creature's psyche, affected primarily by spells and magic. A creature has mental wound slots equal to their Resolve score. There are no surface mental wounds: each wound directly eats at the psyche. When all mental wound slots fill the creature becomes effectively brain-dead.",
    note: "Each lingering mental spell consumes one slot. Mental wounds are easier to recover from in combat than physical deep wounds."
  }
};

const DEEP_WOUND_TABLE = [
  { roll: 1,  type: "Arterial Hemorrhage", flavor: "Severed major artery, blood spurting.",      effect: "Bleeding heavily. Fortitude + Toughness (DC 8). Take another deep wound in rounds equal to successes. All actions +2 DC. Effect stacks on repeat." },
  { roll: 2,  type: "Massive Laceration",  flavor: "Deep gash across vital area.",               effect: "Bleeding heavily. Fortitude + Toughness (DC 7). Take another deep wound in rounds equal to successes. All actions +1 DC. Effect stacks on repeat." },
  { roll: 3,  type: "Internal Bleeding",   flavor: "Bleeding internally.",                       effect: "Fortitude + Toughness (DC 6). Take another deep wound in rounds equal to successes. −1 to all physical actions until treated. Effect stacks on repeat." },
  { roll: 4,  type: "Compound Fracture",   flavor: "Bone fracture.",                             effect: "Bleeding moderately. Fortitude + Toughness (DC 6) at end of each combat or gain 1 shallow wound. Limb unusable until treated." },
  { roll: 5,  type: "Deep Stab Wound",     flavor: "Weapon lodged deep in muscle or bone.",      effect: "Bleeding moderately. −1 DC to actions using affected body part. Moving more than half speed: Fortitude + Toughness (DC 6) or gain 1 shallow wound." },
  { roll: 6,  type: "Muscle Tear",         flavor: "Major muscle group severely damaged.",       effect: "Light bleeding. Affected limb +1 DC for all actions. Effect ends naturally after 5 rounds." },
  { roll: 7,  type: "Bone Crack",          flavor: "Hairline fracture in major bone.",           effect: "+1 DC when using affected limb for strenuous activity. No immediate bleeding concerns." },
  { roll: 8,  type: "Flesh Wound",         flavor: "Deep cut but missed vital areas.",           effect: "Very light bleeding. +1 DC to actions requiring full mobility." },
  { roll: 9,  type: "Grazing Strike",      flavor: "Weapon barely penetrated deeply.",           effect: "Surface bleeding only. +1 DC to one specific type of action (GM's choice based on location). No ongoing effects." },
  { roll: 10, type: "Lucky Strike",        flavor: "Armor deflected most damage.",               effect: "No bleeding. Counts as shallow wound. No mechanical penalties: pure luck saved you from worse." },
];

// ══════════════════════════════════════════
// COMBAT MISC
// ══════════════════════════════════════════
const COMBAT_RULES = [
  {
    name: "Flanking",
    desc: "When a creature has 2 or more enemies in direct melee, their DC for successes on d10 rolls against those enemies increases by +1 for every creature beyond the first (maximum DC 10). Enemies attacking the flanked creature have their success DC decreased by 1. The flanked target counts as Distracted."
  },
  {
    name: "Starting Resources",
    desc: "Each adventurer starts each turn with: 1 Action, 1 Half Action, Movement, and 1 Interact. Max wounds equal to Fortitude (half deep, half shallow). Mental wounds equal to Resolve. These improve via class levels, backgrounds, and race."
  },
  {
    name: "Cover",
    desc: "A target behind cover gains +1 DC to hit per level of cover (partial, full, etc.)."
  },
  {
    name: "Concentration",
    desc: "When a caster sustains a spell over multiple turns they are concentrating. If damaged while concentrating, they must make a check to maintain the spell or it collapses."
  },
];
const COMBAT_Actions = [
  {
    name: "Single normal attack(1 AP)",
    desc: "Make one attack against a target within range"
  },
  {
    name: "Heavy attack(1,5AP)",
    desc: "Ignore weapon block DC increase.If weapon defence DC is already ignored (e.g. Rock weapons), instead gain +2 weapon dice Scissor weapons cannot perform heavy attacks."
  },
  {
    name: "Precision attack(1,5AP)",
    desc: "Any enemy taking the dodge action against this attack has the dc increased by 1. Rock weapons cannot perform precision attacks"
  },
  {
    name: "Feint(1 AP)",
    desc: "When a caster sustains a spell over multiple turns they are concentrating. If damaged while concentrating, they must make a check to maintain the spell or it collapses."
  },
  {
    name: "Feint(1 AP)",
    desc: "NOTE! This counts as an attack, but does not actually attack the target. Make an attack roll. The next attack against the target of the feint gains dice equal to half the number of successes of the feint"
  },
  {
    name: "Slight attack(0.5 AP)",
    desc:"Slight attacks are quicker attacks allowing a creature to make an attack with half as many dice on the to hit." 
  },
  { name: "Opportunity Attack(0.5 AP)",
    desc: `
    Triggers: Perform a Slight attack when an opponent does one of the following within your melee attack range:
      <ul>
        <li> Voluntarily leaves your melee attack range without taking careful movement</li>
        <li> Attempts a ranged attack </li>
        <li> Casts magic </li>
      </ul>
    `
  },
];

// ══════════════════════════════════════════
// COMBAT GUIDE
// ══════════════════════════════════════════
const COMBAT_GUIDE = {
  intro: "Every attack in combat, sword or spell, follows the same shape: the attacker rolls to see how hard it lands, then builds a pool of wound successes. Nobody gets a free defensive roll, weapon or spell. Reacting is the only way to cut a hit down, and doing nothing means taking the full total.",
  weaponPath: [
    { step: "To-Hit Roll", desc: "Roll dice equal to the attribute tied to your weapon (Strength, Agility, Composure, or a Str/Agi hybrid) plus your points in that weapon's Art. Each die that meets the DC is a success." },
    { step: "Defender Reacts (No Free Roll)", desc: "Weapon attacks get no automatic defensive roll: reacting is the only way to reduce one. Dodge rolls Agility + Dodge dice on its own; Block raises the attacker's DC by the shield's block value. This is to reduce the chance of getting hit in the first place, this reduces the amount of to hit dice, thus resulting the attack to miss or have less successes for the next step. If after the dodge or block there still are successes to hit, the attack hits." },
    { step: "Damage Roll", desc: "Build a new pool: one die for every success on the to-hit roll, after removing successes from the previous step, also adding the amount of weapon dice. Bonus dice from class features, enchantments, or effects such as smite get added here too. " },
    { step: "Optional brace and additional soaks", desc: "At this point you have to try to soak/tank the hit. You can take the brace reaction, where you roll just your fortitude and remove successes. Note you cannot take this reaction if you have taken the dodge action. From here also remove any remaining successes from any resistances you have. Finally collect the amount of remaining successes. For every 2 successes you take a deep wound and a shallow for the remaining success. "}

  ],
  spellPath: [
    { step: "Cast the Spell", desc: "Succeed on the spell's Somatic, Verbal, and Material component checks to lock it in (see Spell Mechanics). Once cast, a damage spell auto-hits: there is no roll to see whether it lands." },
    { step: "Damage Roll", desc: "Roll the dice pool listed in the spell's own description, plus any bonus dice from effects. Each success is one wound success sent at the target. Pass-fail effects like paralysis or charm don't work this way, see The Threshold in Spell Mechanics." },
    { step: "Defender Reacts (No Free Roll)", desc: "Spells get no automatic defensive roll either: reacting is the only way to reduce one. Brace rolls Fortitude alone against physical and elemental spells, free but the weakest option; Strengthen Psyche rolls Resolve + Focus against mental, psychic, and fear spells, physical toughness does nothing against those; Dodge rolls Agility + Dodge against spells with a positional or projectile component; Block adds the shield's block value as bonus successes and can combine with Brace or Strengthen Psyche. Dodge cannot combine with either. Doing nothing means taking the full wound successes." }
  ],
  resolution: [
    { name: "Remaining Successes = Wounds Taken", desc: "Whatever's left after all reduction is what actually lands on the target." },
    { name: "Apply Wound Rules", desc: "Divide the remaining successes by 2: that many deep wounds, and any remainder as shallow wounds. See Wounds for the full breakdown." }
  ],
  reactions: [
    { name: "Dodge", cost: "0.5 AP", desc: "The best wound reduction, but the most expensive: the cost comes out of your next turn. Rolled separately per attacker. Cannot be combined with Brace or Strengthen Psyche." },
    { name: "Block", cost: "0.5 AP", desc: "Needs a shield or similar. Against weapons it raises the attacker's DC instead of rolling your own dice; against spells it adds your block value as bonus successes on top of a Brace or Strengthen Psyche roll. Pairs well with either, since it acts at a different point, but neither requires the other." },
    { name: "Brace", cost: "0 AP", desc: "Free, but limited: usable a number of times per encounter equal to your points in Art of Brace. Rolls Fortitude alone, your default against physical and elemental threats, weapon or spell. Cheaper than the other reactions and weaker for it: tanking a hit is riskier than dodging or blocking it. Combines well with Block. Cannot be taken on the same hit as Dodge." },
    { name: "Strengthen Psyche", cost: "0.5 AP", desc: "The mind's counterpart to Brace. Rolls Resolve + Focus against mental, psychic, and fear spells, where physical toughness does nothing. Combines well with Block. Cannot be taken on the same hit as Dodge." }
  ],
  note: "Wound capacity is small in this system. Nobody gets anything for free, weapon or spell: if you don't react, the full total lands. Controlling how much actually connects matters more than out-damaging your opponent."
};

// ══════════════════════════════════════════
// WEAPONS - MELEE
// ══════════════════════════════════════════
const MELEE_WEAPONS = [
  { name: "Dagger",                       ability: "Agility",      dice: 1, block: 1, range: "Short", feature: "Thrown (10/30m). Hidden. DC for success −1 to hit." },
  { name: "Spear",                        ability: "Str or Agi",   dice: 1, block: 1, range: "Long",  feature: "Thrown (10/30m)." },
  { name: "Greatsword",                   ability: "Strength",     dice: 3, block: 1, range: "Short", feature: "DC for success when attacking +2 to hit." },
  { name: "Great Hammer",                 ability: "Strength",     dice: 3, block: 0, range: "Short", feature: "DC for success when attacking +2 to hit." },
  { name: "Greataxe",                     ability: "Strength",     dice: 3, block: 0, range: "Short", feature: "DC for success when attacking +2 to hit." },
  { name: "Glaive",                       ability: "Str or Agi",   dice: 2, block: 0, range: "Long",  feature: "-" },
  { name: "Rapier",                       ability: "Agility",      dice: 1, block: 1, range: "Long",  feature: "DC for success −1 to hit." },
  { name: "Longsword",                    ability: "Str or Agi",   dice: 2, block: 2, range: "-",     feature: "-" },
  { name: "Halberd",                      ability: "Strength",     dice: 1, block: 2, range: "Long",  feature: "-" },
  { name: "Shield",                       ability: "-",            dice: 0, block: 2, range: "-",     feature: "Free block action once per round. Can block ranged weapons." },
  { name: "Parrying Cloak / Dagger",      ability: "-",            dice: 0, block: 2, range: "-",     feature: "When blocking, next attack against that creature has DC −1." },
];

const RANGED_WEAPONS = [
  { name: "Shortbow",      ability: "Composure", dice: 1, prereq: "-",    range: "Close 30 / Med 60",           feature: "Quick Aim: enemy Dodge DC +1 against this weapon." },
  { name: "Longbow",       ability: "Composure", dice: 2, prereq: "Str 4", range: "Med 60 / Long 120 / Ext 180", feature: "Penetrating: ignores 1 point of armor." },
  { name: "Composite Bow", ability: "Composure", dice: 2, prereq: "Str 3", range: "Med 50 / Long 100 / Ext 150", feature: "-" },
  { name: "Light Crossbow",ability: "Composure", dice: 2, prereq: "-",    range: "Med 60 / Long 120",           feature: "Precise: DC for success −1." },
  { name: "Heavy Crossbow",ability: "Composure", dice: 3, prereq: "Str 3", range: "Long 80 / Ext 160",          feature: "Reload: half action after each shot. Ignores 1 soak from armor." },
  { name: "Hand Crossbow", ability: "Composure", dice: 1, prereq: "-",    range: "Close 20 / Med 40",           feature: "Concealable. One-handed." },
  { name: "Sling",         ability: "Strength",  dice: 1, prereq: "-",    range: "Close 30 / Med 60",           feature: "Cheap ammunition. Silent." },
  { name: "Dart",          ability: "Composure", dice: 0, prereq: "-",    range: "Close 15 / Med 30",           feature: "Light. Concealable. DC for success −1." },
  { name: "War Bow",       ability: "Composure", dice: 3, prereq: "Str 5", range: "Long 100 / Ext 200",         feature: "Armor Piercing: ignores 2 points of armor." },
];

const RANGE_RULES = [
  { range: "Melee vs Short Range target", penalty: "+2 DC (negated by shield)" },
  { range: "Close Range",   penalty: "No penalty" },
  { range: "Medium Range",  penalty: "+1 DC to hit" },
  { range: "Long Range",    penalty: "+2 DC to hit" },
  { range: "Extreme Range", penalty: "+3 DC to hit (select weapons only)" },
];

// ══════════════════════════════════════════
// WEAPON MATERIALS
// ══════════════════════════════════════════
const WEAPON_MATERIALS = [
  {
    name: "Iron / Steel",
    effective: "Mortals, Beasts",
    effect: "Standard damage. No penalties against natural armor.",
    reason: "Iron is the foundation of mortal civilization. Natural creatures and mortals have no inherent magical resistance; they rely on flesh, bone, and natural toughness."
  },
  {
    name: "Silver",
    effective: "Cursed Ones, Vampires, Specters",
    effect: "+1 damage die. Reduces regeneration. Can strike incorporeal beings.",
    reason: "Silver's purity burns through the twisted magical bonds holding lycanthropes together, prevents vampiric regeneration, and acts as a conductor allowing physical weapons to interact with incorporeal forms."
  },
  {
    name: "Sanctified Steel",
    effective: "Demons, Blighted",
    effect: "+2 damage against Demons. +1 against Blighted. Prevents disease transmission.",
    reason: "Iron blessed through divine ritual carries sacred resonance that disrupts infernal essence. The sanctification aligns the metal's structure with divine frequencies: burning demonic flesh like acid, counteracting voidglass corruption in the Blighted."
  },
  {
    name: "Red Meteorite",
    effective: "Draconids, Aberrants",
    effect: "Against Draconids: ignores natural armor. Against Aberrants: +2 damage, immunity to madness effects while wielding.",
    reason: "Space-born metal forged in stellar furnaces and exposed to cosmic Source radiation. Draconids, ancient beings who predate current magical laws, are vulnerable to 'primordial metal.' Aberrants, as reality-warping entities, are destabilized by matter that has experienced the void between worlds."
  },
  {
    name: "Boron-Lattice",
    effective: "Elementals, Constructs",
    effect: "+2 damage. Elementals lose special abilities for 1 round when hit. Constructs lose special abilities permanently on critical hits.",
    reason: "Boron's molecular structure naturally absorbs and disrupts magical energy. Elementals, pure concentrations of Source-manipulated matter, find their cohesion disrupted. Constructs, animated purely by woven Source strings, suffer system failures when their controlling magic is absorbed."
  },
];

const MATERIAL_GAPS = "Insectoids, Chimeras, and Shamblers have no material advantage. They require oils, tactics, or specialized techniques: maintaining the importance of the oil system.";

const ARMORS = [
  { name: "Padded Gambeson",              Category: "light",       Slashing: 1, Bludgeoning: 1, Piercing: 0, Features: "Alacrity, Art of armor prof 1" },
  { name: "Studded Leather",              Category: "light",       Slashing: 1, Bludgeoning: 0, Piercing: 1, Features: "Alacrity, Art of armor prof 1" },
  { name: "Linothorax",                   Category: "light",       Slashing: 0, Bludgeoning: 1, Piercing: 1, Features: "Alacrity, Art of armor prof 1" },
  { name: "Chain Hauberk + Gambeson",     Category: "medium",      Slashing: 2, Bludgeoning: 0, Piercing: 1, Features: "Loud(1), Art of armor prof 2" },
  { name: "Scale/Lamellar",               Category: "medium",      Slashing: 1, Bludgeoning: 1, Piercing: 2, Features: "Loud(1), Art of armor prof 2" },
  { name: "Breastplate+Mail",             Category: "medium",      Slashing: 2, Bludgeoning: 1, Piercing: 1, Features: "Loud(2), Art of armor prof 2" },
  { name: "Three Quarters Plate",         Category: "Heavy",       Slashing: 2, Bludgeoning: 2, Piercing: 1, Features: "Encumbersum,Loud(2), Art of armor prof 3" },
  { name: "Full plate",                   Category: "Heavy",       Slashing: 2, Bludgeoning: 1, Piercing: 2, Features: "Encumbersum,Loud(2), Art of armor prof 3" },
  { name: "Field plate + Mail",           Category: "Heavy",       Slashing: 3, Bludgeoning: 2, Piercing: 2, Features: "Encumbersum,Loud(3), min str 5, Art of armor prof 4" },


];


// ══════════════════════════════════════════
// CREATURE TYPES
// ══════════════════════════════════════════
const CREATURE_TYPES = [
  { name: "Beasts",      icon: "🐺", desc: "Wolves, bears, natural predators, and animals. No supernatural origin: purely flesh and instinct.", material: "Iron", oil: "Beast Oil" },
  { name: "Mortals",     icon: "⚔", desc: "Humans, elves, dwarves, and other bipedal civilized races. No standard oils apply: require poisons or specialized alchemical preparations.", material: "Iron", oil: "Poisons only" },
  { name: "Draconids",   icon: "🐉", desc: "Dragons, wyverns, drakes, and serpentine monsters. Ancient beings who predate current magical laws.", material: "Red Meteorite", oil: "Draconid Oil" },
  { name: "Insectoids",  icon: "🕷", desc: "Giant spiders, giant insects, swarm creatures, especially those with exoskeletons.", material: "None", oil: "Insectoid Oil" },
  { name: "Cursed Ones", icon: "🐺", desc: "Lycanthropes, skinwalkers, and other shape-shifting afflicted. Bound by curse magic that silver can unravel.", material: "Silver", oil: "Cursed Oil" },
  { name: "Blighted",    icon: "☣", desc: "Plague-bearers, diseased creatures, mortals infested by voidglass corruption. Require Purification Oils (Shambler recipe with Cursed Salt).", material: "Sanctified Steel", oil: "Purification Oil" },
  { name: "Vampires",    icon: "🩸", desc: "Bloodthirst-cursed nobles, feral bloodlings, and life-draining parasites.", material: "Silver", oil: "Special" },
  { name: "Specters",    icon: "👻", desc: "Wraiths, phantoms, and ghostly apparitions. Incorporeal: standard weapons cannot harm them without silver or oils.", material: "Silver", oil: "Specter Oil" },
  { name: "Demons",      icon: "🔥", desc: "Infernal creatures, hellspawn, and beings from burning dimensions.", material: "Sanctified Steel", oil: "Demon Oil" },
  { name: "Elementals",  icon: "🌊", desc: "Beings of fire, water, earth, and air given form by Source energy.", material: "Boron-Lattice", oil: "Elemental Oil" },
  { name: "Constructs",  icon: "⚙", desc: "Golems, animated armor, and magical automatons powered by Source strings.", material: "Boron-Lattice", oil: "Construct Oil" },
  { name: "Chimeras",    icon: "🧬", desc: "Unnatural fusions created by twisted Source manipulation and alchemical experiments.", material: "None", oil: "Chimera Oil" },
  { name: "Aberrants",   icon: "👁", desc: "Void-touched horrors, reality-benders, and entities warped by Source corruption.", material: "Red Meteorite", oil: "Aberrant Oil" },
  { name: "Shamblers",   icon: "🍄", desc: "Fungal colonies, moss-walkers, and ambulatory plant networks.", material: "None", oil: "Shambler Oil" },
];

// ══════════════════════════════════════════
// OILS
// ══════════════════════════════════════════
const OIL_COMPONENTS = {
  bases: ["Beast Essence - concentrated animal pheromones and musk", "Cursed Salt - blessed salt infused with protective wards", "Wraith Dust - ethereal residue from spectral encounters", "Dragon Marrow - rare extract from draconid bone"],
  stabilizers: ["Refined Oil - weapon coating base", "Distilled Spirits - alcohol preservative", "Crushed Meteorite - meteoric iron powder"],
  enhancers: ["Silver Dust - purified silver shavings", "Grave Moss - herbs that grow in cursed ground", "Void Crystal - crystallized magical energy"],
};

const OIL_TABLES = [
  { creature: "Beast",     oils: [
    { tier: 1, name: "Basic Beast Oil",    components: "Beast Essence + Refined Oil",                              effect: "+1 damage vs Beasts",                  duration: "3 attacks", dc: "6 (3 succ)" },
    { tier: 2, name: "Enhanced Beast Oil", components: "Beast Essence + Refined Oil + Silver Dust",                effect: "+2 damage vs Beasts",                  duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Beast Oil", components: "Beast Essence + Refined Oil + Silver Dust + Void Crystal", effect: "+3 damage vs Beasts",                  duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
  { creature: "Insectoid", oils: [
    { tier: 1, name: "Basic Insectoid Oil",    components: "Beast Essence + Crushed Meteorite",                                    effect: "+1 damage vs Insectoids",                        duration: "3 attacks", dc: "6 (3 succ)" },
    { tier: 2, name: "Enhanced Insectoid Oil", components: "Beast Essence + Crushed Meteorite + Distilled Spirits",                effect: "+2 damage vs Insectoids",                        duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Insectoid Oil", components: "Beast Essence + Crushed Meteorite + Distilled Spirits + Grave Moss",   effect: "+3 damage vs Insectoids, immunity to insect poison", duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
  { creature: "Draconid",  oils: [
    { tier: 1, name: "Draconid Oil",          components: "Dragon Marrow + Refined Oil",                              effect: "+1 damage vs Draconids, resistance to breath weapons",                   duration: "3 attacks", dc: "6 (3 succ)" },
    { tier: 2, name: "Enhanced Draconid Oil", components: "Dragon Marrow + Refined Oil + Silver Dust",                effect: "+2 damage vs Draconids, resistance to breath weapons",                   duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Draconid Oil", components: "Dragon Marrow + Refined Oil + Silver Dust + Void Crystal", effect: "+3 damage vs Draconids, immunity to fear, resistance to breath weapons", duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
  { creature: "Specter",   oils: [
    { tier: 1, name: "Basic Specter Oil",    components: "Wraith Dust + Cursed Salt",                       effect: "+1 success vs Specters, can hit incorporeal",                             duration: "3 attacks", dc: "6 (3 succ)" },
    { tier: 2, name: "Enhanced Specter Oil", components: "Wraith Dust + Cursed Salt + Silver Dust",        effect: "+1 dmg, +1 success vs Specters, can hit incorporeal",                     duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Specter Oil", components: "Wraith Dust + Cursed Salt + Silver Dust + Grave Moss", effect: "+2 dmg, +2 success vs Specters, incorporeal, immunity to life drain", duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
  { creature: "Cursed One", oils: [
    { tier: 1, name: "Basic Cursed Oil",    components: "Cursed Salt + Silver Dust",                       effect: "+1 damage vs Cursed Ones",                                                   duration: "3 attacks", dc: "6 (3 succ)" },
    { tier: 2, name: "Enhanced Cursed Oil", components: "Cursed Salt + Silver Dust + Grave Moss",          effect: "+2 damage, prevents shape-change for 1 turn after hit",                      duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Cursed Oil", components: "Cursed Salt + Silver Dust + Grave Moss + Void Crystal", effect: "+3 damage, prevents shape-change 2 turns, immunity to lycanthropic curse", duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
  { creature: "Demon",     oils: [
    { tier: 2, name: "Enhanced Demon Oil", components: "Cursed Salt + Wraith Dust + Silver Dust",                effect: "+2 damage vs Demons, immunity to fear",                   duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Demon Oil", components: "Cursed Salt + Wraith Dust + Silver Dust + Void Crystal", effect: "+3 damage vs Demons, immunity to fear and charm effects", duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
  { creature: "Elemental", oils: [
    { tier: 1, name: "Basic Elemental Oil",    components: "Dragon Marrow + Crushed Meteorite",                                    effect: "+1 damage vs Elementals",                                             duration: "3 attacks", dc: "6 (3 succ)" },
    { tier: 2, name: "Enhanced Elemental Oil", components: "Dragon Marrow + Crushed Meteorite + Distilled Spirits",                effect: "+2 damage vs Elementals, resistance to elemental damage",             duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Elemental Oil", components: "Dragon Marrow + Crushed Meteorite + Distilled Spirits + Void Crystal", effect: "+3 damage vs Elementals, immunity to one elemental type per application", duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
  { creature: "Construct", oils: [
    { tier: 1, name: "Basic Construct Oil",    components: "Crushed Meteorite + Refined Oil",                      effect: "+1 damage vs Constructs",                             duration: "3 attacks", dc: "6 (3 succ)" },
    { tier: 2, name: "Enhanced Construct Oil", components: "Crushed Meteorite + Refined Oil + Dragon Marrow",      effect: "+1 success, +1 damage vs Constructs",                 duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Construct Oil", components: "Crushed Meteorite + Refined Oil + Dragon Marrow + Void Crystal", effect: "+2 success, +2 damage vs Constructs, ignores armor", duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
  { creature: "Chimera",   oils: [
    { tier: 1, name: "Basic Chimera Oil",    components: "Beast Essence + Wraith Dust",                       effect: "+1 damage vs Chimeras",                       duration: "3 attacks", dc: "6 (3 succ)" },
    { tier: 2, name: "Enhanced Chimera Oil", components: "Beast Essence + Wraith Dust + Silver Dust",         effect: "+2 damage vs Chimeras, +1 success on attacks", duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Chimera Oil", components: "Beast Essence + Wraith Dust + Silver Dust + Grave Moss", effect: "+3 damage vs Chimeras, +2 success on attacks", duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
  { creature: "Aberrant",  oils: [
    { tier: 2, name: "Enhanced Aberrant Oil", components: "Wraith Dust + Void Crystal + Crushed Meteorite",               effect: "+2 damage vs Aberrants, immunity to madness effects",          duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Aberrant Oil", components: "Wraith Dust + Void Crystal + Crushed Meteorite + Silver Dust", effect: "+3 damage vs Aberrants, immunity to madness and mind control", duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
  { creature: "Shambler",  oils: [
    { tier: 1, name: "Basic Shambler Oil",    components: "Grave Moss + Refined Oil",                               effect: "+1 damage vs Shamblers",                               duration: "3 attacks", dc: "6 (3 succ)" },
    { tier: 2, name: "Enhanced Shambler Oil", components: "Grave Moss + Refined Oil + Crushed Meteorite",           effect: "+2 damage vs Shamblers, immunity to spores",           duration: "4 attacks", dc: "7 (4 succ)" },
    { tier: 3, name: "Superior Shambler Oil", components: "Grave Moss + Refined Oil + Crushed Meteorite + Silver Dust", effect: "+3 damage vs Shamblers, immunity to spores and entanglement", duration: "5 attacks", dc: "8 (5 succ)" },
  ]},
];

const OIL_CRAFT_RULES = [
  { tier: 1, time: "30 minutes" },
  { tier: 2, time: "1 hour" },
  { tier: 3, time: "2 hours" },
];

const OIL_SKILL_BONUSES = [
  { skill: "Minor Poison Handling", bonus: "DC −1 for Tier 1 oils" },
  { skill: "Poison Handling",       bonus: "DC −1 for Tier 1–2 oils, can apply as half action" },
  { skill: "Poison Expertise",      bonus: "+1 success when crafting any oil" },
  { skill: "Venom Mastery",         bonus: "Oils last 1 additional application on weapons" },
];

// ══════════════════════════════════════════
// POISONS
// ══════════════════════════════════════════
const POISON_TABLES = [
  { tier: 1, poisons: [
    { name: "Basic Blade Poison", components: "Nightshade Extract + Distilled Alcohol",   effect: "1 poison damage/turn for 2 turns",                        duration: "2 turns", dc: "6 (3 succ)" },
    { name: "Numbing Toxin",      components: "Spider Venom Sac + Crystallized Salt",      effect: "Target loses 1 success on next attack roll",              duration: "1 turn",  dc: "6 (3 succ)" },
  ]},
  { tier: 2, poisons: [
    { name: "Viper's Kiss",   components: "Spider Venom Sac + Nightshade Extract + Distilled Alcohol", effect: "2 poison damage/turn for 3 turns",                            duration: "3 turns", dc: "7 (3 succ)" },
    { name: "Confusion Mist", components: "Fungal Spores + Rare Herbs + Crystallized Salt",             effect: "Intelligence vs DC 13 or lose their action",                  duration: "2 turns", dc: "7 (3 succ)" },
  ]},
  { tier: 3, poisons: [
    { name: "Assassin's Bane", components: "Nightshade Extract + Spider Venom Sac + Concentrated Acids + Powdered Bone", effect: "3 poison dmg/turn, −2 to all rolls",                  duration: "4 turns", dc: "8 (5 succ)" },
    { name: "Paralytic Serum", components: "Spider Venom Sac + Rare Herbs + Crystallized Salt + Powdered Bone",          effect: "Paralyzed 1 turn, then −1 movement for 2 turns",      duration: "3 turns", dc: "8 (5 succ)" },
  ]},
  { tier: 4, poisons: [
    { name: "Death's Whisper", components: "All 4 Primary Bases + All 3 Enhancers",                                                     effect: "4 poison dmg/turn, −3 to all rolls, cannot take reactions", duration: "6 turns", dc: "10 (7 succ)" },
    { name: "Mind Shatter",    components: "Fungal Spores + Spider Venom Sac + Rare Herbs + Powdered Bone + Dragon's Blood (Special)", effect: "GM controls target 2 turns, then −2 to all rolls for 3 turns", duration: "5 turns", dc: "10 (10 succ)" },
  ]},
];

const POISON_COMPONENTS = [
  { name: "Nightshade Extract",  cost: "5 gp",   rarity: "Common" },
  { name: "Spider Venom Sac",    cost: "15 gp",  rarity: "Uncommon" },
  { name: "Fungal Spores",       cost: "8 gp",   rarity: "Common" },
  { name: "Mineral Toxins",      cost: "20 gp",  rarity: "Uncommon" },
  { name: "Distilled Alcohol",   cost: "3 gp",   rarity: "Common" },
  { name: "Crystallized Salt",   cost: "10 gp",  rarity: "Common" },
  { name: "Refined Oil",         cost: "12 gp",  rarity: "Common" },
  { name: "Concentrated Acids",  cost: "25 gp",  rarity: "Rare" },
  { name: "Rare Herbs",          cost: "30 gp",  rarity: "Rare" },
  { name: "Powdered Bone",       cost: "40 gp",  rarity: "Rare" },
  { name: "Dragon's Blood",      cost: "200 gp", rarity: "Legendary" },
];

const POISON_CRAFT_RULES = [
  { tier: 1, time: "1 hour" },
  { tier: 2, time: "2 hours" },
  { tier: 3, time: "4 hours" },
  { tier: 4, time: "8 hours" },
];

const POISON_SKILL_BONUSES = [
  { skill: "Minor Poison Handling", bonus: "DC −1 for Tier 1 poisons" },
  { skill: "Poison Handling",       bonus: "DC −1 for Tier 1–2 poisons, can apply as half action" },
  { skill: "Poison Expertise",      bonus: "+1 success when crafting any poison" },
  { skill: "Venom Mastery",         bonus: "Poisons last 1 additional application on weapons" },
];

// ══════════════════════════════════════════
// MAGIC THEORY
// ══════════════════════════════════════════
const MAGIC_THEORY = [
  {
    name: "The Source",
    desc: "Magic originates from the Source: a second sun, a celestial anomaly that emits quantum particles of light stretched into strings. These filaments behave like photons but are elongated and entangled, forming a web of potential energy that permeates the world. Only those with magical sight can perceive them: glowing threads woven through reality."
  },
  {
    name: "Wave-Particle Duality",
    desc: "Like photons, Source strings exhibit both wave-like and particle-like behavior. This allows them to be physically plucked (Somatic component) or tuned by frequency (Vocal component)."
  },
  {
    name: "Superposition",
    desc: "A single string can exist in multiple states until observed or manipulated. Chronophotometry studies the possibilities of which state particles will enter when they collapse under observation."
  },
  {
    name: "Entanglement",
    desc: "Strings can be linked across space and time: manipulating one affects another. This enables teleportation, remote sensing, and simultaneous casting across distances."
  },
  {
    name: "Vocal Component - Resonance",
    desc: "Producing specific frequencies with the voice to resonate with the strings. Each school has a unique harmonic signature. Matching the frequency activates latent energy. Akin to tuning an instrument: precision required to avoid destabilizing the string."
  },
  {
    name: "Somatic Component - Weaving",
    desc: "Physical manipulation of the strings. Gestures pluck and weave filaments into constellations: geometric patterns that define a spell's structure. Not symbolic but functional: you literally draw and pull on the Source strings."
  },
  {
    name: "Material Component - Anchoring",
    desc: "Physical objects chosen for resonant compatibility with a spell's frequency. Materials act as conductors or dampeners, shaping and containing the energy. Rituals rely heavily on this component."
  },
  {
    name: "Learning Spells",
    desc: "To learn a spell you must have the adequate skill tree point for that spell level and class. When you find a scroll or inscription, make an Arcana check (DC: 6 + spell level). You need successes equal to the spell level squared. Each attempt takes 1 hour."
  },
  {
    name: "Spell Points",
    desc: "Spellcasters have twice their spellcasting level in spell points. Spell cost is listed on each spell. You may upcast by expending more points for improved effects."
  },
];

// ══════════════════════════════════════════
// SPELLCASTING MECHANICS
// ══════════════════════════════════════════
const SPELL_MECHANICS = [
  {
    name: "How spells interact with targets",
    desc: "Spells use two distinct models depending on their nature. Damage spells auto-hit: no attack roll is made, the spell simply lands. Pass-fail spells (paralysis, charm, petrification, instant effects, movement control) use a threshold save where the target must accumulate enough successes to resist entirely."
  },
  {
    name: "Reducing spell damage",
    desc: "There is no automatic defensive roll. A damage spell's wound successes are only reduced if the target actively reacts: do nothing and the full total lands, exactly like an unreacted weapon hit. The spell's damage type tells you which reaction fits: physical force, heat, cold, poison, decay, and radiant damage call for Brace. Mental, psychic, and fear damage call for Strengthen Psyche. Some spells state no reduction is possible: no reaction of any kind helps against these."
  },
  {
    name: "Reacting to reduce spell damage",
    desc: "This is a reactive system, nobody has much wound capacity, and doing nothing against an incoming spell means taking the full total. Brace and Strengthen Psyche are the two dedicated reduction reactions (see Actions & Reactions) and are what most spells are reduced with. Dodge and Block can also apply to a spell where the GM rules footwork or a shield would plausibly help, the same call that already governs whether a spell can be dodged or blocked at all."
  },
  {
    name: "Brace, Strengthen Psyche, Dodge, and Block",
    desc: "Brace (0 AP): roll Fortitude alone, reduce wound successes by the successes rolled. Free, and the weakest option for it, tanking a hit is riskier than actively getting out of its way or catching it on a shield. Your default answer to physical and elemental spells when you have nothing better available. Strengthen Psyche (0.5 AP): roll Resolve + Focus, reduce wound successes by the successes rolled. The mind's counterpart to Brace, for mental, psychic, and fear effects, physical toughness does nothing against an assault on the mind. Dodge (0.5 AP, cost from next turn): roll Agility + Dodge, reduce wound successes by the successes rolled. Useful against ranged, area, or projectile spells where footwork can carry you clear, not against effects that target the mind directly. Block (0.5 AP): add your weapon or shield block value as bonus successes on top of whatever else you rolled. Brace and Block can be taken together, as can Strengthen Psyche and Block. Dodge cannot be combined with either. A pulse of psychic fear cannot be sidestepped; a bolt of kinetic force can."
  },
  {
    name: "Which reaction fits which damage type",
    desc: "Physical force or kinetic: Brace. Heat or fire: Brace. Cold or frost: Brace. Poison or decay: Brace. Radiant or solar: Brace. Mental or psychic: Strengthen Psyche. Fear: Strengthen Psyche. Dodge and Block can supplement a Brace-eligible spell where the GM allows it. When a spell states no save or no reduction, no reaction of any kind helps and full damage applies."
  },

  {
    name: "The threshold - pass-fail spells",
    desc: "Spells that do not primarily deal damage (paralysis, charm, petrification, instant death, movement locks) use the threshold model. The number of successes the target needs to resist equals the caster's points in their spellcasting focus skill. Reaching the required successes means the spell has no effect. Falling short means the full effect applies."
  },
  {
    name: "Threshold saves - which stat to roll",
    desc: "The stat pairing a threshold save uses depends on what kind of resistance is actually happening. Fortitude + Toughness: raw bodily resilience, shrugging off poison, petrification, exhaustion, and similar. Resolve + Focus: mental and spiritual resistance, charm, fear, and other mind-affecting effects. Agility + Acrobatics: general evasive movement, getting clear of an area effect before it closes, avoiding being restrained, entangled, or buried. Agility + Acrobatics is the base for that last category, not the Dodge reaction: Dodge is something you actively spend a reaction to do (see Actions & Reactions), while Acrobatics is your baseline capacity to move yourself out of danger without actively reacting. "
  },
  {
    name:"Magical resistance - Alternative option against spells ",
    desc: "Any mage with a connection to the source can use their spellpoints to try to oppose enemy magic instead of trying to dodge, brace, or strengthen their psyche through opposing spells. By spending spellpoints equal to the enemy caster you can instead use spellcasting Attribute+focus(skill) to reduce the amount of successes of the spell the enemy cast. Note this is as long as it is feasible and makes sense for you to be able to do. If you have no information on what spell, or where the caster is, or any similar reason, this feature is not applicable."
  },
  {
    name: "Quick reference",
    desc: "Does the spell deal wounds as its primary effect? Yes: auto-hit, no reduction unless the target reacts with Brace, Strengthen Psyche, Dodge, or Block. No reaction, full damage. No: threshold save, target rolls to resist entirely, this roll is automatic and unaffected by reactions. Mixed spell with damage and a control effect? Damage auto-hits and is reduced only by reacting. The control effect uses the threshold save in the same instance."
  }
];

// ══════════════════════════════════════════
// CONCENTRATION RULES
// ══════════════════════════════════════════
const CONCENTRATION_RULES = [
  {
    name: "Casting components - the lock-in rule",
    desc: "Each component of a spell (Somatic, Verbal, Material) is cast individually. Once a component is successfully completed it is locked in: you do not need to recast it. A locked component remains active for 1 round. If no further components are attempted within that round, the accumulated magic dissipates and all locked components are lost along with any spell points already spent. To keep a partially completed spell alive beyond one round without immediately casting the next component, you may make a concentration roll."
  },
  {
    name: "Extending the casting window",
    desc: "To hold locked components for longer than 1 round without casting the next component, make a Focus + spellcasting ability check at DC 6 needing successes equal to the number of components currently locked in. On success all locked components are held for another round. On failure they dissipate and all invested spell points are lost. This check is a free action at the end of your turn."
  },
  {
    name: "Sustaining a concentration spell - spell point upkeep",
    desc: "Unlike D&D, you may concentrate on as many spells simultaneously as you wish. However, each turn you are concentrating on a spell you must spend spell points equal to that spell's level to keep it active. No action is required: the cost is simply paid at the start of your turn. A 3rd level concentration spell costs 3 spell points per round to maintain. If you cannot or choose not to pay, the spell ends immediately. This means high-level concentration spells are genuinely expensive to sustain over many rounds."
  },
  {
    name: "Concentration check - shallow wound",
    desc: "When you take a shallow wound while concentrating on one or more spells, you must make a Focus + spellcasting ability check for each spell you are currently concentrating on. DC is 6, needing successes equal to the level of that spell. On success the spell holds. On failure that spell ends. You make one check per spell per wounding instance, not per wound."
  },
  {
    name: "Concentration check - deep wound",
    desc: "When you take a deep wound while concentrating, the same check applies but the DC increases to 8 instead of 6. Successes needed remain equal to the spell's level. The higher DC reflects the shock and severity of a deep injury. A 1st level spell needs only 1 success at DC 8: survivable. A 5th level spell needs 5 successes at DC 8: very likely to drop."
  },
  {
    name: "What breaks concentration automatically",
    desc: "Any condition that removes your mental faculties breaks all concentration instantly with no check. This includes: falling unconscious, being fully paralysed, any mind-control effect that seizes your actions, and any condition the GM rules removes your ability to think clearly such as certain magical confusion effects. Being knocked prone, pushed, frightened, or distracted does not automatically break concentration: those still trigger a check if they also deal wounds."
  },
  {
    name: "Modifiers to concentration checks",
    desc: "The DCs of 6 (shallow) and 8 (deep) are the baseline. Anything that aids your focus can reduce these DCs, and anything that impairs it can raise them. Features, spells, conditions, and circumstances that the GM rules affect your focus directly modify these checks. For example a spell that grants advantage on Focus rolls would reduce the effective DC, while the Distracted condition might raise it by 1."
  },
  {
    name: "Dropping concentration willingly",
    desc: "You may end concentration on any or all spells you are maintaining as a free action on your turn. You do not pay the spell point upkeep cost on the turn you drop a spell. The spell ends immediately with no lingering effect unless its description states otherwise."
  }
];

// ══════════════════════════════════════════
// ETHER CORES
// ══════════════════════════════════════════
const ETHER_STRAINS = [
  {
    id: "true-ether",
    name: "True Ether",
    subtitle: "The Source made solid",
    lore: "Shimmering crystal, warm to the touch, humming with caged potential. The purest form of the Source that can be held in a hand: pried from deep mines or grown in workshops where the light never fades.",
    consumed: {
      tiers: [
        { rarity: "Uncommon", text: "+3 spell points for 3 rounds. Spells cost 1 pt less." },
        { rarity: "Rare", text: "+6 spell points for 6 rounds. Spells cost 1 pt less. DC for individual components -2." },
        { rarity: "Very Rare", text: "+12 spell points for 2 min. Cost -2 pts. DC for individual components -3" },
        { rarity: "Legendary", text: "+18 spell points for 10 min. Cost -2 pts. DC for individual components -4" }
      ],
      sideEffect: { type: "crash", text: "Crash - Fortitude + Toughness at end of duration: DC 6/7/8/9, needing 2/3/4/5 successes. Failure: 1/2/3/4 mental wounds. Failure also collapses all active concentration spells. Failing with 2 or more under the needed amount of successes makes you unable to cast spells for 1 minute" }
    },
    focus: {
      permanent: true,
      tiers: [
        { rarity: "Uncommon", text: "Spell point max +2. twice per long rest, a failed casting check may be rerolled." },
        { rarity: "Rare", text: "Spell point max +4. Failed casting reroll twice per long rest. Learning new spells costs half the normal time and reduces Arcana DC by 1." },
        { rarity: "Very Rare", text: "Spell point max +7. Casting reroll twice per short rest. Arcana DC -1 for learning. When rolling for successes for individual components gain +1 success" },
        { rarity: "Legendary", text: "Spell point max +10. Casting reroll twice per short rest. Arcana DC -2 for learning. Free spell cast once per long rest.  When rolling for successes for individual components gain +2 successes" }
      ],
      sideEffect: { type: "safe", text: "No volatility. No side effects. The only strain safe for permanent tool and device enchantments. A focus can hold only one infusion: inserting a second destroys the first." },
      craftNote: "Requires a craftsman to insert. Cannot be self-infused."
    }
  },
  {
    id: "voidglass",
    name: "Voidglass",
    subtitle: "Wild ether",
    lore: "No known origin. Thrums with chaotic charge that resists control. Those who use it find their eyes turning violet, their tears staining purple, and their minds fraying at the edges.",
    consumed: {
      tiers: [
        { rarity: "Uncommon", text: "+4 spell points for 3 rounds. Damage spells +1d10 force damage. Spells cost 2 pts less, minumum of 1." },
        { rarity: "Rare", text: "+8 spell points for 6 rounds. Damage +2d10. Cost -2. When rolling for components, dc decreases by 2 but you need one more success." },
        { rarity: "Very Rare", text: "+16 spell points for 2 min. Damage +3d10. Cost -3. Components, dc decreases by 3 but you need 2 more successes. Each spell cast gain one random additional target" },
        { rarity: "Legendary", text: "Unlimited spell points for 10 min. Damage +4d10. Components dc -4 need 3 more successes. Additonal spell target. You have no spell point limit for 3 rounds." }
      ],
      sideEffect: { type: "crash", text: "Crash DC 7/8/9/10 fortitude/resolve+toughness. needing 2/3/4/5 successes. Failure leaves a Voidglass mark: eyes stay violet 24 hrs, purple rashes appear on skin around arms and neck.  Three total marks: When casting a spell the cost permanatly +1 spellpoint, any more failures on crash directly add +1.   Addiction check at next long rest: Resolve + Focus DC 6 or 1 mental wound until next use. successes needed rises with repeated use." }
    },
    focus: {
      permanent: true,
      tiers: [
        { rarity: "Uncommon", text: "Spell point max +2. Damage spells +1d10 force damage. Once per encounter, a spell you cast may target one additional creature within range: unintended.." },
        { rarity: "Rare", text: "Spell point max +4. Damage +2d10. Unintended second target. When you roll 2 more successes for the individual components the spell gains an additional effect from a first level spell that you know, your choice, be creative " },
        { rarity: "Very Rare", text: "Spell point max +6. Damage +3d10. Unintended target.When you roll 2 more successes for the individual components the spell gains an additional effect from a first level spell that you know, your choice, be creative. Once per long rest: cast a spell you do not know from any school as long as it is of a spell level you can cast." },
        { rarity: "Legendary", text: "Spell point max +8. Damage +4d10. Unintended target. When you roll 2 more successes for the individual components the spell gains an additional effect from a first level spell that you know, your choice, be creative. Once per long rest: cast a spell you do not know from any school as long as it is of a spell level you can cast. Once per long rest you may expend spell points up to a spell level of your choice. A random spell is cast of 1 level higher." }
      ],
      sideEffect: { type: "volatile", text: "before casting a spell roll a d10; on a 1-2 the focus misfires: one spell produces an uncontrolled additional wil magic effect the dm rolls on his table.  At Legendary the misfire range extends to 1-3." },
      craftNote: "Requires a specialist craftsman. Most refuse. The few who will are expensive and ask no questions."
    }
  },
  {
    id: "aether",
    name: "Aether",
    subtitle: "Artificial ether",
    lore: "Manufactured in the factories of the Strand. Weaker than true Ether, far more stable, far easier to produce. The city runs on it. Its weakness is intentional: designed so ordinary workers could handle it without training.",
    consumed: {
      tiers: [
        { rarity: "Uncommon", text: "+2 spell points for 3 rounds ." },
        { rarity: "Rare", text: "+4 spell points for 6 rounds. Spells cost 1 pt less." },
        { rarity: "Very Rare", text: "+9 spell points for 2 min. Cost -2. Components need 1 fewer success." },
        { rarity: "Legendary", text: "+15 spell points for 10 min. Cost -2. Components need 2 fewer success. Concentration DC -2." }
      ],
      sideEffect: { type: "safe", text: "The most forgiving strain even when consumed." }
    },
    focus: {
      permanent: true,
      tiers: [
        { rarity: "Uncommon", text: "Spell point max +1. Recover 1 spell point at the start of each of your turns while concentrating on a spell: the focus sustains you." },
        { rarity: "Rare", text: "Spell point max +3. Recover 1 spell point per turn while concentrating. Concentration spells cost 1 fewer spell point per round to maintain." },
        { rarity: "Very Rare", text: "Spell point max +5. Recover 2 spell points per turn while concentrating. Concentration upkeep cost -1. Once per combat encounter, immediately recover 3 spell points as a free action." },
        { rarity: "Legendary", text: "Spell point max +8. Recover 3 spell points per turn while concentrating. Upkeep cost -1. Encounter recovery 3 pts. Concentration spells cannot be ended by taking a shallow wound; only a deep wound forces the check." }
      ],
      sideEffect: { type: "safe", text: "No volatility. No side effects. The only strain available to purchase reliably in shops. Cheap relative to all other strains." },
      craftNote: "Requires a craftsman to insert. Cannot be self-infused."
    }
  },
  {
    id: "blood-clot",
    name: "Blood Clot",
    subtitle: "Vampiric ether",
    lore: "Ether steeped in vampire blood. It does not feed strength; it feeds hunger. Spells cast through it taste the wounds they deal. The need for more grows quickly into something that does not care about consequences.",
    consumed: {
      tiers: [
        { rarity: "Uncommon", text: "+3 spell points for 3 rounds. Damage spells heal you for 1 shallow wound per casting." },
        { rarity: "Rare", text: "+6 spell points for 6 rounds. Spells heal 1 shallow wound. When a creature you damaged dies, recover 2 spell points immediately." },
        { rarity: "Very Rare", text: "+10 spell points for 2 min. Spells heal 1 shallow wound. Death recovery 2 pts. Damage spells +2d10. Vocal components cost an extra half action: the hunger overrides precision." },
        { rarity: "Legendary", text: "+16 spell points for 5 min. Spells heal 2 shallow wounds. Death recovery 3 pts. Damage +3d10. Extra vocal component cost. When you are reduced to 0 hitpoints, spend 10 spell points to return to 1 shallow wound immidieatly instead." }
      ],
      sideEffect: { type: "addict", text: "Crash check applies. Each failure: 1 level of Blood Hunger. At 3 levels: must consume at long rest start or gain no rest benefit. At 5: daily requirement. Reduces 1 per week of abstinence; first week requires Resolve + Focus DC 7, 3 successes daily or 1 mental wound. Tells at level 3+: darkened temple veins, rust smell, reduced blinking. Vampires can smell it." }
    },
    focus: {
      permanent: true,
      tiers: [
        { rarity: "Uncommon", text: "Spell point max +2. Damage spells heal you for 1 shallow wound per casting. The focus feels warm after a kill." },
        { rarity: "Rare", text: "Spell point max +4. Spells heal 1 shallow wound. When a creature you damaged dies within 1 round, recover 2 spell points." },
        { rarity: "Very Rare", text: "Spell point max +6. Spells heal 1 shallow wound. Death recovery 2 pts. Once per encounter: spend 2 shallow wounds from yourself to cast a spell, up to level 4, you know without spending spell points: the focus drinks your blood instead." },
        { rarity: "Legendary", text: "Spell point max +8. Spells heal 2 shallow wounds. Death recovery 3 pts. Blood-cost casting. When you cast a spell that kills a creature, the next spell you cast this turn costs 8 spell points less and each component gets 3 additional successes: the focus is briefly glutted." }
      ],
      sideEffect: { type: "addict", text: "Vocal components cost an extra half action at all tiers: the vampiric charge disrupts resonance permanently. The focus darkens the veins at the wielder's wrist visibly while held. Blood Hunger clock ticks: 1 level per month of continuous use at GM's discretion. Vampires can smell the focus on the caster at close range." },
      craftNote: "Requires a craftsman willing to handle vampiric material. Illegal in most jurisdictions. The focus itself becomes a registered dangerous item."
    }
  }
];
