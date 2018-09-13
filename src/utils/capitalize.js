const capitalize = (sentence) => {
  if (sentence.includes(' ')) {
    const capitalized = sentence
      .split(' ')
      .map(word => word.substring(0, 1).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    return capitalized;
  }

  return sentence.substring(0, 1).toUpperCase() + sentence.slice(1).toLowerCase();
};

export default capitalize;
