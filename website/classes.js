var CLASSES = [
  {
    id: "rogue",
    name: "Rogue",
    tagline: "Precision, deception, and the advantage of never fighting fair.",
    desc: "Rogues are specialists of opportunity. They excel when they control the terms of engagement: striking from shadow, manipulating situations, and exploiting every weakness their enemies reveal. Where a fighter absorbs punishment, a rogue ensures punishment never arrives.",
    pointsPerLevel: 2,
    progression: [
      { level: 1,  gains: "3 points (1 bonus). Pick Tier 1 skills." },
      { level: 2,  gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 3,  gains: "Tier 2 skills unlocked." },
      { level: 4,  gains: "Additional half action." },
      { level: 6,  gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 7,  gains: "Tier 3 skills unlocked." },
      { level: 9,  gains: "Additional half action." },
      { level: 10, gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 12, gains: "Tier 4 skills unlocked." },
      { level: 13, gains: "Additional half action." },
      { level: 14, gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 17, gains: "Tier 5 skills unlocked." },
      { level: 18, gains: "Ability score +1, one feat." },
    ],
    tiers: [
      {
        tier: 1, label: "Fundamentals",
        skills: [
          { name: "Sneak Attack I",         prereq: null,                prereq2: null,                 cost: 1, desc: "Once a turn when striking distracted targets you can automatically add 1 success. Note: sneak attack can only be used with weapons that use Agility as their primary stat." },
          { name: "Stealth Training",        prereq: null,                prereq2: null,                 cost: 1, desc: "When rolling for stealth your DC for success is lowered by 1." },
          { name: "Lockpicking",             prereq: null,                prereq2: null,                 cost: 1, desc: "You gain one point in the lockpicking skill." },
          { name: "Quick Hands",             prereq: null,                prereq2: null,                 cost: 1, desc: "When rolling sleight of hand your DC is reduced by 1." },
          { name: "Cunning Step",            prereq: null,                prereq2: null,                 cost: 2, desc: "You can take the Hide or Disengage action as a half action instead of an action." },
          { name: "Observation",             prereq: null,                prereq2: null,                 cost: 1, desc: "Spot hidden compartments, traps, or ambushes more easily. Your DC for Perception checks for these is lowered by 1." },
          { name: "Thrown Weapon Fighting",  prereq: null,                prereq2: null,                 cost: 1, desc: "When making a thrown weapon attack you may draw the weapon as a free action." },
          { name: "Disguise",                prereq: null,                prereq2: null,                 cost: 1, desc: "You gain 1 point using the disguise kit." },
          { name: "Minor Poison Handling",   prereq: null,                prereq2: null,                 cost: 1, desc: "Identify or apply basic toxins safely. When handling or identifying such you have DC lowered by 1." },
        ]
      },
      {
        tier: 2, label: "Expanding Toolkit",
        skills: [
          { name: "Sneak Attack II",         prereq: "Sneak Attack I",    prereq2: null,                 cost: 1, desc: "Once a turn when striking distracted targets you can automatically add 1 success." },
          { name: "Silent Movement",         prereq: "Stealth Training",  prereq2: null,                 cost: 1, desc: "Add one success when rolling a stealth check." },
          { name: "Shadow Dash",             prereq: "Cunning Step",      prereq2: null,                 cost: 2, desc: "You can move at normal speed when hiding, as long as there is cover or an obscuring factor." },
          { name: "Parkour",                 prereq: "Cunning Step",      prereq2: null,                 cost: 1, desc: "When rolling Acrobatics for moving through terrain your DC is decreased by 1." },
          { name: "Trapwork",                prereq: "Observation",       prereq2: null,                 cost: 1, desc: "When making a Perception check to detect, disarm, and set basic traps, DC is lowered by 1." },
          { name: "Poison Handling",         prereq: "Minor Poison Handling", prereq2: null,             cost: 2, desc: "You learn how to handle and apply poisons quickly in battle. You can apply poisons to a weapon as a half action." },
          { name: "Thieves Cant",            prereq: null,                prereq2: null,                 cost: 1, desc: "You learn a language used to interact with underground associations." },
          { name: "Forgery",                 prereq: "Quick Hands",       prereq2: null,                 cost: 2, desc: "You gain one point in using the forgery kit." },
          { name: "Disarming Strike",        prereq: "Quick Hands",       prereq2: null,                 cost: 2, desc: "Once a turn after taking the attack action you may as a half action attempt to disarm an enemy. Roll a sleight of hand check. DC is set by the enemy's points in Strength or Agility." },
          { name: "Thrown Weapon II",        prereq: "Thrown Weapon Fighting", prereq2: null,            cost: 2, desc: "Once a turn you may make one thrown weapon attack using a half action." },
          { name: "Improvised Weapons Fighting", prereq: "Quick Hands",   prereq2: null,                 cost: 1, desc: "When using improvised weapons you may use Agility to roll successes." },
        ]
      },
      {
        tier: 3, label: "Specialisation",
        skills: [
          { name: "Sneak Attack III",        prereq: "Sneak Attack II",   prereq2: null,                 cost: 1, desc: "Once a turn when striking distracted targets you can automatically add 1 success." },
          { name: "Master Thief",            prereq: "Lockpicking",       prereq2: null,                 cost: 1, desc: "When making a skill check using lockpicking you gain 1 additional success." },
          { name: "Assassin's Preparation",  prereq: "Sneak Attack II",   prereq2: null,                 cost: 2, desc: "If you study a target for at least a minute, you gain 2 additional successes on the first attack you make against them." },
          { name: "Evasion",                 prereq: "Cunning Step",      prereq2: null,                 cost: 2, desc: "When taking the dodge reaction you gain 1 additional success." },
          { name: "Wallrunning / Vaulting",  prereq: "Parkour",           prereq2: null,                 cost: 1, desc: "You can unnaturally scale walls, leap gaps, or navigate vertical terrain. Gain 1 additional success to Acrobatics." },
          { name: "Grappling Expertise",     prereq: "Cunning Step",      prereq2: null,                 cost: 1, desc: "You learn how to use ropes and hooks, and your DC using them is lowered by 1." },
          { name: "Environmental Sabotage",  prereq: "Trapwork",          prereq2: null,                 cost: 1, desc: "You have an eye for your surroundings. When making rolls to use your environment to your advantage you gain 1 additional success." },
          { name: "Trap Insight",            prereq: "Observation",       prereq2: null,                 cost: 1, desc: "When rolling for finding traps you gain an additional success." },
          { name: "Shadow Veil",             prereq: "Silent Movement",   prereq2: null,                 cost: 2, desc: "You learn to manipulate silhouettes and move along with shadows. As long as there are shadows you may take the hide action." },
          { name: "Trap Crafter",            prereq: "Trapwork",          prereq2: null,                 cost: 2, desc: "You reduce the time taken to set up traps by an action (minimum of a half action)." },
          { name: "Throwing Mastery",        prereq: "Quick Hands",       prereq2: null,                 cost: 2, desc: "When making a thrown weapon attack you may strike 2 targets instead of just 1." },
          { name: "Poison Expertise",        prereq: "Poison Handling",   prereq2: null,                 cost: 2, desc: "When crafting poisons you gain an additional success." },
        ]
      },
      {
        tier: 4, label: "Mastery",
        skills: [
          { name: "Sneak Attack IV",         prereq: "Sneak Attack III",  prereq2: null,                 cost: 1, desc: "Once a turn when striking distracted targets you can automatically add 1 success." },
          { name: "Death Strike",            prereq: "Assassin's Preparation", prereq2: null,            cost: 3, desc: "When you strike from complete surprise, double the amount of successes gained from sneak attack." },
          { name: "Ghost Walk",              prereq: "Shadow Dash",       prereq2: null,                 cost: 1, desc: "Difficult terrain has no effect on your movement." },
          { name: "Phantom Strike",          prereq: "Sneak Attack III",  prereq2: "Shadow Veil",        cost: 2, desc: "Once per turn when hiding you may strike an enemy within 1 movement without expending movement." },
          { name: "Fade into Shadows",       prereq: "Shadow Veil",       prereq2: null,                 cost: 2, desc: "Immediately hide after an attack twice per short rest." },
          { name: "Trap Sense",              prereq: "Trap Insight",      prereq2: null,                 cost: 2, desc: "When traps are within 1 movement of you, you immediately note their existence. You do not know where, how many, or what kind of trap." },
          { name: "Improvised Arsenal",      prereq: "Improvised Weapons Fighting", prereq2: null,       cost: 2, desc: "Turn everyday objects into deadly tools. You can use sneak attack with any weapon." },
          { name: "Master of Evasion",       prereq: "Evasion",           prereq2: null,                 cost: 3, desc: "Once per turn you can take the dodge reaction without expending the cost for that reaction." },
          { name: "Shadow Cling",            prereq: "Shadow Veil",       prereq2: null,                 cost: 2, desc: "When obscured by shadow you count as invisible to anyone with fewer points in Perception than you have in Stealth." },
          { name: "Venom Mastery",           prereq: "Poison Expertise",  prereq2: null,                 cost: 2, desc: "Your poisons linger on the applied weapon for an additional attack." },
        ]
      },
      {
        tier: 5, label: "Legend",
        skills: [
          { name: "Sneak Attack V",          prereq: "Sneak Attack IV",   prereq2: null,                 cost: 1, desc: "Once a turn when striking distracted targets you can automatically add 1 success." },
          { name: "Shadowstep",              prereq: "Shadow Veil",       prereq2: null,                 cost: 3, desc: "If there is a shadow within 2 movement actions you may teleport to that shadow as an action." },
          { name: "Perfect Silence",         prereq: "Silent Movement",   prereq2: "Shadow Veil",        cost: 2, desc: "You and your gear make no sound; immune to detection by hearing to anyone who has fewer points in Perception than you have in Stealth." },
          { name: "Master Assassin",         prereq: "Death Strike",      prereq2: null,                 cost: 3, desc: "Even creatures that have the Alert feature can still be surprised by you." },
          { name: "Trick of the Soul",       prereq: "Master of Evasion", prereq2: null,                 cost: 3, desc: "As a reaction (cost: action) you can replace a skill check made by an ally by you making it instead." },
        ]
      },
    ]
  },

  {
    id: "fighter",
    name: "Fighter",
    tagline: "Mastery of arms, endurance under fire, and the discipline to keep swinging.",
    desc: "Fighters are the backbone of any group that finds itself in direct confrontation. They don't rely on tricks or magic; they rely on training, toughness, and the fact that they have done this before. A high-level Fighter is not just hard to kill; they make everyone around them harder to kill too.",
    pointsPerLevel: 2,
    progression: [
      { level: 1,  gains: "3 points (1 bonus). Pick Tier 1 skills." },
      { level: 2,  gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 3,  gains: "Tier 2 skills unlocked." },
      { level: 4,  gains: "Additional half action." },
      { level: 6,  gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 7,  gains: "Tier 3 skills unlocked." },
      { level: 9,  gains: "Additional half action." },
      { level: 10, gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 12, gains: "Tier 4 (Veteran) skills unlocked." },
      { level: 13, gains: "Additional half action." },
      { level: 14, gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 17, gains: "Tier 5 (Legend) skills unlocked." },
      { level: 18, gains: "Ability score +1, one feat." },
    ],
    tiers: [
      {
        tier: 1, label: "Fundamentals",
        skills: [
          { name: "Weapon Training",    prereq: null, prereq2: null, cost: 1, desc: "Gain a proficiency point in 2 additional weapons." },
          { name: "Second Wind",        prereq: null, prereq2: null, cost: 1, desc: "Once per short rest, spend an action to recover shallow wounds. Roll dice equal to half your Fortitude score (round down, minimum 1). Recover wounds equal to successes." },
          { name: "Combat Footing",     prereq: null, prereq2: null, cost: 1, desc: "When forced to make Athletics or Acrobatics checks to stay standing or resist being pushed or knocked prone, lower your DC by 1." },
          { name: "Shield Discipline",  prereq: null, prereq2: null, cost: 2, desc: "When wielding a shield and taking the block reaction, soak 1 additional success worth of damage." },
          { name: "Weapon Switching I", prereq: null, prereq2: null, cost: 1, desc: "Switch weapons as a free action once per turn." },
          { name: "Duelist Training",   prereq: null, prereq2: null, cost: 2, desc: "When fighting with a single one-handed weapon and no shield, enemies have +1 DC on attack rolls against you in melee." },
          { name: "Enduring Physique",  prereq: null, prereq2: null, cost: 1, desc: "Reduce DC by 1 for Fortitude + Toughness rolls to resist knockdown, poison, and similar physical debilitations." },
          { name: "Parry",              prereq: null, prereq2: null, cost: 2, desc: "When an enemy attacks you in melee, you may take the parry reaction (cost: half action from next turn). Roll Agility + your weapon or shield's block value. Each success reduces their attack successes by 1." },
          { name: "Power Strike I",     prereq: null, prereq2: null, cost: 1, desc: "Once per turn when making a melee attack, declare a Power Strike before rolling. Add 1 additional damage die. The attack has +1 DC." },
          { name: "Action Surge",       prereq: null, prereq2: null, cost: 2, desc: "Once per turn as a free action, push beyond your limits and gain 1 additional action this turn. Afterward make a Fortitude + Toughness roll (DC 6, 2 successes needed). On a fail, take 1 mental wound and cannot use Action Surge again until a short rest. Each additional use this rest increases the success threshold by 1. Resets after a short rest." },
        ]
      },
      {
        tier: 2, label: "Expanding Arsenal",
        skills: [
          { name: "Power Strike II",      prereq: "Power Strike I",    prereq2: null,               cost: 1, desc: "Power Strike now adds 2 damage dice instead of 1. The +1 DC on the attack remains." },
          { name: "Weapon Switching II",  prereq: "Weapon Switching I",prereq2: null,               cost: 1, desc: "When you switch weapons using Weapon Switching I, your first attack with the new weapon this turn adds 1 additional damage die." },
          { name: "Quick Reflexes",       prereq: null,                prereq2: null,               cost: 2, desc: "Once per turn, take one block or parry reaction for free: it costs no actions from your next turn." },
          { name: "Riposte",              prereq: "Parry",             prereq2: null,               cost: 2, desc: "When you successfully parry an attack (reducing it to 0 successes), you may immediately make one melee attack against that enemy as part of the same reaction." },
          { name: "Dual Grip",            prereq: "Weapon Training",   prereq2: null,               cost: 1, desc: "When using a two-handed weapon, reroll one failed attack die per turn." },
          { name: "Tactical Awareness",   prereq: "Combat Footing",    prereq2: null,               cost: 2, desc: "You always act in the surprise round, even if caught off guard. You are never considered surprised for the purpose of losing your turn." },
          { name: "Shield Bash",          prereq: "Shield Discipline", prereq2: null,               cost: 2, desc: "After making a melee attack while wielding a shield, spend a half action to shove the target. Make a Strength + Athletics opposed check: on success, push them up to 2m or knock them prone." },
          { name: "Stalwart Guard",       prereq: "Shield Discipline", prereq2: null,               cost: 2, desc: "When you take the block reaction, you may choose one adjacent ally. They also benefit from your block this round against the same attack source." },
          { name: "Warrior's Endurance",  prereq: "Enduring Physique", prereq2: null,               cost: 2, desc: "Once per long rest, when you would take your final deep wound (the one that would start your death countdown), you may immediately stabilise it as a free action without rolling." },
          { name: "Momentum",             prereq: "Combat Footing",    prereq2: null,               cost: 1, desc: "When you move at least half your movement before making a melee attack, add 1 additional damage die to that attack. Does not stack with Power Strike." },
        ]
      },
      {
        tier: 3, label: "Veteran",
        skills: [
          { name: "Power Strike III",   prereq: "Power Strike II",   prereq2: null,               cost: 1, desc: "Power Strike now adds 3 damage dice. On a hit, the target must make a Fortitude + Toughness DC 6 roll or be pushed back 2m from the force of the blow." },
          { name: "Weapon Flow",        prereq: "Weapon Switching II",prereq2: null,              cost: 2, desc: "You may make two separate melee attacks in one turn using two different weapons, each as a half action. Both attacks roll normally. The weapons must both be drawn." },
          { name: "Counterstrike",      prereq: "Riposte",           prereq2: null,               cost: 2, desc: "When an enemy's attack against you fails (rolls 0 successes after your block or parry), you may immediately make one melee attack against them as a reaction (cost: half action from next turn)." },
          { name: "Perfect Guard",      prereq: "Parry",             prereq2: null,               cost: 2, desc: "Once per short rest, when you take the parry or block reaction, automatically treat your defence roll as having rolled maximum successes: no roll needed." },
          { name: "Iron Will",          prereq: "Warrior's Endurance",prereq2: null,              cost: 1, desc: "You are immune to the first stack of any bleeding or pain condition per encounter. If you would gain a second stack, make a Fortitude + Toughness DC 6 roll: on success, ignore it." },
          { name: "Unyielding",         prereq: "Enduring Physique", prereq2: null,               cost: 2, desc: "When you take damage that would give you a deep wound, make a Fortitude + Toughness DC 7 roll. On success, convert that deep wound into 2 shallow wounds instead. Usable once per encounter." },
          { name: "Whirlwind",          prereq: "Power Strike II",   prereq2: null,               cost: 2, desc: "Spend one full action to make a single melee attack against every enemy adjacent to you. Roll once and apply successes to each target separately. Each target defends independently." },
          { name: "Mobile Fighter",     prereq: "Combat Footing",    prereq2: null,               cost: 1, desc: "Difficult terrain does not slow your movement. You may also move through enemy-occupied spaces during your turn without triggering reactions, as long as you don't end your movement there." },
          { name: "Rallying Strike",    prereq: "Tactical Awareness",prereq2: null,               cost: 2, desc: "Once per short rest, when you reduce an enemy to 0 wounds, one ally of your choice within line of sight immediately recovers 1 shallow wound and may take a free half action on their next turn." },
          { name: "Grappler",           prereq: "Shield Bash",       prereq2: null,               cost: 2, desc: "When you successfully shove a target, you may instead initiate a grapple as a free action. While grappling, the target is Restrained and you have -1 DC on melee attacks against them. Maintaining the grapple costs a half action at the start of each of your turns." },
        ]
      },
      {
        tier: 4, label: "Veteran Elite",
        skills: [
          { name: "Power Strike IV",        prereq: "Power Strike III",  prereq2: null,             cost: 2, desc: "Power Strike now adds 4 damage dice. On a hit, target makes Fortitude + Toughness DC 7 or is knocked prone in addition to any push effect." },
          { name: "Weapon Mastery",         prereq: "Weapon Training",   prereq2: null,             cost: 2, desc: "Choose one weapon type. When using that weapon type, add 1 automatic success to all attack rolls and reduce the DC of block/parry reactions by 1 while wielding it." },
          { name: "Dual Flow",              prereq: "Weapon Flow",       prereq2: null,             cost: 2, desc: "When you have two weapons drawn, you may combine their half action attacks freely within a single turn: attack with one, then the other, in any order, as two separate half actions." },
          { name: "Unbreakable",            prereq: "Unyielding",        prereq2: null,             cost: 2, desc: "You cannot be forced prone, disarmed, or moved against your will unless your attacker rolls at least 2 more successes than your defence total." },
          { name: "Juggernaut",             prereq: "Enduring Physique", prereq2: null,             cost: 2, desc: "While wearing heavy armour, when you take the block reaction, add your armour's soak value again as bonus soak dice against that attack. Additionally, enemies who attempt to shove or move you have +2 DC on those checks." },
          { name: "Guardian's Stand",       prereq: "Stalwart Guard",    prereq2: null,             cost: 2, desc: "Allies within 1 movement of you have +1 DC against enemy attacks while you are conscious and not Restrained. You may take the block reaction on behalf of an adjacent ally." },
          { name: "Battlefield Commander",  prereq: "Tactical Awareness",prereq2: null,             cost: 2, desc: "Once per short rest as a half action, issue a battlefield order to up to 3 allies in line of sight. Each may immediately move up to half their movement as a free action." },
          { name: "Precision Counter",      prereq: "Counterstrike",     prereq2: null,             cost: 2, desc: "When you use Counterstrike, your counter-attack cannot be parried or blocked." },
          { name: "Indomitable",            prereq: "Iron Will",         prereq2: null,             cost: 2, desc: "Once per encounter when you fail a Fortitude + Toughness roll of any kind, you may reroll it and take the new result." },
          { name: "Combat Surge",           prereq: "Action Surge",      prereq2: null,             cost: 2, desc: "Action Surge's DC check now starts at DC 5 instead of DC 6. On a failed Action Surge check, you do not take a mental wound; you simply cannot use Action Surge again until a short rest." },
        ]
      },
      {
        tier: 5, label: "Legend",
        skills: [
          { name: "Power Strike V",       prereq: "Power Strike IV",       prereq2: null,           cost: 2, desc: "Power Strike adds 5 damage dice. The +1 DC attack penalty is removed. Once per encounter, a Power Strike that deals a deep wound automatically rolls the worst result on the deep wound table (Arterial Hemorrhage) instead of rolling randomly." },
          { name: "Weapon Mastery II",    prereq: "Weapon Mastery",        prereq2: null,           cost: 2, desc: "Your chosen weapon type now grants 2 automatic successes on attacks and reduces block/parry DCs by 2. Once per turn when you attack with your mastered weapon, you may choose one of: push target 2m, target drops a held item, or target is staggered (loses their half action next turn)." },
          { name: "Perfect Counter",      prereq: "Precision Counter",     prereq2: null,           cost: 2, desc: "When you use Counterstrike or Riposte, if your counter-attack succeeds, the target cannot take any reactions until the start of their next turn." },
          { name: "Unstoppable",          prereq: "Juggernaut",            prereq2: null,           cost: 3, desc: "Once per encounter, declare Unstoppable before moving. Until the end of your turn, you cannot be stopped, slowed, knocked prone, or have your movement reduced by any means. Enemies in your path who do not move are automatically shoved." },
          { name: "Warlord's Presence",   prereq: "Battlefield Commander", prereq2: null,           cost: 3, desc: "All allies within 2 movements of you add 1 die to their Resolve + Focus checks. Once per encounter as a free action, issue a battle cry: all allies in earshot immediately remove 1 stack of any condition of their choice." },
          { name: "Deathless",            prereq: "Warrior's Endurance",   prereq2: null,           cost: 3, desc: "When you take a deep wound that would start your death countdown, you may spend a reaction to immediately stabilise it: no roll required. Once per encounter. Additionally, you do not die at the end of your deep wound countdown; you fall unconscious instead and stabilise naturally unless someone takes action to finish you." },
          { name: "Second Wind Mastery",  prereq: "Second Wind",           prereq2: null,           cost: 2, desc: "Second Wind now recovers both shallow and deep wounds. For deep wounds, roll half your Fortitude score: each success closes one deep wound. Can now be used twice per short rest." },
          { name: "Paragon's Reflex",     prereq: "Quick Reflexes",        prereq2: null,           cost: 3, desc: "You may take one additional reaction per round with no action cost. The reaction must be a block, parry, counterstrike, or guardian block, not an offensive reaction." },
          { name: "Bladestorm",           prereq: "Whirlwind",             prereq2: null,           cost: 3, desc: "Once per encounter as a full action, make a separate melee attack against every creature within your weapon's reach. Each attack rolls independently. Each target defends independently. You may use Power Strike on any one of these attacks." },
          { name: "Indomitable Will",     prereq: "Indomitable",           prereq2: null,           cost: 3, desc: "You cannot be broken by morale, fear, or mental pressure. Immune to the Distracted condition from non-damage sources. When you take a mental wound, make a Resolve + Focus DC 5 roll: on success, do not take it." },
        ]
      },
    ]
  },

  {
    id: "gunslinger",
    name: "Gunslinger",
    tagline: "Adrenaline, instinct, and a gun that never runs dry of audacity.",
    desc: "The Gunslinger is a specialist of ranged pressure and resource management. Their core currency is Grit: a measure of adrenaline and focus that builds in the heat of a fight and fuels increasingly dangerous gambits. No other class rewards staying in close range with a firearm as well as the Gunslinger does.",
    pointsPerLevel: 2,
    resource: {
      name: "Grit",
      max: "Equal to your Composure score",
      gain: [
        "Score the first successful attack of an encounter",
        "Reduce a target to 0 wounds",
        "Successfully dodge an attack while at Close range to the attacker",
      ],
      reset: "Resets to 0 at the end of an encounter.",
    },
    progression: [
      { level: 1,  gains: "3 points (1 bonus). Pick Tier 1 skills." },
      { level: 2,  gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 3,  gains: "Tier 2 skills unlocked." },
      { level: 4,  gains: "Additional half action." },
      { level: 6,  gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 7,  gains: "Tier 3 (Precision) skills unlocked." },
      { level: 9,  gains: "Additional half action." },
      { level: 10, gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 12, gains: "Tier 4 (Mastery) skills unlocked." },
      { level: 13, gains: "Additional half action." },
      { level: 14, gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 17, gains: "Tier 5 (Legend) skills unlocked." },
      { level: 18, gains: "Ability score +1, one feat." },
    ],
    tiers: [
      {
        tier: 1, label: "Fundamentals",
        skills: [
          { name: "Quickdraw",            prereq: null,              prereq2: null,  cost: 1, desc: "Draw or stow a firearm as a free action once per turn." },
          { name: "Steady Aim",           prereq: null,              prereq2: null,  cost: 1, desc: "Spend a half action to aim. Reduce DC on your next firearm attack by 1." },
          { name: "Iron Sights",          prereq: null,              prereq2: null,  cost: 1, desc: "When making a firearm attack at long range, ignore the range penalty." },
          { name: "Grit I",               prereq: null,              prereq2: null,  cost: 1, desc: "Increase maximum Grit by 1." },
          { name: "Snap Shot",            prereq: null,              prereq2: null,  cost: 2, desc: "Once per turn, spend 1 Grit to make one firearm attack as a half action. The attack has +2 DC." },
          { name: "Weapon Maintenance",   prereq: null,              prereq2: null,  cost: 1, desc: "Misfires clear automatically at the start of your next turn instead of requiring a half action." },
          { name: "Gunfighter's Eye",     prereq: "Steady Aim",      prereq2: null,  cost: 2, desc: "When you have at least 2 Grit, you have -1 DC to hit." },
          { name: "Close and Personal",   prereq: null,              prereq2: null,  cost: 1, desc: "Negate the melee penalty when firing a one-handed firearm at a target within melee reach." },
          { name: "Light Step",           prereq: null,              prereq2: null,  cost: 1, desc: "When moving after firing, DC for enemy reactions against you increases by 2 until the start of your next turn." },
        ]
      },
      {
        tier: 2, label: "Trick Shots",
        skills: [
          { name: "Trick Shot - Leg",     prereq: "Snap Shot",         prereq2: null,  cost: 2, desc: "Spend 1 Grit. On a hit, target's movement is halved until the end of their next turn." },
          { name: "Trick Shot - Arm",     prereq: "Snap Shot",         prereq2: null,  cost: 2, desc: "Spend 1 Grit. On a hit, target's next attack has +1 DC." },
          { name: "Trick Shot - Disarm",  prereq: "Snap Shot",         prereq2: null,  cost: 2, desc: "Spend 1 Grit. On a hit, make a Composure + Wits opposed check vs target's Strength or Agility. On success, knock their weapon to the ground." },
          { name: "Fan the Hammer",       prereq: "Snap Shot",         prereq2: null,  cost: 2, desc: "Spend an action to fire up to 3 shots at one or more targets within Close range. Each shot is a separate attack at +2 DC. Consume all remaining shots in the weapon." },
          { name: "Cover Fire",           prereq: "Steady Aim",        prereq2: null,  cost: 2, desc: "As an action, spend 2 Grit to lay down suppressing fire on a 4m radius area. Any creature that moves through or acts in that area until your next turn has +1 DC on all rolls." },
          { name: "Grit II",              prereq: "Grit I",            prereq2: null,  cost: 1, desc: "Increase maximum Grit by 1." },
          { name: "Threat Assessment",    prereq: "Iron Sights",       prereq2: null,  cost: 1, desc: "When you enter an encounter or study an enemy as an interact action, identify their highest and lowest stat." },
          { name: "Fast Reload",          prereq: "Weapon Maintenance",prereq2: null,  cost: 2, desc: "Reduce reload cost by one step (action to half action to free action). Cannot reduce below free." },
          { name: "Nerves of Steel",      prereq: "Gunfighter's Eye",  prereq2: null,  cost: 2, desc: "When you have 2 or more Grit, ignore the first +1 DC from any source that round." },
          { name: "Drifter's Step",       prereq: "Light Step",        prereq2: null,  cost: 1, desc: "Once per turn, move up to half your movement as a free action immediately after firing." },
        ]
      },
      {
        tier: 3, label: "Precision",
        skills: [
          { name: "Dead Eye",             prereq: "Steady Aim",        prereq2: "Threat Assessment", cost: 2, desc: "Once per turn, spend a half action before attacking to target a specific body part. The GM determines the additional effect on hit. DC increases by 2." },
          { name: "Trick Shot - Headshot",prereq: "Trick Shot - Arm",  prereq2: "Trick Shot - Leg", cost: 3, desc: "Spend 2 Grit. Target a distracted or unaware enemy. On hit, add successes equal to your Wits score to damage. Once per encounter per target." },
          { name: "Called Shot Mastery",  prereq: "Dead Eye",          prereq2: null,  cost: 1, desc: "When using Dead Eye, reduce the additional DC from +2 to +1." },
          { name: "Dual Wield",           prereq: "Quickdraw",         prereq2: null,  cost: 2, desc: "When wielding two one-handed firearms, make one attack with each as part of the same action. The second attack has +1 DC." },
          { name: "Covering Retreat",     prereq: "Drifter's Step",    prereq2: null,  cost: 2, desc: "When you move away from an enemy, you may make one free firearm attack against them as a reaction. Costs no action next turn." },
          { name: "Grit III",             prereq: "Grit II",           prereq2: null,  cost: 1, desc: "Increase maximum Grit by 1." },
          { name: "Hair Trigger",         prereq: "Weapon Maintenance",prereq2: null,  cost: 1, desc: "Increase the DC required to trigger your weapon's Misfire by 1: it now requires two or more failures, not all failures." },
          { name: "Combat Reload",        prereq: "Fast Reload",       prereq2: null,  cost: 2, desc: "Once per encounter, reload your weapon as a free action." },
          { name: "Suppressor Craft",     prereq: null,                prereq2: null,  cost: 1, desc: "You can fashion or acquire suppressors for your firearms. Stealth DC after firing drops from 7 to 4. Two suppressors can be used per encounter before they burn out." },
          { name: "Predator's Read",      prereq: "Threat Assessment", prereq2: null,  cost: 2, desc: "When an enemy you can see declares an action, spend 1 Grit as a reaction to make a Wits + Insight check (DC 6). On success, you know exactly what they intend to do before they do it." },
        ]
      },
      {
        tier: 4, label: "Mastery",
        skills: [
          { name: "The Last Round",       prereq: "Combat Reload",     prereq2: null,  cost: 2, desc: "When you fire the last shot in a weapon before reloading, that attack adds 1 automatic success." },
          { name: "Two-Gun Tempo",        prereq: "Dual Wield",        prereq2: null,  cost: 2, desc: "When dual wielding, the second attack no longer has +1 DC." },
          { name: "Execution",            prereq: "Trick Shot - Headshot",prereq2: null, cost: 3, desc: "Once per encounter, when a target is below half their shallow wounds, spend 2 Grit to make a single attack that adds successes equal to your full Composure score as bonus damage on hit." },
          { name: "Grit IV",              prereq: "Grit III",          prereq2: null,  cost: 1, desc: "Increase maximum Grit by 1." },
          { name: "Point Blank Mastery",  prereq: "Close and Personal",prereq2: null,  cost: 2, desc: "When firing within Close range, add 1 additional damage die." },
          { name: "Phantom Reload",       prereq: "Suppressor Craft",  prereq2: "Fast Reload", cost: 2, desc: "Your reloads no longer break stealth or count as noise if you have the Suppressor Craft skill." },
          { name: "Read the Room",        prereq: "Predator's Read",   prereq2: null,  cost: 2, desc: "At the start of each encounter before initiative is rolled, you may ask the GM one tactical question about the environment or enemies. The answer is honest and specific." },
          { name: "Suppressing Mastery",  prereq: "Cover Fire",        prereq2: null,  cost: 2, desc: "Cover Fire no longer costs Grit. The DC increase it applies rises from +1 to +2." },
          { name: "Gunfighter's Reflex",  prereq: "Covering Retreat",  prereq2: null,  cost: 3, desc: "Once per turn, when an enemy within Close range attacks you, you may spend 1 Grit to make a single firearm attack against them as a reaction. This costs no action next turn." },
        ]
      },
      {
        tier: 5, label: "Legend",
        skills: [
          { name: "Grit V",               prereq: "Grit IV",           prereq2: null,  cost: 1, desc: "Increase maximum Grit by 1." },
          { name: "One in the Chamber",   prereq: "The Last Round",    prereq2: null,  cost: 2, desc: "You always have one shot available, regardless of reload state. Once per encounter, you may fire this shot even if your weapon is empty. It cannot be a Trick Shot." },
          { name: "Perfect Draw",         prereq: "Quickdraw",         prereq2: null,  cost: 3, desc: "You cannot be surprised. When initiative is rolled, you always act in the first round regardless of result. If you would act last, you act second-to-last instead." },
          { name: "The Long Shot",        prereq: "Called Shot Mastery",prereq2: null,  cost: 3, desc: "Once per encounter, make a firearm attack at any range you can see with no range DC penalty. Requires one full action to aim beforehand." },
          { name: "Killshot",             prereq: "Execution",         prereq2: null,  cost: 3, desc: "When you reduce a target to 0 wounds, all enemies that witnessed it must make a Resolve + Focus check (DC 6) or become Distracted until the end of their next turn." },
          { name: "Unstoppable Tempo",    prereq: "Two-Gun Tempo",     prereq2: null,  cost: 3, desc: "When you score a successful attack, you may immediately make one additional Snap Shot attack as a free action. Once per turn." },
          { name: "Cold Blood",           prereq: "Grit I",            prereq2: null,  cost: 4, desc: "You no longer gain or spend Grit. Instead, all skills that required Grit now activate for free. All skills that granted bonuses for having Grit are permanently active. Requires all Grit upgrades I through IV." },
        ]
      },
    ]
  },

  {
    id: "source-weaver",
    name: "Source Weaver",
    tagline: "Raw manipulation of the weave - power without the crutch of memorised form.",
    desc: "The Source Weaver does not cast spells; they sculpt them. While other spellcasters work from known forms, the Weaver manipulates the Source strings directly, achieving effects through raw will and somatic precision. This makes them unpredictable, flexible, and increasingly devastating as their Raw Casting capacity grows.",
    pointsPerLevel: 2,
    note: "Gain 1 point in 2 different schools of magic at character creation. Tier unlocks happen at odd levels: 1, 3, 5, 7, 9, etc.",
    progression: [
      { level: 1,  gains: "3 points (1 bonus). Tier 1 unlocked. 1 point in 2 schools." },
      { level: 3,  gains: "Tier 2 unlocked." },
      { level: 5,  gains: "Tier 3 unlocked." },
      { level: 7,  gains: "Tier 4 unlocked." },
      { level: 9,  gains: "Tier 5 unlocked." },
      { level: 11, gains: "Tier 6 unlocked." },
      { level: 13, gains: "Tier 7 unlocked." },
      { level: 15, gains: "Tier 8 unlocked." },
      { level: 17, gains: "Tier 9 unlocked." },
      { level: 19, gains: "Tier 10 unlocked." },
    ],
    tiers: [
      {
        tier: 1, label: "Foundations",
        skills: [
          { name: "Raw Casting I",   prereq: null, prereq2: null, cost: 2, desc: "You can channel up to 2 spell points into a raw cast." },
          { name: "Gesture Focus",   prereq: null, prereq2: null, cost: 1, desc: "Gain +1 success on spellcasting checks when raw casting." },
          { name: "Proficiencies",   prereq: null, prereq2: null, cost: 1, desc: "Gain proficiency in one of: Arcana, Insight, Performance, History, or Nature." },
          { name: "Tools",           prereq: null, prereq2: null, cost: 1, desc: "Gain one point in Calligrapher's Supplies." },
        ]
      },
      {
        tier: 2, label: "Expanding Capacity",
        skills: [
          { name: "Efficient Weaving", prereq: null,             prereq2: null, cost: 2, desc: "Raw casting now costs half an action less." },
          { name: "School Insight I",  prereq: null,             prereq2: null, cost: 1, desc: "For each point in a school, reduce DC to learn scrolls by 1." },
          { name: "Raw Casting II",    prereq: "Raw Casting I",  prereq2: null, cost: 2, desc: "You can channel up to 4 spell points." },
          { name: "Glyph Creation I",  prereq: null,             prereq2: null, cost: 2, desc: "Once per long rest, store a normal spell in an object or space as a glyph. Spell level limited by the level of this feature." },
        ]
      },
      {
        tier: 3, label: "Deepening Control",
        skills: [
          { name: "Raw Casting III",   prereq: "Raw Casting II", prereq2: null, cost: 2, desc: "You can channel up to 6 spell points." },
          { name: "School Insight II", prereq: "School Insight I",prereq2: null, cost: 2, desc: "Gain +1 success when learning spells from a school with 3+ points." },
          { name: "Raw Casting IV",    prereq: "Raw Casting III",prereq2: null, cost: 2, desc: "You can channel up to 8 spell points." },
          { name: "Glyph Creation II", prereq: "Glyph Creation I",prereq2: null, cost: 1, desc: "Once per long rest, store a normal spell in an object or space as a glyph. Spell level limited by the level of this feature." },
        ]
      },
      {
        tier: 4, label: "Mastery",
        skills: [
          { name: "Somatic Surge",    prereq: null,              prereq2: null, cost: 3, desc: "Once per short rest, raw cast without expending spell points." },
          { name: "Perfect Flow",     prereq: null,              prereq2: null, cost: 3, desc: "Raw casting ignores concentration checks." },
          { name: "Raw Casting V",    prereq: "Raw Casting IV",  prereq2: null, cost: 2, desc: "You can channel up to 10 spell points." },
          { name: "Glyph Creation III",prereq: "Glyph Creation II",prereq2: null, cost: 1, desc: "Once per long rest, store a normal spell in an object or space as a glyph. Spell level limited by the level of this feature." },
        ]
      },
      {
        tier: 5, label: "Ascendant",
        skills: [
          { name: "Arcane Conduit",   prereq: null,              prereq2: null, cost: 2, desc: "Twice per long rest, raw cast any spell without components." },
          { name: "Raw Casting VI",   prereq: "Raw Casting V",   prereq2: null, cost: 2, desc: "You can channel up to 12 spell points." },
          { name: "Glyph Creation IV",prereq: "Glyph Creation III",prereq2: null, cost: 0, desc: "Once per long rest, store a normal spell in an object or space as a glyph. Spell level limited by the level of this feature." },
        ]
      },
      {
        tier: 6, label: "Grand Weaver",
        skills: [
          { name: "Master Weaver",    prereq: null,              prereq2: null, cost: 0, desc: "Reduce learning time and DC for all spell learning by 1 (stacks with School Insight)." },
          { name: "Raw Casting VII",  prereq: "Raw Casting VI",  prereq2: null, cost: 0, desc: "You can channel up to 14 spell points." },
          { name: "Glyph Creation V", prereq: "Glyph Creation IV",prereq2: null, cost: 0, desc: "Once per long rest, store a normal spell in an object or space as a glyph. Spell level limited by the level of this feature." },
        ]
      },
      {
        tier: 7, label: "Supreme Conduit",
        skills: [
          { name: "Raw Casting VIII", prereq: "Raw Casting VII", prereq2: null, cost: 0, desc: "You can channel up to 16 spell points." },
          { name: "Glyph Creation VI",prereq: "Glyph Creation V",prereq2: null, cost: 0, desc: "Once per long rest, store a normal spell in an object or space as a glyph. Spell level limited by the level of this feature." },
        ]
      },
      {
        tier: 8, label: "Transcendent",
        skills: [
          { name: "Raw Casting IX",               prereq: "Raw Casting VIII",prereq2: null, cost: 0, desc: "You can channel up to 18 spell points." },
          { name: "All-Components-Forgotten Casting", prereq: null,           prereq2: null, cost: 0, desc: "Once per day, cast a normal (non-raw) spell ignoring all components." },
        ]
      },
      {
        tier: 9, label: "Mythic",
        skills: [
          { name: "Glyph Creation VII",prereq: "Glyph Creation VI",prereq2: null, cost: 0, desc: "Can store higher-level spells in glyphs by investing additional points (scales with skill)." },
        ]
      },
      {
        tier: 10, label: "Ascension",
        skills: [
          { name: "Weaver's Ascension",prereq: null,              prereq2: null, cost: 0, desc: "Unlock ultimate passive: your raw casting DC is reduced by 2, and all school effects trigger additional benefits." },
        ]
      },
    ]
  },

  {
    id: "ranger",
    name: "Ranger",
    tagline: "The wilderness remembers what cities forget - patience, precision, and the kill.",
    desc: "Rangers are hunters who have made the wild their weapon. They read terrain like text, track quarry through darkness and mud, and end fights before they begin with the right shot from the right shadow. Their core tool is Hunter's Mark: a focused awareness of a single prey that sharpens every attack and makes them impossible to shake. The higher the tier, the more total the predator.",
    pointsPerLevel: 2,
    progression: [
      { level: 1,  gains: "3 points (1 bonus). Pick Tier 1 skills." },
      { level: 2,  gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 3,  gains: "Tier 2 skills unlocked." },
      { level: 4,  gains: "Additional half action." },
      { level: 6,  gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 7,  gains: "Tier 3 skills unlocked." },
      { level: 9,  gains: "Additional half action." },
      { level: 10, gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 12, gains: "Tier 4 skills unlocked." },
      { level: 13, gains: "Additional half action." },
      { level: 14, gains: "Ability score +1, one feat, proficiency in 2 weapons." },
      { level: 17, gains: "Tier 5 (Legend) skills unlocked." },
      { level: 18, gains: "Ability score +1, one feat." },
    ],
    tiers: [
      {
        tier: 1, label: "Fundamentals",
        skills: [
          { name: "Hunter's Mark I",      prereq: null,                  prereq2: null, cost: 1, desc: "As a half action, mark one creature you can see. While marked, your attacks against them automatically add 1 success. Only one creature can be marked at a time. Marking a new creature removes the previous mark. The mark ends when the target dies or at the end of the encounter." },
          { name: "Keen Eye",             prereq: null,                  prereq2: null, cost: 1, desc: "Your DC for Perception checks is reduced by 1." },
          { name: "Natural Tracker",      prereq: null,                  prereq2: null, cost: 1, desc: "Add 1 success to all Tracking checks. You can follow a trail up to 24 hours old without penalty." },
          { name: "Bow Training",         prereq: null,                  prereq2: null, cost: 1, desc: "When using a bow, notching an arrow costs no action: you may fire and notch as part of the same attack. Additionally, the first ranged attack you make each turn ignores the penalty for having an enemy in melee range." },
          { name: "Patient Stance",       prereq: null,                  prereq2: null, cost: 1, desc: "If you have not moved this turn, your next ranged attack has its DC reduced by 1. This applies only once per turn." },
          { name: "Light Foot",           prereq: null,                  prereq2: null, cost: 1, desc: "While moving carefully, you do not count as moving for the purpose of Stealth checks: your pace leaves no noise signature." },
          { name: "Natural Attunement",   prereq: null,                  prereq2: null, cost: 2, desc: "You are deeply attuned to the wilds. Gain 1 point in Animal Handling and communicate intent to non-hostile animals through gesture: they will not flee from you without cause. You can also identify medicinal, edible, and toxic plants on sight; when treating wounds with foraged herbs during a short rest, your Medicine DC is reduced by 1." },
        ]
      },
      {
        tier: 2, label: "Expanding Toolkit",
        skills: [
          { name: "Hunter's Mark II",     prereq: "Hunter's Mark I",     prereq2: null, cost: 1, desc: "Your Hunter's Mark now adds 2 automatic successes against the marked target instead of 1." },
          { name: "Camouflage",           prereq: "Light Foot",          prereq2: null, cost: 2, desc: "In natural terrain (forest, marsh, grassland, rocky ground), you may take the Hide action as a half action instead of an action." },
          { name: "Quick Notch",          prereq: "Bow Training",        prereq2: null, cost: 2, desc: "Once per turn, you may make one ranged bow attack as a half action. The attack rolls normally with no penalty." },
          { name: "Predator's Patience",  prereq: "Patient Stance",      prereq2: null, cost: 1, desc: "If you have not moved and have not been attacked since the start of your last turn, your next ranged attack adds 1 additional damage die." },
          { name: "Beast Bond",           prereq: "Natural Attunement",  prereq2: null, cost: 2, desc: "You bond with a small or medium beast companion. It follows commands, can scout ahead, and alerts you to unseen threats: granting you +1 success on Perception checks while it is within 30m. The beast will not enter combat unless you have Beast Companion." },
          { name: "Anatomy Study",        prereq: "Keen Eye",            prereq2: null, cost: 1, desc: "When you study a creature as an Interact action, you learn their current shallow wound total, their current deep wound total, and which of their stats is lowest." },
          { name: "Conceal Trail",        prereq: "Natural Tracker",     prereq2: null, cost: 1, desc: "When leading others through natural terrain, all Tracking DCs to follow your group increase by 2. You can move a group at full pace without leaving a readable trail." },
          { name: "Wilderness Survival",  prereq: "Natural Tracker",     prereq2: null, cost: 1, desc: "Reduce DC by 1 for Navigation, Foraging, and Survival checks in natural environments. You can always find shelter and potable water given enough time." },
          { name: "Nature's Poison",      prereq: "Natural Attunement",  prereq2: null, cost: 2, desc: "You can craft basic natural poisons from foraged ingredients (DC 6, 3 successes). The poison deals 1 wound success per turn for 2 turns. Crafting takes 30 minutes. These count as Tier 1 poisons for the purposes of other features." },
        ]
      },
      {
        tier: 3, label: "The Hunt",
        skills: [
          { name: "Hunter's Mark III",    prereq: "Hunter's Mark II",    prereq2: null, cost: 1, desc: "Your Hunter's Mark now adds 3 automatic successes. Additionally, you always know the general direction and distance of your marked target as long as they are within 1 km." },
          { name: "Vanish",               prereq: "Camouflage",          prereq2: null, cost: 2, desc: "Once per short rest as a half action, you disappear from sight even if you are currently visible: enemies lose track of your position. You are hidden until you attack or the GM determines your cover is broken." },
          { name: "Crippling Shot",       prereq: "Quick Notch",         prereq2: null, cost: 2, desc: "Once per turn when you hit a marked target, you may choose to cripple a limb rather than deal normal wounds. The target's movement speed is halved until the end of their next turn. Does not stack." },
          { name: "Pinpoint Shot",        prereq: "Predator's Patience", prereq2: null, cost: 2, desc: "Once per turn you may add 2 additional dice to a ranged attack. The attack has +1 DC. Can be combined with Quick Notch." },
          { name: "Beast Companion",      prereq: "Beast Bond",          prereq2: null, cost: 2, desc: "Your bonded beast will now fight alongside you. It acts on your initiative, has attacks equal to 1 damage die using Agility, and shares your Wits for Perception. It has shallow wounds equal to your Fortitude and a single deep wound slot. If it dies it can be rebonded with a new animal after a long rest." },
          { name: "Relentless Pursuer",   prereq: "Conceal Trail",       prereq2: null, cost: 1, desc: "When pursuing a marked target, difficult terrain does not reduce your movement. You cannot lose the trail of a marked creature regardless of time elapsed or conditions." },
          { name: "Field Medic",          prereq: "Natural Attunement",  prereq2: null, cost: 2, desc: "As a half action you may stabilize one deep wound on yourself or an adjacent creature without making a roll. Usable once per short rest. You still need to stop the wound clock: this simply prevents it from ticking further." },
          { name: "Quarry's Weakness",    prereq: "Anatomy Study",       prereq2: null, cost: 2, desc: "When you have studied a creature, you identify a vulnerability in their stance or armor coverage. Your attacks against that creature add 1 additional die." },
          { name: "Rain of Arrows",       prereq: "Quick Notch",         prereq2: null, cost: 2, desc: "As a single action, make one ranged attack roll and apply it against two adjacent targets within range. Each target defends independently." },
        ]
      },
      {
        tier: 4, label: "Apex",
        skills: [
          { name: "Hunter's Mark IV",     prereq: "Hunter's Mark III",   prereq2: null, cost: 1, desc: "Your Hunter's Mark now adds 4 automatic successes. Your marked target cannot benefit from the Hidden condition against you: you always know exactly where they are." },
          { name: "Ghost Step",           prereq: "Vanish",              prereq2: null, cost: 2, desc: "You may move at full speed without breaking stealth in any terrain. Difficult terrain does not impose penalties on your Stealth checks." },
          { name: "Execution Shot",       prereq: "Quarry's Weakness",   prereq2: null, cost: 2, desc: "Once per encounter when attacking a creature with 3 or more shallow wounds, add successes equal to your Composure score as bonus damage on a hit. Does not require a mark." },
          { name: "Death From Above",     prereq: "Pinpoint Shot",       prereq2: null, cost: 3, desc: "Once per encounter as a full action, take complete aim and fire. The shot ignores all armor soak. Requires you to have not moved this turn." },
          { name: "Pack Tactics",         prereq: "Beast Companion",     prereq2: null, cost: 2, desc: "When you and your beast companion both attack the same target in the same turn, both attacks add 1 additional automatic success." },
          { name: "Longbow Mastery",      prereq: "Quick Notch",         prereq2: null, cost: 2, desc: "When using a longbow, add 1 automatic success to all attack rolls and ignore the +2 DC penalty for targets in melee range entirely." },
          { name: "Toxin Refinement",     prereq: "Nature's Poison",     prereq2: null, cost: 2, desc: "Your crafted natural poisons are treated as 1 tier higher. Tier 1 acts as Tier 2 in damage and duration. Crafting time is halved. You may apply a natural poison as a free action once per turn." },
          { name: "Trap Mastery",         prereq: "Relentless Pursuer",  prereq2: null, cost: 2, desc: "You may set a mechanical trap as a half action. Creatures that trigger it make a Wits + Perception check (DC 7) or are restrained and take 2 shallow wounds. You may have up to 3 traps active simultaneously." },
          { name: "Arrow Storm",          prereq: "Rain of Arrows",      prereq2: null, cost: 2, desc: "As an action, saturate a 4m radius area within bow range with arrows. Every creature in the area makes a Fortitude + Toughness roll (DC 6). On failure they take 1 shallow wound. On success they take nothing. Line of sight to the area is required." },
        ]
      },
      {
        tier: 5, label: "Legend",
        skills: [
          { name: "Hunter's Mark V",      prereq: "Hunter's Mark IV",    prereq2: null, cost: 2, desc: "Your Hunter's Mark now adds 5 automatic successes. While a target is marked, they cannot benefit from any defensive ability that requires them to not be observed: including Perfect Guard, Vanish, and similar. The mark transfers to a new target as a free action." },
          { name: "Perfect Predator",     prereq: "Hunter's Mark IV",    prereq2: "Ghost Step", cost: 3, desc: "Once per encounter when you kill your marked target, all allies within line of sight gain 1 automatic success on their next attack roll this turn: the kill echoes through the battlefield. Additionally you may immediately mark a new target as a free action." },
          { name: "The Killing Ground",   prereq: "Arrow Storm",         prereq2: null, cost: 3, desc: "Once per encounter as a full action, designate a 10m radius zone within bow range. For 2 rounds, any creature that moves within the zone takes 1 shallow wound automatically at the end of each of their turns. Allies are excluded. Requires you to not have moved this turn." },
          { name: "Legendary Shot",       prereq: "Death From Above",    prereq2: null, cost: 3, desc: "Once per encounter, make a single ranged attack. If it hits and deals at least 1 wound success, the target automatically takes a deep wound in addition to normal damage: roll on the deep wound table as normal. Requires one full action to aim beforehand. Cannot be combined with other shot enhancements." },
          { name: "One With Nature",      prereq: "Ghost Step",          prereq2: null, cost: 3, desc: "In natural terrain you are effectively invisible to non-magical detection while hidden: no amount of Perception points allows passive detection. You are immune to being surprised in natural environments. Creatures with fewer Wits points than your Stealth points cannot detect you by any non-magical means." },
          { name: "Alpha's Bond",         prereq: "Pack Tactics",        prereq2: null, cost: 3, desc: "Your beast companion gains shallow wounds equal to twice your Fortitude and two deep wound slots. Once per encounter it may take a reaction to intercept an attack aimed at you: the attack resolves against the companion instead of you." },
          { name: "Relentless Hunter",    prereq: "Relentless Pursuer",  prereq2: null, cost: 3, desc: "You cannot be shaken from a hunt. Your marked target has +1 DC on all rolls to escape, hide, or break line of sight from you. At the start of each of their turns they must make a Resolve + Focus check (DC 6) or be Distracted: the weight of being hunted breaks focus." },
        ]
      },
    ]
  },
];

var SUBCLASSES = [
  {
    id: "spellblade",
    name: "Spellblade",
    tagline: "Magic woven through steel.",
    desc: "The Spellblade channels Source strings directly through their weapons, creating martial effects that no fighter or caster alone can replicate. Their resource is Channeling Points, fuelled by their Resolve score.",
    pointsNote: "Gain 2 subclass points every level. Subclasses are universal.",
    resource: {
      name: "Channeling Points",
      max: "Equal to your Resolve score",
      gain: ["Spent to activate abilities. Refreshes on a short rest."],
      reset: "Refreshes on short rest."
    },
    skills: [
      { name: "Resonant Channeling", prereq: null, cost: 2, desc: "As a half action, channel energy into a weapon for 4 rounds. Choose one effect. Kinetic: your attacks cannot be blocked by weapons. Thermal: wounds apply either freeze (movement reduced by 5m) or burn (target takes 1 additional success but deep wounds require 3 successes to inflict, as the wound is partially cauterised). Luminal: weapon creates bright flashes, targets hit become Distracted. Channeling points equal your Resolve score. Threshold saves against your effects require successes equal to your Resolve score." },
      { name: "Martial Resonance", prereq: "Resonant Channeling", cost: 0, desc: "Passive. While conscious and not incapacitated, you sense magical strings around you within 10 meters. This grants partial awareness of any magic used within 10 meters of you." },
      { name: "Harmonic Disruption", prereq: "Resonant Channeling", cost: 1, desc: "Vocal Component. As a half action, spend 1 channeling point to emit a disorienting frequency targeting a creature within 10 meters. They make a threshold save (Composure + Focus) or lose their next half action. Creatures relying on echolocation or heightened hearing have the DC increased by 2." },
      { name: "String Snap", prereq: "Resonant Channeling", cost: 1, desc: "Somatic Component. As a half action, spend 1 channeling point to violently manipulate magical strings. Choose one: Pull (drag a creature within 10m up to 5m toward you), Push (shove a creature within 10m up to 5m away), or Bind (a creature within 10m cannot move more than 5m from their current position until the end of their next turn)." },
      { name: "Anchored Defense", prereq: "Resonant Channeling", cost: 1, desc: "Material Component. As a half action, spend 1 channeling point to activate a defensive field around you. This field soaks 3 successes and lasts for 1 minute or until broken." },
      { name: "Enhanced Techniques", prereq: "Any two component techniques", cost: 2, desc: "Your component techniques become more powerful. Harmonic Disruption now affects all creatures within 20 meters and deals 3 wound successes on failure. String Snap range increases to 20 meters. Anchored Defense increases to 5 successes." },
      { name: "Combat Mastery", prereq: "Enhanced Techniques", cost: 1, desc: "You gain +3 to your maximum channeling points." }
    ]
  },
  {
    id: "school-of-the-viper",
    name: "School of the Viper",
    tagline: "Exploit weakness, apply preparation, strike true.",
    desc: "The School of the Viper turns knowledge into lethality. Its practitioners combine weapon material expertise, alchemical oil crafting, and an eye for biological weakness into a focused hunting discipline.",
    pointsNote: "Gain 2 subclass points every 3 levels.",
    skills: [
      { name: "Quick Weapon Study", prereq: null, cost: 0, desc: "You gain proficiency in one additional weapon material. Choose between Boron-lattice, Sanctified Steel, Red Meteorite, or Silver." },
      { name: "Oil Crafter I", prereq: null, cost: 1, desc: "You can use your alchemical tools to craft oils of Tier I." },
      { name: "Quick Application", prereq: "Oil Crafter I", cost: 2, desc: "Once a turn as a half action you may apply a poison or oil on a weapon." },
      { name: "Oil Crafter II", prereq: "Oil Crafter I", cost: 2, desc: "You may craft oils of Tier II. Requires level 8." },
      { name: "Oil Crafter III", prereq: "Oil Crafter II", cost: 2, desc: "You may craft oils of Tier III. Requires level 14." },
      { name: "Quickswap", prereq: "Quick Weapon Study", cost: 1, desc: "Once a turn you may switch the weapon you are wielding as part of the weapon attack." },
      { name: "Quick Weapon Study II", prereq: null, cost: 1, desc: "You gain proficiency in one additional weapon material. Choose between Boron-lattice, Sanctified Steel, Red Meteorite, or Silver." },
      { name: "Find Weakness", prereq: null, cost: 2, desc: "When studying a creature as an action or using a feature such as Unnatural Sense, you gain an additional success when trying to find a creature's Weak Spot." },
      { name: "Exploitation of Weakness", prereq: "Find Weakness", cost: 1, desc: "When rolling to hit or using an ability to exploit a creature's Weak Spot, the DC is decreased by 1." }
    ]
  },
  {
    id: "hemomancy",
    name: "Hemomancy",
    tagline: "Blood remembers. You just remind it.",
    desc: "Hemomancers do not draw power from blood as an abstraction; they manipulate it as a physical substance. They feel its movement through living bodies, read its history from surfaces, and shape it whether it is pooled on the ground or still circulating inside someone. The practice is as useful outside of combat as inside it: a hemomancer who walks into a room can tell you how many people bled there, when, and how badly.",
    pointsNote: "Gain 2 subclass points every level. Subclasses are universal.",
    resource: {
      name: "Hemomancy Points",
      max: "Equal to your Intellect score",
      gain: ["Whenever a creature within 15m takes wounds, you may harvest as a reaction (cost: half action), gaining 1 point per wound instance."],
      reset: "Resets at the start of each encounter."
    },
    skills: [
      {
        name: "Sanguine Sense",
        prereq: null, cost: 0,
        desc: "Your awareness extends into the blood of living creatures and into blood that has already been spilled. Passive effects: you can sense the presence and rough location of any bleeding or wounded creature within 15m even through walls and darkness; you always know the wound state of any creature you can see without studying them; you can read the history of spilled blood on any surface by touch: how long ago it was shed, roughly how much, and the general emotional state of the creature it came from (fear, rage, calm). This last use works hours or days after the fact and has significant investigative utility."
      },
      {
        name: "Sanguine Harvest",
        prereq: "Sanguine Sense", cost: 1,
        desc: "Once per round when any creature within 15m takes wounds, you may harvest as a free action instead of a reaction, gaining 1 hemomancy point. Your maximum hemomancy points increases by 2. Outside of combat you can harvest ambient traces of old blood from a location with a minute of concentration: this yields 1 point usable only for non-combat applications of your other skills."
      },
      {
        name: "Blood Shaping",
        prereq: "Sanguine Sense", cost: 1,
        desc: "You can physically move and shape spilled blood as a free action, with fine control up to 10m. The blood moves at walking pace and can be formed into any shape you can imagine: a trail leading somewhere, a symbol on the floor, a coating over a surface, a thin obscuring film across a doorway or window. This is precise enough to write with, to coat a lock mechanism, to fill a mould, or to create a visual distraction. You cannot use this to harm creatures directly but the GM should treat it as a general-purpose tool for any situation where controlling a liquid substance would be useful."
      },
      {
        name: "Vital Pressure",
        prereq: "Sanguine Sense", cost: 2,
        desc: "As a half action, spend 1 hemomancy point to manipulate the blood pressure inside a living creature within 15m. The effect is your choice and the GM adjudicates what is reasonable given the situation. Examples of what you can do: flood their extremities with blood making fine motor actions harder (next action requiring precise hands or fingers has +1 DC), restrict flow to their legs slowing movement (speed halved until end of next turn), cause a rush of blood to the head disorienting them (they count as Distracted until end of next turn), or destabilise a wound they have had stabilised (restarting its countdown). You are not dealing damage; you are interfering with a biological system. Does not work on creatures without blood."
      },
      {
        name: "Clotting Touch",
        prereq: "Sanguine Sense", cost: 1,
        desc: "As a half action, spend 1 hemomancy point to accelerate clotting in yourself or a creature you can touch or see within 15m. Choose one: immediately stabilise one deep wound without rolling, extend all active deep wound countdowns on the target by 3 rounds, or stop all ongoing bleed effects on the target entirely. Can be used as a reaction (half action cost from next turn) when a creature within range takes a deep wound. Outside of combat this works as field medicine: stabilising injured creatures without rolls, stopping bleeding from accidents, and buying time for proper treatment."
      },
      {
        name: "Sanguine Flood",
        prereq: "Blood Shaping", cost: 3,
        desc: "Once per encounter as an action, spend 3 hemomancy points to draw every drop of spilled blood within 20m (from the floor, walls, wounds, and surfaces) into a mass you fully control. You may place it anywhere within 20m as part of this action. What you do with it is open: flood a chokepoint to create difficult terrain and obscure the floor, coat a creature or object entirely (blinding a creature or making a surface impossible to grip), raise a dense barrier that provides cover, collapse it onto a door or mechanism to jam it, or hurl it at a creature to blind and disorient them until they spend an action clearing it. The mass is large enough to fill roughly a 3m cube. The GM adjudicates specific outcomes: the ability gives you a large volume of fluid under precise control, and its uses are limited by imagination and context."
      },
      {
        name: "Vital Surge",
        prereq: "Sanguine Sense", cost: 2,
        desc: "As a half action, spend 1 hemomancy point to flood your own body with a controlled surge of blood: increasing pressure, oxygenation, and muscular response beyond their natural limits. Until the end of your next turn choose two of the following: your movement increases by 5m; your next physical attack or athletic check adds 2 dice; you do not fall unconscious when you would from wound count and instead remain at 1 shallow wound until the surge ends; or you ignore the mechanical penalties from one active deep wound condition. When the surge ends you take 1 shallow wound as the strain settles into your body: this cannot be prevented or reduced. You can spend additional hemomancy points at the time of activation to extend the duration, 1 point per additional round."
      },
      {
        name: "Blood Reading",
        prereq: "Sanguine Sense", cost: 2,
        desc: "By holding a sample of a creature's blood (fresh or dried, as little as a smear), you can read impressions from it over the course of a minute. The depth of what you learn scales with how recently the blood was shed and how much you have. Fresh blood from a living creature tells you their current emotional state, their general physical condition, and whether they are under any magical influence. Blood shed within a day can tell you the last strong emotion the creature felt, a fragmented impression of what they last saw, and their rough direction of travel when they bled. Older blood tells you only broad facts: species, approximate age, whether they died or survived. This works on any creature with blood. Used on a corpse at the scene of a death, it can reconstruct the final moments with enough clarity to be useful as evidence or investigation. The GM determines what specific impressions are available given the circumstances."
      },
      {
        name: "Sanguine Bond",
        prereq: "Vital Surge", cost: 3,
        desc: "By spending a minute and voluntarily bleeding yourself for 1 shallow wound (which cannot be prevented), you can establish a persistent blood bond with one willing creature you touch. The bond lasts until a long rest or until either of you chooses to sever it. While bonded: you always know the wound state and emotional state of the bonded creature regardless of distance; either of you can spend a hemomancy point as a free action to cause the other to immediately stabilise one deep wound at range, as though Clotting Touch were applied; and once per encounter you may redirect a single instance of damage: when the bonded creature takes wounds, you may choose to take half those wounds yourself and they take the other half, split before defensive rolls. The wound you take from redirection cannot be stabilised until a short rest. You may only maintain one Sanguine Bond at a time. Severing the bond is a free action but leaves both parties with a faint persistent awareness of absence for the rest of the day."
      }
    ]
  },
  {
    id: "radiation",
    name: "Radiation",
    tagline: "Decay, heat, and the slow unravelling of matter itself.",
    desc: "The Radiation subclass channels destructive atomic energy: breaking down objects, poisoning creatures, and unleashing bursts of superheated force. Most abilities spend spell points. Radiation points referenced in Heat Emission are equivalent to spell points.",
    pointsNote: "Gain 2 subclass points every level. Subclasses are universal.",
    skills: [
      { name: "Expanded Spell List",  prereq: null,                               cost: 0, desc: "You add Melt and Weld to your spell list." },
      { name: "Energy Absorption",    prereq: null,                               cost: 1, desc: "Reaction (half action): When you take damage from fire, lightning, or radiant sources, you absorb 3 successes. When doing so you regain spell points equal to the amount of successes absorbed." },
      { name: "Molecular Disruption", prereq: null,                               cost: 1, desc: "As a half action, spend 2 spell points to target an object within 6 meters. Non-magical objects made of metal, wood, or stone begin to decay rapidly. Weapons become brittle (break on critical failures), armor loses 1 point of protection, and structures take ongoing damage. Effect lasts 10 minutes." },
      { name: "Heat Emission",        prereq: null,                               cost: 1, desc: "As a half action, spend 1 spell point to dramatically increase your body temperature for 1 minute. Any creature within 2 meters of you takes 3d10 (Fortitude + Toughness roll to reduce) successes in fire damage. While this feature is active, any ranged projectile has +2 DC to hit as the projectiles start to superheat and melt before reaching you." },
      { name: "Atomic Resonance",     prereq: "Energy Absorption",               cost: 1, desc: "Your Melt and Weld spells cost 1 fewer spell point (minimum 1) and cost half an action less (minimum of half action)." },
      { name: "Radiation Sickness",   prereq: "Molecular Disruption",            cost: 2, desc: "As an action, spend 3 spell points to target a creature within 10 meters. They must make a Fortitude + Toughness roll (DC 6) or become poisoned for 1 hour. While poisoned, they have +1 DC to all rolls and take 1 shallow wound at the start of each combat round. Creatures immune to disease have advantage on this save." },
      { name: "Chain Reaction",       prereq: "Heat Emission",                   cost: 2, desc: "When you deal damage with radiation-based abilities, you can spend 1 additional spell point to cause the effect to spread to one creature within 3 meters of the original target. This creature takes the same effect but at half intensity (rounded down). You can only trigger one chain reaction per turn." },
      { name: "Nuclear Meltdown",     prereq: "Radiation Sickness, Chain Reaction, Heat Emission", cost: 3, desc: "As an action you start spilling out radiation as the core in your chest starts working overtime. Any spell you cast costs 2 less points (minimum 1). Any spell that deals damage deals an additional 2 dice of radiant damage. Any effect from Heat Emission is doubled." }
    ]
  },

  {
    id: "tarotist",
    name: "Tarotist",
    tagline: "The cards do not predict the future. They make it.",
    desc: "The Tarotist carries a physical deck of tarot cards. Each purchased card exists in the deck. On your turn you draw at random and choose whether the effect helps you (Upright) or harms an enemy (Reversed). The deck reshuffles at the start of each encounter.",
    pointsNote: "Gain 4 subclass points every level. First level grants 5.",
    deckRules: [
      { label: "Drawing", text: "Spend a half action on your turn to draw one card at random. The effect lasts until the end of your current turn. A drawn card must go into effect the same turn." },
      { label: "Orientation", text: "After drawing, immediately choose Upright (benefits you) or Reversed (targets one enemy in line of sight). You choose after seeing the card, never before." },
      { label: "One card at a time", text: "Only one card effect may be active. You cannot draw another until the previously drawn card has gone into effect." },
      { label: "Reshuffling", text: "The deck reshuffles at the start of each encounter. Drawn cards go to the discard pile. Once all cards are drawn you may spend an action to reshuffle." },
      { label: "Starting cards", text: "When you first take this subclass, choose 1 card for free from the 1-point list. The Devil card is also added for free." }
    ],
    cardGroups: [
      {
        cost: 0, label: "Free - The Devil",
        cards: [
          { name: "The Devil", upright: null, reversed: null, desc: "Added to your deck for free at subclass selection. See GM for The Devil effect in your campaign." }
        ]
      },
      {
        cost: 1, label: "1-Point Cards",
        cards: [
          { name: "0 - The Fool", upright: "Your first movement this turn does not cost a half action, and gains the benefits of both careful and quick movement with none of their drawbacks.", reversed: "One enemy must immediately move 4m in a direction you specify. Threshold save (Resolve + Focus). On failure, the movement happens before any of their other actions this turn." },
          { name: "II - The High Priestess", upright: "Learn one of the following about any creature you can see: their current shallow wound total, their current deep wound total, or one condition they are currently suffering.", reversed: "One enemy loses any hidden advantage they currently hold. If hidden they are immediately revealed. If they have a declared readied action, it is cancelled." },
          { name: "III - The Empress", upright: "You and one adjacent ally immediately recover 1 shallow wound.", reversed: "One enemy loses 1 shallow wound, or if they have a stabilised wound it ruptures reapplying its effects. Cannot be blocked or dodged." },
          { name: "V - The Hierophant", upright: "Your next block or dodge reaction this turn reduces incoming damage by 1 additional success.", reversed: "One enemy's next block or dodge reaction this turn is reduced by 1 success before it applies." },
          { name: "IX - The Hermit", upright: "Until the end of your turn, you cannot be flanked and do not suffer the Distracted condition from any source.", reversed: "One enemy loses their flanking bonus this turn. Any Distracted condition they are applying to allies is negated until the end of their next turn." },
          { name: "XII - The Hanged Man", upright: "Your next defensive reaction this turn costs no action debt from your next turn.", reversed: "One enemy's next reaction this turn costs double its normal action debt from their following turn." },
          { name: "XIV - Temperance", upright: "Your next attack or defensive roll this turn may reroll 3 dice that showed a failure. Take the new results.", reversed: "One enemy's next attack this turn has its damage dice reduced by 1 (minimum 1 die)." },
          { name: "I - The Magician", upright: "Your next roll this turn may use any stat you choose instead of the one it normally requires. Declare before rolling.", reversed: "One enemy's next roll this turn uses their lowest stat instead of the one it normally requires. You impose the substitution." }
        ]
      },
      {
        cost: 2, label: "2-Point Cards",
        cards: [
          { name: "IV - The Emperor", upright: "Until the end of your turn, you cannot be moved, knocked prone, disarmed, or displaced by any means.", reversed: "One enemy has +1 DC on every roll they make this turn." },
          { name: "VI - The Lovers", upright: "Choose one: add 2 automatic successes to your next attack roll this turn, or grant one ally within line of sight a free half action on their next turn. You cannot take both.", reversed: "Force one enemy to choose between two tactically meaningful options you name. Threshold save (Resolve + Composure). They must commit to one and cannot choose neither." },
          { name: "VII - The Chariot", upright: "Your movement is doubled this turn and does not trigger reactions from any enemy. Move through threatened spaces freely.", reversed: "One enemy cannot take any movement-based reaction or pursue you this turn." },
          { name: "VIII - Strength", upright: "The next Strength roll made by you or an ally within line of sight has its DC lowered by 2.", reversed: "The next Strength-based roll made by an enemy has its DC increased by 2." },
          { name: "XI - Justice", upright: "Until the start of your next turn, when an enemy deals damage to you, immediately deal that same number of wounds back to them as a free reaction. Only once.", reversed: "One enemy makes a threshold save (Resolve + Focus). On failure, they cannot target your allies this turn, only you." },
          { name: "XVII - The Star", upright: "You or one ally within line of sight immediately stabilises one deep wound without rolling. The countdown stops and the active condition ends.", reversed: "The enemy makes a threshold save (Resolve + Faith). On failure, a small miracle of your choice befalls the enemy. GM adjudicates." },
          { name: "XVIII - The Moon", upright: "Until the end of your turn, all ranged attacks against you have +1 DC and enemies have +1 DC to track your position or movement.", reversed: "One enemy is Confused until the end of their next turn. They may take one fewer action and count as Distracted until the end of their next turn." }
        ]
      },
      {
        cost: 3, label: "3-Point Cards",
        cards: [
          { name: "XIII - Death", upright: "Remove all your current shallow wounds.", reversed: "The next time the enemy takes damage they cannot reduce the incoming damage in any way." },
          { name: "X - Wheel of Fortune", upright: "Roll 1d10. 1-3: recover up to 2 shallow wounds. 4-6: gain one additional half action this turn. 7-9: your next attack roll has 2 additional dice. 10: all three.", reversed: "Roll 1d10 for one enemy. 1-3: they lose all shallow wounds recovered this round. 4-6: they lose their half action on their next turn. 7-9: their next attack DC +2. 10: all three." },
          { name: "XIX - The Sun", upright: "Until the end of your turn, every roll you make adds 1 automatic success beyond what the dice show.", reversed: "Until the end of their next turn, one enemy treats every roll as producing 1 fewer success than the dice show (minimum 0)." }
        ]
      },
      {
        cost: 4, label: "4-Point Cards",
        cards: [
          { name: "XVI - The Tower", upright: "For the next attack you take, any wounds you receive only count as shallow wounds.", reversed: "For the next attack that hits the enemy, each success counts as a deep wound." },
          { name: "XX - Judgement", upright: "Immediately recover one class feature or ability that has been expended this encounter for you or an ally.", reversed: "One enemy immediately loses one use of a feature or ability they have already used this encounter." },
          { name: "XXI - The World", upright: "Until the end of your turn, any roll you make explodes on a 9 or a 10.", reversed: "Until the end of their next turn, any 2s rolled by the enemy count as 1s." }
        ]
      }
    ]
  }
];

var BACKGROUNDS = [
  {
    id: "mystic",
    name: "The Veiled Mind",
    tagline: "Academic. Broken.",
    equipment: "A leather-bound academic journal filled with theoretical notes in a cramped cipher hand, a set of formal academic robes worn for travel.",
    features: [
      {
        name: "Fractured Presence",
        cost: "Free",
        desc: "Passive. Creatures with 1 or more mental wounds that can see you have +1 DC on all rolls. Your presence alone is destabilising to already-damaged minds."
      },
      {
        name: "Read the Cracks",
        cost: "1",
        desc: "When you study a creature as an interact action, you learn exactly how many mental wounds they have and which of their stats is currently lowest. If they have any mental wounds you also learn one thing they are currently afraid of."
      },
      {
        name: "Shared Fracture",
        cost: "2",
        desc: "Once per short rest. As a reaction when you take a mental wound, you may immediately transfer 1 mental wound to any creature within 15m that already has at least 1 mental wound. They take the wound instead of you."
      },
      {
        name: "Threshold Whisper",
        cost: "2",
        desc: "Once per long rest, as a half action whisper a specific instruction to a creature within 5m that has mental wounds. Until their next long rest, when their mental wounds equal or exceed half their Resolve score, they must make a threshold save (Resolve + Focus) or compulsively follow that instruction on their next turn. The instruction must be a single simple action."
      }
    ]
  }
];

// Subclasses added below
