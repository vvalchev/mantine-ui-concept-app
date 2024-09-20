/*
https://www.ispringsolutions.com/blog/how-to-make-an-online-quiz
SCORM_2004_4ED_v1_1_RTE_20090814.pdf -> 4.2.9.1 Correct Responses Pattern Data Model Element Specifics

Quiz Types: Graded & Survey
- allowed number of attempts
- maximum time
- passing score
    - percent
    - grade

Quiz Has Pages, Pages has Questions

- pure content
    - text
    - image
    - video

- answers
    - matrix (radio) (grid of choices)
    - matrix (checkbox)
        - require answer for each row
        - limit one answer per column
    - sequence (arrange it the right order)
    - matching - match left to right column
*/

export interface Question {
  id: string;
  type: string;
  title: string;
  text?: string;
  required?: boolean;
  // metadata
  points?: number;
}
export interface SimpleQuestion extends Question {
  type: 'text' | 'numeric' | 'true_false' | 'yes_no';
  correct_answer?: string | number | boolean;
}

export interface ChoicesQuestion extends Question {
  type: 'checkbox' | 'radio' | 'dropdown';
  options: string[];
  correct_answer?: number[]; // indexes
}

export interface QualityQuestion extends Question {
  type: 'quality';
}

export interface MoodQuestion extends Question {
  type: 'mood';
  labels?: string[]; // must be strictly 5 labels
}

// see also https://www.ispringsolutions.com/blog/likert-scale-survey
export interface LikertQuestion extends Question {
  type: 'likert';
  labels: string[];
}

export interface SliderQuestionMark {
  value: number;
  label?: string;
}
export interface SliderQuestion extends Question {
  type: 'slider';
  marks: SliderQuestionMark[];
  step?: number;
}

export interface RangeQuestion extends Question {
  type: 'range';
  min: number;
  max: number;
  step?: number;
}

export type AllQuestions =
  | SimpleQuestion
  | ChoicesQuestion
  | LikertQuestion
  | MoodQuestion
  | QualityQuestion
  | SliderQuestion
  | RangeQuestion;
