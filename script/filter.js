const filterItem = document.querySelector('.items');
const filterImg = document.querySelector('.image');

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains('item')) {
      filterItem.querySelector('.active').classList.remove('active');
      selectedItem.target.classList.add('active');
      let filterName = selectedItem.target.getAttribute('data-name');
      filterImg.forEach((e) => {
        let filterImages = e.getAttribute('data-name');
        console.log(filterImages);
      });
    }
  };
};
