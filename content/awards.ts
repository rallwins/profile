export type Award = {
  id: string;
  title: string;
  year: string;
  detail: string;
};

/** The current résumé does not list awards, so none are published. */
export const awards: Award[] = [];
