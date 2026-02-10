'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';

import { useRouter } from 'next/navigation';

const steps = ['Welcome', 'Get Started'];

export default function OnboardingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      router.push('/login');
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Image
            src="/onboarding.png"
            alt="Onboarding"
            width={200}
            height={200}
            style={{ margin: '20px auto' }}
          />

          <Typography variant="h6">
            {activeStep === 0
              ? 'Welcome to our App'
              : 'Ready to start your journey'}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            {activeStep === 0
              ? 'Simple, fast and secure experience.'
              : 'Login and explore amazing features.'}
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleNext}
          >
            {activeStep === 1 ? 'Get Started' : 'Next'}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
