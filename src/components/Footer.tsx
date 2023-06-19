import Image from 'next/image';

interface Props {}

export function Footer(props: Props) {
  return (
    <div className="flex justify-center items-center space-x-80 mb-6 -mt-4">
      <p className="text-sm text-dark sm:text-base md:text-base lg:text-base xl:text-base">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </p>
      <div className="flex justify-end items-center w-1440">
        <Image
          src="/svgs/CoinSynch.svg"
          alt="CoinSynch Logo"
          width={124}
          height={21}
          priority
        />
      </div>
    </div>
  );
}
