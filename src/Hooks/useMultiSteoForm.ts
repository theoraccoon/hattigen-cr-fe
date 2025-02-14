import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    
    const next = () => {
        setCurrentStep((currentStep) => currentStep + 1);
    };
    
    const previous = () => {
        setCurrentStep((currentStep) => currentStep - 1);
    };
    
    const reset = () => {
        setCurrentStep(0);
        setFormData({});
    };
    
    return {
        currentStep,
        next,
        previous,
        reset,
        formData,
        setFormData,
        totalSteps: steps.length,
        isLastStep: currentStep === steps.length - 1,
        isFirstStep: currentStep === 0,
        currentStepElement: steps[currentStep],
    };
}