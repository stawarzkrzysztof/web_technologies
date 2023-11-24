class Calculator {
	constructor(previousOpernadTextElement, currentOperandTextElement) {
		this.previousOpernadTextElement = previousOpernadTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}

	clear() {
		this.currentOperand = "";
		this.previousOperand = "";
		this.operation = undefined;
	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}

	appendNumber(number) {
		if (number === "." && this.currentOperand.includes(".")) return;
		this.currentOperand =
			this.currentOperand.toString() + number.toString();
		if (
			this.currentOperand === "2137" ||
			this.currentOperand === "69" ||
			this.currentOperand === "420"
		) {
			let haha = this.currentOperand + " - Bardzo śmieszne, ha ha ha";
			alert(haha);
		}
	}

	chooseOperation(operation) {
		if (this.currentOperand === "") return;
		if (this.previousOperand !== "") {
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = "";
	}

	compute() {
		let computation;
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if (isNaN(prev) || isNaN(current)) return;
		switch (this.operation) {
			case "+":
				computation = prev + current;
				break;

			case "-":
				computation = prev - current;
				break;

			case "*":
				computation = prev * current;
				break;

			case "÷":
				computation = prev / current;
				break;

			default:
				return;
		}
		this.currentOperand = computation;
		if (
			this.currentOperand == "2137" ||
			this.currentOperand == "69" ||
			this.currentOperand == "420"
		) {
			let haha = this.currentOperand + " - Bardzo śmieszne, ha ha ha";
			alert(haha);
		}
		this.operation = undefined;
		this.previousOperand = "";
	}

	getDisplayNumber(number) {
		const stringNumber = number.toString();
		const intDigits = parseFloat(stringNumber.split(".")[0]);
		const dec = stringNumber.split(".")[1];
		let integerDisplay;
		if (isNaN(intDigits)) {
			integerDisplay = "";
		} else {
			integerDisplay = intDigits.toLocaleString("en", {
				maximumFractionDigits: 0,
			});
		}
		if (dec != null) {
			return `${integerDisplay}.${dec}`;
		} else {
			return integerDisplay;
		}
	}

	updateDisplay() {
		this.currentOperandTextElement.innerText = this.getDisplayNumber(
			this.currentOperand
		);
		if (this.operation != null) {
			this.previousOpernadTextElement.innerText = `${this.getDisplayNumber(
				this.previousOperand
			)} ${this.operation}`;
		} else {
			this.previousOpernadTextElement.innerText = "";
		}
	}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOpernadTextElement = document.querySelector(
	"[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
	"[data-current-operand]"
);

/*
console.log(numberButtons);
console.log(operationButtons);
console.log(equalsButton);
console.log(deleteButton);
console.log(allClearButton);
console.log(previousOpernadTextElement);
console.log(currentOperandTextElement);
*/

const calculator = new Calculator(
	previousOpernadTextElement,
	currentOperandTextElement
);

numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});

operationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
	});
});

equalsButton.addEventListener("click", (button) => {
	calculator.compute();
	calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
	calculator.clear();
	calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
	calculator.delete();
	calculator.updateDisplay();
});
