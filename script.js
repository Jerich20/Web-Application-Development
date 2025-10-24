fetch('post.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts');
    
    posts.forEach(post => {
      container.innerHTML += `
        <div class="post">
          <p>${post.title}</p>
          ${post.image ? `<img src="${post.image}" class="post-img">` : ''}
          <p>${post.content}</p>
          <button class="like-button">👍 ${post.likes}</button>
        </div>
      `;
    });
  })
  .catch(error => console.error('Viga:', error));