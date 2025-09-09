// Global Variables
let currentFontSize = 16;
let isDarkTheme = false;
let isHighlightMode = false;
let chaptersVisible = false;
let currentChapter = 1;
let totalChapters = 1;
let selectedBook = null;

// Books Data with Multiple Books
// Books Data with Multiple Books
const books = {
    'starlit-guide': {
        title: "The Starlit Guide",
        author: "A. Sharma",
        cover: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
        totalChapters: 3,
        chapters: {
            1: {
                title: "Chapter 1: The Beginning",
                subtitle: "The journey starts",
                content: [
                    "In the beginning, there was only darkness and the whisper of ancient winds across forgotten lands...",
                    "Sarah had always been drawn to mysteries, but nothing could have prepared her for what she would discover in the old lighthouse.",
                    "The keeper's warnings echoed in her mind as she climbed the spiral staircase.",
                    "At the top of the lighthouse, she found something that would change everything."
                ]
            },
            2: {
                title: "Chapter 2: Ancient Whispers",
                subtitle: "Echoes of the past",
                content: [
                    "The book found in the lighthouse attic was bound in midnight blue leather...",
                    "Symbols shimmered in the candlelight.",
                    "Whispers of forgotten languages filled the air.",
                    "The keeper warned her about the attic."
                ]
            },
            3: {
                title: "Chapter 3: The Revelation",
                subtitle: "A secret revealed",
                content: [
                    "The symbols formed a map.",
                    "The lighthouse was a guardian of ancient knowledge.",
                    "Sarah opened the final page of the mysterious book.",
                    "Her destiny awaited."
                ]
            }
        }
    },
    'business-tactics': {
        title: "Business Tactics",
        author: "R. Mehta",
        cover: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
        totalChapters: 4,
        chapters: {
            1: {
                title: "Chapter 1: Market Strategies",
                subtitle: "Understanding the market",
                content: [
                    "In today's competitive business environment, understanding market dynamics is crucial...",
                    "Successful companies don't just follow trends - they create them.",
                    "Market analysis should be the foundation of any business strategy.",
                    "The most innovative companies often disrupt established markets."
                ]
            },
            2: {
                title: "Chapter 2: Leadership Principles",
                subtitle: "Effective leadership strategies",
                content: [
                    "Great leaders inspire their teams to achieve extraordinary results...",
                    "Leadership is not about authority, but about influence and vision.",
                    "The best leaders create more leaders, not just followers.",
                    "Emotional intelligence is often more important than IQ in leadership roles."
                ]
            },
            3: {
                title: "Chapter 3: Financial Management",
                subtitle: "Managing business finances",
                content: [
                    "Financial health is the lifeblood of any successful business...",
                    "Cash flow management can make or break a company.",
                    "Smart investments in technology often yield significant returns.",
                    "Financial planning should be adaptive, not static."
                ]
            },
            4: {
                title: "Chapter 4: Growth Strategies",
                subtitle: "Scaling your business",
                content: [
                    "Sustainable growth requires careful planning and execution...",
                    "The most successful expansions are often incremental, not explosive.",
                    "Understanding your core competencies is key to successful scaling.",
                    "Global expansion brings both opportunities and challenges."
                ]
            }
        }
    },
    'self-mastery': {
        title: "Self Mastery",
        author: "L. Kaur",
        cover: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
        totalChapters: 3,
        chapters: {
            1: {
                title: "Chapter 1: Self-Awareness",
                subtitle: "Understanding yourself",
                content: [
                    "The journey to self-mastery begins with self-awareness...",
                    "Knowing your strengths and weaknesses is the first step toward growth.",
                    "Self-reflection is a powerful tool for personal development.",
                    "Our patterns of behavior often reveal our deepest values and fears."
                ]
            },
            2: {
                title: "Chapter 2: Emotional Regulation",
                subtitle: "Managing your emotions",
                content: [
                    "Emotional intelligence is the cornerstone of self-mastery...",
                    "Our emotions are data, not directives - learn to interpret them wisely.",
                    "Mindfulness practices can significantly improve emotional regulation.",
                    "The gap between stimulus and response is where our power lies."
                ]
            },
            3: {
                title: "Chapter 3: Habit Formation",
                subtitle: "Building positive habits",
                content: [
                    "Lasting change comes from consistent small actions, not grand gestures...",
                    "Habits are the architecture of our lives - design them intentionally.",
                    "The compound effect of daily habits creates extraordinary results over time.",
                    "Environment design is often more effective than willpower alone."
                ]
            }
        }
    },
    'atomic-habits': {
        title: "Atomic Habits",
        author: "James Clear",
        cover: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
        totalChapters: 5,
        chapters: {
            1: {
                title: "Chapter 1: The Surprising Power of Atomic Habits",
                subtitle: "Small habits make a big difference",
                content: [
                    "Habits are the compound interest of self-improvement...",
                    "Small changes often appear to make no difference until you cross a critical threshold.",
                    "The most powerful outcomes of any compounding process are delayed.",
                    "You should be far more concerned with your current trajectory than with your current results."
                ]
            },
            2: {
                title: "Chapter 2: How Your Habits Shape Your Identity",
                subtitle: "The two-step process to changing your identity",
                content: [
                    "The ultimate form of intrinsic motivation is when a habit becomes part of your identity...",
                    "The more pride you have in a particular aspect of your identity, the more motivated you will be to maintain the habits associated with it.",
                    "True behavior change is identity change.",
                    "The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become."
                ]
            },
            3: {
                title: "Chapter 3: How to Build Better Habits in 4 Simple Steps",
                subtitle: "The laws of behavior change",
                content: [
                    "The process of building a habit can be divided into four simple steps: cue, craving, response, and reward...",
                    "The Four Laws of Behavior Change are a simple set of rules we can use to build better habits.",
                    "How to Create a Good Habit: 1. Make it obvious. 2. Make it attractive. 3. Make it easy. 4. Make it satisfying.",
                    "How to Break a Bad Habit: 1. Make it invisible. 2. Make it unattractive. 3. Make it difficult. 4. Make it unsatisfying."
                ]
            },
            4: {
                title: "Chapter 4: The Man Who Didn't Look Right",
                subtitle: "How to make your habits obvious",
                content: [
                    "With enough practice, your brain will pick up on the cues that predict certain outcomes without consciously thinking about it...",
                    "Once our habits become automatic, we stop paying attention to what we're doing.",
                    "The process of behavior change always starts with awareness.",
                    "The Habits Scorecard is a simple exercise you can use to become more aware of your behavior."
                ]
            },
            5: {
                title: "Chapter 5: The Best Way to Start a New Habit",
                subtitle: "Implementation intentions and habit stacking",
                content: [
                    "The two most common cues are time and location...",
                    "Implementation intentions leverage both of these cues.",
                    "The formula for an implementation intention is: I will [BEHAVIOR] at [TIME] in [LOCATION].",
                    "Habit stacking is a special form of an implementation intention."
                ]
            }
        }
    },
    'psychology-money': {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        cover: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
        totalChapters: 4,
        chapters: {
            1: {
                title: "Chapter 1: No One's Crazy",
                subtitle: "Your personal experiences with money",
                content: [
                    "Your personal experiences with money make up maybe 0.00000001% of what's happened in the world...",
                    "But maybe 80% of how you think the world works.",
                    "We all do crazy stuff with money, because we're all relatively new to this game and what looks crazy to you might make sense to me.",
                    "But no one is crazy - we all make decisions based on our own unique experiences that seem to make sense to us in a given moment."
                ]
            },
            2: {
                title: "Chapter 2: Luck & Risk",
                subtitle: "Nothing is as good or as bad as it seems",
                content: [
                    "Luck and risk are siblings. They are both the reality that every outcome in life is guided by forces other than individual effort...",
                    "They are so similar that you can't believe in one without equally respecting the other.",
                    "They both happen because the world is too complex to allow 100% of your actions to dictate 100% of your outcomes.",
                    "The line between bold and reckless is thinner than most people think, and you cannot tell which side of the line you're on until after the outcome has played out."
                ]
            },
            3: {
                title: "Chapter 3: Never Enough",
                subtitle: "When rich people do crazy things",
                content: [
                    "There is no reason to risk what you have and need for what you don't have and don't need...",
                    "The hardest financial skill is getting the goalpost to stop moving.",
                    "Social comparison is the problem here.",
                    "Enough is not too little. Enough is realizing that the opposite - an insatiable appetite for more - will push you to the point of regret."
                ]
            },
            4: {
                title: "Chapter 4: Confounding Compounding",
                subtitle: "How $81.5 billion becomes $84.6 billion",
                content: [
                    "$81.5 billion of Warren Buffett's $84.5 billion net worth came after his 65th birthday...",
                    "Our minds are not built to handle such absurdities.",
                    "Good investing isn't necessarily about earning the highest returns, because the highest returns tend to be one-off hits that can't be repeated.",
                    "It's about earning pretty good returns that you can stick with and which can be repeated for the longest period of time."
                ]
            }
        }
    },
    'harry-potter': {
        title: "Harry Potter",
        author: "J.K. Rowling",
        cover: "https://images.pexels.com/photos/1331724/pexels-photo-1331724.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
        totalChapters: 3,
        chapters: {
            1: {
                title: "Chapter 1: The Boy Who Lived",
                subtitle: "The beginning of the story",
                content: [
                    "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal...",
                    "They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.",
                    "Mr. Dursley was the director of a firm called Grunnings, which made drills.",
                    "He was a big, beefy man with hardly any neck, although he did have a very large mustache."
                ]
            },
            2: {
                title: "Chapter 2: The Vanishing Glass",
                subtitle: "Strange things happen",
                content: [
                    "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step...",
                    "Privet Drive had hardly changed at all.",
                    "The sun rose on the same tidy front gardens and lit up the brass number four on the Dursleys' front door.",
                    "It crept into their living room, which was almost exactly the same as it had been on the night when Mr. Dursley had seen that fateful news report about the owls."
                ]
            },
            3: {
                title: "Chapter 3: The Letters from No One",
                subtitle: "Mysterious letters arrive",
                content: [
                    "The escape of the Brazilian boa constrictor earned Harry his longest-ever punishment...",
                    "By the time he was allowed out of his cupboard again, the summer holidays had started.",
                    "Dudley had already broken his new video camera, crashed his remote control airplane, and, first time out on his racing bike, knocked down old Mrs. Figg as she crossed Privet Drive on her crutches.",
                    "Harry was glad school was over, but there was no escaping Dudley's gang, who visited the house every single day."
                ]
            }
        }
    },
    'mystery-nights': {
        title: "Mystery Nights",
        author: "B. Kumar",
        cover: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop",
        totalChapters: 2,
        chapters: {
            1: {
                title: "Chapter 1: The First Night",
                subtitle: "An unexpected event",
                content: [
                    "The town was quiet under the moonlight.",
                    "Shadows played tricks on unsuspecting eyes.",
                    "A scream echoed in the silence.",
                    "Nobody knew its source."
                ]
            },
            2: {
                title: "Chapter 2: Secrets Unveiled",
                subtitle: "The hidden truth",
                content: [
                    "A secret passage opened behind the bookshelf.",
                    "Old letters revealed family mysteries.",
                    "Trust was tested as hidden agendas emerged.",
                    "The mystery deepened."
                ]
            }
        }
    }
};

// Get book key from URL parameter
function getBookFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('book');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeReader();
    setupEventListeners();
    updateChapterContent();
    updateProgress();
});

// Initialize reader settings
function initializeReader() {
    const bookKey = getBookFromURL();
    if (books[bookKey]) {
        selectedBook = books[bookKey];
        totalChapters = selectedBook.totalChapters;
        document.querySelector('.book-title').textContent = selectedBook.title;
        document.querySelector('.book-cover').src = selectedBook.cover;
        document.querySelector('.book-cover-small').src = selectedBook.cover;
        document.querySelector('.book-details h3').textContent = selectedBook.title;
        document.querySelector('.book-details .author').textContent = selectedBook.author;
    } else {
        showToast('Book not found. Redirecting to library...');
        setTimeout(() => window.location.href = 'index.html', 1500);
        return;
    }

    document.documentElement.style.setProperty('--font-size', currentFontSize + 'px');
    
    const savedTheme = localStorage.getItem('readerTheme');
    if (savedTheme === 'dark') {
        toggleTheme();
    }
    
    updateFontSizeDisplay();
}

// Setup event listeners
function setupEventListeners() {
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '=':
                case '+':
                    e.preventDefault();
                    increaseFontSize();
                    break;
                case '-':
                    e.preventDefault();
                    decreaseFontSize();
                    break;
                case 'h':
                    e.preventDefault();
                    toggleHighlight();
                    break;
                case 'n':
                    e.preventDefault();
                    openNotesModal();
                    break;
            }
        }
        
        // Arrow key navigation
        if (e.key === 'ArrowLeft' && !e.target.matches('input, textarea')) {
            previousChapter();
        } else if (e.key === 'ArrowRight' && !e.target.matches('input, textarea')) {
            nextChapter();
        }
        
        // Escape key
        if (e.key === 'Escape') {
            closeNotesModal();
        }
    });
    
    // Text selection for highlighting
    document.addEventListener('mouseup', function() {
        if (isHighlightMode) {
            highlightSelectedText();
        }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function(e) {
        searchInBook(e.target.value);
    });
}

// Navigation Functions
function goBack() {
    // Simulate going back to index page
    showToast('Returning to library...');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function previousChapter() {
    if (currentChapter > 1) {
        currentChapter--;
        updateChapterContent();
        updateProgress();
        showToast(`Moved to Chapter ${currentChapter}`);
    }
}

function nextChapter() {
    if (currentChapter < totalChapters) {
        currentChapter++;
        updateChapterContent();
        updateProgress();
        showToast(`Moved to Chapter ${currentChapter}`);
    }
}

function goToChapter(chapterNum) {
    if (chapterNum >= 1 && chapterNum <= totalChapters) {
        currentChapter = chapterNum;
        updateChapterContent();
        updateProgress();
        updateChapterList();
        showToast(`Jumped to Chapter ${chapterNum}`);
    }
}

// Font Size Functions
function increaseFontSize() {
    if (currentFontSize < 24) {
        currentFontSize += 2;
        document.documentElement.style.setProperty('--font-size', currentFontSize + 'px');
        updateFontSizeDisplay();
        showToast(`Font size: ${currentFontSize}px`);
    }
}

function decreaseFontSize() {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        document.documentElement.style.setProperty('--font-size', currentFontSize + 'px');
        updateFontSizeDisplay();
        showToast(`Font size: ${currentFontSize}px`);
    }
}

function updateFontSizeDisplay() {
    document.getElementById('fontSizeDisplay').textContent = currentFontSize + 'px';
}

// Theme Functions
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    
    const themeBtn = document.getElementById('themeBtn');
    themeBtn.textContent = isDarkTheme ? 'Light' : 'Dark';
    
    // Save theme preference
    localStorage.setItem('readerTheme', isDarkTheme ? 'dark' : 'light');
    
    showToast(`Switched to ${isDarkTheme ? 'dark' : 'light'} theme`);
}

// Sidebar Functions
function toggleChapters() {
    chaptersVisible = !chaptersVisible;
    const chapterIndex = document.getElementById('chapterIndex');
    const chaptersBtn = document.querySelector('.sidebar-btn');
    
    if (chaptersVisible) {
        chapterIndex.style.display = 'block';
        chaptersBtn.classList.add('active');
        chapterIndex.style.animation = 'slideInRight 0.3s ease';
    } else {
        chapterIndex.style.display = 'none';
        chaptersBtn.classList.remove('active');
    }
    
    updateChapterList();
}

function toggleHighlight() {
    isHighlightMode = !isHighlightMode;
    const highlightBtn = document.querySelectorAll('.sidebar-btn')[1];
    
    highlightBtn.classList.toggle('active', isHighlightMode);
    
    if (isHighlightMode) {
        showToast('Highlight mode enabled - select text to highlight');
        document.body.style.cursor = 'crosshair';
    } else {
        showToast('Highlight mode disabled');
        document.body.style.cursor = 'default';
    }
}

function toggleBookmarks() {
    showToast('Bookmarks feature coming soon!');
}

function openSettings() {
    showToast('Settings panel coming soon!');
}

// Highlighting Functions
function highlightSelectedText() {
    const selection = window.getSelection();
    if (selection.rangeCount === 0 || selection.toString().trim() === '') return;
    
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();
    
    // Create highlight span
    const highlightSpan = document.createElement('span');
    highlightSpan.className = 'highlighted-text';
    highlightSpan.style.backgroundColor = 'rgba(255, 235, 59, 0.4)';
    highlightSpan.style.padding = '0.1rem 0.2rem';
    highlightSpan.style.borderRadius = '3px';
    highlightSpan.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    
    try {
        // Extract content and wrap it in the highlight span
        const content = range.extractContents();
        highlightSpan.appendChild(content);
        range.insertNode(highlightSpan);
        
        // Clear selection
        selection.removeAllRanges();
        
        showToast(`Highlighted: "${selectedText.substring(0, 30)}${selectedText.length > 30 ? '...' : ''}"`);
        
        // Save highlight to storage
        saveHighlight(highlightSpan, selectedText, range);
    } catch (error) {
        console.error('Error highlighting text:', error);
        showToast('Could not highlight this text selection');
    }
}
// Add this function to save highlights
function saveHighlight(element, text, range) {
    const rect = range.getBoundingClientRect();
    const chapterContent = document.getElementById('chapterContent');
    
    // Calculate position relative to chapter content
    const chapterRect = chapterContent.getBoundingClientRect();
    const position = {
        top: rect.top - chapterRect.top,
        left: rect.left - chapterRect.left,
        chapter: currentChapter
    };
    
    // Generate unique ID for this highlight
    const highlightId = 'highlight-' + Date.now();
    element.id = highlightId;
    
    // Store highlight data
    const highlightData = {
        id: highlightId,
        text: text,
        position: position,
        chapter: currentChapter,
        timestamp: new Date().toISOString(),
        book: getBookFromURL()
    };
    
    // Save to localStorage
    let highlights = JSON.parse(localStorage.getItem('bookHighlights') || '{}');
    if (!highlights[highlightData.book]) {
        highlights[highlightData.book] = [];
    }
    highlights[highlightData.book].push(highlightData);
    localStorage.setItem('bookHighlights', JSON.stringify(highlights));
}

// Add this function to load highlights when chapter changes
function loadHighlights() {
    const bookKey = getBookFromURL();
    const highlights = JSON.parse(localStorage.getItem('bookHighlights') || '{}');
    const bookHighlights = highlights[bookKey] || [];
    
    // Clear existing highlights in current chapter
    document.querySelectorAll('.highlighted-text').forEach(el => {
        if (el.parentNode) {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        }
    });
    
    // Apply highlights for current chapter
    bookHighlights
        .filter(h => h.chapter === currentChapter)
        .forEach(highlight => {
            // This is a simplified version - in a real app you'd need
            // a more complex algorithm to find the text position
            highlightText(highlight.text, highlight.id);
        });
}

// Helper function to highlight specific text
function highlightText(text, id) {
    const contentDiv = document.getElementById('chapterContent');
    const content = contentDiv.innerHTML;
    
    // Simple text replacement (this has limitations)
    const regex = new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    contentDiv.innerHTML = content.replace(regex, 
        `<span id="${id}" class="highlighted-text" style="background-color: rgba(255, 235, 59, 0.4); padding: 0.1rem 0.2rem; border-radius: 3px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${text}</span>`
    );
}




// Notes Functions
function openNotesModal() {
    const modal = document.getElementById('notesModal');
    modal.classList.add('show');
    modal.style.display = 'flex';
    
    // Focus on textarea
    setTimeout(() => {
        document.getElementById('noteText').focus();
    }, 100);
}

function closeNotesModal() {
    const modal = document.getElementById('notesModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    
    // Clear form
    document.getElementById('noteText').value = '';
    document.getElementById('privateNote').checked = false;
    document.getElementById('noteColor').value = 'yellow';
}

// Update your saveNote function to properly store notes
function saveNote() {
    const noteText = document.getElementById('noteText').value.trim();
    const isPrivate = document.getElementById('privateNote').checked;
    const noteColor = document.getElementById('noteColor').value;
    
    if (noteText === '') {
        showToast('Please enter a note before saving');
        return;
    }
    
    // Save note data
    const noteData = {
        text: noteText,
        chapter: currentChapter,
        private: isPrivate,
        color: noteColor,
        timestamp: new Date().toISOString(),
        book: getBookFromURL()
    };
    
    // Save to localStorage
    let notes = JSON.parse(localStorage.getItem('bookNotes') || '{}');
    if (!notes[noteData.book]) {
        notes[noteData.book] = [];
    }
    notes[noteData.book].push(noteData);
    localStorage.setItem('bookNotes', JSON.stringify(notes));
    
    showToast('Note saved successfully!');
    closeNotesModal();
}
// Add this function to view notes
function viewNotes() {
    const bookKey = getBookFromURL();
    const notes = JSON.parse(localStorage.getItem('bookNotes') || '{}');
    const bookNotes = notes[bookKey] || [];
    
    // Create notes modal content
    let notesHTML = '<div class="notes-container">';
    notesHTML += '<h3>Your Notes</h3>';
    
    if (bookNotes.length === 0) {
        notesHTML += '<p class="no-notes">No notes yet. Add your first note using the notes button!</p>';
    } else {
        bookNotes.forEach(note => {
            if (note.chapter === currentChapter || !note.private) {
                notesHTML += `
                    <div class="note-item" style="border-left: 4px solid ${getNoteColor(note.color)};">
                        <div class="note-header">
                            <span class="note-chapter">Chapter ${note.chapter}</span>
                            <span class="note-date">${formatDate(note.timestamp)}</span>
                        </div>
                        <div class="note-text">${note.text}</div>
                        ${note.private ? '<span class="private-badge">Private</span>' : ''}
                    </div>
                `;
            }
        });
    }
    
    notesHTML += '</div>';
    
    // Show notes in a modal
    showCustomModal('Your Notes', notesHTML);
}

// Helper functions for notes
function getNoteColor(color) {
    const colors = {
        yellow: '#ffeb3b',
        blue: '#2196f3',
        green: '#4caf50',
        pink: '#e91e63'
    };
    return colors[color] || '#ffeb3b';
}

function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString();
}



// Add this function to show custom modals
function showCustomModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal custom-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

// Content Update Functions
function updateChapterContent() {
    if (!selectedBook) return;
    const chapter = selectedBook.chapters[currentChapter];
    if (!chapter) return;
    
    document.querySelector('.chapter-title').textContent = chapter.title;
    document.querySelector('.chapter-subtitle').textContent = chapter.subtitle;

    const contentDiv = document.getElementById('chapterContent');
    contentDiv.innerHTML = '';

    chapter.content.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        contentDiv.appendChild(p);
    });

    document.querySelector('.chapter-info').textContent = `Chapter ${currentChapter} of ${totalChapters}`;

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.disabled = currentChapter === 1;
    nextBtn.disabled = currentChapter === totalChapters;

    // Load highlights for this chapter
    loadHighlights();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
    const progressPercentage = Math.round((currentChapter / totalChapters) * 100);
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-info span:first-child');
    
    progressFill.style.width = progressPercentage + '%';
    progressText.textContent = progressPercentage + '% complete';
}

function updateChapterList() {
    const chapterItems = document.querySelectorAll('.chapter-item');
    chapterItems.forEach((item, index) => {
        item.classList.toggle('active', index + 1 === currentChapter);
    });
}

// Search Functions
function searchInBook(query) {
    if (query.trim() === '') {
        // Clear any existing highlights
        clearSearchHighlights();
        return;
    }
    
    // Simple search implementation
    const contentDiv = document.getElementById('chapterContent');
    const paragraphs = contentDiv.querySelectorAll('p');
    
    clearSearchHighlights();
    
    let found = false;
    paragraphs.forEach(p => {
        const text = p.textContent;
        const regex = new RegExp(`(${query})`, 'gi');
        
        if (regex.test(text)) {
            found = true;
            const highlightedText = text.replace(regex, '<mark class="search-highlight">$1</mark>');
            p.innerHTML = highlightedText;
        }
    });
    
    if (found) {
        showToast(`Found "${query}" in current chapter`);
    } else {
        showToast(`"${query}" not found in current chapter`);
    }
}

function clearSearchHighlights() {
    const highlights = document.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
    });
}

// Utility Functions
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Add CSS for search highlights
const style = document.createElement('style');
style.textContent = `
    .search-highlight {
        background: linear-gradient(120deg, rgba(255, 193, 7, 0.6) 0%, rgba(255, 193, 7, 0.6) 100%);
        padding: 0.125rem 0.25rem;
        border-radius: 3px;
        font-weight: 600;
    }
    
    body.dark-theme .search-highlight {
        background: linear-gradient(120deg, rgba(255, 193, 7, 0.8) 0%, rgba(255, 193, 7, 0.8) 100%);
        color: #2c3e50;
    }
`;
document.head.appendChild(style);