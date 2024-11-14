import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Newsletter() {
  return (
    <>
      {/* Hero */}
      <div className="container py-15 lg:py-15">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
          <h3 className="text-4xl md:text-5xl font-bold">
          Subscribe{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            For Updates
          </span>
        </h3>
            <p className="mt-3 text-xl text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam omnis voluptate tempore possimus iusto minima a facilis. Tempora, doloremque quidem?
            </p>
            <div className="mt-5 w-full lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full max-w-lg  lg:w-auto">
                <Label className="sr-only">Search</Label>
                <Input placeholder="Enter work email" type="email" />
              </div>
              <Button className="w-min">Subscribe</Button>
            </div>
          </div>
          {/* End Col */}
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-xl"
              src="https://placehold.co/700x540"
              alt="Image Description"
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}
