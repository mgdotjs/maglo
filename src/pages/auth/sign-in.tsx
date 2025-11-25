import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from '@/hooks/useAuth'
import { loginSchema, type LoginFormData } from '@/schemas/auth.schema'

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

export default function SignIn() {
  useDocumentTitle('Sign In')

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { mutate: login, isPending } = useLogin()

  const onSubmit = (values: LoginFormData) => {
    login(values)
  }

  return (
    <AuthLayout page="sign-in">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-text-1 dark:text-gray-1 mb-1">
          Sign In
        </h1>
        <p className="text-sm md:text-base text-text-3 dark:text-gray-2">
          Welcome back! Please enter your details
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  <Input
                    type="password"
                    placeholder="• • • • • • • •"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-2" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span className="animate-pulse">Signing in...</span>
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>
      </Form>
    </AuthLayout>
  )
}
