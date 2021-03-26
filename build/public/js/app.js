"use strict";
class Calculator {
    constructor() {
        this._currentExpr = "";
        let buttons = document.getElementsByClassName("btn-container__btn");
        for (let i = 0; i < buttons.length; ++i) {
            buttons[i].addEventListener("click", (e) => this._onButtonClick(e));
        }
        this._resultView = document.getElementsByClassName("calc-app__result")[0];
        this._expressionView = document.getElementsByClassName("calc-app__expr")[0];
    }
    _onButtonClick(e) {
        if (!(e.currentTarget instanceof Element)) {
            return;
        }
        let p = e.currentTarget.querySelector("p");
        let symb = p === null || p === void 0 ? void 0 : p.innerText;
        if (symb) {
            this._handleSymbol(symb);
        }
    }
    _handleSymbol(s) {
        if (s == "C") {
            this._clear();
            return;
        }
        if (s == "=") {
            this._calculate();
            return;
        }
        this._currentExpr += s;
        this._resultView.innerText = this._currentExpr;
    }
    _calculate() {
        let value = "";
        try {
            value = eval(this._currentExpr);
        }
        catch (e) {
            this._resultView.innerText = "Invalid expression!";
            return;
        }
        if (value == "Infinity") {
            this._resultView.innerText = "Invalid expression!";
            return;
        }
        this._expressionView.innerText = this._currentExpr;
        this._resultView.innerText = value;
        this._currentExpr = value;
        return;
    }
    _clear() {
        this._currentExpr = "";
        this._resultView.innerText = "";
    }
}
let app = new Calculator();
