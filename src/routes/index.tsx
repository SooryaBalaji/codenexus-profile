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
            My personal career goal is to enter the field of quantum computing and advanced software
            systems engineering, where computational theory meets the design of real, reliable
            platforms. To achieve this objective, I plan to complete a rigorous undergraduate program
            in computer science with a concentration in quantum information, followed by graduate
            level technical training focused on quantum algorithms, compiler design, and
            high-assurance systems. I am motivated to explore quantum mechanics and data interfaces
            because they sit at the precise intersection of physical law and engineered abstraction,
            and I believe the next generation of meaningful software will be written by people who
            understand both layers fluently.
          </p>
          <p>
            My strongest technical qualities are precision, methodical debugging, and the ability to
            translate abstract concepts into working systems. I have built small quantum computing
            concept demonstrations that visualize superposition and entanglement, launched a public
            web application at thequantumbindapp.tech, and authored script validation architectures
            that automatically verify configuration files before deployment. These capabilities are
            grounded in concrete laboratory and classroom experience: Honors Chemistry sharpened my
            measurement discipline, Advanced Algebra II strengthened my reasoning over linear
            structures and complex coefficients, and sustained programming work in Python and Java
            has given me the engineering instincts to design components that other people can read,
            extend, and trust.
          </p>
          <p>
            Taken together, these experiences have shaped a clear direction and a steady momentum
            toward the work I want to do. Thank you for taking the time to read this introduction.
            Please continue through the Resume and Projects sections of this portfolio to see the
            details of my academic record, professional experience, and the technical projects that
            best represent my current craft.
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
                Founder and Lead Developer · thequantumbindapp.tech
              </p>
              <p className="text-sm text-muted-foreground">September 2025 – Present</p>
            </div>
            <p className="text-sm text-muted-foreground">Emerald High School · Dublin, CA</p>
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
                Community Technology Assistant · Local Community Organization
              </p>
              <p className="text-sm text-muted-foreground">June 2024 – August 2025</p>
            </div>
            <p className="text-sm text-muted-foreground">Dublin, CA</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px]">
              <li>Supervised weekly hardware peripheral allocation for regional data workshops</li>
              <li>Organized instructional support files explaining simple operating systems tasks</li>
              <li>Diagnosed data link degradation faults across basic workstation nodes</li>
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
                  <li>Microsoft Word</li>
                  <li>Google Docs</li>
                  <li>Advanced Algebra II</li>
                  <li>Honors Chemistry</li>
                  <li>CPR Certified</li>
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
        {/* Project 1 */}
        <article className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                Computer Science Engineering / Independent Concept Application
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                May 2026 – June 2026
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold leading-tight">
              The Quantum Bind App Architecture
              <span className="block text-base font-normal text-muted-foreground">
                thequantumbindapp.tech
              </span>
            </h3>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              The objective of this project was to launch an interactive web interface focused on
              communicating core quantum computing concepts to a general audience. As the creator and
              lead developer, I built the structural components, managed all stylesheet logic, and
              ran configuration testing across browsers and devices.
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Through the build I deepened my understanding of quantum logical states and the data
              interfaces required to represent them faithfully. I resolved persistent configuration
              errors by implementing custom variable parsing scripts that validated environment
              definitions before deployment.
            </p>
            <p className="text-sm text-muted-foreground">
              Skills exemplified: front-end architecture, configuration validation, applied quantum
              concepts.
            </p>
          </div>
          <ProjectMockup label="Quantum Bind · Web App" tone="bind" />
        </article>

        {/* Project 2 */}
        <article className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4 lg:order-2">
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                Applied Conceptual Project
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                April 2026 – May 2026
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold leading-tight">
              Localized Desktop Infrastructure Deployment
            </h3>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              The objective of this project was to establish a secured local staging environment on
              legacy desktop hardware arrays at Emerald High School. Serving as infrastructure lead,
              I tested storage systems, deployed automated configurations, and monitored packet maps
              across the internal network.
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              The work directly applied computer science classroom concepts to a physical
              environment. When hardware address collisions interrupted device routing, I resolved
              the conflict by initializing unique subnetworks and documenting the new addressing
              scheme for future maintenance.
            </p>
            <p className="text-sm text-muted-foreground">
              Skills exemplified: systems administration, automation, network diagnostics.
            </p>
          </div>
          <div className="lg:order-1">
            <ProjectMockup label="Local Infrastructure · Lab" tone="infra" />
          </div>
        </article>
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
