class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.max = max
      this.min = min
    }

    guess() {
      return this.completion = Math.ceil((this.max + this.min) / 2)
    }

    lower() {
      this.max = this.completion
    }

    greater() {
      this.min = this.completion
    }
}

module.exports = GuessingGame
