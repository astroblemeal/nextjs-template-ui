import { Expose } from 'class-transformer'

export class LoginForm {
  @Expose()
  email: string

  @Expose()
  password: string
}
