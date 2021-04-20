/* eslint-disable max-len */
async function getData() {
  const request = await fetch('/api/Countries');
  const data = await request.json();
  return data;
}

async function dataHandler() {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const rightList = document.querySelector('.timeline');
  const leftList = document.querySelector('.container left');

  // const request = await fetch('/api/Countries');
  const countryData = await getData();
  console.table(countryData);

  form.addEventListener('submit', async(event) => {
    event.preventDefault();
    console.log(search.value);
    const filtered = countryData.data.filter((record) => record.country_name.includes(search.value));
    console.log(filtered);
    filtered.forEach((item) => {
      const appendItem = document.createElement('div');
      appendItem.classList.add('container', 'left');
      appendItem.innerHTML = `
        <div class="content">
            <h2>${item.country_name}</h2>
        </div>`;
      rightList.append(appendItem);
    // const topFive = filtered.slice(0, 5);
    // topFive.forEach((item) => {
    // const appendItem = document.createElement('');
    // appendItem.classList.add('content');
    // appendItem.classList.add('list-item');
    // appendItem.innerHTML = `<h2>${item.country_name}</h2>`;
    // rightList.append(appendItem);
    });
  });
}

async function windowsAction() {
  dataHandler();
  console.log('Window Loaded');
}

window.onload = windowsAction;