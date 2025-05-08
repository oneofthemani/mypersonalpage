import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Image
      src="/assets/images/profile.jpg"
      width={200}
      height={200}
      alt="Picture of the creater of this blog, Kaan Koçak"
    />
    <p className="text-sky-600">Hi everybody, here is Kaan! And I am here for blogging my entries one by one every day. 
      This place will be also one of my projects as I will be constantly improving here.
    </p>

    
    </div>
  );
}
