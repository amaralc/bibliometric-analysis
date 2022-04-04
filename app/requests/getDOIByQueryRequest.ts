/**
 * @see https://unpaywall.org/products/api
 * @see https://neurostars.org/t/how-to-obtain-the-doi-of-a-scientific-paper-using-the-exact-title-author-name-and-year-of-publication-and-using-an-api/5777/3
 *
 * Example: https://api.unpaywall.org/v2/search/?query=Additive%20manufacturing:%20scientific%20and%20technological%20challenges,%20market%20uptake%20and%20opportunities&email=unpaywall_01@example.com
 *
 * Dataset: https://unpaywall-data-snapshots.s3.us-west-2.amazonaws.com/unpaywall_snapshot_2022-03-09T083001.jsonl.gz
 */

// interface ISource {
//   doi:string;
//   title:string;
// }

// type IGetDOIByQueryRequest = (
//   query:string, email:string, callback:(Array<)=>void,
// )

export const getDOIByQueryAndCallCallbackRequest = async (query, email, callback, state) => {
  const response = await fetch(`https://api.unpaywall.org/v2/search/?query=${query}&email=${email}`);
  const result = (await response.json())?.results[0];

  callback([
    ...state,
    {
      doi: result.response.doi,
      title: result.response.title,
    },
  ]);
};

export const getDOIByTitleRequest = async (title: string, email: string) => {
  if (!title) {
    return {
      doi: null,
      year: null,
      title,
    };
  }

  // let isOpenAccess = true;
  let response = await fetch(`https://api.unpaywall.org/v2/search/?query=${title}&email=${email}`);
  let results = (await response.json())?.results as Array<any>;

  // if (!(results.length > 0)) {
  //   isOpenAccess = false;
  //   response = await fetch(`https://api.unpaywall.org/v2/search/?query=${title}&is_oa=${isOpenAccess}&email=${email}`);
  //   results = (await response.json())?.results as Array<any>;
  // }

  const result = results?.find((item) => item.response.title === title) || null;

  if (!result) {
    return {
      doi: null,
      year: null,
      title,
    };
  }

  return {
    doi: result?.response.doi || null,
    year: result?.response.year || null,
    title,
  };
};
