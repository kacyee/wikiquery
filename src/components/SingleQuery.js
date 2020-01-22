import React from "react";
const SingleQuery = ({ query }) => {
  if (!query) return <div className="wait">Please wait !</div>;
  return (
    <div className="singleQuery">
      <h2>{query && query.title}</h2>
      <div className="smallTimestamp">{query.timestamp.slice(0, 10)}</div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: query.snippet }}
      ></div>
    </div>
  );
};

export default SingleQuery;
