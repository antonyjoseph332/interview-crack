export interface AnswerContent {
  text?: string;
  list?: string[];
  script?: string;
  extra_info?: string;
}

export interface InterviewQuestion {
  question: string;
  ans?: AnswerContent;
  children?: InterviewQuestion[];
}

export type TopicId = 'angular' | 'javascript' | 'html' | 'css' | 'scss' | 'react';

export interface Topic {
  id: TopicId;
  label: string;
  path: string;
}
