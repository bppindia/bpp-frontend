import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <>
       <section>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h3 className="mb-3 max-w-full text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
          Stay Informed with Bhartiya Popular Party
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
          BPP is committed to keep you updated with the latest national news and important political
developments. By subscribing, you'll receive timely and relevant updates
straight to your inbox—no spam, just the facts and insights that matter most.
          </p>
          <div className="w-full md:max-w-lg">
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Input placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}



