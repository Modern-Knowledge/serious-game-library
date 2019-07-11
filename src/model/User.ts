import { Model } from "./Model";

export default class User implements Model<User> {
  public fromMySQL(result: any): void {
    console.log(result);
  }

  getParamArray(): string[] {
    return [];
  }

}
