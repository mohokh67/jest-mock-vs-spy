export type User = {
  id: number
  username: string
  active: boolean
}

const isActive = (userId: number):boolean => userId % 2 === 0;

export const findUser = async (id: number): Promise<User> =>{
  console.log('We are in findUser() line 10');
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    id,
    username: `username ${id}`,
    active: isActive(id)
  }
}