interface Props {}

export function Footer(props: Props) {
  return (
    <div className="flex justify-center items-center w-full bg-white shadow-2xl">
      <p className="text-sm text-dark sm:text-base md:text-base lg:text-base xl:text-base p-6">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </p>
    </div>
  );
}
