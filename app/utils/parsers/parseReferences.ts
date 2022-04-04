import { IParsedBib2Json } from './__mocks__/bib2json';

const parseReferenceToObject = (reference: string) => {
  const parts = reference.split('(');
  const authorsAndTitle = parts[0].split('., ').map((i) => i.trim());
  const title = authorsAndTitle[authorsAndTitle.length - 1].split(', ,')[0].trim();
  const authors = authorsAndTitle.map((i) => i.concat('.'));
  authors.pop();

  return {
    fullReference: reference,
    title,
    authors,
  };
};

export const parseBibtex2JsonToUniqueReferences = (parsedBibtex2Json: IParsedBib2Json) => {
  const { entries } = parsedBibtex2Json;

  const parsed = entries.map((entry) => {
    const references = entry.Fields.references;

    const referencesList = references.split(';');
    const parsedReferencesList = referencesList.map(parseReferenceToObject);

    // const referencesDOIPromises = parsedReferencesList.map((reference) =>
    //   getDOIByTitleRequest(reference.title, 'unpaywall_01@example.com'),
    // );
    // const referencesDOIx = await Promise.all(referencesDOIPromises);

    // console.log(referencesDOIx);

    return {
      ...entry,
      Fields: {
        ...entry.Fields,
        references: parsedReferencesList,
      },
    };
  });

  return parsed;
};
