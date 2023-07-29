// Active menu

const menuItem = document.querySelectorAll('.menu-item');

menuItem.forEach(item => {
    item.addEventListener('click',() =>{
        //Remove 'active' class from all menu items
        menuItem.forEach(menuItem => menuItem.classList.remove('active'));

        // Add 'active' class to the clicked menu item

        item.classList.add('active');
    });
});


// Slider

const slider = document.getElementById("percentageSlider");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", () => {
  const percentage = slider.value;
  sliderValue.textContent = `${percentage}%`;
});


//Age
const sliderAge = document.getElementById("ageSlider");
const sliderAgeValue = document.getElementById("sliderAgeValue");

sliderAge.addEventListener("input", () => {
  const age = sliderAge.value;
  sliderAgeValue.textContent = `${age} `;
});
