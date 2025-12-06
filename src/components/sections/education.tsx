import { education } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-blue-100/50 backdrop-blur-2xl border-t border-b border-black/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-shake">
            Education
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            My academic journey and qualifications.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-black/10"></div>
          {education.map((item, index) => (
            <div
              key={item.institution}
              className={`relative mb-8 flex w-full items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={cn(
                  "relative w-1/2 p-4",
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 bg-slate-100 p-1 rounded-full border-2 border-primary",
                    index % 2 === 0 ? "right-[-18px]" : "left-[-18px]"
                  )}
                >
                  <item.Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                <p className="mt-1 text-muted-foreground">{item.institution}</p>
                <p className="text-sm text-primary">{item.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
