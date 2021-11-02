import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
