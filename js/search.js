document.addEventListener('DOMContentLoaded', function () {
    const SearchInput = document.getElementById('search-input')

    const FoodCard = document.querySelectorAll('')

    function filterFood(event) {
        const ErrorMassage = document.getElementById("error-massage")
  
        let number = 0
        FoodCard.forEach(function (food) {
            const foodName = food.querySelector('').textContent.toLowerCase()

            if (foodName.includes(event.toLowerCase())) {
                ErrorMassage.style.display = "none"
                food.style.display = "flex";
                number++;
            }
            else {
                food.style.display = "none"
            }
            
        });

        if (number == 0) {
            ErrorMassage.style.display = "block"
        }
    }

    SearchInput.addEventListener('input', () => {
        const InputNatija = SearchInput.value.trim()

        filterFood(InputNatija)
    })

})