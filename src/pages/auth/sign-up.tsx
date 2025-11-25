import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRegister } from '@/hooks/useAuth'
import { registerSchema, type RegisterFormData } from '@/schemas/auth.schema'

import AuthLayout from '@/components/layout/auth-layout'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function SignUp() {
  useDocumentTitle('Sign Up')

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  })

  const { mutate: register, isPending } = useRegister()

  const onSubmit = (data: RegisterFormData) => {
    register(data)
  }

  return (
    <AuthLayout page="sign-up">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-text-1 dark:text-gray-1 mb-1">
          Create new account
        </h1>
        <p className="text-sm md:text-base text-text-3 dark:text-gray-2">
          Welcome back! Please enter your details
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Full Name" disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    disabled={isPending}
                    {...field}
                  />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-2" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span className="animate-pulse">Creating account...</span>
              </>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>
      </Form>
    </AuthLayout>
  )
}
