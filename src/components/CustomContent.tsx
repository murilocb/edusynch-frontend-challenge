import React from 'react';

const CustomContent = ({ classNames, textContent }: any) => {
  return (
    <div className={classNames.container}>
      <h4 className={classNames.title}>{textContent.title}</h4>
      <h2 className={classNames.subtitle}>{textContent.subtitle}</h2>
      <p className={classNames.paragraph}>{textContent.paragraph}</p>
    </div>
  );
};

export default CustomContent;
