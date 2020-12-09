const fetchRequest = (path: string, params?: string) =>
  fetch(`https://jsonplaceholder.typicode.com/${path}${params ? `/${params}` : ''}`).then((response) =>
    response.json(),
  );

export default fetchRequest;
