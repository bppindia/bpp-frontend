import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from '@/layout/Layout';
import { ArrowRight, Check, DollarSign, KeyRound, Timer } from 'lucide-react';


export default function Join() {
    return (
        <Layout>
            <div className="min-h-screen container bg-background">
                {/* Hero Section */}
                <section className="relative container py-16 overflow-hidden">
                    <div className="absolute inset-0 " />
                    <div className="container relative z-10">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <Badge variant="secondary" className="mb-4">Join Bharatiya Popular Party</Badge>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                Be Part of the Change
                            </h1>
                            <p className="text-lg text-muted-foreground">
                            The Party intends to create an environment where every citizen has a voice, where transparency is the norm, and where decision-making is a collective process. The Party is aimed to ensure that all voices are heard, and all perspectives are considered.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="overflow-hidden ">
                    <div className="container relative">
                        <div className="pointer-events-none absolute inset-0 -top-20 -z-10 mx-auto hidden size-[500px] bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] opacity-25 [background-size:6px_6px] [mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)] lg:block"></div>
                        <div className="relative flex justify-between gap-16">
                            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-transparent to-transparent lg:block"></div>
                            <div className="w-full max-w-96 shrink-0 justify-between">
                                <p className="font-mono text-xs text-muted-foreground">
                                    why join bpp?
                                </p>
                                <h2 className="mb-3 mt-6 text-3xl font-medium lg:text-4xl">
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, non cumque esse nostrum cupiditate optio. Amet molestias possimus sit velit voluptas impedit voluptatem esse, fuga ipsa eum harum sequi obcaecati illo quisquam! Incidunt libero laborum provident enim aspernatur natus perspiciatis! Consequatur, minus at ex illo eligendi nam, eum, a quisquam nesciunt corporis dignissimos saepe.
                                </p>
                            </div>
                            <div className="hidden w-full max-w-3xl shrink-0 lg:block">
                                <img
                                    src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                    alt="placeholder"
                                    className="max-h-[450px] w-full min-w-[450px] max-w-3xl rounded-lg border object-cover"
                                />
                            </div>
                        </div>
                        <div className="relative mt-8 grid md:grid-cols-3">
                            <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                                <Timer />
                                <div>
                                    <h3 className="text-lg font-medium">Primary Membership</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat neque exercitationem accusantium optio deserunt placeat architecto cumque cupiditate, explicabo possimus, repellat molestiae.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                                <DollarSign />
                                <div>
                                    <h3 className="text-lg font-medium">Test Membership</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis repudiandae aliquid voluptate laboriosam facere quae, reprehenderit minima totam blanditiis velit sint accusantium sunt quia maiores sapiente eos labore natus dolorum id inventore?
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                                <KeyRound />
                                <div>
                                    <h3 className="text-lg font-medium">Test Membership</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam odio voluptates consequuntur, aperiam asperiores sit a iusto debitis eveniet delectus amet ipsam nisi aspernatur, provident impedit magni quidem voluptate sunt optio fugit?
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -inset-x-4 top-0 h-px bg-input md:hidden"></div>
                            <div className="absolute -inset-x-4 top-[-0.5px] row-start-2 h-px bg-input md:hidden"></div>
                            <div className="absolute -inset-x-4 top-[-0.5px] row-start-3 h-px bg-input md:hidden"></div>
                            <div className="absolute -inset-x-4 bottom-0 row-start-4 h-px bg-input md:hidden"></div>
                            <div className="absolute -left-2 -top-2 bottom-0 w-px bg-input md:hidden"></div>
                            <div className="absolute -right-2 -top-2 bottom-0 col-start-2 w-px bg-input md:hidden"></div>
                            <div className="absolute -inset-x-2 top-0 hidden h-px bg-input md:block"></div>
                            <div className="absolute -top-2 bottom-0 left-0 hidden w-px bg-input md:block"></div>
                            <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-2 hidden w-px bg-input md:block"></div>
                            <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-3 hidden w-px bg-input md:block"></div>
                            <div className="absolute -top-2 bottom-0 right-0 hidden w-px bg-input md:block"></div>
                        </div>
                    </div>
                </section>
                <section className="py-4">
      <div className="container">
        <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Join Now
            </h3>
            <p className="text-muted-foreground lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis!
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outline">Learn More</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
            </div>
        </Layout>
    );
}

