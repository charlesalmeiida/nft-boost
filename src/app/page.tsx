import { Container } from "@/components/container"
import { TagSection, TitleSection, TitleWrapper } from "@/components/title-section"

export default function Home() {
  return (
    <Container>
      <TitleWrapper>
        <TagSection>Destaque em Coleções</TagSection>

        <TitleSection>Coleções notáveis</TitleSection>
      </TitleWrapper>
    </Container>
  )
}
