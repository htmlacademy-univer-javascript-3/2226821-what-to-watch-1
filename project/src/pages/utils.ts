export const ratingToScore = (rating: number): string => {
  switch (true) {
    case rating < 3:
      return 'Bad';
    case rating < 5:
      return 'Normal';
    case rating < 8:
      return 'Good';
    case rating < 10:
      return 'Very Good';
    default:
      return 'Awesome';
  }
};

export const getFullDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.toLocaleString('en-US', {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`;
};

export const timestampToStr = (time: number): string => {
  const hours = Math.round(time / 60);
  const minutes = time % 60;
  return `${hours} hours ${minutes} minutes`;
};
