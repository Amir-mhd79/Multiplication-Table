let x=Number(prompt("Please Enter the number"))
document.write(`<div class="edit-1">`)
for(let i=1;i<=x;i++){
    for(let j=1;j<=x;j++){
        document.write(`<span class="edit-2">${i*j}</span>`)
    }
    document.write(`<br>`)
}
document.write(`</div>`)