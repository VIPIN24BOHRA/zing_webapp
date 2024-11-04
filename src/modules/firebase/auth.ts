/* eslint-disable simple-import-sort/imports */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable  @typescript-eslint/return-await */

import * as admin from 'firebase-admin'
import { sanitizePath } from './firebase'

export const createCustomToken = async (uid: string) => {
  return await admin.auth().createCustomToken(uid)
}
