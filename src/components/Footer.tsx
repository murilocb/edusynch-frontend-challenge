interface Props {}

export function Footer(props: Props) {
  return (
    <p className="mt-4 text-center text-sm text-dark sm:text-base md:text-base lg:text-base xl:text-base">
      Copyright © {new Date().getFullYear()} - All rights reserved
    </p>
  );
}
