import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import PageTitle from '../components/shared/PageTitle';

// PUBLIC_INTERFACE
const Dashboard = () => {
  const stats = [
    { title: 'Enrolled Courses', value: '5' },
    { title: 'In Progress', value: '3' },
    { title: 'Completed', value: '2' },
    { title: 'Achievements', value: '8' }
  ];

  return (
    <>
      <PageTitle
        title="Dashboard"
        subtitle="Welcome back! Here's your learning progress"
      />
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <Box sx={{ mb: 1 }}>
                <Typography variant="h4" sx={{ color: '#E87A41' }}>
                  {stat.value}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {stat.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;
