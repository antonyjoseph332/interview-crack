import { useId, useState } from 'react';
import type { InterviewQuestion } from '../types';
import { AnswerContent } from './AnswerContent';

interface QuestionAccordionProps {
  questions: InterviewQuestion[];
  parentIndex?: string;
  level?: number;
}

export function QuestionAccordion({
  questions,
  parentIndex = '',
  level = 0,
}: QuestionAccordionProps) {
  const baseId = useId();

  return (
    <ul className={level === 0 ? 'space-y-2' : 'mt-3 space-y-2 border-l-2 border-slate-200 pl-4 dark:border-slate-700'}>
      {questions.map((item, index) => (
        <QuestionItem
          key={`${baseId}-${parentIndex}-${index}`}
          item={item}
          index={index}
          parentIndex={parentIndex}
          level={level}
        />
      ))}
    </ul>
  );
}

interface QuestionItemProps {
  item: InterviewQuestion;
  index: number;
  parentIndex: string;
  level: number;
}

function QuestionItem({ item, index, parentIndex, level }: QuestionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const questionIndex = parentIndex ? `${parentIndex}_${index + 1}` : `${index + 1}`;
  const displayIndex = parentIndex ? `${parentIndex}.${index + 1}` : `${index + 1}`;
  const panelId = `panel-${questionIndex}`;

  return (
    <li className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/50">
      <button
        type="button"
        id={`trigger-${questionIndex}`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        <span>
          {displayIndex}. {item.question}
        </span>
        <span
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        >
          ▼
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={`trigger-${questionIndex}`}
        className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 border-t border-slate-200 px-4 py-3 dark:border-slate-700">
            {item.ans && <AnswerContent answer={item.ans} />}
            {item.children && item.children.length > 0 && (
              <QuestionAccordion
                questions={item.children}
                parentIndex={questionIndex}
                level={level + 1}
              />
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
