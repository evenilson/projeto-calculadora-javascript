class CalcController {
    constructor() {
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize() {

        this.setDisplatDateTime();

        setInterval(() => {
            this.setDisplatDateTime();
        }, 1000);

    }

    setDisplatDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }


    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }


    get displayDate() {
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(valor) {
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate() {
        return new Date();
    }
    set currentDate(value) {
        this.currentDate = value;
    }
}