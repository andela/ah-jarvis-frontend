const countBlockItems = (blocks) => {
  const count = {
    imageCount: 0,
    wordsCount: 0,
    videoCount: 0,
  };

  blocks.forEach((block) => {
    const { text } = block;
    if (block.type === 'image') {
      // found an image
      count.imageCount += 1;
    } else if (block.type === 'video') {
      // found video
      count.videoCount += 1;
    } else if (text.length) {
      const words = text.split(' ');
      // found words
      count.wordsCount += words.length;
    }
  });
  return count;
};

const readTime = (content, wpm = 275) => {
  const blocks = content && content.blocks;
  //  check if there are blocks and get number of words images and videos
  const count = blocks && blocks.length ? countBlockItems(blocks) : null;
  if (!count) {
    return 0;
  }
  // Get read time for text
  const readTimeText = count.wordsCount / wpm;
  let readTimeImagesSecs = 0;
  // From : https://blog.medium.com/read-time-and-you-bc2048ab620c
  for (let index = 0; index < count.imageCount; index += 1) {
    readTimeImagesSecs += Math.max(12 - index, 3);
  }
  const readTimeImagesSecBase100 = readTimeImagesSecs * 100 / 60;
  const readTimeImagesMin = readTimeImagesSecBase100 / 100;
  return Math.ceil(readTimeText + readTimeImagesMin);
};

export default readTime;
