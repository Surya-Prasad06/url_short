import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="bg-purple-200 flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl font-bold">the best url shortener</p>
          <p className="px-56 text-center">
            We are the most straightfoward URL Shortener in the world. Most of
            the url shorteners will track you or ask you to give your details
            for login. We understand your needs and hence we have created this
            URL shortener
          </p>
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-800 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-800 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Github</button></Link>
            </div>
        </div>
        <div className="bg-red-50 flex justify-start relative">
          <Image
            alt="vector"
            src={"/vector.jpg"}
            fill={true}
            className="mix-blend-darken"
          />
        </div>
      </section>
    </main>
  );
}
