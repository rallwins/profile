export type RouteItem = {
  href: string;
  label: string;
  nav: boolean;
};

export const routes: RouteItem[] = [
  { href: "/", label: "Home", nav: false },
  { href: "/about", label: "About", nav: true },
  { href: "/experience", label: "Experience", nav: true },
  { href: "/architecture", label: "Architecture", nav: true },
  { href: "/ai", label: "AI", nav: true },
  { href: "/expertise", label: "Expertise", nav: true },
  { href: "/projects", label: "Projects", nav: true },
  { href: "/contact", label: "Contact", nav: true },
  { href: "/resume", label: "Résumé", nav: false },
  { href: "/visual-resume", label: "Visual résumé", nav: false },
];

export const primaryNav = routes.filter((route) => route.nav);
