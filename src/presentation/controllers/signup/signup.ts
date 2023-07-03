import { badRequest, ok, serverError } from '../../helpers/http/http-helper'
import { type Controller, type HttpRequest, type HttpResponse, type AddAccount, type Validation } from './signup-protocols'

export class SignUpController implements Controller {
  constructor (readonly addAccount: AddAccount, readonly validation: Validation) {
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = httpRequest.body
      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
