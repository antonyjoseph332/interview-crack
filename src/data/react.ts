import type { InterviewQuestion } from '../types';

export const reactQuestions: InterviewQuestion[] = [
  {
    question: 'What is React?',
    ans: {
      text: 'React is a JavaScript library for building user interfaces using a component-based architecture and a declarative programming model.',
      list: [
        'Uses a virtual DOM for efficient updates',
        'Encourages reusable UI components',
        'Supports one-way data flow',
        'Can be used for web, mobile (React Native), and more',
      ],
    },
    children: [],
  },
  {
    question: 'JSX',
    ans: {
      text: 'JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. It compiles to React.createElement calls.',
      script: `function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}`,
    },
    children: [
      {
        question: 'JSX rules',
        ans: {
          list: [
            'Return a single parent element or use a Fragment',
            'Use className instead of class',
            'Embed JavaScript expressions inside curly braces',
            'Close all tags, including self-closing ones',
          ],
        },
      },
    ],
  },
  {
    question: 'Components and Props',
    ans: {
      text: 'Components are reusable UI units. Props are read-only inputs passed from parent to child.',
      script: `type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}`,
    },
    children: [
      {
        question: 'Functional vs Class components',
        ans: {
          text: 'Modern React favors functional components with hooks. Class components use this.state and lifecycle methods but are less common in new code.',
        },
      },
    ],
  },
  {
    question: 'State and Hooks',
    ans: {
      text: 'State lets components store and update local data. Hooks are functions that let functional components use React features.',
    },
    children: [
      {
        question: 'useState',
        ans: {
          text: 'useState adds local state to a functional component and returns the current value and a setter function.',
          script: `const [count, setCount] = useState(0);

<button onClick={() => setCount((c) => c + 1)}>
  Count: {count}
</button>`,
        },
      },
      {
        question: 'useEffect',
        ans: {
          text: 'useEffect runs side effects after render, such as data fetching, subscriptions, or DOM updates.',
          script: `useEffect(() => {
  document.title = \`Count: \${count}\`;

  return () => {
    // cleanup on unmount or before re-run
  };
}, [count]);`,
        },
      },
      {
        question: 'useMemo and useCallback',
        ans: {
          list: [
            'useMemo memoizes expensive computed values',
            'useCallback memoizes function references',
            'Use them to avoid unnecessary re-renders in optimized child components',
          ],
        },
      },
      {
        question: 'useRef',
        ans: {
          text: 'useRef holds a mutable value that persists across renders without triggering re-renders. Commonly used for DOM references.',
          script: `const inputRef = useRef<HTMLInputElement>(null);

inputRef.current?.focus();`,
        },
      },
    ],
  },
  {
    question: 'Rendering Lists and Keys',
    ans: {
      text: 'When rendering lists, each item needs a stable unique key so React can efficiently reconcile updates.',
      script: `{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}`,
    },
    children: [
      {
        question: 'Why keys matter',
        ans: {
          text: 'Keys help React identify which items changed, were added, or removed. Avoid using array index as key when list order can change.',
        },
      },
    ],
  },
  {
    question: 'Conditional Rendering',
    ans: {
      text: 'React supports conditional UI using operators like &&, ternary expressions, or early returns.',
      script: `{isLoggedIn ? <Dashboard /> : <Login />}

{error && <p className="error">{error}</p>}`,
    },
    children: [],
  },
  {
    question: 'Context API',
    ans: {
      text: 'Context provides a way to pass data through the component tree without prop drilling.',
      script: `const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

const theme = useContext(ThemeContext);`,
    },
    children: [],
  },
  {
    question: 'React Router',
    ans: {
      text: 'React Router enables client-side routing in single-page applications.',
      script: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`,
    },
    children: [
      {
        question: 'useParams and useNavigate',
        ans: {
          text: 'useParams reads dynamic route segments. useNavigate programmatically changes routes.',
        },
      },
    ],
  },
  {
    question: 'Performance Optimization',
    ans: {
      text: 'React apps can be optimized by reducing unnecessary renders and splitting code.',
    },
    children: [
      {
        question: 'React.memo',
        ans: {
          text: 'React.memo wraps a component and skips re-rendering if props are unchanged.',
          script: `const ExpensiveList = React.memo(function ExpensiveList({ items }) {
  return <ul>{items.map((item) => <li key={item.id}>{item.name}</li>)}</ul>;
});`,
        },
      },
      {
        question: 'Code splitting',
        ans: {
          text: 'React.lazy and Suspense load components on demand, reducing initial bundle size.',
          script: `const Settings = lazy(() => import('./Settings'));

<Suspense fallback={<div>Loading...</div>}>
  <Settings />
</Suspense>`,
        },
      },
    ],
  },
  {
    question: 'Controlled vs Uncontrolled Components',
    ans: {
      text: 'Controlled components store form values in React state. Uncontrolled components read values from the DOM via refs.',
      script: `// Controlled
<input value={name} onChange={(e) => setName(e.target.value)} />

// Uncontrolled
<input ref={inputRef} defaultValue="hello" />`,
    },
    children: [],
  },
];
