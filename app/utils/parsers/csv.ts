export const parseCsv = (data) => {
  console.log(`csv`);
  let parsedata = [];

  let newLinebrk = data.split('\n');
  for (let i = 0; i < newLinebrk.length; i++) {
    parsedata.push(newLinebrk[i].split(','));
  }

  console.table(parsedata);
};
