/* ========================================
   RISE 2026 — Main Script (jQuery)

   All section data is loaded from data/*.js files
   via global variables (SCHEDULE_DATA, WORKSHOPS_DATA,
   FAQ_DATA, SPONSORS_DATA). These are included as
   <script> tags in the HTML before this file.
   ======================================== */

$(document).ready(function () {

    // ===== CURSOR GLOW =====
    const $glow = $('#cursorGlow');

    $(document).on('mousemove', function (e) {
        $glow.css({
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        });
        if (!$glow.hasClass('visible')) {
            $glow.addClass('visible');
        }
    });

    $(document).on('mouseleave', function () {
        $glow.removeClass('visible');
    });

    // ===== COUNTDOWN TIMER =====
    function updateCountdown() {
        const eventDate = new Date('March 14, 2026 09:00:00').getTime();
        const now = new Date().getTime();
        const gap = eventDate - now;

        if (gap <= 0) {
            $('#countdown-days').text('0');
            $('#countdown-hours').text('0');
            $('#countdown-minutes').text('0');
            $('#countdown-seconds').text('0');
            return;
        }

        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gap % (1000 * 60)) / 1000);

        $('#countdown-days').text(days);
        $('#countdown-hours').text(hours);
        $('#countdown-minutes').text(minutes);
        $('#countdown-seconds').text(seconds);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ===== NAVBAR SCROLL EFFECT =====
    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();

        // Navbar
        if (scrollTop > 80) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    // ===== SIDE MENU TOGGLE =====
    $('#navToggle').on('click', function () {
        $('#navLinks').toggleClass('open');
        $('#navOverlay').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Close side menu on overlay click
    $('#navOverlay').on('click', function () {
        $('#navLinks').removeClass('open');
        $('#navOverlay').removeClass('active');
        $('#navToggle').removeClass('active');
    });

    // Close side menu on link click
    $('.nav-links a').on('click', function () {
        $('#navLinks').removeClass('open');
        $('#navOverlay').removeClass('active');
        $('#navToggle').removeClass('active');
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop() + 100;

        $('section[id]').each(function () {
            const top = $(this).offset().top;
            const bottom = top + $(this).outerHeight();
            const id = $(this).attr('id');

            if (scrollPos >= top && scrollPos < bottom) {
                $('.nav-links a, .nav-visible-links a').removeClass('active');
                $('.nav-links a[href="#' + id + '"], .nav-visible-links a[href="index.html#' + id + '"]').addClass('active');
            }
        });
    });

    // ===== SMOOTH SCROLL =====
    $('a[href^="#"], a[href^="index.html#"]').on('click', function (e) {
        const href = this.getAttribute('href');

        // If it's a link to index.html#something from another page, let default behavior happen
        if (href.startsWith('index.html#') && window.location.pathname.indexOf('index.html') === -1 && window.location.pathname !== '/') {
            return;
        }

        // Otherwise smooth scroll if target exists on current page
        e.preventDefault();
        const targetId = href.replace('index.html', '');
        const target = $(targetId);

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 64
            }, 600, 'swing');
        }
    });

    // ===== SCROLL ANIMATIONS (Intersection Observer) =====
    function observeElements(selector) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        $(selector).each(function () {
            observer.observe(this);
        });
    }

    // ===== RENDER SCHEDULE FROM DATA =====
    if (typeof SCHEDULE_DATA !== 'undefined') {
        const $timeline = $('#timeline');
        $timeline.empty();

        $.each(SCHEDULE_DATA, function (index, item) {
            const card = `
                <div class="timeline-item fade-in">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <div class="timeline-time">${item.time}</div>
                        <h3 class="timeline-title">
                            <span class="emoji">${item.icon || ''}</span>
                            ${item.title}
                        </h3>
                        <p class="timeline-desc">${item.description}</p>
                        <span class="timeline-location">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            ${item.location}
                        </span>
                    </div>
                </div>
            `;
            $timeline.append(card);
        });

        observeElements('.timeline-item.fade-in');
    }

    // ===== RENDER WORKSHOPS FROM DATA =====
    if (typeof WORKSHOPS_DATA !== 'undefined') {
        const $grid = $('#workshopsGrid');
        $grid.empty();

        $.each(WORKSHOPS_DATA, function (index, item) {
            const card = `
                <div class="workshop-card fade-in" data-color="${item.color}">
                    <div class="workshop-icon">${item.icon || ''}</div>
                    <h3 class="workshop-title">${item.title}</h3>
                    <p class="workshop-desc">${item.description}</p>
                    <div class="workshop-meta">
                        <span>${item.time}</span>
                        <span>${item.type}</span>
                    </div>
                </div>
            `;
            $grid.append(card);
        });

        observeElements('.workshop-card.fade-in');
    }

    // ===== RENDER FAQ FROM DATA =====
    if (typeof FAQ_DATA !== 'undefined') {
        const $faqList = $('#faqList');
        $faqList.empty();

        $.each(FAQ_DATA, function (index, item) {
            const faqItem = `
                <div class="faq-item fade-in">
                    <button class="faq-question">
                        <span>${item.question}</span>
                        <svg class="faq-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <p>${item.answer}</p>
                    </div>
                </div>
            `;
            $faqList.append(faqItem);
        });

        // Attach FAQ accordion behavior to dynamically created items
        $(document).on('click', '.faq-question', function () {
            const $item = $(this).parent('.faq-item');
            const $answer = $item.find('.faq-answer');
            const isActive = $item.hasClass('active');

            // Close all
            $('.faq-item').removeClass('active');
            $('.faq-answer').css('max-height', '0');

            // Open clicked if it wasn't active
            if (!isActive) {
                $item.addClass('active');
                $answer.css('max-height', $answer[0].scrollHeight + 'px');
            }
        });

        observeElements('.faq-item.fade-in');
    }

    // ===== RENDER SPONSORS FROM DATA =====
    if (typeof SPONSORS_DATA !== 'undefined') {
        const $sponsorsGrid = $('#sponsorsGrid');
        $sponsorsGrid.empty();

        $.each(SPONSORS_DATA, function (index, item) {
            const sponsor = `
                <div class="sponsor-item fade-in">
                    <img src="${item.logo}" alt="${item.name}" loading="lazy">
                </div>
            `;
            $sponsorsGrid.append(sponsor);
        });

        observeElements('.sponsor-item.fade-in');
    }

    // ===== INTERNSHIPS MODAL =====
    const $modal = $('#internshipsModal');

    $('#internshipsBtn').on('click', function (e) {
        e.preventDefault();
        $modal.addClass('active');
        $('body').css('overflow', 'hidden');
    });

    function closeModal() {
        $modal.removeClass('active');
        $('body').css('overflow', '');
    }

    $('#modalClose').on('click', closeModal);

    $modal.on('click', function (e) {
        if ($(e.target).is('.modal-overlay')) {
            closeModal();
        }
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $modal.hasClass('active')) {
            closeModal();
        }
    });

    // ===== INIT FADE-IN FOR STATIC ELEMENTS =====
    $('.stat-card, .gallery-item, .keynote-card').addClass('fade-in');
    observeElements('.fade-in');

});
