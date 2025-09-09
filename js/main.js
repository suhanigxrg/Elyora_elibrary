// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    fetch('partials/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            initNavbar();
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });

    // Load sidebar
    fetch('partials/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            initSidebar();
            
            // Load default page after sidebar is loaded
            loadPage('../pages/home.html');
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
        });
});

// Function to load pages into content area
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            // Extract only the content inside the body (ignore head and html tags)
            const pageContent = data; // Load the entire partial HTML content as-is
            
            // Wrap the content in main-content div for proper styling
            const wrappedContent = `<div class="main-content">${pageContent}</div>`;
            document.getElementById('content-container').innerHTML = wrappedContent;
            
            // Initialize any page-specific scripts
            if (page.includes('home.html')) initHomePage();
            if (page.includes('favourites.html')) initFavouritesPage();
            if (page.includes('downloads.html')) initDownloadsPage();
            if (page.includes('help.html')) initHelpPage();
            if (page.includes('feedback.html')) initFeedbackPage();
        })
        .catch(error => {
            console.error('Error loading page:', error);
            document.getElementById('content-container').innerHTML = '<div class="main-content"><p>Error loading page. Please try again.</p></div>';
        });
}

// Initialize sidebar functionality
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Toggle sidebar expand/collapse
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('expanded');
            
            // Update toggle button icon rotation
            const icon = toggleBtn.querySelector('span');
            if (sidebar.classList.contains('expanded')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(180deg)';
            }
            
            // Save sidebar state to localStorage
            localStorage.setItem('sidebarExpanded', sidebar.classList.contains('expanded'));
        });
    }
    
    // Handle menu item clicks
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Load the corresponding page if data-page attribute exists
            const pageName = this.getAttribute('data-page');
            if (pageName) {
                loadPage(`pages/${pageName}.html`);
            }
        });
    });
    
    // Restore sidebar state from localStorage
    const sidebarExpanded = localStorage.getItem('sidebarExpanded') === 'true';
    if (sidebarExpanded) {
        sidebar.classList.add('expanded');
        if (toggleBtn) {
            const icon = toggleBtn.querySelector('span');
            icon.style.transform = 'rotate(0deg)';
        }
    }
}

// Initialize navbar functionality
function initNavbar() {
    // Add event listeners for dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropdown-btn');
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
        
        const searchIcon = document.querySelector('.search-icon');
        if (searchIcon) {
            searchIcon.addEventListener('click', function() {
                performSearch(searchInput.value);
            });
        }
    }
    
    // Theme toggle functionality
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Restore theme from localStorage
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
}

// Search function
function performSearch(query) {
    if (query.trim() !== '') {
        // Implement your search functionality here
        console.log('Searching for:', query);
        // For now, just show an alert
        alert(`Searching for: ${query}`);
    }
}

// ------------------ 🔹 BOOK DATA ------------------ //
const booksData = {
    "The Starlit Guide": {
        author: "A. Sharma",
        category: "Novels",
        rating: 4.7,
        description: "A captivating journey through mystical realms where love transcends time and space.",
        tags: ["fiction", "romance", "fantasy"],
         bookId: "starlit-guide",
        reviews: [
            { name: "Nia", text: "Loved the pacing and magical elements!", stars: 5 },
            { name: "Arjun", text: "Great characters and world-building", stars: 4 },
            { name: "Maya", text: "Couldn't put it down!", stars: 5 }
        ]
    },
    "Business Tactics": {
        author: "R. Mehta",
        category: "Business",
        rating: 4.6,
        description: "Proven strategies to excel in competitive markets with modern business tactics.",
        tags: ["business", "strategy", "management"],
        bookId: "business-tactics",
        reviews: [
            { name: "Kiran", text: "Very practical insights!", stars: 5 },
            { name: "Anil", text: "Good for beginners in business.", stars: 4 }
        ]
    },
    "Self Mastery": {
        author: "L. Kaur",
        category: "Self-Improvement",
        rating: 4.7,
        description: "A guide to mastering your inner self and achieving lasting personal growth.",
        tags: ["self-help", "growth", "mindset"],
        bookId: "self-mastery", 
        reviews: [
            { name: "Reema", text: "Life-changing book!", stars: 5 },
            { name: "Vikram", text: "Solid advice but a bit repetitive.", stars: 4 }
        ]
    }
};

// Page-specific initialization functions
function initHomePage() {
    console.log("Home page initialized");

    const modal = document.getElementById("bookModal");
    const closeBtn = document.querySelector(".close-btn");
    let currentBookId = null; // Store the current book ID

    if (!modal || !closeBtn) return;

    // Ensure modal is hidden initially
    modal.style.display = "none";

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        currentBookId = null; // Reset book ID when modal closes
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
            currentBookId = null; // Reset book ID when modal closes
        }
    });

    // Handle view button clicks
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const title = this.dataset.title;
            const bookId = this.dataset.bookid; // Get the book ID
            const card = this.closest(".book-card");
            const img = card.querySelector("img").src;

            const book = booksData[title];
            if (!book) return;

            // Store the current book ID
            currentBookId = bookId || book.bookId;
            console.log("Book ID set to:", currentBookId); // Debug log

            // Set modal content
            document.getElementById("modal-title").innerText = title;
            document.getElementById("modal-author").innerText = book.author;
            document.getElementById("modal-book-img").src = img;
            document.getElementById("modal-category").innerText = book.category;
            document.getElementById("modal-description").innerText = book.description;

            // Calculate and display star ratings
            const starCounts = [0, 0, 0, 0, 0];
            book.reviews.forEach(r => { starCounts[r.stars - 1]++; });
            const totalReviews = book.reviews.length;
            for (let i = 5; i >= 1; i--) {
                const bar = document.getElementById(`bar-${i}`);
                if (bar) {
                    const percent = totalReviews ? (starCounts[i - 1] / totalReviews) * 100 : 0;
                    bar.style.width = percent + "%";
                }
            }

            // Display tags
            const tagsContainer = document.querySelector(".modal-tags");
            if (tagsContainer) {
                tagsContainer.innerHTML = "";
                book.tags.forEach(tag => {
                    const span = document.createElement("span");
                    span.innerText = tag;
                    tagsContainer.appendChild(span);
                });
            }

            // Display reviews
            const reviewsList = document.querySelector(".reviews-list");
            if (reviewsList) {
                reviewsList.innerHTML = "";
                book.reviews.forEach(r => {
                    const div = document.createElement("div");
                    div.classList.add("review");
                    div.innerHTML = `
                        <div class="review-header">
                            <strong>${r.name}</strong>
                            <span class="stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</span>
                        </div>
                        <p>${r.text}</p>
                    `;
                    reviewsList.appendChild(div);
                });
            }

            // Show the modal
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    // Add event listener for the Start Reading button
    const startReadingBtn = document.querySelector(".start-btn");
    if (startReadingBtn) {
        startReadingBtn.addEventListener("click", function() {
            console.log("Start Reading clicked, currentBookId:", currentBookId); // Debug log
            if (currentBookId) {
                // Navigate to reader.html with the book ID as a parameter
                window.location.href = `reader.html?book=${currentBookId}`;
            } else {
                alert("No book selected");
            }
        });
    }

    // ... rest of your initHomePage function (favorite, download, etc.)
    // FAVOURITE TOGGLE
    document.addEventListener("click", (e) => {
        const favBtn = e.target.closest(".fav-btn");
        if (favBtn) {
            e.stopPropagation();
            favBtn.classList.toggle("active");

            if (favBtn.classList.contains("active")) {
                favBtn.innerHTML = `<i class="fas fa-heart"></i>`;
            } else {
                favBtn.innerHTML = `<i class="far fa-heart"></i>`;
            }
        }
    });

    // DOWNLOAD BUTTON
    document.addEventListener("click", (e) => {
        if (e.target.closest('.download-btn')) {
            e.stopPropagation();
            alert('Download clicked (implement your download logic).');
        }
    });

    // SCROLLBAR + ARROWS
    document.querySelectorAll('.book-card-container, .all-books-container').forEach(container => {
        container.addEventListener("wheel", (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        });

        const wrapper = container.closest('section');
        if (wrapper) {
            const arrows = wrapper.querySelectorAll('.heading-arrows button');
            if (arrows.length === 2) {
                const [prevBtn, nextBtn] = arrows;
                prevBtn.addEventListener('click', () => {
                    container.scrollBy({ left: -300, behavior: "smooth" });
                });
                nextBtn.addEventListener('click', () => {
                    container.scrollBy({ left: 300, behavior: "smooth" });
                });
            }
        }
    });

    // CATEGORY ALERT
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            alert(`You selected category: ${card.textContent}`);
        });
    });

}
function initFavouritesPage() {
    console.log("Favourites page initialized");
    // Add favourites page specific JavaScript here
}

function initDownloadsPage() {
    console.log("Downloads page initialized");
    // Add downloads page specific JavaScript here
}

function initHelpPage() {
    console.log("Help page initialized");
    // Add help page specific JavaScript here
    
    // FAQ toggle logic
    document.querySelectorAll(".help-faq-question").forEach(q => {
        q.addEventListener("click", () => {
            const item = q.parentElement;
            item.classList.toggle("active");
        });
    });
}

function initFeedbackPage() {
    console.log("Feedback page initialized");
    // Add feedback page specific JavaScript here
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        // If click is outside the dropdown, close it
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});

// Add search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
});