// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const formMessage = document.getElementById('formMessage');

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    formMessage.textContent = '⚠ All fields are required.';
    formMessage.style.color = 'red';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    formMessage.textContent = '📧 Please enter a valid email.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = '✅ Form submitted successfully!';
  formMessage.style.color = 'green';

  name.value = '';
  email.value = '';
  message.value = '';
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const task = taskInput.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  // Remove task on click
  li.addEventListener('click', () => li.remove());

  taskList.appendChild(li);
  taskInput.value = '';
}