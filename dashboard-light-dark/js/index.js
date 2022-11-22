const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
});

/* change theme */
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});


/* fill order table */
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <tr>
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.productStatus}</td>
            <td>
                <span class="
                ${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'success'}
                ">
                ${order.shipping}
                </span>
            </td>
            <td>
                <span class="primary">Details</span>
            </td>
        </tr>`
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});