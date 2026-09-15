import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Nuxt.js",
      "Vue.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "styled-components",
      "HTML5",
      "CSS3",
      "Redux",
      "T3 Stack",
    ],
  },
  {
    label: "Mobile",
    skills: ["React Native (Expo)", "Ionic"],
  },
  {
    label: "Backend",
    skills: [
      ".NET (C#)",
      "Node.js",
      "PHP",
      "GraphQL",
      "REST / Swagger",
      "WordPress",
      "Jinja",
    ],
  },
  {
    label: "Data & Viz",
    skills: ["Recharts", "Mapbox", "Three.js", "Firebase"],
  },
  {
    label: "DevOps & Tooling",
    skills: ["Azure (DevOps & cloud)", "Docker", "Git", "GitHub"],
  },
  {
    label: "Design & UX",
    skills: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "Illustrator",
      "Photoshop",
      "UX/UI design",
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-12">
      <Reveal>
        <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Core Stack
        </h2>
      </Reveal>

      <RevealGroup
        stagger={0.06}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CATEGORIES.map((category) => (
          <RevealItem key={category.label}>
            <div className="h-full rounded-3xl border border-line p-8">
              <h3 className="text-xs font-semibold tracking-wide text-faint uppercase">
                {category.label}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-panel px-3 py-1.5 text-xs font-medium text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
