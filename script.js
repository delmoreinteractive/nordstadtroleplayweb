/* =========================================================
   NORDSTADT ROLEPLAY — ZENTRALE KONFIGURATION
   Trage Links, Status, Management und Events nur hier ein.
   ========================================================= */

const siteConfig = {
  links: {
    discord: "",
    robloxGame: "",
    tiktok: "",
    youtube: "",
    instagram: ""
  },

  dispatch: {
    title: "Willkommen in Nordstadt",
    text: "Entdecke die Stadt, wähle deine Rolle und werde Teil der Community."
  },

  status: {
    overall: "online",
    headline: "Nordstadt ist erreichbar.",
    description:
      "Website und Community-Bereiche sind verfügbar. Der Spielstatus wird aktuell manuell gepflegt.",

    services: {
      website: {
        state: "online",
        label: "Online"
      },
      game: {
        state: "development",
        label: "In Entwicklung"
      },
      discord: {
        state: "online",
        label: "Online"
      },
      applications: {
        state: "offline",
        label: "Geschlossen"
      }
    }
  }
};

/*
  MANAGEMENT:
  - filled: true = Position besetzt
  - filled: false = Position offen
  - holder: Anzeigename; bei offenen Positionen leer lassen
  - count: sichtbare Anzahl aus der aktuellen Struktur
*/
const managementRoles = [
  {
    role: "Inhaber",
    holder: "Nicht öffentlich",
    filled: true,
    count: 1,
    department: "Projektleitung"
  },
  {
    role: "Projekt Manager",
    holder: "",
    filled: false,
    count: 0,
    department: "Projektleitung"
  },
  {
    role: "Stv. Projekt Manager",
    holder: "Nicht öffentlich",
    filled: true,
    count: 1,
    department: "Projektleitung"
  },
  {
    role: "Geschäftsführung",
    holder: "2 Teammitglieder",
    filled: true,
    count: 2,
    department: "Geschäftsführung"
  },
  {
    role: "Personalverwaltung",
    holder: "",
    filled: false,
    count: 0,
    department: "Personal"
  },
  {
    role: "Management Leitung",
    holder: "Nicht öffentlich",
    filled: true,
    count: 1,
    department: "Management"
  },
  {
    role: "Entwicklungsmanagement",
    holder: "",
    filled: false,
    count: 0,
    department: "Entwicklung"
  },
  {
    role: "Entwicklungsmanagement | Game",
    holder: "Nicht öffentlich",
    filled: true,
    count: 1,
    department: "Entwicklung"
  },
  {
    role: "Qualitätsmanager",
    holder: "",
    filled: false,
    count: 0,
    department: "Qualität"
  },
  {
    role: "Communitymanager",
    holder: "",
    filled: false,
    count: 0,
    department: "Community"
  },
  {
    role: "Social Media Manager",
    holder: "",
    filled: false,
    count: 0,
    department: "Social Media"
  }
];

/*
  EVENTS:
  Termine können später einfach als TT.MM.YYYY eingetragen werden.
  Beispiel: date: "24.07.2026"
*/
const events = [
  {
    title: "Community-Abend",
    type: "Community",
    date: "",
    description: "Gemeinsames Roleplay und Kennenlernen in der Stadt.",
    time: "Termin folgt"
  },
  {
    title: "Fraktionsvorstellung",
    type: "Information",
    date: "",
    description: "Einblick in verfügbare Organisationen und Aufgabenbereiche.",
    time: "Termin folgt"
  },
  {
    title: "Stadtweite Lage",
    type: "Roleplay-Event",
    date: "",
    description: "Ein besonderes Szenario für mehrere Fraktionen und Zivilisten.",
    time: "Termin folgt"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const loader = document.getElementById("loader");
  const header = document.getElementById("siteHeader");
  const progress = document.getElementById("scrollProgress");
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  /* Links */
  document.querySelectorAll("[data-link]").forEach((link) => {
    const key = link.dataset.link;
    const url = siteConfig.links[key];

    if (url && url.trim()) {
      link.href = url.trim();
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.classList.add("is-placeholder");
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") {
          event.preventDefault();
          document.getElementById("community")?.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth"
          });
        }
      });
    }
  });

  /* Loader */
  const hideLoader = () => {
    window.setTimeout(() => loader?.classList.add("is-hidden"), reduceMotion ? 0 : 450);
  };

  window.addEventListener("load", hideLoader);
  window.setTimeout(hideLoader, 2400);

  /* Current year */
  const year = document.getElementById("currentYear");
  if (year) year.textContent = String(new Date().getFullYear());

  /* Dispatch */
  document.getElementById("dispatchTitle").textContent = siteConfig.dispatch.title;
  document.getElementById("dispatchText").textContent = siteConfig.dispatch.text;

  /* Clock */
  const heroClock = document.getElementById("heroClock");
  const pad = (number) => String(number).padStart(2, "0");

  const updateClock = () => {
    const now = new Date();
    if (heroClock) heroClock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  };

  updateClock();
  window.setInterval(updateClock, 1000);

  /* Header and progress */
  let previousScroll = window.scrollY;

  const updateScroll = () => {
    const currentScroll = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? (currentScroll / scrollable) * 100 : 0;

    if (progress) progress.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
    header?.classList.toggle("is-scrolled", currentScroll > 25);

    if (!body.classList.contains("menu-open") && currentScroll > 300) {
      header?.classList.toggle("is-hidden", currentScroll > previousScroll + 5);
    } else {
      header?.classList.remove("is-hidden");
    }

    previousScroll = currentScroll;
  };

  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });

  /* Mobile menu */
  const setMenu = (open) => {
    menuButton?.classList.toggle("is-active", open);
    menuButton?.setAttribute("aria-expanded", String(open));
    mobileMenu?.classList.toggle("is-open", open);
    mobileMenu?.setAttribute("aria-hidden", String(!open));
    body.classList.toggle("menu-open", open);
    header?.classList.remove("is-hidden");
  };

  menuButton?.addEventListener("click", () => {
    setMenu(!mobileMenu?.classList.contains("is-open"));
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  /* Reveal animations */
  const revealItems = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -45px"
    });

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${(index % 4) * 65}ms`;
      revealObserver.observe(item);
    });
  }

  /* Active desktop navigation */
  const desktopLinks = [...document.querySelectorAll(".desktop-nav a")];
  const sections = [...document.querySelectorAll("main section[id]")];

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!active) return;

      desktopLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${active.target.id}`
        );
      });
    }, {
      threshold: [0.2, 0.45, 0.65],
      rootMargin: "-20% 0px -58%"
    });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* Magnetic buttons */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".magnetic").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.07}px, ${y * 0.1}px)`;
      });

      button.addEventListener("pointerleave", () => {
        button.style.transform = "";
      });
    });
  }

  /* Status */
  const statusLabels = {
    online: "ONLINE",
    maintenance: "WARTUNG",
    offline: "OFFLINE",
    development: "IN ENTWICKLUNG"
  };

  const overallState = siteConfig.status.overall;
  const overallText = document.getElementById("overallStatusText");
  const heroStatus = document.getElementById("heroStatus");
  const statusPulse = document.getElementById("overallStatusPulse");

  if (overallText) overallText.textContent = statusLabels[overallState] || overallState;
  if (heroStatus) heroStatus.textContent = statusLabels[overallState] || overallState;
  document.getElementById("statusHeadline").textContent = siteConfig.status.headline;
  document.getElementById("statusDescription").textContent = siteConfig.status.description;

  if (overallState !== "online") {
    statusPulse.style.background = overallState === "maintenance" ? "var(--orange)" : "var(--red)";
    overallText.style.color = overallState === "maintenance" ? "#a66b18" : "var(--red-dark)";
    heroStatus.style.color = overallState === "maintenance" ? "var(--orange)" : "var(--red-soft)";
  }

  Object.entries(siteConfig.status.services).forEach(([key, service]) => {
    const card = document.querySelector(`[data-service="${key}"]`);
    if (!card) return;

    card.dataset.status = service.state;
    const stateElement = card.querySelector(".service-state");
    if (stateElement) stateElement.textContent = service.label;
  });

  const statusStart = Date.now();
  const lastCheck = document.getElementById("lastStatusCheck");

  const updateStatusAge = () => {
    if (!lastCheck) return;
    const secondsPassed = Math.floor((Date.now() - statusStart) / 1000);

    if (secondsPassed < 5) lastCheck.textContent = "gerade eben";
    else if (secondsPassed < 60) lastCheck.textContent = `vor ${secondsPassed} Sekunden`;
    else lastCheck.textContent = `vor ${Math.floor(secondsPassed / 60)} Minuten`;
  };

  window.setInterval(updateStatusAge, 5000);

  /* Management */
  const managementList = document.getElementById("managementList");
  const filledRoles = document.getElementById("filledRoles");
  const openRoles = document.getElementById("openRoles");

  const renderManagement = () => {
    if (!managementList) return;

    managementList.innerHTML = managementRoles.map((role, index) => {
      const number = String(index + 1).padStart(2, "0");
      const holder = role.filled
        ? (role.holder || "Besetzt")
        : "Position aktuell offen";

      return `
        <article class="management-role reveal is-visible" data-filled="${role.filled}">
          <span class="management-role__index">${number}</span>
          <h3>${escapeHtml(role.role)}</h3>
          <div class="management-role__person">
            <span>${escapeHtml(role.department)}</span>
            <strong>${escapeHtml(holder)}</strong>
          </div>
          <span class="management-role__status">
            ${role.filled ? "Besetzt" : "Offen"}
          </span>
          <span class="management-role__count">${Number(role.count) || 0}</span>
        </article>
      `;
    }).join("");

    const filledCount = managementRoles.filter((role) => role.filled).length;
    const openCount = managementRoles.length - filledCount;

    if (filledRoles) filledRoles.textContent = String(filledCount);
    if (openRoles) openRoles.textContent = String(openCount);
  };

  renderManagement();

  document.querySelectorAll("[data-management-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.managementFilter;

      document.querySelectorAll("[data-management-filter]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });

      document.querySelectorAll(".management-role").forEach((role) => {
        const filled = role.dataset.filled === "true";
        const visible =
          filter === "all" ||
          (filter === "filled" && filled) ||
          (filter === "open" && !filled);

        role.classList.toggle("is-filtered", !visible);
      });
    });
  });

  /* Events */
  const eventList = document.getElementById("eventList");

  const parseEventDate = (value) => {
    if (!value || !/^\d{2}\.\d{2}\.\d{4}$/.test(value)) {
      return { day: "–", month: "FOLGT" };
    }

    const [day, month, year] = value.split(".").map(Number);
    const date = new Date(year, month - 1, day);
    const monthName = new Intl.DateTimeFormat("de-DE", {
      month: "short"
    }).format(date).replace(".", "").toUpperCase();

    return { day: String(day).padStart(2, "0"), month: monthName };
  };

  if (events.length) {
    const featured = events[0];
    const featuredDate = parseEventDate(featured.date);

    document.getElementById("featuredDay").textContent = featuredDate.day;
    document.getElementById("featuredMonth").textContent = featuredDate.month;
    document.getElementById("featuredType").textContent = featured.type;
    document.getElementById("featuredTitle").textContent = featured.title;
    document.getElementById("featuredDescription").textContent = featured.description;
  }

  if (eventList) {
    eventList.innerHTML = events.slice(1).map((event) => {
      const date = parseEventDate(event.date);

      return `
        <article class="event-row reveal is-visible">
          <div class="event-row__date">
            <strong>${escapeHtml(date.day)}</strong>
            <span>${escapeHtml(date.month)}</span>
          </div>
          <div>
            <h3>${escapeHtml(event.title)}</h3>
            <p>${escapeHtml(event.description)}</p>
          </div>
          <span>${escapeHtml(event.time)}</span>
        </article>
      `;
    }).join("");
  }

  /* Back to top */
  document.getElementById("backToTop")?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth"
    });
  });
});

/* Basic HTML escaping for editable data */
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
