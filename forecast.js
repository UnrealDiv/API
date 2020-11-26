const form = document.querySelector('form');





const getdata = async()=>{

    const request = await fetch("https://api.covid19api.com/summary");

    const data = await request.json();
    return  data.Countries;


}


form.addEventListener('submit',e=>{
    e.preventDefault();

    const word = form.input.value;
    const first = word[0].toUpperCase();
    const remaining =word.slice(1);
    const added = first+remaining;


    getdata().then(data=>{

        search(added,data);
      
       
       }).catch(err=>{
        console.log(err,"sorry");
    });
    
    form.reset();



});

