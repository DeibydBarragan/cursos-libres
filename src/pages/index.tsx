import Layout from '@/components/layout/layout';
import HomeSection from '../components/sections/home/homeSection';
import CoursesSection from './../components/coursesSection/coursesSection';
import InscriptionForm from '@/components/sections/inscriptionSection/inscriptionSection';
import InfoSection from '@/components/sections/info/infoSection';

export default function Home() {
  return (
    <>
      <Layout>
        <HomeSection/>
        <CoursesSection/>
        <InfoSection/>
        <InscriptionForm/>
      </Layout>
    </>
  )
}
