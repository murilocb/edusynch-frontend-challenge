import React, { useState } from 'react';
import Button from './Button';
import CustomContent from './CustomContent';

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <p className="text-white font-bold">Loading...</p>
    </div>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dynamicClassNames = {
    container: 'text-white space-y-2 flex-auto w-96',
    title: 'text-neutral-200 text-xl font-semibold',
    subtitle: 'text-4xl font-semibold',
    paragraph: '',
  };

  const dynamicTextContent = {
    title: 'Lorem ipsum',
    subtitle: 'Lorem ipsu',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating an asynchronous action, e.g., API call
    //const response = await axios.post('/endpoint', { email });
    // This is await for response server then after this do below i can use with try catch finally

    // Simulating an asynchronous action, e.g., API call
    setTimeout(() => {
      // After the action is complete, you can handle the success/failure logic
      console.log('Subscribed:', email);
      setEmail('');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full">
      <div className="bg-color-newsletter h-412 flex justify-center items-center mt-28">
        <div>
          <div className="flex">
            <CustomContent
              classNames={dynamicClassNames}
              textContent={dynamicTextContent}
            />
            <form onSubmit={handleSubmit} className="flex-auto w-96 ml-96">
              <label htmlFor="email" className="text-white block mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full py-3 px-4 rounded shadow-lg"
                placeholder="Email"
                required
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="mt-4 bg-customYellow text-white py-3 px-4 rounded-full shadow-lg w-full"
                disabled={isLoading}
              >
                {isLoading ? <Loading /> : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
