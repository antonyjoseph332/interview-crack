import { Navigate, useParams } from 'react-router-dom';
import { QuestionAccordion } from '../components/QuestionAccordion';
import { getQuestionsByTopic, topics } from '../data';
import type { TopicId } from '../types';

const validTopics = topics.map((topic) => topic.id);

function isTopicId(value: string | undefined): value is TopicId {
  return validTopics.includes(value as TopicId);
}

export function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();

  if (!isTopicId(topicId)) {
    return <Navigate to="/angular" replace />;
  }

  const questions = getQuestionsByTopic(topicId);
  const title = topics.find((topic) => topic.id === topicId)?.label ?? topicId;

  return (
    <section>
      <h2 className="mb-4 text-center text-xl font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </h2>
      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 sm:p-4">
        <QuestionAccordion questions={questions} />
      </div>
    </section>
  );
}
