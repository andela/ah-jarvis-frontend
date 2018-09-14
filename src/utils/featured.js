/* eslint camelcase: 0 */
const filterFeatured = (article) => {
  const {
    body, title, slug, average_rating, likes_count,
  } = article;
  let b;
  try {
    b = JSON.parse(body);
  } catch (e) {
    return false;
  }
  const { blocks } = b;
  if (!blocks) {
    return false;
  }
  const resp = blocks.find(x => (x.type === 'image'));
  const image = resp ? resp.data.url : null;
  if (!image) {
    return false;
  }
  const preview = blocks.find(x => !x[0] && x.text && x.text.split('').length > 200 && x.type === 'unstyled');
  if (!preview) {
    return false;
  }

  return {
    preview: (
      preview.text.substring(0, 1).toUpperCase() + preview.text.substring(1)).substring(0, 200),
    image,
    title,
    slug,
    likes_count,
    average_rating,
  };
};

const featured = articles => (
  articles.map((article) => {
    const fa = filterFeatured(article);
    return fa && fa;
  }));

export default featured;
