import { mockSurveyResultModel } from '../../domain/test'
import { type LoadSurveyResultRepository } from '../protocols/db/survey-result/load-survey-result-repository'
import { type SaveSurveyResultParams, type SaveSurveyResultRepository, type SurveyResultModel } from '../usecases/survey-result/save-survey-result/db-save-survey-result-protocols'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<void> {
      await new Promise(resolve => { resolve('') })
    }
  }
  return new SaveSurveyResultRepositoryStub()
}

export const mockLoadSurveyResultRepository = (): LoadSurveyResultRepository => {
  class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
    async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
      return await new Promise(resolve => { resolve(mockSurveyResultModel()) })
    }
  }
  return new LoadSurveyResultRepositoryStub()
}
