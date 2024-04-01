const post = [
    {id: 1, title: '2 post', tags: ['javascript', 'webDevelop']},
    {id: 2, title: '1 post', tags: ['javascript', 'webDevelop', 'react']},
    {id: 3, title: '3 post', tags: ['javascript', 'webDevelop', 'angular']},
]


const result = post.reduce((allTags, post) => {
        return [...allTags, ...post.tags]
    }, [])
    .filter((post, index, array) => index === array.indexOf((post)))


console.log(result);
