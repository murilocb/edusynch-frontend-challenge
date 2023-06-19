import React from 'react';
import Image from 'next/image';
import CustomContent from './CustomContent';

const Box = ({ imageSrc, altText }: any) => {
  const dynamicClassNames = {
    container: 'space-y-2 flex-auto w-72',
    title: 'text-customYellow text-base font-semibold mb-2',
    subtitle: 'text-2xl font-semibold text-color-text',
    paragraph: 'text-base text-color-text',
  };

  const dynamicTextContent = {
    title: 'For your company',
    subtitle: 'Crypto Solutions',
    paragraph:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,`,
  };

  return (
    <div className="shadow-xl">
      <div className="inset-0 shadow-lg p-8">
        <Image src={imageSrc} alt={altText} width={64} height={64} className='mb-4' />

        <CustomContent
          classNames={dynamicClassNames}
          textContent={dynamicTextContent}
        />
      </div>
    </div>
  );
};

export default Box;
