//tampilkan product per category,field di tampilkan nama kategory, nama buku

select categories.name,books.stok,books.name
from categories,books 
where categories.id = books.category_id
order by categories.id;

