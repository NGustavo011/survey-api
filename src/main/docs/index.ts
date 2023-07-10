import { badRequest } from './components/responses/bad-request'
import { forbidden } from './components/responses/forbidden'
import { notFound } from './components/responses/not-found'
import { serverError } from './components/responses/server-error'
import { unauthorized } from './components/responses/unauthorized'
import { loginPath } from './paths/login-path'
import { surveyPath } from './paths/survey-path'
import { accountSchema } from './schemas/account-schema'
import { apiKeyAuthSchema } from './schemas/api-key-auth-schema'
import { errorSchema } from './schemas/error-schema'
import { loginParamsSchema } from './schemas/login-params-schema'
import { surveyAnswerSchema } from './schemas/survey-answer-schema'
import { surveySchema } from './schemas/survey-schema'
import { surveysSchema } from './schemas/surveys-schema'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API do curso do Mango para realizar enquetes entre programadores',
    version: '1.0.0'
  },
  licenses: {
    name: 'MIT',
    url: 'https://opensource.org/license/mit/'
  },
  servers: [{
    url: '/api'
  }],
  tags: [
    {
      name: 'Login'
    },
    {
      name: 'Enquetes'
    }
  ],
  paths: {
    '/login': loginPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    survey: surveySchema,
    surveys: surveysSchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    serverError,
    notFound,
    forbidden
  }
}