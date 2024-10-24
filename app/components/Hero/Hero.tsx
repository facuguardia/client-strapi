import { getHomeInfo } from "@/app/lib/get-home-info";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export async function Hero() {
  const { title, description, imageUrl } = await getHomeInfo();

  return (
    <div className="container w-full h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="[&>p>strong]:font-bold">
        <BlocksRenderer content={description} />
      </div>
      <div>
        <img src={imageUrl} alt={title} className="h-[500px] w-[500px]" />
      </div>
    </div>
  );
}
