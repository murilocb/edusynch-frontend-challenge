import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import { useEffect, useRef } from 'react';
import SignUp from './SignUp';
import { useModal } from '@/utils/handleModals';
import { HiArrowSmallRight } from 'react-icons/hi2';
import Button from './Button';

interface Props {}

export function ContentApresentation(props: Props) {
  const settings: Settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  };

  const [
    showSignInModal,
    showSignUpModal,
    showTransferModal,
    showAddCryptoModal,
    handleOpenSignInModal,
    handleOpenSignUpModal,
    handleOpenTransferModal,
    handleOpenAddCryptoModal,
    handleCloseSignUpModal,
    handleCloseSignInModal,
    handleCloseTransferModal,
    handleCloseAddCryptoModal,
  ] = useModal();

  const handleSignUpClick = () => {
    handleCloseSignInModal(); // Close the sign-in modal
    handleOpenSignUpModal(); // Open the sign-up modal
  };

  const handleSignInClick = () => {
    handleCloseSignUpModal();
    handleOpenSignInModal();
  };

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sliderNode = sliderRef.current;

      if (sliderNode?.innerSlider?.list) {
        const sliderRect = sliderNode.innerSlider.list.getBoundingClientRect();
        const isVisible =
          sliderRect.top < window.innerHeight && sliderRect.bottom > 0;

        if (isVisible) {
          sliderNode.slickNext();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row w-full pt-12 px-4 md:px-8 xl:px-72 space-x-0 md:space-x-20 justify-center items-center"
    >
      <div className="w-full md:w-2/4 md:ml-20">
        <div className="w-full md:w-3/4 space-y-6">
          <p className="text-customYellow text-3xl md:text-5xl font-bold leading-snug">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className="text-color-text text-base md:text-xl leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </div>
        <div className="flex">
        <Button
          onClick={handleSignUpClick}
          className="bg-customYellow w-full md:w-72 h-10 md:h-12 rounded-full text-white font-bold flex items-center justify-center mt-4 md:mt-8 mb-2 md:mb-20"
        >
          SIGN UP NOW{' '}
          <div className="ml-2">
            <HiArrowSmallRight />
          </div>
        </Button>

        {showSignUpModal && <SignUp onClose={handleCloseSignUpModal} />}
        </div>
        <Image
          alt="Frame-24"
          src="/images/Frame-24.png"
          width={339}
          height={40}
          priority
        />
      </div>
      <div className="w-full md:w-1/3 md:mt-0 md:mr-10 bg-white">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <Image
              alt="Carousel Image"
              src="/images/Carousel.png"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              alt="Carousel Image"
              src="/images/Carousel.png"
              width={500}
              height={500}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
