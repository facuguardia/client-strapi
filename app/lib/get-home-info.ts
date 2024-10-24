import { query } from "./strapi";
const { STRAPI_HOST } = process.env;

export function getHomeInfo() {
  return query("home?populate=cover").then((res) => {
    const { title, description, cover } = res.data;
    const imageUrl = `${STRAPI_HOST}${cover.url}`;

    return { title, description, imageUrl };
  });
}
