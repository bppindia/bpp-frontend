import { cn } from "@/lib/utils";
import { useMultiStepForm } from "./multi-step-form";
import { useContext } from "react";

export function MultiStepFormContextProvider(props: {
    children: (context: ReturnType<typeof useMultiStepForm>) => React.ReactNode;
  }) {
    const ctx = useMultiStepFormContext();
    return props.children(ctx);
  }
  
  export function useMultiStepFormContext<Schema extends z.ZodType>() {
    const context = useContext(MultiStepFormContext) as ReturnType<
      typeof useMultiStepForm<Schema>
    >;
  
    if (!context) {
      throw new Error(
        'useMultiStepFormContext must be used within a MultiStepForm',
      );
    }
  
    return context;
  }
  
  export const MultiStepFormStep: React.FC<StepProps> = ({ 
    children, 
    className,
    ...props 
  }) => {
    return (
      <div className={cn(className)} {...props}>
        {children}
      </div>
    );
  };
  
  export const MultiStepFormHeader: React.FC<{ className?: string }> = ({ 
    children,
    className 
  }) => {
    return <div className={cn(className)}>{children}</div>;
  };
  
  export const MultiStepFormFooter: React.FC<{ className?: string }> = ({ 
    children,
    className 
  }) => {
    return <div className={cn(className)}>{children}</div>;
  };