import React from 'react';
import { Grid } from '@mui/material';
import CourseCard from '../components/shared/CourseCard';
import PageTitle from '../components/shared/PageTitle';
import { courses } from '../data/sampleCourses';

// PUBLIC_INTERFACE
const Courses = () => {

  return (
    <>
      <PageTitle
        title="Courses"
        subtitle="Explore our available courses and start learning"
      />
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <CourseCard
              title={course.title}
              description={course.description}
              category={course.category}
              onClick={() => console.log(`Clicked course: ${course.id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Courses;
