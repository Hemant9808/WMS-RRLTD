// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { EyeIcon, EyeOffIcon } from 'lucide-react';

// import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
// import { resetPassword } from '@/redux/slices/authSlice';
// import { togglePasswordVisibility } from '@/redux/slices/uiSlice';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
// import { Progress } from '@/components/ui/progress';

// const resetPasswordSchema = z
//   .object({
//     password: z
//       .string()
//       .min(8, { message: 'Password must be at least 8 characters' }),
//     password_confirmation: z
//       .string()
//       .min(8, { message: 'Password confirmation must be at least 8 characters' }),
//   })
//   .refine((data) => data.password === data.password_confirmation, {
//     message: "Passwords don't match",
//     path: ['password_confirmation'],
//   });

// type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

// const ResetPasswordForm = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { loading } = useAppSelector((state) => state.auth);
//   const { email, verificationCode, isPasswordVisible } = useAppSelector((state) => state.ui);
//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const [strengthText, setStrengthText] = useState('');

//   // Initialize form
//   const form = useForm<ResetPasswordFormValues>({
//     resolver: zodResolver(resetPasswordSchema),
//     defaultValues: {
//       password: '',
//       password_confirmation: '',
//     },
//   });

//   const calculatePasswordStrength = (password: string) => {
//     if (!password) {
//       setPasswordStrength(0);
//       setStrengthText('');
//       return;
//     }

//     // Simple password strength calculation
//     let strength = 0;
    
//     // Length check
//     if (password.length >= 8) strength += 25;
    
//     // Complexity checks
//     if (/[A-Z]/.test(password)) strength += 25; // Has uppercase
//     if (/[0-9]/.test(password)) strength += 25; // Has number
//     if (/[^A-Za-z0-9]/.test(password)) strength += 25; // Has special char
    
//     setPasswordStrength(strength);
    
//     if (strength < 25) {
//       setStrengthText('weak');
//     } else if (strength < 75) {
//       setStrengthText('medium');
//     } else {
//       setStrengthText('strong');
//     }
//   };

//   const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     form.setValue('password', value);
//     calculatePasswordStrength(value);
//   };

//   const onSubmit = async (data: ResetPasswordFormValues) => {
//     if (!email || !verificationCode) {
//       // navigate('/auth/forgot-password');
//       return;
//     }

//     dispatch(
//       resetPassword({
//         email,
//         code: verificationCode,
//         password: data.password,
//         password_confirmation: data.password_confirmation,
//       })
//     )
//       .unwrap()
//       .then(() => {
//         navigate('/auth/login');
//       })
//       .catch(() => {
//         // Error is handled by the auth slice
//       });
//   };

//   const handleTogglePassword = () => {
//     dispatch(togglePasswordVisibility());
//   };

//   return (
//     <div className="w-full space-y-6">
//       <div className="space-y-2 text-left">
//         <h1 className="text-2xl font-bold">Set new Password</h1>
//         <p className="text-sm text-gray-500">Must be at least 8 characters</p>
//       </div>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="relative">
//                     <Label className="sr-only" htmlFor="new-password">New Password</Label>
//                     <Input
//                       id="new-password"
//                       type={isPasswordVisible ? 'text' : 'password'}
//                       placeholder="New Password"
//                       className="h-12 bg-background pl-10"
//                       disabled={loading}
//                       {...field}
//                       onChange={onPasswordChange}
//                     />
//                     <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
//                         <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
//                         <circle cx="16.5" cy="7.5" r=".5" />
//                       </svg>
//                     </div>
//                     <div 
//                       className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
//                       onClick={handleTogglePassword}
//                     >
//                       {isPasswordVisible ? (
//                         <EyeOffIcon className="h-5 w-5 text-gray-500" />
//                       ) : (
//                         <EyeIcon className="h-5 w-5 text-gray-500" />
//                       )}
//                     </div>
//                   </div>
//                 </FormControl>
//                 {field.value && (
//                   <div className="mt-2 space-y-1">
//                     <Progress value={passwordStrength} className="h-1" />
//                     <div className="flex justify-end">
//                       <span className={`text-xs ${
//                         strengthText === 'weak' ? 'text-red-500' :
//                         strengthText === 'medium' ? 'text-yellow-500' :
//                         strengthText === 'strong' ? 'text-green-500' : ''
//                       }`}>
//                         {strengthText && `Your password is ${strengthText}`}
//                       </span>
//                     </div>
//                   </div>
//                 )}
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="password_confirmation"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="relative">
//                     <Label className="sr-only" htmlFor="confirm-password">Confirm Password</Label>
//                     <Input
//                       id="confirm-password"
//                       type={isPasswordVisible ? 'text' : 'password'}
//                       placeholder="Confirm Password"
//                       className="h-12 bg-background pl-10"
//                       disabled={loading}
//                       {...field}
//                     />
//                     <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
//                         <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
//                         <circle cx="16.5" cy="7.5" r=".5" />
//                       </svg>
//                     </div>
//                     <div 
//                       className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
//                       onClick={handleTogglePassword}
//                     >
//                       {isPasswordVisible ? (
//                         <EyeOffIcon className="h-5 w-5 text-gray-500" />
//                       ) : (
//                         <EyeIcon className="h-5 w-5 text-gray-500" />
//                       )}
//                     </div>
//                   </div>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button 
//             type="submit" 
//             className="w-full rounded-3xl bg-[#7ba83c] py-5 hover:bg-[#6c973a]" 
//             disabled={loading}
//           >
//             {loading ? 'Resetting...' : 'Reset Password'}
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default ResetPasswordForm;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { resetPassword } from '@/redux/slices/authSlice';
import { togglePasswordVisibility } from '@/redux/slices/uiSlice';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    password_confirmation: z
      .string()
      .min(8, { message: 'Password confirmation must be at least 8 characters' }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ['password_confirmation'],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);
  const { email, verificationCode, isPasswordVisible } = useAppSelector((state) => state.ui);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthText, setStrengthText] = useState('');

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      password_confirmation: '',
    },
  });

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;

    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;

    setPasswordStrength(strength);

    if (strength < 25) {
      setStrengthText('weak');
    } else if (strength < 75) {
      setStrengthText('medium');
    } else {
      setStrengthText('strong');
    }
  };
console.log(passwordStrength, strengthText);
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    form.setValue('password', value);
    calculatePasswordStrength(value);
  };

  const onSubmit = async (data: ResetPasswordFormValues) => {
    if (!email || !verificationCode) return;

    dispatch(
      resetPassword({
        email,
        code: verificationCode,
        password: data.password,
        password_confirmation: data.password_confirmation,
      })
    )
      .unwrap()
      .then(() => {
        navigate('/auth/login');
      })
      .catch(() => {});
  };

  const handleTogglePassword = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2 text-left">
        <h1 className="text-2xl font-bold">Set new Password</h1>
        <p className="text-sm text-gray-500">Must be at least 8 characters</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Label className="sr-only" htmlFor="new-password">
                      New Password
                    </Label>
                    <Input
                      id="new-password"
                      type={isPasswordVisible ? 'text' : 'password'}
                      placeholder="New Password"
                      className="h-12 bg-background pl-10"
                      disabled={loading}
                      {...field}
                      onChange={onPasswordChange}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground"
                      >
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

                {/* Password Strength Indicator */}
                {field.value && (
                  <div className="mt-2 space-y-1">
                    <div className="flex gap-2">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                            i < passwordStrength / 25
                              ? strengthText === 'weak'
                                ? 'bg-red-500'
                                : strengthText === 'medium'
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                              : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <span
                        className={`text-xs font-medium ${
                          strengthText === 'weak'
                            ? 'text-red-500'
                            : strengthText === 'medium'
                            ? 'text-yellow-600'
                            : 'text-green-600'
                        }`}
                      >
                        Your password is {strengthText}
                      </span>
                    </div>
                  </div>
                )}

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password_confirmation"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Label className="sr-only" htmlFor="confirm-password">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type={isPasswordVisible ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      className="h-12 bg-background pl-10"
                      disabled={loading}
                      {...field}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground"
                      >
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

          <Button
            type="submit"
            className="w-full rounded-3xl bg-[#7ba83c] py-5 hover:bg-[#6c973a]"
            disabled={loading}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
