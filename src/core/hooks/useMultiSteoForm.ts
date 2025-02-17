import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    
    const next = () => {
        setCurrentStep( i => {
            if (i >= steps.length - 1) return i;
            return i + 1;
        });
    };
    
    const previous = () => {
        setCurrentStep( i => {
            if (i <= 0 ) return i;
            return i - 1;
        });
    };
    
    const goTo = (index: number) => {
        setCurrentStep(index);
    };
    
    return {
        currentStep,
        step: steps[currentStep],
        steps,
        next,
        previous,
        goTo,
        formData,
        setFormData,
        totalSteps: steps.length,
        isLastStep: currentStep === steps.length - 1,
        isFirstStep: currentStep === 0,
        currentStepElement: steps[currentStep],
    };
}