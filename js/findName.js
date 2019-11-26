$(document).ready(function () {
    var myList = [
        "Bopha",
        "Romdul",
        "Chompey",
        "Chompa",
        "Kolab",
        "Krovan",
        "romchong"
    ]
    $('#search,#btn').attr('disabled', true);
    $('#accept').on('change', function () {
        $('#search, #btn').attr('disabled', false);
        $('#btn').on('click', function () {
            var result = $('#search').val();
            var total = "";
            for (i = 0; i < myList.length; i++) {
                if(myList[i].toUpperCase() == result.toUpperCase()){
                   total = "find :"+result;
                   break;
                }else{
                    total ="can not find in list ";
                }
            }
            $('#found').html(total);
          $('#agree').html("You are agree to search")
        });
    });

})