import Posts from './posts.json';

class Post{
    id: number;
    title: string;
    date: Date;
    body: string;
    constructor(t : string, d: Date = new Date(), b: string, identifier: number){
        this.title = t;
        this.date = d;
        this.body = b;
        this.id = identifier;
    }
    getDateInStr() : string{
        return this.date.toString().substring(4,15);
    }
    
}
const posts: Post[] = Posts['posts'].map((post: { title: string; body: string; id: number }) => {
    return new Post(post.title, new Date(), post.body, post.id);
});

export default posts;
