const STORAGE_KEY = "eportfolio-content-v1";
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
      "I am a multidisciplinary professional with a strong interest in connecting ideas across research, design, communication, and execution. My work is shaped by curiosity, careful analysis, and a desire to create outputs that are useful to real people. This portfolio is where I document that journey, share what I have built, and reflect on how each experience informs the next.",
    academicTitle: "Academic artifacts",
    academicDescription:
      "Projects, papers, presentations, prototypes, and discussions developed as part of my studies at the University of Essex.",
    academicTags: ["All", "Intro to Computing", "Intro to AI"],
    stats: [
      { label: "Focus areas", value: "Academic, professional, writing" },
      { label: "Portfolio mode", value: "Editable by owner" },
      { label: "Experience style", value: "Minimal, clear, intentional" }
    ]
  },
  academicItems: [
    {
      id: crypto.randomUUID(),
      slug: "capstone-research-project",
      title: "Capstone research project",
      description:
        "A long-form academic investigation combining literature review, field observations, and final recommendations. This entry shows how image, text, and tagged metadata can be combined for a rich portfolio artifact.",
      tags: ["Research", "Capstone", "Qualitative"],
      previewMediaType: "image",
      previewMediaUrl:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
      sections: [
        {
          id: crypto.randomUUID(),
          type: "text",
          title: "Overview",
          body:
            "A long-form academic investigation combining literature review, field observations, and final recommendations. This artifact shows how written analysis, visual documentation, and supporting material can sit together on one page."
        },
        {
          id: crypto.randomUUID(),
          type: "image",
          title: "Research visual",
          url: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80"
        },
        {
          id: crypto.randomUUID(),
          type: "code",
          title: "Sample analysis logic",
          code:
            "def summarize_findings(notes):\n    themes = extract_themes(notes)\n    return {'themes': themes, 'count': len(themes)}"
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      slug: "course-presentation-recording",
      title: "Course presentation recording",
      description:
        "A presentation that translates a complex topic into a clear visual narrative. Video embeds can be used here for talks, demonstrations, or defenses.",
      tags: ["Presentation", "Video", "Communication"],
      previewMediaType: "image",
      previewMediaUrl: ACADEMIC_PREVIEW_PLACEHOLDER,
      sections: [
        {
          id: crypto.randomUUID(),
          type: "text",
          title: "Context",
          body:
            "A presentation that translates a complex topic into a clear visual narrative. This page can hold the recording alongside supporting notes, slides, and reflection."
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
      title: "The Impact of Artificial Intelligence on the Online Travel Industry",
      description:
        "A video presentation exploring how artificial intelligence is reshaping the online travel industry through automation, personalization, and changing customer expectations.",
      tags: ["Artificial Intelligence", "Travel", "Video"],
      previewMediaType: "image",
      previewMediaUrl: LOCAL_TRAVEL_AI_PREVIEW_IMAGE,
      sections: [
        {
          id: crypto.randomUUID(),
          type: "text",
          title: "Overview",
          body:
            "A video presentation exploring how artificial intelligence is reshaping the online travel industry through automation, personalization, and changing customer expectations."
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
        "Describe the current position, scope of work, key responsibilities, and impact.",
      resumeLink: "https://example.com/resume.pdf"
    },
    {
      id: crypto.randomUUID(),
      year: "2024",
      role: "Earlier professional experience",
      organization: "Previous team or institution",
      summary:
        "Highlight what you built, learned, improved, or led during this phase of your career.",
      resumeLink: "https://example.com/resume.pdf"
    }
  ],
  blogLinks: [
    {
      id: crypto.randomUUID(),
      title: "Article title from another platform",
      platform: "Medium",
      description:
        "Use the blog page to point readers to writing published elsewhere while keeping the portfolio itself streamlined.",
      url: "https://example.com/article"
    },
    {
      id: crypto.randomUUID(),
      title: "Professional reflection or essay",
      platform: "LinkedIn",
      description:
        "This section works well for external essays, newsletters, guest posts, or professional thought pieces.",
      url: "https://example.com/post"
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
const editToggle = document.querySelector("#editToggle");
const editorDialog = document.querySelector("#editorDialog");
const editorFields = document.querySelector("#editorFields");
const editorForm = document.querySelector("#editorForm");
const dialogTitle = document.querySelector("#dialogTitle");
const deleteButton = document.querySelector("#deleteButton");
const siteShell = document.querySelector(".site-shell");

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const nextState = saved ? JSON.parse(saved) : structuredClone(seedData);

    if (nextState?.site?.aboutImage === DEFAULT_ABOUT_IMAGE) {
      nextState.site.aboutImage = LOCAL_PROFILE_IMAGE;
    }

    if (
      !nextState?.site?.aboutImage ||
      /natalie-halimi\.(jpeg|jpg)$/i.test(nextState.site.aboutImage)
    ) {
      nextState.site.aboutImage = LOCAL_PROFILE_IMAGE;
    }

    if (!nextState?.site?.academicTitle) {
      nextState.site.academicTitle = seedData.site.academicTitle;
    }

    if (!nextState?.site?.academicDescription) {
      nextState.site.academicDescription = seedData.site.academicDescription;
    }

    if (!Array.isArray(nextState?.site?.academicTags) || nextState.site.academicTags.length === 0) {
      nextState.site.academicTags = [...seedData.site.academicTags];
    }

    if (!nextState.site.academicTags.some((tag) => tag.toLowerCase() === "all")) {
      nextState.site.academicTags.unshift("All");
    }

    nextState.academicItems = (nextState.academicItems || []).map(normalizeAcademicItem);

    const hasTravelAiVideo = nextState.academicItems.some(
      (item) => item.previewMediaUrl === LOCAL_TRAVEL_AI_VIDEO || item.title === "The Impact of Artificial Intelligence on the Online Travel Industry"
    );

    if (!hasTravelAiVideo) {
      nextState.academicItems.unshift(
        normalizeAcademicItem({
          title: "The Impact of Artificial Intelligence on the Online Travel Industry",
          description:
            "A video presentation exploring how artificial intelligence is reshaping the online travel industry through automation, personalization, and changing customer expectations.",
          tags: ["Artificial Intelligence", "Travel", "Video"],
          previewMediaType: "image",
          previewMediaUrl: LOCAL_TRAVEL_AI_PREVIEW_IMAGE,
          sections: [
            {
              type: "text",
              title: "Overview",
              body:
                "A video presentation exploring how artificial intelligence is reshaping the online travel industry through automation, personalization, and changing customer expectations."
            },
            {
              type: "video",
              title: "Presentation video",
              url: LOCAL_TRAVEL_AI_VIDEO
            }
          ]
        })
      );
    }

    nextState.academicItems = nextState.academicItems.map((item) => {
      if (item.title !== "The Impact of Artificial Intelligence on the Online Travel Industry") {
        return item;
      }

      return normalizeAcademicItem({
        ...item,
        previewMediaType: "image",
        previewMediaUrl:
          !item.previewMediaUrl || item.previewMediaUrl === ACADEMIC_PREVIEW_PLACEHOLDER
            ? LOCAL_TRAVEL_AI_PREVIEW_IMAGE
            : item.previewMediaUrl
      });
    });

    return nextState;
  } catch (error) {
    console.warn("Unable to load saved portfolio data.", error);
    return structuredClone(seedData);
  }
}

function normalizeAcademicItem(item) {
  const tags = ensureAllTag(Array.isArray(item.tags) ? item.tags : []);
  const normalized = {
    id: item.id || crypto.randomUUID(),
    slug: item.slug || slugify(item.title || "artifact"),
    title: item.title || "Untitled artifact",
    description: item.description || "",
    tags,
    previewMediaType: "image",
    previewMediaUrl: item.previewMediaType === "image" && item.previewMediaUrl ? item.previewMediaUrl : item.previewImageUrl || "",
    sections: Array.isArray(item.sections) ? item.sections.map(normalizeSection) : []
  };

  if (!normalized.sections.length) {
    normalized.sections = buildLegacySections(item);
  }

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
      title: item.mediaType === "video" ? "Media" : "Preview image",
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
  editToggle.textContent = editMode ? "Disable edit mode" : "Enable edit mode";
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

  document.querySelectorAll(".site-nav a, .footer-links a").forEach((link) => {
    const isCurrent = link.getAttribute("href") === pageHref;
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function renderHomePage() {
  return `
    <section class="panel hero">
      <div class="hero-copy">
        <div>
          <p class="pill">Online Portfolio</p>
          <h1 class="hero-title">${escapeHtml(state.site.owner)}<br /><span>${escapeHtml(
            state.site.role
          )}</span></h1>
        </div>
        <p class="hero-intro">${escapeHtml(state.site.intro)}</p>
        <div class="button-row">
          <a class="primary-button" href="academic.html">Explore work</a>
          <a class="ghost-button" href="about.html">Read my story</a>
          <button class="editor-button editor-only" type="button" data-editor="site">Edit hero</button>
        </div>
      </div>
      <div class="panel hero-card edit-highlight">
        <div>
          <p class="pill">Portfolio snapshot</p>
          <div class="hero-stat-grid">
            ${state.site.stats
              .map(
                (stat) => `
                  <article class="stat-card">
                    <p class="pill">${escapeHtml(stat.label)}</p>
                    <p class="stat-value">${escapeHtml(stat.value)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="editor-toolbar editor-only">
          <span class="editor-badge">Viewers can browse, only you can unlock edits on this browser.</span>
        </div>
      </div>
    </section>

    <section class="panel" aria-labelledby="home-overview-title">
      <div class="section-header">
        <div>
          <p class="pill">Home</p>
          <h2 id="home-overview-title" class="section-title">A clear map of the entire portfolio</h2>
        </div>
        <button class="editor-button editor-only" type="button" data-editor="site">Edit overview</button>
      </div>
      <p class="section-copy">
        The home page gives visitors a high-level sense of what this website contains, then guides them to the areas most relevant to their interests.
      </p>
      <div class="home-grid">
        ${[
          {
            href: "about.html",
            title: "About Me",
            copy: "Biography, profile image, and the narrative that connects your work.",
            label: "Story"
          },
          {
            href: "academic.html",
            title: "Academic Work",
            copy: "Tagged research outputs, visual media, written analysis, and code samples.",
            label: "Scholarship"
          },
          {
            href: "professional.html",
            title: "Professional Work",
            copy: "A timeline-driven view of your experience, growth, and resume context.",
            label: "Career"
          },
          {
            href: "blog.html",
            title: "Blog",
            copy: "A curated list of articles and essays hosted on other websites.",
            label: "Writing"
          }
        ]
          .map(
            (item) => `
              <a class="home-card" href="${item.href}">
                <div>
                  <p class="pill">${escapeHtml(item.label)}</p>
                  <h3 class="card-title">${escapeHtml(item.title)}</h3>
                </div>
                <div>
                  <p class="card-copy">${escapeHtml(item.copy)}</p>
                  <span class="card-link">Open page</span>
                </div>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAboutPage() {
  const aboutImage = getAboutImageUrl();
  const aboutParagraphs = renderParagraphs(state.site.aboutText, "about-text");

  return `
    <section class="panel page-intro">
      <div class="section-header">
        <div>
          <p class="pill">About Me</p>
          <h1 class="section-title">${escapeHtml(state.site.aboutTitle)}</h1>
        </div>
        <button class="editor-button editor-only" type="button" data-editor="about">Edit about</button>
      </div>
      <p class="section-copy">
        This page expands on the perspective, values, and experiences that connect the rest of the portfolio.
      </p>
    </section>

    <section class="panel">
      <div class="about-layout">
        <div class="about-image edit-highlight">
          <img
            src="${escapeHtml(aboutImage)}"
            alt="Portrait or representative profile image"
            onerror="this.onerror=null;this.src='${LOCAL_PROFILE_IMAGE}'"
          />
        </div>
        <article class="about-card edit-highlight">
          ${aboutParagraphs}
        </article>
      </div>
    </section>
  `;
}

function renderAcademicPage() {
  const activeTag = currentAcademicTag ? decodeURIComponent(currentAcademicTag) : "";
  const activeTagLabel = getTagLabelFromParam(activeTag);
  const isAllFilter = !activeTag || activeTag === "all";
  const filteredItems = isAllFilter
    ? state.academicItems
    : state.academicItems.filter((item) => item.tags.some((tag) => slugify(tag) === activeTag));

  return `
    <section class="panel page-intro">
      <div class="section-header">
        <div>
          <p class="pill">Academic Work</p>
          <h1 class="section-title">${escapeHtml(state.site.academicTitle || "Academic artifacts")}</h1>
        </div>
        <div class="editor-toolbar editor-only">
          <button class="ghost-button" type="button" data-editor="academic-page">Edit page</button>
          <button class="editor-button" type="button" data-editor="academic-new">Add academic item</button>
        </div>
      </div>
      <p class="section-copy">
        ${escapeHtml(state.site.academicDescription || "")}
      </p>
      ${
        state.site.academicTags?.length
          ? `
            <div class="tag-list page-tag-list">
              ${state.site.academicTags
                .map(
                  (tag) => `
                    <a class="page-tag ${((isAllFilter && tag.toLowerCase() === "all") || activeTag === slugify(tag)) ? "page-tag-active" : ""}" href="${getAcademicTagUrl(tag)}">
                      ${escapeHtml(tag)}
                    </a>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
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
      <div class="section-header artifact-header">
        <div>
          <p class="pill">Academic Artifact</p>
          <h1 class="section-title">${escapeHtml(artifact.title)}</h1>
          <p class="section-copy">${escapeHtml(artifact.description)}</p>
        </div>
        <div class="editor-toolbar editor-only">
          <button class="ghost-button" type="button" data-editor="academic-edit" data-id="${artifact.id}">Edit artifact</button>
          <button class="editor-button" type="button" data-editor="artifact-section-new" data-id="${artifact.id}">Add section</button>
        </div>
      </div>
      <div class="tag-list">
        ${artifact.tags
          .map((tag) => `<a class="tag artifact-tag-link" href="${getAcademicTagUrl(tag)}">${escapeHtml(tag)}</a>`)
          .join("")}
      </div>
    </section>

    <section class="artifact-section-stack">
      ${artifact.sections.map((section) => renderArtifactSection(artifact, section)).join("")}
    </section>
  `;
}

function renderProfessionalPage() {
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
      <p class="section-copy">
        This page frames experience as a narrative, pairing timeline milestones with a direct route to a formal resume.
      </p>
    </section>

    <section class="panel">
      <div class="resume-layout">
        <div class="timeline">
          ${state.timelineItems.map(renderTimelineCard).join("")}
        </div>
        <aside class="resume-card edit-highlight">
          <p class="pill">Resume</p>
          <h3 class="card-title">Link your latest CV or resume</h3>
          <p class="resume-summary">
            This panel gives visitors a quick way to access a formal resume while the timeline provides the fuller narrative behind each experience.
          </p>
          <a class="resume-link" href="${escapeHtml(
            state.timelineItems[0]?.resumeLink || "#"
          )}" target="_blank" rel="noreferrer">Open latest resume</a>
        </aside>
      </div>
    </section>
  `;
}

function renderBlogPage() {
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
      <p class="section-copy">
        Use this space to connect readers to your external articles, thought pieces, and essays without duplicating content across platforms.
      </p>
    </section>

    <section class="panel">
      <div class="blog-grid">
        ${state.blogLinks.map(renderBlogCard).join("")}
      </div>
    </section>
  `;
}

function renderAcademicCard(item) {
  const artifactUrl = getArtifactUrl(item);
  return `
    <article class="academic-card academic-card-preview edit-highlight">
      <button class="ghost-button academic-edit-button editor-only" type="button" data-editor="academic-edit" data-id="${item.id}" aria-label="Edit academic item">Edit</button>
      <div class="academic-card-link" data-artifact-url="${artifactUrl}" role="link" tabindex="0" aria-label="Open artifact ${escapeHtml(item.title)}">
        ${renderPreviewMedia(item)}
        <div class="academic-card-copy">
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <p class="card-copy">${escapeHtml(truncateWords(item.description, 40))}</p>
          <div class="tag-list">
            ${item.tags
              .map((tag) => `<a class="tag artifact-tag-link" href="${getAcademicTagUrl(tag)}">${escapeHtml(tag)}</a>`)
              .join("")}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderPreviewMedia(item) {
  const previewImage = item.previewMediaUrl || ACADEMIC_PREVIEW_PLACEHOLDER;
  return `<div class="media-frame preview-media"><img src="${escapeHtml(previewImage)}" alt="${escapeHtml(
    item.title
  )}" /></div>`;
}

function renderArtifactSection(artifact, section) {
  return `
    <article class="panel artifact-section edit-highlight">
      <div class="section-header">
        <div>
          <p class="pill">${escapeHtml(section.type)}</p>
          <h2 class="card-title artifact-section-title">${escapeHtml(section.title || "Section")}</h2>
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
  if (section.type === "text") {
    return renderFormattedText(section.body);
  }

  if (section.type === "image") {
    return `<div class="media-frame artifact-media"><img src="${escapeHtml(section.url)}" alt="${escapeHtml(
      section.title || "Artifact image"
    )}" /></div>`;
  }

  if (section.type === "video") {
    if (isDirectVideoFile(section.url)) {
      return `<div class="media-frame artifact-media"><video controls preload="metadata" src="${escapeHtml(
        section.url
      )}"></video></div>`;
    }

    return `<div class="media-frame artifact-media"><iframe src="${escapeHtml(
      section.url
    )}" title="${escapeHtml(section.title || "Artifact video")}" allowfullscreen></iframe></div>`;
  }

  if (section.type === "code") {
    return `<pre class="code-block artifact-code"><code>${escapeHtml(section.code)}</code></pre>`;
  }

  if (section.type === "link") {
    return `<a class="inline-link artifact-link" href="${escapeHtml(section.url)}" target="_blank" rel="noreferrer">${
      escapeHtml(section.body || section.url)
    }</a>`;
  }

  return "";
}

function isDirectVideoFile(url = "") {
  return /\.(mp4|webm|ogg)$/i.test(url);
}

function getAboutImageUrl() {
  const candidate = state?.site?.aboutImage?.trim();
  if (!candidate || candidate === DEFAULT_ABOUT_IMAGE) {
    return LOCAL_PROFILE_IMAGE;
  }
  return candidate;
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
  const blocks = text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks
    .map(renderFormattedBlock)
    .join("");
}

function renderFormattedBlock(block) {
  const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
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
    fragments.push(`<ul class="artifact-list">${listItems
      .map((item) => `<li>${formatInlineText(item)}</li>`)
      .join("")}</ul>`);
    listItems = [];
  }

  lines.forEach((line) => {
    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    if (line.startsWith("#### ")) {
      flushParagraph();
      fragments.push(`<h5 class="artifact-heading artifact-heading-xs">${formatInlineText(line.slice(5))}</h5>`);
      return;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      fragments.push(`<h4 class="artifact-heading artifact-heading-sm">${formatInlineText(line.slice(4))}</h4>`);
      return;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      fragments.push(`<h3 class="artifact-heading artifact-heading-md">${formatInlineText(line.slice(3))}</h3>`);
      return;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      fragments.push(`<h2 class="artifact-heading artifact-heading-lg">${formatInlineText(line.slice(2))}</h2>`);
      return;
    }

    paragraphLines.push(line);
  });

  flushList();
  flushParagraph();

  return fragments.join("");
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

function getArtifactUrl(item) {
  return `artifact.html?artifact=${encodeURIComponent(item.slug)}`;
}

function getAcademicTagUrl(tag) {
  return tag.toLowerCase() === "all" ? "academic.html" : `academic.html?tag=${encodeURIComponent(slugify(tag))}`;
}

function getTagLabelFromParam(param) {
  if (!param || param === "all") return "All";

  const knownTags = [
    ...(state.site.academicTags || []),
    ...state.academicItems.flatMap((item) => item.tags || [])
  ];

  return knownTags.find((tag) => slugify(tag) === param) || param;
}

function getCurrentArtifact() {
  if (!currentArtifactSlug) return null;
  return state.academicItems.find((item) => item.slug === currentArtifactSlug || item.id === currentArtifactSlug) || null;
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
      <p class="card-copy">${escapeHtml(item.summary)}</p>
      <a class="inline-link" href="${escapeHtml(item.resumeLink)}" target="_blank" rel="noreferrer">Resume link</a>
    </article>
  `;
}

function renderBlogCard(item) {
  return `
    <article class="blog-card edit-highlight">
      <div class="card-header">
        <div>
          <p class="pill">${escapeHtml(item.platform)}</p>
          <h3 class="blog-title">${escapeHtml(item.title)}</h3>
        </div>
        <button class="ghost-button editor-only" type="button" data-editor="blog-edit" data-id="${item.id}" aria-label="Edit blog link">Edit</button>
      </div>
      <p class="blog-note">${escapeHtml(item.description)}</p>
      <a class="inline-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">Read article</a>
    </article>
  `;
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
            .map(
              (option) => `
                <option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(
                  option
                )}</option>
              `
            )
            .join("")}
        </select>
      </label>
    `;
  }

  return `
    <label>
      ${field.label}
      <input type="${field.type || "text"}" name="${field.name}" value="${escapeHtml(value)}" ${
        field.required ? "required" : ""
      } />
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
        {
          name: "footerMessage",
          label: "Footer message",
          value: state.site.footerMessage,
          type: "textarea",
          required: true
        }
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
        {
          name: "academicDescription",
          label: "Page description",
          value: state.site.academicDescription,
          type: "textarea",
          required: true
        },
        {
          name: "academicTags",
          label: "Selected tags (comma separated)",
          value: (state.site.academicTags || []).join(", "),
          required: true
        }
      ],
      onSave: (data) => {
        Object.assign(state.site, {
          academicTitle: data.academicTitle,
          academicDescription: data.academicDescription,
          academicTags: ensureAllTag(splitCommaList(data.academicTags))
        });
      }
    };
  }

  if (type === "academic-new" || type === "academic-edit") {
    const current =
      type === "academic-edit"
        ? state.academicItems.find((item) => item.id === id)
        : {
            slug: "",
            title: "",
            description: "",
            tags: [],
            previewMediaType: "image",
            previewMediaUrl: "",
            sections: []
          };

    if (!current) return null;

    return {
      title: type === "academic-new" ? "Add academic artifact" : "Edit academic artifact",
      fields: [
        {
          name: "slug",
          label: "Artifact page name (.html-style slug)",
          value: current.slug,
          required: true
        },
        { name: "title", label: "Title", value: current.title, required: true },
        { name: "description", label: "Description", value: current.description, type: "textarea", required: true },
        { name: "tags", label: "Tags (comma separated)", value: current.tags.join(", "), required: true },
        { name: "previewMediaUrl", label: "Preview image URL", value: current.previewMediaUrl }
      ],
      onSave: (data) => {
        const nextSlug = ensureUniqueArtifactSlug(current.id, data.slug || data.title);
        const next = normalizeAcademicItem({
          ...current,
          ...data,
          slug: nextSlug,
          previewMediaType: "image",
          tags: ensureAllTag(splitCommaList(data.tags)),
          id: current.id || crypto.randomUUID()
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
          state.academicItems.unshift(next);
        } else {
          state.academicItems = state.academicItems.map((item) => (item.id === id ? next : item));
        }
      },
      onDelete:
        type === "academic-edit"
          ? () => {
              state.academicItems = state.academicItems.filter((item) => item.id !== id);
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
        {
          name: "type",
          label: "Section type",
          value: current.type,
          type: "select",
          options: ["text", "image", "video", "code", "link"]
        },
        { name: "title", label: "Section title", value: current.title, required: true },
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

          return normalizeAcademicItem({
            ...item,
            sections: nextSections
          });
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
        : { year: "", role: "", organization: "", summary: "", resumeLink: "" };

    if (!current) return null;

    return {
      title: type === "timeline-new" ? "Add timeline item" : "Edit timeline item",
      fields: [
        { name: "year", label: "Year", value: current.year, required: true },
        { name: "role", label: "Role", value: current.role, required: true },
        { name: "organization", label: "Organization", value: current.organization, required: true },
        { name: "summary", label: "Summary", value: current.summary, type: "textarea", required: true },
        { name: "resumeLink", label: "Resume or supporting link", value: current.resumeLink, required: true }
      ],
      onSave: (data) => {
        const next = { ...current, ...data, id: current.id || crypto.randomUUID() };
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
        : { title: "", platform: "", description: "", url: "" };

    if (!current) return null;

    return {
      title: type === "blog-new" ? "Add blog link" : "Edit blog link",
      fields: [
        { name: "title", label: "Article title", value: current.title, required: true },
        { name: "platform", label: "Platform", value: current.platform, required: true },
        { name: "description", label: "Description", value: current.description, type: "textarea", required: true },
        { name: "url", label: "Article URL", value: current.url, required: true }
      ],
      onSave: (data) => {
        const next = { ...current, ...data, id: current.id || crypto.randomUUID() };
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

function formToObject(formData) {
  return Object.fromEntries([...formData.entries()].map(([key, value]) => [key, value.trim()]));
}

editToggle.addEventListener("click", ensureEditAccess);

editorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const submitter = event.submitter?.value;

  if (submitter === "cancel") {
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
  const confirmed = window.confirm("Delete this item?");
  if (!confirmed) return;
  activeEditor.onDelete();
  saveState();
  render();
  editorDialog.close();
});

render();
