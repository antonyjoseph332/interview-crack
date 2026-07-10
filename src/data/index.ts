import type { InterviewQuestion, Topic, TopicId } from '../types';
import { angularQuestions } from './angular';
import { cssQuestions } from './css';
import { htmlQuestions } from './html';
import { javascriptQuestions } from './javascript';
import { reactQuestions } from './react';
import { scssQuestions } from './scss';

export const topics: Topic[] = [
  { id: 'angular', label: 'Angular', path: '/angular' },
  { id: 'javascript', label: 'JavaScript', path: '/javascript' },
  { id: 'html', label: 'HTML', path: '/html' },
  { id: 'css', label: 'CSS', path: '/css' },
  { id: 'scss', label: 'SCSS', path: '/scss' },
  { id: 'react', label: 'React', path: '/react' },
];

const questionsByTopic: Record<TopicId, InterviewQuestion[]> = {
  angular: angularQuestions,
  javascript: javascriptQuestions,
  html: htmlQuestions,
  css: cssQuestions,
  scss: scssQuestions,
  react: reactQuestions,
};

export function getQuestionsByTopic(topicId: TopicId): InterviewQuestion[] {
  return questionsByTopic[topicId];
}
