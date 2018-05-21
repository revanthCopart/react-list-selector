// @flow

import React from 'react'
import List from 'material-ui/List/List'
import Divider from 'material-ui/Divider'

import ListItem from './ListItem'

import type { ListContainerPropTypes } from './ListSelector.types'

const defaultStyle = {}

const ListContainer = ({ listItems, listItemHoverColor, style: containerStyle }: ListContainerPropTypes) => (
  <List style={containerStyle || defaultStyle}>
    {listItems.map(({ id, disabled, primaryText, secondaryText, style: listItemStyle, onClick }) => (
      <div key={id}>
        <ListItem
          id={id}
          disabled={disabled}
          primaryText={primaryText}
          secondaryText={secondaryText}
          secondaryTextLines={1}
          onClick={onClick}
          style={listItemStyle}
          hoverColor={listItemHoverColor}
        />
        <Divider />
      </div>
    ))}
  </List>
)

export default ListContainer
