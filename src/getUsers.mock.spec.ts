import { getUser } from './getUsers';
import {findUser} from './user'

jest.mock('./user')

// jest.mock('library/db', () => {
//   const actual = jest.requireActual('library/db');
//   return {
//       ...actual,
//       isActive: jest.fn(),
//   };
// });

describe("When testing getUser with jest mock", ()=>{
  const findUserMock = findUser as jest.Mock


  it("should return active user", async()=>{
      findUserMock.mockResolvedValue({
        id: 10,
        username: 'mocked username',
        active: true
      })

      const user = await getUser(10);

      expect(findUserMock).toBeCalledTimes(1);
      expect(user.id).toBe(10);
      expect(user.active).toBeTruthy();
  })
})