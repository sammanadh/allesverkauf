import { Client, Account, TablesDB } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('69482f7a003acdf094e9'); // Replace with your project ID

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
export { ID } from 'appwrite';