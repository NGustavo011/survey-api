import { mockSurveyResultModel } from '../../domain/test'
import { type SaveSurveyResult, type SaveSurveyResultParams, type SurveyResultModel } from '../controllers/survey-result/save-survey-result/save-survey-result-controller-protocols'
import { type LoadSurveyResult } from '../../domain/usecases/survey-result/load-survey-result'

export const mockSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyResultStub implements SaveSurveyResult {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return await new Promise(resolve => { resolve(mockSurveyResultModel()) })
    }
  }
  return new SaveSurveyResultStub()
}

export const mockLoadSurveyResult = (): LoadSurveyResult => {
  class LoadSurveyResultStub implements LoadSurveyResult {
    async load (surveyId: string): Promise<SurveyResultModel | null> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new LoadSurveyResultStub()
}
