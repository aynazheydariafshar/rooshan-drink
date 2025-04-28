import { useNavigate } from "react-router-dom";

type Props = {
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
};

export const ButtonIconTxt = ({ href, Icon, title }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(href)}
      className="flex flex-col items-center hover:cursor-pointer hover:animate-bounce"
    >
      <Icon width={32} height={32} />
      <p className="text-lg font-bold">{title}</p>
    </div>
  );
};
