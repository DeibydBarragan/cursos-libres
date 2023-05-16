import Layout from '@/components/layout/layout';
import HomeSection from '../components/sections/home/homeSection';
import CoursesSection from './../components/coursesSection/coursesSection';
import InscriptionForm from '@/components/sections/inscriptionSection/inscriptionSection';
import InfoSection from '@/components/sections/info/infoSection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Cursos libres</title>
        </Head>
        <HomeSection/>
        <CoursesSection/>
        <InfoSection/>
        <InscriptionForm/>
      </Layout>
    </>
  )
}
