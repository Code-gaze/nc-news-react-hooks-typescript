export interface IArticlesFilter {
    topic?: "" | "cooking" |"coding" |"football",
    author?: string,
    sort_by?: string,
    order?: "asc" | "desc",
    limit?: number,
    p?: number
}