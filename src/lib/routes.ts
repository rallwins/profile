export type RouteItem = {
  href: string;
  label: string;
  index: string;
  description: string;
};

export const routes: RouteItem[] = [
  {
    href: "/",
    label: "Home",
    index: "00",
    description: "Executive profile and the operating model.",
  },
  {
    href: "/about",
    label: "About",
    index: "01",
    description: "Practice, timeline, education, and colleague themes.",
  },
  {
    href: "/expertise",
    label: "Expertise",
    index: "02",
    description: "Practice groups from the résumé and the technology radar.",
  },
  {
    href: "/architecture",
    label: "Architecture",
    index: "03",
    description: "Case studies, diagrams, and decision notes.",
  },
  {
    href: "/experience",
    label: "Experience",
    index: "04",
    description: "Roles, scope, and the career progression.",
  },
  {
    href: "/ai",
    label: "AI",
    index: "05",
    description: "Production AI practice, separate from personal experiments.",
  },
  {
    href: "/projects",
    label: "Projects",
    index: "06",
    description: "Personal and experimental work, with unpublished links left blank.",
  },
  {
    href: "/certifications",
    label: "Certifications",
    index: "07",
    description: "Completed credential and education.",
  },
  {
    href: "/writing",
    label: "Writing",
    index: "08",
    description: "Architecture notes, including one sample draft.",
  },
  {
    href: "/contact",
    label: "Contact",
    index: "09",
    description: "A note about architecture, technology, and AI.",
  },
  {
    href: "/visual-resume",
    label: "Visual résumé",
    index: "10",
    description: "One-page visual résumé.",
  },
];

export const primaryNav = routes.filter((route) => route.href !== "/");
