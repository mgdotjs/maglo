import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/query-client'

import { Toaster } from '@/components/ui/sonner'
import { ErrorBoundary } from '@/components/common/error-boundary'
import AuthInitializer from '@/components/auth/auth-initializer'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthInitializer>
          <App />
          <Toaster position="top-center" />
        </AuthInitializer>
      </BrowserRouter>
    </QueryClientProvider>
  </ErrorBoundary>,
)
