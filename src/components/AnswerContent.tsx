import type { AnswerContent as AnswerContentType } from '../types';

interface AnswerContentProps {
  answer: AnswerContentType;
}

export function AnswerContent({ answer }: AnswerContentProps) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
      {answer.text && <p>{answer.text}</p>}

      {answer.list && (
        <ul className="list-disc space-y-1 pl-5">
          {answer.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {answer.script && (
        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs text-slate-100 dark:bg-slate-950">
          <code>{answer.script}</code>
        </pre>
      )}

      {answer.extra_info && (
        <p className="italic text-slate-500 dark:text-slate-400">{answer.extra_info}</p>
      )}
    </div>
  );
}
