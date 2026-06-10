type Post = {
    id: number,
    title: string,
    content: string,
    comments: string[]
}
export const posts:Post[] = [
    {id:1, title:"GraphQl", content:"Type Of Api Designing", comments:["a","b","c"]},
    {id:2, title:"Docker", content:"Containerization", comments:["a","b"]},
    {id:3, title:"Kubernetes", content:"Orchestration", comments:["a","b","c"]},
    {id:4, title:"AWS", content:"Cloud Computing", comments:["a","b"]},
    {id:5, title:"Redis", content:"In-Memory Database", comments:["a"]},
]