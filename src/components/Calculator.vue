<template>
  <div class="calculator-body">
    <div class="calculator-body__dplay">
      <p class="post">{{ calculatorValue.calcValueSecond }}</p>
      <div>{{ calculatorValue.calcValueFirst || 0 }}</div>
    </div>
    <div class="calculator-body__keys">
      <button
        class="calculator-body__keys-item"
        v-for="operand in operands"
        :key="operand"
        :class="{
          'calculator-body__keys-item-equal': ['='].includes(operand),
          'calculator-body__keys-item-minus': ['-'].includes(operand),
          'calculator-body__keys-item-plus': ['+'].includes(operand),
        }"
        @click="operations(operand)"
      >
        {{ operand }}
      </button>
      <div class="numbers">
        <button
          class="calculator-body__keys-item"
          v-for="number in numbers"
          :key="number"
          :class="{
            'calculator-body__keys-item-zero': [0].includes(number),
          }"
          @click="addition(number)"
        >
          {{ number }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",

  data() {
    return {
      calculatorValue: {
        calcValueFirst: 0,
        calcValueSecond: "",
      },
      numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."],
      operands: ["C", "<", "÷", "×", "-", "+", "="],
      oper: 0,
    };
  },

  methods: {
    keyboardKeys(event) {
      event.preventDefault();
      let op = /[-+*/=]/gi;
      if (event.code.includes("Digit")) {
        this.addition(event.key);
      }
      if (event.key.match(op)) {
        this.operations(event.key);
      }
      switch (event.code) {
        case "Enter":
          this.operations("=");
          break;
        case "Backspace":
          this.operations("<");
          break;
        case "KeyC":
          this.operations("C");
          break;
      }
    },
    addition(number) {
      if (number === "." && this.calculatorValue.calcValueFirst.includes("."))
        return;
      if (this.calculatorValue.calcValueFirst == 0) {
        this.calculatorValue.calcValueFirst = "";
      }
      this.calculatorValue.calcValueFirst += number;
    },
    operations(operand) {
      let first = this.calculatorValue.calcValueFirst;
      let second = this.calculatorValue.calcValueSecond;
      if (operand !== "=" && operand !== "<") {
        this.oper = operand;
        if (second == false) {
          this.calculatorValue.calcValueSecond = `${first} ${this.oper}`;
          this.calculatorValue.calcValueFirst = "0";
        }

        if (second.includes(this.oper) && first) {
          switch (this.oper) {
            case "+": {
              const sum = parseFloat(second) + parseFloat(first);
              this.calculatorValue.calcValueSecond = `${sum} ${this.oper}`;
              this.calculatorValue.calcValueFirst = "0";
              break;
            }
            case "-": {
              const deff = parseFloat(second) - parseFloat(first);
              this.calculatorValue.calcValueSecond = `${deff} ${this.oper}`;
              this.calculatorValue.calcValueFirst = "0";
              break;
            }
            case "÷": {
              const div = parseFloat(second) / parseFloat(first);
              this.calculatorValue.calcValueSecond = `${div} ${this.oper}`;
              this.calculatorValue.calcValueFirst = "0";
              break;
            }
            case "×": {
              const mul = parseFloat(second) * parseFloat(first);
              this.calculatorValue.calcValueSecond = `${mul} ${this.oper}`;
              this.calculatorValue.calcValueFirst = "0";
              break;
            }
          }
        }
      }
      if (operand === "C") {
        this.calculatorValue.calcValueFirst = "0";
        this.calculatorValue.calcValueSecond = "";
      }
      if (operand === "<") {
        if (!first) {
          this.calculatorValue.calcValueFirst = 0;
        } else {
          this.calculatorValue.calcValueFirst = first.slice(
            0,
            first.length - 1
          );
        }
        if (!first) {
          this.calculatorValue.calcValueSecond = second.slice(
            0,
            second.length - 1
          );
        }
      }
      if (operand === "=") {
        switch (this.oper) {
          case "+": {
            const sum = parseFloat(first) + parseFloat(second);
            this.calculatorValue.calcValueFirst = `${sum}`;
            this.calculatorValue.calcValueSecond = "";
            break;
          }
          case "-": {
            const diff = parseFloat(second) - parseFloat(first);
            this.calculatorValue.calcValueFirst = `${diff}`;
            this.calculatorValue.calcValueSecond = "";
            break;
          }
          case "÷": {
            const div = parseFloat(second) / parseFloat(first);
            this.calculatorValue.calcValueFirst = `${div}`;
            this.calculatorValue.calcValueSecond = "";
            break;
          }
          case "×": {
            const mul = parseFloat(first) * parseFloat(second);
            this.calculatorValue.calcValueFirst = `${mul}`;
            this.calculatorValue.calcValueSecond = "";
            break;
          }
        }
        this.oper = false;
      }
    },
  },
  mounted() {
    window.addEventListener("keyup", this.keyboardKeys);
  },
  unmounted() {
    window.remooveEventListener("keyup", this.keyboardKeys);
  },
};
</script>
