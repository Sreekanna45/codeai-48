import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { programmingNotes } from '@/data/languageNotes';

export const ProgrammingNotes = () => {
  return (
    <section className="bg-card p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-primary">Programming Language Notes</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {programmingNotes.map((note, index) => (
          <AccordionItem key={index} value={`note-${index}`} className="bg-secondary/20 rounded-lg">
            <AccordionTrigger className="px-4 py-2 hover:bg-secondary/30 rounded-t-lg">
              {note.language}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 space-y-4">
              <div>
                <h4 className="font-semibold text-primary">Overview</h4>
                <p className="text-muted-foreground whitespace-pre-line">{note.overview}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Basic Syntax</h4>
                <p className="text-muted-foreground">{note.basicSyntax}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Key Features</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  {note.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Best Practices</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  {note.bestPractices.map((practice, i) => (
                    <li key={i}>{practice}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Common Pitfalls</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  {note.commonPitfalls.map((pitfall, i) => (
                    <li key={i}>{pitfall}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Popular Frameworks</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  {note.frameworks.map((framework, i) => (
                    <li key={i}>{framework}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Learning Resources</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  {note.resources.map((resource, i) => (
                    <li key={i}>{resource}</li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};