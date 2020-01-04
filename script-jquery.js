$(function(){
    $('#l1').click(function()
    {
        $('#i1').show();
        $('#i3').hide();
        $('#i2').hide();
    });
    $('#l2').click(function()
    {
        $('#i1').hide();
        $('#i3').hide();
        $('#i2').show();
    });
    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();


    });

});