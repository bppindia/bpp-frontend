import { cn } from "@/lib/utils";

interface StepperProps {
  steps: string[];
  currentStep: number;
  variant?: "numbers";
  className?: string;
}

export function Stepper({
  steps,
  currentStep,
  variant = "numbers",
  className,
}: StepperProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {steps.map((step, index) => (
        <div
          key={step}
          className={cn(
            "flex items-center",
            index !== steps.length - 1 && "w-full"
          )}
        >
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border-2",
              currentStep === index
                ? "border-primary bg-primary text-primary-foreground"
                : "border-muted-foreground text-muted-foreground"
            )}
          >
            {variant === "numbers" ? index + 1 : step[0]}
          </div>

          {index !== steps.length - 1 && (
            <div className="flex-grow h-0.5 bg-primary"></div>
          )}
        </div>
      ))}
    </div>
  );
}
