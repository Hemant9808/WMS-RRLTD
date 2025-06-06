import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { forgotPassword } from '@/redux/slices/authSlice';
import { setEmail } from '@/redux/slices/uiSlice';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    dispatch(setEmail(data.email));
    dispatch(forgotPassword(data.email))
      .unwrap()
      .then(() => {
        navigate('/auth/verify-code');
      })
      .catch(() => {
        // Error is handled by the auth slice
      });
  };

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2 text-left">
        <h1 className="text-2xl font-bold">Forgot Password?</h1>
        <p className="text-sm text-gray-500">Enter your email for verification code.</p>
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
                      placeholder="johndoe@gmail.com"
                      className="h-12 bg-background"
                      disabled={loading}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full rounded-3xl bg-[#7ba83c] py-5 hover:bg-[#6c973a]" 
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Create account'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;