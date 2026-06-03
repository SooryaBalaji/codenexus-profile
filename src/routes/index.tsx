import { createFileRoute } from "@tanstack/react-router";
import sooryaAsset from "@/assets/soorya.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soorya Balaji — Portfolio" },
      { name: "description", content: "Portfolio of Soorya Balaji: quantum computing, software systems engineering, and applied technical projects." },
      { property: "og:title", content: "Soorya Balaji — Portfolio" },
      { property: "og:description", content: "Quantum computing and advanced software systems engineering portfolio." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

function Nav() {
  const links = [
    { href: "#about", label: "About Me" },
    { href: "#resume", label: "Resume" },
    { href: "#projects", label: "Projects" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#about" className="font-display text-lg font-semibold tracking-tight">
          Soorya Balaji
        </a>
        <ul className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          About Me
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Building bridges between quantum theory and modern software.
        </h1>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6 text-[17px] leading-relaxed text-foreground/90">
          <p>
            My career goal is to enter the field of quantum computing and advanced software systems engineering. I plan to complete an undergraduate program in computer science with a concentration in quantum information, followed by graduate level training in quantum algorithms and high-assurance systems. I am motivated to pursue this career because it sits at the intersection of physical law and engineered abstraction, and I believe the next generation of meaningful software will be written by people who understand both layers fluently.
          </p>
          <p>
            My strongest qualities are that I am methodical, accurate, and innovative. I am reliable and diligent when building quantum computing demonstrations that visualize superposition and entanglement. I am organized and persistent in managing complex web application projects, and I am resourceful in authoring script validation architectures. I am knowledgeable in programming through Honors Chemistry, Advanced Algebra II, and sustained work in Python and Java. I am adaptable when learning new technologies and cooperative when collaborating with others.
          </p>
          <p>
            These experiences have shaped a clear direction toward the work I want to do. Thank you for taking the time to read this introduction. Please continue through the Resume and Projects sections of this portfolio to see the details of my academic record, professional experience, and technical projects.
          </p>
        </div>

        <aside className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elevated)]">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={sooryaAsset.url}
                alt="Portrait of Soorya Balaji"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <p className="font-display text-xl font-semibold">Soorya Balaji</p>
              <p className="text-sm text-muted-foreground">
                Student Engineer · Quantum Computing
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h2 className="mb-4 font-display text-lg font-semibold">Quick Information</h2>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                <tr>
                  <th className="w-32 py-3 text-left font-medium text-muted-foreground">Location</th>
                  <td className="py-3 text-foreground">Dublin, CA</td>
                </tr>
                <tr>
                  <th className="py-3 text-left font-medium text-muted-foreground">Email</th>
                  <td className="break-all py-3 text-foreground">soorya_balaji@outlook.com</td>
                </tr>
                <tr>
                  <th className="py-3 text-left align-top font-medium text-muted-foreground">
                    Skills
                  </th>
                  <td className="py-3 text-foreground">
                    Quantum Computing Frameworks, Python, Java, Git, GitHub, Interface Validation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-card)] md:p-14">
          <header className="border-b border-border pb-8 text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Soorya Balaji
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Dublin, CA · 925-570-1937 · soorya_balaji@outlook.com
            </p>
          </header>

          <ResumeBlock title="Objective">
            <p className="text-[15px] leading-relaxed">
              Seeking a full-time entry-level position to apply quantum computing models and advanced
              software system validation skills while completing university enrollment
            </p>
          </ResumeBlock>

          <ResumeBlock title="Education">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold">Emerald High School</p>
              <p className="text-sm text-muted-foreground">Class of 2029</p>
            </div>
            <p className="text-sm text-muted-foreground">High School Diploma Candidate</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px]">
              <li>Cumulative GPA 4.14</li>
              <li>Honor Roll recognition</li>
              <li>Advanced coursework in Algebra II, Honors Chemistry, and Computer Science</li>
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Experience">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold">
                Founder and Lead Developer · QuantumBind
              </p>
              <p className="text-sm text-muted-foreground">April 2026 – Present</p>
            </div>
            <a
              href="https://github.com/SooryaBalaji/QuantumBind"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:translate-y-[-1px] hover:shadow-[var(--shadow-elevated)]"
            >
              View on GitHub →
            </a>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px]">
              <li>Engineer localized web application interfaces optimized for advanced processing logic</li>
              <li>Maintain repository branches for open-access simulation tools</li>
              <li>Track system performance metrics across browser runtimes</li>
              <li>Design modular front-end components aligned with quantum visualization workflows</li>
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Volunteer Experience">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold">
                Eyelevel Learning Center · Inventory Management and Lesson Plan Packing
              </p>
              <p className="text-sm text-muted-foreground">March 2022 – April 2025</p>
            </div>
            <p className="text-sm text-muted-foreground">Walnut Creek, CA</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px]">
              <li>Unpacked monthly shipments of educational booklets and organized them across inventory shelves</li>
              <li>Assembled customized monthly lesson plans tailored to each student based on assigned booklets</li>
              <li>Maintained inventory accuracy through consistent stock tracking and organization</li>
            </ul>

            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold">
                Sydney Paige Foundation · Inventory Packing and Organization
              </p>
              <p className="text-sm text-muted-foreground">April 2025 – September 2025</p>
            </div>
            <p className="text-sm text-muted-foreground">Walnut Creek, CA</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px]">
              <li>Managed incoming warehouse inventory and organized donated materials categorically</li>
              <li>Packed educational resources for underprivileged students and schools in developing countries</li>
              <li>Collaborated with warehouse volunteers to streamline categorization and packing workflows</li>
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Skills">
            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Technical
                </p>
                <ul className="list-disc space-y-1 pl-5 text-[15px]">
                  <li>Quantum Computing Concepts</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>HTML, CSS, JavaScript</li>
                  <li>Git, GitHub</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Structural
                </p>
                <ul className="list-disc space-y-1 pl-5 text-[15px]">
                  <li>Advanced Algebra II</li>
                  <li>Honors Chemistry</li>
                  <li>Frontend and Backend Development</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Linguistic
                </p>
                <ul className="list-disc space-y-1 pl-5 text-[15px]">
                  <li>English (Fluent)</li>
                  <li>Telugu (Fluent)</li>
                  <li>Tamil (Basic)</li>
                  <li>Spanish (Basic)</li>
                </ul>
              </div>
            </div>
          </ResumeBlock>


          <div className="mt-10 flex justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:translate-y-[-1px] hover:shadow-[var(--shadow-elevated)]"
            >
              Download Resume PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8 border-t border-border pt-6 first-of-type:mt-8">
      <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.22em] text-accent">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}

function ProjectMockup({ label, tone }: { label: string; tone: "bind" | "infra" }) {
  if (tone === "bind") {
    return (
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[oklch(0.22_0.04_260)] to-[oklch(0.32_0.08_280)]">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_30%,oklch(0.72_0.16_75)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,oklch(0.55_0.18_280)_0%,transparent_50%)]" />
        <div className="relative grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 rounded-full border border-white/30 bg-white/10 backdrop-blur"
              style={{ opacity: 0.4 + (i % 3) * 0.2 }}
            />
          ))}
        </div>
        <p className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-widest text-white/70">
          {label}
        </p>
      </div>
    );
  }
  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-[oklch(0.97_0.008_250)]">
      <div className="absolute inset-0 [background:linear-gradient(oklch(0.92_0.01_255)_1px,transparent_1px),linear-gradient(90deg,oklch(0.92_0.01_255)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-card shadow-[var(--shadow-card)]"
          >
            <div className="h-2 w-6 rounded-full bg-accent/70" />
          </div>
        ))}
      </div>
      <p className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function ProjectCard({
  number,
  title,
  subtitle,
  year,
  code,
  objective,
  role,
  skills,
  challenges,
  teamwork,
  reflection,
  link,
}: {
  number: string;
  title: string;
  subtitle: string;
  year: string;
  code: string;
  objective: string;
  role: string;
  skills: string[];
  challenges: string;
  teamwork: string;
  reflection: string;
  link: string;
}) {
  return (
    <article className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] lg:grid-cols-[1fr_1.4fr]">
      <div className="flex flex-col justify-between gap-6 border-b border-border bg-secondary/50 p-8 lg:border-b-0 lg:border-r">
        <span className="inline-block w-fit rounded-md border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
          Project {number}
        </span>
        <div>
          <p className="font-display text-3xl font-semibold leading-tight">{title}</p>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:translate-y-[-1px] hover:shadow-[var(--shadow-elevated)]"
        >
          View Project Code →
        </a>
      </div>
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold leading-tight">{title}</h3>
          <span className="shrink-0 text-sm text-muted-foreground">{year}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <ProjectField label="Objective" body={objective} />
          <ProjectField label="Role" body={role} />
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Skills Learned
            </p>
            <ul className="list-disc space-y-1 pl-5 text-[15px]">
              {skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <ProjectField label="Challenges" body={challenges} />
          <ProjectField label="Teamwork / Leadership" body={teamwork} />
          <ProjectField label="Reflection" body={reflection} />
        </div>
      </div>
    </article>
  );
}


function ProjectField({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{label}</p>
      <p className="text-[15px] leading-relaxed text-foreground/90">{body}</p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Projects
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Selected work from the lab and the classroom.
        </h2>
      </div>

      <div className="space-y-12">
        <ProjectCard
          number="01"
          title="Python Chemistry Flashcards"
          subtitle="Honors Chemistry · Independent Study Tool"
          year="2026"
          link="https://www.programiz.com/online-compiler/2MSLuk4GSnEFu"
          code={`import random

flashcards = {
    "H": "Hydrogen",
    "He": "Helium",
    "Li": "Lithium",
    "Be": "Beryllium",
    "C": "Carbon",
    "N": "Nitrogen",
    "O": "Oxygen",
    "Na": "Sodium",
}

score = 0
symbols = list(flashcards.keys())
random.shuffle(symbols)

for symbol in symbols:
    answer = input(f"What element is {symbol}? ")
    if answer.strip().lower() == flashcards[symbol].lower():
        print("Correct!")
        score += 1
    else:
        print(f"The answer was {flashcards[symbol]}")

print(f"Final score: {score}/{len(symbols)}")`}
          objective="Build an interactive Python program that quizzes the user on chemical element symbols and reinforces Honors Chemistry vocabulary through repeated active recall."
          role="Collaborated with a partner to design the flashcard dictionary, randomization logic, input validation, and scoring system in Python."
          skills={[
            "Python dictionaries and lists",
            "Loop and conditional logic",
            "User input validation",
            "Randomization with the random module",
            "Score tracking and feedback",
          ]}
          challenges="Early versions marked correct answers wrong due to case sensitivity and trailing spaces. The issue was resolved by normalizing input with strip and lower before comparison."
          teamwork="Worked with a partner to split development tasks. One person focused on the data structure and randomization while the other handled input validation and scoring logic. We tested each other's code and combined the components into a single working program."
          reflection="The project deepened understanding of data structures and reinforced how small programs can directly support classroom learning by turning memorization into an interactive feedback loop."
        />

        <ProjectCard
          number="02"
          title="Python Rock Paper Scissors Program"
          subtitle="Computer Science Essentials"
          year="2026"
          link="https://www.programiz.com/online-compiler/2EN5u4iHpk8TQ"
          code={`import random

print("Welcome to Rock Paper Scissors!")
print("You will play 100 rounds against the computer.")
print("Type r for rock, p for paper, or s for scissors")

user_score = 0
computer_score = 0
ties = 0
user_history = []
round_number = 1

while round_number <= 100:
    print("Round", round_number)
    user_move = input("Enter your move (r/p/s): ")

    while user_move not in ["r", "p", "s"]:
        user_move = input("Invalid move. Enter r, p, or s: ")

    # Computer strategy: counter repeated moves
    if len(user_history) >= 2 and user_history[-1] == user_history[-2]:
        if user_history[-1] == "r":
            computer_move = "p"
        elif user_history[-1] == "p":
            computer_move = "s"
        else:
            computer_move = "r"
    else:
        computer_move = random.choice(["r", "p", "s"])

    user_history.append(user_move)
    round_number += 1`}
          objective="Create an interactive Python game that allows users to play multiple rounds of Rock Paper Scissors against the computer while tracking scores and outcomes."
          role="Collaborated with a partner to develop the full game logic, user interaction system, and score-tracking functionality using Python."
          skills={[
            "Python programming fundamentals",
            "Conditional statements and loops",
            "User input handling",
            "Debugging and testing",
            "Logical problem-solving",
          ]}
          challenges="One challenge was ensuring the score updated correctly after every round and that invalid inputs were handled properly. The program improved through testing multiple game scenarios and reorganizing the game loop."
          teamwork="Worked with a partner to divide the project into logical components. One person built the game loop and input handling while the other designed the computer strategy and score tracker. We integrated our work and debugged the combined program together."
          reflection="This project strengthened understanding of programming structure and problem-solving, and taught the importance of testing code carefully and improving programs through debugging and revision."
        />
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Soorya Balaji</p>
        <p>Dublin, CA · soorya_balaji@outlook.com</p>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <About />
        <Resume />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
