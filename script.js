// Get references to the HTML elements
const generateBtn = document.getElementById('generateBtn');
const catNameDisplay = document.getElementById('catNameDisplay');
const copyBtn = document.getElementById('copyBtn'); // Get the copy button

// --- Name Parts for Generation (Expanded List) ---
const simpleNames = [
    // Existing + Added
    "Luna", "Leo", "Bella", "Milo", "Lucy", "Oliver", "Nala", "Charlie",
    "Chloe", "Max", "Lily", "Simba", "Cleo", "Jasper", "Shadow", "Mittens",
    "Gizmo", "Zoe", "Oreo", "Pepper", "Smokey", "Tiger", "Coco", "Felix",
    "Whiskers", "Patches", "Binx", "Salem", "Boots", "Casper", "Cosmo",
    "Dusty", "Finn", "Oscar", "Peanut", "Pixel", "Pumpkin", "Ruby", "Sasha",
    "Snowball", "Spooky", "Stella", "Sunny", "Toby", "Willow", "Yuki", "Zeus", "Ziggy",
    "Mochi", "Kiki", "Loki", "Merlin", "Jinx", "Inky", "Harley", "Gandalf",
    "Rascal", "Quinn", "Apollo", "Artemis", "Athena", "Atlas", "Bandit", "Bear",
    "Biscuit", "Blue", "Bubba", "Buddy", "Chester", "Copper", "Dexter", "Duke",
    "Echo", "Elsa", "Figaro", "Frankie", "George", "Gus", "Hazel", "Henry",
    "Hunter", "Ivy", "Jack", "Jade", "Leo", "Maple", "Moose", "Murphy", "Nugget",
    "Olive", "Onyx", "Otis", "Pebbles", "Penny", "Piper", "Remi", "Riley",
    "Rocky", "Rosie", "Rudy", "Sammy", "Scout", "Sophie", "Thor", "Winston", "Zelda",
    // Even More Names
    "Abby", "Ace", "Ali", "Angus", "Archie", "Ash", "Bailey", "Baxter", "Beau",
    "Benji", "Benny", "Bentley", "Billy", "Blake", "Boomer", "Brady", "Brody",
    "Bruce", "Bruno", "Brutus", "Buster", "Cali", "Callie", "Cash", "Chance",
    "Chewy", "Chico", "Chip", "Clyde", "Cody", "Cooper", "Daisy", "Dakota",
    "Diesel", "Dobby", "Dolly", "Eddie", "Ellie", "Emma", "Fiona", "Floyd",
    "Freddy", "Gary", "Gigi", "Gizelle", "Goose", "Gracie", "Gunner", "Hank",
    "Harper", "Harvey", "Holly", "Hugo", "Izzy", "Jackson", "Jake", "Joey",
    "Josie", "Kobe", "Koda", "Layla", "Lexi", "Louie", "Lucky", "Lulu", "Mac",
    "Macy", "Maddie", "Marley", "Maui", "Maverick", "Maya", "Mia", "Mickey",
    "Millie", "Minnie", "Missy", "Misty", "Monty", "Morgan", "Mowgli", "Nash",
    "Nellie", "Niko", "Noah", "Oakley", "Odie", "Ollie", "Orion", "Otto",
    "Pablo", "Parker", "Percy", "Phoebe", "Prince", "Ranger", "Rex", "Ricky",
    "Rocco", "Romeo", "Ronnie", "Rory", "Roxy", "Rusty", "Sadie", "Samson",
    "Sandy", "Sarge", "Sawyer", "Scooter", "Shelby", "Shiloh", "Simon", "Sonny",
    "Sparky", "Spencer", "Spike", "Sugar", "Tank", "Teddy", "Tilly", "Tito",
    "TJ", "Tucker", "Vader", "Vinnie", "Walter", "Watson", "Winnie", "Woody",
    "Zane", "Zara", "Zeke", "Zoey"
];
const nameStarts = [
    // Existing + Added
    "Whisker", "Shadow", "Snow", "Pepper", "Ginger", "Ash", "Moon", "Star",
    "Cosmo", "Professor", "Captain", "Agent", "Sir", "Madam", "Cloud", "Storm",
    "Sunny", "Fuzz", "Velvet", "Inky", "Rusty", "Golden", "Silver", "Prince", "Princess",
    "Midnight", "Blaze", "Comet", "Galaxy", "Tiny", "Major", "Doctor", "General",
    "Thunder", "Lightning", "Admiral", "Baron", "Count", "Duchess", "King", "Queen",
    "Lord", "Lady", "Chief", "Commander", "Sparkle", "Cinder", "Marble", "Ebony",
    "Ivory", "Crimson", "Indigo", "Emerald", "Diamond", "Ruby", "Jade", "Amber",
    // Even More Starts
    "Acorn", "Almond", "Alpine", "Arctic", "Autumn", "Azure", "Bamboo", "Basil",
    "Berry", "Birch", "Boulder", "Bramble", "Bronze", "Bubble", "Butter", "Cactus",
    "Candy", "Caramel", "Cedar", "Cherry", "Chestnut", "Chili", "Cinnamon", "Clay",
    "Clover", "Cobalt", "Coffee", "Coral", "Cotton", "Creek", "Crystal", "Curly",
    "Daffodil", "Dandy", "Dawn", "Dewdrop", "Digger", "Domino", "Dragon", "Dream",
    "Drift", "Dusk", "Eagle", "Echo", "Eclipse", "Ember", "Falcon", "Fern",
    "Fiesta", "Fire", "Flannel", "Flash", "Fleet", "Flint", "Forest", "Freckle",
    "Frost", "Fudge", "Garnet", "Glacier", "Glitter", "Glow", "Granite", "Graphite",
    "Griffin", "Grove", "Harbor", "Haven", "Hawk", "Hazel", "Heather", "Honey",
    "Hopper", "Horizon", "Hurricane", "Ice", "Iron", "Island", "Jasper", "Jester",
    "Jungle", "Juniper", "Karma", "Lagoon", "Lava", "Lavender", "Lemon", "Lilac",
    "Lime", "Lotus", "Lucky", "Magma", "Magnolia", "Mahogany", "Maize", "Mango",
    "Maple", "Meadow", "Meteor", "Mint", "Mirage", "Misty", "Molten", "Monster",
    "Moss", "Mountain", "Mulberry", "Mustard", "Mystic", "Navy", "Nebula", "Ninja",
    "Noodle", "North", "Nova", "Nutmeg", "Oasis", "Obsidian", "Ocean", "Olive",
    "Onyx", "Opal", "Orchid", "Oregano", "Panda", "Papaya", "Paprika", "Paradise",
    "Patch", "Pebble", "Phantom", "Phoenix", "Pine", "Pinto", "Pistachio", "Plum",
    "Prairie", "Puddle", "Pyrite", "Quartz", "Quasar", "Quill", "Radiant", "Rainbow",
    "Raven", "Rebel", "Redwood", "Reef", "Regal", "Ripple", "River", "Rogue",
    "Royal", "Rumble", "Saber", "Saffron", "Sage", "Sahara", "Sand", "Sapphire",
    "Scarlet", "Scout", "Scrappy", "Sea", "Sequoia", "Serpent", "Shade", "Shamrock",
    "Shard", "Sherbet", "Shimmer", "Sierra", "Silk", "Skipper", "Sky", "Slate",
    "Slick", "Sly", "Smudge", "Sorbet", "Sorrel", "South", "Spice", "Spider",
    "Spirit", "Splash", "Sprout", "Spruce", "Squiggle", "Starlight", "Steel", "Stone",
    "Sugar", "Summit", "Swamp", "Swifty", "Syrup", "Tabby", "Taffy", "Tango",
    "Tarragon", "Taupe", "Teak", "Terra", "Thistle", "Thyme", "Tidal", "Timber",
    "Titan", "Toffee", "Topaz", "Tornado", "Treasure", "Tundra", "Turquoise", "Twilight",
    "Twister", "Umber", "Urban", "Valley", "Vanilla", "Viper", "Vista", "Vortex",
    "Walnut", "Warden", "Warrior", "Wavy", "Whisper", "Wild", "Willow", "Windy",
    "Winter", "Wisteria", "Wizard", "Wolf", "Wood", "Yarrow", "Zenith", "Zephyr"
];
const nameEnds = [
    // Existing + Added
    "paws", "tail", "belly", "muffin", "beam", "nova", "foot", "snout",
    "flake", "doodle", "whiskers", "heart", "butt", "face", "mane", "song",
    "strike", "chaser", "runner", "dream", "byte", "claw", "fang", "purr",
    "whisper", "step", "socks", "patch", "swirl", "breeze", "noodle", "bean",
    "spark", "glow", "stream", "dash", "flash", "wing", "feather", "stone",
    "gem", "dust", "moon", "star", "cloud", "storm", "flower", "petal", "leaf",
    "berry", "nut", "seed", "brook", "river", "lake", "ocean", "sky",
    // Even More Ends
    "ball", "bee", "bird", "bloom", "blossom", "blur", "bolt", "bond", "bounce",
    "bound", "bow", "box", "branch", "brand", "bright", "bubble", "buddy", "bug",
    "burn", "burrow", "burst", "buzz", "cake", "call", "cane", "cap", "charm",
    "chime", "chip", "chirp", "chunk", "click", "climb", "coat", "coin", "comb",
    "cone", "cool", "coop", "core", "cork", "corn", "cozy", "crab", "crack",
    "craft", "crest", "crick", "crop", "crow", "crumb", "crush", "cub", "cup",
    "curl", "curve", "cut", "cycle", "dab", "dart", "dawn", "daze", "deck",
    "deep", "den", "dew", "dice", "dig", "dim", "dip", "disc", "dive", "dock",
    "dodge", "doll", "dome", "dot", "down", "drift", "drill", "drip", "drop",
    "drum", "duck", "dune", "dunk", "dusk", "ear", "edge", "eel", "egg",
    "elf", "elm", "eye", "fall", "fan", "farm", "fast", "fern", "fetch",
    "fig", "fin", "find", "fire", "fish", "fizz", "flag", "flame", "flap",
    "flat", "flea", "fleck", "flee", "fleet", "flick", "flier", "fling", "flint",
    "flip", "float", "flock", "flood", "floor", "flop", "floss", "flow", "fluff",
    "fluid", "fluke", "flurry", "flush", "flute", "flux", "fly", "foam", "focus",
    "fog", "fold", "folk", "food", "fool", "ford", "fork", "form", "fort",
    "foul", "found", "fox", "frag", "frame", "fray", "free", "fresh", "friend",
    "frill", "frisk", "frog", "frond", "front", "frost", "froth", "fruit", "fuel",
    "fume", "fun", "fund", "fur", "fuse", "fuzz", "gain", "game", "gang",
    "gap", "gas", "gate", "gaze", "gear", "geek", "gel", "gen", "ghost",
    "gift", "gill", "gin", "glad", "glade", "glam", "glare", "glass", "glaze",
    "gleam", "glee", "glide", "glint", "glitch", "globe", "gloom", "gloss", "glove",
    "glue", "gnat", "gnome", "goal", "goat", "gob", "gold", "golf", "goo",
    "good", "goof", "goon", "goop", "gore", "gosh", "gouge", "grab", "grace",
    "grade", "graft", "grain", "grand", "grant", "grape", "graph", "grasp", "grass",
    "grate", "grave", "gravy", "gray", "graze", "grease", "great", "greed", "green",
    "greet", "grid", "grief", "grill", "grim", "grin", "grind", "grip", "grit",
    "groan", "groom", "groove", "gross", "ground", "group", "grouse", "grove", "grow",
    "growl", "grub", "grudge", "grunt", "guard", "guess", "guest", "guide", "guild",
    "gulf", "gulp", "gum", "gun", "guru", "gush", "gust", "gut", "guy",
    "habit", "hack", "hail", "hair", "hale", "half", "hall", "halo", "halt",
    "ham", "hand", "hang", "hard", "harm", "harp", "hash", "haste", "hat",
    "hatch", "haul", "hawk", "haze", "head", "heal", "heap", "heat", "hedge",
    "heel", "heft", "heir", "helm", "help", "hem", "herb", "herd", "hero",
    "hex", "hick", "hide", "high", "hike", "hill", "hilt", "hind", "hint",
    "hip", "hiss", "hit", "hitch", "hive", "hoard", "hoax", "hob", "hog",
    "hold", "hole", "home", "honk", "hood", "hoof", "hook", "hoop", "hoot",
    "hop", "hope", "horn", "horse", "hose", "host", "hot", "hound", "hour",
    "house", "hover", "howl", "hub", "hue", "hug", "hulk", "hull", "hum",
    "hump", "hunch", "hung", "hunk", "hunt", "hurl", "hurry", "hurt", "hush",
    "husk", "hut", "hydro", "hyena", "hymn", "hype", "ice", "icon", "icy",
    "id", "idea", "idle", "idol", "igloo", "ill", "image", "imp", "inch",
    "index", "info", "ingot", "ink", "inlet", "inn", "input", "insect", "iron",
    "isle", "itch", "item", "jab", "jack", "jail", "jam", "jar", "jaw",
    "jazz", "jeans", "jeep", "jell", "jest", "jet", "jig", "jive", "job",
    "jog", "join", "joke", "jolt", "joss", "jot", "joy", "judge", "jug",
    "juice", "juke", "jump", "junk", "jury", "just", "jut", "kale", "kayak",
    "keel", "keen", "keep", "keg", "kelp", "key", "kick", "kid", "kill",
    "kin", "kind", "kiss", "kit", "kite", "kiwi", "knack", "knave", "knee",
    "knife", "knit", "knob", "knock", "knot", "know", "knurl", "koala", "krill",
    "lab", "lace", "lack", "lad", "lag", "lair", "lamp", "lance", "land",
    "lane", "lap", "lapse", "lard", "large", "lark", "lash", "lass", "last",
    "latch", "late", "lathe", "laugh", "launch", "law", "lawn", "lax", "lay",
    "lead", "leak", "lean", "leap", "lease", "leash", "leave", "ledge", "leech",
    "leek", "leer", "left", "leg", "lend", "lens", "lent", "less", "let",
    "level", "lever", "liar", "lice", "lick", "lid", "lie", "life", "lift",
    "light", "like", "limb", "lime", "limp", "line", "link", "lint", "lion",
    "lip", "lisp", "list", "lit", "live", "load", "loaf", "loan", "lob",
    "lobe", "local", "lock", "lode", "lodge", "loft", "log", "logic", "loin",
    "loll", "lone", "long", "look", "loom", "loon", "loop", "loose", "loot",
    "lope", "loss", "lost", "lot", "lotion", "loud", "lounge", "louse", "love",
    "low", "loyal", "luck", "lug", "lull", "lump", "lunch", "lunge", "lure",
    "lurk", "lush", "lust", "lute", "lux", "lynx", "lyre", "macaw", "mace",
    "mad", "magic", "magpie", "mail", "main", "make", "male", "mall", "malt",
    "mama", "mambo", "mamma", "man", "map", "march", "mare", "mark", "marsh",
    "mask", "mass", "mast", "mat", "match", "mate", "math", "max", "maze",
    "mead", "meal", "mean", "meat", "medal", "media", "medic", "meet", "meld",
    "melt", "memo", "mend", "menu", "meow", "mercy", "merge", "mesh", "mess",
    "metal", "mew", "mice", "mid", "miff", "might", "mike", "mild", "mile",
    "milk", "mill", "mime", "mince", "mind", "mine", "mink", "mint", "minus",
    "mirth", "miser", "miss", "mist", "mite", "mix", "moan", "moat", "mob",
    "mock", "mode", "model", "mog", "moil", "moist", "mold", "mole", "molt",
    "mom", "monk", "month", "mood", "moo", "mop", "mope", "moral", "more",
    "morn", "morph", "moss", "most", "moth", "motion", "motor", "motto", "mound",
    "mount", "mourn", "mouse", "mouth", "move", "mow", "much", "muck", "mud",
    "muff", "mug", "mule", "mull", "mumble", "munch", "murk", "muse", "mush",
    "music", "musk", "muss", "must", "mute", "mutt", "myth", "nag", "nail",
    "name", "nap", "nape", "narc", "nasty", "nation", "native", "nature", "naval",
    "nave", "near", "neat", "neck", "need", "needle", "negate", "neon", "nerd",
    "nerve", "nest", "net", "newt", "next", "nib", "nice", "niche", "nick",
    "niece", "night", "nil", "nip", "nit", "noble", "nod", "node", "noise",
    "nomad", "none", "nook", "noon", "norm", "nose", "notch", "note", "noun",
    "nudge", "nuke", "null", "numb", "nurse", "nymph", "oak", "oar", "oat",
    "object", "obit", "occur", "odd", "ode", "odium", "off", "offer", "office",
    "ogle", "ogre", "oil", "oink", "okay", "old", "omen", "omit", "once",
    "one", "onion", "only", "onto", "onus", "ooze", "opal", "open", "opera",
    "opium", "opt", "optic", "opus", "oral", "orb", "orbit", "orca", "order",
    "organ", "origin", "oriole", "ounce", "our", "oust", "out", "oval", "oven",
    "over", "overt", "owl", "own", "owner", "ox", "oxide", "oyster", "pace",
    "pack", "pact", "pad", "page", "paid", "pail", "pain", "paint", "pair",
    "pal", "pale", "palm", "palp", "pan", "panda", "pane", "pang", "panic",
    "pants", "papa", "paper", "par", "parade", "parcel", "pardon", "parent", "park",
    "parody", "parrot", "part", "party", "pass", "past", "pasta", "paste", "pat",
    "path", "patio", "pause", "pave", "paw", "pawn", "pay", "peace", "peach",
    "peak", "pear", "peat", "peck", "pedal", "peek", "peel", "peep", "peer",
    "peg", "pelt", "pen", "pence", "pencil", "pend", "pep", "perch", "peril",
    "perk", "perm", "pest", "petal", "pet", "pew", "phase", "phone", "photo",
    "phrase", "physic", "piano", "pick", "picnic", "pie", "piece", "pier", "pierce",
    "pig", "pike", "pile", "pill", "pilot", "pimp", "pin", "pinch", "pine",
    "ping", "pink", "pint", "pious", "pip", "pipe", "pique", "pit", "pitch",
    "pith", "pivot", "place", "placid", "plague", "plain", "plan", "plane", "plank",
    "plant", "plasma", "plate", "play", "playa", "plaza", "plea", "plead", "pledge",
    "plight", "plod", "plop", "plot", "plow", "ploy", "pluck", "plug", "plumb",
    "plume", "plump", "plunge", "plus", "plush", "ply", "poach", "pod", "poem",
    "poet", "point", "poise", "poke", "polar", "pole", "police", "policy", "polish",
    "polite", "polka", "poll", "polo", "pond", "pong", "pony", "pooch", "poof",
    "pool", "poop", "poor", "pop", "pope", "poppy", "porch", "pore", "pork",
    "port", "pose", "posh", "posit", "posse", "post", "posy", "pot", "potion",
    "pouch", "pound", "pour", "pout", "power", "pram", "prank", "prawn", "pray",
    "preach", "pred", "preen", "prefix", "prep", "press", "prey", "price", "prick",
    "pride", "pried", "prime", "primp", "print", "prior", "prism", "privy", "prize",
    "pro", "probe", "prod", "prof", "promo", "prompt", "prong", "proof", "prop",
    "prose", "proud", "prove", "prow", "prowl", "proxy", "prude", "prune", "pry",
    "psalm", "psych", "pub", "public", "puck", "puddle", "puff", "pug", "pull",
    "pulp", "pulse", "puma", "pump", "pun", "punch", "pundit", "punk", "punt",
    "pup", "pupil", "puppet", "puppy", "pure", "purge", "purse", "push",
    "put", "putt", "pygmy", "pyre", "python", "quack", "quad", "quaff", "quail",
    "quake", "qualm", "quand", "quark", "quarry", "quart", "quash", "quay",
    "queer", "quell", "query", "quest", "queue", "quick", "quid", "quiet",
    "quilt", "quint", "quip", "quit", "quiver", "quiz", "quota", "quote", "rabbi",
    "rabbit", "rabid", "race", "rack", "racy", "rad", "radar", "radii", "radio",
    "radish", "raffle", "raft", "rage", "raid", "rail", "rain", "raise", "rajah",
    "rake", "rally", "ram", "ramble", "ramp", "ran", "ranch", "random", "range",
    "rank", "rant", "rap", "rapid", "rapt", "rare", "rash", "rasp",
    "rat", "rate", "ratio", "rattle", "rave", "raw", "ray", "raze",
    "razor", "reach", "react", "read", "ready", "realm", "ream", "reap", "rear",
    "rebel", "rebut", "recall", "recap", "recess", "recipe", "reck", "record", "recto",
    "recur", "red", "redeem", "redo", "reduce", "reed", "reek", "reel",
    "refer", "refit", "reflex", "reflux", "reform", "refuel", "refuge", "refund", "refuse",
    "regal", "regard", "regent", "regime", "region", "regret", "rehab", "reheat", "reign",
    "rein", "reject", "rejoin", "relax", "relay", "relic", "relive", "reload", "rely",
    "remain", "remake", "remark", "remedy", "remind", "remit", "remix", "remote", "remove",
    "rename", "rend", "render", "renew", "rent", "reopen", "reorg", "rep", "repair",
    "repast", "repeal", "repeat", "repel", "repent", "replay", "report", "repose", "repot",
    "repro", "reran", "rerun", "resale", "rescue", "resell", "resent", "reset", "resh",
    "reside", "resid", "resign", "resin", "resist", "resole", "resort", "resp", "rest",
    "result", "resume", "retail", "retain", "retake", "retch", "retell", "retina", "retire",
    "retort", "retool", "retook", "retrad", "retrim", "retry", "return", "reuse", "rev",
    "reveal", "revel", "reverb", "revere", "revers", "revert", "review", "revile", "revise",
    "revive", "revolt", "reward", "rewash", "rewind", "rewire", "reword", "rework", "rezon",
    "rhino", "rhyme", "rib", "ribbon", "rice", "rich", "rick", "rid", "ride",
    "ridge", "rifle", "rift", "rig", "right", "rigid", "rigor", "rile", "rill",
    "rim", "rime", "rind", "ring", "rink", "rinse", "riot", "rip", "ripe",
    "ripen", "ripple", "rise", "risk", "risky", "rite", "ritual", "rival", "road",
    "roam", "roar", "roast", "rob", "robe", "robin", "robot", "rock", "rod",
    "rode", "role", "roll", "rom", "romp", "roof", "rook", "room",
    "roost", "root", "rope", "rose", "rosin", "rot", "rotor", "rouge", "rough",
    "round", "rouse", "rout", "route", "rove", "row", "royal", "rub",
    "rudder", "rude", "rue", "ruff", "rug", "ruin", "rule", "rum", "rumble",
    "rumor", "rump", "run", "rune", "rung", "runt", "rupee", "rural", "ruse",
    "rush", "rusk", "rust", "rut", "saber", "sable", "sac", "sack", "sad",
    "saddle", "safe", "saga", "said", "sail", "saint", "sake", "salad",
    "sale", "saline", "salmon", "salon", "salt", "salty", "salute", "salve", "salvo",
    "same", "sample", "sand", "sane", "sang", "sank", "sap", "sappy", "sari",
    "sash", "sass", "sat", "satin", "satire", "sauce", "saucy", "sauna", "saute",
    "save", "savior", "savor", "savvy", "saw", "sax", "say", "scab", "scad",
    "scald", "scale", "scalp", "scam", "scamp", "scan", "scant", "scar", "scare",
    "scarf", "scarp", "scary", "scat", "scene", "scent", "sch", "schism", "school",
    "scoff", "scold", "scone", "scoop", "scoot", "scope", "scorch", "score", "scorn",
    "scour", "scowl", "scram", "scrap", "scrape", "scraw", "scream", "screen",
    "screw", "scribe", "scrim", "scrip", "scroll", "scrod", "scrub", "scrum", "scuba",
    "scud", "scuff", "scull", "scum", "scurf", "scurry", "scythe", "seal",
    "seam", "sear", "search", "season", "seat", "sec", "sect", "sector", "secure",
    "sedan", "sedge", "see", "seek", "seem", "seen", "seep", "seer",
    "seesaw", "seethe", "segment", "segue", "seine", "seism", "seize", "self", "sell",
    "semi", "send", "senna", "sense", "sent", "sentry", "sepal", "sepsis", "sept",
    "septic", "sequel", "ser", "sera", "seraph", "sere", "serene", "serf", "serge",
    "serial", "series", "serif", "sermon", "serous", "serum", "serve", "server", "servo",
    "sesame", "set", "setup", "seven", "sever", "severe", "sew", "sewage", "sewer",
    "sex", "shack", "shad", "shady", "shaft", "shag", "shah", "shake",
    "shaken", "shaker", "shale", "shall", "shalt", "sham", "shame", "shank", "shape",
    "share", "shark", "sharp", "shave", "shawl", "shay", "she", "sheaf",
    "shear", "sheath", "shed", "sheen", "sheep", "sheer", "sheet", "sheik", "shelf",
    "shell", "shend", "shepherd", "sherif", "sherry", "shied", "shield", "shift", "shill",
    "shim", "shin", "shine", "shingle", "shiny", "ship", "shire", "shirk",
    "shirt", "shish", "shiv", "shoal", "shock", "shod", "shoe", "shone", "shoo",
    "shook", "shoot", "shop", "shore", "shorn", "short", "shot", "should", "shout",
    "shove", "show", "shown", "showy", "shrank", "shred", "shrew", "shriek", "shrift",
    "shrike", "shrill", "shrimp", "shrine", "shrink", "shrive", "shroud", "shrub", "shrug",
    "shuck", "shun", "shunt", "shush", "shut", "shy", "sibyl", "sic", "sick",
    "side", "sidle", "siege", "sieve", "sigh", "sight", "sigma", "sign", "signal",
    "silage", "silent", "sill", "silly", "silo", "silt", "silver", "sim",
    "simian", "simmer", "simple", "sin", "since", "sine", "sinew", "sing", "singe",
    "sink", "sinus", "sip", "sir", "sire", "siren", "sis", "sit", "site",
    "situ", "six", "sixth", "size", "skate", "skein", "sketch", "skew", "ski",
    "skid", "skier", "skiff", "skill", "skim", "skimp", "skin", "skip", "skirt",
    "skit", "skulk", "skull", "skunk", "slab", "slack", "slag", "slain",
    "slake", "slam", "slang", "slant", "slap", "slash", "slat", "slave",
    "slaw", "slay", "sled", "sleek", "sleep", "sleet", "sleeve", "sleigh", "slept",
    "slice", "slick", "slid", "slide", "slime", "slimy", "sling", "slink", "slip",
    "slit", "slob", "sloe", "slog", "sloop", "slop", "slope", "slosh", "slot",
    "sloth", "slouch", "slough", "slow", "sludge", "slug", "sluice", "slum", "slump",
    "slung", "slunk", "slur", "slurp", "slush", "sly", "smack", "small", "smart",
    "smash", "smear", "smell", "smelt", "smile", "smirk", "smite", "smith", "smock",
    "smog", "smoke", "smoky", "smolt", "smooch", "smooth", "smote", "smudge", "smug",
    "snack", "snafu", "snag", "snail", "snake", "snap", "snare", "snark", "snarl",
    "snatch", "snath", "sneak", "sneer", "sneeze", "snell", "snick", "snide", "sniff",
    "snip", "snipe", "snit", "snob", "snood", "snook", "snoop", "snore", "snort",
    "snow", "snowy", "snub", "snuck", "snuff", "snug", "soak", "soap",
    "soar", "sob", "sober", "sock", "sod", "soda", "sofa", "soft", "soften",
    "soggy", "soil", "sol", "solar", "sold", "sole", "solemn", "solid", "solo",
    "solon", "solve", "soma", "some", "son", "sonar", "sonic", "sonny",
    "soon", "soot", "sooth", "sop", "sorb", "sore", "sorry", "sort",
    "sot", "soul", "sound", "soup", "sour", "source", "souse", "sow",
    "soy", "spa", "space", "spade", "span", "spank", "spar", "spare",
    "sparse", "spasm", "spat", "spate", "spawn", "spay", "speak", "spear", "spec",
    "speck", "sped", "speed", "spell", "spelt", "spend", "spent", "sperm", "spew",
    "sphere", "sphinx", "spice", "spicy", "spied", "spiel", "spiff", "spike",
    "spiky", "spill", "spilt", "spin", "spina", "spine", "spiny", "spire",
    "spit", "spite", "spitz", "splat", "splay", "splice", "splint", "split", "spoil",
    "spoke", "spoof", "spook", "spool", "spoon", "spoor", "spore", "sport", "spot",
    "spout", "sprat", "spray", "spree", "sprig", "spring", "sprit",
    "sprue", "spud", "spume", "spun", "spunk", "spur", "spurn", "spurt", "spy",
    "squad", "squall", "squat", "squaw", "squawk", "squeak", "squeal", "squib", "squid",
    "squint", "squire", "squirm", "squirt", "squish", "stab", "stable", "stack", "stadium",
    "staff", "stag", "stage", "stagy", "staid", "stain", "stair", "stake", "stale",
    "stalk", "stall", "stamp", "stance", "stanch", "stand", "stank", "staph", "staple",
    "starch", "stare", "stark", "start", "stash", "state", "static", "statue",
    "status", "stave", "stay", "stead", "steak", "steal", "steam", "steed", "steel",
    "steep", "steer", "stein", "stem", "stench", "stereo", "stern", "stet",
    "stew", "stick", "stiff", "stifle", "stigma", "still", "stilt", "stim", "sting",
    "stingy", "stink", "stint", "stir", "stitch", "stoat", "stock", "stodgy", "stoic",
    "stoke", "stole", "stomp", "stony", "stood", "stool", "stoop", "stop",
    "stopt", "store", "stork", "story", "stoup", "stout", "stove", "stow",
    "strap", "strata", "straw", "stray", "streak", "street", "stress", "strew",
    "strict", "stride", "strife", "strike", "string", "strip", "stripe", "strive", "strobe",
    "strode", "stroke", "stroll", "strong", "strop", "strove", "struck", "strum", "strung",
    "strut", "stub", "stuck", "stud", "study", "stuff", "stuffy", "stump", "stun",
    "stung", "stunk", "stunt", "stupor", "sturdy", "style", "styli", "stylus", "stymie",
    "suave", "sub", "subdue", "sublet", "submit", "subpar", "subt", "subtle", "such",
    "suck", "sud", "suds", "sue", "suede", "suet", "suit", "suite",
    "sulfa", "sulk", "sulky", "sullen", "sultan", "sum", "sumac", "summa", "sump",
    "sung", "sunk", "sunlit", "sunny", "sunset", "sunup", "sup", "super",
    "supine", "supper", "suppl", "supply", "sure", "surf", "surge", "surly", "surmise",
    "surrey", "sushi", "suslik", "suss", "suture", "svelte", "swab", "swag", "swage",
    "swain", "swale", "swami", "swan", "swank", "swap", "sward", "swarm",
    "swart", "swash", "swat", "swath", "sway", "swear", "sweat", "swede", "sweep",
    "sweet", "swell", "swept", "swift", "swig", "swill", "swim", "swine", "swing",
    "swipe", "swish", "swiss", "swoon", "swoop", "swop", "sword", "swore",
    "sworn", "swum", "swung", "sybil", "syc", "syll", "sylvan", "symbol", "sync",
    "synod", "syntax", "synth", "system", "tab", "table", "taboo", "tabu",
    "tabula", "tacit", "tack", "tackle", "tacky", "taco", "tact", "tactic", "tad",
    "tadpol", "tag", "take", "taken", "taker", "talc", "tale",
    "talent", "talk", "tall", "tally", "talon", "tame", "tamp", "tandem",
    "tang", "tangy", "tank", "tap", "tape", "taper", "tapest", "tapir",
    "taps", "tar", "tardy", "tare", "target", "tariff", "tarn", "taro", "tarot",
    "tarp", "tarpon", "tarry", "tart", "task", "tassel", "taste", "tasty", "tat",
    "tater", "tatou", "tatter", "tattle", "tattoo", "tau", "taught", "taunt",
    "taut", "tavern", "taw", "tawdry", "tax", "taxi", "tea", "teach",
    "teal", "team", "tear", "tease", "teat", "tech", "techno", "ted",
    "tedium", "tee", "teem", "teen", "teensy", "teeny", "teeth", "teethe", "tel",
    "tell", "tempo", "tempt", "ten", "tenant", "tend", "tender", "tendon", "tenet",
    "tenon", "tenor", "tense", "tensor", "tent", "tenth", "tenuis", "tenure", "tepee",
    "tepid", "term", "tern", "terra", "terse", "test", "testa", "testy",
    "tether", "text", "than", "thank", "that", "thatch", "thaw", "the", "thee",
    "theft", "their", "theme", "then", "thence", "there", "therm", "these", "theta",
    "they", "thick", "thief", "thieve", "thigh", "thin", "thine", "thing", "think",
    "third", "thirst", "this", "thistl", "thither", "tho", "thong", "thorax", "thorn",
    "thorp", "those", "thou", "though", "thrall", "thrash", "thread", "threat", "three",
    "thresh", "threw", "thrice", "thrift", "thrill", "thrive", "throat", "throb", "throe",
    "throne", "throng", "throug", "throw", "thrum", "thrush", "thrust", "thud", "thug",
    "thumb", "thump", "thunk", "thus", "thwart", "thy", "tiara", "tibia",
    "tic", "tick", "ticket", "tickle", "tidal", "tidbit", "tide", "tidy", "tie",
    "tier", "tiff", "tight", "tike", "til", "tilde", "tile", "till",
    "tilt", "timbal", "time", "timid", "tin", "tinder", "tine", "tinge",
    "tingle", "tinker", "tinkle", "tinsel", "tint", "tiny", "tip", "tiptoe", "tiptop",
    "tirade", "tire", "tissue", "tit", "titan", "titbit", "tithe", "title", "titter",
    "tittle", "toad", "toady", "toast", "tobacc", "today", "toddy", "toe", "tofu",
    "toga", "toge", "toggle", "toggl", "toil", "toilet", "token", "told", "toll",
    "tom", "tomato", "tomb", "tome", "tomtit", "ton", "tonal", "tone", "toner",
    "tong", "tongue", "tonic", "tonite", "tonne", "too", "took", "tool", "toot",
    "tooth", "top", "topic", "topog", "topple", "topsy", "tor", "torch",
    "tore", "tori", "torn", "torpid", "torpor", "torque", "torr", "torrid", "torso",
    "tort", "torus", "toss", "tot", "total", "tote", "totem", "touch", "touchy",
    "tough", "tour", "tout", "tow", "toward", "towel", "tower", "town", "tox",
    "toxic", "toxin", "toy", "trace", "track", "tract", "trade", "tragic", "trail",
    "train", "trait", "traito", "tram", "tramp", "trance", "trap", "trash", "trauma",
    "travel", "trawl", "tray", "tread", "treat", "treble", "tree", "trek", "trem",
    "tremor", "trench", "trend", "tress", "triad", "trial", "tribal", "tribe", "trice",
    "trick", "tricky", "tried", "trike", "trill", "trim", "trio", "trip", "tripe",
    "trite", "triton", "trivet", "trod", "trode", "troll", "tromp", "troop", "trope",
    "trophy", "trot", "troth", "trough", "trounc", "troupe", "trous", "trout", "trove",
    "trow", "troy", "truce", "truck", "trudge", "true", "truer", "truest", "truffl",
    "truly", "trump", "trunk", "truss", "trust", "truth", "try", "tryst", "tsar",
    "tsk", "tub", "tuba", "tube", "tuber", "tuck", "tuft", "tug", "tulip",
    "tulle", "tumble", "tumid", "tummy", "tumor", "tumult", "tuna", "tune", "tunic",
    "tunnel", "turban", "turbid", "turbin", "turbo", "turbot", "turd", "turf", "turk",
    "turmoi", "turn", "turnip", "turret", "turtle", "turves", "tush", "tusk", "tussle",
    "tut", "tutor", "tutu", "tux", "tuxedo", "twain", "twang", "tweak", "tweed",
    "tween", "tweet", "tweezer", "twelve", "twenty", "twice", "twig", "twilit", "twill",
    "twin", "twine", "twirl", "twist", "twit", "twitch", "two", "tycoon", "tying",
    "tyke", "type", "typic", "typo", "tyro", "tzar", "udder", "ugh", "ugly",
    "uh", "ukase", "ulcer", "ulna", "ultra", "umbra", "ump", "umpire", "unable",
    "unarm", "unary", "unbar", "unbend", "unbent", "unbind", "unbolt", "unborn", "uncap",
    "uncle", "unclad", "unclip", "uncoil", "uncork", "uncut", "under", "undid", "undies",
    "undo", "undue", "unduly", "unease", "uneasy", "uneven", "unfed", "unfit", "unfix",
    "unfold", "unfurl", "unglue", "ungod", "unhand", "unhasp", "unhat", "unheard", "unhewn",
    "unholy", "unhook", "unhung", "unhurt", "unify", "union", "unique", "unisex", "unison",
    "unit", "unite", "unity", "unjam", "unkind", "unlace", "unlade", "unlaid", "unlatch",
    "unlay", "unless", "unlike", "unload", "unlock", "unloved", "unmade", "unmake", "unman",
    "unmask", "unmet", "unmix", "unmoor", "unmoved", "unopen", "unpack", "unpaid", "unpeg",
    "unpick", "unpile", "unpin", "unplug", "unpure", "unread", "unreal", "unrest", "unrig",
    "unripe", "unrobe", "unroll", "unroof", "unruly", "unsafe", "unsaid", "unsay", "unseal",
    "unseat", "unseen", "unsel", "unset", "unsew", "unship", "unshod", "unshut", "unsnap",
    "unsold", "unsown", "unspun", "unstep", "unstop", "unsure", "untack", "untag", "untame",
    "untidy", "untie", "until", "untold", "untrue", "untuck", "untune", "unveil", "unvest",
    "unwarp", "unwed", "unwell", "unwept", "unwind", "unwise", "unwit", "unwon", "unworn",
    "unwove", "unwrap", "unzip", "up", "upbeat", "upbrai", "upcome", "update", "upend",
    "upgrad", "upheal", "upheld", "uphill", "uphold", "uphroe", "upkeep", "upland", "uplift",
    "upload", "upon", "upper", "uprise", "uproar", "uproot", "upset", "upshot", "upside",
    "upstag", "upstar", "upstat", "upstep", "upsurg", "uptake", "uptick", "uptime", "uptown",
    "upturn", "upward", "upwind", "uranus", "urban", "urbane", "urchin", "urea", "urge",
    "urgent", "urine", "urn", "usage", "use", "useful", "user", "usher", "usual",
    "usurp", "usury", "utens", "uteri", "utile", "utilis", "utmost", "utopia", "utter",
    "uvula", "vacant", "vacate", "vacuo", "vacuum", "vagary", "vagile", "vagina", "vagrant",
    "vague", "vail", "vain", "vale", "valet", "valid", "valor", "valse", "value",
    "valve", "vamp", "van", "vane", "vang", "vanish", "vanity", "vanqu", "vapid",
    "vapor", "varix", "vary", "vase", "vast", "vat", "vault", "vaunt", "veal",
    "vector", "vee", "veer", "veg", "vegan", "vegeta", "vehem", "vehicl", "veil",
    "vein", "veld", "vellum", "velour", "venal", "vend", "vendor", "veneer",
    "venial", "venin", "venire", "venom", "vent", "venue", "venus", "vera", "verb",
    "verbal", "verbid", "verdit", "verdur", "verge", "verify", "verily", "verism", "verity",
    "verme", "vermin", "vernal", "versa", "verse", "verso", "verst", "versus", "vert",
    "vertex", "verve", "very", "vesper", "vessel", "vest", "vestal", "vested", "vet",
    "vetch", "veter", "veto", "vex", "via", "viable", "viadu", "vial", "viand",
    "vibe", "vibra", "vicar", "vice", "vicuna", "video", "vie", "view", "vigil",
    "vigor", "vile", "vilify", "villa", "ville", "vim", "vina", "vinal", "vine",
    "vinega", "vino", "vinyl", "viol", "viola", "violet", "violin", "viper", "virago",
    "viral", "vireo", "virgil", "virgin", "virile", "virtu", "virtue", "virus", "visa",
    "visage", "viscid", "viscus", "vise", "vision", "visit", "visor", "vista", "visual",
    "vita", "vitae", "vital", "vitta", "vittle", "viva", "vivace", "vivant", "vivid",
    "vivify", "vixen", "viz", "vizier", "vizor", "vocab", "vocal", "vodka", "vogue",
    "voice", "void", "voile", "volant", "vole", "volley", "volt", "volubl", "volume", "volute",
    "vomit", "vortex", "votary", "vote", "voter", "votive", "vouch", "vow", "vowel",
    "voyage", "vulcan", "vulgar", "vulva", "vying", "wack", "wacky", "wad", "waddle",
    "wade", "wadi", "wafer", "waffle", "waft", "wag", "wage", "wager", "wagon",
    "waif", "wail", "waist", "wait", "waive", "wake", "waken", "wale", "walk",
    "wall", "wallop", "wallow", "walnut", "walrus", "waltz", "wan", "wand", "wander",
    "wane", "wangl", "want", "wanton", "war", "warble", "ward", "warden", "warder",
    "ware", "warfar", "warhoo", "warm", "warmth", "warn", "warp", "warran", "warren",
    "warrio", "wart", "warty", "wary", "was", "wash", "wasp", "wast", "waste",
    "watch", "water", "watt", "wattle", "wave", "waver", "wavy", "wax", "waxen",
    "waxy", "way", "waylay", "waywar", "we", "weak", "weaken", "weal", "wealth",
    "wean", "wear", "weary", "weasel", "weathe", "weave", "web", "webbed", "weber",
    "wed", "wedded", "wedge", "wee", "weed", "weedy", "week", "ween", "weeny",
    "weep", "weevil", "weft", "weigh", "weight", "weird", "weir", "welch", "weld",
    "welfar", "well", "welt", "welter", "wen", "wench", "wend", "went", "wept",
    "were", "wert", "west", "wet", "whack", "whale", "wham", "wharf", "what",
    "wheal", "wheat", "wheel", "wheeze", "whelk", "whelm", "whelp", "when", "whence",
    "where", "whet", "whethe", "whew", "whey", "which", "whiff", "whig", "while",
    "whilst", "whim", "whimper", "whin", "whine", "whinny", "whip", "whir", "whirl",
    "whisk", "whispe", "whist", "whit", "white", "whiten", "whithe", "whiz", "who",
    "whoa", "whole", "whom", "whoop", "whoosh", "whop", "whore", "whorl", "whose",
    "whoso", "why", "wick", "wicked", "wicker", "wicket", "wide", "widen", "widow",
    "width", "wield", "wife", "wig", "wiggle", "wigwam", "wild", "wile", "will",
    "wilt", "wily", "wimp", "wimple", "win", "wince", "winch", "wind",
    "window", "windpi", "windro", "windup", "windy", "wine", "wing", "wink", "winner",
    "winnow", "wino", "winter", "wintry", "wipe", "wire", "wiry", "wisdom", "wise",
    "wish", "wisp", "wispy", "wist", "wit", "witch", "with", "withal", "withd",
    "withe", "within", "withou", "witnes", "witty", "wive", "wizard", "wizene", "woad",
    "wobble", "woe", "woeful", "wok", "woke", "woken", "wold", "wolf", "woman",
    "womb", "won", "wonder", "wonky", "wont", "woo", "wood", "wooden", "wooer",
    "woof", "wool", "woolen", "woolly", "woozy", "word", "wordy", "wore", "work",
    "worker", "world", "worm", "wormy", "worn", "worry", "worse", "worst", "worth",
    "worthy", "wot", "would", "wound", "wove", "woven", "wow", "wrack", "wraith",
    "wrangl", "wrap", "wrath", "wreak", "wreath", "wreck", "wren", "wrench", "wrest",
    "wretch", "wried", "wrier", "wriest", "wring", "wrist", "writ", "write", "writhe",
    "wrong", "wrote", "wroth", "wrung", "wry", "wurst", "xenon", "xylem", "yacht",
    "yahoo", "yak", "yam", "yank", "yap", "yard", "yarn", "yaw", "yawl",
    "yawn", "yea", "yeah", "year", "yearn", "yeast", "yell", "yellow", "yelp",
    "yen", "yeoman", "yep", "yes", "yest", "yet", "yeti", "yew", "yield",
    "yip", "yodel", "yoga", "yogi", "yoke", "yokel", "yolk", "yon", "yonder",
    "yore", "you", "young", "your", "youth", "yowl", "yucca", "yuck", "yule",
    "yummy", "yurt", "zap", "zeal", "zealot", "zebra", "zebu", "zero",
    "zest", "zesty", "zeta", "zig", "zilch", "zinc", "zing", "zion", "zip",
    "zipper", "zircon", "zither", "zodiac", "zombie", "zone", "zoo", "zoom"
];


// --- Generation Logic ---

/**
 * Generates a random cat name by combining parts or picking a simple name.
 * Displays the generated name.
 */
function generateRandomCatName() {
    let generatedName = "";
    const randomChoice = Math.random(); // Random number between 0 and 1

    // --- Determine Generation Method ---
    if (randomChoice < 0.35 && simpleNames.length > 0) { // Slightly reduced chance for simple names
        const randomIndex = Math.floor(Math.random() * simpleNames.length);
        generatedName = simpleNames[randomIndex];

    } else if (randomChoice < 0.85 && nameStarts.length > 0 && nameEnds.length > 0) { // Increased chance for combinations
        const startIdx = Math.floor(Math.random() * nameStarts.length);
        const endIdx = Math.floor(Math.random() * nameEnds.length);
        let startPart = nameStarts[startIdx];
        let endPart = nameEnds[endIdx];

        const titles = ["Professor", "Captain", "Agent", "Sir", "Madam", "Prince", "Princess", "Major", "Doctor", "General", "Admiral", "Baron", "Count", "Duchess", "King", "Queen", "Lord", "Lady", "Chief", "Commander"];
        if (titles.includes(startPart)) {
             generatedName = startPart + " " + endPart.charAt(0).toUpperCase() + endPart.slice(1);
        } else {
             if (endPart.length > 3 && Math.random() < 0.5) {
                 endPart = endPart.charAt(0).toUpperCase() + endPart.slice(1);
             }
             if (startPart.toLowerCase() === endPart.toLowerCase()) {
                 generatedName = startPart;
             } else {
                 generatedName = startPart + endPart;
             }
        }

    } else if (randomChoice < 0.93 && nameStarts.length > 0) { // Adjusted chance
         const startIdx = Math.floor(Math.random() * nameStarts.length);
         generatedName = nameStarts[startIdx];

    } else if (nameEnds.length > 0) { // Adjusted chance
         const endIdx = Math.floor(Math.random() * nameEnds.length);
         generatedName = nameEnds[endIdx].charAt(0).toUpperCase() + nameEnds[endIdx].slice(1);

    } else if (simpleNames.length > 0) {
         const randomIndex = Math.floor(Math.random() * simpleNames.length);
         generatedName = simpleNames[randomIndex];
    } else {
        generatedName = "Mittens"; // Default fallback
    }

    // --- Display the Result ---
    catNameDisplay.textContent = generatedName;
    catNameDisplay.style.color = getRandomColor();

     // --- Reset Button State ---
     generateBtn.disabled = false;
     generateBtn.textContent = 'Find a Name!';
}

/**
 * Returns a random hex color code from a predefined list.
 * @returns {string} A random color hex code.
 */
function getRandomColor() {
    const colors = ['#3498db', '#e74c3c', '#9b59b6', '#f1c40f', '#1abc9c', '#2ecc71', '#e67e22', '#34495e', '#8e44ad', '#2c3e50'];
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Copies the currently displayed cat name to the clipboard.
 */
function copyNameToClipboard() {
    const nameToCopy = catNameDisplay.textContent;
    // Avoid copying placeholder text
    if (nameToCopy && nameToCopy !== "Your new friend's name awaits! ✨") {
        navigator.clipboard.writeText(nameToCopy).then(() => {
            // --- Success feedback ---
            copyBtn.classList.add('copied'); // Add class to show feedback

            // Remove the feedback after a short delay
            setTimeout(() => {
                copyBtn.classList.remove('copied');
            }, 1500); // Show "Copied!" for 1.5 seconds

        }).catch(err => {
            // --- Error handling ---
            console.error('Failed to copy name: ', err);
            // Optionally provide user feedback about the error
            // For simplicity, we'll just log the error here
        });
    }
}


// --- Attach Event Listeners ---
generateBtn.addEventListener('click', generateRandomCatName);
copyBtn.addEventListener('click', copyNameToClipboard); // Add listener for copy button

// --- Update Button Text on Load ---
generateBtn.textContent = 'Find a Name!';

// Optional: Display an initial message or generate a name on load
// catNameDisplay.textContent = "Click the button to start!";
// generateRandomCatName(); // Uncomment to generate a name immediately when the page loads

