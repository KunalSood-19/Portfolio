document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.querySelector(".blog-container");
    const addBlogBtn = document.getElementById("addBlogBtn");

    // Load Blogs from Local Storage
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Function to Save Blogs to Local Storage
    function saveBlogsToLocalStorage() {
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }

    // Add Blog Function
    addBlogBtn.addEventListener("click", () => {
        const title = document.getElementById("blogTitle").value;
        const content = document.getElementById("blogContent").value;
        const file = document.getElementById("blogImage").files[0];

        if (!title || !content || !file) {
            alert("Please fill all fields!");
            return;
        }

        // Convert image to Base64 and save
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const imgBase64 = reader.result; // Base64 Image Data

            const newBlog = { 
                title, 
                content, 
                imgBase64, 
                likes: 0
            };
            blogs.push(newBlog);

            saveBlogsToLocalStorage();
            displayBlogs();

            // Clear Input Fields
            document.getElementById("blogTitle").value = "";
            document.getElementById("blogContent").value = "";
            document.getElementById("blogImage").value = "";
        };
    });

    // Display Blogs
    function displayBlogs() {
        blogContainer.innerHTML = "";

        blogs.forEach((blog, index) => {
            const blogCard = document.createElement("div");
            blogCard.classList.add("blog-card");
            blogCard.innerHTML = `
                <img src="${blog.imgBase64}" alt="${blog.title}" width="300">
                <h2>${blog.title}</h2>
                <p>${blog.content.substring(0, 100)}...</p>
                <button class="like-btn" data-index="${index}">❤️ ${blog.likes}</button>
                <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
            `;

            blogContainer.appendChild(blogCard);

            // Like Button Functionality (Increments Likes)
            blogCard.querySelector(".like-btn").addEventListener("click", (event) => {
                const blogIndex = event.target.getAttribute("data-index");
                blogs[blogIndex].likes++; // Increment Like Count
                saveBlogsToLocalStorage(); // Save Updated Likes
                displayBlogs(); // Refresh UI
            });

            // Delete Blog
            blogCard.querySelector(".delete-btn").addEventListener("click", (event) => {
                const indexToDelete = event.target.getAttribute("data-index");
                blogs.splice(indexToDelete, 1);
                saveBlogsToLocalStorage();
                displayBlogs();
            });
        });
    }

    // Load Blogs on Page Load
    displayBlogs();
});
