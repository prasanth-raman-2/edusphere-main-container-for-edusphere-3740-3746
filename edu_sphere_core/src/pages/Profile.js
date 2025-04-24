import React from 'react';
import { Paper, Grid, Typography, Avatar, Box, Divider } from '@mui/material';
import PageTitle from '../components/shared/PageTitle';

// PUBLIC_INTERFACE
const Profile = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate learner | Software Developer',
    joinDate: 'January 2024',
    stats: [
      { label: 'Courses Completed', value: '12' },
      { label: 'Certificates Earned', value: '8' },
      { label: 'Hours Spent Learning', value: '156' }
    ]
  };

  return (
    <>
      <PageTitle title="Profile" subtitle="Manage your account and view progress" />
      
      <Paper sx={{ p: 3, background: '#FFFFFF', boxShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                margin: 'auto',
                bgcolor: '#E87A41',
                fontSize: '3rem'
              }}
            >
              {userProfile.name.charAt(0)}
            </Avatar>
            <Typography variant="h6" sx={{ mt: 2 }}>
              {userProfile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userProfile.email}
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography variant="body1">
                {userProfile.bio}
              </Typography>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Grid container spacing={2}>
              {userProfile.stats.map((stat) => (
                <Grid item xs={12} sm={4} key={stat.label}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ color: '#E87A41' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Profile;
