<HTML>
<HEAD>
<TITLE>Анкета</TITLE>
14
<SCRIPT LANGUAGE="JavaScript">
<!--
 function Complete()
 {
 var szStr="";
 szStr="ФИО: " + frm.name.value +
 "\nТелефон: " + frm.phone.value +
 "\nКоментарий: " + frm.comment.value;
 alert(szStr);
 }
 var items=1;
 function AddItem() {
div=document.getElementById("items");
button=document.getElementById("add");
items++;
newitem="<TD><B>Телефон " + items + ": </B></TD> ";
newitem+="<input type=\"text\" name=\"items" + items;
newitem+="\" size=\"45\">";
newnode=document.createElement("span");
newnode.innerHTML=newitem;

div.insertBefore(newnode,button);
}
// -->
</SCRIPT>
</HEAD>
<BODY>
 <H1>Анкетd</H1>
 <FORM NAME="frm">
 <TABLE>
 <TR>
 <TD><B>ФИО:</B></TD>
 <TD><INPUT NAME="name" TYPE="text" SIZE="15"></TD>
 
 </TR>
 <TR>
 <div ID="items">
 <TD><B>Телефон 1:</B></TD>
 <TD><INPUT id="23" NAME="phone" TYPE="text" SIZE="15"></TD>
 <TD><INPUT  VALUE="+" TYPE="button"onClick="AddItem();" ></TD>
 </div >
 </TR>
 <TR>
 <TD><B>Коментарий:</B></TD>
 <TD><INPUT NAME="comment" TYPE="text" SIZE="20"></TD>
 </TR>
 
 <TR>
 <TD>&nbsp;</TD>
 <TD><INPUT VALUE="Показать" TYPE="button"
 onClick="Complete();"></TD>
 </TR>
 </TABLE>
 </FORM>
</BODY>
</HTML>

