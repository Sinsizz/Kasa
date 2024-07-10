/* eslint-disable react/prop-types */

function Tag({ tags }) {
  return (
    <div className="tag-container">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tag;