import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Direct Participation",
    description:
      "Have a direct say in the policies and decisions that impact you as a citizen.",
  },
  {
    icon: <MapIcon />,
    title: "Collaborative Networks",
    description:
      "Benefit from connections using each other’s expertise, knowledge, and resources.",
  },
  {
    icon: <PlaneIcon />,
    title: "Transparent Decision-Making",
    description:
      "Be part of a process where your voice is heard, and decisions are made with clarity and openness.",
  },
  {
    icon: <GiftIcon />,
    title: "Earn Representation",
    description:
      "Be responsive to the people’s needs and earn the opportunity to be your area’s representative.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-15"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Why{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Join{" "}
        </span>
        BPP ?
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
