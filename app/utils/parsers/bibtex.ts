import { BibtexParser } from '~/lib/bib2json';
import { parseBibtex2JsonToUniqueReferences } from './parseReferences';

export const parseBibTex = (data: any) => {
  var parsedContent = BibtexParser(data);
  //const entriesWithParsedReferences = parseReferences(parsedContent)
  const parsed = parseBibtex2JsonToUniqueReferences(parsedContent);

  console.log(parsedContent);

  console.log(parsed);
};
