namespace L05_Househelp {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data;
    
    export function generateContent(_data: Data): void {

        for (let category in _data) {
          
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;
            switch (category) {
               case "Money":
                   group = createMoney (items, category);
                   break;
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
        let group: HTMLSpanElement = document.createElement("span");
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

    function createMoney(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("span");
        group.setAttribute("class", "Payment");

        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(radio);
            group.appendChild(label);
        }
        return group;
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

}  



