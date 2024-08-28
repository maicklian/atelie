import { ID, Account, Databases, Client } from 'react-native-appwrite'

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    plataform: 'com.edmk.atelie',
    projectId: '66cf280b000c31831e9f',
    databaseId: '66cf2ca2001175e766e8',
    userCollectionId: '66cf2cc2003cb00b6c8a',
    storageId: '66cf3ef8001c4dc1940d'
}

// Init your React Native SDK
const client = new Client()

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.plataform) // Your application ID or bundle ID.
;

const account = new Account(client)
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error

        await signIn(email, password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username
            }
        )
        return newUser
    }catch(error){
        console.log(error)
        throw new Error(error)
    }
}

export async function signIn(email, password){
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session
    }catch(error){
        throw new Error(error)
    }
}