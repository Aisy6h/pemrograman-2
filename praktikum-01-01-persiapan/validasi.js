function validasi()
{
    let txtKataKunci = document.getElementById("txtKataKunci");
    if (txtKataKunci.value =="")
{
    alert("anda harus mengisi textbox dengan sembarang kata");
}
else
{
    alert("anda harus mengisi textbox dengan kata kunci ="+txtKataKunci.value);

}}