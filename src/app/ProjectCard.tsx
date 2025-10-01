import Image from "next/image";
export default function ProjectCard({
  srcImage,
  title,
  caption,
  tag,
}: {
  srcImage: string;
  title: string;
  caption: string;
  tag: string[];
}) {
  return (
    <div className="flex flex-col border p-1.5 rounded-xl gap-y-2 border-gray-300">
      <div className="w-[100%] h-66 flex">
        <Image
          src={srcImage}
          width={900}
          height={900}
          alt="g-trend"
          className="max-h-66 rounded-md shrink-0"
        />
      </div>
      <div className="px-1 pb-2 flex flex-col gap-y-1.5">
        <p className="font-sans text-2xl font-medium">{title}</p>
        <p className="font-sans text-sm">{caption}</p>
        <div className="flex gap-x-2">
          {tag.map((x, i) => (
            <p
              key={i}
              className="px-4 rounded-md py-1 font-medium font-sans bg-gray-300"
            >
              {x}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
