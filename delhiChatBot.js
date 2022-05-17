const { log } = console;
const greetings = /^hello|^hi|^what's up|^hey/i;
const directions = /where|direction|get/i;
const whatQuestions = /^what/i;
const whyQuestions = /^why/i;
const generalQuestions = /\?$/;

const responses = [
  {
    queries: directions,
    responses: [
      '*Ignores you*',
      'I don\'t know',
      'How would I know.',
      '*Gives wrong directions.*',
      'Take right from the next red light.*There is no red light*'
    ]
  },
  {
    queries: whatQuestions,
    responses: [
      'Why do you want to know.',
      'Don\'t ask stupid questions.',
      'Do I look like google.',
      'Who are you?'
    ]
  },
  {
    queries: greetings,
    responses: [
      '...',
      'hmm',
      'what do you want',
      'DO YOU KNOW WHO MY FATHER IS?'
    ]
  },
  {
    queries: whyQuestions,
    responses: [
      'How would I know.',
      'Ask your parents.',
      'Let me do my work',
      'Why are you disturbing me?'
    ]
  },
  {
    queries: generalQuestions,
    responses: [
      'How would I know.',
      'Ask your parents.',
      'Let me do my work',
      'Why are you disturbing me?',
      'Why do you want to know.',
      'Don\'t ask stupid questions.',
      'Do I look like google.',
      'Who are you?',
      'I don\'t know',
      'How would I know.',
      '*Ignores you*',
      'Muje kya pata',
      'Jake apne baap se puch'
    ]
  },
  {
    queries: /(?:)/,
    responses: [
      'What are you even saying?',
      'Thoda jor se bolo?'
    ]
  }
];

const getPossibleResponses = (query) =>
  responses.find((response) => response.queries.test(query)).responses;

const randomResponse = (possibleResponses) =>
  possibleResponses[Math.floor(Math.random() * possibleResponses.length)];

const respond = (query) => {
  const possibleResponses = getPossibleResponses(query);
  return randomResponse(possibleResponses);
};

const [, , question] = process.argv;
log(respond(question));
