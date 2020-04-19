export class UserModel {
    name: string;

    constructor(raw: any) {
        this.name = raw.name;
    }
}