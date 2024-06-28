import dynamic from 'next/dynamic';
import Head from 'next/head';


const Banner = dynamic(() => import('@/components/UI/banner'));
const About = dynamic(() => import('@/components/UI/about'));
const Booking = dynamic(() => import('@/components/UI/booking'));
const Services = dynamic(() => import('@/components/UI/services'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page - orbi-Directory</title>
        <meta name="description" content="Welcome to the home page of orbi-directory" />
      </Head>
      <main>
        <Banner title="Welcome to Our Service" />
        <About description="We are dedicated to providing the best service." />
        <Booking />
        <Services />
      </main>
    </>
  );
}
