export default function handler(req, res){
    res.status(200).json(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
}