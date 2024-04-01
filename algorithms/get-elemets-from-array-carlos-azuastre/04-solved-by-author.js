const post = [
  {id: 1, title: '2 post', tags: ['javascript', 'webDevelop']},
  {id: 2, title: '1 post', tags: ['javascript', 'webDevelop', 'react']},
  {id: 3, title: '3 post', tags: ['javascript', 'webDevelop', 'angular']},
]


const result = post.reduce((allTags, post) => {
    return Array.from(new Set([...allTags, ...post.tags]))
  }, [])

console.log(result);
