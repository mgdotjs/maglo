export interface User {
  id: string
  fullName: string
  email: string
  role?: string
  isActive?: boolean
  lastLoginAt?: string
  lastLoginIP?: string
  createdAt?: string
  updatedAt?: string
  image?: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  fullName: string
  email: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message: string
  data: {
    user: User
    accessToken: string
  }
}

export interface RegisterResponse {
  success: boolean
  message: string
  data: {
    id: string
    fullName: string
    email: string
  }
}

export interface RefreshTokenResponse {
  accessToken: string
}
