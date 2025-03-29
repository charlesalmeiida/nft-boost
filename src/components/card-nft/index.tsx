import Image from "next/image"

import IconFav from "@/assets/icon-heart.svg"
import IconVerified from "@/assets/icon-verified.svg"
import IconETH from "@/assets/icon-eth.svg"
import IconClock from "@/assets/icon-clock.svg"

interface CardNftProps {
  image: string
  children: React.ReactNode
}

export function CardNft({ image, children }: CardNftProps) {
  return (
    <div className="w-full max-w-card-nft bg-background-card-nft overflow-hidden rounded-2xl border border-card-nft">
      <div className="w-full h-card-nft overflow-hidden relative">
        <picture>
          <Image
            src={image}
            width={279}
            height={236}
            alt="Imagem do NFT"
            className="w-full h-full object-cover"
          />
        </picture>

        <div className="absolute top-2 right-2 z-10 flex items-center gap-2 py-3 px-6 bg-background-card-nft rounded-full border-card-nft border-2">
          <picture>
            <Image
              src={IconFav}
              width={16}
              height={16}
              alt="Ícone de coração"
            />
          </picture>
          <small>0</small>
        </div>
      </div>

      <div className="w-full p-4">
        <h4 className="flex items-center gap-1 text-xs mb-1">
          Cartoon Collection
          <picture>
            <Image
              src={IconVerified}
              width={14}
              height={14}
              alt="Ícone de verificado"
            />
          </picture>
        </h4>
        <h3 className="text-lg font-semibold mb-4">{children}</h3>

        <div className="flex justify-between items-end mb-4">
          <div className="space-y-1">
            <span className="text-xs text-white opacity-70">Preço atual</span>
            <h3 className="flex items-center gap-1 text-lg/none font-bold">
              <picture>
                <Image
                  src={IconETH}
                  width={12}
                  height={19}
                  alt="Ícone do ETH"
                />
              </picture>
              0.0721 BTC
            </h3>
          </div>
          <h5 className="text-xs font-medium">R$ 602,02</h5>
        </div>

        <button className="bg-blue-primary cursor-pointer hover:brightness-90 transition-all w-full py-4 rounded-full mb-4">
          Buy now
        </button>

        <div className="flex items-center gap-1">
          <picture>
            <Image
              src={IconClock}
              width={14}
              height={14}
              alt="Ícone de relógio"
            />
          </picture>
          <p className="text-[10px]">Fim em 4h 8m 22s</p>
        </div>
      </div>
    </div>
  )
}
