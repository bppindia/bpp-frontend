import bppflag from '@/assets/images/logos/bppflag.png';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Shield, Users } from "lucide-react";

const Vision = () => {

    return (
        <section className="w-full py-5 dark:bg-gray-800">
            {/* Hero Section */}
            <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:space-y-6 md:px-6 lg:space-y-3 xl:gap-4 xl:grid xl:grid-cols-2 xl:items-center">
                <div className="space-y-3 xl:text-left">
                    <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm text-gray-50 shadow dark:bg-gray-50 dark:text-gray-900">
                        Vision
                    </div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                        Vision of Bharatiya Popular Party
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 sm:text-lg">
                        At the heart of BPP's vision lies the commitment to{" "}
                        <span className="font-bold">build a developed, democratic nation</span>, where every citizen—regardless of background or status—has the opportunity to thrive and contribute to a prosperous society. We aspire to create a nation where equity, justice, and progress are not just ideals but everyday realities for all.
                    </p>
                </div>
                <div className="grid gap-4 sm:gap-6 xl:gap-2">
                    <img
                        src={bppflag}
                        width="500"
                        height="250"
                        alt="Vision"
                        className="mx-auto aspect-video  rounded-xl object-cover object-center sm:w-full"
                    />
                </div>
            </div>
            {/* Core Pillars Section */}
            <div className="container mt-12 px-4 md:px-6">
                <h2
                    className="font-bold text-2xl mb-6 text-center">
                    Our vision is built on three core pillars
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Pillar 1 */}
                    <Card className="relative ">
                        <CardContent className="p-6">
                            <div className="mb-4 flex items-center gap-2">
                                <Users className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold">Empowering the Underprivileged</h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300">
                                We are dedicated to improving the lives of the{" "}
                                <span className="font-bold">socially and economically disadvantaged</span> sections of society. We believe that true development can only be achieved when everyone has access to the opportunities they deserve. Our focus is on:
                            </p>
                            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Eradicating poverty by creating sustainable livelihood opportunities</li>
                                <li>Expanding access to basic services such as education, healthcare, and housing</li>
                                <li>Encouraging inclusive growth that leaves no one behind, ensuring every individual can fully realize their potential</li>
                            </ul>

                        </CardContent>
                    </Card>

                    {/* Pillar 2 */}
                    <Card className="relative ">
                        <CardContent className="p-6">
                            <div className="mb-4 flex items-center gap-2">
                                <GraduationCap className="h-6 w-6 text-green-600" />
                                <h3 className="text-xl font-bold">Education, Health, and Security for All</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                We recognize that the foundation of a prosperous society rests on the health, safety, and education of its people. Our commitment to these areas includes:
                            </p>
                            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Building a world-class education system that equips our youth with the skills and knowledge to succeed in a globalized world</li>
                                <li>Ensuring access to affordable, quality healthcare for all, regardless of income or location</li>
                                <li>Strengthening our national security to create a stable and safe environment where citizens can live without fear</li>
                            </ul>

                        </CardContent>
                    </Card>

                    {/* Pillar 3 */}
                    <Card className="relative ">
                        <CardContent className="p-6">
                            <div className="mb-4 flex items-center gap-2">
                                <Shield className="h-6 w-6 text-red-600" />
                                <h3 className="text-xl font-bold">Minimizing the Influence of Money and Muscle Power in Politics</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                A strong democracy is built on transparency, integrity, and the active participation of its citizens. We are committed to:
                            </p>
                            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Fighting corruption at every level of government</li>
                                <li>Minimizing the influence of money and muscle power in politics, ensuring fair and free elections</li>
                                <li>Creating an environment where public policy is driven by the needs and aspirations of the people, not by vested interests</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                    We believe that a nation can only progress when{" "}
                    <span className="font-bold">everyone is given a fair chance</span>. when opportunity is not dictated by wealth, power, or birthright, but by talent, hard work, and determination. This vision for the future is rooted in the belief that our diversity is our strength, and our democracy is our most powerful tool for change.
                    Together, we will
                    <span className="font-bold">build a nation that works for all</span>, where dignity, justice, and opportunity are available to every citizen.
                </p>
            </div>
        </section>
    );
};

export default Vision;
