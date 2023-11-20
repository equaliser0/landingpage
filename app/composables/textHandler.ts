export function getShortDescription(description, wordLimit) {
  const words = description.split(' ');
  if (words.length <= wordLimit) {
    return description;
  } else {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
};
