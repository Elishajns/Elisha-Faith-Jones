document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting right away

    // Display the confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';

    // Hide the form
    document.getElementById('contactForm').style.display = 'none';

    // You can optionally add an AJAX request here to handle form submission asynchronously if desired
    // For now, Formspree takes care of the form submission when the action URL is provided
  });

  // Add hover effects for inputs and button
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.style.backgroundColor = '#ffb6c1';
    });
    input.addEventListener('blur', () => {
      input.style.backgroundColor = '#ffe6f0';
    });
  });

  // Button hover effect
  const button = document.querySelector('button');
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#ff1493';
    button.style.transform = 'scale(1.05)';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#ff69b4';
    button.style.transform = 'scale(1)';
  });

  