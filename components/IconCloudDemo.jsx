import IconCloud from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "php",
  "wordpress",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "mongodb",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "git",
  "github",
  "visualstudiocode",
];

export function IconCloudDemo() {
  return (
    <div className="flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background p-2 mb-6">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
