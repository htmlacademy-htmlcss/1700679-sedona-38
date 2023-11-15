function changeValue(action, inputId) {
	var inputField = document.getElementById(inputId);
        var currentValue = parseInt(inputField.value) || 0;

        if (action === 'increase' && currentValue < 9) {
          inputField.value = currentValue + 1;
        } else if (action === 'decrease' && currentValue > (inputId === 'adults' ? 1 : 0)) {
          inputField.value = currentValue - 1;
        }
}