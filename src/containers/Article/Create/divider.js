import { addNewBlockAt } from 'Dante2/package/es/model';
import DividerBlock from '../../../components/DividerBlock';

const handleEnter = (ctx, block) => {
  const { editorState } = ctx.state;
  return ctx.onChange(addNewBlockAt(editorState, block.getKey()));
};

export default (options = {}) => {
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
    handleEnterWithoutText(ctx, block) {
      handleEnter(ctx, block);
    },
    handleEnterWithText(ctx, block) {
      handleEnter(ctx, block);
    },
  };
  return Object.assign(config, options);
};
