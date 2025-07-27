// Blog interactions
document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.querySelector('.like-btn');
    const shareBtn = document.querySelector('.share-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    let isLiked = false;

    // Like button functionality
    likeBtn.addEventListener('click', () => {
        isLiked = !isLiked;
        likeBtn.style.backgroundColor = isLiked ? '#e74c3c' : '#eee';
        likeBtn.style.color = isLiked ? 'white' : '#2c3e50';
        
        // Add heart animation
        if (isLiked) {
            const heart = document.createElement('span');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.transform = 'translate(-50%, -50%)';
            heart.style.animation = 'float 1s ease-out forwards';
            likeBtn.appendChild(heart);
            
            setTimeout(() => heart.remove(), 1000);
        }
    });

    // Share button functionality
    shareBtn.addEventListener('click', () => {
        shareBtn.classList.add('clicked');
        shareBtn.textContent = 'Shared!';
        
        setTimeout(() => {
            shareBtn.classList.remove('clicked');
            shareBtn.textContent = 'Share';
        }, 2000);
    });

    // Navigation hover effect
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Add floating animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -100%) scale(1.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 