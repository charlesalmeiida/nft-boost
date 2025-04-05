import Image, { StaticImageData } from "next/image"

import IconVerified from "@/assets/icon-verified.svg"
import iconETH from "@/assets/icon-eth.svg"

interface CardColectorsProps {
  image: StaticImageData
}

export function CardColectors({ image }: CardColectorsProps) {
  return (
    <div className="py-4 px-6 w-full rounded-full border border-white/[0.04] max-w-card-colectors bg-white/[0.01] flex items-center justify-between">
      <div className="flex items-center gap-6">
        <strong className="text-base/snug font-semibold font-inter">1</strong>

        <div className="flex items-center gap-4">
          <picture className="w-10 relative">
            <div className="w-full h-full rounded-full border-2 border-white/[0.04] overflow-hidden flex items-center justify-center">
              <Image
                src={image}
                width={40}
                height={40}
                alt="Ícone de NFT"
                className="w-full h-full object-cover"
              />
            </div>
            <Image
              src={IconVerified}
              width={20}
              height={20}
              alt="Ícone de verificado"
              className="absolute -bottom-1 -right-1"
            />
          </picture>

          <div className="space-y-[2px]">
            <h4 className="text-base/snug font-semibold font-inter">
              Lorem Ipsum
            </h4>
            <p className="flex items-center text-sm/snug text-white/70 font-inter">
              Preço mínimo
              <span className="flex items-center text-white font-inter">
                <Image
                  src={iconETH}
                  width={8}
                  height={12}
                  alt="Ícone de ETH"
                  className="mx-1"
                />
                0.721 BTC
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <strong className="text-sm/tight font-inter font-bold text-green-primary">
          +20%
        </strong>
        <span className="flex items-center text-white font-inter">
          <Image
            src={iconETH}
            width={8}
            height={12}
            alt="Ícone de ETH"
            className="mx-1"
          />
          0.721 BTC
        </span>
      </div>
    </div>
  )
}
