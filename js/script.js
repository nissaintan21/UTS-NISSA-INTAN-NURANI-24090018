const summary = {
  totalProducts: 120,
  totalSales: 85,
  totalRevenue: 12500000
};

let products = [
  { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
  { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
  { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

function formatRupiah(num) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

(function setupLogin() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value.trim();

    if (!email || !pass) {
      alert("Email & Password tidak boleh kosong!");
      return;
    }

    alert("Login berhasil");
    sessionStorage.setItem("uts_user_email", email);
    window.location.href = "dashboard.html";
  });
})();

(function setupDashboard() {
  const tp = document.getElementById("totalProducts");
  const ts = document.getElementById("totalSales");
  const tr = document.getElementById("totalRevenue");
  if (!tp) return;

  tp.textContent = summary.totalProducts;
  ts.textContent = summary.totalSales;
  tr.textContent = formatRupiah(summary.totalRevenue);

  const viewBtn = document.getElementById("viewProducts");
  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      window.location.href = "products.html";
    });
  }
})();

(function setupProducts() {
  const table = document.getElementById("productsTable");
  if (!table) return;

  const tbody = table.querySelector("tbody");

  function render() {
    tbody.innerHTML = "";

    products.forEach((p, i) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${p.name}</td>
        <td>${formatRupiah(p.price)}</td>
        <td>${p.stock}</td>
        <td>
            <img src="https://img.icons8.com/ios-glyphs/20/edit.png" 
                 class="icon-edit" data-id="${p.id}">

            <img src="https://img.icons8.com/ios-glyphs/20/trash--v1.png" 
                 class="icon-delete" data-id="${p.id}">
        </td>
      `;

      tbody.appendChild(tr);
    });

    document.querySelectorAll(".icon-edit").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        const item = products.find(x => x.id === id);
        alert("Edit produk: " + item.name);
      });
    });

    document.querySelectorAll(".icon-delete").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        if (confirm("Yakin hapus produk ini?")) {
          products = products.filter(x => x.id !== id);
          render();
        }
      });
    });
  }

  render();
})();
