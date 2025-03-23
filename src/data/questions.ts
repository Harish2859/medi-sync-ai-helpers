
export interface QuestionOption {
  id: string;
  label: string;
  value: string;
}

export interface Question {
  id: string;
  text: string;
  condition: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  // Diabetes questions
  {
    id: 'diabetes-1',
    text: 'Do you experience frequent urination, especially at night?',
    condition: 'diabetes',
    options: [
      { id: 'diabetes-1-1', label: 'Yes, frequently', value: 'yes_frequently' },
      { id: 'diabetes-1-2', label: 'Sometimes', value: 'sometimes' },
      { id: 'diabetes-1-3', label: 'No, rarely or never', value: 'no' }
    ]
  },
  {
    id: 'diabetes-2',
    text: 'Have you noticed increased thirst or hunger lately?',
    condition: 'diabetes',
    options: [
      { id: 'diabetes-2-1', label: 'Yes, significantly', value: 'yes_significantly' },
      { id: 'diabetes-2-2', label: 'Somewhat', value: 'somewhat' },
      { id: 'diabetes-2-3', label: 'No change', value: 'no_change' }
    ]
  },
  {
    id: 'diabetes-3',
    text: 'Have you experienced unexplained weight loss recently?',
    condition: 'diabetes',
    options: [
      { id: 'diabetes-3-1', label: 'Yes, significant weight loss', value: 'yes_significant' },
      { id: 'diabetes-3-2', label: 'Some weight loss', value: 'some' },
      { id: 'diabetes-3-3', label: 'No weight loss', value: 'no' }
    ]
  },
  
  // Heart Disease questions
  {
    id: 'heart-disease-1',
    text: 'Do you experience chest pain or discomfort during physical activity?',
    condition: 'heart-disease',
    options: [
      { id: 'heart-disease-1-1', label: 'Yes, regularly', value: 'yes_regularly' },
      { id: 'heart-disease-1-2', label: 'Occasionally', value: 'occasionally' },
      { id: 'heart-disease-1-3', label: 'No, never', value: 'no' }
    ]
  },
  {
    id: 'heart-disease-2',
    text: 'Do you have high blood pressure?',
    condition: 'heart-disease',
    options: [
      { id: 'heart-disease-2-1', label: 'Yes, diagnosed', value: 'yes_diagnosed' },
      { id: 'heart-disease-2-2', label: 'Borderline high', value: 'borderline' },
      { id: 'heart-disease-2-3', label: 'No', value: 'no' },
      { id: 'heart-disease-2-4', label: 'I don\'t know', value: 'unknown' }
    ]
  },
  
  // Mental Health questions
  {
    id: 'mental-health-1',
    text: 'Over the past two weeks, how often have you felt down, depressed, or hopeless?',
    condition: 'mental-health',
    options: [
      { id: 'mental-health-1-1', label: 'Nearly every day', value: 'nearly_every_day' },
      { id: 'mental-health-1-2', label: 'More than half the days', value: 'more_than_half' },
      { id: 'mental-health-1-3', label: 'Several days', value: 'several_days' },
      { id: 'mental-health-1-4', label: 'Not at all', value: 'not_at_all' }
    ]
  },
  {
    id: 'mental-health-2',
    text: 'Over the past two weeks, how often have you had little interest or pleasure in doing things?',
    condition: 'mental-health',
    options: [
      { id: 'mental-health-2-1', label: 'Nearly every day', value: 'nearly_every_day' },
      { id: 'mental-health-2-2', label: 'More than half the days', value: 'more_than_half' },
      { id: 'mental-health-2-3', label: 'Several days', value: 'several_days' },
      { id: 'mental-health-2-4', label: 'Not at all', value: 'not_at_all' }
    ]
  },
  
  // Allergies questions
  {
    id: 'allergies-1',
    text: 'Do you experience sneezing, runny nose, or nasal congestion when exposed to certain substances?',
    condition: 'allergies',
    options: [
      { id: 'allergies-1-1', label: 'Yes, frequently', value: 'yes_frequently' },
      { id: 'allergies-1-2', label: 'Sometimes', value: 'sometimes' },
      { id: 'allergies-1-3', label: 'Rarely', value: 'rarely' },
      { id: 'allergies-1-4', label: 'Never', value: 'never' }
    ]
  },
  {
    id: 'allergies-2',
    text: 'Do you experience skin reactions like hives, redness, or itching after contact with certain substances?',
    condition: 'allergies',
    options: [
      { id: 'allergies-2-1', label: 'Yes, severe reactions', value: 'yes_severe' },
      { id: 'allergies-2-2', label: 'Mild reactions', value: 'mild' },
      { id: 'allergies-2-3', label: 'No skin reactions', value: 'no' }
    ]
  }
];
