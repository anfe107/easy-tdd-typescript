const SERVER_URL =
  process.env.JSONPLACEHOLDER || 'https://jsonplaceholder.typicode.com/posts';

export type Post = {
  who: string;
  subject: string;
  summary: string;
};

export type PostAndCount = Post & { count: number };

// As seen on the site
export type ServerPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ServerPostsResponse = ServerPost[];

// TODO
export const convertServerPosts = (
  serverResponse: ServerPostsResponse
): PostAndCount => ({
  who: `UserId = ${serverResponse[0].id}`,
  subject: serverResponse[0].title,
  count: serverResponse.length,
  summary: serverResponse[0].body.slice(0, 10),
});

export const findPosts = async (): Promise<PostAndCount> => {
  const response = await fetch(SERVER_URL);
  return convertServerPosts(await response.json());
};
