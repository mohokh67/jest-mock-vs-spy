import { getUser } from './getUsers';
import * as userFunctions from './user'

describe("When testing getUser with jest spy", ()=>{
  afterEach(()=>{
    jest.restoreAllMocks();
  })

  it("should return active user", async()=>{
    jest.spyOn(userFunctions, 'findUser').mockResolvedValueOnce({
      id: 10,
      username: 'spy username',
      active: true
    })
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation()
    const user = await getUser(10);

    expect(user.id).toBe(10);
    expect(user.username).toBe('spy username');
    expect(user.active).toBeTruthy();

    // consoleLogSpy.mockRestore();
  });

  it("should return inactive user", async()=>{
    jest.spyOn(userFunctions, 'findUser').mockResolvedValueOnce({
      id: 11,
      username: 'spy username',
      active: false
    })
    const user = await getUser(11);

    expect(user.id).toBe(11);
    expect(user.username).toBe('spy username');
    expect(user.active).toBeFalsy();
  })

})