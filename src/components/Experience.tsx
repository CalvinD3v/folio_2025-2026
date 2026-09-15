import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const ROLES = [
  {
    company: "Codestudio",
    title: "Founder & Lead Developer",
    dates: "2017 – Present",
    blurb:
      "Full-service digital agency — brand, design, hosting, and software for SMB clients across South Africa and abroad.",
    stack: [
      "Next.js",
      "Nuxt.js",
      "React Native",
      "React",
      "Vue",
      "TypeScript",
      "T3 Stack",
      "Tailwind",
      "WordPress",
      "Node.js",
      "Firebase",
      "Figma",
    ],
  },
  {
    company: "IoT.nxt",
    title: "Software Developer",
    dates: "Oct 2023 – Apr 2025",
    blurb:
      "Smart Spaces IoT platform — turning real-time sensor data into operational dashboards for enterprise clients.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "React",
      "Recharts",
      "Mapbox",
      "Redux",
      "Swagger",
      "Azure",
      "Git",
    ],
  },
  {
    company: "Bi-me",
    title: "Lead Senior Software Developer",
    dates: "Jul 2021 – Sep 2023",
    blurb:
      "Full-stack engineering lead across the Bi-me product suite — .NET back-end, React front-end.",
    stack: [
      "React",
      ".NET (C#)",
      "JavaScript",
      "styled-components",
      "React Router",
      "Redux",
      "Azure",
      "Docker",
      "Figma",
      "Git",
    ],
  },
  {
    company: "MO Agency",
    title: "Senior Software Developer",
    dates: "Feb 2020 – Feb 2021",
    blurb:
      "Multi-stack agency development across web and mobile — many clients, many stacks, tight deadlines.",
    stack: [
      "WordPress",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "Jinja",
    ],
  },
  {
    company: "DPDK",
    title: "JS Frontend Engineer",
    dates: "Sep 2019 – Jan 2020",
    blurb: "Frontend engineering for a global digital production agency.",
    stack: ["React", "Next.js", "JavaScript", "CSS3", "HTML5"],
  },
  {
    company: "INJOZI Design CC",
    title: "Full Stack Engineer",
    dates: "Apr 2018 – Aug 2019",
    blurb:
      "Bespoke web experiences for product launches and brand events — design, build, and ship under hard deadlines.",
    stack: [
      "Vue.js",
      "Firebase",
      "Three.js",
      "TypeScript",
      "Sketch",
      "Adobe XD",
      "Illustrator",
    ],
  },
  {
    company: "The Digital Academy",
    title: "Engineering Team Lead",
    dates: "Jan 2017 – Mar 2018",
    blurb:
      "Promoted from intern to team lead within 12 months on a Barclays-sponsored programme.",
    stack: ["Ionic", "Angular", "AngularJS", "Node.js", "PHP", "Java"],
  },
];

export default function Experience() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-12">
      <Reveal>
        <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Professional Experience
        </h2>
      </Reveal>

      <RevealGroup stagger={0.06} className="mt-10 flex flex-col">
        {ROLES.map((role) => (
          <RevealItem key={`${role.company}-${role.dates}`}>
            <div className="grid gap-3 border-t border-line py-8 sm:grid-cols-[1fr_2fr] sm:gap-10">
              <div>
                <p className="text-lg font-bold text-ink">{role.company}</p>
                <p className="mt-1 text-sm font-medium text-muted">
                  {role.title}
                </p>
                <p className="mt-1 text-xs font-medium tracking-wide text-faint uppercase">
                  {role.dates}
                </p>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted">
                  {role.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-panel px-3 py-1.5 text-xs font-medium text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
