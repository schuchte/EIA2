"use strict";
var L04_Househelp;
(function (L04_Househelp) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                // case "Shopping":
                // group = createShopping (items, category);
                // break;
                case "Household":
                    group = createHouse(items, category);
                    break;
                case "Shopping":
                    group = createGroceries(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L04_Househelp.generateContent = generateContent;
    function createHouse(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
    window.addEventListener("load", createShopping);
    window.addEventListener("load", createPayment);
    // window.addEventListener("load", createMoney);
    // window.addEventListener("load", OK );
    //export function createMoney (): void {
    // let Geld: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset#Money");
    // let radiobutton: HTMLButtonElement = document.createElement("button");
    // radiobutton.setAttribute("class", "Geld");
    // radiobutton.setAttribute("type", "radio");
    // let label: HTMLLabelElement = document.createElement("label");
    // Geld.appendChild(radiobutton);
    // radiobutton.appendChild(label);
    // label.innerHTML = "get Money";
    //  }
    function createShopping() {
        let Set = document.querySelector("fieldset#Shopping");
        let Select = document.createElement("select");
        Select.setAttribute("class", "Shopart");
        let Option = document.createElement("option");
        Select.innerHTML = "<option>" + L04_Househelp.Shop[0] + "<option>" + L04_Househelp.Shop[1] + "<option>" + L04_Househelp.Shop[2] + "<option>" + L04_Househelp.Shop[3] + "<option>" + L04_Househelp.Shop[4] + "<option>" + L04_Househelp.Shop[5];
        Set.appendChild(Select);
        Select.appendChild(Option);
    }
    L04_Househelp.createShopping = createShopping;
    function createPayment() {
        let Mony = document.querySelector("fieldset#Money");
        let Select = document.createElement("select");
        Select.setAttribute("class", "Methode");
        let Option = document.createElement("option");
        Select.innerHTML = "<option>" + L04_Househelp.Payment[0] + "<option>" + L04_Househelp.Payment[1] + "<option>" + L04_Househelp.Payment[2] + "<option>" + L04_Househelp.Payment[3] + "<option>" + L04_Househelp.Payment[4];
        Mony.appendChild(Select);
        Select.appendChild(Option);
    }
    L04_Househelp.createPayment = createPayment;
    function createGroceries(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
    //     function OK (): void{
    // let okshopping: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#okay");
    // okshopping.addEventListener("click", Nunu);
    // function Nunu (_event: Event): void {
    //     let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
    //     let Select: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#Shopart");
    //     order.innerHTML += "";
    // }
})(L04_Househelp || (L04_Househelp = {}));
//# sourceMappingURL=HouseContent.js.map