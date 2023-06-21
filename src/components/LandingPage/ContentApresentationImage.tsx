import Image from 'next/legacy/image';

export function ContentApresentationImage() {
  return (
    <div className="flex mt-16">
      <Image
        alt="Group-167"
        src="/images/Group-167.png"
        width={3840}
        height={900}
        layout='intrinsic'
      />
    </div>
  );
}
