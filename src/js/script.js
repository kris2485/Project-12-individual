function toogleMenu() {
  document.querySelector('.sidebar-menu').classList.toggle('active');
  document.querySelector('.chat').classList.toggle('active');
  document.querySelector('.top-menu-media').classList.toggle('active');
}
document.querySelector('.fa-bars').addEventListener('click', function (event) {
  event.preventDefault();
  toogleMenu();
});

/* chart */
const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [
      {
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      /* {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      }, */
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      labels: {
        boxWidth: 10,
        usePointStyle: true,
      },
    },
  },
});
/* modals */
const overlay = document.getElementById('overlay');
const modals = document.getElementById('myModal');
const btnOpen = document.querySelectorAll('.btn-open');

function openModal() {
  overlay.classList.add('show');
  modals.classList.add('show');
}
btnOpen.forEach(function (modal) {
  modal.addEventListener('click', openModal);
});
function closeModal() {
  overlay.classList.remove('show');
}
document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});
document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});
