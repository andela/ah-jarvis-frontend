import { addNewBlockAt } from 'Dante2/package/es/model';

import React from 'react';

export const DividerBlock = () => (
  <hr />
);

export const DividerBlockConfig = (options = {}) => {
  const config = {
    renderable: true,
    editable: true,
    block: DividerBlock,
    type: 'divider',
    breakOnContinuous: true,
    wrapper_class: 'graf graf--figure',
    selected_class: 'is-selected is-mediaFocused',
    widget_options: {
      displayOnInlineTooltip: true,
      insertion: 'insertion',
    },
    handleEnterWithoutText: function handleEnterWithoutText(ctx, block) {
      const { editorState } = ctx.state;
      return ctx.onChange(addNewBlockAt(editorState, block.getKey()));
    },
    handleEnterWithText: function handleEnterWithText(ctx, block) {
      const { editorState } = ctx.state;
      return ctx.onChange(addNewBlockAt(editorState, block.getKey()));
    },
  };
  return Object.assign(config, options);
};
