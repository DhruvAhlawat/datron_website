/**
 * Datron hub home: edit `DatronHomeContent` below for titles, blurbs, footer, and outbound links/images.
 */
import {
  hideoutOverviewUrl,
  pocketpadOverviewUrl,
  pocketpadPagesSiteOrigin,
} from "./site_urls.js";

const PP = pocketpadPagesSiteOrigin.replace(/\/$/, "");
const POCKETPAD_OVERVIEW = pocketpadOverviewUrl;
const HIDEOUT_OVERVIEW = hideoutOverviewUrl;
const KITNA_OVERVIEW = "https://kitna.datronapps.com/";

export const DatronHomeContent = {
  meta: {
    title: "Datron",
    description: "Apps and projects by Datron, including PocketPad (phone as controller), Kitna (private spending tracker for Indian bank statements and notifications) and Hideout (VR video player, private web browser and file vault for Meta Quest, with streaming from your PC).",
  },

  paths: {
    stylesheet: "./styles.css",
    datronHome: "./index.html",
    pocketPadPageHref: POCKETPAD_OVERVIEW,
    pocketPadIconSrc: `${PP}/assets/icons/gamepad_1.png`,
    pocketPadIconAlt: "PocketPad app icon",
    hideoutPageHref: HIDEOUT_OVERVIEW,
    // Local copy: the hub card shouldn't depend on the Hideout site being up.
    hideoutIconSrc: "./assets/icons/hideout_512.png",
    hideoutIconAlt: "Hideout app icon",
    kitnaIconSrc: "./assets/icons/kitna_512.png",
    kitnaIconAlt: "Kitna app icon",
  },

  header: {
    brandLabel: "Datron",
    navHomeLabel: "Home",
    navAppsLabel: "Apps",
    /** `aria-label` for the Apps menu control */
    navAppsMenuAriaLabel: "Apps",
    /** Groups under Apps (phone/PC vs VR); extend when adding more app subsites (absolute https URLs) */
    navAppsGroups: [
      {
        label: "Phone and PC",
        items: [
          { label: "PocketPad", href: POCKETPAD_OVERVIEW },
          { label: "Kitna", href: KITNA_OVERVIEW },
        ],
      },
      { label: "VR (Meta Quest)", items: [{ label: "Hideout", href: HIDEOUT_OVERVIEW }] },
    ],
  },

  hero: {
    heading: "Datron",
    tagline_html:
      "<em>Just a developer who likes building fun apps.</em><br />Below you’ll find apps with downloads, docs, and support details.",
  },

  /** Home page app sections: phone/PC apps first, then VR apps. The first keeps id "apps" (footer link). */
  appSections: [
    {
      id: "apps",
      title: "Phone and PC apps",
      intro: "For Android phones and computers. Installers and setup notes live on each app’s page.",
      featuredApps: [
        {
          title: "PocketPad",
          description_html:
            "An all-in-one app to turn your Android phone into a low-latency <strong>gamepad, mouse and keyboard, media remote, or slides controller</strong> for your PC (Windows/Mac/Linux), Android or smart TV over <strong>Bluetooth HID</strong> or <strong>Wi‑Fi</strong>.",
          ctaHref: POCKETPAD_OVERVIEW,
          ctaLabel: "Go to page",
          iconSrcKey: "pocketPad",
        },
        {
          title: "Kitna",
          description_html:
            "A <strong>private spending tracker</strong> for Android. It <strong>reads your bank notifications and statements</strong> from Indian banks, GPay, PhonePe and Paytm, and <strong>sorts every rupee into categories</strong> on its own. Compare months, set budgets and find subscriptions. No account, <strong>fully offline</strong>.",
          ctaHref: KITNA_OVERVIEW,
          ctaLabel: "Go to page",
          iconSrcKey: "kitna",
        },
      ],
    },
    {
      id: "vr-apps",
      title: "VR apps",
      intro: "For Meta Quest headsets, from the Meta Horizon Store.",
      featuredApps: [
        {
          title: "Hideout",
          description_html:
            "A <strong>VR video player, private web browser and file vault for Meta Quest</strong>. Watch <strong>flat, 3D, VR180 and 360 video</strong> from your files, <strong>your PC, NAS or server</strong> (SMB, SFTP or FTP), or <strong>any web page</strong>, with A-B loop, zoom and speed. Hide private files in <strong>password-protected vaults</strong>, and browse without leaving a trace. No account, no ads.",
          ctaHref: HIDEOUT_OVERVIEW,
          ctaLabel: "Go to page",
          iconSrcKey: "hideout",
        },
      ],
    },
  ],

  footer: {
    footerLineDatronLabel: "Datron",
    footerLineAppsLabel: "Apps",
    asideLine: "Independent developer",
    contactTitle: "Contact",
    contactEmail: "support@datronapps.com",
    contactHint_html:
      'For bugs or problems, begin the subject with <strong>Bug detected</strong> (for example: <strong>Bug detected:</strong> short summary). For new ideas or improvements, begin with <strong>Feature request</strong> (<strong>Feature request:</strong> short summary). For other topics, use a clear subject line so replies stay organized.',
    mailtoBugSubject: "Bug detected: ",
    mailtoFeatureSubject: "Feature request: ",
    quickMailBugLabel: "Bug detected",
    quickMailFeatureLabel: "Feature request",
    contactHeadingId: "contact",
  },
};

function htmlToNodes(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content;
}

function iconSrcFor(item, paths) {
  if (item.iconSrcKey === "pocketPad") {
    return paths.pocketPadIconSrc;
  }
  if (item.iconSrcKey === "hideout") {
    return paths.hideoutIconSrc;
  }
  if (item.iconSrcKey === "kitna") {
    return paths.kitnaIconSrc;
  }
  return item.iconSrc || "";
}

function iconAltFor(item, paths) {
  if (item.iconSrcKey === "pocketPad") {
    return paths.pocketPadIconAlt;
  }
  if (item.iconSrcKey === "hideout") {
    return paths.hideoutIconAlt;
  }
  if (item.iconSrcKey === "kitna") {
    return paths.kitnaIconAlt;
  }
  return item.iconAlt || "";
}

function buildAppsNavDropdown(c) {
  const groups = Array.isArray(c.header.navAppsGroups) ? c.header.navAppsGroups : [];
  const wrap = document.createElement("div");
  wrap.className = "nav-dropdown";

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "nav-link nav-dropdown__trigger";
  btn.textContent = c.header.navAppsLabel;
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-haspopup", "menu");
  btn.setAttribute("aria-label", c.header.navAppsMenuAriaLabel || c.header.navAppsLabel);

  const panel = document.createElement("ul");
  const panelId = "dh-apps-menu-panel";
  panel.id = panelId;
  panel.className = "nav-dropdown__panel";
  panel.setAttribute("role", "menu");
  panel.hidden = true;
  btn.setAttribute("aria-controls", panelId);

  for (const group of groups) {
    const head = document.createElement("li");
    head.setAttribute("role", "presentation");
    head.className = "nav-dropdown__group";
    head.textContent = group.label;
    panel.appendChild(head);
    for (const item of group.items || []) {
      if (!item || !String(item.label || "").trim() || !String(item.href || "").trim()) continue;
      const li = document.createElement("li");
      li.setAttribute("role", "none");
      const a = document.createElement("a");
      a.className = "nav-dropdown__item";
      a.href = String(item.href).trim();
      a.setAttribute("role", "menuitem");
      a.textContent = String(item.label).trim();
      li.appendChild(a);
      panel.appendChild(li);
    }
  }

  function close() {
    btn.setAttribute("aria-expanded", "false");
    panel.hidden = true;
  }

  function open() {
    btn.setAttribute("aria-expanded", "true");
    panel.hidden = false;
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (panel.hidden) {
      open();
    } else {
      close();
    }
  });

  panel.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener(
    "click",
    () => {
      close();
    },
    { capture: false },
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      close();
      btn.focus();
    }
  });

  wrap.appendChild(btn);
  wrap.appendChild(panel);
  return wrap;
}

function buildHeader(c) {
  const row = document.createElement("div");
  row.className = "nav-row";
  const brand = document.createElement("a");
  brand.className = "brand-datron";
  brand.href = c.paths.datronHome;
  brand.setAttribute("aria-current", "page");
  brand.textContent = c.header.brandLabel;

  const nav = document.createElement("nav");
  nav.className = "nav-links";
  nav.setAttribute("aria-label", "Primary");

  const home = document.createElement("a");
  home.className = "nav-link";
  home.href = "#top";
  home.textContent = c.header.navHomeLabel;

  nav.appendChild(home);
  nav.appendChild(buildAppsNavDropdown(c));
  row.appendChild(brand);
  row.appendChild(nav);
  return row;
}

function buildHero(c) {
  const sec = document.createElement("section");
  sec.className = "datron-hero";
  sec.setAttribute("aria-labelledby", "datron-intro");
  const h1 = document.createElement("h1");
  h1.id = "datron-intro";
  h1.className = "datron-hero__name";
  h1.textContent = c.hero.heading;
  const p = document.createElement("p");
  p.className = "datron-hero__tagline";
  p.appendChild(htmlToNodes(c.hero.tagline_html));
  sec.appendChild(h1);
  sec.appendChild(p);
  return sec;
}

function buildAppArticle(c, app) {
  if (!app || !String(app.title).trim()) return null;

  const article = document.createElement("article");
  const rowModifier = { pocketPad: " app-row--pocketpad", hideout: " app-row--hideout", kitna: " app-row--kitna" };
  article.className = "app-row" + (rowModifier[app.iconSrcKey] || "");

  const visual = document.createElement("div");
  visual.className = "app-row__visual";
  const src = iconSrcFor(app, c.paths);

  if (src && String(src).trim()) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = iconAltFor(app, c.paths);
    img.width = 120;
    img.height = 120;
    img.decoding = "async";
    visual.appendChild(img);
  } else {
    const ph = document.createElement("div");
    ph.className = "datron-app-icon-placeholder";
    ph.setAttribute("role", "presentation");
    visual.appendChild(ph);
  }

  const body = document.createElement("div");
  body.className = "app-row__body";
  const h2 = document.createElement("h2");
  h2.textContent = app.title.trim();
  const desc = document.createElement("p");
  desc.appendChild(htmlToNodes(app.description_html || ""));
  const actions = document.createElement("div");
  actions.className = "app-row__actions";
  if (app.ctaHref && String(app.ctaHref).trim()) {
    const a = document.createElement("a");
    a.className = "btn btn-primary";
    a.href = app.ctaHref.trim();
    a.textContent = app.ctaLabel || "Go to page";
    actions.appendChild(a);
  }

  body.appendChild(h2);
  body.appendChild(desc);
  body.appendChild(actions);
  article.appendChild(visual);
  article.appendChild(body);
  return article;
}

function buildAppSection(c, s) {
  const sec = document.createElement("section");
  sec.id = s.id;
  sec.className = "apps-section section-block";
  sec.setAttribute("aria-labelledby", `${s.id}-heading`);

  const h2 = document.createElement("h2");
  h2.id = `${s.id}-heading`;
  h2.className = "h-section";
  h2.textContent = s.title;

  const intro = document.createElement("p");
  intro.className = "apps-intro";
  intro.textContent = s.intro || "";

  sec.appendChild(h2);
  sec.appendChild(intro);

  for (const app of s.featuredApps || []) {
    const art = buildAppArticle(c, app);
    if (art) sec.appendChild(art);
  }

  return sec;
}

function buildApps(c) {
  return (c.appSections || []).map((s) => buildAppSection(c, s));
}

function buildFooter(c) {
  const f = c.footer;

  const line1 = document.createElement("p");
  line1.className = "footer-line";

  const aTop = document.createElement("a");
  aTop.href = "#top";
  aTop.textContent = f.footerLineDatronLabel;
  line1.appendChild(aTop);
  line1.appendChild(document.createTextNode(" "));
  const sep1 = document.createElement("span");
  sep1.className = "footer-sep";
  sep1.setAttribute("aria-hidden", "true");
  sep1.textContent = "·";
  line1.appendChild(sep1);
  line1.appendChild(document.createTextNode(" "));
  const appsA = document.createElement("a");
  appsA.href = "#apps";
  appsA.textContent = f.footerLineAppsLabel;

  line1.appendChild(appsA);

  const split = document.createElement("div");
  split.className = "footer-split";

  const left = document.createElement("div");
  const aside = document.createElement("p");
  aside.className = "footer-line";
  aside.style.margin = "0";
  aside.textContent = f.asideLine || "";
  left.appendChild(aside);

  const contact = document.createElement("div");
  contact.className = "footer-contact";
  const t = document.createElement("p");
  t.id = f.contactHeadingId || "contact";
  t.className = "footer-contact__title";
  t.textContent = f.contactTitle;
  const emailP = document.createElement("p");
  emailP.className = "footer-contact__email";
  const ma = document.createElement("a");
  ma.href = `mailto:${f.contactEmail}`;
  ma.textContent = f.contactEmail;
  emailP.appendChild(ma);

  const hint = document.createElement("p");
  hint.className = "footer-contact__hint";
  hint.appendChild(htmlToNodes(f.contactHint_html));

  const quick = document.createElement("div");
  quick.className = "footer-quick-mail";
  const bug = document.createElement("a");
  bug.href = `mailto:${f.contactEmail}?subject=${encodeURIComponent(f.mailtoBugSubject)}`;
  bug.textContent = f.quickMailBugLabel;
  const feat = document.createElement("a");
  feat.href = `mailto:${f.contactEmail}?subject=${encodeURIComponent(f.mailtoFeatureSubject)}`;
  feat.textContent = f.quickMailFeatureLabel;
  quick.appendChild(bug);
  quick.appendChild(feat);

  contact.appendChild(t);
  contact.appendChild(emailP);
  contact.appendChild(hint);
  contact.appendChild(quick);
  split.appendChild(left);
  split.appendChild(contact);

  return [line1, split];
}

function renderDatronHome(content = DatronHomeContent) {
  document.title = content.meta.title;
  const dm = document.querySelector('meta[name="description"]');
  if (dm) {
    dm.setAttribute("content", content.meta.description);
  }

  const header = document.getElementById("dh-header");
  const main = document.getElementById("dh-main");
  const footer = document.getElementById("dh-footer");
  if (!header || !main || !footer) {
    console.warn("[Datron site] Missing #dh-header, #dh-main, or #dh-footer");
    return;
  }

  header.replaceChildren(buildHeader(content));
  main.replaceChildren(buildHero(content), ...buildApps(content));
  footer.replaceChildren(...buildFooter(content));
}

renderDatronHome();
