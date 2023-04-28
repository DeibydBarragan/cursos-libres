import { useState, createContext } from 'react';
import { coursesData } from './courses.data.d';
import { Course } from './interfaces';
type Props = {
  children: React.ReactNode
}

export const coursesContext = createContext({
  courses: coursesData,
  setCourses: (courses: Array<Course>) => {}
})

export function CoursesContextProvider({children}: Props) {
  const [courses, setCourses] = useState(coursesData)

  return (
    <coursesContext.Provider
      value={{
        courses,
        setCourses
      }}>
      {children}
    </coursesContext.Provider>
  )
}