// this is a json(javascript object notation)
// var theClothes=[
//     {
//         "name":"pants",
//         "shop":"labelle",
//         "type":"thrifted"
//     },
//     {
//         "name":"dresses",
//         "shop":"louisvton",
//         "type":"designer"

//     }
// ]
var pageCounter=1;//a variable to  inreament our uls when the button is clicked
var btn=document.getElementById("btn");
var animalcontainer=document.getElementById("animal-info");

btn.addEventListener("click",function(){
    var ourRequest=new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    ourRequest.onload=function(){
        var ourData=JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        // console.log(ourData[0]);//index 0 to get the first object in the API
    };
    ourRequest.send(); 
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide-me");//when the button is clicked a fourth time the button disappears
    }
})

function renderHTML(data){
var htmlString="animals are beings too"
for(i=0;i<data.length;i++){
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat " ;
     for(ii=0;ii<data[i].foods.likes.length;ii++){
         if(ii==0){
            htmlString += data[i].foods.likes[ii];
         }else{
             htmlString += "and" + data[i].foods.likes[ii];

         }
        }
        
     
     htmlString += 'and dislikes';
     for(ii=0;ii<data[i].foods.dislikes.length;ii++){
        if(ii==0){
           htmlString += data[i].foods.dislikes[ii];
        }else{
            htmlString += "and" + data[i].foods.dislikes[ii];

        }}
    htmlString += ',</p>';
    }


animalcontainer.insertAdjacentHTML('beforeend',htmlString);


}
