import conf from "../conf/conf";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    // Create Post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, // This should be your Table ID
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    // Update Post
    async updatePost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, // Table ID
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }
    async deletePost(slug){
    
        try {
            await this.databases.deleteRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
             console.log("Appwrite service :: createPost :: error", error);
             return false;
            
        }

    }
 //isse single post milegiiiiv 
    async getPost(slug){
        try{
            return await this.databases.getRow(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

        } catch (error){
              console.log("Appwrite service :: createPost :: error", error);
              return false

        }
    }
    //jab  ek sath sab chahiye ho
    async getPosts(queries= [Query.equal("status","active")]){
        try {
            return await this.databases.listRows(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
            
        } catch (error) {
               console.log("Appwrite service :: createPost :: error", error);
            
        }
    }

    //file upload file
    async uploadFile(file){
     try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
     } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false
        
     }
    
    }
    async deletefile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
             console.log("Appwrite service :: createPost :: error", error);
            return false

            
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service = new Service();
export default service;