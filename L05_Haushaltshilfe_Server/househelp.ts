namespace L05_Househelp {

    
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;


    async function handleLoad(_event: Event): Promise<void> {

        let response: Response = await fetch("HouseData.json"); //(await) warten bis fetch die Daten von HouseData.json hat
        let offer: string = await response.text(); //text() liefert mir nicht direkt einen string, sondern nur die Promise einen string zu liefern, wenn sie die Daten hat (solage warten ->await)
        let data: Data = JSON.parse(offer); //JSON.prse wandelt den offer- string in ein Objekt um

        generateContent(data);

        form = <HTMLFormElement>document.querySelector("form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#mass");
        let submitbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        let resetbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset]");
    
        
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayMass);
        resetbutton.addEventListener("click", deleteData);
        submitbutton.addEventListener("click", sendData);

        displayOrder();
 }


    async function sendData(_event: Event): Promise<void> {
       console.log("DATA SENT");
       let formData: FormData = new FormData(form);
       let query: URLSearchParams = new URLSearchParams(<any>formData);
       await fetch("newhousehelp.html?" + query.toString());
       alert("your Tasks have been published!");
   }


    function deleteData(): void {

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";
    }


    function handleChange(_event: Event): void {
    displayOrder();

}

    function displayOrder(): void {

    let price: number = 0;
    let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
    order.innerHTML = "";
 
    let formData: FormData = new FormData(form);

  
    for (let entry of formData) {
        console.log("YEAY");
       
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
        let itemPrice: number = Number(item.getAttribute("price"));

        if (entry[0] == "Household") {
                order.innerHTML +=  item.value + "   " + " : € " + itemPrice.toFixed(2) + "<br>";
        
                
        }
        else if (entry[0] == "Shopping") {

            order.innerHTML +=  item.value + "   " + " : € " + itemPrice.toFixed(2) + "<br>";

        }
        else if (entry[0] == "Money") {

            order.innerHTML +=  item.value + "   " +  "<br>";

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
