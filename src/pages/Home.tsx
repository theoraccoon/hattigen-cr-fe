// import PersonalInfoScreen from "../components/PersonalInfoScreen";
import Buttons from "../components/Buttons";
import { useMultiStepForm } from "../Hooks/useMultiSteoForm";

function Home() {
  const { step, next, previous, isFirstStep, isLastStep } = useMultiStepForm([
    // <PersonalInfoScreen/>,
    // <LanguagesScreen />,
    // <FrameworksScreen onNext={() => next()} />,
    // <DatabasesScreen onNext={() => next()} />,
    // <CloudPlatformsScreen onNext={() => next()} />,
    // <AIScreen onNext={() => next()} />,
    // <UploadDocsScreen onNext={() => next()} />
  ])
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFFFFF] overflow-x-hidden mx-[46px]">
        <form action="" className="flex flex-col w-full mt-40">
          <div>
            {step}
          </div>
            <Buttons next={next} previous={previous} isFirstStep={isFirstStep} isLastStep={isLastStep} />
        </form>
    </div>
  );
}

export default Home;


