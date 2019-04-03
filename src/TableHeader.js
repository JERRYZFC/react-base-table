import React from 'react';
import PropTypes from 'prop-types';

import { renderElement } from './utils';

/**
 * Header component for BaseTable
 */
const TableHeader = ({
  isScrolling,
  className,
  style,
  columns,
  headerIndex,
  cellRenderer,
  headerRenderer,
  expandColumnKey,
  expandIcon: ExpandIcon,
  tagName: Tag,
  ...rest
}) => {
  let cells = columns.map((column, columnIndex) =>
    cellRenderer({
      isScrolling,
      columns,
      column,
      columnIndex,
      headerIndex,
      expandIcon: column.key === expandColumnKey && <ExpandIcon />,
    })
  );

  if (headerRenderer) {
    cells = renderElement(headerRenderer, { isScrolling, cells, columns, headerIndex });
  }

  return (
    <Tag {...rest} className={className} style={style}>
      {cells}
    </Tag>
  );
};

TableHeader.defaultProps = {
  tagName: 'div',
};

TableHeader.propTypes = {
  isScrolling: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerIndex: PropTypes.number,
  cellRenderer: PropTypes.func,
  headerRenderer: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  expandColumnKey: PropTypes.string,
  expandIcon: PropTypes.func,
  tagName: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default TableHeader;