export type Recommendation = {
  id: string;
  quote: string;
  attribution: string;
};

/**
 * Short verbatim excerpts from the two recommendations visible on
 * https://www.linkedin.com/in/allwinsrajaiah/details/recommendations/?detailScreenTabIndex=0
 * on 13 Oct 2026. The page also said 14 people have recommended Allwins.
 * The other recommendation texts were behind “Join now to view” and are not included.
 */
export const recommendations: Recommendation[] = [
  {
    id: "anoop-m",
    attribution: "Anoop M.",
    quote:
      "Allwins is very proactive in his approach. His technical skills in multiple areas, along with his ability to understand expectations and deliver on time meeting the demands is commendable.",
  },
  {
    id: "previn-kutty",
    attribution: "Previn Kutty",
    quote:
      "I know him as a very self-motivated individual, who took initiatives for making the Center of Excellence team in mobile.",
  },
];

export const recommendationsNote =
  "Short excerpts from the recommendations visible on LinkedIn. The same page says 14 people have recommended Allwins; the other recommendation texts were not visible without signing in.";
