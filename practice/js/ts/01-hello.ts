// db (key, value) (key:string, value: {id, fname, lname, contact{mob}, email, address{city, pin, state,country}})

type UserID = string;

interface User {
  id: UserID;
  fname: string;
  lname?: string;
  email: string;
  contact: {
    mobile: number;
  };
  address: {
    city: string;
    pincode: number;
    state: string;
    country: string;
  };
}

class UserInfo {
  private _db: Map<UserID, User>;

  constructor() {
    this._db = new Map<UserID, User>();
  }

  public insertUser(user: User): UserID {
    if (this._db.has(user.id))
      throw new Error(`User with this id ${user.id} already exists.`);
    this._db.set(user.id, user);
    return user.id;
  }

  public getUserById(id: UserID): User {
    if (!this._db.has(id)) throw new Error(`User not found with this id ${id}`);
    const user: User = this._db.get(id)!;
    return user;
  }
}

const user = new UserInfo();
user.insertUser({
  id: "1",
  fname: "Vishal",
  lname: "Baghel",
  email: "vishal@gmail.com",
  contact: {
    mobile: 99999999,
  },
  address: {
    city: "Jalesar",
    pincode: 207302,
    state: "UP",
    country: "IN",
  },
});

user.insertUser({
  id: "2",
  fname: "Vishal",
  lname: "Baghel",
  email: "vishal@gmail.com",
  contact: {
    mobile: 99999999,
  },
  address: {
    city: "Jalesar",
    pincode: 207302,
    state: "UP",
    country: "IN",
  },
});

console.log(user.getUserById("2"));
