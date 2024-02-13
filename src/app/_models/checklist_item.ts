import { Category } from "./category";

export class CheckListItem {
    public guid!: string;
    public completed!: boolean;
    public description!: string;
    public deadline!: Date;
    public postDate!: Date;
    public category!: Category;
}