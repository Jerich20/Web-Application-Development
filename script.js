/*
fetch('https://api.jsonbin.io/v3/b/68ff6eb5d0ea881f40bf94eb/latest')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const posts = data.record;
    const container = document.getElementById('posts');

    if (!Array.isArray(posts)) {
      return;
    }

    container.innerHTML = ''; 
    posts.forEach(post => {
      container.innerHTML += `
        <div class="post">
          <p><strong>${post.title}</strong></p>
          ${post.image ? `<img src="${post.image}" class="post-img">` : ''}
          <p>${post.content}</p>
          <button class="like-button">👍 ${post.likes}</button>
        </div>
      `;
    });
  })
  .catch(error => console.error('Viga:', error));

  //Siin on Json Bin loodud - https://jsonbin.io/app/bins#!
*/



fetch('http://localhost:3000/posts')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const posts = data;
    const container = document.getElementById('posts');

    if (!Array.isArray(posts)) {
      return;
    }

    container.innerHTML = ''; 
    posts.forEach(post => {
      container.innerHTML += `
        <div class="post">
          <p><strong>${post.title}</strong></p>
          ${post.image ? `<img src="${post.image}" class="post-img">` : ''}
          <p>${post.content}</p>
          <button class="like-button">👍 ${post.likes}</button>
        </div>
      `;
    });
  })
  .catch(error => console.error('Viga:', error));

  //How we completed the 5th point in HW2
  //made a local json server - 
    //npm install json-server
    //npx json-server --watch Data/post.json