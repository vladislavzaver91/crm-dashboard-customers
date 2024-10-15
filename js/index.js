document.addEventListener('DOMContentLoaded', function () {
	const data = [
		{
			customerName: 'Jane Cooper',
			company: 'Microsoft',
			phoneNumber: '(225) 555-0118',
			email: 'jane@microsoft.com',
			country: 'United States',
			status: 'Active',
		},
		{
			customerName: 'Floyd Miles',
			company: 'Yahoo',
			phoneNumber: '(205) 555-0100',
			email: 'floyd@yahoo.com',
			country: 'Kiribati',
			status: 'Inactive',
		},
		{
			customerName: 'Ronald Richards',
			company: 'Adobe',
			phoneNumber: '(302) 555-0107',
			email: 'ronald@adobe.com',
			country: 'Israel',
			status: 'Inactive',
		},
		{
			customerName: 'Marvin McKinney',
			company: 'Tesla',
			phoneNumber: '(252) 555-0126',
			email: 'marvin@tesla.com',
			country: 'Iran',
			status: 'Active',
		},
		{
			customerName: 'Jerome Bell',
			company: 'Google.',
			phoneNumber: '(629) 555-0129',
			email: 'jerome@google.com',
			country: 'Réunion',
			status: 'Active',
		},
		{
			customerName: 'Kathryn Murphy',
			company: 'Microsoft',
			phoneNumber: '(406) 555-0120',
			email: 'kathryn@microsoft.com',
			country: 'Curaçao',
			status: 'Active',
		},
		{
			customerName: 'Jacob Jones',
			company: 'Yahoo',
			phoneNumber: '(208) 555-0112',
			email: 'jacob@yahoo.com',
			country: 'Brazil',
			status: 'Active',
		},
		{
			customerName: 'Kristin Watson',
			company: 'Facebook',
			phoneNumber: '(704) 555-0127',
			email: 'kristin@facebook.com',
			country: 'Åland Islands',
			status: 'Inactive',
		},
	];

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
