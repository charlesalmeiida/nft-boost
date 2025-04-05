import { CardColectors } from "@/components/card-colectors"
import { Container } from "@/components/container"

import image01 from "@/assets/nfts/01.jpg"

export default function Home() {
  return (
    <Container>
      <CardColectors image={image01} />
    </Container>
  )
}
