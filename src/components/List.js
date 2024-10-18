import React from 'react';
import PropTypes from 'prop-types';
import { generateClassname } from '../util';

const List = (props) => {
  const { className, data } = props;
  <div className={generateClassname(className, 'list')}>
    {data.map(({ key, label }) => {
      <button className={`list-item-${key}`} key={key}>
        {label}
      </button>;
    })}
  </div>;
};

List.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      key: PropTypes.oneOf(PropTypes.string, PropTypes.number),
    })
  ),
};
