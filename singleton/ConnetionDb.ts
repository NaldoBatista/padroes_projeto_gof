export class ConnectionDb {
    private static _connectionDb: ConnectionDb;

    private constructor() {}

    static getInstance(): ConnectionDb {
        if (this._connectionDb == null || this._connectionDb == undefined) {
            this._connectionDb = new ConnectionDb();
        }

        return this._connectionDb;
    }
}