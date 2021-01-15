const PATH = "./data.json";
const fs = require('fs');
// const { parse } = require('path');

class Post {
    get() {
        //Get posts
        return this.readData();
    }

    getIndividualBlog(postId) {
        //get one blog post
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id == postId);
        return foundPost;
    }

    add(newPost) {
        //add new post
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData() {
        // let rawData = fs.readFileSync(PATH);
        // let posts = JSON.parse(rawData);
        // return posts;
        try {
            return JSON.parse(fs.readFileSync(PATH, 'utf8'));
        } catch (err) {
            console.error(err)
            return false;
        }
    }

    storeData(rawData) {
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;