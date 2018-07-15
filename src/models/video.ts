import {Table, Model, Column, CreatedAt, UpdatedAt, DeletedAt, DataType} from 'sequelize-typescript';

export enum Status {
    NewRequest = 0,
    CantRetrieve = 1000,

    Downloading = 10,
    DownloadingFailed = 11,

    Transcoding = 20,
    TranscodingFailed = 21,

    ReadyLocal = 100,
}

@Table({
    timestamps: true
})
export class Video extends Model<Video> {
    @Column({
        allowNull: false,
        unique: true
    })
    redditPostId: string;

    @Column({
        allowNull: true,
        defaultValue: -1
    })
    status: number;

    @Column({
        allowNull: true,
        defaultValue: 0
    })
    views: number;
    
    @Column({
        allowNull: true
    })
    lastView: Date;

    @CreatedAt
    createdAt: Date;
 
    @UpdatedAt
    updatedAt: Date;
  
    @DeletedAt
    deletedAt: Date;
}

//export default class Video extends Model<Video> {}
