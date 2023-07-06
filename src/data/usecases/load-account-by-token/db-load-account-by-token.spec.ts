import { type Decrypter } from '../../protocols/cryptography/decrypter'
import { DbLoadAccountByToken } from './db-load-account-by-token'

interface SutTypes {
  decrypterStub: Decrypter
  sut: DbLoadAccountByToken
}

const makeDecrypterStub = (): Decrypter => {
  class DecrypterStub implements Decrypter {
    async decrypt (value: string): Promise<string | null> {
      return await new Promise(resolve => { resolve('any_value') })
    }
  }
  return new DecrypterStub()
}

const makeSut = (): SutTypes => {
  const decrypterStub = makeDecrypterStub()
  const sut = new DbLoadAccountByToken(decrypterStub)
  return {
    sut,
    decrypterStub
  }
}

describe('DbLoadAccountByToken Usecase', () => {
  test('Deve chamar o Decrypter com os valores corretos', async () => {
    const { sut, decrypterStub } = makeSut()
    const decryptSpy = jest.spyOn(decrypterStub, 'decrypt')
    await sut.load('any_token', 'any_role')
    expect(decryptSpy).toHaveBeenCalledWith('any_token')
  })
  test('Deve retornar null se o Decrypter retornar null', async () => {
    const { sut, decrypterStub } = makeSut()
    jest.spyOn(decrypterStub, 'decrypt').mockReturnValueOnce(new Promise(resolve => { resolve(null) }))
    const account = await sut.load('any_token', 'any_role')
    expect(account).toBeNull()
  })
})
