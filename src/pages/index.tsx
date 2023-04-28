import Layout from '@/components/layout/layout';
import HomeSection from '../components/home/homeSection';
import CoursesSection from './../components/coursesSection/coursesSection';

export default function Home() {
  return (
    <>
      <Layout>
        <HomeSection/>
        <CoursesSection/>
      </Layout>
    </>
  )
}
