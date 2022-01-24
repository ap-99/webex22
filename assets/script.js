/* --- Add-Remove-Change Lesson --- */
 
var box=document.getElementsByClassName("box");
var lesson_box=document.getElementsByClassName("lesson_box");
var lessons_box=document.getElementById("lessons_box");
var close_list=document.getElementById("close_list");
var editBtn1=document.getElementById("save");
var editBtn2=document.getElementById("save2");
var editBtn3=document.getElementById("save3");
var schedule=document.getElementById("schedule");
var tasks=document.getElementById("tasks");
var mails=document.getElementById("mails");
var mail_link=document.getElementsByClassName("mail_link");

/* --- Create Lesson Boxes --- */ 
for(var i=0; i<box.length; i++){
 var lesson=document.createElement("div");
 lesson.setAttribute("class","lesson");
 lesson.innerHTML="<img class='icon' src='assets/ico_add.png'>";
 box[i].appendChild(lesson);
 var edit_lesson=document.createElement("div");
 edit_lesson.setAttribute("class","edit_lesson");
 box[i].appendChild(edit_lesson);
 var change_lesson=document.createElement("div");
 change_lesson.setAttribute("class","change_lesson");
 change_lesson.innerHTML="<img class='icon' src='assets/ico_edit.png'>";
 edit_lesson.appendChild(change_lesson);
 var remove_lesson=document.createElement("div");
 remove_lesson.setAttribute("class","remove_lesson");
 remove_lesson.innerHTML="<img class='icon' src='assets/ico_remove.png'>";
 edit_lesson.appendChild(remove_lesson);
}

/* --- Add Lesson --- */ 
for(var i=0; i<box.length; i++){
 box[i].querySelector('.lesson').addEventListener("click",function(){
  if(this.innerHTML=='<img class="icon" src="assets/ico_add.png">'){
   var current_lesson=document.getElementById("active_lesson");
   current_lesson.removeAttribute("id","active_lesson");
   this.setAttribute("id","active_lesson");
   if(this.childNodes.length<=2){
    lessons_box.style.display="flex"; 
    schedule.style.display="none"; 
    save.style.display="none"; 
	 tasks.style.display="none"; 
    save2.style.display="none";
	 mails.style.display="none"; 
    save3.style.display="none"; 
    for(var i=0; i<lesson_box.length; i++){lesson_box[i].addEventListener('click',function(){var current=document.getElementById("active");current.removeAttribute("id","active");this.setAttribute("id","active");var current_lesson=document.getElementById("active_lesson");current_lesson.innerHTML=this.innerHTML;lessons_box.style.display="none";schedule.style.display="flex";save.style.display="flex";tasks.style.display="flex";save2.style.display="flex";mails.style.display="flex";save3.style.display="flex";});}
   }
  }
 });
}

/* --- Remove Lesson --- */ 
for(var i=0; i<box.length; i++){
 box[i].querySelector('.remove_lesson').addEventListener("click",function(){
  var parent=this.closest(".box");
  var les=parent.querySelector('.lesson').innerHTML='<img class="icon" src="assets/ico_add.png">';
 });
}

/* --- Change Lesson --- */ 
for(var i=0; i<box.length; i++){
 box[i].querySelector('.change_lesson').addEventListener("click",function(){
  var parent= this.closest(".box");
  var les=parent.querySelector('.lesson');
  if(les.innerHTML!='<img class="icon" src="assets/ico_add.png">'){
   var current_lesson=document.getElementById("active_lesson");
   current_lesson.removeAttribute("id","active_lesson");
   les.setAttribute("id","active_lesson");
   if(les.childNodes.length<=1){
    lessons_box.style.display="flex"; 
    schedule.style.display="none"; 
    save.style.display="none"; 
	 tasks.style.display="none"; 
    save2.style.display="none";
	 mails.style.display="none"; 
    save3.style.display="none"; 
    for(var i=0; i<lesson_box.length; i++){lesson_box[i].addEventListener('click',function(){var current=document.getElementById("active");current.removeAttribute("id","active");this.setAttribute("id","active");var current_lesson=document.getElementById("active_lesson");current_lesson.innerHTML=this.innerHTML;lessons_box.style.display="none";schedule.style.display="flex";save.style.display="flex";tasks.style.display="flex";save2.style.display="flex";mails.style.display="flex";save3.style.display="flex";});}
   }
  }
 });
}

/* --- Disable Empty Mails --- */ 
for(var i=0; i<mail_link; i++){
 console.log(mail_link[i].href);
 if(mail_link[i].href==""){this.style.pointerEvents="none";}
}

close_list.addEventListener("click",function(){if(lessons_box.style.display=="flex"){lessons_box.style.display="none";schedule.style.display="flex";save.style.display="flex";tasks.style.display="flex";save2.style.display="flex";mails.style.display="flex";save3.style.display="flex";}});
 
 
 
 
 
 
/* --- Save Schedule On Localstorage --- */ 

if(localStorage.getItem("schedule")!==null){
 schedule.innerHTML=localStorage.getItem("schedule");
 var box=document.getElementsByClassName("box");
 var lesson_box=document.getElementsByClassName("lesson_box");
 var lessons_box=document.getElementById("lessons_box");

 for(var i=0; i<box.length; i++){
  box[i].querySelector('.lesson').addEventListener("click",function(){
	if(this.innerHTML=='<img class="icon" src="assets/ico_add.png">'){
	 var current_lesson=document.getElementById("active_lesson");
    current_lesson.removeAttribute("id","active_lesson");
    this.setAttribute("id","active_lesson");
    if(this.childNodes.length<=2){
     lessons_box.style.display="flex"; 
	  schedule.style.display="none"; 
	  save.style.display="none";
     tasks.style.display="none"; 
     save2.style.display="none";
	  mails.style.display="none"; 
     save3.style.display="none"; 
     for(var i=0; i<lesson_box.length; i++){lesson_box[i].addEventListener('click',function(){var current=document.getElementById("active");current.removeAttribute("id","active");this.setAttribute("id","active");var current_lesson=document.getElementById("active_lesson");current_lesson.innerHTML=this.innerHTML;lessons_box.style.display="none";schedule.style.display="flex";save.style.display="flex";tasks.style.display="flex";save2.style.display="flex";mails.style.display="flex";save3.style.display="flex";});}
    }
	}
  });
 }

 for(var i=0; i<box.length; i++){
   box[i].querySelector('.remove_lesson').addEventListener("click",function(){
    var parent= this.closest(".box");
    var les=parent.querySelector('.lesson').innerHTML='<img class="icon" src="assets/ico_add.png">';
   });
 }
 
 for(var i=0; i<box.length; i++){
  box[i].querySelector('.change_lesson').addEventListener("click",function(){
   var parent= this.closest(".box");
   var les=parent.querySelector('.lesson');
	if(les.innerHTML!='<img class="icon" src="assets/ico_add.png">'){
    var current_lesson=document.getElementById("active_lesson");
    current_lesson.removeAttribute("id","active_lesson");
    les.setAttribute("id","active_lesson");
    if(les.childNodes.length<=1){
     lessons_box.style.display="flex"; 
     schedule.style.display="none"; 
     save.style.display="none"; 
	  tasks.style.display="none"; 
     save2.style.display="none"; 
	  mails.style.display="none"; 
     save3.style.display="none";  
     for(var i=0; i<lesson_box.length; i++){lesson_box[i].addEventListener('click',function(){var current=document.getElementById("active");current.removeAttribute("id","active");this.setAttribute("id","active");var current_lesson=document.getElementById("active_lesson");current_lesson.innerHTML=this.innerHTML;lessons_box.style.display="none";schedule.style.display="flex";save.style.display="flex";tasks.style.display="flex";save2.style.display="flex";mails.style.display="flex";save3.style.display="flex";});}
    }
   }
  });
 }
 
 close_list.addEventListener("click",function(){if(lessons_box.style.display=="flex"){lessons_box.style.display="none";schedule.style.display="flex";save.style.display="flex";tasks.style.display="flex";save2.style.display="flex";mails.style.display="flex";save3.style.display="flex";}});
}

editBtn1.addEventListener('click', function(e){localStorage.setItem("schedule", schedule.innerHTML);alert("Το πρόγραμμα αποθηκεύτηκε");});



if(localStorage["cont1"]){var cont1=localStorage["cont1"];document.getElementById("cont1").value=cont1;}
if(localStorage["cont2"]){var cont2=localStorage["cont2"];document.getElementById("cont2").value=cont2;}
if(localStorage["cont3"]){var cont3=localStorage["cont3"];document.getElementById("cont3").value=cont3;}
if(localStorage["cont4"]){var cont4=localStorage["cont4"];document.getElementById("cont4").value=cont4;}
if(localStorage["cont5"]){var cont5=localStorage["cont5"];document.getElementById("cont5").value=cont5;}
if(localStorage["cont6"]){var cont6=localStorage["cont6"];document.getElementById("cont6").value=cont6;}
if(localStorage["cont7"]){var cont7=localStorage["cont7"];document.getElementById("cont7").value=cont7;}
if(localStorage["cont8"]){var cont8=localStorage["cont8"];document.getElementById("cont8").value=cont8;}
if(localStorage["cont9"]){var cont9=localStorage["cont9"];document.getElementById("cont9").value=cont9;}
if(localStorage["cont10"]){var cont10=localStorage["cont10"];document.getElementById("cont10").value=cont10;}
if(localStorage["cont11"]){var cont11=localStorage["cont11"];document.getElementById("cont11").value=cont11;}
if(localStorage["cont12"]){var cont12=localStorage["cont12"];document.getElementById("cont12").value=cont12;}
if(localStorage["cont13"]){var cont13=localStorage["cont13"];document.getElementById("cont13").value=cont13;}
if(localStorage["cont14"]){var cont14=localStorage["cont14"];document.getElementById("cont14").value=cont14;}
if(localStorage["cont15"]){var cont15=localStorage["cont15"];document.getElementById("cont15").value=cont15;}
if(localStorage["cont16"]){var cont16=localStorage["cont16"];document.getElementById("cont16").value=cont16;}
if(localStorage["cont17"]){var cont17=localStorage["cont17"];document.getElementById("cont17").value=cont17;}
if(localStorage["cont18"]){var cont18=localStorage["cont18"];document.getElementById("cont18").value=cont18;}

editBtn2.addEventListener("click", function(e)
{
 var cont1=document.getElementById("cont1").value;localStorage.setItem("cont1", cont1);
 var cont2=document.getElementById("cont2").value;localStorage.setItem("cont2", cont2);
 var cont3=document.getElementById("cont3").value;localStorage.setItem("cont3", cont3);
 var cont4=document.getElementById("cont4").value;localStorage.setItem("cont4", cont4);
 var cont5=document.getElementById("cont5").value;localStorage.setItem("cont5", cont5);
 var cont6=document.getElementById("cont6").value;localStorage.setItem("cont6", cont6);
 var cont7=document.getElementById("cont7").value;localStorage.setItem("cont7", cont7);
 var cont8=document.getElementById("cont8").value;localStorage.setItem("cont8", cont8);
 var cont9=document.getElementById("cont9").value;localStorage.setItem("cont9", cont9);
 var cont10=document.getElementById("cont10").value;localStorage.setItem("cont10", cont10);
 var cont11=document.getElementById("cont11").value;localStorage.setItem("cont11", cont11);
 var cont12=document.getElementById("cont12").value;localStorage.setItem("cont12", cont12);
 var cont13=document.getElementById("cont13").value;localStorage.setItem("cont13", cont13);
 var cont14=document.getElementById("cont14").value;localStorage.setItem("cont14", cont14);
 var cont15=document.getElementById("cont15").value;localStorage.setItem("cont15", cont15);
 var cont16=document.getElementById("cont16").value;localStorage.setItem("cont16", cont16);
 var cont17=document.getElementById("cont17").value;localStorage.setItem("cont17", cont17);
 var cont18=document.getElementById("cont18").value;localStorage.setItem("cont18", cont18);
 alert("Τα μαθήματα αποθηκεύτηκαν");
});



if(localStorage["mail1"]){var mail1=localStorage["mail1"];document.getElementById("mail1").value=mail1;document.getElementById("mail1_link").href="mailto:"+mail1;document.getElementById("mail1_link").style.pointerEvents="auto";}
if(localStorage["mail2"]){var mail2=localStorage["mail2"];document.getElementById("mail2").value=mail2;document.getElementById("mail2_link").href="mailto:"+mail2;document.getElementById("mail2_link").style.pointerEvents="auto";}
if(localStorage["mail3"]){var mail3=localStorage["mail3"];document.getElementById("mail3").value=mail3;document.getElementById("mail3_link").href="mailto:"+mail3;document.getElementById("mail3_link").style.pointerEvents="auto";}
if(localStorage["mail4"]){var mail4=localStorage["mail4"];document.getElementById("mail4").value=mail4;document.getElementById("mail4_link").href="mailto:"+mail4;document.getElementById("mail4_link").style.pointerEvents="auto";}
if(localStorage["mail5"]){var mail5=localStorage["mail5"];document.getElementById("mail5").value=mail5;document.getElementById("mail5_link").href="mailto:"+mail5;document.getElementById("mail5_link").style.pointerEvents="auto";}
if(localStorage["mail6"]){var mail6=localStorage["mail6"];document.getElementById("mail6").value=mail6;document.getElementById("mail6_link").href="mailto:"+mail6;document.getElementById("mail6_link").style.pointerEvents="auto";}
if(localStorage["mail7"]){var mail7=localStorage["mail7"];document.getElementById("mail7").value=mail7;document.getElementById("mail7_link").href="mailto:"+mail7;document.getElementById("mail7_link").style.pointerEvents="auto";}
if(localStorage["mail8"]){var mail8=localStorage["mail8"];document.getElementById("mail8").value=mail8;document.getElementById("mail8_link").href="mailto:"+mail8;document.getElementById("mail8_link").style.pointerEvents="auto";}
if(localStorage["mail9"]){var mail9=localStorage["mail9"];document.getElementById("mail9").value=mail9;document.getElementById("mail9_link").href="mailto:"+mail9;document.getElementById("mail9_link").style.pointerEvents="auto";}
if(localStorage["mail10"]){var mail10=localStorage["mail10"];document.getElementById("mail10").value=mail10;document.getElementById("mail10_link").href="mailto:"+mail10;document.getElementById("mail10_link").style.pointerEvents="auto";}
if(localStorage["mail11"]){var mail11=localStorage["mail11"];document.getElementById("mail11").value=mail11;document.getElementById("mail11_link").href="mailto:"+mail11;document.getElementById("mail11_link").style.pointerEvents="auto";}
if(localStorage["mail12"]){var mail12=localStorage["mail12"];document.getElementById("mail12").value=mail12;document.getElementById("mail12_link").href="mailto:"+mail12;document.getElementById("mail12_link").style.pointerEvents="auto";}

editBtn3.addEventListener("click", function(e)
{
 var mail1=document.getElementById("mail1").value;localStorage.setItem("mail1", mail1);
 var mail2=document.getElementById("mail2").value;localStorage.setItem("mail2", mail2);
 var mail3=document.getElementById("mail3").value;localStorage.setItem("mail3", mail3);
 var mail4=document.getElementById("mail4").value;localStorage.setItem("mail4", mail4);
 var mail5=document.getElementById("mail5").value;localStorage.setItem("mail5", mail5);
 var mail6=document.getElementById("mail6").value;localStorage.setItem("mail6", mail6);
 var mail7=document.getElementById("mail7").value;localStorage.setItem("mail7", mail7);
 var mail8=document.getElementById("mail8").value;localStorage.setItem("mail8", mail8);
 var mail9=document.getElementById("mail9").value;localStorage.setItem("mail9", mail9);
 var mail10=document.getElementById("mail10").value;localStorage.setItem("mail10", mail10);
 var mail11=document.getElementById("mail11").value;localStorage.setItem("mail11", mail11);
 var mail12=document.getElementById("mail12").value;localStorage.setItem("mail12", mail12);
 alert("Τα e-mails αποθηκεύτηκαν");
});



function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
	let css=newlink.href;
	css=css.substring(css.indexOf("/assets") + 1);
	localStorage.setItem("theme", css);
}


if(localStorage["theme"]){
var theme=localStorage["theme"];
var oldlink = document.getElementsByTagName("link").item(0);
oldlink.href=theme;;
}