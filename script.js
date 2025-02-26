function test_html_structure_rendering() {
    const card = document.querySelector('.card');
    if (!card) throw new Error('Card element is missing');

    const profileImage = card.querySelector('.profile img');
    if (!profileImage || !profileImage.src) throw new Error('Profile image is missing or has no source');

    const name = card.querySelector('.text h2');
    if (!name || name.textContent !== 'Puskar Kumar Thakur') throw new Error('Name is incorrect or missing');

    const jobTitle = card.querySelector('.text h3');
    if (!jobTitle || jobTitle.textContent !== 'Web Developer') throw new Error('Job title is incorrect or missing');

    const stats = card.querySelectorAll('.stats div');
    if (stats.length !== 3) throw new Error('Stats section is missing or incomplete');

    const socialLinks = card.querySelectorAll('.social a');
    if (socialLinks.length !== 6) throw new Error('Social media links are missing or incomplete');
}

function test_social_media_links_open_in_new_tab() {
    const socialLinks = document.querySelectorAll('.social a');
    socialLinks.forEach(link => {
        if (link.target !== '_blank') throw new Error(`Link ${link.href} does not open in a new tab`);
    });
}

function test_connect_button_navigation() {
    const connectButton = document.querySelector('.connect-btn a');
    if (!connectButton) throw new Error('Connect button is missing');
    if (connectButton.getAttribute('href') !== './connect.html') throw new Error('Connect button does not navigate to connect.html');
}

// Run tests
try {
    test_html_structure_rendering();
    console.log('test_html_structure_rendering passed');
} catch (error) {
    console.error('test_html_structure_rendering failed:', error.message);
}

try {
    test_social_media_links_open_in_new_tab();
    console.log('test_social_media_links_open_in_new_tab passed');
} catch (error) {
    console.error('test_social_media_links_open_in_new_tab failed:', error.message);
}

try {
    test_connect_button_navigation();
    console.log('test_connect_button_navigation passed');
} catch (error) {
    console.error('test_connect_button_navigation failed:', error.message);
}