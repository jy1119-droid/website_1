import {
  AudioLines,
  Brush,
  Eraser,
  Film,
  Image as ImageIcon,
  Maximize2,
  Music,
  PenLine,
  ShieldCheck,
  Sparkles,
  Type,
  Wand2,
  Zap,
  Building2,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type NavLink = { label: string; href: string; hint?: string };
export type NavItem = { label: string; href: string; links: NavLink[] };

export const NAV_ITEMS: NavItem[] = [
  {
    label: "AI Video",
    href: "#video",
    links: [
      { label: "Text to Video", href: "#video", hint: "Prompt → cinematic clip" },
      { label: "Image to Video", href: "#video", hint: "Animate any still" },
      { label: "Video Upscaler", href: "#tools", hint: "HD → 4K in one pass" },
      { label: "Effects Library", href: "#effects", hint: "40+ big-screen looks" },
    ],
  },
  {
    label: "AI Image",
    href: "#image",
    links: [
      { label: "Text to Image", href: "#image", hint: "Seedream 5.0 Pro" },
      { label: "Image Upscaler", href: "#tools", hint: "Recover detail up to 8K" },
      { label: "Object Remover", href: "#tools", hint: "Clean plates, instantly" },
      { label: "Style Presets", href: "#seedream", hint: "Posters, UI, branding" },
    ],
  },
  {
    label: "AI Music",
    href: "#music",
    links: [
      { label: "Music Generator", href: "#music", hint: "Original tracks, no samples" },
      { label: "Lyrics & Vocals", href: "#music", hint: "Write, sing, master" },
      { label: "Stems & Loops", href: "#music", hint: "Export for any DAW" },
    ],
  },
  {
    label: "AI Text",
    href: "#text",
    links: [
      { label: "Copywriting", href: "#text", hint: "Hooks, ads, scripts" },
      { label: "Story & Script", href: "#text", hint: "Long-form, on brand" },
      { label: "Prompt Enhancer", href: "#text", hint: "Better prompts, better output" },
    ],
  },
  {
    label: "Pixel Art",
    href: "#pixel",
    links: [
      { label: "16-bit Sprites", href: "#pixel", hint: "Character sheets" },
      { label: "Item Icons", href: "#pixel", hint: "Inventory-ready" },
      { label: "Isometric Scenes", href: "#pixel", hint: "World building" },
    ],
  },
  {
    label: "Pricing",
    href: "#pricing",
    links: [
      { label: "Plans & Credits", href: "#pricing", hint: "Startup to Premium" },
      { label: "Credit Calculator", href: "#pricing", hint: "Estimate your month" },
      { label: "Enterprise", href: "#trust", hint: "SOC 2-ready" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const HERO_PROMPTS = [
  "a neon-soaked Tokyo alley at night, slow cinematic dolly-in, rain reflections…",
  "a golden retriever astronaut drifting past Saturn, Pixar-style lighting…",
  "liquid chrome pouring over marble, macro shot, studio softbox…",
  "an 8-bit hero sprite for a cyberpunk platformer, 32×32, transparent…",
  "a lo-fi hip-hop beat with warm vinyl crackle and mellow Rhodes chords…",
  "a streetwear poster for a 2077 synth label, brutalist type, risograph…",
];

export const SOCIAL_PROOF = [
  "Used by 150K+ creators",
  "With Privacy in Mind",
  "No experience needed",
  "Cancel anytime",
];

/* ------------------------------------------------------------------ */
/* Capability showcase                                                 */
/* ------------------------------------------------------------------ */

export const SHOWCASE_TABS = [
  { id: "video", label: "AI Video & Image" },
  { id: "effects", label: "Visual Effects" },
  { id: "pixel", label: "Pixel Art" },
  { id: "seedream", label: "Seedream 5.0 Pro" },
] as const;

export type ShowcaseTabId = (typeof SHOWCASE_TABS)[number]["id"];

export const VIDEO_FEATURES: {
  id: string;
  title: string;
  description: string;
  badge: string;
  before: string;
  after: string;
  gradient: string;
}[] = [
  {
    id: "upscale",
    title: "Cinematic Upscale",
    description:
      "Lift a 720p draft to razor-sharp 4K with face and detail recovery, frame by frame.",
    badge: "Up to 4K",
    before: "720p draft",
    after: "4K master",
    gradient: "from-indigo-500/70 via-violet-500/40 to-cyan-400/60",
  },
  {
    id: "remove",
    title: "Object Removal",
    description:
      "Paint over anything — boom mics, logos, bystanders — and get a clean plate that holds up.",
    badge: "Clean plate",
    before: "Cluttered shot",
    after: "Nothing but subject",
    gradient: "from-cyan-500/70 via-sky-500/40 to-emerald-400/60",
  },
  {
    id: "extend",
    title: "Shot Extension",
    description:
      "Stretch any clip forward or backward with matched motion, grain and lighting.",
    badge: "+8s",
    before: "3s clip",
    after: "11s sequence",
    gradient: "from-fuchsia-500/70 via-pink-500/40 to-orange-400/60",
  },
];

export const EFFECTS: {
  name: string;
  tag: string;
  gradient: string;
  span?: string;
}[] = [
  {
    name: "Fog Roll",
    tag: "Atmosphere",
    gradient: "from-slate-500/60 via-zinc-500/30 to-indigo-500/50",
    span: "md:col-span-2 md:row-span-2",
  },
  { name: "Ghost Trail", tag: "Motion", gradient: "from-cyan-500/60 to-violet-500/50" },
  { name: "Lens Dive", tag: "Camera", gradient: "from-indigo-500/60 to-fuchsia-500/50" },
  {
    name: "Liquid Chrome",
    tag: "Material",
    gradient: "from-zinc-300/50 via-sky-400/40 to-zinc-600/50",
  },
  { name: "Rift Glitch", tag: "Distortion", gradient: "from-rose-500/60 to-amber-400/50" },
  { name: "Aurora Bloom", tag: "Light", gradient: "from-emerald-400/60 to-cyan-500/50" },
  {
    name: "Dust Storm",
    tag: "Atmosphere",
    gradient: "from-amber-500/60 to-orange-600/50",
  },
  { name: "Neon Grid", tag: "Retro", gradient: "from-violet-500/60 to-pink-500/50" },
];

export const PIXEL_FILTERS = [
  "All",
  "16-bit sprite",
  "Item icon",
  "Scene",
  "8-bit",
  "Isometric",
  "Portrait",
] as const;

export type PixelFilter = (typeof PIXEL_FILTERS)[number];

export const PIXEL_ART: {
  title: string;
  category: Exclude<PixelFilter, "All">;
  prompt: string;
  gradient: string;
  glyph: string;
}[] = [
  {
    title: "Skyward Blade",
    category: "16-bit sprite",
    prompt: "16-bit hero sprite, skyward blade, 32×32, 4-frame idle",
    gradient: "from-indigo-600/60 to-cyan-500/50",
    glyph: "⚔",
  },
  {
    title: "Health Vial",
    category: "Item icon",
    prompt: "item icon, glowing health vial, 64×64, dark outline",
    gradient: "from-rose-500/60 to-amber-400/50",
    glyph: "🧪",
  },
  {
    title: "Ruined Keep",
    category: "Scene",
    prompt: "scene, ruined keep at dusk, parallax layers, 320×180",
    gradient: "from-slate-600/60 to-violet-500/50",
    glyph: "🏰",
  },
  {
    title: "Coin Sprite",
    category: "8-bit",
    prompt: "8-bit coin, 4-frame spin, 16×16, NES palette",
    gradient: "from-amber-400/60 to-yellow-300/50",
    glyph: "🪙",
  },
  {
    title: "Hover Town",
    category: "Isometric",
    prompt: "isometric town tile, hover platforms, 128×128, 45°",
    gradient: "from-emerald-500/60 to-teal-400/50",
    glyph: "🏙",
  },
  {
    title: "Ranger Portrait",
    category: "Portrait",
    prompt: "portrait, elf ranger, dialogue bust, 96×96, 32 colours",
    gradient: "from-fuchsia-500/60 to-indigo-500/50",
    glyph: "🧝",
  },
  {
    title: "Plasma Cannon",
    category: "Item icon",
    prompt: "item icon, plasma cannon, 64×64, neon rim light",
    gradient: "from-cyan-500/60 to-blue-600/50",
    glyph: "🔫",
  },
  {
    title: "Canyon Run",
    category: "Scene",
    prompt: "scene, canyon speed run, 16-bit, sunset gradient sky",
    gradient: "from-orange-500/60 to-pink-500/50",
    glyph: "🏜",
  },
  {
    title: "Mage Sprite",
    category: "16-bit sprite",
    prompt: "16-bit mage sprite, cast animation, 32×48, 6 frames",
    gradient: "from-violet-600/60 to-purple-400/50",
    glyph: "🧙",
  },
];

export const SEEDREAM_GALLERY: {
  title: string;
  category: string;
  meta: string;
  gradient: string;
  span?: string;
}[] = [
  {
    title: "Synthetica Poster",
    category: "Streetwear poster",
    meta: "1:1.4 · print-ready",
    gradient: "from-fuchsia-600/60 via-violet-500/40 to-cyan-400/50",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    title: "HUD Interface Kit",
    category: "Game interface",
    meta: "16:9 · layered PSD",
    gradient: "from-cyan-500/60 via-sky-500/40 to-indigo-600/50",
  },
  {
    title: "Kiln Ceramics",
    category: "Homeware branding",
    meta: "4:5 · catalogue",
    gradient: "from-amber-500/60 via-orange-500/40 to-rose-500/50",
  },
  {
    title: "Aurora Runway",
    category: "Streetwear poster",
    meta: "2:3 · billboard",
    gradient: "from-emerald-500/60 via-teal-500/40 to-indigo-500/50",
  },
  {
    title: "Vector Quest UI",
    category: "Game interface",
    meta: "1:1 · sprite atlas",
    gradient: "from-violet-600/60 via-indigo-500/40 to-pink-500/50",
  },
  {
    title: "Monolith Living",
    category: "Homeware branding",
    meta: "3:2 · lookbook",
    gradient: "from-zinc-400/60 via-slate-500/40 to-sky-500/50",
  },
];

/* ------------------------------------------------------------------ */
/* Tools grid                                                          */
/* ------------------------------------------------------------------ */

export type Tool = {
  name: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  span?: string;
};

export const TOOLS: Tool[] = [
  {
    name: "AI Video Generator",
    description:
      "Turn a sentence into a graded, sound-designed shot. Camera moves, lighting and pacing handled for you.",
    icon: Film,
    accent: "from-indigo-500/25 to-cyan-500/10",
    span: "md:col-span-2",
  },
  {
    name: "AI Image Generator",
    description:
      "Photoreal, illustrative or product — Seedream 5.0 Pro renders on-brand frames with clean typography.",
    icon: ImageIcon,
    accent: "from-violet-500/25 to-fuchsia-500/10",
  },
  {
    name: "AI Music Generator",
    description:
      "Original tracks with structure, stems and mastering. No samples, fully licensable.",
    icon: Music,
    accent: "from-emerald-500/25 to-teal-500/10",
  },
  {
    name: "Image Upscaler",
    description:
      "Recover skin, fabric and type up to 8K while keeping the grain you actually wanted.",
    icon: Maximize2,
    accent: "from-sky-500/25 to-indigo-500/10",
  },
  {
    name: "Video Upscaler",
    description:
      "Batch a whole sequence to 4K with temporally stable detail — no flicker between frames.",
    icon: Sparkles,
    accent: "from-amber-500/25 to-orange-500/10",
    span: "md:col-span-2",
  },
  {
    name: "Object Remover",
    description:
      "Erase props, watermarks and passers-by, then let the model rebuild the background behind them.",
    icon: Eraser,
    accent: "from-rose-500/25 to-pink-500/10",
  },
  {
    name: "AI Text & Copy",
    description:
      "Hooks, scripts, product copy and long-form drafts that stay in your brand voice.",
    icon: Type,
    accent: "from-cyan-500/25 to-blue-500/10",
  },
  {
    name: "Pixel Art Studio",
    description:
      "Sprite sheets, tilesets and icons with palettes locked to your game's look.",
    icon: Brush,
    accent: "from-fuchsia-500/25 to-violet-500/10",
  },
  {
    name: "Prompt Enhancer",
    description:
      "Describe it badly; we rewrite it into a prompt that actually renders the idea in your head.",
    icon: Wand2,
    accent: "from-indigo-500/25 to-violet-500/10",
  },
];

export const TOOLS_EXTRAS = [
  { name: "Voice & Lyrics", icon: AudioLines },
  { name: "Script Writer", icon: PenLine },
];

/* ------------------------------------------------------------------ */
/* Trust / enterprise                                                  */
/* ------------------------------------------------------------------ */

export const TRUST_PILLARS: {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}[] = [
  {
    title: "Safety First",
    description:
      "Built-in content filtering runs on every prompt and every render, before anything reaches your library.",
    icon: ShieldCheck,
    points: ["Prompt & output filtering", "Report + takedown workflow", "Age-aware defaults"],
  },
  {
    title: "Fast Iteration",
    description:
      "Generate, compare and re-roll in one canvas. Version history means nothing good is ever lost.",
    icon: Zap,
    points: ["Sub-minute first render", "Side-by-side compare", "Infinite version history"],
  },
  {
    title: "Enterprise-Grade",
    description:
      "The architecture is built for teams that have to answer to security review — not just to move fast.",
    icon: Building2,
    points: ["SOC 2-ready architecture", "Audit logs & SSO", "No training on your data"],
  },
];

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

export type Plan = {
  id: string;
  name: string;
  price: number;
  tagline: string;
  badge?: string;
  featured?: boolean;
  videos: number;
  images: number;
  songs: number;
  credits: number;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    id: "startup",
    name: "Startup",
    price: 60,
    tagline: "For solo creators shipping their first campaigns.",
    videos: 120,
    images: 1200,
    songs: 30,
    credits: 3000,
    features: [
      "All AI Video, Image & Music tools",
      "Seedream 5.0 Pro image model",
      "Commercial use licence",
      "720p exports with watermark-free stills",
      "Email support",
    ],
  },
  {
    id: "creator",
    name: "Creator",
    price: 95,
    tagline: "For growing studios that need volume and 4K.",
    badge: "Most popular",
    featured: true,
    videos: 300,
    images: 4000,
    songs: 90,
    credits: 9000,
    features: [
      "Everything in Startup",
      "4K video upscaling & 8K stills",
      "Object Remover + Visual Effects library",
      "Stems & loop export for every track",
      "Priority render queue",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 195,
    tagline: "For teams, agencies and multi-brand work.",
    videos: 900,
    images: 12000,
    songs: 300,
    credits: 30000,
    features: [
      "Everything in Creator",
      "5 seats with shared brand kits",
      "Audit logs, SSO & role controls",
      "Batch API access",
      "Dedicated success manager",
    ],
  },
];

export const PRICING_ASSURANCES = [
  "Commercial use on every plan",
  "Cancel anytime",
  "14-day refund policy",
  "Your data is never used for training",
];

export const PAYMENTS = ["Visa", "Mastercard", "Amex"];

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const FOOTER_COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Video",
    links: ["Text to Video", "Image to Video", "Video Upscaler", "Effects Library", "Lip Sync"],
  },
  {
    title: "Image",
    links: ["Text to Image", "Image Upscaler", "Object Remover", "Seedream 5.0 Pro", "Style Presets"],
  },
  {
    title: "Music & Text",
    links: ["Music Generator", "Lyrics & Vocals", "Stems Export", "Copywriting", "Prompt Enhancer"],
  },
  {
    title: "Community",
    links: ["Showcase", "Discord", "Creator Program", "Affiliates", "Changelog"],
  },
  {
    title: "Academy",
    links: ["Getting Started", "Prompt Guides", "Video Course", "Templates", "Help Centre"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Settings", "DPA", "Contact"],
  },
];
