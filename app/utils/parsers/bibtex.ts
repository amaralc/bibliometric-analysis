import { BibtexParser } from '~/lib/bib2json';

export const parseBibTex = (data) => {
  var entries = BibtexParser(data);
  console.log(entries);
};
