import React from 'react';
import PropTypes from 'prop-types';
import { extractImage, extractDescription } from '../../containers/Articles/filterArticles';
import readTime from '../../utils/readtime';
import Article from '../Article';

const UserArticles = ({ results, type }) => {
  const articles = results.map((data) => {
    let b;
    try {
      b = JSON.parse(data.body);
    } catch (e) {
      return false;
    }
    const { blocks } = b;
    if (!blocks) return false;
    const image = extractImage(blocks);
    const p = extractDescription(blocks);
    const preview = p ? p.text : '';
    return (
      <Article
        title={data.title}
        date={data.created_at}
        slug={data.slug}
        preview={preview}
        image={image}
        author={data.author}
        key={data.slug}
        readtime={readTime(b)}
        likesCount={data.likes_count}
      />
    );
  });

  return (
    <div className="profile--articles">
      {type === 'bookmark' ? (
        <h5 className="title"> Bookmarks </h5>
      ) : (
        <h5 className="title"> Latest </h5>
      )}
      {articles}
    </div>
  );
};

UserArticles.propTypes = {
  results: PropTypes.object,
  type: PropTypes.string,
};

export default UserArticles;
