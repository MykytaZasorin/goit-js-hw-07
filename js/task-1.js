const totalCategories = document.querySelectorAll('#categories .item');

console.log('Number of categories: ', totalCategories.length);

for (const category of totalCategories) {
  const categoryName = category.querySelector('h2').textContent;
  const totalElements = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${totalElements}`);
}

