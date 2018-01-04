/**
 * @author Lorenzo Licalzi
 * @email lorenzo@licalzi.com
 * @create date 2018-01-04 12:19:12
 * @modify date 2018-01-04 12:19:12
 * @desc SCPanel A simple scrolling panel
*/

$(document).ready(function(){
    $(".sc-element").on('click', function () {
        window.location.href = $(this).data("scurl");
    });
})