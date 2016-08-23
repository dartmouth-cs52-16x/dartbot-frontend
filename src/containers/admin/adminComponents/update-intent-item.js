import React from 'react';

const UpdateIntentItem = (props) => {
  const onIntentClick = () => {
    props.onIntentClick(props.intent.query);
  };
  return (
    <tr>
      <th><a onClick={onIntentClick}>{props.intent.query}</a></th>
      <th><br />{props.intent.response}<br /></th>
    </tr>
  );
};

export default UpdateIntentItem;
