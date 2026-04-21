import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CopyablePrompt from "./CopyablePrompt";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "The AI UGC Ad SOP — Scale Science",
  description:
    "A step-by-step system for building high-performing UGC ads using AI — from finding your customer avatar to generating a finished video you can run on paid social.",
  robots: { index: false, follow: false },
};

const HOOKS = [
  "The truth about how I actually got started in ___",
  "One thing I'll never do again in ___",
  "What I learned after completely failing at ___",
  "Nobody is talking about this in ___",
  "How I accidentally discovered ___",
  "What I would do differently if I started ___ today",
  "The easiest way to get started with ___",
  "How to finally stay consistent with ___",
  "Why your ___ isn't working (and how to fix it)",
  "I regret not doing this sooner in ___",
  "The simplest strategy that helped me grow in ___",
  "The worst advice I ever got about ___",
  "One mindset shift that changed everything for me in ___",
  "You don't need to be perfect to start ___",
  "The lazy person's guide to mastering ___",
  "I tried ___ so you don't have to",
  "What nobody tells you about ___",
  "The quickest way to master ___",
  "I can't believe ___ actually works",
  "This changed everything for me in ___",
  "The secret behind why ___ always works",
  "Watch this before you try ___",
  "Why does nobody talk about ___?",
  "Don't fall for this ___ trap",
  "You've never seen ___ done like this",
  "Stop wasting your time on ___",
  "My results after trying ___ for 30 days",
  "Want to save money on ___? Do this",
  "I wish I knew this before ___",
  "Three mistakes keeping you stuck in ___",
  "How I turned my biggest failure in ___ into success",
  "The one thing that separates beginners from experts in ___",
  "I spent $___ on ___ so you don't have to",
  "What I learned from my first year doing ___",
  "Nobody prepares you for this part of ___",
  "The truth about \"overnight success\" in ___",
  "What I would tell my younger self about ___",
  "How to overcome fear of failure in ___",
  "The unexpected benefit of doing ___",
  "What happens when you finally stop overthinking ___",
  "How I got my first win in ___",
  "This one small habit made the biggest difference in ___",
  "The real reason people quit ___ too soon",
  "How to stay motivated when ___ gets hard",
  "Why most people never succeed in ___",
  "The easiest way to stay consistent with ___",
  "The brutal truth about ___ no one wants to hear",
  "How to stop overcomplicating ___",
  "The #1 myth about ___ you still believe",
  "The step-by-step system I use for ___",
  "You're doing ___ wrong (and you don't even know it)",
  "How I simplified my entire process for ___",
  "The honest truth about my journey in ___",
  "I wish someone told me this when I started ___",
  "The most underrated tool I use for ___",
  "How to get better results in ___ without burnout",
  "The three non-negotiables that keep me on track in ___",
  "Five lessons I learned the hard way from ___",
  "The advice I ignored that changed my ___",
  "The one thing nobody admits about ___",
  "My exact morning routine for ___ success",
  "The most underrated skill you need for ___",
  "Why consistency beats motivation in ___",
  "How to stop comparing yourself to others in ___",
  "What finally made ___ click for me",
  "This unpopular opinion about ___ might surprise you",
  "The best advice I ever got about ___",
  "How to actually enjoy the process of ___",
  "Why most \"tips\" about ___ don't work",
  "What's really stopping you from succeeding in ___",
  "The habit that completely transformed my ___ journey",
  "How to know if you're making progress in ___",
  "Why I stopped doing ___ even though it worked",
  "The beginner-friendly way to start ___",
  "Three things I do daily that improved my ___",
  "The biggest mistake I made when starting ___",
  "What happens if you do ___ every day for 30 days",
  "I tried all the popular methods for ___ — here's what actually worked",
  "What people get wrong about ___",
  "The secret nobody shares about ___",
  "The truth behind my \"overnight\" success in ___",
  "Why you don't need expensive tools to start ___",
  "My honest thoughts after doing ___ for six months",
  "I quit ___ for 30 days — here's what happened",
  "The most common misconception about ___",
  "Why you'll thank yourself later for starting ___ now",
  "How to avoid burnout while doing ___",
  "Why you don't need to be an expert to start ___",
  "The simple framework I use for ___",
  "How I manage my time while doing ___",
  "This underrated habit boosted my ___ results",
  "I followed ___ advice for a week — did it work?",
  "The one thing that helped me finally stay consistent in ___",
  "Three unexpected lessons I learned from ___",
  "How to build discipline when doing ___ feels impossible",
  "Why I stopped listening to gurus about ___",
  "What I do when I lose motivation for ___",
  "The biggest myth that's holding you back in ___",
  "The thing that nobody tells you about success in ___",
  "I tested all the hacks for ___ — here's the truth",
];

const COMBINED_PROMPT = `Take the avatar overview file attached, and a list of these viral UGC hooks, and create a brief 10–30 second UGC script for my product. Be sure to keep the tone, pacing, and sentence structure natural and human-like. Avoid excessive use of 1–2 word sentences and ensure it flows like a conversation, with the goal of having the UGC character share an honest story about their experience using the product.

While keeping the script short, the storytelling should feel like problem → story → solution. Do not just jump straight into the product right away.

Once I approve the script I need you to do the following. The script is the first part in a multiple-step process to creating a compelling UGC ad using Seedance 2.0. After I approve the script, I need you to break the script down into 2–3 congruent scenes, based on the script length, so the model is talking at a consistent and normal pace throughout the entire script. Break down each scene into its own parts with consistent cuts, motion, and field of depth, to make the video engaging but natural.

I've also uploaded the model and the product she should hold. When we approach the scene scripting part, also prompt and note when the product should be in their hand so I can @ the element. Your output should follow this structure:

## SCENE 1
**Script line:**
**Visual setup:**
--
## SCENE 2
**Script line:**
**Visual setup:**
--
## SCENE 3
**Script line:**
**Visual setup:**

Here is the hook list:
${HOOKS.map((h) => h).join("\n")}`;

type Tool = { name: string; desc: string; href: string };
const TOOLS: Tool[] = [
  { name: "Google Gemini", desc: "Transcribe your winning ad videos (free)", href: "https://gemini.google.com" },
  { name: "Claude", desc: "Sonnet 4.6 for most steps, Opus 4.7 for the Seedance scripts", href: "https://claude.ai" },
  { name: "Google AI Studio", desc: "Nano Banana 2 for the AI model and product renders", href: "https://aistudio.google.com" },
  { name: "Pinterest", desc: "Source realistic video setting references", href: "https://pinterest.com" },
  { name: "Kie.ai — Seedance 2.0", desc: "Video generation (account + credits required)", href: "https://kie.ai/seedance-2-0" },
  { name: "Instagram Edits", desc: "Free video editor for trimming silences and speed adjustments", href: "https://about.instagram.com/blog/announcements/introducing-edits" },
];

type Case = { brand: string; stat: string; detail: string };
const CASES: Case[] = [
  { brand: "Sepura", stat: "+234%", detail: "ROAS improvement in 90 days" },
  { brand: "myco:soul", stat: "+1,076%", detail: "Meta-attributed revenue" },
  { brand: "Health brand", stat: "+433%", detail: "Profitable ad budget scale" },
  { brand: "Kitchen brand", stat: "$122K", detail: "New revenue in 60 days" },
];

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2" style={{ letterSpacing: "0.14em" }}>
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-primary leading-tight">{title}</h2>
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 border-l-2 border-accent bg-bg-panel/60 px-4 py-3 rounded-r">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1" style={{ letterSpacing: "0.14em" }}>
        Tip
      </p>
      <p className="text-sm text-primary leading-relaxed">{children}</p>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 border-l-2 border-primary/30 bg-bg-card px-4 py-3 rounded-r">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1" style={{ letterSpacing: "0.14em" }}>
        Note
      </p>
      <p className="text-sm text-primary leading-relaxed">{children}</p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-secondary leading-relaxed">
      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
      <span>{children}</span>
    </li>
  );
}

export default function AiUgcSop() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Top nav */}
      <header className="border-b border-border bg-bg/90 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={`${BASE}/images/scale-science-logo.png`}
              alt="Scale Science"
              width={140}
              height={40}
              className="h-7 w-auto"
            />
          </Link>
          <span className="inline-flex items-center gap-2 border border-border bg-bg-card rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span className="text-xs font-semibold text-primary">Free Guide</span>
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-14 md:pt-20 pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4" style={{ letterSpacing: "0.14em" }}>
            Scale Science · Free Guide
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight text-primary mb-5">
            The AI UGC <em className="italic text-accent">Ad SOP.</em>
          </h1>
          <p className="text-secondary text-lg leading-relaxed mb-8 max-w-2xl">
            A step-by-step system for building high-performing UGC ads using AI — from finding your
            customer avatar to generating a finished video you can run on paid social.
          </p>

          <div className="rounded-xl border border-border bg-bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4" style={{ letterSpacing: "0.14em" }}>
              What you&apos;ll learn inside
            </p>
            <ul className="space-y-2.5">
              {[
                "How to extract a real customer avatar from your winning ads",
                "How to generate a consistent AI model and product reference image",
                "How to write a UGC script that sounds human, not like an ad",
                "How to break the script into Seedance-ready scene prompts",
                "How to generate, edit, and finish the final video",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-accent mt-0.5">
                    <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-tertiary text-xs mt-5 leading-relaxed">
              Everything you need — prompts, tools, hook list, structure — copy, paste, go.
            </p>
          </div>
        </section>

        {/* Scale Science intro band */}
        <section className="py-10 border-t border-border">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
                Who wrote this
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-normal leading-tight text-primary mb-3">
                Scale Science — boutique Meta ads for 6-7 figure eCom brands.
              </h2>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                We run Meta funnels for a handful of DTC brands at a time. Data-backed creative,
                senior strategists, landing pages engineered to convert. This SOP is the exact
                system our team runs when we build AI UGC variants for client accounts.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                See how we work
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {CASES.map((c) => (
                <div key={c.brand} className="rounded-lg border border-border bg-bg-card px-4 py-3">
                  <p className="font-serif text-2xl text-accent leading-none mb-1">{c.stat}</p>
                  <p className="text-xs font-semibold text-primary">{c.brand}</p>
                  <p className="text-xs text-tertiary leading-snug mt-0.5">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's inside */}
        <section className="py-10 border-t border-border">
          <SectionHeader eyebrow="The pipeline" title="What's inside" />
          <ol className="space-y-3">
            {[
              ["Step 1", "Build Your Customer Avatar From a Winning Ad"],
              ["Step 2", "Generate Your AI UGC Model"],
              ["Step 3", "Generate Your Product Reference Image"],
              ["Step 4", "Write the Script & Scene Prompts"],
              ["Step 5", "Generate the Videos in Seedance 2.0"],
              ["Step 6", "Edit and Finish the Ad"],
              ["Bonus", "100+ Viral UGC Hook Templates"],
            ].map(([step, title]) => (
              <li key={step} className="flex items-start gap-4 py-2 border-b border-border-subtle last:border-b-0">
                <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-accent w-16 pt-0.5" style={{ letterSpacing: "0.12em" }}>
                  {step}
                </span>
                <span className="text-primary text-base">{title}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Tools */}
        <section className="py-10 border-t border-border">
          <SectionHeader eyebrow="Before you start" title="Tools you'll need" />
          <ul className="space-y-3">
            {TOOLS.map((t) => (
              <li key={t.name} className="rounded-lg border border-border bg-bg-card px-4 py-3">
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-4 group"
                >
                  <div>
                    <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      {t.name}
                    </p>
                    <p className="text-xs text-secondary mt-0.5 leading-relaxed">{t.desc}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-tertiary group-hover:text-accent transition-colors mt-0.5">
                    <path d="M6 3h7v7M13 3L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Step 1 */}
        <section className="py-10 border-t border-border">
          <SectionHeader eyebrow="Step 1" title="Build your customer avatar" />
          <p className="text-sm text-secondary leading-relaxed mb-6">
            Your avatar comes from your winning ads, not your imagination. We&apos;re going to pull
            the actual psychology of the people who bought from you, then use that to drive every
            creative decision downstream.
          </p>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">1.1 Transcribe your winning ad with Gemini</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Go to{" "}
            <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2">
              gemini.google.com
            </a>
            , upload your top-performing ad video, and paste the prompt below.
          </p>
          <CopyablePrompt
            label="Copy & paste prompt — Gemini video breakdown"
            prompt={`I need you to break down this video so if I gave your breakdown to another AI, the other AI would know everything about the video as well as if it could watch it. This means: transcript, what the scenes show, any visuals on the screen, all timestamped.`}
          />

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">1.2 Pull your Meta ad breakdown</h3>
          <p className="text-sm text-secondary leading-relaxed mb-3">
            Before moving on, grab two numbers from Meta Ads Manager for the same winning ad:
          </p>
          <ul className="space-y-2">
            <Bullet>Top gender + age of the people who actually purchased (not just viewed)</Bullet>
            <Bullet>Average watch time in seconds</Bullet>
          </ul>
          <Tip>
            Find the sentence that ends right at the average watch-time mark. That line is your
            conversion trigger — it&apos;s the last thing the majority of your buyers heard before
            committing. Your avatar&apos;s deepest want lives in that sentence.
          </Tip>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">1.3 Generate the avatar in Claude</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Open{" "}
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2">
              Claude
            </a>{" "}
            (Sonnet 4.6 works great for this step), paste in the video transcript from Step 1.1, and
            run the prompt below. Fill in the bracketed fields with your Meta data.
          </p>
          <CopyablePrompt
            label="Copy & paste prompt — Claude avatar prompt"
            prompt={`Below is a video transcript of our top performing ad(s), with the majority of spend and purchases coming from [TOP GENDER + AGE FROM META AD BREAKDOWN]. Average watch time was [AVERAGE WATCH TIME], so right after [WRITE LAST SENTENCE BEFORE END OF AVERAGE WATCH TIME].

I need you to create a customer avatar, define the wants and needs of the avatar, and how [PRODUCT] actually works to be the solution of the wants and needs of the avatar.`}
          />
          <Note>
            Save the output. You&apos;ll reference this avatar document at every later step —
            it&apos;s the source of truth for voice, pain points, and belief shifts.
          </Note>
        </section>

        {/* Step 2 */}
        <section className="py-10 border-t border-border">
          <SectionHeader eyebrow="Step 2" title="Generate your AI UGC model" />
          <p className="text-sm text-secondary leading-relaxed mb-6">
            Now we turn the avatar into a visual character that can talk straight to your audience.
            The goal: an image that looks like a real person filming a selfie video, not a stock
            model.
          </p>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">2.1 Get a portrait prompt from Claude</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Still in Claude (Sonnet 4.6), in the same chat where you generated the avatar, run this
            follow-up.
          </p>
          <CopyablePrompt
            label="Copy & paste prompt — Portrait prompt generation"
            prompt={`Generate a prompt to make a portrait of the avatar. Realistic UGC image.`}
          />

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">2.2 Generate the portrait in Nano Banana 2</h3>
          <ul className="space-y-2">
            <Bullet>
              Go to{" "}
              <a href="https://aistudio.google.com/prompts/new_chat" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2">
                aistudio.google.com/prompts/new_chat
              </a>
            </Bullet>
            <Bullet>Select Nano Banana 2 as the model</Bullet>
            <Bullet>Set output to 1K, aspect ratio to 9:16</Bullet>
            <Bullet>Paste the prompt Claude gave you and generate</Bullet>
            <Bullet>Download the image when you&apos;re happy with it</Bullet>
          </ul>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">2.3 Pick a realistic setting on Pinterest</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Search Pinterest for the setting your avatar would realistically film in — car selfie,
            kitchen selfie, bathroom mirror, walking outside, home office. Save one reference image.
          </p>
          <Tip>
            Match the setting to the avatar&apos;s life. A busy mom filming in the school pickup
            line hits different than the same script filmed in a studio. Realism is the whole game.
          </Tip>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">2.4 Swap your avatar into the Pinterest setting</h3>
          <ul className="space-y-2">
            <Bullet>Back in Google AI Studio, select Nano Banana 2</Bullet>
            <Bullet>
              Upload your Pinterest reference image first, then your avatar portrait second (order
              matters)
            </Bullet>
            <Bullet>Set output to 2K, aspect ratio 9:16</Bullet>
            <Bullet>Run the prompt below — adjust the setting word to match your reference</Bullet>
          </ul>
          <CopyablePrompt
            label="Copy & paste prompt — Avatar swap prompt"
            prompt={`Swap the person in the car selfie with the person in the second image attached.`}
          />
          <Note>
            Replace &ldquo;car selfie&rdquo; with whatever your Pinterest reference shows —
            &ldquo;kitchen selfie,&rdquo; &ldquo;bathroom selfie,&rdquo; &ldquo;walking
            outside,&rdquo; etc. Save this final swapped image as your model reference. You&apos;ll
            attach it as @Image1 in Step 5.
          </Note>
        </section>

        {/* Step 3 */}
        <section className="py-10 border-t border-border">
          <SectionHeader eyebrow="Step 3" title="Generate your product reference image" />
          <p className="text-sm text-secondary leading-relaxed mb-6">
            Seedance needs a clean, well-lit reference of your product to keep it consistent across
            scenes. A messy product photo will give you a messy product on screen.
          </p>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">3.1 Start with a real product photo</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Use the cleanest product photo you have — ideally straight-on, good lighting, packaging
            readable.
          </p>
          <Tip>
            If your product is something like a gummy supplement, use a render of the gummy itself
            (not the bottle) if that&apos;s what you want the model holding. If the packaging IS the
            product in the scene (like a pouch or bottle), keep the packaging in the reference.
          </Tip>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">3.2 Render it clean in Nano Banana 2</h3>
          <ul className="space-y-2">
            <Bullet>In Google AI Studio, select Nano Banana 2</Bullet>
            <Bullet>Upload your product photo</Bullet>
            <Bullet>Set output to 2K, aspect ratio 1:1</Bullet>
            <Bullet>Run the prompt below</Bullet>
          </ul>
          <CopyablePrompt
            label="Copy & paste prompt — Product render prompt"
            prompt={`Create a high quality render of this product against a white background.`}
          />
          <Note>Save this image as your product reference. You&apos;ll attach it as @Image2 in Step 5.</Note>
        </section>

        {/* Step 4 */}
        <section className="py-10 border-t border-border">
          <SectionHeader eyebrow="Step 4" title="Write the script & scene prompts" />
          <p className="text-sm text-secondary leading-relaxed mb-6">
            This step produces two things in one Claude conversation: a short human-sounding UGC
            script, and — after you approve the script — the full Seedance scene prompts that turn
            it into video. The script follows a problem → story → solution arc. No jumping straight
            into the product. No ad-voice. Just a real person telling a friend about their
            experience.
          </p>

          <Note>
            <strong className="text-primary font-semibold">Why we split into scenes:</strong> Seedance
            2.0 only allows generations up to 15 seconds at a time. Your script will run 10–30
            seconds total, so breaking it into 2–3 congruent scenes is the only way to get a
            full-length UGC ad through the tool. It also helps the character likeness and talking
            pace stay consistent.
          </Note>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">4.1 Open Claude and upload your assets</h3>
          <p className="text-sm text-secondary leading-relaxed mb-3">
            Open a fresh chat in Claude using Opus 4.7 — the longer reasoning window keeps the
            script tight, human, and in the avatar&apos;s voice instead of defaulting to generic ad
            copy. Before running any prompt, upload all three of these to the conversation:
          </p>
          <ul className="space-y-2">
            <Bullet>Your avatar document from Step 1</Bullet>
            <Bullet>
              Your AI UGC model image from Step 2 (the avatar swapped into the Pinterest setting —
              e.g. the car selfie)
            </Bullet>
            <Bullet>Your product render from Step 3 (clean white-background render)</Bullet>
          </ul>
          <Tip>
            All three attachments matter. The avatar doc drives the voice, the model image tells
            Claude what the character looks like so it can describe her correctly in the scene
            prompts, and the product render tells it what the product looks like and when she
            should be holding it.
          </Tip>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">4.2 Run the combined script + scene prompt</h3>
          <p className="text-sm text-secondary leading-relaxed">
            This single prompt does two things. First it generates the script. Once you reply
            approving the script (or asking for edits), Claude then produces the full Seedance scene
            breakdown using the model and product references you uploaded.
          </p>
          <p className="text-sm text-secondary leading-relaxed mt-2">
            Paste the prompt below into Claude. The full hook list is included inside the prompt —
            do not pick one in advance, let Claude choose the strongest hook for the avatar.
          </p>
          <CopyablePrompt
            label="Copy & paste prompt — Combined script + scene prompt (use Claude Opus 4.7)"
            prompt={COMBINED_PROMPT}
          />

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">4.3 Approve the script, then get the scenes</h3>
          <p className="text-sm text-secondary leading-relaxed mb-3">
            Claude will output the script first. Before replying with approval, pressure-test it
            against this checklist:
          </p>
          <ul className="space-y-2">
            <Bullet>Sounds like one continuous thought, not a list of bullet points</Bullet>
            <Bullet>Doesn&apos;t mention the product until at least halfway through</Bullet>
            <Bullet>Has one clear problem the avatar felt before trying it</Bullet>
            <Bullet>Ends on a specific, believable outcome — not hype</Bullet>
            <Bullet>Reads in 10–30 seconds at a natural conversational pace</Bullet>
          </ul>
          <p className="text-sm text-secondary leading-relaxed mt-4">
            If the script doesn&apos;t pass, tell Claude specifically what&apos;s off — &ldquo;too
            salesy,&rdquo; &ldquo;product mentioned too early,&rdquo; &ldquo;doesn&apos;t sound like
            her&rdquo; — and ask for a revision.
          </p>
          <p className="text-sm text-secondary leading-relaxed mt-3">
            Once it passes, reply with something like &ldquo;Approved — proceed with the scene
            breakdown.&rdquo; Claude will then output the 2–3 scene prompts in the SCENE 1 / SCENE 2
            / SCENE 3 structure, each with a script line and a full visual setup referencing your
            model image and product image.
          </p>
          <Tip>
            If Claude outputs the scene prompts but skips the @Image1 and @Image2 reference tags,
            reply with: &ldquo;Please include the @Image1 (reference model) and @Image2 (reference
            product) in your scene prompts.&rdquo; These tags are how Seedance locks the character
            and product.
          </Tip>
        </section>

        {/* Step 5 */}
        <section className="py-10 border-t border-border">
          <SectionHeader eyebrow="Step 5" title="Generate the videos in Seedance 2.0" />
          <p className="text-sm text-secondary leading-relaxed mb-6">
            Seedance 2.0 on Kie.ai is where the prompts become actual video. You&apos;ll run each
            scene as a separate generation.
          </p>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">5.1 Set up your Kie.ai account</h3>
          <ul className="space-y-2">
            <Bullet>
              Go to{" "}
              <a href="https://kie.ai/seedance-2-0" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline underline-offset-2">
                kie.ai/seedance-2-0
              </a>
            </Bullet>
            <Bullet>Create an account and purchase credits</Bullet>
            <Bullet>
              Each scene generation costs credits — budget 2–3 generations per scene in case you
              need to regenerate
            </Bullet>
          </ul>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">5.2 Run each scene</h3>
          <ul className="space-y-2">
            <Bullet>Paste the full Seedance prompt for Scene 1 (from Step 5)</Bullet>
            <Bullet>Attach your model reference image as @Image1</Bullet>
            <Bullet>Attach your product reference image as @Image2 (for scenes where product appears)</Bullet>
            <Bullet>Generate</Bullet>
            <Bullet>Repeat for Scene 2, then Scene 3</Bullet>
          </ul>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">5.3 When to regenerate</h3>
          <Tip>
            A lot of the time, if a video comes out weird — lip sync off, character drift, product
            distorted, audio glitch — you don&apos;t need to change the prompt. Just hit generate
            again. Seedance has variance run to run, and regenerating on the same prompt often fixes
            it. Budget for this.
          </Tip>

          <p className="text-sm font-semibold text-primary mt-6 mb-2">Regenerate when:</p>
          <ul className="space-y-2">
            <Bullet>Character&apos;s face drifts from your reference</Bullet>
            <Bullet>Lip sync is visibly off</Bullet>
            <Bullet>Product looks warped, wrong shape, or wrong color</Bullet>
            <Bullet>Delivery feels robotic instead of conversational</Bullet>
            <Bullet>Audio has glitches or cuts out</Bullet>
          </ul>

          <p className="text-sm font-semibold text-primary mt-6 mb-2">Change the prompt when:</p>
          <ul className="space-y-2">
            <Bullet>After 3–4 regenerations you&apos;re still getting the same issue</Bullet>
            <Bullet>The framing or camera motion is consistently wrong (prompt issue, not variance)</Bullet>
            <Bullet>The scene is too short or too long for the script line</Bullet>
          </ul>
        </section>

        {/* Step 6 */}
        <section className="py-10 border-t border-border">
          <SectionHeader eyebrow="Step 6" title="Edit and finish the ad" />
          <p className="text-sm text-secondary leading-relaxed mb-6">
            The raw scenes need a small edit pass to feel native on feed. You can do all of this
            free in the Instagram Edits app.
          </p>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">6.1 Cut the silences</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Seedance often leaves short pauses at the start and end of each clip where the model
            isn&apos;t talking. Trim those tight so the transitions between scenes feel like one
            continuous thought, not three separate videos glued together.
          </p>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">6.2 Speed the video up to 1.2x</h3>
          <p className="text-sm text-secondary leading-relaxed">
            Most AI-generated UGC reads slightly slow on feed. Bumping the final edit to 1.2x speed
            gives it the pace real UGC has and measurably improves watch-through rates. Instagram
            Edits has a speed control — free.
          </p>
          <Tip>
            Don&apos;t go above 1.25x. Past that point it starts sounding unnatural and the lip
            sync starts to show.
          </Tip>

          <h3 className="font-serif text-lg text-primary mt-8 mb-2">6.3 Stitch the scenes</h3>
          <ul className="space-y-2">
            <Bullet>Import all 3 scene videos into Instagram Edits</Bullet>
            <Bullet>Hard-cut between scenes — no crossfades, no fancy transitions</Bullet>
            <Bullet>The small reframe between scenes does the visual work for you</Bullet>
            <Bullet>Export vertical 9:16 for Reels, TikTok, and Stories</Bullet>
          </ul>
          <Note>
            Optional polish: add captions (burned-in), a 1-frame cut on the hook beat, and a subtle
            zoom on the product reveal in Scene 3. Nothing more than that — AI UGC works because it
            looks homemade.
          </Note>

          <div className="mt-10 text-center py-8">
            <p className="font-serif text-3xl md:text-4xl text-primary mb-2">
              You&apos;re <em className="italic text-accent">done.</em>
            </p>
            <p className="text-sm text-secondary max-w-xl mx-auto leading-relaxed">
              That&apos;s the full pipeline — avatar to finished ad, all AI, all repeatable. Run it
              again with a different hook from the list below for a second creative variant.
            </p>
          </div>
        </section>

        {/* Bonus: Hooks */}
        <section className="py-10 border-t border-border">
          <SectionHeader eyebrow="Bonus" title="100+ viral UGC hook templates" />
          <p className="text-sm text-secondary leading-relaxed mb-6">
            Drop any of these into your Step 4 script prompt. Fill the blank with your product,
            category, or outcome. The best hooks match your avatar&apos;s exact skepticism or
            curiosity state when they first see the ad.
          </p>
          <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-none counter-reset">
            {HOOKS.map((hook, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed py-1.5 border-b border-border-subtle">
                <span className="shrink-0 w-7 text-xs font-semibold text-tertiary tabular-nums pt-0.5">
                  {i + 1}.
                </span>
                <span className="text-primary">{hook}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Closing */}
        <section className="py-16 border-t border-border text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3" style={{ letterSpacing: "0.14em" }}>
            The system
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-primary mb-5 tracking-tight">
            That&apos;s the <em className="italic text-accent">system.</em>
          </h2>
          <p className="text-secondary text-sm max-w-xl mx-auto leading-relaxed mb-2">
            Avatar → model → product → script + scenes → generation → edit. Six steps, fully
            repeatable, fully AI.
          </p>
          <p className="text-secondary text-sm max-w-xl mx-auto leading-relaxed mb-8">
            The first run takes a couple hours. After that you can turn out a new UGC variant in 45
            minutes — a new hook, a new script, same model, same setting.
          </p>
          <p className="font-serif text-xl text-primary italic">
            Run it. Post it. Test it. Iterate.
          </p>
        </section>

        {/* Soft CTA band */}
        <section className="pb-20">
          <div className="rounded-xl border border-border bg-bg-panel px-6 py-8 md:px-10 md:py-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2" style={{ letterSpacing: "0.14em" }}>
              Want us to run this for you?
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-primary leading-tight mb-3">
              We build and test AI UGC variants <em className="italic text-accent">inside</em> client ad accounts.
            </h3>
            <p className="text-sm text-secondary max-w-xl mx-auto leading-relaxed mb-5">
              If scaling profitably on Meta is the bottleneck — not the SOP — book a free 30-minute
              strategy call. No pitch deck. No hard sell.
            </p>
            <Link
              href="https://connect.scalescientist.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              Let&apos;s Chat
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-tertiary">
          <p>© {new Date().getFullYear()} Scale Science. All rights reserved.</p>
          <Link href="/" className="hover:text-primary transition-colors">← Back to Scale Science</Link>
        </div>
      </footer>
    </div>
  );
}
