// Marking todo as completed
//$('li').click(function(){
//    $(this).toggleClass('completed');
//})

$('ul').on('click','li', function (){
    $(this).toggleClass('completed');
})

// Removing todo from todolist
$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeout(500,function (){
        $(this).remove();
    })
    event.stopPropagation(); //to stop event bubbling
})

$('input[type="text"]').keypress(function (e) {
    if (e.which === 13) {
        const todoText = $(this).val();
        console.log(todoText);

        const todo= `<li><span><i class="far fa-trash-alt"></i></span> ${todoText}`
    }

})