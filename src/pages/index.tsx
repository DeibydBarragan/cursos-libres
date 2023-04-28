import Layout from '@/components/layout/layout';
import HomeSection from '../components/sections/home/homeSection';
import CoursesSection from './../components/coursesSection/coursesSection';
import InscriptionForm from '@/components/sections/inscriptionForm/inscriptionForm';

export default function Home() {
  return (
    <>
      <Layout>
        <HomeSection/>
        <CoursesSection/>
        <InscriptionForm/>
      </Layout>
    </>
  )
}
