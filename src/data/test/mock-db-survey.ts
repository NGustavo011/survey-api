import { type SurveyModel } from '../../domain/models/survey'
import { mockSurveyModel, mockSurveyModels } from '../../domain/test'
import { type AddSurveyRepository } from '../protocols/db/survey/add-survey-repository'
import { type LoadSurveyByIdRepository } from '../protocols/db/survey/load-survey-by-id-repository'
import { type LoadSurveysRepository } from '../protocols/db/survey/load-surveys-repository'
import { type AddSurveyParams } from '../usecases/survey/add-survey/db-add-survey-protocols'

export const mockAddSurveyRepository = (): AddSurveyRepository => {
  class AddSurveyRepositoryStub implements AddSurveyRepository {
    async add (surveyData: AddSurveyParams): Promise<void> {
      await new Promise(resolve => { resolve('') })
    }
  }
  return new AddSurveyRepositoryStub()
}

export const mockLoadSurveyByIdRepository = (): LoadSurveyByIdRepository => {
  class LoadSurveyByIdRepositoryStub implements LoadSurveyByIdRepository {
    async loadById (id: string): Promise<SurveyModel> {
      return await new Promise(resolve => { resolve(mockSurveyModel()) })
    }
  }
  return new LoadSurveyByIdRepositoryStub()
}

export const mockLoadSurveysRepository = (): LoadSurveysRepository => {
  class LoadSurveysRepositoryStub implements LoadSurveysRepository {
    async loadAll (): Promise<SurveyModel[]> {
      return await new Promise(resolve => { resolve(mockSurveyModels()) })
    }
  }
  return new LoadSurveysRepositoryStub()
}
