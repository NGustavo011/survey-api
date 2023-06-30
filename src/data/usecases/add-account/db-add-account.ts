import { type AddAccountRepository, type AccountModel, type AddAccount, type AddAccountModel, type Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (readonly encrypter: Encrypter, readonly addAccountRepository: AddAccountRepository) {
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const account = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return account
  }
}
