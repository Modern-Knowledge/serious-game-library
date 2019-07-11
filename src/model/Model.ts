export interface Model<T> {
  fromMySQL(result: any): void;
  getParamArray(): string[];
}
