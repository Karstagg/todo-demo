const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/Karstagg/todo-demo',
  },
  () => {
    console.log('Deploy Complete!')
  }
)