// Ex 1
async function getUserById(userId) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) throw new Error('User not found');
    const user = await res.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (err) {
    console.error('Error fetching user:', err.message);
    return null;
  }
}

// Ex 2
async function getUserWithPosts(userId) {
  try {
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!userRes.ok) throw new Error('User fetch failed');
    const user = await userRes.json();

    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!postsRes.ok) throw new Error('Posts fetch failed');
    const posts = await postsRes.json();

    return { user, posts };
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

// Ex 3
async function getDashboard() {
  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/comments')
    ]);

    if (!usersRes.ok || !postsRes.ok || !commentsRes.ok) {
      throw new Error('Failed fetching dashboard data');
    }

    const users = await usersRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();

    const topUsers = users.map(user => {
      const userPosts = posts.filter(p => p.userId === user.id);
      const userPostIds = userPosts.map(p => p.id);
      const commentCount = comments.filter(c => userPostIds.includes(c.postId)).length;
      
      return { 
        name: user.name, 
        postCount: userPosts.length, 
        commentCount 
      };
    })
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, 3);

    return {
      summary: {
        totalUsers: users.length,
        totalPosts: posts.length,
        totalComments: comments.length,
        avgPostsPerUser: posts.length / users.length,
        avgCommentsPerPost: comments.length / posts.length
      },
      topUsers,
      recentPosts: posts.sort((a, b) => b.id - a.id).slice(0, 5)
    };
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

// Tests
getUserById(1);
getUserWithPosts(1).then(console.log);
getDashboard().then(console.log);