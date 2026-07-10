import type { InterviewQuestion } from '../types';

export const cssQuestions: InterviewQuestion[] = [
  {
    question: 'Box Model',
    ans: {
      text: 'Every element is a rectangular box composed of content, padding, border, and margin. box-sizing controls whether width includes padding and border.',
      script: `* {
  box-sizing: border-box;
}

.card {
  width: 300px;
  padding: 16px;
  border: 1px solid #ccc;
  margin: 16px;
}`,
    },
    children: [
      {
        question: 'content-box vs border-box',
        ans: {
          list: [
            'content-box: width applies only to content area',
            'border-box: width includes padding and border',
            'border-box is preferred for predictable layouts',
          ],
        },
      },
    ],
  },
  {
    question: 'Flexbox',
    ans: {
      text: 'Flexbox is a one-dimensional layout model for distributing space and aligning items along a main axis.',
      script: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}`,
    },
    children: [
      {
        question: 'Common flex properties',
        ans: {
          list: [
            'justify-content: alignment along main axis',
            'align-items: alignment along cross axis',
            'flex-grow, flex-shrink, flex-basis: control item sizing',
            'flex-wrap: allow items to wrap to new lines',
          ],
        },
      },
    ],
  },
  {
    question: 'CSS Grid',
    ans: {
      text: 'Grid is a two-dimensional layout system for rows and columns, ideal for page-level layouts.',
      script: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`,
    },
    children: [
      {
        question: 'Grid vs Flexbox',
        ans: {
          text: 'Use Grid for two-dimensional layouts (rows and columns). Use Flexbox for one-dimensional alignment within a row or column.',
        },
      },
    ],
  },
  {
    question: 'Specificity and Cascade',
    ans: {
      text: 'When multiple rules target the same element, specificity and source order determine which styles apply.',
      list: [
        'Inline styles beat IDs, classes, and elements',
        'IDs beat classes, attributes, and pseudo-classes',
        'Classes beat element selectors',
        '!important overrides normal cascade but should be used sparingly',
      ],
    },
    children: [],
  },
  {
    question: 'Positioning',
    ans: {
      text: 'The position property controls how elements are placed in the document.',
    },
    children: [
      {
        question: 'position values',
        ans: {
          list: [
            'static: default document flow',
            'relative: offset from normal position',
            'absolute: removed from flow, positioned relative to nearest positioned ancestor',
            'fixed: positioned relative to viewport',
            'sticky: toggles between relative and fixed based on scroll',
          ],
        },
      },
    ],
  },
  {
    question: 'Responsive Design',
    ans: {
      text: 'Responsive design adapts layouts to different screen sizes using fluid units, media queries, and flexible layouts.',
      script: `.container {
  width: min(100%, 1200px);
  margin-inline: auto;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}`,
    },
    children: [
      {
        question: 'Mobile-first approach',
        ans: {
          text: 'Start with base styles for small screens, then use min-width media queries to enhance layout for larger viewports.',
        },
      },
    ],
  },
  {
    question: 'CSS Variables',
    ans: {
      text: 'Custom properties (CSS variables) let you define reusable values scoped to a selector tree.',
      script: `:root {
  --primary: #4f46e5;
  --radius: 8px;
}

.button {
  background: var(--primary);
  border-radius: var(--radius);
}`,
    },
    children: [],
  },
  {
    question: 'Animations and Transitions',
    ans: {
      text: 'Transitions animate property changes smoothly. Keyframe animations provide more complex multi-step motion.',
      script: `.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
    },
    children: [],
  },
];
