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
        onClick={e => {
          e.preventDefault();
          if(Notification.permission === 'granted') {
          new Notification(title, {
            body: description,
            icon: "/favicon.ico",
          });
          } else {
            Notification.requestPermission().then(permission => {
              if(permission === 'granted') {
                new Notification(title, {
                  body: description,
                  icon: "/favicon.ico",
                });
              }
            })
          }
        }}
      >
        <ButtonTitleStyles>{title}</ButtonTitleStyles>
        <ButtonDescriptionStyles>{description}</ButtonDescriptionStyles>
      </ButtonCardStyles>
    </Link>
  );
}
