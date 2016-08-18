var user = {
  user1: {
    facebookId: 100,
    name: 'Joe King',
    articles: {
      article1: true,
      article2: false,
      article3: true,
      completed: 2,
      total: 3
    },
    videos: {
      video1: true,
      video2: false,
      completed: 1,
      total: 2
    }
  }
};

var userName = user.user1.name;
