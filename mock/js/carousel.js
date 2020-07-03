
const imgSrcs = ["./assets/img-1.jpg","./assets/img-2.jpg","./assets/img-3.jpg"];
var index = 0;

$(document).ready(function(){
    $(".next").click(()=>{
        index = update(true,index);
    });
    $(".back").click(()=>{
        index = update(false,index);
    });
});

function update(isNext,index){
    if(isNext){
        if(index == imgSrcs.length-1){
            index = 0;
        }else{
            index++;
        }
    }else{
        if(index == 0){
            index = imgSrcs.length-1;
        }else{
            index--;
        }
    }

    $(".my-image").attr("src",imgSrcs[index]);
    return index;
}