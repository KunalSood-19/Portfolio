const blogContainer = document.querySelector('.blog-container');
const collageContainer = document.querySelector('.collage-container');
const addBlogBtn = document.getElementById('addBlogBtn');
const searchBox = document.getElementById('searchBox');
const blogDate = document.getElementById('blogDate');
const sortBlogs = document.getElementById('sortBlogs');

// Load existing blogs from Local Storage
let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// Function to save blogs to Local Storage
function saveBlogsToLocalStorage() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

// Add Blog Function
addBlogBtn.addEventListener('click', () => {
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;
    const tags = document.getElementById('blogTags').value;
    const file = document.getElementById('blogImage').files[0];
    
    if (!title || !content || !tags || !file) {
        alert("Please fill all fields!");
        return;
    }

    const imgURL = URL.createObjectURL(file);
    const date = new Date().toISOString().split('T')[0];

    const newBlog = { title, content, imgURL, tags, date, likes: 0, comments: [] };
    blogs.push(newBlog);

    saveBlogsToLocalStorage();
    displayBlogs(blogs);

    // Clear input fields
    document.getElementById('blogTitle').value = "";
    document.getElementById('blogContent').value = "";
    document.getElementById('blogTags').value = "";
    document.getElementById('blogImage').value = "";
});

// Display Blogs
function displayBlogs(filteredBlogs) {
    blogContainer.innerHTML = "";
    collageContainer.innerHTML = "";

    filteredBlogs.forEach((blog, index) => {
        // Blog Card
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        blogCard.innerHTML = `
            <img src="${blog.imgURL}" alt="${blog.title}">
            <h2>${blog.title}</h2>
            <p>${blog.content.substring(0, 100)}...</p>
            <p><b>Tags:</b> ${blog.tags}</p>
            <button class="like-btn">❤️ ${blog.likes}</button>
            <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
            <input type="text" class="comment-input" placeholder="Add a comment...">
            <button class="comment-btn">Comment</button>
            <div class="comments-section"></div>
        `;

        blogContainer.appendChild(blogCard);

        // Collage Image
        const collageImg = document.createElement('img');
        collageImg.src = blog.imgURL;
        collageContainer.appendChild(collageImg);

        // Like Button
        blogCard.querySelector('.like-btn').addEventListener('click', () => {
            blog.likes++;
            saveBlogsToLocalStorage();
            displayBlogs(blogs);
        });

        // Delete Blog
        blogCard.querySelector('.delete-btn').addEventListener('click', (event) => {
            const indexToDelete = event.target.getAttribute('data-index');
            blogs.splice(indexToDelete, 1);
            saveBlogsToLocalStorage();
            displayBlogs(blogs);
        });

        // Comment Function
        blogCard.querySelector('.comment-btn').addEventListener('click', () => {
            const commentInput = blogCard.querySelector('.comment-input');
            if (commentInput.value) {
                blog.comments.push(commentInput.value);
                commentInput.value = "";
                saveBlogsToLocalStorage();
                displayBlogs(blogs);
            }
        });

        // Display Comments
        const commentsSection = blogCard.querySelector('.comments-section');
        blog.comments.forEach(comment => {
            const commentEl = document.createElement('p');
            commentEl.textContent = `💬 ${comment}`;
            commentsSection.appendChild(commentEl);
        });
    });
}

// Load Blogs when Page Loads
window.addEventListener('load', () => {
    displayBlogs(blogs);
});

// Search Function
searchBox.addEventListener('input', () => {
    const searchTerm = searchBox.value.toLowerCase();
    const filteredBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm) || 
        blog.content.toLowerCase().includes(searchTerm) || 
        blog.tags.toLowerCase().includes(searchTerm)
    );
    displayBlogs(filteredBlogs);
});

// Filter by Date
blogDate.addEventListener('change', () => {
    const selectedDate = blogDate.value;
    const filteredBlogs = blogs.filter(blog => blog.date === selectedDate);
    displayBlogs(filteredBlogs);
});

// Sort Blogs
sortBlogs.addEventListener('change', () => {
    if (sortBlogs.value === "newest") {
        blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
        blogs.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    displayBlogs(blogs);
});

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
