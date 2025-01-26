import { TopLanguages } from "@/components/TopLanguages";
import { CodeCompiler } from "@/components/CodeCompiler";
import { ManualReview } from "@/components/ManualReview";

export const MainContent = () => {
  return (
    <>
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary">Top Programming Languages</h2>
        <TopLanguages />
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary">Code Compiler</h2>
        <CodeCompiler />
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary">Manual Review</h2>
        <ManualReview />
      </section>
    </>
  );
};