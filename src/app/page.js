import Image from "next/image";
import Head from 'next/head';

// import Im from "../../public/assets/"
export default function Home() {
  return (
    <main>
         

      Welcome World
      <Image
        src="/assets/react.png" // Specify the path to your image
        alt="Description of the image" // Add an alt attribute for accessibility
        width={500} // Set the width of the image
        height={300} // Set the height of the image
      />
    </main>
  );
}
