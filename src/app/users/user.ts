import { Address } from "../shared/address/address";

export class User {
 id: number;
 username: string;
 status: string;
 age: number;
 city: string;
 addresses: Address[]
}
