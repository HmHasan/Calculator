function insert(num)
{
    $(".disply").val($(".disply").val()+num);
}

function eql()
{
    $(".disply").val(eval($(".disply").val()))
}

function c()
{
    $(".disply").val("");
}

function del()
{
    value=$('.disply').val();
    $('.disply').val(value.substring(0,value.length -1));
}