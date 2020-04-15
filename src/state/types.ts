export type TagType = {
    id: number,
    title: string,
    slug: string
}
export type CategoryType = {
    id: number,
    title: string,
    slug: string
}

export type PostType = {
    id: number,
    title: string,
    content: string,
    slug: string,
    is_published: number,
    updated_at: string,
    tags: TagType[],
    categories: CategoryType
}
