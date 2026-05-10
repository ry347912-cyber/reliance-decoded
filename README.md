# 📊 eCoding India — Decoding India's Most Powerful Businesses
## Season 2 · Week 1 · Reliance Industries

> *"Reliance is not just a company. It's a masterclass in scale, timing, strategic positioning, and ecosystem thinking."*

---

## 🎯 Project Overview

A **multi-page static website** presenting a deep-dive case study on Reliance Industries — India's most powerful conglomerate. Built as part of **eCoding India Season 2**, a structured series breaking down India's biggest business empires.

This project was built as a **BTech academic project** combining:
- Business strategy research and analysis
- Modern HTML/CSS/JavaScript front-end development
- Responsive multi-page website architecture
- UX/UI design principles

---

## 🌐 Live Demo

> Deploy to GitHub Pages:
> `https://<your-username>.github.io/reliance-decoded/`

---

## 📁 Project Structure

```
reliance-decoded/
│
├── index.html                  # Homepage — Hero + Overview
│
├── pages/
│   ├── lessons.html            # 7 Core Business Lessons (Deep Dive)
│   ├── timeline.html           # Reliance 50-Year Timeline (1966–2025)
│   ├── ecosystem.html          # Business Empire Breakdown (4 Pillars)
│   ├── about.html              # About Series + BTech Relevance
│   └── components.js           # Shared Nav + Footer + Scroll Logic
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Homepage styles + design system
│   │   └── pages.css           # Shared styles for inner pages
│   └── js/
│       ├── main.js             # Homepage JS (counters, scroll, nav)
│       └── components.js       # Root-level component loader
│
└── README.md
```

---

## 📄 Pages

### 🏠 `index.html` — Homepage
- Full-screen hero with animated statistics
- Quick preview of all 7 lessons
- Ecosystem preview (4 business pillars)
- "Next Week: Tata Group" preview card
- Animated counters for key Reliance metrics

### 📚 `pages/lessons.html` — 7 Core Lessons
Deep-dive into each business lesson with:
- Sticky reading progress bar
- Scrollable lesson subnav (highlights active lesson)
- Extended analysis (~400 words per lesson)
- Bullet points, callout quotes, and topic tags
- All 7 lessons: Scale, Infrastructure, Ecosystems, Speed, Capital, Long-Term Thinking, Behavior Change

### 📅 `pages/timeline.html` — 50-Year Timeline
Reliance history from 1966–2025:
- Animated scroll-reveal timeline cards
- Era dividers: Founding → Industrial Scale → Digital Revolution → Green Future
- 12 key milestones with full context
- Animated counters (subscribers, stores, founding year)

### 🏭 `pages/ecosystem.html` — Business Empire
Deep breakdown of Reliance's 4 business pillars:
- **Jio Platforms** — Telecom + Digital
- **Reliance Retail** — India's largest retailer
- **O2C (Oil-to-Chemicals)** — World's largest refinery
- **New Energy** — ₹75,000 Cr green hydrogen bet
- Animated flywheel diagram
- Comparison table vs Tata, Adani, Infosys

### ℹ️ `pages/about.html` — About + BTech Relevance
- Series roadmap (6 weeks ahead)
- Why business strategy matters for BTech students
- 6 technical skills derived from business analysis
- Series schedule and upcoming companies

---

## 🎨 Design System

### Color Palette
| Variable | Hex | Usage |
|----------|-----|-------|
| `--ink` | `#0d0d0d` | Backgrounds, dark sections |
| `--cream` | `#f5f0e8` | Text on dark backgrounds |
| `--gold` | `#c9a84c` | Primary accent, highlights |
| `--rust` | `#b94a2c` | Feature sections, CTAs |
| `--teal` | `#1a6b6b` | "Next Week" preview section |
| `--paper` | `#faf7f2` | Light section backgrounds |

### Typography
| Font | Usage |
|------|-------|
| **Playfair Display** | Headings, section titles — editorial feel |
| **Bebas Neue** | Large numbers, stats, logo — industrial boldness |
| **DM Sans** | Body text — clean and modern |

### Design Philosophy
- **Editorial Magazine** aesthetic — high contrast, typographic hierarchy
- **Dark/Light sections** alternate for visual rhythm
- **Gold accents** as primary brand colour throughout
- Generous whitespace with intentional density in data sections

---

## ⚙️ Technical Features

- ✅ **Fully responsive** — works on mobile, tablet, desktop
- ✅ **Animated counters** — numbers count up on scroll into view
- ✅ **Scroll reveal** — sections animate in as you scroll
- ✅ **Reading progress bar** — on the lessons page
- ✅ **Sticky lesson subnav** — highlights active section while reading
- ✅ **Mobile hamburger menu** — full navigation on small screens
- ✅ **CSS custom properties** — consistent design tokens throughout
- ✅ **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript
- ✅ **Google Fonts** — loaded via CDN
- ✅ **Semantic HTML** — accessible, well-structured markup

---

## 🚀 Getting Started

### Run Locally

```bash
# Clone the repository
git clone https://github.com/<your-username>/reliance-decoded.git

# Navigate to the project
cd reliance-decoded

# Open in browser (no build step needed)
# Option 1: Open index.html directly
open index.html

# Option 2: Use a local server (recommended for proper navigation)
python3 -m http.server 8080
# Then visit: http://localhost:8080
```

### Deploy to GitHub Pages

```bash
# After cloning, initialize your own repo
git init
git add .
git commit -m "feat: initial project setup — eCoding India Reliance case study"
git branch -M main
git remote add origin https://github.com/<your-username>/reliance-decoded.git
git push -u origin main

# Enable GitHub Pages:
# Go to Settings → Pages → Source: Deploy from branch → main → / (root)
```

---

## 📚 Research Sources & References

- Reliance Industries Annual Reports (FY2022–2024)
- *The Polyester Prince* — Hamish McDonald (biography of Dhirubhai Ambani)
- Telecom Regulatory Authority of India (TRAI) data reports
- Fortune Global 500 rankings (2023–2024)
- SEBI filings and investor presentations
- *Business Today* and *Economic Times* archival coverage
- Jio Platforms investor deck (2020)

---

## 🏫 Academic Context

**Course:** Engineering Management / Business Analysis / Technical Communication  
**Program:** B.Tech (Computer Science / IT / related)  
**Series:** eCoding India Season 2 — Decoding India's Most Powerful Businesses  
**Week:** Week 1 — Reliance Industries

### Learning Outcomes Demonstrated
1. **Research and synthesis** — distilling complex business history into structured analysis
2. **Front-end development** — multi-page responsive HTML/CSS/JS website
3. **UX/UI design** — consistent visual language across 5 pages
4. **Technical writing** — clear, structured documentation
5. **Business analysis** — competitive positioning, financial metrics, strategic frameworks

---

## 🗓️ Series Roadmap

| Week | Company | Focus Areas |
|------|---------|-------------|
| **W1 ✅** | **Reliance Industries** | Scale, ecosystem, capital, infrastructure |
| W2 | Tata Group | Trust, legacy, governance, global expansion |
| W3 | Adani Group | Infrastructure, debt strategy, diversification |
| W4 | Infosys | IT export economy, talent, leadership transitions |
| W5 | HDFC Bank | Risk culture, retail banking, the merger |
| W6 | New-Age Startups | Zepto, Meesho, Razorpay — speed & unit economics |

---

## 🤝 Contributing

Found an error in the business data or want to add more timeline events?

1. Fork the repository
2. Create a feature branch: `git checkout -b fix/timeline-correction`
3. Make your changes
4. Submit a pull request with a description of what you changed and why

---

## 📝 License

This project is open source under the [MIT License](LICENSE).

Data and analysis are for educational purposes. All business metrics are from public sources (annual reports, regulatory filings, news coverage).

---

## 🏷️ Tags

`#UnderstandingIndianBusiness` `#Season2` `#Reliance` `#BusinessStrategy` `#FounderMindset` `#BTech` `#HTMLProject` `#FrontendDevelopment` `#IndianEconomy` `#CaseStudy`

---

*Built with curiosity, caffeine, and a genuine belief that understanding great businesses is one of the most useful things an engineer can do.*
