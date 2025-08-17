declare module 'better-sqlite3' {
  type RunResult = { lastInsertRowid: number; changes: number };
  type Statement = {
    run(...args: any[]): RunResult;
    get(...args: any[]): any;
    all(...args: any[]): any[];
  };
  class Database {
    constructor(path: string, options?: any);
    prepare(sql: string): Statement;
    exec(sql: string): void;
  }
  export default Database;
}
