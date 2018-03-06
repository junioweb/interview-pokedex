import React from 'react';

const Loading = props => (
  <div>
    <img
      src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"
      className={`rounded mx-auto d-block ${props.className}`}
      alt="Loading"
    />
  </div>
);

export default Loading;
