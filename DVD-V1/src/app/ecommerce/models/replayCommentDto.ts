export class ReplayCommentDto {
    id: number;
    message: string;
    addedBy: string;
    addedAt: string;
    constructor(id: number, message: string, addedBy: string, addedAt: string){
        this.id = id;
        this.message = message;
        this.addedBy = addedBy;
        this.addedAt = addedAt;
    }
}