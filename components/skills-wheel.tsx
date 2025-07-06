import { Code } from "lucide-react";
import { IconDownload } from "@tabler/icons-react";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import SectionTitle from "./section-title";

export default function SkillsWheel() {
  return (
    <div>

      {/* Section Title */}
      <SectionTitle
        title="Skills & Technologies"
        description="I've developed expertise across the full web development stack, from crafting responsive user interfaces to building robust backend systems and managing databases."
        icon={<Code className="w-5 h-5" />}
      >
        <Button
          variant="outline"
          className="text-sm leading-tight tracking-[-0.015em] py-2 px-3.5 min-w-0 !text-primary"
        >
          <IconDownload className="w-4 h-4 mr-2" />
          Get my resume
        </Button>
      </SectionTitle> 

      {/* Skills Wheel */}
      <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={50} radius={100} reverse>
          <Image src="/icons/redis.svg" alt="Redis" width={50} height={50} />
          <Image
            src="/icons/postgresql.svg"
            alt="Postgres"
            width={50}
            height={50}
          />
          <Image src="/icons/mysql.svg" alt="MySQL" width={50} height={50} />
          <Image
            src="/icons/mongodb.svg"
            alt="MongoDB"
            width={50}
            height={50}
          />
        </OrbitingCircles>

        <OrbitingCircles iconSize={50} radius={180}>
          <Image src="/icons/git_2.svg" alt="Git" width={50} height={50} />
          <Image
            className="dark:invert"
            src="/icons/github.svg"
            alt="GitHub"
            width={50}
            height={50}
          />
          <Image src="/icons/gitlab.svg" alt="GitLab" width={50} height={50} />
          <Image src="/icons/docker.svg" alt="Docker" width={50} height={50} />
          <Image
            className="dark:invert"
            src="/icons/ssh.svg"
            alt="SSH"
            width={50}
            height={50}
          />
          <Image src="/icons/nginx.svg" alt="Nginx" width={50} height={50} />
          <Image
            src="/icons/webpack.svg"
            alt="Webpack"
            width={50}
            height={50}
          />
        </OrbitingCircles>

        <OrbitingCircles iconSize={50} radius={270} reverse>
          <Image src="/icons/vuejs.svg" alt="Python" width={50} height={50} />
          <Image src="/icons/react.svg" alt="React" width={50} height={50} />
          <Image
            src="/icons/python_2.svg"
            alt="Node.js"
            width={50}
            height={50}
          />
          <Image
            src="/icons/typescript.svg"
            alt="TypeScript"
            width={50}
            height={50}
          />
          <Image
            src="/icons/tailwind.svg"
            alt="Tailwind"
            width={50}
            height={50}
          />
          <Image src="/icons/django.svg" alt="Django" width={50} height={50} />
          <Image src="/icons/js.svg" alt="JS" width={50} height={50} />
          <Image src="/icons/css.svg" alt="CSS" width={50} height={50} />
          <Image src="/icons/html.svg" alt="HTML" width={50} height={50} />
          <Image src="/icons/nodejs.svg" alt="Node.js" width={50} height={50} />
          <Image
            className="dark:invert"
            src="/icons/nextjs.svg"
            alt="Next.js"
            width={50}
            height={50}
          />
        </OrbitingCircles>
      </div>
    </div>
  );
}
