import Image from 'next/image';

interface Props {}

export function Footer(props: Props) {
  return (
    <div className="flex justify-between items-center md:w-full mb-6 mt-8">
      <p className="hidden md:flex text-sm text-dark sm:text-base md:text-base lg:text-base xl:text-base md:ml-20">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </p>
      <div className="flex justify-end md:w-1440 md:mr-20">
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
