
export const extractImage = (blocks) => {
  const resp = blocks.find(x => (x.type === 'image'));
  const url = resp ? resp.data.url : null;
  return url && (!url.includes('blob:http') ? url : null);
};

export const extractDescription = blocks => (
  blocks.find(x => !x[0] && x.text && x.type === 'unstyled')
);
