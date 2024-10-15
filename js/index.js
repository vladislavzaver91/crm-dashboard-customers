document.addEventListener('DOMContentLoaded', async function () {
	const response = await fetch('../services/data.json');
	const data = await response.json();

	// adding an active class to a list item
	const listItems = document.querySelectorAll('.sidebar__nav-list-item');

	function removeActiveClass() {
		listItems.forEach(item => {
			item.classList.remove('sidebar__nav-list-item--active');
		});
	}

	listItems.forEach(item => {
		item.addEventListener('click', () => {
			removeActiveClass();
			item.classList.add('sidebar__nav-list-item--active');
		});
	});

	const customerTableBody = document.getElementById('customerTableBody');

	// customer data display
	function renderCustomersTable(customers) {
		customerTableBody.innerHTML = '';
		customers.forEach(row => {
			const tr = document.createElement('tr');
			tr.innerHTML = `
							<td>${row.customerName}</td>
							<td>${row.company}</td>
							<td>${row.phoneNumber}</td>
							<td>${row.email}</td>
							<td>${row.country}</td>
							<td><span class="status ${row.status.toLowerCase() === 'active' ? 'status-active' : 'status-inactive'}">${
				row.status
			}</span></td>
					`;
			customerTableBody.appendChild(tr);
		});
	}

	renderCustomersTable(data);

	const totalPages = 40;
	const currentPage = 1;
	const paginationPages = document.getElementById('paginationPages');

	// pagination drawing
	function renderPagination() {
		paginationPages.innerHTML = '';
		const buttonsToShow = 4;

		for (let i = 1; i <= buttonsToShow; i++) {
			const button = document.createElement('button');
			button.classList.add('customers__pagination-btn');
			if (i === currentPage) {
				button.classList.add('active');
			}
			button.textContent = i;
			paginationPages.appendChild(button);
		}

		const dots = document.createElement('span');
		dots.classList.add('customers__pagination-btn', 'not-show');
		dots.textContent = '...';
		paginationPages.appendChild(dots);

		const lastPageButton = document.createElement('button');
		lastPageButton.classList.add('customers__pagination-btn');
		lastPageButton.textContent = totalPages;
		paginationPages.appendChild(lastPageButton);
	}

	renderPagination();
});

// opening/closing the sidebar
const menuToggleBtn = document.getElementById('menuToggleBtn');
const sidebar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('#menuIcon');
let isSidebarOpen = false;

menuToggleBtn.addEventListener('click', function () {
	isSidebarOpen = !isSidebarOpen;
	sidebar.classList.toggle('sidebar--active', isSidebarOpen);
	document.body.classList.toggle('modal-open', isSidebarOpen);

	menuIcon.classList.toggle('icon-rotate', isSidebarOpen);
});
