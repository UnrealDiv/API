//const arr = [{Country: "India"},{Country: "Pakistan"} ,{Country: "England"}];

const tc = document.querySelector('.tc');
const td = document.querySelector('.td');
const count = document.querySelector('.count');





function search(key,arr){

    for(i=0;i<arr.length;i++)
    {
        if(key ===arr[i].Country)
        {
            count.innerHTML = `<p>${arr[i].Country}</p>`;
      
            tc.innerHTML = `<p>${arr[i].TotalConfirmed}</p>`;
            td.innerHTML = `<p>${arr[i].TotalDeaths}</p>`;


            // console.log(); 
            // console.log();
            // console.log();
        }
      
    }

};

