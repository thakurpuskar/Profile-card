function logSuccess(message) {
  console.log(`%c✅ ${message}`, 'color: green; font-weight: bold;');
}

function logError(message) {
  console.error(`%c❌ ${message}`, 'color: red; font-weight: bold;');
}

function testHtmlStructureRendering() {
  const card = document.querySelector('.card');
  if (!card) throw new Error('Card element is missing');

  const profileImage = card.querySelector('.profile img');
  if (!profileImage || !profileImage.src) throw new Error('Profile image is missing or has no source');
  if (!profileImage.alt || profileImage.alt.trim() === '') throw new Error('Profile image alt attribute is missing');

  const name = card.querySelector('.text h2');
  if (!name || name.textContent.trim() !== 'Puskar Kumar Thakur') throw new Error('Name is incorrect or missing');

  const jobTitle = card.querySelector('.text h3');
  if (!jobTitle || jobTitle.textContent.trim() !== 'Web Developer') throw new Error('Job title is incorrect or missing');

  const stats = card.querySelectorAll('.stats div');
  if (stats.length !== 3) throw new Error('Stats section is missing or incomplete');

  const expectedLabels = ['Projects', 'Followers', 'Following'];
  stats.forEach((stat, index) => {
    const label = stat.querySelector('span')?.textContent?.trim();
    if (label !== expectedLabels[index]) {
      throw new Error(`Stat label mismatch: expected "${expectedLabels[index]}", found "${label}"`);
    }
  });

  const socialLinks = card.querySelectorAll('.social a');
  if (socialLinks.length !== 6) throw new Error('Social media links are missing or incomplete');
}

function testSocialMediaLinksOpenInNewTab() {
  const socialLinks = document.querySelectorAll('.social a');
  socialLinks.forEach(link => {
    if (link.target !== '_blank') {
      throw new Error(`Link to ${link.href} does not open in a new tab`);
    }

    const rel = link.getAttribute('rel');
    if (!rel || !rel.includes('noopener')) {
      console.warn(`⚠️ Link to ${link.href} should use rel="noopener noreferrer"`);
    }
  });
}

function testConnectButtonNavigation() {
  const connectButton = document.querySelector('.connect-btn a');
  if (!connectButton) throw new Error('Connect button is missing');
  if (connectButton.getAttribute('href') !== './connect.html') {
    throw new Error('Connect button does not navigate to connect.html');
  }
}

function runAllTests() {
  console.log('%c🔍 Running UI Tests...', 'color: dodgerblue; font-weight: bold; font-size: 16px;');

  try {
    testHtmlStructureRendering();
    logSuccess('HTML structure rendering passed');
  } catch (error) {
    logError(`HTML structure rendering failed: ${error.message}`);
  }

  try {
    testSocialMediaLinksOpenInNewTab();
    logSuccess('Social media links test passed');
  } catch (error) {
    logError(`Social media links test failed: ${error.message}`);
  }

  try {
    testConnectButtonNavigation();
    logSuccess('Connect button navigation passed');
  } catch (error) {
    logError(`Connect button navigation failed: ${error.message}`);
  }

  console.log('%c✅ UI Test Complete', 'color: limegreen; font-weight: bold; font-size: 14px;');
}

window.addEventListener('DOMContentLoaded', runAllTests);
