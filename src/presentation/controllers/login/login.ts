import { badRequest, ok, serverError, unauthorized } from '../../helpers/http/http-helper'
import { type Controller, type HttpRequest, type HttpResponse, type Authentication, type Validation } from './login-protocols'

export class LoginController implements Controller {
  constructor (readonly authentication: Authentication, readonly validation: Validation) {
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body
      const accessToken = await this.authentication.auth({ email, password })
      if (!accessToken) { return unauthorized() }
      return ok({
        accessToken
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
