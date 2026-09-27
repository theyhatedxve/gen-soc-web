/**
 * Canonical list of top-level sections, matching the site's information
 * architecture (plan section 2 / 4). Single source of truth for the
 * navbar/navigator and for the section stubs assembled in App.jsx.
 *
 * `accent` names a color token (see src/index.css) the navigator tints
 * toward on hover/focus — a placeholder for the "background image
 * changes" behavior described in the plan until real imagery lands in
 * Phase 4+.
 */
export const SECTIONS = [
  {
    id: 'understanding',
    index: '01',
    label: 'Understand',
    description: 'What sex, gender, and gender roles mean, and where these expectations come from.',
    accent: 'gold',
  },
  {
    id: 'history',
    index: '02',
    label: 'History',
    description: 'How gender roles shifted across four periods, from pre-colonial society to the post-war years.',
    accent: 'burgundy',
  },
  {
    id: 'contemporary',
    index: '03',
    label: 'Today',
    description: 'Family, education, work, media, leadership, and community life in the present.',
    accent: 'gold',
  },
  {
    id: 'issues',
    index: '04',
    label: 'Issues',
    description: 'Stereotypes, discrimination, and the opportunities gender still shapes.',
    accent: 'dustyrose',
  },
  {
    id: 'data',
    index: '05',
    label: 'Data',
    description: 'What PSA figures on literacy, work, and leadership actually show.',
    accent: 'gold',
  },
  {
    id: 'multimedia',
    index: '06',
    label: 'Multimedia',
    description: 'Photographs, video, and other material connected to each period.',
    accent: 'charcoal',
  },
  {
    id: 'reflection',
    index: '07',
    label: 'Reflect',
    description: 'What changed, what remains, and what it means going forward.',
    accent: 'burgundy',
  },
  {
    id: 'references',
    index: '08',
    label: 'References',
    description: 'Government, academic, and international sources behind this project.',
    accent: 'dustyrose',
  },
]
