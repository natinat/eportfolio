const STORAGE_KEY = "eportfolio-content-v2";
const EDIT_SESSION_KEY = "eportfolio-edit-unlocked";
const OWNER_PASSCODE = "portfolio-admin";

const DEFAULT_ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80";
const LOCAL_PROFILE_IMAGE = "images/natalie-halimi.png";
const LOCAL_TRAVEL_AI_VIDEO = "videos/ai-impact-on-the-online-travel-industry.mp4";
const LOCAL_TRAVEL_AI_PREVIEW_IMAGE = "images/AI transforming global travel industry.png";
const ACADEMIC_PREVIEW_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 720'%3E%3Crect width='1200' height='720' fill='%23efe8dd'/%3E%3Ccircle cx='260' cy='210' r='110' fill='%23e0d4c3'/%3E%3Cpath d='M0 620L240 430L420 530L700 310L930 500L1200 300V720H0Z' fill='%23d9c8b1'/%3E%3Crect x='100' y='92' width='330' height='52' rx='26' fill='%23ffffff' fill-opacity='.65'/%3E%3Crect x='100' y='164' width='250' height='22' rx='11' fill='%23d65c31' fill-opacity='.28'/%3E%3Crect x='100' y='520' width='360' height='34' rx='17' fill='%231e1f1b' fill-opacity='.12'/%3E%3Crect x='100' y='570' width='230' height='22' rx='11' fill='%231e1f1b' fill-opacity='.08'/%3E%3C/svg%3E";

const seedData = {
  site: {
    owner: "Natalie Halimi",
    role: "Researcher, builder, and reflective practitioner",
    intro:
      "This e-portfolio brings together my academic thinking, professional growth, and published writing in one place. It is designed to be easy to browse, while still giving me room to keep refining the story behind the work.",
    footerMessage:
      "A curated space for projects, learning, writing, and professional milestones.",
    aboutTitle: "Designing a career through inquiry, practice, and public work",
    aboutImage: "images/natalie-halimi.png",
    aboutText:
      "I’m a product leader with almost 20 years of experience in the tech industry, currently focused on driving AI innovation at Booking.com. As a Principal Product Manager, I led the launch of the AI Trip Planner, Booking.com’s first major step into Generative AI, and have since been working across teams to shape and scale AI initiatives from early ideation through to product launch.\n\nAlongside building products, I’m deeply committed to continuous learning. I’m currently pursuing a postgraduate degree in Artificial Intelligence at the University of Essex, strengthening the bridge between hands-on product experience and academic foundations. I believe that combining practical execution with robust theory is essential to building responsible, impactful AI systems.\n\nI’m particularly interested in how the current wave of AI is reshaping industries, roles, and ways of working. Those who learn to adapt and evolve will be best positioned to thrive in this new landscape, and I’m passionate about helping individuals and organisations do just that.\n\nBeyond my core role, I’m an advocate for women in tech. I mentor professionals navigating their next career steps and regularly speak at conferences on topics such as AI strategy, product development, and the evolving role of technology in our careers.\n\nOutside of work, I’m drawn to creative and hands-on pursuits that offer a different way of thinking and building. I play both piano and guitar, and occasionally experiment with songwriting. Music, for me, is not just a hobby. It’s a space to explore ideas, patterns, and emotions in a way that feels surprisingly similar to product management. There’s a balance between structure and creativity, between intuition and iteration, and between individual expression and the experience of the audience.\n\nI also enjoy working on personal projects, from interior design to gardening, where I can combine aesthetics, functionality, and storytelling. These projects offer a different kind of problem-solving, one that is less constrained, but still grounded in intention and outcome. Whether it’s designing a space or personalising an ecosystem to a specific plant, I’m drawn to creating things that feel both thoughtful and meaningful.\n\nAt the centre of it all is my family, who keep me grounded and constantly remind me of what truly matters. Balancing a demanding career with a full life outside of work has shaped how I approach both leadership and growth, with curiosity, resilience, and a strong sense of perspective.",
    academicTitle: "Academic artifacts",
    academicDescription:
      "Projects, papers, presentations, prototypes, and discussions developed as part of my studies at the University of Essex.",
    academicTags: ["All", "Intro to Computing", "Intro to AI"]
  },
  academicItems: [
    {
      id: "ac65c072-feeb-49f2-a865-bfaa562b5c3a",
      slug: "collaborative-discussion-ml-model-comparison",
      sortOrder: 0,
      title: "Collaborative discussion: ML models comparison",
      description:
        "This discussion explores clustering model selection, comparing K-Means and K-Prototypes, and highlights how preprocessing, fairness, and evaluation choices shape outcomes. It emphasises that model development involves trade-offs, requiring technical expertise alongside a broader understanding of business context, risks, and responsible decision-making.",
      tags: ["All", "Intro to AI", "Module 3", "Discussion"],
      previewMediaType: "image",
      previewMediaUrl: "/images/tech-discussion-data-science.png",
      sections: [
        {
          id: "5ce64794-13d8-4d3a-8662-55b840bf9509",
          type: "text",
          title: "",
          body:
            "This discussion began with a comparison between two similar algorithms, K-Means and K-Prototypes. My initial analysis focused on the model selection phase, shortlisting the choices to unsupervised clustering algorithms that group data around cluster centroids, considering criteria such as business objectives, dataset size, and the availability of labels. Having both categorical and numerical variables further led to the selection of K-Prototypes over K-Means (Soria et al., 2020). While model selection and the mentioned considerations are important, additional considerations later emerged through peer responses, including the preprocessing phase, bias and unfairness risks and mitigations, and the trade-offs involved in model development.\n\nChoices made during the preprocessing phase, as well as the evaluation phase, have a significant impact on the model’s effectiveness and its ability to produce fair and unbiased outputs. For example, feature selection can impact the model’s performance (Heaton, 2016) and ensure the model is less biased and fairer (Grgic-Hlaca et al., 2018; Leslie, 2019). Tasks such as data cleaning and exploratory analysis will help better prepare the data and therefore increase the model’s performance (Bell, 2020; Russell and Norvig, 2021). During evaluation, choosing metrics that reflect not only performance but also fairness will help increase interpretability and fairness (Grgic-Hlaca et al., 2018).\n\nLastly, decisions in model development are not always clear-cut, and in many cases, there will be several options to choose from, each involving trade-offs. For example, Logistic Regression tends to have lower variance, but higher bias (Ayari, Guetari, and Kraiem, 2026). Isaac Shalaan also highlights in his post the trade-off between interpretability and model performance. Even smaller choices, such as selecting the number of clusters (K), can influence the model’s performance and ability to generalise to new data (Theobald, 2024).\n\nThis discussion highlights that model development involves difficult decisions throughout the development pipeline, requiring not only technical knowledge but also a broader understanding of the problem space, commercial aspects, the ability to anticipate potential risks, and a clear approach to mitigation.\n\n## References:\n\nBadouch, M. and Boutaounte, M., (2023). Personalized travel recommendation systems: A study of machine learning approaches in tourism. Journal of Artificial Intelligence Machine Learning and Neural Network, 33, pp.35-45 (Accessed: February 28 2026)\n\nBell, J., (2020). Machine learning: hands-on for developers and technical professionals. John Wiley & Sons. DOI.\n\nRussell, S. and Norvig, P., (2021). Artificial intelligence: A modern approach. 4th edn. Pearson Higher Education. DOI.\n\nSoria, J., Chen, Y. and Stathopoulos, A., (2020). K-prototypes segmentation analysis on large-scale ridesourcing trip data. Transportation Research Record, 2674(9), pp.383-394 (Accessed: March 2 2026)\n\nTheobald, O., (2024) Machine Learning with Python: Unlocking AI Potential with Python and Machine Learning. Birmingham: Packt Publishing. DOI."
        }
      ]
    },
    {
      id: "32e3ed0c-b2dc-47c9-a4bd-48b013cd8ea1",
      slug: "ml-application-business-case",
      sortOrder: 1,
      title: "Scaling Fraud Detection with Machine Learning: From Rule-Based Systems to Intelligent Decisioning",
      description:
        "A strategic exploration of how machine learning can enhance and scale fraud detection, anomaly detection, and customer profiling in fintech. This work evaluates the limitations of rule-based systems, proposes a multi-model ML architecture, and outlines the technical, business, and regulatory considerations required for real-world deployment.",
      tags: ["All", "Intro to AI", "Module 3", "Essay"],
      previewMediaType: "image",
      previewMediaUrl: "/images/Glowing-CPU-on-circuit-board.png",
      sections: [
        {
          id: "7868b6a8-4df3-4360-8d19-df78b4b0bf92",
          type: "text",
          title: "",
          body:
            "## Overview\nThis project explores how machine learning can be leveraged to enhance and scale fraud detection, anomaly detection, and customer profiling in fintech environments. It evaluates the limitations of traditional rule-based systems (RBS) and proposes a transition toward a multi-model, AI-driven decisioning pipeline.\n\n## Problem Context\nCurrent fraud detection systems rely heavily on rule-based logic defined by analysts. While effective in static environments, these systems face critical limitations:\n\n- High operational cost due to manual rule creation and maintenance\n- Limited scalability with increasing transaction volumes and complexity\n- Inability to adapt to evolving fraud strategies\n- High rates of false positives and false negatives\n\nThese challenges make RBS insufficient for modern, fast-evolving digital payment ecosystems.\n\n## Proposed Approach\nMachine learning is introduced as a complementary and partially replacing layer to RBS, enabling:\n\n- Automated pattern detection from large-scale transaction data\n- Improved adaptability to evolving fraud behaviours\n- Reduction in false positives through behavioural modelling\n- Scalable and efficient system growth\n\nWhile initial implementation costs are high, ML enables long-term efficiency and improved detection performance.\n\n## Industry Context\nAI-driven fraud detection is already widely adopted:\n\n- 90% of global banks use AI for fraud prevention\n- 39% of financial institutions apply ML in transaction monitoring\n- ML systems contributed to recovering over $4B in fraudulent payments (U.S. Treasury, 2024)\n\nThis demonstrates both the maturity of the space and the competitive necessity of adopting ML-based solutions.\n\n## System Design\nA multi-model architecture is proposed, combining three complementary components:\n\n### 1. Fraud Detection (Supervised Learning)\n- **Model:** Gradient Boosting (preferred), Random Forest (alternative)\n- **Strengths:** Captures complex, non-linear relationships in structured data\n- **Trade-off:** High performance vs lower interpretability (mitigated with SHAP)\n\n### 2. Anomaly Detection (Unsupervised Learning)\n- **Model:** Isolation Forest\n- **Purpose:** Detect unknown or emerging fraud patterns\n- **Mechanism:** Identifies anomalies based on isolation depth in decision trees\n\n### 3. Customer Behaviour Profiling\n- **Model:** K-Prototypes\n- **Purpose:** Generate behavioural baselines using mixed-type data\n- **Outcome:** Enables personalised anomaly detection and feature enrichment\n\nThese components operate within a unified decisioning pipeline, where outputs are combined to:\n- Approve transactions\n- Block suspicious activity\n- Escalate to human review\n\n## Key Constraints & Trade-offs\nDesigning ML systems for fraud detection requires balancing multiple constraints:\n\n- **Business objective:** Maximise fraud detection without harming customer experience\n- **Data challenges:** Highly imbalanced datasets (~1% fraud) and heterogeneous features\n- **Latency:** Real-time or near real-time decisioning requirements\n- **Adaptability:** Continuous evolution of fraud patterns (concept drift)\n- **Regulation & ethics:** Compliance with GDPR and EU AI Act, ensuring fairness and transparency\n\n## Development Approach\nFollowing CRISP-DM, the implementation focuses on:\n\n- Data preparation (EDA, anonymisation, encoding, handling missing values)\n- Feature engineering to capture behavioural patterns and feature interactions\n- Model evaluation using precision, recall, and F1-score (instead of accuracy)\n- Threshold tuning to balance fraud detection with customer impact\n\nFeature engineering is identified as the most critical and resource-intensive step.\n\n## Risks & Mitigation\nKey risks and mitigation strategies include:\n\n- **Data scarcity:** Mitigated through data partnerships and augmentation\n- **Model degradation (concept drift):** Addressed via continuous monitoring and retraining\n- **Ethical and regulatory risks:** Managed through explainability, governance, and human oversight\n\n## Key Insight\nThe most critical insight is that fraud detection is not purely a modelling problem. It is a **system design and decisioning problem**.\n\nSuccess depends on:\n- Combining multiple models\n- Aligning outputs with business goals\n- Embedding governance and adaptability into the system\n\n## Conclusion\nIntegrating machine learning into fraud detection systems enables significant improvements in scalability, adaptability, and performance. While implementation introduces complexity and regulatory considerations, it positions organisations to compete effectively in an AI-driven financial ecosystem.\n\n## Learn more about this work:\n\n- [Full paper](/assets/individual-essay-artificial-intelligence-and-its-applications.pdf)"
        },
        {
          id: "f87f75b8-de11-43d1-95f3-f4c32f072c55",
          type: "image",
          title: "Fraud detection pipeline visualised",
          body: "",
          code: "",
          url: "/images/fraud-detection-pipeline.png"
        }
      ]
    },
    {
      id: "e081873c-5d5e-4ff6-ac7f-49ddcfba913d",
      slug: "ai-solution-implementation-in-fraud-detection",
      sortOrder: 2,
      title: "Artificial Intelligence Solution Implementation in Fraud Detection",
      description:
        "This is the final submission for the module “Introduction to AI.”\nIn this project, I explore how machine learning can be applied to fraud detection, following the CRISP-DM framework throughout the modelling pipeline. The work includes my final paper, a link to the Python notebook, and selected screenshots capturing key learnings and insights from the process.",
      tags: ["All", "Intro to AI", "Module 3", "Experiment"],
      previewMediaType: "image",
      previewMediaUrl: "images/ml-for-fraud-detection.png",
      sections: [
        {
          id: "cf36bd01-d6b8-4941-bd56-27a10d20d71f",
          type: "text",
          title: "",
          body:
            "# Fraud Detection with Machine Learning\n\n## Overview\nThis project explores how machine learning can be applied to detect fraudulent financial transactions, using a structured approach based on the CRISP-DM framework. The goal was to evaluate how different supervised learning techniques perform in a real-world setting characterised by high data complexity and extreme class imbalance.\n\n## Problem Context\nFraud detection presents a uniquely challenging problem: fraudulent transactions are rare, patterns evolve rapidly, and the cost of errors is asymmetric. Traditional rule-based systems struggle to adapt to these dynamics, making machine learning a critical complementary approach.\n\nA key challenge in this space is balancing the trade-off between:\n- **False negatives** (missed fraud, direct financial loss)\n- **False positives** (legitimate transactions flagged, impacting customer experience)\n\n## Approach\nThe analysis followed the CRISP-DM methodology, covering data understanding, preparation, modelling, and evaluation.\n\n**Dataset:** IEEE-CIS Fraud Detection (Kaggle), ~400 features\n**Sample:** 100,000 transactions\n\n**Key characteristics:**\n- Highly imbalanced (≈2.6% fraud)\n- High dimensionality and feature heterogeneity\n- Limited interpretability due to anonymised features\n\n**Feature engineering focused on:**\n- Handling missing data and removing low-value features\n- Encoding categorical variables\n- Managing skewed distributions through selective transformation\n- Selecting appropriate evaluation metrics (F1, Recall, MCC, PR-AUC)\n\n## Model Selection\nTwo ensemble, tree-based models were selected to capture non-linear relationships and feature interactions:\n\n- **Random Forest (RF)**, parallel learning, strong generalisation\n- **Gradient Boosting (GB)**, sequential learning, error-focused refinement\n\nThese models were chosen based on their suitability for high-dimensional, non-linear, and noisy datasets typical of fraud detection.\n\n## Key Findings\n- Both RF and GB significantly outperformed the baseline model, which failed to detect any fraudulent transactions despite high accuracy.\n- **Random Forest delivered the strongest overall performance**, achieving:\n  - High precision (97%)\n  - Moderate recall (42%)\n  - Strong PR-AUC (0.666) and MCC (0.635)\n- **Gradient Boosting showed more conservative behaviour**, prioritising precision over recall and missing more fraudulent cases.\n- Hyperparameter tuning improved fraud detection (recall up to 69%), but at the cost of a substantial increase in false positives.\n\n**Key takeaway:** There is no “perfect” model, only trade-offs aligned to business priorities.\n\n## Key Insight\nThe most important takeaway from this project is not model performance, but decision-making under trade-offs.\n\nIn real-world fraud systems:\n- Increasing fraud detection comes at the cost of customer friction\n- Reducing false positives increases financial risk\n\nModel selection is therefore not purely technical. It is a **product and business decision**.\n\n## Real-World Implications\nWhile the models demonstrate strong predictive capability, deploying them in production introduces additional constraints:\n\n- **Latency & scalability:** real-time transaction processing at scale\n- **Regulation:** GDPR, EU AI Act requirements for transparency and fairness\n- **Ethics:** avoiding bias and ensuring responsible decision-making\n\nThis highlights that successful AI systems require more than strong models. They require alignment between technology, business goals, and regulatory constraints.\n\n## Learn more about this project\n- [Full paper](/assets/artificial-intelligence-solution-implementation-in-fraud-detection.pdf)\n\n- [Python notebook file](https://github.com/natinat/intro-to-ai-assets/blob/main/Fraud-detection-experiment-2026.ipynb)",
          code: "",
          url: "images/Glowing-CPU-on-circuit-board.png"
        }
      ]
    },
    {
      id: "4195d286-5e8b-4a35-954a-9f58d1fff79a",
      slug: "the-impact-of-artificial-intelligence-on-the-online-travel-industry",
      sortOrder: 3,
      title: "How AI Is Transforming the Online Travel Industry",
      description:
        "A video presentation exploring how artificial intelligence is reshaping online travel through automation, personalisation, and evolving customer expectations. It highlights how AI is redefining discovery, booking, and engagement across the travel journey for both users and businesses.",
      tags: ["All", "Module 2", "Intro to Computing"],
      previewMediaType: "image",
      previewMediaUrl: "images/AI transforming global travel industry.png",
      sections: [
        {
          id: "570a43bf-2f71-4839-af69-6ff29d1b9865",
          type: "video",
          title: "Presentation video",
          body: "",
          code: "",
          url: "videos/ai-impact-on-the-online-travel-industry.mp4"
        }
      ]
    }
  ],
  timelineItems: [
    {
      id: "dc6d6ab2-a6a5-4ac8-9237-251be2c53791",
      year: "2007-2016",
      role: "MARKETING LEADER IN VARIOUS B2B AND B2C COMPANIES",
      organization: "Various",
      summary:
        "Led **strategic marketing communications and product education initiatives** at SimilarWeb and across multiple B2B and B2C organisations, with a focus on enterprise audiences. Designed and launched **internal and external product academies**, delivering structured training programs across marketing, sales, product teams, and enterprise clients. These initiatives drove **increased product adoption and improved customer satisfaction**. Built and scaled **high-performing marketing teams** across different organisational contexts.\n\nOwned and executed **go-to-market and product enablement strategies** for a range of products and clients, developing supporting materials and communication frameworks for both internal and external audiences. Partnered closely with Product and Sales to ensure **clear articulation of product value**, strengthening alignment and improving commercial effectiveness.\n\nEstablished **scalable marketing communication platforms**, ensuring consistency and quality across all outputs. Led the delivery of **large-scale events**, including an online marketing and innovation conference with over 800 participants, expanding reach and engagement.\n\nBuilt and led **SEO and product growth functions**, applying data-driven and growth-focused strategies in highly competitive markets. Contributed to the launch of multiple **websites and mobile applications**, combining marketing expertise with a strong understanding of the **end-to-end product development lifecycle**."
    },
    {
      id: "ea7c2d07-adfe-4755-8285-d0c53d92e1f8",
      year: "2016-2019",
      role: "Senior Product Manager",
      organization: "Similarweb",
      summary:
        "Drove the **product vision and strategy for multiple B2C web and app products**, serving millions of monthly active users. Led the development and execution of **end-to-end product and go-to-market strategies**, resulting in measurable business growth and strengthened market positioning.\n\nActed as a **product evangelist**, representing the organisation at industry conferences and trade shows, and communicating product vision, strategy, and go-to-market expertise to external audiences.\n\nEstablished and managed **KPI frameworks across multiple products**, leveraging data-driven insights to identify growth opportunities and inform strategic decision-making. Built and implemented a **comprehensive B2C product analytics framework**, enabling scalable performance tracking and a deeper understanding of user behaviour across the product portfolio."
    },
    {
      id: "901a9487-ecb5-4cb4-95f9-5ac9e40b22de",
      year: "2023-2026",
      role: "Principal Product Manager",
      organization: "Booking.com",
      summary:
        "Led Booking.com’s entry into Generative AI through the launch of the AI Trip Planner, the company’s first customer-facing Generative AI product. **The initiative drove a 180% year-over-year increase in direct product bookings and contributed to a 10% uplift in stock price on the day of launch**. Building on this foundation, defined and continue to guide the Horizon 2 and 3 vision for AI-powered conversational experiences, shaping the long-term direction of AI chat across the organisation.\n\nFocused on scaling Generative AI adoption across Booking.com by establishing a streamlined intake process to assess and initiate new use cases, enabling teams to move efficiently from ideation to execution. **Developed and delivered educational programs and facilitated ideation workshops to empower product managers to build with AI confidently**. In parallel, contributed to the evolution of the company’s Personalisation strategy by integrating Generative AI as a core capability to enhance customer experience and drive business growth. Alongside this work, supported the development of future product leaders by mentoring more than 10 product managers across different career stages."
    },
    {
      id: "b7c74fb9-4740-4ac1-b114-c9ea25547fb4",
      year: "2019-2023",
      role: "Senior Product Manager",
      organization: "Booking.com",
      summary:
        "Directed the **strategic transformation of the app’s Land & Search experience**, turning a complex problem space into a clear two-year roadmap. This work secured **cross-business unit alignment and leadership approval**, resulting in a **50% increase in cross-product engagement** and advancing the company’s connected trip vision.\n\nLed the **modernisation of the Booking.com app**, spanning codebase refactoring, design system implementation, and the introduction of a scalable operating model for more than 60 teams. This initiative **streamlined product development and accelerated feature delivery by 50%**, establishing a foundation for more efficient, coordinated product innovation across the organisation.\n\nDefined and led the **app shell framework**, a new approach to app screen architecture that secured **multi-year investment and organisational adoption**. The framework enabled **real-time content distribution and management**, reducing time-to-market from weeks to minutes, while driving **significant growth in customer lifetime value and operational efficiency**."
    }
  ],
  blogLinks: [
    {
      id: "ecf341cc-7547-4672-8976-660267312f3b",
      title: "My TechArena Stockholm highlights 🇸🇪",
      platform: "Linkedin",
      publishedOn: "2026-02-18",
      description:
        "Key takeaways from TechArena Stockholm highlight the importance of clear storytelling, strong domain understanding, and credible scaling paths in startup pitches. Differences between European and US ecosystems also emerged, alongside the growing influence of AI in shaping innovation and investment conversations.",
      url: "https://www.linkedin.com/pulse/my-techarena-stockholm-highlights-natalie-halimi-mzw3e/",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E12AQGgO7Uplu7mVw/article-cover_image-shrink_720_1280/B4EZxxomMqJ8AI-/0/1771432994315?e=1777507200&v=beta&t=qWZCftlWnsGT6IFwOosQ4MbZWfEM8lUF6akeJsv50ik"
    },
    {
      id: "0943cd5b-a736-44ed-8580-da2f2f43fe11",
      title: "Are Corporates Lagging behind the Generative AI Product Development Leap?",
      platform: "Product Leap blog on Medium",
      publishedOn: "2025-03-27",
      description:
        "Generative AI is reshaping product development, but corporates risk falling behind due to rigid structures and slow processes. Smaller, agile teams and individuals are moving faster, highlighting the need for organisations to rethink talent, speed, and operating models to stay competitive.",
      url: "https://medium.com/product-leap/are-corporates-losing-the-generative-ai-product-development-leap-531569f4b651",
      imageUrl: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*co8ZCHmb8izzgkR3lHKCGQ.jpeg"
    },
    {
      id: "5ab11ef7-f557-4e7c-8dec-7061916f1606",
      title: "The AI-Augmented Tech Landscape: Why Going Wide is the New Going Deep",
      platform: "Product Leap on Medium",
      publishedOn: "2025-05-13",
      description:
        "AI is reshaping the tech landscape by shifting value from deep specialization to broad, cross-functional understanding. As AI augments work, professionals must expand beyond their core expertise, combining technical, product, and domain knowledge to remain relevant and create meaningful impact.",
      url: "https://medium.com/product-leap/the-ai-augmented-tech-landscape-why-going-wide-is-the-new-going-deep-f39ce0d1c1aa",
      imageUrl: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*r__du6kyLHugUmSsLXg08w.jpeg"
    },
    {
      id: "90c37d44-bcff-438b-9367-e650369cbbf2",
      title: "8 Weeks to Innovation: Lessons from Building Booking.com’s AI Trip Planner",
      platform: "Booking.com Blog on Medium",
      publishedOn: "2024-11-13",
      description:
        "Building Booking.com’s AI Trip Planner in eight weeks required rapid experimentation, cross-functional collaboration, and balancing control with LLM flexibility. Key lessons include prioritising user experience, trusting the model, leveraging existing AI foundations, and aligning teams around a clear, focused product goal.",
      url: "https://medium.com/booking-product/8-weeks-to-innovation-lessons-from-building-booking-coms-ai-trip-planner-94adbf138748",
      imageUrl: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*YNW-Jxo08v0h9H-GRztE2A.jpeg"
    }
  ]
};

const pageConfig = {
  home: {
    title: (site) => `${site.owner} | E-Portfolio`,
    render: renderHomePage
  },
  about: {
    title: (site) => `${site.owner} | About Me`,
    render: renderAboutPage
  },
  academic: {
    title: (site) => `${site.owner} | Academic Work`,
    render: renderAcademicPage
  },
  artifact: {
    title: (site) => {
      const artifact = getCurrentArtifact();
      return artifact ? `${site.owner} | ${artifact.title}` : `${site.owner} | Academic Artifact`;
    },
    render: renderArtifactPage
  },
  professional: {
    title: (site) => `${site.owner} | Professional Work`,
    render: renderProfessionalPage
  },
  blog: {
    title: (site) => `${site.owner} | Blog`,
    render: renderBlogPage
  }
};

let state = loadState();
let editMode = sessionStorage.getItem(EDIT_SESSION_KEY) === "true";
let activeEditor = null;

const currentPage = document.body.dataset.page || "home";
const searchParams = new URLSearchParams(window.location.search);
const currentArtifactSlug = searchParams.get("artifact") || searchParams.get("id");
const currentAcademicTag = searchParams.get("tag");

const app = document.querySelector("#app");
const footerMessage = document.querySelector("#footerMessage");
const footerEditToggle = document.querySelector("#footerEditToggle");
const editorDialog = document.querySelector("#editorDialog");
const editorFields = document.querySelector("#editorFields");
const editorForm = document.querySelector("#editorForm");
const dialogTitle = document.querySelector("#dialogTitle");
const deleteButton = document.querySelector("#deleteButton");
const dialogCloseButton = document.querySelector('.icon-button[value="cancel"]');
const siteShell = document.querySelector(".site-shell");

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const nextState = saved ? JSON.parse(saved) : structuredClone(seedData);

    nextState.site = {
      ...seedData.site,
      ...(nextState.site || {})
    };

    if (!nextState.site.aboutImage || nextState.site.aboutImage === DEFAULT_ABOUT_IMAGE || /natalie-halimi\.(jpg|jpeg)$/i.test(nextState.site.aboutImage)) {
      nextState.site.aboutImage = LOCAL_PROFILE_IMAGE;
    }

    nextState.site.academicTags = ensureAllTag(nextState.site.academicTags || seedData.site.academicTags);
    nextState.academicItems = assignAcademicSortOrder((nextState.academicItems || []).map(normalizeAcademicItem));
    nextState.timelineItems = (nextState.timelineItems || []).map(normalizeTimelineItem);
    nextState.blogLinks = (nextState.blogLinks || []).map(normalizeBlogItem);

    if (!nextState.academicItems.some((item) => item.slug === "the-impact-of-artificial-intelligence-on-the-online-travel-industry")) {
      nextState.academicItems.push(
        normalizeAcademicItem(seedData.academicItems[2])
      );
      nextState.academicItems = assignAcademicSortOrder(nextState.academicItems);
    }

    return nextState;
  } catch (error) {
    console.warn("Unable to load saved portfolio data.", error);
    return structuredClone(seedData);
  }
}

function normalizeAcademicItem(item) {
  const normalized = {
    id: item.id || crypto.randomUUID(),
    slug: item.slug || slugify(item.title || "artifact"),
    sortOrder: Number.isFinite(Number(item.sortOrder)) ? Number(item.sortOrder) : 0,
    title: item.title || "",
    description: item.description || "",
    tags: ensureAllTag(Array.isArray(item.tags) ? item.tags : []),
    previewMediaType: "image",
    previewMediaUrl:
      item.previewMediaType === "image" && item.previewMediaUrl
        ? item.previewMediaUrl
        : item.previewImageUrl || "",
    sections: Array.isArray(item.sections) ? item.sections.map(normalizeSection) : buildLegacySections(item)
  };

  return normalized;
}

function buildLegacySections(item) {
  const sections = [];

  if (item.description) {
    sections.push({
      id: crypto.randomUUID(),
      type: "text",
      title: "Overview",
      body: item.description
    });
  }

  if (item.mediaUrl && item.mediaType) {
    sections.push({
      id: crypto.randomUUID(),
      type: item.mediaType,
      title: item.mediaType === "video" ? "Media" : "Image",
      url: item.mediaUrl
    });
  }

  if (item.codeSnippet) {
    sections.push({
      id: crypto.randomUUID(),
      type: "code",
      title: "Code sample",
      code: item.codeSnippet
    });
  }

  return sections;
}

function normalizeSection(section) {
  return {
    id: section.id || crypto.randomUUID(),
    type: section.type || "text",
    title: section.title || "",
    body: section.body || "",
    code: section.code || "",
    url: section.url || ""
  };
}

function normalizeTimelineItem(item) {
  return {
    id: item.id || crypto.randomUUID(),
    year: item.year || "",
    role: item.role || "",
    organization: item.organization || "",
    summary: item.summary || ""
  };
}

function normalizeBlogItem(item) {
  return {
    id: item.id || crypto.randomUUID(),
    title: item.title || "",
    platform: item.platform || "",
    publishedOn: item.publishedOn || "",
    description: item.description || "",
    url: item.url || "",
    imageUrl: item.imageUrl || ""
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(text = "") {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function render() {
  const config = pageConfig[currentPage] || pageConfig.home;
  document.title = config.title(state.site);
  footerMessage.textContent = state.site.footerMessage;
  siteShell.classList.toggle("editing", editMode);
  app.innerHTML = config.render();
  updateActiveNavigation();
  attachInteractiveHandlers();
}

function updateActiveNavigation() {
  const pageHref = {
    home: "index.html",
    about: "about.html",
    academic: "academic.html",
    artifact: "academic.html",
    professional: "professional.html",
    blog: "blog.html"
  }[currentPage];

  document.querySelectorAll(".site-nav a").forEach((link) => {
    if (link.getAttribute("href") === pageHref) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function renderHomePage() {
  return `
    <section class="panel hero hero-single">
      <div class="hero-copy">
        <div>
          <p class="pill">Online Portfolio</p>
          <h1 class="hero-title">${escapeHtml(state.site.owner)}<br /><span>${escapeHtml(state.site.role)}</span></h1>
        </div>
        <p class="hero-intro">${escapeHtml(state.site.intro)}</p>
        <div class="button-row">
          <a class="primary-button" href="academic.html">Explore academic work</a>
          <a class="ghost-button" href="professional.html">Explore professional background</a>
          <a class="ghost-button" href="about.html">Read my story</a>
          <button class="editor-button editor-only" type="button" data-editor="site">Edit hero</button>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <section class="panel page-intro">
      <div class="section-header">
        <div>
          <p class="pill">About Me</p>
        </div>
        <button class="editor-button editor-only" type="button" data-editor="about">Edit about</button>
      </div>
    </section>

    <section class="panel">
      <div class="about-layout">
        <div class="about-image edit-highlight">
          <img
            src="${escapeHtml(getAboutImageUrl())}"
            alt="Portrait or representative profile image"
            onerror="this.onerror=null;this.src='${LOCAL_PROFILE_IMAGE}'"
          />
        </div>
        <article class="about-card edit-highlight">
          ${renderParagraphs(state.site.aboutText, "about-text")}
        </article>
      </div>
    </section>
  `;
}

function renderAcademicPage() {
  const activeTag = currentAcademicTag ? decodeURIComponent(currentAcademicTag) : "";
  const activeTagLabel = getTagLabelFromParam(activeTag);
  const isAllFilter = !activeTag || activeTag === "all";
  const orderedAcademicItems = [...state.academicItems].sort((a, b) => a.sortOrder - b.sortOrder);
  const filteredItems = isAllFilter
    ? orderedAcademicItems
    : orderedAcademicItems.filter((item) => item.tags.some((tag) => slugify(tag) === activeTag));

  return `
    <section class="panel page-intro">
      <div class="section-header">
        <div>
          <p class="pill">Academic Work</p>
          <h1 class="section-title">${escapeHtml(state.site.academicTitle)}</h1>
        </div>
        <div class="editor-toolbar editor-only">
          <button class="ghost-button" type="button" data-editor="academic-page">Edit page</button>
          <button class="editor-button" type="button" data-editor="academic-new">Add academic item</button>
        </div>
      </div>
      <p class="section-copy">${escapeHtml(state.site.academicDescription)}</p>
      <div class="tag-list page-tag-list">
        ${state.site.academicTags
          .map((tag) => `<a class="page-tag ${((isAllFilter && tag.toLowerCase() === "all") || activeTag === slugify(tag)) ? "page-tag-active" : ""}" href="${getAcademicTagUrl(tag)}">${escapeHtml(tag)}</a>`)
          .join("")}
      </div>
    </section>

    <section class="panel">
      ${
        !isAllFilter
          ? `
            <div class="academic-filter-bar">
              <p class="pill">Filtered by</p>
              <div class="academic-filter-actions">
                <span class="active-filter-chip">${escapeHtml(activeTagLabel)}</span>
                <a class="inline-link" href="academic.html">Clear filter</a>
              </div>
            </div>
          `
          : ""
      }
      <div class="academic-grid">
        ${
          filteredItems.length
            ? filteredItems.map(renderAcademicCard).join("")
            : `
              <article class="academic-empty-state">
                <p class="pill">No matching artifacts</p>
                <h2 class="card-title">Nothing is filed under this tag yet.</h2>
                <a class="inline-link" href="academic.html">Show all academic artifacts</a>
              </article>
            `
        }
      </div>
    </section>
  `;
}

function renderAcademicCard(item) {
  return `
    <article class="academic-card academic-card-preview edit-highlight">
      <button class="academic-widget-button academic-edit-button editor-only" type="button" data-editor="academic-edit" data-id="${item.id}" aria-label="Edit academic item">Edit</button>
      <div class="academic-card-link" data-artifact-url="${getArtifactUrl(item)}" role="link" tabindex="0" aria-label="Open artifact ${escapeHtml(item.title)}">
        ${renderPreviewMedia(item)}
        <div class="academic-card-copy">
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <p class="card-copy">${escapeHtml(truncateWords(item.description, 40))}</p>
          <div class="tag-list">
            ${item.tags.map((tag) => `<a class="tag artifact-tag-link" href="${getAcademicTagUrl(tag)}">${escapeHtml(tag)}</a>`).join("")}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderPreviewMedia(item) {
  const previewImage = normalizeRenderableUrl(item.previewMediaUrl || ACADEMIC_PREVIEW_PLACEHOLDER);
  return `<div class="media-frame preview-media"><img src="${escapeHtml(previewImage)}" alt="${escapeHtml(item.title)}" /></div>`;
}

function renderArtifactPage() {
  const artifact = getCurrentArtifact();

  if (!artifact) {
    return `
      <section class="panel">
        <p class="pill">Academic Artifact</p>
        <h1 class="section-title">Artifact not found</h1>
        <p class="section-copy">This artifact link no longer points to an existing entry.</p>
        <a class="primary-button" href="academic.html">Back to Academic Work</a>
      </section>
    `;
  }

  return `
    <section class="panel page-intro">
      <a class="inline-link artifact-back-link" href="academic.html">Back to Academic Work</a>
      <div class="artifact-header">
        <div>
          <p class="pill">Academic Artifact</p>
          <h1 class="section-title">${escapeHtml(artifact.title)}</h1>
          <p class="section-copy">${escapeHtml(artifact.description)}</p>
          <div class="editor-toolbar artifact-header-actions">
            <button class="ghost-button editor-only" type="button" data-editor="academic-edit" data-id="${artifact.id}">Edit artifact</button>
            <button class="editor-button editor-only" type="button" data-editor="artifact-section-new" data-id="${artifact.id}">Add section</button>
          </div>
        </div>
      </div>
      <div class="tag-list">
        ${artifact.tags.map((tag) => `<a class="tag artifact-tag-link" href="${getAcademicTagUrl(tag)}">${escapeHtml(tag)}</a>`).join("")}
      </div>
    </section>

    <section class="artifact-section-stack">
      ${artifact.sections.map((section) => renderArtifactSection(artifact, section)).join("")}
    </section>
  `;
}

function renderArtifactSection(artifact, section) {
  return `
    <article class="panel artifact-section edit-highlight">
      <div class="section-header">
        <div>
          <p class="pill">${escapeHtml(section.type)}</p>
          ${section.title ? `<h2 class="card-title artifact-section-title">${escapeHtml(section.title)}</h2>` : ""}
        </div>
        <div class="editor-toolbar editor-only">
          <button class="ghost-button" type="button" data-editor="artifact-section-edit" data-id="${artifact.id}" data-section-id="${section.id}">Edit section</button>
        </div>
      </div>
      ${renderSectionBody(section)}
    </article>
  `;
}

function renderSectionBody(section) {
  if (section.type === "text") return renderFormattedText(section.body);
  if (section.type === "image") {
    return `<div class="media-frame artifact-media"><img src="${escapeHtml(normalizeRenderableUrl(section.url))}" alt="${escapeHtml(section.title || "Artifact image")}" /></div>`;
  }
  if (section.type === "video") {
    const videoUrl = normalizeRenderableUrl(section.url);
    if (isDirectVideoFile(videoUrl)) {
      return `<div class="media-frame artifact-media"><video controls preload="metadata" src="${escapeHtml(videoUrl)}"></video></div>`;
    }
    return `<div class="media-frame artifact-media"><iframe src="${escapeHtml(videoUrl)}" title="${escapeHtml(section.title || "Artifact video")}" allowfullscreen></iframe></div>`;
  }
  if (section.type === "code") {
    return `<pre class="code-block artifact-code"><code>${escapeHtml(section.code)}</code></pre>`;
  }
  if (section.type === "link") {
    const linkUrl = normalizeRenderableUrl(section.url);
    return `<a class="inline-link artifact-link" href="${escapeHtml(linkUrl)}" target="_blank" rel="noreferrer">${escapeHtml(section.body || section.url)}</a>`;
  }
  return "";
}

function renderProfessionalPage() {
  const orderedTimelineItems = [...state.timelineItems].sort(compareTimelineItemsDesc);
  return `
    <section class="panel page-intro">
      <div class="section-header">
        <div>
          <p class="pill">Professional Work</p>
          <h1 class="section-title">A resume timeline with context</h1>
        </div>
        <div class="editor-toolbar editor-only">
          <button class="editor-button" type="button" data-editor="timeline-new">Add timeline item</button>
        </div>
      </div>
      <p class="section-copy">This page frames experience as a narrative, pairing timeline milestones with a broader professional story.</p>
    </section>

    <section class="panel">
      <div class="timeline timeline-full">
        ${orderedTimelineItems.map(renderTimelineCard).join("")}
      </div>
    </section>
  `;
}

function renderTimelineCard(item) {
  return `
    <article class="timeline-card edit-highlight">
      <div class="timeline-head">
        <div>
          <p class="timeline-year">${escapeHtml(item.year)}</p>
          <h3 class="timeline-role">${escapeHtml(item.role)}</h3>
        </div>
        <button class="ghost-button editor-only" type="button" data-editor="timeline-edit" data-id="${item.id}" aria-label="Edit timeline item">Edit</button>
      </div>
      <p class="pill">${escapeHtml(item.organization)}</p>
      <div class="timeline-summary">${renderFormattedText(item.summary)}</div>
    </article>
  `;
}

function renderBlogPage() {
  const orderedBlogLinks = [...state.blogLinks].sort(compareBlogDatesDesc);
  return `
    <section class="panel page-intro">
      <div class="section-header">
        <div>
          <p class="pill">Blog</p>
          <h1 class="section-title">Writing published beyond this website</h1>
        </div>
        <div class="editor-toolbar editor-only">
          <button class="editor-button" type="button" data-editor="blog-new">Add blog link</button>
        </div>
      </div>
      <p class="section-copy">Use this space to connect readers to your external articles, thought pieces, and essays without duplicating content across platforms.</p>
    </section>

    <section class="panel">
      <div class="blog-grid">
        ${orderedBlogLinks.map(renderBlogCard).join("")}
      </div>
    </section>
  `;
}

function renderBlogCard(item) {
  return `
    <article class="blog-card edit-highlight">
      <div class="media-frame blog-image-frame">
        <img src="${escapeHtml(getBlogImageUrl(item))}" alt="${escapeHtml(item.title)}" />
      </div>
      <div class="card-header">
        <div>
          <div class="blog-meta-row">
            <p class="pill">${escapeHtml(item.platform)}</p>
            ${item.publishedOn ? `<p class="pill blog-date">${escapeHtml(formatDisplayDate(item.publishedOn))}</p>` : ""}
          </div>
          <h3 class="blog-title">${escapeHtml(item.title)}</h3>
        </div>
        <button class="ghost-button editor-only" type="button" data-editor="blog-edit" data-id="${item.id}" aria-label="Edit blog link">Edit</button>
      </div>
      <p class="blog-note">${escapeHtml(item.description)}</p>
      <a class="inline-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">Read article</a>
    </article>
  `;
}

function getBlogImageUrl(item) {
  return normalizeRenderableUrl(item.imageUrl || buildBlogPlaceholder(item.platform || "Article", item.title || "Blog post"));
}

function buildBlogPlaceholder(platform, title) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720">
      <rect width="1200" height="720" fill="#f3ede3"/>
      <rect x="88" y="88" width="240" height="44" rx="22" fill="#d65c31" fill-opacity=".18"/>
      <rect x="88" y="464" width="1024" height="148" rx="30" fill="#ffffff" fill-opacity=".45"/>
      <text x="88" y="118" font-family="Open Sans, Arial, sans-serif" font-size="22" font-weight="700" fill="#d65c31">${escapeSvgText(platform)}</text>
      <text x="88" y="214" font-family="Open Sans, Arial, sans-serif" font-size="38" font-weight="700" fill="#1e1f1b">${escapeSvgText(title.slice(0, 44))}</text>
    </svg>
  `;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function escapeSvgText(text = "") {
  return String(text).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function renderParagraphs(text = "", className) {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p class="${className}">${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderFormattedText(text = "") {
  return text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map(renderFormattedBlock)
    .join("");
}

function renderFormattedBlock(block) {
  const lines = block
    .split("\n")
    .map((line) => line.replace(/\t/g, "  "))
    .map((line) => ({ raw: line, trimmed: line.trim() }))
    .filter((line) => line.trimmed);

  const fragments = [];
  let paragraphLines = [];
  let listItems = [];

  function flushParagraph() {
    if (!paragraphLines.length) return;
    fragments.push(`<p class="artifact-text">${formatInlineText(paragraphLines.join(" "))}</p>`);
    paragraphLines = [];
  }

  function flushList() {
    if (!listItems.length) return;
    fragments.push(renderNestedList(listItems));
    listItems = [];
  }

  lines.forEach(({ raw, trimmed }) => {
    if (/^\s*-\s+/.test(raw)) {
      flushParagraph();
      listItems.push({
        depth: Math.floor((raw.match(/^\s*/)?.[0].length || 0) / 2),
        text: trimmed.slice(2)
      });
      return;
    }

    flushList();

    if (trimmed.startsWith("#### ")) {
      flushParagraph();
      fragments.push(`<h5 class="artifact-heading artifact-heading-xs">${formatInlineText(trimmed.slice(5))}</h5>`);
      return;
    }
    if (trimmed.startsWith("### ")) {
      flushParagraph();
      fragments.push(`<h4 class="artifact-heading artifact-heading-sm">${formatInlineText(trimmed.slice(4))}</h4>`);
      return;
    }
    if (trimmed.startsWith("## ")) {
      flushParagraph();
      fragments.push(`<h3 class="artifact-heading artifact-heading-md">${formatInlineText(trimmed.slice(3))}</h3>`);
      return;
    }
    if (trimmed.startsWith("# ")) {
      flushParagraph();
      fragments.push(`<h2 class="artifact-heading artifact-heading-lg">${formatInlineText(trimmed.slice(2))}</h2>`);
      return;
    }

    paragraphLines.push(trimmed);
  });

  flushList();
  flushParagraph();
  return fragments.join("");
}

function renderNestedList(items) {
  const normalizedItems = items.map((item) => ({
    ...item,
    depth: Math.max(0, item.depth)
  }));

  function buildList(startIndex, depth) {
    let html = `<ul class="${depth === 0 ? "artifact-list" : "artifact-list artifact-sublist"}">`;
    let index = startIndex;

    while (index < normalizedItems.length) {
      const item = normalizedItems[index];
      if (item.depth < depth) break;
      if (item.depth > depth) {
        index += 1;
        continue;
      }

      html += `<li>${formatInlineText(item.text)}`;
      if (normalizedItems[index + 1] && normalizedItems[index + 1].depth > depth) {
        const nested = buildList(index + 1, normalizedItems[index + 1].depth);
        html += nested.html;
        index = nested.index;
      } else {
        index += 1;
      }
      html += "</li>";
    }

    html += "</ul>";
    return { html, index };
  }

  return buildList(0, 0).html;
}

function formatInlineText(text = "") {
  let formatted = escapeHtml(text);
  formatted = formatted.replace(
    /\[([^\]]+)\]\(((?:https?:\/\/|\.{0,2}\/|~\/|\/|assets\/|images\/|videos\/)[^)]+)\)/g,
    (_, label, url) => `<a class="inline-link" href="${escapeHtml(normalizeRenderableUrl(url.trim()))}" target="_blank" rel="noreferrer">${label}</a>`
  );
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return formatted;
}

function isDirectVideoFile(url = "") {
  return /\.(mp4|webm|ogg)$/i.test(url);
}

function getAboutImageUrl() {
  const candidate = state?.site?.aboutImage?.trim();
  if (!candidate || candidate === DEFAULT_ABOUT_IMAGE) return LOCAL_PROFILE_IMAGE;
  return normalizeRenderableUrl(candidate);
}

function normalizeRenderableUrl(url = "") {
  const trimmed = String(url).trim();
  if (!trimmed) return "";
  if (/^(data:|https?:\/\/|mailto:|tel:|#)/i.test(trimmed)) return trimmed;

  let normalized = trimmed.replace(/^~\//, "").replace(/^\.?\//, (match) => (match === "./" ? "" : match));

  const projectMarker = "/eportfolio/";
  if (normalized.includes(projectMarker)) {
    normalized = normalized.split(projectMarker)[1];
  }

  if (normalized.startsWith("/")) {
    normalized = normalized.slice(1);
  }

  return encodeURI(normalized);
}

function getArtifactUrl(item) {
  return `artifact.html?artifact=${encodeURIComponent(item.slug)}`;
}

function getAcademicTagUrl(tag) {
  return tag.toLowerCase() === "all" ? "academic.html" : `academic.html?tag=${encodeURIComponent(slugify(tag))}`;
}

function getTagLabelFromParam(param) {
  if (!param || param === "all") return "All";
  const knownTags = [...(state.site.academicTags || []), ...state.academicItems.flatMap((item) => item.tags || [])];
  return knownTags.find((tag) => slugify(tag) === param) || param;
}

function getCurrentArtifact() {
  if (!currentArtifactSlug) return null;
  return state.academicItems.find((item) => item.slug === currentArtifactSlug || item.id === currentArtifactSlug) || null;
}

function attachInteractiveHandlers() {
  document.querySelectorAll("[data-artifact-url]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      window.location.href = card.dataset.artifactUrl;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      window.location.href = card.dataset.artifactUrl;
    });
  });

  document.querySelectorAll("[data-editor]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!editMode) return;
      openEditor(button.dataset.editor, button.dataset.id, button.dataset.sectionId);
    });
  });
}

function ensureEditAccess() {
  if (editMode) {
    editMode = false;
    sessionStorage.removeItem(EDIT_SESSION_KEY);
    render();
    return;
  }

  const entered = window.prompt(
    "Enter the portfolio owner passcode to unlock edit mode.\nDefault demo passcode: portfolio-admin"
  );

  if (entered === OWNER_PASSCODE) {
    editMode = true;
    sessionStorage.setItem(EDIT_SESSION_KEY, "true");
    render();
    return;
  }

  if (entered !== null) {
    window.alert("That passcode did not match. Visitors remain in view-only mode.");
  }
}

function openEditor(type, id, sectionId) {
  const config = buildEditorConfig(type, id, sectionId);
  if (!config) return;

  activeEditor = config;
  dialogTitle.textContent = config.title;
  editorFields.innerHTML = config.fields.map(renderField).join("");
  deleteButton.classList.toggle("hidden", !config.onDelete);
  editorDialog.showModal();
}

function renderField(field) {
  const value = field.value ?? "";

  if (field.type === "textarea") {
    return `
      <label>
        ${field.label}
        <textarea name="${field.name}" ${field.required ? "required" : ""}>${escapeHtml(value)}</textarea>
      </label>
    `;
  }

  if (field.type === "select") {
    return `
      <label>
        ${field.label}
        <select name="${field.name}">
          ${field.options
            .map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`)
            .join("")}
        </select>
      </label>
    `;
  }

  return `
    <label>
      ${field.label}
      <input type="${field.type || "text"}" name="${field.name}" value="${escapeHtml(value)}" ${field.required ? "required" : ""} />
    </label>
  `;
}

function buildEditorConfig(type, id, sectionId) {
  if (type === "site") {
    return {
      title: "Edit home content",
      fields: [
        { name: "owner", label: "Site owner name", value: state.site.owner, required: true },
        { name: "role", label: "Headline", value: state.site.role, required: true },
        { name: "intro", label: "Intro text", value: state.site.intro, type: "textarea", required: true },
        { name: "footerMessage", label: "Footer message", value: state.site.footerMessage, type: "textarea", required: true }
      ],
      onSave: (data) => {
        Object.assign(state.site, data);
      }
    };
  }

  if (type === "about") {
    return {
      title: "Edit about page",
      fields: [
        { name: "aboutTitle", label: "Title", value: state.site.aboutTitle, required: true },
        { name: "aboutImage", label: "Image URL", value: state.site.aboutImage, required: true },
        { name: "aboutText", label: "Body text", value: state.site.aboutText, type: "textarea", required: true }
      ],
      onSave: (data) => {
        Object.assign(state.site, data);
      }
    };
  }

  if (type === "academic-page") {
    return {
      title: "Edit academic page",
      fields: [
        { name: "academicTitle", label: "Page title", value: state.site.academicTitle, required: true },
        { name: "academicDescription", label: "Page description", value: state.site.academicDescription, type: "textarea", required: true },
        { name: "academicTags", label: "Selected tags (comma separated)", value: (state.site.academicTags || []).join(", "), required: true }
      ],
      onSave: (data) => {
        state.site.academicTitle = data.academicTitle;
        state.site.academicDescription = data.academicDescription;
        state.site.academicTags = ensureAllTag(splitCommaList(data.academicTags));
      }
    };
  }

  if (type === "academic-new" || type === "academic-edit") {
    const current =
      type === "academic-edit"
        ? state.academicItems.find((item) => item.id === id)
        : {
            slug: "",
            sortOrder: state.academicItems.length,
            title: "",
            description: "",
            tags: ["All"],
            previewMediaType: "image",
            previewMediaUrl: "",
            sections: []
          };

    if (!current) return null;

    return {
      title: type === "academic-new" ? "Add academic artifact" : "Edit academic artifact",
      fields: [
        { name: "slug", label: "Artifact page name (.html-style slug)", value: current.slug, required: true },
        { name: "sortOrder", label: "Display order", value: String((current.sortOrder ?? 0) + 1), type: "number", required: true },
        { name: "title", label: "Title", value: current.title, required: true },
        { name: "description", label: "Description", value: current.description, type: "textarea", required: true },
        { name: "tags", label: "Tags (comma separated)", value: current.tags.join(", "), required: true },
        { name: "previewMediaUrl", label: "Preview image URL", value: current.previewMediaUrl }
      ],
      onSave: (data) => {
        const next = normalizeAcademicItem({
          ...current,
          ...data,
          id: current.id || crypto.randomUUID(),
          slug: ensureUniqueArtifactSlug(current.id, data.slug || data.title),
          sortOrder: Math.max(0, (Number.parseInt(data.sortOrder, 10) || 1) - 1),
          tags: ensureAllTag(splitCommaList(data.tags)),
          previewMediaType: "image"
        });

        if (type === "academic-new") {
          if (!next.sections.length) {
            next.sections.push({
              id: crypto.randomUUID(),
              type: "text",
              title: "Overview",
              body: next.description
            });
          }
          state.academicItems = assignAcademicSortOrder([...state.academicItems, next]);
        } else {
          state.academicItems = assignAcademicSortOrder(
            state.academicItems.map((item) => (item.id === id ? next : item))
          );
        }
      },
      onDelete:
        type === "academic-edit"
          ? () => {
              state.academicItems = assignAcademicSortOrder(state.academicItems.filter((item) => item.id !== id));
              if (currentPage === "artifact" && currentArtifactSlug === current.slug) {
                window.location.href = "academic.html";
              }
            }
          : null
    };
  }

  if (type === "artifact-section-new" || type === "artifact-section-edit") {
    const artifact = state.academicItems.find((item) => item.id === id);
    if (!artifact) return null;

    const current =
      type === "artifact-section-edit"
        ? artifact.sections.find((section) => section.id === sectionId)
        : { type: "text", title: "", body: "", code: "", url: "" };

    if (!current) return null;

    return {
      title: type === "artifact-section-new" ? "Add artifact section" : "Edit artifact section",
      fields: [
        { name: "type", label: "Section type", value: current.type, type: "select", options: ["text", "image", "video", "code", "link"] },
        { name: "title", label: "Section title", value: current.title },
        { name: "body", label: "Text or link label", value: current.body, type: "textarea" },
        { name: "url", label: "Media or link URL", value: current.url },
        { name: "code", label: "Code", value: current.code, type: "textarea" }
      ],
      onSave: (data) => {
        const nextSection = normalizeSection({
          ...current,
          ...data,
          id: current.id || crypto.randomUUID()
        });

        state.academicItems = state.academicItems.map((item) => {
          if (item.id !== id) return item;
          const nextSections =
            type === "artifact-section-new"
              ? [...item.sections, nextSection]
              : item.sections.map((section) => (section.id === sectionId ? nextSection : section));
          return normalizeAcademicItem({ ...item, sections: nextSections });
        });
      },
      onDelete:
        type === "artifact-section-edit"
          ? () => {
              state.academicItems = state.academicItems.map((item) => {
                if (item.id !== id) return item;
                return normalizeAcademicItem({
                  ...item,
                  sections: item.sections.filter((section) => section.id !== sectionId)
                });
              });
            }
          : null
    };
  }

  if (type === "timeline-new" || type === "timeline-edit") {
    const current =
      type === "timeline-edit"
        ? state.timelineItems.find((item) => item.id === id)
        : { year: "", role: "", organization: "", summary: "" };

    if (!current) return null;

    return {
      title: type === "timeline-new" ? "Add timeline item" : "Edit timeline item",
      fields: [
        { name: "year", label: "Year", value: current.year, required: true },
        { name: "role", label: "Role", value: current.role, required: true },
        { name: "organization", label: "Organization", value: current.organization, required: true },
        { name: "summary", label: "Summary", value: current.summary, type: "textarea", required: true }
      ],
      onSave: (data) => {
        const next = normalizeTimelineItem({ ...current, ...data, id: current.id || crypto.randomUUID() });
        if (type === "timeline-new") {
          state.timelineItems.unshift(next);
        } else {
          state.timelineItems = state.timelineItems.map((item) => (item.id === id ? next : item));
        }
      },
      onDelete:
        type === "timeline-edit"
          ? () => {
              state.timelineItems = state.timelineItems.filter((item) => item.id !== id);
            }
          : null
    };
  }

  if (type === "blog-new" || type === "blog-edit") {
    const current =
      type === "blog-edit"
        ? state.blogLinks.find((item) => item.id === id)
        : { title: "", platform: "", publishedOn: "", description: "", url: "", imageUrl: "" };

    if (!current) return null;

    return {
      title: type === "blog-new" ? "Add blog link" : "Edit blog link",
      fields: [
        { name: "title", label: "Article title", value: current.title, required: true },
        { name: "platform", label: "Platform", value: current.platform, required: true },
        { name: "publishedOn", label: "Publication date", value: current.publishedOn, type: "date" },
        { name: "description", label: "Description", value: current.description, type: "textarea", required: true },
        { name: "url", label: "Article URL", value: current.url, required: true },
        { name: "imageUrl", label: "Image URL (optional)", value: current.imageUrl }
      ],
      onSave: (data) => {
        const next = normalizeBlogItem({ ...current, ...data, id: current.id || crypto.randomUUID() });
        if (type === "blog-new") {
          state.blogLinks.unshift(next);
        } else {
          state.blogLinks = state.blogLinks.map((item) => (item.id === id ? next : item));
        }
      },
      onDelete:
        type === "blog-edit"
          ? () => {
              state.blogLinks = state.blogLinks.filter((item) => item.id !== id);
            }
          : null
    };
  }

  return null;
}

function splitCommaList(value = "") {
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function ensureAllTag(tags = []) {
  const uniqueTags = [];
  tags.forEach((tag) => {
    if (!tag) return;
    if (!uniqueTags.some((entry) => entry.toLowerCase() === tag.toLowerCase())) {
      uniqueTags.push(tag);
    }
  });
  if (!uniqueTags.some((tag) => tag.toLowerCase() === "all")) {
    uniqueTags.unshift("All");
  }
  return uniqueTags;
}

function assignAcademicSortOrder(items) {
  return [...items]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((item, index) => ({ ...item, sortOrder: index }));
}

function truncateWords(text = "", maxWords = 40) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return text.trim();
  return `${words.slice(0, maxWords).join(" ")}...`;
}

function slugify(value = "") {
  return value
    .toLowerCase()
    .trim()
    .replace(/\.html?$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "artifact";
}

function ensureUniqueArtifactSlug(currentId, desiredValue) {
  const baseSlug = slugify(desiredValue);
  let nextSlug = baseSlug;
  let suffix = 2;
  while (state.academicItems.some((item) => item.id !== currentId && item.slug === nextSlug)) {
    nextSlug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
  return nextSlug;
}

function formatDisplayDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function compareBlogDatesDesc(a, b) {
  const dateA = Date.parse(a.publishedOn || "");
  const dateB = Date.parse(b.publishedOn || "");
  return (Number.isNaN(dateB) ? -Infinity : dateB) - (Number.isNaN(dateA) ? -Infinity : dateA);
}

function compareTimelineItemsDesc(a, b) {
  return parseTimelineDateValue(b.year) - parseTimelineDateValue(a.year);
}

function parseTimelineDateValue(value = "") {
  const directDate = Date.parse(value);
  if (!Number.isNaN(directDate)) return directDate;
  const yearMatch = String(value).match(/\b(19|20)\d{2}\b/);
  if (yearMatch) return Number(yearMatch[0]);
  return -Infinity;
}

function formToObject(formData) {
  return Object.fromEntries([...formData.entries()].map(([key, value]) => [key, value.trim()]));
}

footerEditToggle?.addEventListener("click", ensureEditAccess);
dialogCloseButton?.addEventListener("click", (event) => {
  event.preventDefault();
  editorDialog.close();
});

editorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    editorDialog.close();
    return;
  }
  if (!activeEditor) return;

  const data = formToObject(new FormData(editorForm));
  activeEditor.onSave(data);
  saveState();
  render();
  editorDialog.close();
});

deleteButton.addEventListener("click", () => {
  if (!activeEditor?.onDelete) return;
  if (!window.confirm("Delete this item?")) return;
  activeEditor.onDelete();
  saveState();
  render();
  editorDialog.close();
});

render();
