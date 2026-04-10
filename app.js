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
    aboutImage: LOCAL_PROFILE_IMAGE,
    aboutText:
      "I am a multidisciplinary professional with a strong interest in connecting ideas across research, design, communication, and execution.\n\nMy work is shaped by curiosity, careful analysis, and a desire to create outputs that are useful to real people.\n\nThis portfolio is where I document that journey, share what I have built, and reflect on how each experience informs the next.",
    academicTitle: "Academic artifacts",
    academicDescription:
      "Projects, papers, presentations, prototypes, and discussions developed as part of my studies at the University of Essex.",
    academicTags: ["All", "Intro to Computing", "Intro to AI"]
  },
  academicItems: [
    {
      id: crypto.randomUUID(),
      slug: "capstone-research-project",
      sortOrder: 0,
      title: "Capstone research project",
      description:
        "A long-form academic investigation combining literature review, field observations, and final recommendations. This entry shows how image, text, and tagged metadata can be combined for a rich portfolio artifact.",
      tags: ["All", "Research", "Capstone", "Qualitative"],
      previewMediaType: "image",
      previewMediaUrl: "images/Glowing-CPU-on-circuit-board.png",
      sections: [
        {
          id: crypto.randomUUID(),
          type: "text",
          title: "Overview",
          body:
            "# Overview\n\nA long-form academic investigation combining literature review, field observations, and final recommendations.\n\n## Focus areas\n\n- Qualitative analysis\n- Field observations\n- Final recommendations"
        },
        {
          id: crypto.randomUUID(),
          type: "image",
          title: "Research visual",
          url: "images/Glowing-CPU-on-circuit-board.png"
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      slug: "course-presentation-recording",
      sortOrder: 1,
      title: "Course presentation recording",
      description:
        "A presentation that translates a complex topic into a clear visual narrative. Video embeds can be used here for talks, demonstrations, or defenses.",
      tags: ["All", "Presentation", "Video", "Communication"],
      previewMediaType: "image",
      previewMediaUrl: ACADEMIC_PREVIEW_PLACEHOLDER,
      sections: [
        {
          id: crypto.randomUUID(),
          type: "text",
          title: "Context",
          body:
            "## Context\n\nA presentation that translates a complex topic into a clear visual narrative."
        },
        {
          id: crypto.randomUUID(),
          type: "video",
          title: "Presentation recording",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      slug: "the-impact-of-artificial-intelligence-on-the-online-travel-industry",
      sortOrder: 2,
      title: "The Impact of Artificial Intelligence on the Online Travel Industry",
      description:
        "A video presentation exploring how artificial intelligence is reshaping the online travel industry through automation, personalization, and changing customer expectations.",
      tags: ["All", "Artificial Intelligence", "Travel", "Video"],
      previewMediaType: "image",
      previewMediaUrl: LOCAL_TRAVEL_AI_PREVIEW_IMAGE,
      sections: [
        {
          id: crypto.randomUUID(),
          type: "text",
          title: "Overview",
          body:
            "# Overview\n\nA video presentation exploring how artificial intelligence is reshaping the online travel industry through automation, personalization, and changing customer expectations."
        },
        {
          id: crypto.randomUUID(),
          type: "video",
          title: "Presentation video",
          url: LOCAL_TRAVEL_AI_VIDEO
        }
      ]
    }
  ],
  timelineItems: [
    {
      id: crypto.randomUUID(),
      year: "2026",
      role: "Current role or milestone",
      organization: "Organization or initiative",
      summary:
        "## Current focus\n\nDescribe the current position, scope of work, key responsibilities, and impact."
    },
    {
      id: crypto.randomUUID(),
      year: "2024",
      role: "Earlier professional experience",
      organization: "Previous team or institution",
      summary:
        "## Previous experience\n\nHighlight what you built, learned, improved, or led during this phase of your career."
    }
  ],
  blogLinks: [
    {
      id: crypto.randomUUID(),
      title: "Article title from another platform",
      platform: "Medium",
      publishedOn: "2026-01-12",
      description:
        "Use the blog page to point readers to writing published elsewhere while keeping the portfolio itself streamlined.",
      url: "https://example.com/article",
      imageUrl: ""
    },
    {
      id: crypto.randomUUID(),
      title: "Professional reflection or essay",
      platform: "LinkedIn",
      publishedOn: "2025-11-03",
      description:
        "This section works well for external essays, newsletters, guest posts, or professional thought pieces.",
      url: "https://example.com/post",
      imageUrl: ""
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
  const previewImage = item.previewMediaUrl || ACADEMIC_PREVIEW_PLACEHOLDER;
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
    return `<div class="media-frame artifact-media"><img src="${escapeHtml(section.url)}" alt="${escapeHtml(section.title || "Artifact image")}" /></div>`;
  }
  if (section.type === "video") {
    if (isDirectVideoFile(section.url)) {
      return `<div class="media-frame artifact-media"><video controls preload="metadata" src="${escapeHtml(section.url)}"></video></div>`;
    }
    return `<div class="media-frame artifact-media"><iframe src="${escapeHtml(section.url)}" title="${escapeHtml(section.title || "Artifact video")}" allowfullscreen></iframe></div>`;
  }
  if (section.type === "code") {
    return `<pre class="code-block artifact-code"><code>${escapeHtml(section.code)}</code></pre>`;
  }
  if (section.type === "link") {
    return `<a class="inline-link artifact-link" href="${escapeHtml(section.url)}" target="_blank" rel="noreferrer">${escapeHtml(section.body || section.url)}</a>`;
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
  return item.imageUrl || buildBlogPlaceholder(item.platform || "Article", item.title || "Blog post");
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
    /\[([^\]]+)\]\(((?:https?:\/\/|\.{0,2}\/|assets\/|images\/|videos\/)[^\s)]+)\)/g,
    '<a class="inline-link" href="$2" target="_blank" rel="noreferrer">$1</a>'
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
  return candidate;
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
