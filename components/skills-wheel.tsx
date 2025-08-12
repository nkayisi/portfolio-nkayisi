"use client";

import { Code } from "lucide-react";
import { IconDownload } from "@tabler/icons-react";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import SectionTitle from "./section-title";
import { useLingui } from '@lingui/react';

export default function SkillsWheel() {
  const { _ } = useLingui();

  return (
    <div>
      {/* Section Title */}
      <SectionTitle
        title={_({
          id: 'skills.title',
          message: 'Skills & Technologies'
        })}
        description={_({
          id: 'skills.description',
          message: 'I\'ve developed expertise across the full web development stack, from crafting responsive user interfaces to building robust backend systems and managing databases.'
        })}
        icon={<Code className="w-5 h-5" />}
      >
        <a href="/Resume-Nelson-Kayisi.pdf" download>
          <Button
            variant="outline"
            className="text-sm leading-tight tracking-[-0.015em] py-2 px-3.5 min-w-0 !text-primary"
          >
            <IconDownload className="w-4 h-4 mr-2" />
            {_({
              id: 'skills.get_resume',
              message: 'Get my resume'
            })}
          </Button>
        </a>
      </SectionTitle>

      {/* Skills Wheel */}
      <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={50} radius={100} reverse>
          <Image src="/icons/redis.svg" alt={_({
            id: 'skills.redis_alt',
            message: 'Redis'
          })} width={50} height={50} />
          <Image
            src="/icons/postgresql.svg"
            alt={_({
              id: 'skills.postgres_alt',
              message: 'PostgreSQL'
            })}
            width={50}
            height={50}
          />
          <Image src="/icons/mysql.svg" alt={_({
            id: 'skills.mysql_alt',
            message: 'MySQL'
          })} width={50} height={50} />
          <Image
            src="/icons/mongodb.svg"
            alt={_({
              id: 'skills.mongodb_alt',
              message: 'MongoDB'
            })}
            width={50}
            height={50}
          />
        </OrbitingCircles>

        <OrbitingCircles iconSize={50} radius={180}>
          <Image src="/icons/git_2.svg" alt={_({
            id: 'skills.git_alt',
            message: 'Git'
          })} width={50} height={50} />
          <Image
            className="dark:invert"
            src="/icons/github.svg"
            alt={_({
              id: 'skills.github_alt',
              message: 'GitHub'
            })}
            width={50}
            height={50}
          />
          <Image src="/icons/gitlab.svg" alt={_({
            id: 'skills.gitlab_alt',
            message: 'GitLab'
          })} width={50} height={50} />
          <Image src="/icons/docker.svg" alt={_({
            id: 'skills.docker_alt',
            message: 'Docker'
          })} width={50} height={50} />
          <Image
            className="dark:invert"
            src="/icons/ssh.svg"
            alt={_({
              id: 'skills.ssh_alt',
              message: 'SSH'
            })}
            width={50}
            height={50}
          />
          <Image src="/icons/nginx.svg" alt={_({
            id: 'skills.nginx_alt',
            message: 'Nginx'
          })} width={50} height={50} />
          <Image
            src="/icons/webpack.svg"
            alt={_({
              id: 'skills.webpack_alt',
              message: 'Webpack'
            })}
            width={50}
            height={50}
          />
        </OrbitingCircles>

        <OrbitingCircles iconSize={50} radius={270} reverse>
          <Image src="/icons/vuejs.svg" alt={_({
            id: 'skills.vuejs_alt',
            message: 'Vue.js'
          })} width={50} height={50} />
          <Image src="/icons/react.svg" alt={_({
            id: 'skills.react_alt',
            message: 'React'
          })} width={50} height={50} />
          <Image
            src="/icons/python_2.svg"
            alt={_({
              id: 'skills.python_alt',
              message: 'Python'
            })}
            width={50}
            height={50}
          />
          <Image
            src="/icons/typescript.svg"
            alt={_({
              id: 'skills.typescript_alt',
              message: 'TypeScript'
            })}
            width={50}
            height={50}
          />
          <Image
            src="/icons/tailwind.svg"
            alt={_({
              id: 'skills.tailwind_alt',
              message: 'Tailwind CSS'
            })}
            width={50}
            height={50}
          />
          <Image src="/icons/django.svg" alt={_({
            id: 'skills.django_alt',
            message: 'Django'
          })} width={50} height={50} />
          <Image src="/icons/js.svg" alt={_({
            id: 'skills.js_alt',
            message: 'JavaScript'
          })} width={50} height={50} />
          <Image src="/icons/css.svg" alt={_({
            id: 'skills.css_alt',
            message: 'CSS'
          })} width={50} height={50} />
          <Image src="/icons/html.svg" alt={_({
            id: 'skills.html_alt',
            message: 'HTML'
          })} width={50} height={50} />
          <Image src="/icons/nodejs.svg" alt={_({
            id: 'skills.nodejs_alt',
            message: 'Node.js'
          })} width={50} height={50} />
          <Image
            className="dark:invert"
            src="/icons/nextjs.svg"
            alt={_({
              id: 'skills.nextjs_alt',
              message: 'Next.js'
            })}
            width={50}
            height={50}
          />
        </OrbitingCircles>
      </div>
    </div>
  );
}
