// eslint-disable-next-line no-magic-numbers
const arr1 = [1, 2, 3];
// eslint-disable-next-line no-magic-numbers
const arr2 = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
  const $ul = document.createElement('ul');

  array.forEach(element => {
    const $li = document.createElement('li');

    if (Array.isArray(element)) {
      $li.innerHTML = generateList(element);
    } else {
      $li.textContent = element;
    }

    $ul.appendChild($li);
  });

  return $ul.outerHTML;
}

document.body.innerHTML += generateList(arr1);
document.body.innerHTML += generateList(arr2);
