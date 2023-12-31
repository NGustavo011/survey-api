import { RequiredFieldValidation, ValidationComposite } from '../../../../../validation/validators'
import { type Validation } from '../../../../../presentation/protocols/validation'

export const makeAddSurveyValidation = (): Validation => {
  const validations: Validation[] = []
  for (const field of ['question', 'answers']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
