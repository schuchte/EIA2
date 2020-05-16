namespace L04_Househelp {
    window.addEventListener("load", handleLoad);
   

    function handleLoad(_event: Event): void {

        generateContent(data);

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#tasks");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#mass");
        let submitbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#publish");
        let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#delete");
    
        
        deletebutton.addEventListener("click", deleteData);
        submitbutton.addEventListener("click", submitData);
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayMass);


        displayOrder();
 }

    function deleteData(): void {

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";
    }


    function submitData (_event: Event): void {
alert("your Data has been published!");
 }
    function handleChange(_event: Event): void {
    displayOrder();

}

    export function displayOrder(): void {

    let price: number = 0;
    let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
    order.innerHTML = "";
 
    let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));

  
    for (let entry of formData) {
       
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
        let itemPrice: number = Number(item.getAttribute("price"));

        if (entry[0] == "Household") {
                order.innerHTML +=  item.value + "   " + " : € " + itemPrice.toFixed(2) + "<br>";
        
                
        }
        else if (entry[0] == "Shopping"){

            order.innerHTML +=  item.value + "   " + " : € " + itemPrice.toFixed(2) + "<br>";

        }
    
        price += itemPrice;
    }
    
    let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
    order.innerHTML += "get/submit money" + " : " + progress.value + "€";
    let gesamt: number = progress.value + price;
    console.log(gesamt);

    order.innerHTML += "<p><strong>Total : " + gesamt  + "€";


}


    function displayMass(_event: Event): void {
    let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
    let amount: string = (<HTMLInputElement>_event.target).value;
    progress.value = parseFloat(amount);
}    
}
