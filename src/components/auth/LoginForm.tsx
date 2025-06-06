import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { login } from '@/redux/slices/authSlice';
import { togglePasswordVisibility } from '@/redux/slices/uiSlice';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

// Form validation schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);
  const { isPasswordVisible } = useAppSelector((state) => state.ui);

  // Initialize form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    dispatch(login(data))
      .unwrap()
      .then(() => {
        navigate('/dashboard');
      })
      .catch(() => {
        // Error is handled by the auth slice
      });
  };

  const handleTogglePassword = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <div className="w-full space-y-6 ">
      <div className="space-y-2 text-left">
        <h1 className="text-2xl font-bold">Credentials</h1>
        <p className="text-xs text-gray-500">Must be at least 8 characters</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Label className="sr-only" htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="User Id"
                      className="h-12 bg-background pl-10"
                      disabled={loading}
                      {...field}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Label className="sr-only" htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type={isPasswordVisible ? 'text' : 'password'}
                      placeholder="Password"
                      className="h-12 bg-background pl-10"
                      disabled={loading}
                      {...field}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                        <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                        <circle cx="16.5" cy="7.5" r=".5" />
                      </svg>
                    </div>
                    <div 
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
                      onClick={handleTogglePassword}
                    >
                      {isPasswordVisible ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-500" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Link 
              to="/auth/forgot-password" 
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Forgot Password?
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[#7ba83c] py-6 hover:bg-[#6c973a]" 
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Create account'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;