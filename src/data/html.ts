import type { InterviewQuestion } from '../types';

export const htmlQuestions: InterviewQuestion[] = [
  {
    question: 'Semantic HTML',
    ans: {
      text: 'Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer, improving accessibility and SEO.',
      list: [
        '<header>: Introductory content or navigation',
        '<nav>: Navigation links',
        '<main>: Main content of the document',
        '<article>: Self-contained content',
        '<section>: Thematic grouping of content',
        '<aside>: Sidebar or tangentially related content',
        '<footer>: Footer information',
      ],
    },
    children: [
      {
        question: 'Why use semantic elements?',
        ans: {
          text: 'Semantic elements help screen readers, search engines, and developers understand page structure without relying on generic divs.',
        },
      },
    ],
  },
  {
    question: 'HTML Forms',
    ans: {
      text: 'Forms collect user input using elements like input, select, textarea, and button. Attributes like name, type, required, and placeholder control behavior.',
      script: `<form action="/submit" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />
  <button type="submit">Submit</button>
</form>`,
    },
    children: [
      {
        question: 'Input types',
        ans: {
          list: [
            'text, email, password, number, date, checkbox, radio, file, range, color',
            'Use the most specific type for better mobile keyboards and built-in validation',
          ],
        },
      },
      {
        question: 'Form validation',
        ans: {
          text: 'HTML5 supports required, min, max, pattern, and type-based validation before JavaScript runs.',
          script: `<input type="text" required minlength="3" pattern="[A-Za-z]+" />`,
        },
      },
    ],
  },
  {
    question: 'Accessibility (a11y)',
    ans: {
      text: 'Accessible HTML ensures content is usable by people with disabilities and assistive technologies.',
      list: [
        'Use labels linked to inputs via for/id',
        'Provide alt text for images',
        'Use ARIA roles only when native HTML is insufficient',
        'Ensure keyboard navigation and visible focus states',
      ],
    },
    children: [],
  },
  {
    question: 'Meta tags and SEO',
    ans: {
      text: 'Meta tags provide metadata about the document for browsers and search engines.',
      script: `<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="Interview preparation guide" />
<title>Interview Cracker</title>`,
    },
    children: [
      {
        question: 'Open Graph tags',
        ans: {
          text: 'Open Graph tags control how pages appear when shared on social platforms.',
          script: `<meta property="og:title" content="Interview Cracker" />
<meta property="og:description" content="Frontend interview questions" />
<meta property="og:image" content="/preview.png" />`,
        },
      },
    ],
  },
  {
    question: 'HTML5 APIs',
    ans: {
      text: 'HTML5 introduced several browser APIs that extend plain markup with rich capabilities.',
    },
    children: [
      {
        question: 'Local Storage vs Session Storage',
        ans: {
          list: [
            'localStorage persists until explicitly cleared',
            'sessionStorage lasts for the browser tab session',
            'Both store key-value string pairs',
          ],
          script: `localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');`,
        },
      },
      {
        question: 'Canvas and SVG',
        ans: {
          text: 'Canvas is raster-based and good for dynamic drawing. SVG is vector-based and scales cleanly for icons and illustrations.',
        },
      },
    ],
  },
  {
    question: 'Document structure',
    ans: {
      text: 'A valid HTML document has doctype, html, head, and body. The head contains metadata; the body contains visible content.',
      script: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Page Title</title>
  </head>
  <body>
    <main>Content</main>
  </body>
</html>`,
    },
    children: [],
  },
];
