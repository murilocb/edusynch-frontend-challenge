const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="text-red-500 text-sm -mt-4 mb-2">
      <p className="">{message}</p>
    </div>
  );
};

export default ErrorMessage;
