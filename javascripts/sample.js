(function () {
    $(function () {
        var brick, widget_options, conteiner_width;

        $(document).on("click", ".widget .delete", function (event) {
            var $this;
            event.preventDefault();
            event.stopPropagation();
            $this = $(this);
            $this.closest('.brick').remove();
            return $('.widget').widget('layout', widget_options);
        });
        $(document).on("click", ".add", function (event) {
            var text = "<h3 class='h3'>"+$('.input').val()+"</h3>",
                blockColor = '';
                if( $('.input').val() || 0 !== $('.input').val().length) {
                    blockColor = ' block_color';
                }
            event.preventDefault();
            event.stopPropagation();
            brick = "<div class='brick small resizable"+blockColor+"'>"+text+"<div class='delete'>&times;</div></div>";
            $('.widget').append(brick);
            $(".resizable").css({'max-width': conteiner_width-140, "min-width": "60px"}).resizable();
            return $('.widget').widget('layout', widget_options);
        });
        $(document).on("click", ".create", function (event) {
            event.preventDefault();
            event.stopPropagation();
            $('.conteiner').css('display', 'none');
            $('.example').css('display', 'block');
            $('.form-control').each(function(indx, element){
                switch (indx) {
                    case 0:
                        var element_columns =  Math.floor($(element).val()/180)*2;
                        var element_val = $(element).val() >= 200 ? element_columns : '8';
                        widget_options = element_val <= 1 ? 2 : element_val;
                        conteiner_width = $(element).val() - 40;
                        $('.example').css('width', $(element).val() >= 200 ? $(element).val()+'px' : '');
                        $('.widget').widget(widget_options).data('columns', widget_options);
                        break;

                    case 1:
                        $('.example').css('border', '2px solid'+ $(element).val());
                        break;
                }
            });
        });
        $(".resizable").resizable();
         return $('.widget').widget('layout');
    });

}).call(this);
