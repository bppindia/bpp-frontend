import Layout from '@/layout/Layout';
import { CircleArrowRight, Files, Settings } from 'lucide-react';

const GetToKnow = () => {
    return (
        <Layout>
            <section className="container py-24">
                <div className="container flex flex-col gap-28">
                    <div className="flex flex-col gap-7">
                        <h1 className="text-4xl font-semibold lg:text-7xl">
                            Lorem ipsum dolor, sit amet
                        </h1>
                        <p className="max-w-xl text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus soluta nulla, cum officiis modi repudiandae, sed labore, molestiae deserunt quaerat expedita?
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        <img
                            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                            alt="placeholder"
                            className="size-full max-h-96 rounded-2xl object-cover"
                        />
                        <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
                            <p className="text-sm text-muted-foreground">OUR MISSION</p>
                            <p className="text-lg font-medium">
                                We believe that building software should be insanely easy. That
                                everyone should have the freedom to create the tools they need,
                                without any developers, designers or drama.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 md:gap-20">
                        <div className="max-w-xl">
                            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
                              Lorem ipsum dolor sit amet consectetur Eligendi, a?
                            </h2>
                            <p className="text-muted-foreground">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi similique minus minima omnis, adipisci eaque itaque veniam aut placeat at reprehenderit.
                            </p>
                        </div>
                        <div className="grid gap-10 md:grid-cols-3">
                            <div className="flex flex-col">
                                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                                    <Files className="size-5" />
                                </div>
                                <h3 className="mb-3 mt-2 text-lg font-semibold">
                                    Lorem ipsum dolor
                                </h3>
                                <p className="text-muted-foreground">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis vitae temporibus, qui eligendi libero similique deleniti, quae dicta fuga tempora? Non placeat blanditiis sequi deserunt sed laborum culpa vitae nesciunt dicta corporis?
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                                    <CircleArrowRight className="size-5" />
                                </div>
                                <h3 className="mb-3 mt-2 text-lg font-semibold">
                                Lorem ipsum dolor
                                </h3>
                                <p className="text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis vitae temporibus, qui eligendi libero similique deleniti, quae dicta fuga tempora? Non placeat blanditiis sequi deserunt sed laborum culpa vitae nesciunt dicta corporis?
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                                    <Settings className="size-5" />
                                </div>
                                <h3 className="mb-3 mt-2 text-lg font-semibold">
                                Lorem ipsum dolor
                                </h3>
                                <p className="text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis vitae temporibus, qui eligendi libero similique deleniti, quae dicta fuga tempora? Non placeat blanditiis sequi deserunt sed laborum culpa vitae nesciunt dicta corporis?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-10 md:grid-cols-2">
                        <div>
                            <p className="mb-10 text-sm font-medium text-muted-foreground">
                                JOIN OUR TEAM
                            </p>
                            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
                               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, in!
                            </h2>
                        </div>
                        <div>
                            <img
                                src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                                alt="placeholder"
                                className="mb-6 max-h-36 w-full rounded-xl object-cover"
                            />
                            <p className="text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto dolorem laboriosam assumenda asperiores debitis corporis aliquid! Repellat, aliquid. Hic officia rem esse!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GetToKnow;
