import type { InterviewQuestion } from '../types';

export const scssQuestions: InterviewQuestion[] = [
  {
    question: 'What is SCSS?',
    ans: {
      text: 'SCSS (Sassy CSS) is a CSS preprocessor that extends CSS with variables, nesting, mixins, functions, and more. It compiles to standard CSS that browsers understand.',
      list: [
        'SCSS uses brace syntax similar to CSS, making it easy to adopt',
        'Sass also has an indented .sass syntax, but SCSS is more widely used',
        'Angular CLI supports SCSS out of the box via angular.json',
      ],
    },
    children: [
      {
        question: 'SCSS vs Sass vs CSS',
        ans: {
          list: [
            'CSS: native stylesheet language interpreted directly by browsers',
            'SCSS: superset of CSS with preprocessing features, uses {} and ;',
            'Sass: older indented syntax without braces or semicolons',
            'Both Sass and SCSS compile to plain CSS',
          ],
        },
      },
    ],
  },
  {
    question: 'Variables',
    ans: {
      text: 'SCSS variables store reusable values like colors, spacing, and fonts. They are resolved at compile time and do not exist in the final CSS output.',
      script: `$primary-color: #4f46e5;
$spacing-md: 16px;
$font-stack: 'Inter', sans-serif;

.button {
  background-color: $primary-color;
  padding: $spacing-md;
  font-family: $font-stack;
}`,
    },
    children: [
      {
        question: 'Variable scope',
        ans: {
          text: 'Variables are scoped to the block where they are defined. Use !global to make a local assignment affect the global scope, or !default to assign only if not already set.',
          script: `$color: blue;

.sidebar {
  $color: green; // local override
  color: $color;
}

.header {
  color: $color; // still blue
}`,
        },
      },
      {
        question: 'CSS custom properties vs SCSS variables',
        ans: {
          list: [
            'SCSS variables are compile-time and removed from output CSS',
            'CSS custom properties (--var) are runtime and can change with JavaScript or media queries',
            'Use SCSS variables for design tokens at build time; CSS variables for theming at runtime',
          ],
        },
      },
    ],
  },
  {
    question: 'Nesting',
    ans: {
      text: 'Nesting lets you write selectors inside other selectors, mirroring HTML structure and reducing repetition.',
      script: `.card {
  padding: 1rem;

  .card-title {
    font-size: 1.25rem;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  > .card-body {
    margin-top: 0.5rem;
  }
}`,
    },
    children: [
      {
        question: 'The parent selector (&)',
        ans: {
          text: 'The & symbol references the parent selector. It is used for pseudo-classes, modifiers, and BEM-style naming.',
          script: `.btn {
  &--primary {
    background: blue;
  }

  &.is-active {
    opacity: 1;
  }
}`,
        },
      },
      {
        question: 'Nesting best practices',
        ans: {
          list: [
            'Avoid nesting more than 3–4 levels deep to prevent overly specific selectors',
            'Do not nest just for grouping; nest when it reflects real DOM relationships',
            'Deep nesting can make styles harder to override and maintain',
          ],
        },
      },
    ],
  },
  {
    question: 'Mixins',
    ans: {
      text: 'Mixins are reusable groups of declarations that can accept arguments. They help avoid duplicating vendor prefixes, breakpoints, and common patterns.',
      script: `@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin respond-to($breakpoint) {
  @if $breakpoint == tablet {
    @media (min-width: 768px) { @content; }
  } @else if $breakpoint == desktop {
    @media (min-width: 1024px) { @content; }
  }
}

.container {
  @include flex-center;

  @include respond-to(tablet) {
    padding: 2rem;
  }
}`,
    },
    children: [
      {
        question: '@content in mixins',
        ans: {
          text: '@content passes a block of styles into a mixin, commonly used for media query wrappers.',
          script: `@mixin mobile-first($min-width) {
  @media (min-width: $min-width) {
    @content;
  }
}

.sidebar {
  display: none;

  @include mobile-first(768px) {
    display: block;
    width: 240px;
  }
}`,
        },
      },
    ],
  },
  {
    question: 'Functions',
    ans: {
      text: 'SCSS functions return a single value and are used in property values. Built-in functions cover colors, math, strings, and lists.',
      script: `$base-color: #3498db;

.button {
  background: darken($base-color, 10%);
  color: lighten($base-color, 40%);
  padding: round(14.6px);
}`,
    },
    children: [
      {
        question: 'Custom functions',
        ans: {
          text: 'You can define your own functions using @function. Unlike mixins, functions must return a value.',
          script: `@function rem($px, $base: 16) {
  @return calc($px / $base) * 1rem;
}

.title {
  font-size: rem(24); // 1.5rem
}`,
        },
      },
      {
        question: 'Common built-in functions',
        ans: {
          list: [
            'Color: lighten(), darken(), mix(), rgba(), adjust-hue()',
            'Math: percentage(), round(), ceil(), floor(), min(), max()',
            'String: quote(), unquote()',
            'Map: map-get(), map-merge()',
          ],
        },
      },
    ],
  },
  {
    question: 'Partials and Imports',
    ans: {
      text: 'Partials are SCSS files prefixed with _ that are not compiled into separate CSS files. They are imported into other files using @use or @import.',
      script: `// _variables.scss
$primary: #4f46e5;

// _buttons.scss
@use 'variables' as vars;

.btn-primary {
  background: vars.$primary;
}

// styles.scss
@use 'variables';
@use 'buttons';`,
    },
    children: [
      {
        question: '@use vs @import',
        ans: {
          list: [
            '@use is the modern recommended approach (Sass module system)',
            '@use loads each file only once and namespaces members by default',
            '@import is deprecated: pollutes global scope and can cause duplicate CSS',
            'Prefer @use and @forward for new projects',
          ],
        },
      },
      {
        question: '@forward',
        ans: {
          text: '@forward re-exports a module\'s members so other files can import them through a single entry point.',
          script: `// _index.scss
@forward 'variables';
@forward 'mixins';

// main.scss
@use 'index' as *;`,
        },
      },
    ],
  },
  {
    question: 'Extend / Inheritance',
    ans: {
      text: '@extend lets one selector inherit the styles of another. It groups selectors together in the compiled CSS.',
      script: `.message {
  padding: 1rem;
  border-radius: 4px;
}

.success {
  @extend .message;
  background: #d1fae5;
  color: #065f46;
}

.error {
  @extend .message;
  background: #fee2e2;
  color: #991b1b;
}`,
    },
    children: [
      {
        question: '@extend vs @mixin',
        ans: {
          list: [
            '@extend groups selectors in output — smaller CSS but can produce unexpected specificity',
            '@mixin duplicates declarations — more predictable but can increase bundle size',
            'Prefer mixins for reusable utility patterns; use extend sparingly for semantic relationships',
          ],
        },
      },
      {
        question: 'Placeholder selectors (%)',
        ans: {
          text: 'Placeholder selectors are only extended, never output on their own. They avoid unused base classes in the compiled CSS.',
          script: `%card-base {
  padding: 1rem;
  border-radius: 8px;
}

.feature-card {
  @extend %card-base;
  border: 1px solid #e2e8f0;
}`,
        },
      },
    ],
  },
  {
    question: 'Operators',
    ans: {
      text: 'SCSS supports math operators (+, -, *, /, %) on numbers with units, useful for calculating sizes and grid columns.',
      script: `$base-spacing: 8px;
$columns: 12;

.container {
  padding: $base-spacing * 2;
  width: (100% / $columns) * 8;
}`,
    },
    children: [
      {
        question: 'Division note',
        ans: {
          text: 'As of Dart Sass, / as division is deprecated in favor of math.div() or calc(). Use math.div(100%, 3) for explicit division.',
          script: `@use 'sass:math';

.column {
  width: math.div(100%, 3);
}`,
        },
      },
    ],
  },
  {
    question: 'Control Directives',
    ans: {
      text: 'SCSS provides @if, @else, @for, @each, and @while for logic inside stylesheets.',
    },
    children: [
      {
        question: '@each',
        ans: {
          text: '@each iterates over a list or map to generate repetitive CSS, useful for utility classes and color palettes.',
          script: `$sizes: sm, md, lg;

@each $size in $sizes {
  .text-#{$size} {
    font-size: $size;
  }
}`,
        },
      },
      {
        question: '@for',
        ans: {
          text: '@for loops a specific number of times, often used for grid column generation.',
          script: `@for $i from 1 through 4 {
  .col-#{$i} {
    width: 25% * $i;
  }
}`,
        },
      },
      {
        question: '@if / @else',
        ans: {
          script: `@mixin theme($dark: false) {
  @if $dark {
    background: #0f172a;
    color: #f8fafc;
  } @else {
    background: #ffffff;
    color: #0f172a;
  }
}`,
        },
      },
    ],
  },
  {
    question: 'Maps and Lists',
    ans: {
      text: 'SCSS maps and lists store structured data for generating themes, breakpoints, and design tokens programmatically.',
      script: `$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
);

@each $name, $width in $breakpoints {
  @media (min-width: $width) {
    .container-#{$name} {
      max-width: $width;
    }
  }
}`,
    },
    children: [
      {
        question: 'map-get and map-merge',
        ans: {
          script: `@use 'sass:map';

$theme: (
  primary: #4f46e5,
  secondary: #64748b,
);

.button {
  color: map.get($theme, primary);
}`,
        },
      },
    ],
  },
  {
    question: 'SCSS in Angular',
    ans: {
      text: 'Angular supports component-scoped SCSS by setting stylePreprocessorOptions and using styleUrls with .scss extension.',
      script: `@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {}`,
    },
    children: [
      {
        question: 'Global styles in Angular',
        ans: {
          text: 'Add global SCSS in angular.json under styles array. Use src/styles.scss for app-wide variables and imports.',
          script: `// angular.json excerpt
"styles": ["src/styles.scss"],
"stylePreprocessorOptions": {
  "includePaths": ["src/styles"]
}`,
        },
      },
      {
        question: 'View encapsulation with SCSS',
        ans: {
          text: 'Angular adds unique attributes to scoped styles. Use ::ng-deep (deprecated) sparingly; prefer host selectors or global styles for piercing encapsulation.',
          script: `:host {
  display: block;
}

:host(.active) {
  border-color: $primary-color;
}`,
        },
      },
    ],
  },
];
