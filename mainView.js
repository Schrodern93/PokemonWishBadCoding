


function wishVeiw(){
   let html = "";
   
    for (let i = 0; i < model.cardlist.length; i++) {
   
    html += `<div class="card">
                <div>${model.cardlist[i].Name} ${model.cardlist[i].NumberInSet}</div>
                <div>${model.cardlist[i].SetName}</div>
                <div><img src="${model.cardlist[i].Picture}"/></div>
                <div class="samleDiv" >
                    <div class="priceDiv"> <div>Siste pris: ${model.cardlist[i].LastpriceCheck}kr</div>
                    <div>Laveste pris: ${model.cardlist[i].LowestPrice}kr</div>
                </div>
                <div class="linkDiv"> <a class="linkToPage" href="${model.cardlist[i].Link}">LINK</a></div>
                </div>
               
               
            </div>`;
   }
   return html; 

}

function VkortVeiw(){
    let html = "";
    
     for (let i = 0; i < model.cardlist.length; i++) {
    if(model.cardlist[i].Name.includes("V")){
     html += `<div class="card">
                 <div>${model.cardlist[i].Name} ${model.cardlist[i].NumberInSet}</div>
                 <div>${model.cardlist[i].SetName}</div>
                 <div><img src="${model.cardlist[i].Picture}"/></div>
                 <div class="samleDiv" >
                     <div class="priceDiv"> <div>Siste pris: ${model.cardlist[i].LastpriceCheck}kr</div>
                     <div>Laveste pris: ${model.cardlist[i].LowestPrice}kr</div>
                 </div>
                 <div class="linkDiv"> <a class="linkToPage" href="${model.cardlist[i].Link}">LINK</a></div>
                 </div>
                
                
             </div>`;
    }
}
    return html; 
 
 }

 function BildekortVeiw(){
    let html = "";
    
     for (let i = 0; i < model.cardlist.length; i++) {
    if(model.cardlist[i].Name.includes("V") 
    || model.cardlist[i].Name.includes("GX")
    || model.cardlist[i].Name.includes("EX")
    || model.cardlist[i].Name.includes("Full Art")){
     html += `<div class="card">
                 <div>${model.cardlist[i].Name} ${model.cardlist[i].NumberInSet}</div>
                 <div>${model.cardlist[i].SetName}</div>
                 <div><img src="${model.cardlist[i].Picture}"/></div>
                 <div class="samleDiv" >
                     <div class="priceDiv"> <div>Siste pris: ${model.cardlist[i].LastpriceCheck}kr</div>
                     <div>Laveste pris: ${model.cardlist[i].LowestPrice}kr</div>
                 </div>
                 <div class="linkDiv"> <a class="linkToPage" href="${model.cardlist[i].Link}">LINK</a></div>
                 </div>
                
                
             </div>`;
    }
}
    return html; 
 
 }

 function menu(){
    let html = "";
    
        html += `<button onclick="changetoAllview()">Alle kort</button>
                 <button onclick="changetoVview()">V kort</button>
                 <button onclick="changetoBildeview()" >Full art</button>
                 `
    
    return html; 
 }