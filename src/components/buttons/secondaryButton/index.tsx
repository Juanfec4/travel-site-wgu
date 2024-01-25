import { Icon } from "@tabler/icons-react";
import { FC } from "react";

interface SecondaryButtonProps {
  onClick: () => void;
  text: string;
  Icon?: Icon;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ onClick, Icon, text }) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-1 bg-white rounded-md px-4 py-2 text-teal-700 hover:bg-neutral-200 transition duration-200"
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default SecondaryButton;
