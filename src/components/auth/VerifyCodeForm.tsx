import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { verifyResetCode } from '@/redux/slices/authSlice';
import { setVerificationCode } from '@/redux/slices/uiSlice';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const verifyCodeSchema = z.object({
  code: z
    .string()
    .min(6, { message: 'Verification code must be at least 6 digits' })
    .max(6, { message: 'Verification code must be at most 6 digits' }),
});

type VerifyCodeFormValues = z.infer<typeof verifyCodeSchema>;

const VerifyCodeForm = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth) || false;
  const { email } = useAppSelector((state) => state.ui) || {};

  const form = useForm<VerifyCodeFormValues>({
    resolver: zodResolver(verifyCodeSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (data: VerifyCodeFormValues) => {
    dispatch(setVerificationCode(data.code));
    dispatch(verifyResetCode({ email, code: data.code }))
      .unwrap()
      .then(() => {
        // navigate('/auth/reset-password');
      })
      .catch(() => {
        // Error is handled by the auth slice
      });
  };

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Enter your Code</h1>
        <p className="text-sm text-gray-500">
          We sent a code to {email || 'your email'}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex justify-center">
            {/* <InputOTP
              maxLength={6}
              value={form.watch('code')}
              onChange={(value) => form.setValue('code', value)}
              disabled={loading}
              render={({ slots }) => (
                <div className="flex w-full gap-2">
                  <InputOTPGroup>
                    {slots.map((slot, index) => (
                      <InputOTPSlot
                        index={index} key={index}
                        {...slot}
                        className="h-12 w-12 rounded-md border-input bg-[#f5f8f0]"                      />
                    ))}
                  </InputOTPGroup>
                </div>
              )}
            /> */}

            <InputOTP
  maxLength={6}
  value={form.watch('code')}
  onChange={(value) => form.setValue('code', value)}
  disabled={loading}
  render={({ slots }) => {
   console.log('slots:', slots)
  return (
    <InputOTPGroup>
      {slots.map((_, index) => (
        <InputOTPSlot key={index} index={index} />
      ))}
    </InputOTPGroup>
  );
  }}
/>

          </div>

          <Button
            type="submit"
            className="w-full bg-[#7ba83c] py-6 hover:bg-[#6c973a]"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Create account'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default VerifyCodeForm;