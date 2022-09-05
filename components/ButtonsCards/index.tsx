import Link from "next/link";
import {
  ButtonCardStyles,
  ButtonTitleStyles,
  ButtonDescriptionStyles,
} from "./styles";

interface ButtonsCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ButtonsCard({
  title,
  description,
  link,
}: ButtonsCardProps) {
  return (
    <Link href={link}>
      <ButtonCardStyles
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: .9 }}
        href={link}
        target="_blank"
      >
        <ButtonTitleStyles>{title}</ButtonTitleStyles>
        <ButtonDescriptionStyles>{description}</ButtonDescriptionStyles>
      </ButtonCardStyles>
    </Link>
  );
}
