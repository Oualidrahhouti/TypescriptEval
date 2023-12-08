    interface User {
      id: number;
      name: string;
      email: string;
      username: string;
    }

    interface Post {
      userId: number;
      id: number;
      title: string;
      body: string;
    }

    // Function to fetch users from the API
    async function fetchUsers(): Promise<User[]> {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    }

    // Function to fetch posts from the API
    async function fetchPosts(): Promise<Post[]> {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    }

    // Function to populate the template with user information and posts
    async function populateTemplate() {
      const userContainer = document.getElementById('userContainer');

      if (!userContainer) {
        return;
      }

      try {
        const users = await fetchUsers();
        const posts = await fetchPosts();

        users.forEach(user => {
          const userPosts = posts.filter(post => post.userId === user.id);
          const postListItems = userPosts.map(post => `<li>${post.title}</li>`).join('');

          const userTemplate = `
            <div class="max-w-md w-[33%] mb-4 mx-auto bg-gray-100 rounded-md overflow-hidden shadow-md">
              <div class="p-4">
                <h2 class="text-xl font-bold mb-2 text-yellow-500">${user.name}</h2>
                <p class="text-gray-600 mb-4">${user.email}</p>
                <h3 class="text-gray-600 mb-4">${user.username}</h3>
                <h3 class="text-xl font-bold mb-2 text-yellow-500">Posts</h3>
                <ul class="list-disc pl-4">${postListItems}</ul>
              </div>
            </div>
          `;

          userContainer.innerHTML += userTemplate;
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the function to populate the template
    populateTemplate();
