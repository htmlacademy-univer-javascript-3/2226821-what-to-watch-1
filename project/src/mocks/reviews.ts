import ReviewType from '../types/review-type';

const REVIEWS : ReviewType[] = [
  {
    id: 1,
    user: {
      id: 4,
      name: 'Kate Muir'
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director`s funniest and most exquisitely designed movies in years.',
    date: '2023-05-21T10:11:08.956Z'
  },
  {
    id: 2,
    user: {
      id: 16,
      name: 'Mollie'
    },
    rating: 5.4,
    comment: 'This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction.\nI was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.',
    date: '2023-04-30T13:03:23.469Z'
  },
  {
    id: 3,
    user: {
      id: 17,
      name: 'John'
    },
    rating: 8.4,
    comment: 'Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.',
    date: '2022-06-05T12:25:36.946Z'
  },
  {
    id: 4,
    user: {
      id: 16,
      name: 'Kate'
    },
    rating: 6,
    comment: 'I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.',
    date: '2022-06-23T12:25:36.946Z'
  },
  {
    id: 5,
    user: {
      id: 17,
      name: 'Ed'
    },
    rating: 1.2,
    comment: 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ',
    date: '2022-06-20T12:25:36.946Z'
  }
];

export default REVIEWS;
