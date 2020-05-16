namespace L04_Househelp {

    export function generateContent(_data: Data): void {

        for (let category in _data) {
          
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;
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

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }


    function createHouse(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
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

    export function createShopping(): void {
let Set: HTMLFieldSetElement = <HTMLFieldSetElement> document.querySelector("fieldset#Shopping");
let Select: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
Select.setAttribute("class", "Shopart");
let Option: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
Select.innerHTML = "<option>" + Shop[0] + "<option>" + Shop[1] + "<option>" + Shop[2] + "<option>" + Shop[3] + "<option>" + Shop[4] + "<option>" + Shop[5];
Set.appendChild(Select);
Select.appendChild(Option);

    }

    export function createPayment(): void {
        let Mony: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset#Money");
        let Select: HTMLSelectElement = <HTMLSelectElement>document.createElement("select");
        Select.setAttribute("class", "Methode");
        let Option: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        Select.innerHTML = "<option>" + Payment[0] + "<option>" + Payment[1] + "<option>" + Payment[2] + "<option>" + Payment[3] + "<option>" + Payment[4];
        Mony.appendChild(Select);
        Select.appendChild(Option);
        
}

    function createGroceries (_items: Item[], _category: string): HTMLElement | null {
    
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
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



}  




