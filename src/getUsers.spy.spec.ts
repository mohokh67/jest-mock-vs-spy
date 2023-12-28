import { getUser } from "./getUsers";
import * as userFunctions from "./user";

describe("It should test getUser function", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("It should test active user", async () => {
    jest.spyOn(userFunctions, "findUser").mockResolvedValue({
      id: 10,
      username: "spy username",
      active: true,
    });
    jest.spyOn(console, "log").mockImplementation();
    const user = await getUser(10);
    expect(user.id).toBe(10);
    expect(user.active).toBeTruthy();
  });

  it("Should test inactive user", async () => {
    jest.spyOn(userFunctions, "findUser").mockResolvedValue({
      id: 11,
      username: "syp username",
      active: false,
    });
    const user = await getUser(11);
    expect(user.id).toBe(11);
    expect(user.active).toBeFalsy();
  });
});
