import ButtonsCard from "../ButtonsCards";

import { ButtonsContainerStyles } from "./styles";

export default function ButtonsContainer() {
  return (
    <ButtonsContainerStyles>
      <ButtonsCard
        title="Get Started"
        description="Learn more about Next.js in the documentation."
        link="https://nextjs.org/docs"
      />

      <ButtonsCard
        title="Web Site"
        description="Meu site, contrete serviço por aqui."
        link="https://jonatas.app/"
      />
      <ButtonsCard
        title="Get Started"
        description="Learn more about Next.js in the documentation."
        link="https://nextjs.org/docs"
      />

      <ButtonsCard
        title="Web Site"
        description="Meu site, contrete serviço por aqui."
        link="https://jonatas.app/"
      />
    </ButtonsContainerStyles>
  );
}
