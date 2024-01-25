import { FC, ReactNode } from "react";

interface CallToActionProps {
  title: string;
  text: string;
  button?: ReactNode;
}

const CallToAction: FC<CallToActionProps> = ({ title, text, button }) => {
  return (
    <div className="p-12 bg-teal-600 shadow-sm rounded-md text-white flex flex-col gap-2 items-center">
      <div className="flex flex-col gap-2 items-start">
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="text-lg tracking-wide font-thin max-w-[60ch]">{text}</p>
        {button}
      </div>
    </div>
  );
};
export default CallToAction;
