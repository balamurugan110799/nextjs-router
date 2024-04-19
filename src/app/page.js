import Image from "next/image";
import Head from 'next/head';

// import Im from "../../public/assets/"
export default function Home() {
  return (
    <main>
            <Head>
        {/* Add meta tags */}
        <title>My Page Title</title> {/* Specify the title of the page */}
        <meta name="description" content="Description of my page for SEO" /> {/* Add meta description */}
        <meta name="keywords" content="keyword1, keyword2, keyword3" /> {/* Add meta keywords */}
        {/* Add other meta tags as needed */}
      </Head>

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
