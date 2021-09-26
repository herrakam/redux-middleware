const sleep = (n) => {
  new Promise((resolve) => setTimeout(resolve, n));
};

const posts = [
  {
    id: 1,
    title: "미들웨어 킹받네",
    body: "직접 만들기도 킹받네",
  },
  {
    id: 2,
    title: "미들웨어 킹받네2",
    body: "직접 만들기도 킹받네2",
  },
  {
    id: 3,
    title: "미들웨어 킹받네3",
    body: "직접 만들기도 킹받네3",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
