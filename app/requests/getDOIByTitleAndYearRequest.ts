/**
 * @see https://unpaywall.org/products/api
 * @see https://neurostars.org/t/how-to-obtain-the-doi-of-a-scientific-paper-using-the-exact-title-author-name-and-year-of-publication-and-using-an-api/5777/3
 *
 * Example: https://api.unpaywall.org/v2/search/?query=Additive%20manufacturing:%20scientific%20and%20technological%20challenges,%20market%20uptake%20and%20opportunities&email=unpaywall_01@example.com
 */

// interface ISource {
//   doi:string;
//   title:string;
// }

// type IGetDOIByQueryRequest = (
//   query:string, email:string, callback:(Array<)=>void,
// )

export const getDOIByQuery = async (query, email, callback, state) => {
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
