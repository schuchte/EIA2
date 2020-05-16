namespace L04_Househelp {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let Shop: string [] = ["Aldi", "Rewe", "Lidl", "Kaufland", "Edeka", "Market"];
    export let Payment: string[] = ["PayPal", "Creditcard", "SEPA", "bank collection", "DIRECTeBanking"];

    export let data: Data = {
        Shopping: [
            { name: "Butter", price: 1.50 },
            { name: "Milk", price: 1.20 },
            { name: "Coffee", price: 3.50 },
            { name: "Cheese", price: 1.80 },
            { name: "Bread", price: 2.70 },
            { name: "Pasta", price: 1.10 },
            { name: "Apple", price: 0.80 }

        ],

        Household: [
            { name: "mow the lawn", price: 10.00 },
            { name: "cook a dish", price: 15.00 },
            { name: "feed the cat/dog", price: 5.00 },
            { name: "clean the house", price: 25.00 }
        ]
    };
}
