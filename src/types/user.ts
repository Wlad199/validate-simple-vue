import IErrors from '@/types/errors'

export default interface IUser {
  name: string
  age: number | null
  email: string
  city: string
  education: string
  languages: string[]
  message: string
  agreement: boolean
  errors: IErrors
}
