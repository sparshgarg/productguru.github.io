import { PromptData } from "../types";

export interface BankQuestion extends PromptData {
  category: string;
  company?: string;
}

export const QUESTION_BANK: BankQuestion[] = [
  // ── METRIC INVESTIGATION ─────────────────────────────────────────────
  {
    category: "Metric Investigation",
    company: "Spotify",
    question: "Spotify daily podcast listener count dropped 18% over the last two weeks. How would you investigate and diagnose this?",
    context: "You are the PM leading Spotify podcast growth. The drop happened across both iOS and Android.",
    proTip: "Segment by platform, geography, podcast genre, and user tenure. Check if a top-10 show went on hiatus. Rule out tracking issues first.",
  },
  {
    category: "Metric Investigation",
    company: "Instagram",
    question: "Stories views on Instagram dropped by 10% week-over-week. Walk me through how you would find the root cause.",
    context: "You are the PM for Instagram Stories. The drop appeared Monday morning and has held steady.",
    proTip: "Start with a top-down funnel: reach, impressions, tap-through rate. Then segment by account type, region, and device. Check if a new algorithm change coincided.",
  },
  {
    category: "Metric Investigation",
    company: "Lyft",
    question: "Lyft driver cancellation rate increased 25% last month. What is causing this, and how would you fix it?",
    context: "You are the PM for Lyft driver experience. The spike is concentrated in the top 10 metro markets.",
    proTip: "Break down cancellations by time-of-day, trip length, pick-up area, and driver tier. Check if a recent app update changed the trip-acceptance flow.",
  },
  {
    category: "Metric Investigation",
    company: "Netflix",
    question: "Netflix account cancellation rate jumped 20% in Q3. How would you determine whether this is a product problem, a content problem, or both?",
    context: "You are the PM for Netflix retention. The spike followed the end of a major original series season.",
    proTip: "Separate voluntary churners from payment failures. Survey exit reasons. Correlate with the content calendar. Segment by subscription tier and household size.",
  },
  {
    category: "Metric Investigation",
    company: "Facebook",
    question: "Facebook Groups engagement dropped 12% over the past month. Which data points would you examine first?",
    context: "You are the PM for Facebook Groups. The drop is in posting frequency, not in membership growth.",
    proTip: "Focus on content creation, not consumption. Segment by group size, topic category, and admin activity. Check if Reels or another feature is capturing posting intent.",
  },
  {
    category: "Metric Investigation",
    company: "Amazon",
    question: "Amazon checkout-to-purchase conversion rate dropped 8% after a recent app redesign. How would you diagnose this?",
    context: "You are the PM for Amazon mobile checkout. The redesign launched two weeks ago across all markets.",
    proTip: "Run a funnel analysis step-by-step. A/B test the old vs. new flow if possible. Look at drop-off by step, payment method, and device type.",
  },
  {
    category: "Metric Investigation",
    company: "Zomato",
    question: "Zomato average delivery time increased from 32 to 45 minutes over the past quarter. As PM, how do you investigate?",
    context: "You are the PM for Zomato delivery operations in India. The increase is uniform across Tier 1 and Tier 2 cities.",
    proTip: "Decompose into restaurant prep time vs. delivery time vs. handoff time. Check if order volumes surged, if new partners have longer prep, or if traffic patterns changed.",
  },
  {
    category: "Metric Investigation",
    company: "LinkedIn",
    question: "LinkedIn email notification open rate fell from 22% to 14% in six months. What would you investigate?",
    context: "You are the PM for LinkedIn communications. The drop applies to all notification types.",
    proTip: "Check email deliverability first (spam filter changes, unsubscribe spikes). Then audit whether notification frequency increased. Segment by user activity level.",
  },
  {
    category: "Metric Investigation",
    company: "Uber Eats",
    question: "Uber Eats repeat order rate dropped 15% in Q2. How would you figure out why?",
    context: "You are the PM for Uber Eats retention. The drop is among users who previously ordered 4+ times per month.",
    proTip: "Analyze the last order before churn - was it a bad experience? Check NPS/CSAT trends. Compare to competitor app downloads. Segment by city maturity.",
  },
  {
    category: "Metric Investigation",
    company: "Airbnb",
    question: "Airbnb host-to-booking conversion rate dropped 20% in a key market after a policy change. How do you isolate the cause?",
    context: "You are the PM for host supply. A new instant-booking policy was rolled out in three cities six weeks ago.",
    proTip: "Compare markets with the policy change vs. control markets. Segment by host type. Interview churned hosts. Look at cancellation policies and pricing floors.",
  },

  // ── PRODUCT STRATEGY ─────────────────────────────────────────────────
  {
    category: "Product Strategy",
    company: "Google",
    question: "Google is considering entering the B2B project management space (competing with Asana, Jira). Should it? If yes, how?",
    context: "You are a PM in Google Workspace. The team is exploring adjacencies to grow enterprise seat revenue.",
    proTip: "Use a market-entry framework: market size, competitive moat, distribution advantage, build vs. partner. Lean into integration with Docs, Meet, Calendar.",
  },
  {
    category: "Product Strategy",
    company: "Uber",
    question: "Should Uber merge the Rides and Eats apps into one super-app? Make the case for or against.",
    context: "You are a senior PM at Uber. The CEO has asked for a recommendation ahead of a board meeting.",
    proTip: "Evaluate user mental models, technical complexity, brand clarity, and app store discoverability. Reference Asian super-apps (Gojek, Grab) as comparables.",
  },
  {
    category: "Product Strategy",
    company: "Meta",
    question: "Meta is considering launching a standalone AI assistant app. How would you think about the strategy and differentiation?",
    context: "You are a PM on Meta AI. ChatGPT, Gemini, and Claude already have strong market share.",
    proTip: "Find the asymmetric advantage: Meta social graph. An AI that knows your friends and social context is differentiated. Focus on event planning, gift ideas, group decisions.",
  },
  {
    category: "Product Strategy",
    company: "Spotify",
    question: "Spotify wants to expand into audiobooks. How should it prioritize this against its existing podcast investment?",
    context: "You are the PM for Spotify audio content strategy. Audiobooks is a $4B market growing at 25% annually.",
    proTip: "Assess cannibalization risk vs. incremental audience. Evaluate build vs. acquire. Propose a phased rollout: bundle for Premium, then standalone pricing.",
  },
  {
    category: "Product Strategy",
    company: "Amazon",
    question: "Amazon wants to launch a healthcare benefit as part of Prime. How would you structure the strategy?",
    context: "You are a PM on Amazon Prime. The company has already acquired One Medical and PillPack.",
    proTip: "Start with user jobs-to-be-done: prescription delivery, telehealth, primary care visits. Tie the benefit to Prime value prop (convenience + savings). Identify regulatory constraints early.",
  },
  {
    category: "Product Strategy",
    company: "Apple",
    question: "Apple wants to build a social network. Should they, and if yes, what would it look like?",
    context: "You are a PM at Apple exploring new revenue streams beyond hardware and services.",
    proTip: "Apple brand is privacy, so a privacy-first social network is the natural angle. Evaluate distribution (1B+ iOS devices) but note historical difficulty with social (Ping, Game Center).",
  },

  // ── PRODUCT IMPROVEMENT ──────────────────────────────────────────────
  {
    category: "Product Improvement",
    company: "LinkedIn",
    question: "How would you improve LinkedIn job recommendations to increase application rates by 30%?",
    context: "You are the PM for LinkedIn Jobs. Current application rates are below industry benchmarks.",
    proTip: "Identify pain points: irrelevant roles, stale listings, poor seniority match. Propose better signals (recent activity, skills endorsements). Mock the new recommendation card.",
  },
  {
    category: "Product Improvement",
    company: "Google Maps",
    question: "How would you improve Google Maps for commuters who use public transit daily?",
    context: "You are the PM for Google Maps transit. Commuters are the fastest-growing segment but have low daily active usage.",
    proTip: "Identify commuter pain points: real-time delays, crowded trains, multi-modal transfers. Propose saved commute routes with push alerts, crowd density indicators.",
  },
  {
    category: "Product Improvement",
    company: "Notion",
    question: "How would you improve Notion to reduce the blank canvas problem that causes new users to churn in week 1?",
    context: "You are the PM for Notion activation. 60% of new signups never create more than two pages.",
    proTip: "Blank canvas = too much flexibility, no guidance. Propose AI-assisted setup, better template discoverability, and a progress-based onboarding checklist.",
  },
  {
    category: "Product Improvement",
    company: "Airbnb",
    question: "How would you improve Airbnb review system to make it more trustworthy for first-time guests?",
    context: "You are the PM for trust and safety at Airbnb. Research shows first-time guests distrust reviews due to grade inflation (avg 4.8/5).",
    proTip: "Propose verified-stay badges, granular sub-ratings, and surfacing the most critical reviews first. Consider showing the ratio of 1-3 star reviews prominently.",
  },
  {
    category: "Product Improvement",
    company: "YouTube",
    question: "How would you improve YouTube for educational content creators to help them grow their channels faster?",
    context: "You are the PM for YouTube Creator Studio. EDU content has the highest creator churn in year one.",
    proTip: "Focus on creator pain points: content quality feedback, algorithm discoverability, monetization timing. Propose a Creator Learning Path and faster monetization eligibility.",
  },
  {
    category: "Product Improvement",
    company: "Slack",
    question: "Slack search has a 40% satisfaction score. How would you redesign it?",
    context: "You are the PM for Slack search. Users struggle to find specific messages, files, and decisions.",
    proTip: "Identify top failure modes: date-based vs. keyword search, files vs. messages vs. decisions. Propose contextual search, AI-assisted query completion, and a decision log filter.",
  },
  {
    category: "Product Improvement",
    company: "Spotify",
    question: "How would you improve Spotify Discover Weekly playlist to increase user satisfaction?",
    context: "You are the PM for Spotify personalization. Discover Weekly has 40M+ listeners but satisfaction has plateaued.",
    proTip: "Identify why users skip: wrong energy level, already-known songs, wrong genre. Propose a mood/context selector, feedback signals with reasons, and recommendation explanations.",
  },

  // ── PRIORITIZATION ───────────────────────────────────────────────────
  {
    category: "Prioritization",
    company: "Figma",
    question: "You are the PM at Figma with one sprint. Four feature requests: offline mode, variable fonts, branching improvements, and an AI layout assistant. How do you prioritize?",
    context: "You are managing Figma core editor roadmap. All four features have significant demand but different complexity.",
    proTip: "Use an impact vs. effort matrix. Anchor on Figma North Star (collaboration + design velocity). Ask: which feature unblocks the most users from a critical job-to-be-done?",
  },
  {
    category: "Prioritization",
    company: "Stripe",
    question: "As PM at Stripe, choose between: (1) reducing fraud by 30%, (2) launching in 5 new markets, (3) a new subscription billing product, (4) a developer dashboard redesign. You can only do one. What do you pick?",
    context: "You are the PM for Stripe core payments. The company is prioritizing sustainable growth and enterprise trust.",
    proTip: "Frame around business impact and defensibility. Fraud reduction directly protects revenue and trust. Think about what done means for each option.",
  },
  {
    category: "Prioritization",
    company: "Airbnb",
    question: "A critical bug makes host check-in instructions inaccessible 20% of the time. You also have a major feature launch next week. How do you handle both?",
    context: "You are the PM for Airbnb guest experience. The bug was discovered yesterday.",
    proTip: "Safety and trust issues always take priority. Propose immediate mitigation (cached instructions, route to host phone). Be transparent about the feature delay.",
  },
  {
    category: "Prioritization",
    company: "Duolingo",
    question: "Duolingo growth team wants streaks gamification. Monetization team wants to paywall advanced lessons. Both need 2 engineering weeks. You can only ship one. What do you do?",
    context: "You are the PM for Duolingo. The company is balancing free-user growth with subscription revenue.",
    proTip: "Evaluate each against a core metric: DAU/retention for streaks, revenue for paywalling. Consider long-term brand risk. Ask: which is more reversible if it fails?",
  },

  // ── LAUNCH & GTM ─────────────────────────────────────────────────────
  {
    category: "Launch & GTM",
    company: "Google",
    question: "Google is launching a new AI-powered search that replaces the 10-blue-links format. How would you plan the rollout?",
    context: "You are the PM for Google Search. The new experience changes how 9 billion daily queries are served.",
    proTip: "Start with a canary release (0.1% traffic) on low-stakes query types. Define success metrics and guardrail metrics (ad revenue, publisher traffic). Plan publisher comms.",
  },
  {
    category: "Launch & GTM",
    company: "Notion",
    question: "You are launching Notion AI to 30 million existing users. How do you roll it out without overwhelming support and servers?",
    context: "You are the PM for Notion AI. The feature has been in private beta for 3 months.",
    proTip: "Phased rollout: Teams plan first, then Business, then Free. Define usage quotas. Prepare a waitlist with referral incentives. Have a comms plan for server degradation.",
  },
  {
    category: "Launch & GTM",
    company: "Uber",
    question: "Uber is launching a subscription Ride Pass with unlimited rides for a flat monthly fee in 10 cities. Design the go-to-market strategy.",
    context: "You are the PM for Uber subscription products. The pass targets daily commuters.",
    proTip: "Segment: commuters vs. occasional riders need different messaging. Anchor pricing against monthly transit passes. Define: are we targeting LTV increase or churn reduction?",
  },

  // ── PRICING & MONETIZATION ───────────────────────────────────────────
  {
    category: "Pricing & Monetization",
    company: "Spotify",
    question: "Spotify wants to introduce a Superfan tier at $16/month vs. current $10 Premium. What would you include and how would you position it?",
    context: "You are the PM for Spotify monetization. 230M Premium subscribers exist globally.",
    proTip: "Anchor on highest-value users (concert-goers, playlist creators). Include: lossless audio, artist messaging, early ticket access. Price against Apple Music Hi-Fi and Tidal.",
  },
  {
    category: "Pricing & Monetization",
    company: "LinkedIn",
    question: "LinkedIn Premium has 40% of users who pay but never use InMail credits. How would you redesign pricing and packaging?",
    context: "You are the PM for LinkedIn Monetization. Unused credits suggest misaligned value.",
    proTip: "Consider usage-based pricing vs. flat subscription. Segment: job seekers value visibility, not InMail. Propose separate tiers for seekers vs. recruiters vs. learners.",
  },
  {
    category: "Pricing & Monetization",
    company: "OpenAI",
    question: "OpenAI wants to launch ChatGPT for Enterprise. How would you price it and differentiate from the consumer Plus plan?",
    context: "You are the PM for OpenAI enterprise. The Plus plan is $20/user/month.",
    proTip: "Enterprise needs: SSO/SAML, data privacy, admin console, higher rate limits, audit logs. Price against Copilot for M365. Use per-seat with volume discounts.",
  },
  {
    category: "Pricing & Monetization",
    company: "Reddit",
    question: "Reddit is exploring monetization beyond advertising. What are three models you would evaluate, and which would you prioritize?",
    context: "You are the PM for Reddit revenue strategy. Reddit Gold exists but has low adoption.",
    proTip: "Options: premium subscriptions, creator tipping, community subscriptions. Evaluate on: monetizable user base, brand risk, engineering cost. Creator monetization aligns with rewarding good content.",
  },

  // ── GROWTH & ENGAGEMENT ──────────────────────────────────────────────
  {
    category: "Growth & Engagement",
    company: "Duolingo",
    question: "Duolingo wants to increase Day-7 retention from 18% to 25%. What experiments would you run?",
    context: "You are the PM for Duolingo growth. Users who reach a 7-day streak have 4x higher 90-day retention.",
    proTip: "Focus on the critical first week: push notification timing, reducing lesson friction, social challenges, streak freeze as loss-aversion tool. Measure D7 retention as primary.",
  },
  {
    category: "Growth & Engagement",
    company: "Airbnb",
    question: "Airbnb wants to grow host supply by 30% in secondary markets. What is your growth strategy?",
    context: "You are the PM for host acquisition. Major city supply is saturated; secondary markets have unmet guest demand.",
    proTip: "Segment potential hosts: vacation homeowners, remote workers, property managers. Show estimated earnings from nearby bookings. Test referral programs and real estate partnerships.",
  },
  {
    category: "Growth & Engagement",
    company: "WhatsApp",
    question: "WhatsApp Business has strong adoption but 85% of users only send text. How do you drive richer feature engagement?",
    context: "You are the PM for WhatsApp Business. Businesses want to send catalogs and payment requests but customers ignore them.",
    proTip: "The friction is discovery. Propose: animated onboarding for business contacts, contextual prompts about available features, and incentives like discounts for catalog checkout.",
  },

  // ── ESTIMATION ───────────────────────────────────────────────────────
  {
    category: "Estimation",
    company: "Google",
    question: "Estimate the annual revenue Google loses due to ad blockers in the US.",
    context: "You are a PM doing a market sizing exercise for Google ad monetization strategy.",
    proTip: "Work top-down: US internet users x % using Chrome x % with ad blockers x avg Google ad revenue per user per year. State assumptions clearly. Show structured thinking.",
  },
  {
    category: "Estimation",
    company: "Uber",
    question: "How many Uber trips are taken in New York City on a typical Friday night?",
    context: "You are preparing a market sizing analysis for Uber NYC expansion.",
    proTip: "NYC population (~8M), then % who use ride-share regularly (15-20%), then subset active on Friday nights, then average trips per person. Show your math step by step.",
  },
  {
    category: "Estimation",
    company: "Spotify",
    question: "Estimate how many hours of audio content are streamed on Spotify daily worldwide.",
    context: "You are sizing infrastructure needs for Spotify streaming.",
    proTip: "Start with MAU (600M+), then DAU (~40%), then avg session length. Sanity-check: Spotify publishes ~30 min/day average. Segment music vs. podcast.",
  },

  // ── SUCCESS METRICS ──────────────────────────────────────────────────
  {
    category: "Success Metrics",
    company: "Instagram",
    question: "You are launching Instagram Close Friends Stories. How do you define success? What is your North Star metric?",
    context: "You are the PM for Instagram Stories. Close Friends is a private sharing mode.",
    proTip: "The North Star for private sharing is meaningful interaction, not reach. Propose: % of daily storyers using Close Friends weekly, AND avg replies per Close Friends story. Guardrail: overall Stories DAU must not decline.",
  },
  {
    category: "Success Metrics",
    company: "Notion",
    question: "What is the most important success metric for Notion, and why? How would you measure it?",
    context: "You are a new PM joining Notion growth and the Head of Product asks you this on your first week.",
    proTip: "Notion value is knowledge retention and collaboration. Strong candidate: Weekly Active Editors (not viewers). Pair with: shared workspaces with 3+ contributors, as that drives stickiness.",
  },
  {
    category: "Success Metrics",
    company: "Uber Eats",
    question: "Define a success metric framework for Uber Eats new group ordering feature (4+ people adding to one cart).",
    context: "You are the PM who shipped group ordering 30 days ago. The CEO wants a metrics review.",
    proTip: "Three layers: adoption (% orders using group mode), engagement (avg group size, completion rate), business impact (avg order value vs. solo, repeat rate). Guardrail: support tickets.",
  },
  {
    category: "Success Metrics",
    company: "Google",
    question: "How would you measure success of Google Search AI Overviews without cannibalizing core ad revenue?",
    context: "You are the PM for Google Search quality. AI Overviews answer questions directly, potentially reducing ad clicks.",
    proTip: "Dual-metric framework: user satisfaction (task completion, thumbs up/down) AND business health (ad CTR, publisher referral traffic). Track: are users developing a habit of not clicking?",
  },
  {
    category: "Success Metrics",
    company: "Slack",
    question: "Slack just launched Huddles (lightweight audio calls). Define three metrics to evaluate success in 60 days.",
    context: "You are the PM for Slack real-time communication. Huddles competes with Zoom for casual standups.",
    proTip: "Adoption: % of workspaces starting 1+ Huddle/week. Retention: week-over-week repeat usage. Substitution: does Zoom integration usage drop in high-Huddle workspaces?",
  },
];
