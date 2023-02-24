import Image from "next/image";

export default function Avatar() {
  return (
    <div className="w-28 rounded-full overflow-hidden border-8 border-button/10">
      <Image
        priority
        src="https://avatars.githubusercontent.com/u/98334060?v=4"
        alt="alireza abedi avatar"
        width="300"
        height="300"
      />
    </div>
  );
}
