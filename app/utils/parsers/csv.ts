/**
 * @see https://stackoverflow.com/questions/8493195/how-can-i-parse-a-csv-string-with-javascript-which-contains-comma-in-data
 */

// Return array of string values, or NULL if CSV string not well formed.
export function parseCsvString(text) {
  var re_valid =
    /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
  var re_value =
    /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
  // Return NULL if input string is not well formed CSV string.
  if (!re_valid.test(text)) return null;
  var a = []; // Initialize array to receive values.
  text.replace(
    re_value, // "Walk" the string using replace with callback.
    function (m0, m1, m2, m3) {
      // Remove backslash from \' in single quoted values.
      if (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
      // Remove backslash from \" in double quoted values.
      else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
      else if (m3 !== undefined) a.push(m3);
      return ''; // Return empty string.
    },
  );
  // Handle special case of empty last value.
  if (/,\s*$/.test(text)) a.push('');
  return a;
}

export const parseCsv = (data) => {
  let parsedata = [];

  let newLinebrk = data.split('\n');

  for (let i = 0; i < newLinebrk.length; i++) {
    parsedata.push(parseCsvString(newLinebrk[i]));
  }

  console.table(parsedata);

  // const words = [
  //   ...new Set(
  //     parsedata
  //       .slice(1)
  //       .flatMap((i) => i)
  //       .filter((i) => i !== '')
  //       .map((i) => i?.toLowerCase())
  //       .sort(),
  //   ),
  // ];

  // let orQuery = `"${words[0]}"`;
  // words.forEach((w, i) => {
  //   if (i < 1) return;

  //   orQuery += ` OR "${words[i]}"`;
  // });

  // const words = [
  //   ...new Set(
  //     parsedata
  //       .slice(1)
  //       .flatMap((i) => i)
  //       .filter((i) => i !== '')
  //       .map((i) => i?.toLowerCase())
  //       .sort(),
  //   ),
  // ];

  let orQuery = ``;
  let nouns = [];
  let adjectives = [];

  parsedata.slice(1).forEach((list, i) => {
    if (list[0] !== '') nouns.push(list[0]);
    if (list[1] !== '') adjectives.push(list[1]);
  });

  nouns.forEach((noun, i) => {
    if (i === 0) {
      orQuery += `("${noun}" OR `;
      return;
    }
    if (i === nouns.length - 1) {
      orQuery += `"${noun}")`;
      return;
    }
    orQuery += `"${noun}" OR `;
  });

  orQuery += ' AND ';

  adjectives.forEach((adjective, j) => {
    if (j === 0) {
      orQuery += `("${adjective}" OR `;
      return;
    }
    if (j === adjectives.length - 1) {
      orQuery += `"${adjective}")`;
      return;
    }
    orQuery += `"${adjective}" OR `;
  });

  console.log(orQuery);
};
