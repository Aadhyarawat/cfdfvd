name_of_the_guest_array = [];

function submit()
    {
    var display_guest_array =[];
    
    for(var j = 1; j<= 4 ; j++)
    {
      var name_of_the_guest = document.getElementById("name_of_the_guest_"+j).value ;
        name_of_the_guest_array.push(name_of_the_guest);
        
    }
    
      var length_of_name_of_guest_array = name_of_the_guest_array.length;  
       for(var k = 0; k< length_of_name_of_guest_array ; k++)
       {
           display_guest_array.push("<h4> NAME - "+name_of_the_guest_array[k]+"</h4>");
       }
document.getElementById("display_name_with_commas").innerHTML=display_guest_array;
var remove_commas = display_guest_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

 function sorting()
{
    name_of_the_guest_array.sort();
      var display_guest_array_sorting =[];
     var length_of_name_of_guest_array = name_of_the_guest_array.length;  
    for(var k = 0; k< length_of_name_of_student_array ; k++)
       {
           display_guest_array_sorting.push("<h4> NAME - "+name_of_the_guest_array[k]+"</h4>");
       }
    var remove_commas = display_guestarray_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
function newupdate()
{
  document.getElementById("display_name_without_commas").innerHTML="<h1> NAME - "+name_of_the_guest_array+"</h1>";  
}
