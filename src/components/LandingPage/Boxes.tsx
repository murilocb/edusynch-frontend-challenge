import Box from './Box';

const Boxes = ({ message }: { message: string }) => {
  return (
    <div className="mt-10 md:mt-72">
      <div className="md:grid md:grid-cols-2 md:gap-12 flex">
        <div className="col-span-1 flex">
          <Box imageSrc="/images/Bitcoin.png" altText="Bitcoin" />
        </div>
        <div className="col-span-1 hidden md:flex">
          <Box imageSrc="/images/Crypto.png" altText="Crypto" />
        </div>
        <div className="md:-ml-64 md:mr-64 md:col-start-2 md:col-span-1 hidden md:flex">
          <Box imageSrc="/images/Business.png" altText="Business" />
        </div>
        <div className="md:-ml-64 md:mr-64 md:col-start-3 md:col-span-1 hidden md:flex">
          <Box imageSrc="/images/Devices.png" altText="Devices" />
        </div>
      </div>
    </div>
  );
};

export default Boxes;
