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

async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = (await response.json()) as User[];
  return data;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = (await response.json()) as Post[];
  return data;
}

async function populateTemplate(users: User[], posts: Post[]) {
  const userContainer = document.getElementById("userContainer");

  if (!userContainer) {
    return;
  }

  // Clear previous content
  userContainer.innerHTML = "";

  users.forEach((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id);
    const postListItems = userPosts
      .map((post) => `<li>${post.title}</li>`)
      .join("");

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
}

document.addEventListener("DOMContentLoaded", () => {
  const filterForm = document.getElementById("filterForm") as HTMLFormElement;

  if (filterForm) {
    filterForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const titre = (
        document.getElementById("inline-titre") as HTMLInputElement
      ).value.toLowerCase();
      const author = (
        document.getElementById("author") as HTMLInputElement
      ).value.toLowerCase();

      try {
        const users = await fetchUsers();
        const posts = await fetchPosts();

        // Filter users based on the entered values
        const filteredUsers = users.filter(
          (user) =>
            user.name.toLowerCase().includes(titre) &&
            user.username.toLowerCase().includes(author)
        );

        populateTemplate(filteredUsers, posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  }
});

// Initial population of the template
populateTemplate([], []);
