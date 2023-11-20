// not sure this services has access to actual content

export const MockQuizzes = [
  {
      id: "1", //needs index
      title: 'Dialing in Espresso - Quiz',
      description:
          'This quiz will test your knowledge of dialing in espresso',
      questions: [
          {
              id: "1",
              questionText:
                  'Suppose the taste is a little harsh and overly roasty.  What is the first thing you should check?',
              answerText: 'Water temperature',
          },
          {
              id: "2",
              questionText:
                  'For an 18-gram dose of coffee, what is the ideal espresso output weight?',
              answerText:
                  'It depends on the roast, but aim for 36--45 grams.',
          },
      ],
  },
];
