import { AxiosError } from 'axios'
import { toast } from 'sonner'

interface ApiErrorResponse {
  success: false
  error: string
  message: string
  code: string
  details?: Array<{
    field: string
    message: string
    code: string
  }>
}

export const handleApiError = (error: unknown, fallbackMessage: string = 'An error occurred') => {
  if (error instanceof AxiosError && error.response?.data) {
    const apiError = error.response.data as ApiErrorResponse

    // Validation errors
    if (apiError.details && apiError.details.length > 0) {
      const errorList = apiError.details.map((detail) => `• ${detail.message}`).join('\n')

      toast.error(apiError.error || 'Validation Error', {
        description: errorList,
      })
      return
    }

    // General API error
    toast.error(apiError.error || 'Error', {
      description: apiError.message || fallbackMessage,
    })
    return
  }

  // Unknown error
  toast.error('Error', {
    description: fallbackMessage,
  })
}
