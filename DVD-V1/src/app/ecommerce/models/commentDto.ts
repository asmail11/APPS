export class CommentDto {
    id: number;
    title: string;
    message: string;
    addedBy: string;
    addedAt: string;
    constructor(id: number, title: string, message: string, addedBy: string, addedAt){
        this.id = id;
        this.title = title;
        this.message = message;
        this.addedBy = addedBy;
        this.addedAt = addedAt;
    }
}