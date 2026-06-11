type Post = {
    id: number,
    title: string,
    content: string,
    comments: string[]
}
export const posts:Post[] = [
    {id:1, title:"GraphQl", content:"Type Of Api Designing", comments:["Nice!","Good","Awsome"]},
    {id:2, title:"Docker", content:"Containerization", comments:["Very Good","Gorgeous"]},
    {id:3, title:"Kubernetes", content:"Orchestration", comments:["it's helpful","appreciate","nice"]},
    {id:4, title:"AWS", content:"Cloud Computing", comments:["a","b"]},
    {id:5, title:"Redis", content:"In-Memory Database", comments:["a"]},
]