const fetchRequest = (path: string, params?: string, method?: string) =>
  fetch(
    `https://jsonplaceholder.typicode.com/${path}${params ? `/${params}` : ''}`,
    method ? { method } : {},
  ).then((response) => response.json());

export default fetchRequest;
