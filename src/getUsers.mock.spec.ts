import { getUser } from "./getUsers";
import { findUser } from "./user";

jest.mock("./user");

describe.skip("It should test getUser function", () => {
  const findUserMock = findUser as jest.Mock;
  it("test getUser with different IDs", async () => {
    findUserMock.mockResolvedValue({
      id: 10,
      username: "mocked username",
      active: true,
    });
    const user = await getUser(10);
    expect(user.id).toBe(10);
    expect(findUserMock).toHaveBeenCalledTimes(1);
    expect(user.active).toBeTruthy();
  });
});
